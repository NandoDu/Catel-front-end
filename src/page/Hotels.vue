<script setup lang="ts">

import HotelList from '../component/Home/HotelList.vue';
import {useAsyncState} from '@vueuse/core';
import {GetHotelListAPI} from '../api/hotelApi';

let {state: hotelsList} = useAsyncState(GetHotelListAPI({}), []);
</script>

<template>
  <div class="hotels-page">
    <HotelList :hotels-list="hotelsList" />
  </div>
  <el-backtop class="returnToTop" />
</template>

<style lang="scss" scoped>
@use "src/util/Other";

.hotels-page {
  @include Other.center-flex;
  flex-direction: column;
}
</style>
