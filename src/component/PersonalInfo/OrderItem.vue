<script setup lang="ts">

import {OrderItemInfo} from '../../api/orderApi';

defineProps<{
  orderInfo: { index: number } | OrderItemInfo
  ifOperationShow: boolean,
}>();

const emit = defineEmits<{
  (e: 'toggle', index: number): void
}>();

</script>

<template>
  <div
    class="orderList"
  >
    <div
      class="orderInfoCard"
      :class="{'orderInfoFirst' : orderInfo.index === 0}"
      @click="emit('toggle', orderInfo.index)"
    >
      <div class="orderState">
        {{ orderInfo.orderState }}
      </div>
      <div class="separatingLine" />
      <div class="orderHotelNameAndAddress">
        <div class="orderHotelName">
          {{ orderInfo.hotelName }}
        </div>
        <div class="orderHotelAddress">
          <img
            src="src/asset/locationIcon.png"
            style="width: 15px; height: 15px; align-self: center"
            alt="Location Icon"
          >
          <div class="orderHotelAddressText">
            {{ orderInfo.hotelAddress }}
          </div>
        </div>
      </div>
      <div class="orderDateInfo">
        <div class="orderDateInInfo">
          <div class="orderDateInIcon">
            住
          </div>
          <div class="orderDateIn">
            {{ orderInfo.checkInDate }}
          </div>
        </div>
        <div class="orderDateOutInfo">
          <div class="orderDateOutIcon">
            离
          </div>
          <div class="orderDateOut">
            {{ orderInfo.checkOutDate }}
          </div>
        </div>
      </div>
      <div class="orderPrice">
        ¥ {{ orderInfo.price }}
      </div>
    </div>
    <div
      class="orderOperation"
      v-show="ifOperationShow"
    >
      <div class="operationOpt">
        <div class="checkOperation">
          <div class="checkIcon">
            A
          </div>
          <div class="checkText">
            查看
          </div>
        </div>
        <div
          class="cancelOperation"
          v-if="orderInfo.orderState!=='Finished'"
        >
          <div class="cancelIcon">
            B
          </div>
          <div class="cancelText">
            撤销
          </div>
        </div>
        <div class="reviewOperation">
          <div class="reviewIcon">
            C
          </div>
          <div class="reviewText">
            评价
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.orderInfoCard {
  height: 77px;
  background-color: #f6f6f6;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
}

.orderState {
  align-self: center;
  margin-left: 10px;
  font-size: 15px;
  color: grey;
}

.separatingLine {
  width: 1px;
  height: 50px;
  background-color: lightgrey;
  align-self: center;
  margin-left: 10px;
}

.orderHotelNameAndAddress {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.orderHotelName {
  margin-top: 10px;
  width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #06aebd;
}

.orderHotelAddress {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
}

.orderHotelAddressText {
  width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #999999;
  font-size: 14px;
}

.orderDateInfo {
  margin-left: 25px;
  display: flex;
  flex-direction: column;
}

.orderDateInInfo {
  display: flex;
  flex-direction: row;
}

.orderDateOutInfo {
  display: flex;
  flex-direction: row;
}

.orderDateIn {
  margin-top: 10px;
  margin-left: 5px;
}

.orderDateInIcon {
  margin-top: 10px;
  background-color: orange;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: white;
  font-size: 12px;
}

.orderDateOut {
  margin-top: 10px;
  margin-left: 5px;
}

.orderDateOutIcon {
  margin-top: 10px;
  background-color: dodgerblue;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: white;
  font-size: 12px;
}

.orderPrice {
  margin-left: 45px;
  align-self: center;
  font-size: 20px;
}

.orderOperation {
  width: 100%;
  height: 30px;
  //background-color: white;
  //border-top: orange 1px solid;
  display: flex;
  flex-direction: row;
}

.checkOperation {
  display: flex;
  flex-direction: row;
  margin-left: 100px;
  cursor: pointer;
}

.checkIcon {
  background-color: green;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  color: white;
  align-self: center;
  font-weight: bolder;
  font-size: 15px;
}

.checkText {
  align-self: center;
  margin-left: 5px;
  margin-top: -2px;
  color: green;
  font-weight: bolder;
  font-size: 15px;
}

.cancelOperation {
  display: flex;
  flex-direction: row;
  cursor: pointer;
}

.cancelIcon {
  background-color: red;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  color: white;
  align-self: center;
  font-weight: bolder;
  font-size: 15px;
}

.cancelText {
  align-self: center;
  margin-left: 5px;
  margin-top: -2px;
  color: red;
  font-weight: bolder;
  font-size: 15px;
}

.reviewOperation {
  display: flex;
  flex-direction: row;
  margin-right: 100px;
  cursor: pointer;
}

.reviewIcon {
  background-color: dodgerblue;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  color: white;
  align-self: center;
  font-weight: bolder;
  font-size: 15px;
}

.reviewText {
  align-self: center;
  margin-left: 5px;
  margin-top: -2px;
  color: dodgerblue;
  font-weight: bolder;
  font-size: 15px;
}

.operationOpt {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
}
</style>
