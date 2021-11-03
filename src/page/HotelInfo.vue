<script setup lang="ts">
import PriceContainer from '../component/PriceContainer.vue';
import DatePicker from '../component/datePicker.vue';
import {useTypedStore} from '../store';
import {Ref, ref} from 'vue';
import {RoomInfoO} from '../api/userApi';

const store = useTypedStore();
const roomTypeMap = {'BigBed': '大床房', 'DoubleBed': '双床房', 'Family': '家庭房'};
let roomInfoList: Ref<RoomInfoO> = ref([]);
store.dispatch('room/roomInfo', {id: 1}).then(() => {
  roomInfoList.value = store.getters['room/roomInfo'];
});
</script>
<template>
  <div style="display:flex;flex-direction:column;align-items: center">
    <DatePicker />
    <PriceContainer
      v-for="item in roomInfoList"
      :key="item.id"
      hotel-name="如家酒店"
      :room-type="roomTypeMap[item.roomType]"
      :breakfast="item.breakfast"
      :room-number="item.total"
      :room-price="item.price"
      :max-people="item.peopleMax"
      style="margin-bottom: 7px"
    />
  </div>
</template>


<style src="./HotelInfo.scss" lang="scss" scoped />
<style>
  body{
    background-color: #f5f7fa;
  }
</style>