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
store.dispatch('hotel/getHotelInfo', {id: hotelId}).then(() => {
  hotelInfo.value = store.getters['hotel/hotelInfo'];
  roomInfoList.value = hotelInfo.value.rooms;
  displayRoomList.value = roomInfoList.value;
  selectedRoomList.value = roomInfoList.value;
  checkMaxNum();
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
};
const startSearch = (time: any, peopleNum: number, roomNumber: number, breakfast: number) => {
  const temp = roomInfoList.value;
  if (time !== '') {
    selectedTime.value = time;
  }
  roomNum.value = roomNumber;
  selectedRoomList.value = [];
  for (let room of temp) {
    if (room.peopleMax >= peopleNum && room.total >= roomNumber)
      selectedRoomList.value.push(room);
  }
  changeBreakfast(breakfast);
};
const book = (roomId: number) => {
  console.log(roomId);
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
      :hotel-name="hotelInfo?.name"
      :description="hotelInfo?.description"
      :hotel-star="hotelInfo?.hotelStar"
      :address="hotelInfo?.address"
      :rate="hotelInfo?.rate"
      :comment-count="commentList?.length"
      :announcement="hotelInfo?.announcement"
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

