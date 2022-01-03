<script setup lang="ts">
import {GetCarouselAPI} from '../../api/userApi';
import {useAsyncState} from '@vueuse/core';
import HotCard from './HotCard.vue';

const {state: cards} = useAsyncState(GetCarouselAPI({limit: 9}), []);

</script>

<template>
  <ElCarousel
    trigger="click"
    height="340px"
    style="width: 500px"
    :autoplay="true"
    arrow="never"
    indicator-position="outside"
  >
    <ElCarouselItem
      v-for="item in 3"
      :key="item"
    >
      <div class="hot-hotel-col">
        <div
          v-for="(card, index) in cards.slice((item-1)*3, item*3)"
          :key="card.id"
        >
          <HotCard
            :card="card"
            :rank="index+(item-1)*3"
          />
        </div>
      </div>
    </ElCarouselItem>
  </ElCarousel>
</template>

<style lang="scss" scoped>
.hot-hotel-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
  padding: 0 0 5px;
}
</style>
