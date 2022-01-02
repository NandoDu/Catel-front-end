<script setup lang="ts">
import {CouponListItemO} from '../api/orderApi';
import {CircleCheck, CircleCheckFilled} from '@element-plus/icons';

defineProps<{ coupon: CouponListItemO, index: number, activeIndex: number }>();
const emit = defineEmits(['select']);
const selectCoupon = (currentIndex: number, activeIndex: number, couponId: number) => {
  emit('select', currentIndex, activeIndex, couponId);
};
</script>
<template>
  <div
    class="coupon-card-container"
    @click="selectCoupon(index,activeIndex,coupon.id)"
  >
    <div class="coupon-content">
      <div class="coupon-ti-dis">
        <h3>
          {{ coupon.name }}
        </h3>
        <p>
          {{ coupon.condition }}
        </p>
      </div>
      <div class="coupon-amount">
        {{ '￥' + coupon.amount }}元
      </div>
      <div
        class="coupon-unselect"
        v-if="activeIndex === index"
      >
        <el-icon
          :size="40"
          :color="'#0086f6'"
        >
          <circle-check-filled />
        </el-icon>
      </div>
      <div
        class="coupon-unselect"
        v-else
      >
        <el-icon
          :size="40"
        >
          <circle-check />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coupon-card-container {
  width: 600px;
  height: 100px;
  background-color: #f5f7fa;
  margin-top: 20px;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;
}

.coupon-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 600px;
  height: 100px;
}

.coupon-ti-dis {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  /*flex-grow: 4;*/
  width: 350px;
}


.coupon-amount {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  color: #ff9500;
  font-size: 24px;
  font-weight: 600;
}

h3 {
  margin: 0;
}

.coupon-unselect {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
}
</style>
