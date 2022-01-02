<script setup lang="ts">
import {CouponListItemO} from '../api/orderApi';
import CouponCard from './couponCard.vue';
import {ref} from 'vue';

defineProps<{ couponList: CouponListItemO[] }>();
const couponList = ref([{id: 1, type: 'Multiple', name: '你好', condition: '满减优惠券', amount: 100}, {
  id: 1,
  type: 'Multiple',
  name: '你好',
  condition: '满减优惠券',
  amount: 200,
}, {id: 1, type: 'Multiple', name: '你好', condition: '满减优惠券', amount: 300}, {
  id: 1,
  type: 'Multiple',
  name: '你好',
  condition: '满减优惠券',
  amount: 400,
}]);
</script>
<template>
  <div
    v-for="(coupon, index) in couponList"
    :key="index"
  >
    <CouponCard :coupon="coupon" />
  </div>
</template>

<style scoped>

</style>