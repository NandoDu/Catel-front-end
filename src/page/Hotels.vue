<script setup lang="ts">

import HotelList from '../component/Home/HotelList.vue';
import {useAsyncState} from '@vueuse/core';
import {GetHotelListAPI} from '../api/hotelApi';
import FilterBar from '../component/Util/FilterBar.vue';
import dateFormat from 'dateformat';
import {ElMessage} from 'element-plus';

let {state: hotelsList} = useAsyncState(GetHotelListAPI({}), []);
const screenHotel = (location: string, start: number, end: number, priceLow: number, priceHigh: number, rate: number, star: string) => {
  GetHotelListAPI({
    filterLocation: location === '酒店名称或商圈' ? undefined : location,
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
</script>

<template>
  <div class="hotels-page">
    <FilterBar
      style="margin-top: 20px;z-index: 0"
      @screen="screenHotel"
    />
    <div style="display: block;margin-top: 30px;">
      <HotelList
        :hotels-list="hotelsList"
        v-if="hotelsList.length !== 0"
      />
      <el-empty
        description="没有符合您要求的酒店哦！"
        v-else
      />
    </div>
  </div>
  <el-backtop class="returnToTop" />
</template>

<style lang="scss" scoped>
@use "src/util/Other";

.hotels-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
