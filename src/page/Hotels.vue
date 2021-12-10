<script setup lang="ts">

import HotelList from '../component/Home/HotelList.vue';
</script>

<template>
  <div class="hotels-page">
    <HotelList />
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
