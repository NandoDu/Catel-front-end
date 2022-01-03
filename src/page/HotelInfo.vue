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
import {roomTypeMap} from '../util/globalMap';
import {ElMessage} from 'element-plus';
import {ScreenRoomAPI} from '../api/hotelApi';
import dateFormat from 'dateformat';

const store = useTypedStore();
const route = useRoute();
const router = useRouter();
let roomInfoList: Ref<RoomInfoO> = ref([]);
let commentList: Ref<GetCommentO> = ref([]);
let hotelInfo = ref() as Ref<HotelInfoO>;
let displayRoomList: Ref<RoomInfoO> = ref([]);
let selectedRoomList: Ref<RoomInfoO> = ref([]);
let selectedTime = ref<Date[]>([]);
let roomNum = ref(1);
let hotelId = route.params.id;
let userMaxRoomNum = ref(0);
let userMaxPeoplePerRoom = ref(0);
const checkMaxNum = () => {
  let roomMax = 0;
  let peopleMax = 0;
  for (let room of roomInfoList.value) {
    if (room.total > roomMax)
      roomMax = room.total;
    if (room.peopleMax > peopleMax)
      peopleMax = room.peopleMax;
  }
  userMaxPeoplePerRoom.value = peopleMax;
  userMaxRoomNum.value = roomMax;
};
const current = ref(new Date());
const getDone = () => {
  roomInfoList.value = hotelInfo.value.rooms;
  displayRoomList.value = roomInfoList.value;
  selectedRoomList.value = roomInfoList.value;
  checkMaxNum();
};
// const {state: hotelInfo} = useAsyncState(HotelInfoAPI({id: +(hotelId)}), {
//   id: 0,
//   name: '加载中',
//   address: '加载中',
//   bizRegion: '加载中',
//   hotelStar: 'Five',
//   rate: 5,
//   description: '加载中',
//   phoneNumber: '加载中',
//   landscape: '',
//   portrait: '',
//   creditBound: 100,
//   announcement: '加载中',
//   rooms: [],
//   rateDist: [],
// }, getDone);


store.dispatch('hotel/getHotelInfo', {id: hotelId}).then(() => {
  hotelInfo.value = store.getters['hotel/hotelInfo'];
  getDone();
});
store.dispatch('hotel/getComment', {id: hotelId}).then(() => {
  commentList.value = store.getters['hotel/commentList'];
});
const changeBreakfast = (param: number) => {
  if (param === 0) {
    displayRoomList.value = [];
    for (let room of selectedRoomList.value) {
      if (!room.breakfast)
        displayRoomList.value.push(room);
    }
  } else if (param === 1) {
    displayRoomList.value = [];
    for (let room of selectedRoomList.value) {
      if (room.breakfast)
        displayRoomList.value.push(room);
    }
  } else {
    displayRoomList.value = selectedRoomList.value;
  }
  ElMessage.success('早餐筛选成功');
};
const changeBreakfastWithoutMessage = (param: number) => {
  if (param === 0) {
    displayRoomList.value = [];
    for (let room of selectedRoomList.value) {
      if (!room.breakfast)
        displayRoomList.value.push(room);
    }
  } else if (param === 1) {
    displayRoomList.value = [];
    for (let room of selectedRoomList.value) {
      if (room.breakfast)
        displayRoomList.value.push(room);
    }
  } else {
    displayRoomList.value = selectedRoomList.value;
  }
};
const startSearch = (time: any, peopleNum: number, roomNumber: number, breakfast: number) => {
  let temp = roomInfoList.value;
  if (time !== '' && !time) {
    selectedTime.value = time;
  }
  roomNum.value = roomNumber;
  if (selectedTime.value.length !== 0) {
    ScreenRoomAPI({
      id: hotelInfo.value.id,
      inDate: dateFormat(selectedTime.value[0], 'mm/dd/yyyy'),
      outDate: dateFormat(selectedTime.value[1], 'mm/dd/yyyy'),
      roomNumber: roomNumber,
    }).then((res) => {
      temp = res;
    }).catch(() => {
      console.log('后端报错');
    });
  } else {
    let start = current.value.getTime();
    let end = start + 1000 * 60 * 60 * 24;
    if (current.value.getHours() >= 14) {
      start += 1000 * 60 * 60 * 24;
      end = start + 1000 * 60 * 60 * 24;
    }
    ScreenRoomAPI({
      id: hotelInfo.value.id,
      inDate: dateFormat(start, 'mm/dd/yyyy'),
      outDate: dateFormat(end, 'mm/dd/yyyy'),
      roomNumber: roomNumber,
    }).then((res) => {
      temp = res;
      selectedRoomList.value = [];
      for (let room of temp) {
        if (room.peopleMax >= peopleNum)
          selectedRoomList.value.push(room);
      }
      changeBreakfastWithoutMessage(breakfast);
      ElMessage.success('房型筛选成功！');
    }).catch(() => {
      console.log('后端报错');
    });
  }
};
const book = (roomId: number) => {
  if (selectedTime.value.length !== 0)
    router.push({
      path: '/order',
      query: {
        roomId: roomId,
        start: selectedTime.value[0].getTime(),
        end: selectedTime.value[1].getTime(),
        num: roomNum.value,
        hotelId: hotelId,
      },
    });
  else {
    let start = current.value.getTime();
    let end = start + 1000 * 60 * 60 * 24;
    if (current.value.getHours() >= 14) {
      start += 1000 * 60 * 60 * 24;
      end = start + 1000 * 60 * 60 * 24;
    }
    router.push({
      path: '/order',
      query: {roomId: roomId, start: start, end: end, num: roomNum.value, hotelId: hotelId},
    });
  }
};
</script>
<template>
  <div style="display:flex;flex-direction:column;align-items: center;width: 100%;min-width: 1160px">
    <HotelInfo
      :hotel-name="hotelInfo?.name"
      :description="hotelInfo?.description"
      :hotel-star="hotelInfo?.hotelStar"
      :address="hotelInfo?.address"
      :rate="hotelInfo?.rate"
      :comment-count="commentList?.length"
      :announcement="hotelInfo?.announcement"
      :biz-region="hotelInfo?.bizRegion"
      :hotel-landscape="hotelInfo?.landscape"
      :hotel-portrait="hotelInfo?.portrait"
    />
    <DatePicker
      @changeBreak="changeBreakfast"
      @startSearch="startSearch"
      :user-max-people-per-room="userMaxPeoplePerRoom"
      :user-max-room-num="userMaxRoomNum"
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
      :rate="hotelInfo?.rate"
      :rate-dist="hotelInfo?.rateDist"
    />
    <CommentCard
      v-for="item in commentList"
      :key="item.id"
      :avatar="item.avatar"
      :username="item.username"
      :content="item.content"
      :title="item.title"
      :score="item.score"
      :hotel-name="hotelInfo?.name"
      class="commentCard"
    />
    <PriceAnnouncement />
  </div>
</template>


<style src="./HotelInfo.scss" lang="scss" scoped/>

