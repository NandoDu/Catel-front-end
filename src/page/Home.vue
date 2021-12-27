<script setup lang="ts">
import {reactive, ref} from 'vue';
import HotCarousel from '../component/Home/HotCarousel.vue';
import HotelList from '../component/Home/HotelList.vue';
import FilterBar from "../component/Util/FilterBar.vue";
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
    <div class="recommendArea">
      <h3 class="recommendTxt">
        热门推荐
      </h3>
      <img
        src="/src/asset/budalagong.png"
        class="recommendPng"
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
    <FilterBar></FilterBar>
    <h3>
      精选酒店
    </h3>
    <HotelList />
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
            :src="brand['img']"
            style="width: 90%; border-radius: 10px; padding-top: 5px; padding-bottom: 5px;"
          >
        </div>
      </div>
    </div>
  </div>
  <el-backtop class="returnToTop" />
</template>

<style src="./Home.scss" lang="scss" scoped />
