<script setup lang="ts">
import {CreditEntry} from '../../api/userApi';

const prop = defineProps<{
  record: CreditEntry
  index: number
}>();

console.log(prop.record);

</script>

<template>
  <div
    class="creditRecordList"
  >
    <div
      class="creditRecordCard"
      :class="{'creditRecordFirst' : index === 0}"
      v-if="record.orderState !== 'Available'"
    >
      <div
        class="addCreditIcon"
        v-if="record.orderState === 'Finished'"
      >
        <img
          class="addCreditImg"
          src="src/asset/shangzhang.png"
        >
      </div>
      <div
        class="addCreditNum"
        v-show="record.orderState === 'Finished'"
      >
        +{{ record.creditDelta }}
      </div>
      <div
        class="minusCreditIcon"
        v-show="record.orderState === 'Canceled'"
      >
        <img
          class="minusCreditImg"
          src="src/asset/goDown.png"
        >
      </div>
      <div
        class="minusCreditNum"
        v-show="record.orderState === 'Canceled'"
      >
        {{ record.creditDelta }}
      </div>
      <div class="recordSeparatingLine" />
      <div class="recordHotelNameAndAddress">
        <div class="recordHotelName">
          {{ record.hotelName }}
        </div>
        <div class="recordHotelAddress">
          <img
            src="src/asset/locationIcon.png"
            style="width: 13px; height: 13px; align-self: center"
          >
          <div class="recordHotelAddressText">
            {{ record.hotelAddress }}
          </div>
        </div>
      </div>
      <div class="recordDateInfo">
        <div class="recordDateInInfo">
          <div class="recordDateInIcon">
            住
          </div>
          <div class="recordDateIn">
            {{ record.checkInDate }}
          </div>
        </div>
        <div class="recordDateOutInfo">
          <div class="recordDateOutIcon">
            离
          </div>
          <div class="recordDateOut">
            {{ record.checkOutDate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.creditRecordCard {
  width: 100%;
  height: 56px;
  background-color: #f6f7f7;
  margin-top: 20px;
  align-self: center;
  display: flex;
  flex-direction: row;
}

.creditRecordFirst {
  margin-top: 1px;
}

.addCreditIcon {
  align-self: center;
  margin-left: 20px;
}

.addCreditImg {
  width: 25px;
  height: 25px;
  margin-top: 5px;
}

.addCreditNum {
  align-self: center;
  color: red;
  width: 70px;
}

.minusCreditIcon {
  align-self: center;
  margin-left: 20px;
}

.minusCreditImg {
  width: 25px;
  height: 25px;
  margin-top: 5px;
}

.minusCreditNum {
  align-self: center;
  color: green;
  width: 70px;
}

.recordHotelNameAndAddress {
  display: flex;
  flex-direction: column;
  margin-left: 25px;
}

.recordHotelName {
  width: 160px;
  margin-top: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: black;
  opacity: .7;
  font-size: 14px;
}

.recordHotelAddress {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
}

.recordHotelAddressText {
  width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #999999;
  font-size: 12px;
}

.recordDateInfo {
  margin-left: 35px;
  display: flex;
  flex-direction: column;
}

.recordDateInInfo {
  display: flex;
  flex-direction: row;
}

.recordDateOutInfo {
  display: flex;
  flex-direction: row;
}

.recordDateIn {
  margin-top: 5px;
  margin-left: 5px;
  font-size: 14px;
}

.recordDateInIcon {
  margin-top: 5px;
  background-color: orange;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  color: white;
  font-size: 11px;
}

.recordDateOut {
  margin-top: 5px;
  margin-left: 5px;
  font-size: 14px;
}

.recordDateOutIcon {
  margin-top: 5px;
  background-color: dodgerblue;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  color: white;
  font-size: 11px;
}

.recordSeparatingLine {
  width: 1px;
  height: 38px;
  background-color: lightgrey;
  align-self: center;
  margin-left: 15px;
}

</style>
