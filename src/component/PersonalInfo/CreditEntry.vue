<script setup lang="ts">
import {CreditEntry} from '../../api/userApi';
import {computed} from 'vue';
import BiggerButton from '../Header/BiggerButton.vue';

const prop = defineProps<{
  record: CreditEntry
  index: number
}>();

const up = computed(() => prop.record.creditDelta > 0);
const color = computed(() => up.value ? 'green' : 'red');
const classes = computed(() => ['credit-entry', up.value ? 'up' : 'down']);

console.log(prop.record);

</script>

<template>
  <section :class="classes">
    <div class="title">
      订单 #{{ record.orderId }}
    </div>

    <span class="content">
      信用值{{ up ? '增加' : '降低' }}
      {{ Math.abs(record.creditDelta) }}
      点
    </span>

    <div class="more">
      <BiggerButton
        text="详细信息"
        :color="color"
        size="small"
        @click="$router.push(`/order-detail/${record.orderId}`)"
      />
    </div>

  </section>
</template>

<style lang="scss" scoped>
@use "./src/util/Other";

.credit-entry {
  @include Other.center-flex;
  border-radius: 15px;
  padding: 10px 20px;

  &.up {
    background-color: #0d84ff;
  }

  &.down {
    background-color: #f8dcd4;
  }

  .title {
    font-size: 2.4rem;
    width: 25%;
    min-width: 120px;
  }

  .content {
    width: 40%;
    flex-grow: 1;
  }

}

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
