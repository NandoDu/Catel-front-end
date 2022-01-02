<script setup lang="ts">
import {CouponListItemO} from '../api/orderApi';

defineProps<{ coupon: CouponListItemO }>();
</script>
<template>
  <span>
    {{ coupon.name }}
  </span>
  <span>
    {{ coupon.condition }}
  </span>
  <span>
    {{ coupon.amount }}
  </span>
</template>

<style scoped>

</style>