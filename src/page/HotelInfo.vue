<script setup lang="ts">
import PriceContainer from '../component/HotelInfo/PriceContainer.vue';
import DatePicker from '../component/HotelInfo/datePicker.vue';
import HotelInfo from '../component/HotelInfo/hotelInfo.vue';
import CommentCard from '../component/HotelInfo/CommentCard.vue';
import CommentTotal from '../component/HotelInfo/CommentTotal.vue';
import PriceAnnouncement from '../component/HotelInfo/PriceAnnouncement.vue';
import {useTypedStore} from '../store';
import {Ref, ref} from 'vue';
import {GetCommentO, HotelInfoO, RoomInfoO} from '../api/userApi';
import {useRoute, useRouter} from 'vue-router';

const store = useTypedStore();
const route = useRoute();
const router = useRouter();
const roomTypeMap = {'BigBed': '大床房', 'DoubleBed': '双床房', 'Family': '家庭房'};
let roomInfoList: Ref<RoomInfoO> = ref([]);
let commentList: Ref<GetCommentO> = ref([]);
let hotelInfo = ref() as Ref<HotelInfoO>;
let displayRoomList: Ref<RoomInfoO> = ref([]);
let selectedTime = ref<Date[]>([]);
let roomNum = ref(1);
let hotelId = route.params.id;
const current = ref(new Date());
store.dispatch('room/roomInfo', {id: hotelId}).then(() => {
  roomInfoList.value = store.getters['room/roomInfo'];
  displayRoomList.value = roomInfoList.value;
});
store.dispatch('hotel/getHotelInfo', {id: hotelId}).then(() => {
  hotelInfo.value = store.getters['hotel/hotelInfo'];
  console.log(hotelInfo.value);
});
store.dispatch('hotel/getComment', {id: hotelId}).then(() => {
  commentList.value = store.getters['hotel/commentList'];
  console.log(commentList.value);
});
const changeBreak = (param: number) => {
  console.log('改变早餐状态已接收，值为：' + param);
  let temp = displayRoomList.value;
  if (param === 0) {
    console.log(roomInfoList.value);
    console.log('开始筛选没有早餐的房间');
    displayRoomList.value = [];
    for (let room of temp) {
      if (!room.breakfast)
        displayRoomList.value.push(room);
    }
    console.log(displayRoomList.value);
  } else if (param === 1) {
    displayRoomList.value = [];
    for (let room of temp) {
      if (room.breakfast)
        displayRoomList.value.push(room);
    }
    // displayRoomList.value.filter(x => x.breakfast);
  } else {
    displayRoomList.value = temp;
  }
};
const startSearch = (time: any, peopleNum: number, roomNumber: number, breakfast: number) => {
  if (time !== '') {
    selectedTime.value = time;
  }
  roomNum.value = roomNumber;
  displayRoomList.value = [];
  for (let room of roomInfoList.value) {
    if (room.peopleMax >= peopleNum && room.total >= roomNumber)
      displayRoomList.value.push(room);
  }
  changeBreak(breakfast);
};
const book = (roomId: number) => {
  console.log(roomId);
  if (selectedTime.value.length !== 0)
    router.push({
      path: '/order',
      query: {roomId: roomId, start: selectedTime.value[0].getTime(), end: selectedTime.value[1].getTime(), num: roomNum.value},
    });
  else {
    let time = current.value.getTime();
    time = time + 1000 * 60 * 60 * 24;
    router.push({
      path: '/order',
      query: {roomId: roomId, start: current.value.getTime(), end: time, num: roomNum.value, hotelId: hotelId},
    });
  }
};
</script>
<template>
  <div style="display:flex;flex-direction:column;align-items: center;width: 100%;min-width: 1160px">
    <HotelInfo
      :hotel-name="hotelInfo.name"
      :description="hotelInfo.description"
      :hotel-star="hotelInfo.hotelStar"
    />
    <DatePicker
      @changeBreak="changeBreak"
      @startSearch="startSearch"
    />
    <el-empty
      description="没有符合您要求的房型哦！"
      class="empty-sector"
      v-if="displayRoomList.length === 0"
    />
    <PriceContainer
      v-else
      v-for="item in displayRoomList"
      :key="item.id"
      hotel-name="如家酒店"
      :room-type="roomTypeMap[item.roomType]"
      :breakfast="item.breakfast"
      :room-number="item.total"
      :room-price="item.price"
      :max-people="item.peopleMax"
      :room-id="item.id"
      style="margin-bottom: 5px"
      @book="book"
    />
    <CommentTotal
      :count="commentList.length"
      :rate="hotelInfo.rate"
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
      class="commentCard"
    />
    <PriceAnnouncement />
  </div>
</template>


<style src="./HotelInfo.scss" lang="scss" scoped/>

