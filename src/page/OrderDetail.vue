<script setup lang="ts">
import {ref, computed, reactive, watch} from 'vue';
import {userResidentsAPI} from '../api/userApi';
import {BookHotelAPI, PreviewHotelAPI} from '../api/orderApi';
import {useAsyncState} from '@vueuse/core';
import {useTypedStore} from '../store';
import dateFormat from 'dateformat';
import {useRoute, useRouter} from 'vue-router';
import {ElMessage} from 'element-plus';
import {BriefHotelInfoAPI, GetRoomInfoAPI} from '../api/hotelApi';
import {hotelStarMap, roomTypeMap} from '../util/globalMap';
import CouponCard from '../component/couponCard.vue';
import {disabledDate} from '../util/globalMap';

const selectedCoupon = ref(-1);
const couponChosen = ref<number[]>([]);
const store = useTypedStore();
const id = store.getters['user/userId'];
let router = useRouter();
let route = useRoute();
let hotelId = ref(0);
let roomId = ref(0);
let maxRoomNum = ref(0);

const formatDate = (date: Date) => dateFormat(date, 'mm/dd/yyyy');

let orderArgs = reactive({
  residents: [],
  startDate: new Date(+(route.query.start as string)),
  endDate: new Date(+(route.query.end as string)),
});

const getUrlParams = () => {
  maxRoomNum.value = route.query.num as unknown as number;
  roomId.value = route.query.roomId as unknown as number;
  hotelId.value = route.query.hotelId as unknown as number;
};

getUrlParams();
const {state: hotelInfo} = useAsyncState(BriefHotelInfoAPI({id: hotelId.value}), null);
const {state: singleRoomInfo} = useAsyncState(GetRoomInfoAPI({id: roomId.value}), {
  id: 0,
  roomType: 'loading',
  price: 0,
  total: 0,
  peopleMax: 0,
  breakfast: false,
});
const {state: personInfoList} = useAsyncState(userResidentsAPI({id}).then(r => {
  console.log(r);
  return r;
}), []);
let selectedResident = ref<string[]>([]);

let dataRange = ref<Date[]>([orderArgs.startDate, orderArgs.endDate]);

watch(dataRange, () => {
  if (!dataRange.value) {
    return;
  }
  orderArgs.startDate = dataRange.value[0];
  orderArgs.endDate = dataRange.value[1];
});

const showPersonInfo = () => {
  let personNames = [{value: false, label: '', id: 0}];
  personNames.pop();
  for (let i = 0; i < personInfoList.value.length; i++) {
    const info = personInfoList.value[i];
    let temp = {value: false, label: info.realName, id: info.id};
    personNames.push(temp);
  }
  return personNames;
};
let names = computed(showPersonInfo);
const getArgs = () => {
  return {
    userId: id,
    hotelId: hotelId.value,
    checkInDate: formatDate(orderArgs.startDate),
    checkOutDate: formatDate(orderArgs.endDate),
    configId: roomId.value,
    residents: selectedResident.value,
    selectedCoupons: couponChosen.value,
  };
};

let {state: preview} = useAsyncState(PreviewHotelAPI(getArgs()), null);

const callPrice = async () => {
  try {
    const r = await PreviewHotelAPI(getArgs());
    console.log(r);
    preview.value = r;
  } catch (e) {
    console.log('后端报错');
  }
};

const selectCoupon = (selectedIndex: number, activeIndex: number, couponId: number) => {
  if (activeIndex === selectedIndex) {
    selectedCoupon.value = -1;
    couponChosen.value = [];
  } else {
    selectedCoupon.value = selectedIndex;
    couponChosen.value = [couponId];
  }
  callPrice();
};

const book = async () => {
  try {
    const result = await BookHotelAPI(getArgs());
    ElMessage.success({message: '下单成功,系统将在1.5s后自动跳转订单详情', center: true});
    setTimeout(() => router.push(`/order-detail/${result}`), 1500);
  } catch (_) {
    console.log('后端错误');
  }
};

</script>

<template>
  <div class="main">
    <div class="container">
      <div class="order_container">
        <div class="details">
          <div class="room_info">
            <div class="hotel_name">
              <div class="hotel_name_content">
                {{ hotelInfo?.name }}
              </div>
              <div
                class="star"
                v-for="i in Array(hotelStarMap[hotelInfo?.star])"
                :key="i"
              >
                <i class="el-icon-star-on" />
              </div>
            </div>
            <div class="address">
              <div style="margin-right: 8px;font-size: 16px">
                <i class="el-icon-location" />
              </div>
              <div style="color:#0f294d;font-size: 14px;font-weight: 400;letter-spacing: 0">
                {{ hotelInfo?.address }}
              </div>
            </div>
            <div class="room_name">
              {{ roomTypeMap[singleRoomInfo.roomType] }}
            </div>
            <div
              class="facility"
              style="display: flex;align-items: center"
            >
              <div style="display: flex;align-items: center">
                <div class="facility_item">
                  <div style="margin-right: 8px;font-size: 16px">
                    <i class="el-icon-s-home" />
                  </div>
                  <div class="text">
                    <span>房间最多容纳{{ singleRoomInfo.peopleMax }}人</span>
                  </div>
                </div>
                <div class="facility_item">
                  <div style="margin-right: 8px;font-size: 16px">
                    <i class="el-icon-s-order" />
                  </div>
                  <div class="text">
                    <span>目前剩余{{ singleRoomInfo.total }}间</span>
                  </div>
                </div>
                <div class="facility_item">
                  <div style="margin-right: 8px;font-size: 16px">
                    <i class="el-icon-dish-1" />
                  </div>
                  <div class="text">
                    <span>{{ singleRoomInfo.breakfast ? '有' : '无' }}早餐</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="divide" />
            <div class="book_note">
              <div
                class="title"
                style="display: flex;align-items: center;justify-content: space-between;"
              >
                <div class="text">
                  订房必读
                </div>
              </div>
              <div
                class="note_item"
                style="display: flex;margin-top: 8px"
              >
                <div class="note_icon">
                  <i class="el-icon-s-promotion" />
                </div>
                <div class="text">
                  住宿提供方仅能接待中国（含港澳台）客人入住
                </div>
              </div>
              <div
                class="note_item"
                style="display: flex;margin-top: 8px"
              >
                <div class="note_icon">
                  <i class="el-icon-s-promotion" />
                </div>
                <div class="text">
                  为贯彻落实《中国生活垃圾管理条例》相关规定，推进生活垃圾源头减量，国家文化和旅游局特制定《关于城市旅游住宿业不主动提供客房一次性日用品的实施意见》，2019年7月1日起，国内旅游住宿业将不再主动提供牙刷、梳子、浴擦、剃须刀、指甲锉、鞋擦这些一次性日用品。若需要可咨询酒店。
                </div>
              </div>
              <div
                class="note_item"
                style="display: flex;margin-top: 8px"
              >
                <div class="note_icon">
                  <i class="el-icon-s-promotion" />
                </div>
                <div class="text">
                  该房型允许携带儿童入住。
                </div>
              </div>
            </div>
            <div class="divide" />
            <ul
              class="warning"
              style="margin-top:6px;margin-left: 24px;padding: 0;"
            >
              <li class="item">
                房源紧张，请尽快预订！
              </li>
              <li class="item">
                支付担保费即刻锁定房源！
              </li>
            </ul>
          </div>
          <div class="guest_info">
            <div class="date_and_room">
              <el-date-picker
                size="large"
                style="border-radius: 10px;margin-left: 170px"
                v-model="dataRange"
                type="daterange"
                unlink-panels
                range-separator="至"
                format="YYYY年MM月DD日"
                :disabled-date="disabledDate"
              />
              <div
                class="room_num"
                style="min-width: 0;display: none;"
              >
                <div
                  class="num_content"
                  style="display: inline-block;"
                />
              </div>
            </div>
            <h3 style="font-size: 20px;line-height: 26px;margin: 0">
              住客资料
            </h3>
            <div
              class="attention"
              style="color: #8592a6;font-size: 14px;line-height: 18px;padding-top: 8px"
            >
              每个房间仅需提供一位入住人信息，入住人数对应房间数，办理入住时需要出示对应入住人身份的身份证件
            </div>
            <div
              class="input_info"
              style="margin-top: 24px;"
            >
              <div style="margin-bottom: 16px;position: relative;display: inline-block;flex:1;">
                <span>住客姓名</span>
                <div
                  class="select_user"
                  style="margin-top: 5px;position: relative;width: 100%;display: inline-block;height: 150px; overflow-y: auto;overflow-x: hidden"
                >
                  <ElCheckboxGroup
                    v-model="selectedResident"
                    @change="callPrice"
                  >
                    <el-checkbox
                      v-for="(personInfo, index) in names"
                      :key="index"
                      :label="personInfo.id"
                      class="input_info_content"
                      style="border: none;"
                    >
                      {{ personInfo.label }}
                    </el-checkbox>
                  </ElCheckboxGroup>
                </div>
              </div>
            </div>
            <div class="divide" />
            <h3 style="font-size: 20px;line-height: 26px;margin-top: 10px">
              优惠券
            </h3>
            <div
              v-if="preview?.availableCoupons.length !== 0"
              class="coupon-list"
            >
              <CouponCard
                v-for="(coupon, index) in preview?.availableCoupons"
                :key="index"
                :coupon="coupon"
                :index="index"
                :active-index="selectedCoupon"
                @select="selectCoupon"
              />
            </div>
            <el-empty
              description="没有可用的优惠券哦！"
              v-else
            />
          </div>
          <div class="payment">
            <div
              class="payment_content"
              style="font-size: 14px;flex:1;padding-right: 80px"
            >
              <div
                class="pre"
                style="display: flex;flex-direction: row"
              >
                <span
                  class="pre_price"
                  style="display: inline-flex;align-items: center;justify-content: center"
                >应付金额
                </span>
                <span
                  class="price_content"
                  style="margin-left:5px; display: inline-flex;align-items: center;justify-content: center"
                >
                  {{ selectedResident.length === 0 ? '请先选择入住人' : '￥' + preview?.actualPrice }}
                </span>
              </div>
            </div>
            <div
              class="pay_button"
              style="text-align: right"
            >
              <button
                type="button"
                class="payment_button"
                @click="book"
              >
                <span>
                  去支付
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="price">
          <div class="sticky_side">
            <div
              class="price_sum"
              style="padding: 24px;background: #fff;"
            >
              <div
                class="price_sum_detail"
                style="font-size: 14px"
              >
                <ul
                  class="price_list"
                  style="list-style: none;padding: 0;margin: 0"
                >
                  <li
                    class="total_price"
                    style="margin-bottom:  16px;display: flex"
                  >
                    <span
                      class="price_label"
                      style="font-size: 24px;color: #0f294d;line-height: 30px;margin-right: 15px;word-break: break-word;font-weight: 700;display: inline-block"
                    >
                      实际应付
                    </span>
                    <span
                      class="price_cell"
                      style="display: inline-block;flex: 1;text-align: right;line-height: 30px"
                    >
                      <div
                        class="final_p"
                        style="padding-left: 4px;font-size: 24px"
                      >
                        <span
                          style="color: #287dfa;font-weight: 700;"
                        >{{ selectedResident.length === 0 ? '选择入住人' : '￥' + preview?.actualPrice }}</span>
                      </div>
                    </span>
                  </li>
                  <li
                    class="sub_price"
                    style="padding-bottom: 8px; "
                  >
                    <div style="display: flex">
                      <span
                        class="price_label"
                        style="color: #0f294d;display: inline-block;margin-right: 15px;word-break: break-word;"
                      >房间总额</span>
                      <span
                        class="price_cell"
                        style="display: inline-block;flex: 1;text-align: right;"
                      >
                        <span
                          style="color: #0f294d;font-weight: 400;font-size: 14px;"
                        >{{ selectedResident.length === 0 ? '请先选择入住人' : '￥' + preview?.totalPrice }}</span>
                      </span>
                    </div>
                  </li>
                  <li
                    class="sub_price"
                    style="padding-bottom: 8px; "
                  >
                    <div style="display: flex">
                      <span
                        class="price_label"
                        style="color: #0f294d;display: inline-block;margin-right: 15px;word-break: break-word;"
                      >优惠减免</span>
                      <span
                        class="price_cell"
                        style="display: inline-block;flex: 1;text-align: right;"
                      >
                        <span style="color: #ff6f00;font-weight: 400;font-size: 14px;">{{
                          '-￥' + preview?.discountTotal
                        }}</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="divide" />
            </div>
            <div
              class="room_sum"
              style="padding: 0 24px 24px 24px;"
            >
              <div
                class="room_sum_label"
                style="display: block;font-size: 18px;font-weight: 700;color: #0f294d;margin-bottom: 12px"
              >
                房间信息
              </div>
              <ul style="margin: 0;padding: 0;list-style: none">
                <li
                  class="r_tile"
                  style="font-size: 14px;color: #0f294d;margin-bottom: 12px"
                >
                  <span style="font-weight: 700;padding-right: 15px">房型:</span>
                  <span>{{ roomTypeMap[singleRoomInfo.roomType] }}</span>
                </li>
                <li
                  class="r_detail"
                  style="font-size: 14px;color: #0f294d"
                >
                  <span style="font-weight: 700;display: inline-flex;padding-right: 15px">配置:</span>
                  <div style="display: inline-flex;flex-direction: row">
                    <span style="padding-right: 15px">每间{{ singleRoomInfo.peopleMax }}人</span>
                    <span style="padding-right: 15px">{{ singleRoomInfo.breakfast ? '有' : '无' }}早餐</span>
                    <span style="padding-right: 15px">剩{{ singleRoomInfo.total }}间</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./OrderDetail.scss" lang="scss" scoped/>
