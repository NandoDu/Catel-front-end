<script setup lang="ts">
import {ref} from 'vue';
let current = ref(new Date());
let options = ref([
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
]);
let pickValue=ref('');
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="order_container">
        <div class="details">
          <div class="room_info">
            <div class="hotel_name">
              <div class="hotel_name_content">
                上海陆家嘴丽呈酒店
              </div>
              <div
                class="star"
                v-for="i in 4"
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
                中国，上海，浦东新区，南洋泾路568号
              </div>
            </div>
            <div class="room_name">
              特惠双床房
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
                    <span>2人</span>
                  </div>
                </div>
                <div class="facility_item">
                  <div style="margin-right: 8px;font-size: 16px">
                    <i class="el-icon-s-order" />
                  </div>
                  <div class="text">
                    <span>2张单人床</span>
                  </div>
                </div>
                <div class="facility_item">
                  <div style="margin-right: 8px;font-size: 16px">
                    <i class="el-icon-dish-1" />
                  </div>
                  <div class="text">
                    <span>无早餐</span>
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
                  为贯彻落实《上海市生活垃圾管理条例》相关规定，推进生活垃圾源头减量，上海市文化和旅游局特制定《关于本市旅游住宿业不主动提供客房一次性日用品的实施意见》，2019年7月1日起，上海市旅游住宿业将不再主动提供牙刷、梳子、浴擦、剃须刀、指甲锉、鞋擦这些一次性日用品。若需要可咨询酒店。
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
                style="border-radius: 10px;"
                v-model="value"
                type="daterange"
                unlink-panels
                range-separator="至"
                :start-placeholder="current.getFullYear() +'年'+ String(current.getMonth()+1)+ '月' + current.getDate() + '日'"
                :end-placeholder="current.getFullYear() +'年'+ String(current.getMonth()+1)+ '月' + String(current.getDate()+1) + '日'"
                format="YYYY年MM月DD日"
              />
              <div
                class="room_num"
                style="min-width: 175px;display: flex;flex-direction: row;align-items: center"
              >
                <div
                  class="num_tile"
                  style="color:#455873;font-size: 16px;font-weight: 400;letter-spacing: 0;margin-right: 8px"
                >
                  房间数
                </div>
                <div
                  class="num_content"
                  style="display: inline-block;"
                >
                  <el-select
                    v-model="pickValue"
                    placeholder="请选择房间数"
                    size="medium"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
              </div>
            </div>
            <h3 style="font-size: 20px;line-height: 26px;margin: 0">
              住客资料
            </h3>
            <div
              class="attention"
              style="color: #8592a6;font-size: 14px;line-height: 18px;padding-top: 8px"
            >
              请按实际入住人数填写，姓名与证件保持一致
            </div>
            <div
              class="input_info"
              style="margin-top: 24px"
            >
              <div style="margin-bottom: 16px;position: relative;display: inline-block;flex:1;">
                <span>住客姓名</span>
                <span style="position: relative;width: 100%;display: inline-block">
                  <input
                    placeholder="请输入订房人姓名"
                    type="text"
                    class="input_info_content"
                  >
                </span>
              </div>
            </div>
            <div
              class="input_info"
              style="margin-top: 24px"
            >
              <div style="margin-bottom: 16px;position: relative;display: inline-block;flex:1;">
                <span>电子邮件</span>
                <span style="position: relative;width: 100%;display: inline-block">
                  <input
                    placeholder="请输入电子邮件"
                    type="text"
                    class="input_info_content"
                  >
                </span>
              </div>
            </div>
            <div
              class="input_info"
              style="margin-top: 24px"
            >
              <div style="margin-bottom: 16px;position: relative;display: inline-block;flex:1;">
                <span>电话号码</span>
                <span style="position: relative;width: 100%;display: inline-block">
                  <input
                    placeholder="请输入电话号码"
                    type="text"
                    class="input_info_content"
                  >
                </span>
              </div>
            </div>
          </div>
          <div class="payment">
            <div
              class="payment_content"
              style="font-size: 14px;flex:1;padding-right: 80px"
            >
              <div class="pre">
                <span
                  class="pre_price"
                >担保金额 
                  <span
                    class="price_content"
                  >
                    ￥319.00
                  </span>
                </span>
              </div>
              <div
                class="real"
                style="padding-top: 8px"
              >
                <span
                  class="real_price"
                >到店付款
                  <span
                    class="price_content"
                    style="font-size: 14px;"
                  >
                    ￥319.00
                  </span>
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
            一些东东
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./OrderDetail.scss" lang="scss" scoped />