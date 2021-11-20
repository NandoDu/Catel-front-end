<script setup lang="ts">
import PriceContainer from '../component/PriceContainer.vue';
import DatePicker from '../component/datePicker.vue';
import HotelInfo from '../component/hotelInfo.vue'; 
import CommentCard from '../component/CommentCard.vue';
import {useTypedStore} from '../store';
import {Ref, ref} from 'vue';
import {GetCommentO, HotelInfoO, RoomInfoO} from '../api/userApi';
import {useRoute} from 'vue-router';

const store = useTypedStore();
const route = useRoute();
const roomTypeMap = {'BigBed': '大床房', 'DoubleBed': '双床房', 'Family': '家庭房'};
let roomInfoList: Ref<RoomInfoO> = ref([]);
let commentList: Ref<GetCommentO> = ref([]);
let hotelInfo = ref() as Ref<HotelInfoO>;
let displayRoomList: Ref<RoomInfoO> = ref([]);
let hotelId = route.params.id;
store.dispatch('room/roomInfo', {id: hotelId}).then(() => {
  roomInfoList.value = store.getters['room/roomInfo'];
  displayRoomList.value = roomInfoList.value;
});
store.dispatch('hotel/getHotelInfo', {id: hotelId}).then(() => {
  hotelInfo.value = store.getters['hotel/hotelInfo'];
  console.log(hotelInfo.value);
});
store.dispatch('hotel/getComment', {id: hotelId}).then(()=>{
  commentList.value = store.getters['hotel/commentList'];
  console.log(commentList.value);
});
const changeBreak = (param: number) => {
  console.log('改变早餐状态已接收，值为：' + param);
  if (param === 0) {
    console.log(roomInfoList.value);
    console.log('开始筛选没有早餐的房间');
    displayRoomList.value = [];
    for (let room of roomInfoList.value) {
      if (!room.breakfast)
        displayRoomList.value.push(room);
    }
    console.log(displayRoomList.value);
  } else if (param === 1) {
    displayRoomList.value = [];
    for (let room of roomInfoList.value) {
      if (room.breakfast)
        displayRoomList.value.push(room);
    }
    // displayRoomList.value.filter(x => x.breakfast);
  } else {
    displayRoomList.value = roomInfoList.value;
  }
};
</script>
<template>
  <div style="display:flex;flex-direction:column;align-items: center">
    <HotelInfo
      :info="hotelInfo"
    />
    <DatePicker
      @changeBreak="changeBreak"
      id="chooseRoom"
    />
    <PriceContainer
      v-for="item in displayRoomList"
      :key="item.id"
      hotel-name="如家酒店"
      :room-type="roomTypeMap[item.roomType]"
      :breakfast="item.breakfast"
      :room-number="item.total"
      :room-price="item.price"
      :max-people="item.peopleMax"
      style="margin-bottom: 7px"
    />
    <CommentCard
      v-for="item in commentList"
      :key="item.id"
      :avatar="item.avatar"
      :username="item.username"
      :content="item.content"
      :title="item.title"
      :score="item.score"
      :hotel-name="hotelInfo.name"
    />
  </div>
</template>


<style src="./HotelInfo.scss" lang="scss" scoped/>
<style>
body {
  background-color: #f5f7fa;
}
</style>