<script setup lang="ts">
import {reactive} from 'vue';
import HotCarousel from '../component/Home/HotCarousel.vue';
import HotelList from '../component/Home/HotelList.vue';
import FilterBar from '../component/Util/FilterBar.vue';
import {useAsyncState} from '@vueuse/core';
import {GetHotelListAPI, luckyAPI} from '../api/hotelApi';
import router from '../router';
import dateFormat from 'dateformat';
import {ElMessage} from 'element-plus';

const {state: luckyInfo} = useAsyncState(luckyAPI, null);
let {state: hotelsList} = useAsyncState(GetHotelListAPI({}), []);
const screenHotel = (location: string, start: number, end: number, priceLow: number, priceHigh: number, rate: number, star: string) => {
  GetHotelListAPI({
    filterLocation: location === '酒店商圈' ? undefined : location,
    filterRate: rate === 6 ? undefined : rate,
    filterInDate: start === 0 ? undefined : dateFormat(start, 'mm/dd/yyyy'),
    filterOutDate: end === 0 ? undefined : dateFormat(end, 'mm/dd/yyyy'),
    filterStars: star === '' ? undefined : star,
    filterPriceLower: priceLow === 0 ? undefined : priceLow,
    filterPriceUpper: priceHigh === 999999 ? undefined : priceHigh,
  }).then((res) => {
    const num = res.length;
    if (num === 0)
      ElMessage.warning('很抱歉，没有找到符合条件的酒店');
    else
      ElMessage.success('已成功筛选出' + num + '所符合条件的酒店');
    hotelsList.value = res;
  }).catch(() => {
    ElMessage.error('backend failure');
    console.log('后端报错');
  },
  );
};
const lucky = () => {
  router.push(`/hotel/${luckyInfo.value?.id}`);
};
const brands = reactive([
  {'img': 'https://m3.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-U12gVTiIAggEAAAlmo1PkUgAAAKEQGqxBcAACWy515.png'},
  {'img': 'https://m2.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-TF2gVTqICr8MAAAQXjSoO8sAAAKEAP_50cAABB2471.png'},
  {'img': 'https://m3.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-TF2gVTmIE5hbAAAzrZwaj60AAAKEQGv8VsAADPF375.png'},
  {'img': 'https://m1.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-TF2gVTmIKGtUAAA0SHfakcoAAAKEQGyuxEAADRg884.png'},
  {'img': 'https://m3.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-U12gVTiIJLhqAABHUxpcROAAAAKEQGvUO0AAEdr391.png'},
  {'img': 'https://m4.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-U12gVTmIW3uiAAAZr6LlqoQAAAKEQGy73EAABnH805.png'},
  {'img': 'https://m1.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-TF2gVTmIWGXpAAAnixokL50AAAKEQGvmFgAACej539.png'},
  {'img': 'https://m.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-U12gVTmIWyQGAAAxSLvM0TwAAAKEQGvv_sAADFg111.png'},
  {'img': 'https://m3.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-TF2gVTiICK0PAABGEvl7RNoAAAKEQGqfe0AAEYq389.png'},
  {'img': 'https://m1.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-U12gVTiIDmD5AABHEZQvmz8AAAKEQGuB-EAAEcp009.png'},
]);
</script>

<template>
  <div class="displayArea">
    <div
      class="recommendArea"
    >
      <h3 class="recommendTxt">
        手气不错
      </h3>
      <img
        alt="luckyPic"
        :src="luckyInfo?.landscape"
        class="recommendPng"
        @click="lucky"
      >
    </div>
    <div>
      <h3 class="recommendTxt">
        酒店热销榜
      </h3>
      <div class="block">
        <HotCarousel />
      </div>
    </div>
  </div>
  <div class="hotelArea">
    <FilterBar
      @screen="screenHotel"
    />
    <h3>
      精选酒店
    </h3>
    <HotelList
      :hotels-list="hotelsList"
      v-if="hotelsList.length !== 0"
    />
    <el-empty
      description="没有符合您要求的酒店哦！"
      v-else
    />
  </div>
  <div class="cooperateArea">
    <h3>
      合作品牌
    </h3>
    <div class="brandList">
      <div
        v-for="(brand, index) in brands"
        :key="brand.img"
      >
        <div
          class="brandItem"
          :class="{'brandItemHead': index === 0}"
        >
          <img
            alt="img"
            :src="brand['img']"
            style="width: 90%; border-radius: 10px; padding-top: 5px; padding-bottom: 5px;"
          >
        </div>
      </div>
    </div>
  </div>
  <el-backtop class="returnToTop" />
</template>

<style src="./Home.scss" lang="scss" scoped/>
