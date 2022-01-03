<script setup lang="ts">
import {hotelStarMap} from '../../util/globalMap';
import {ElMessageBox} from 'element-plus';

const props =
  defineProps<{ hotelName: string, description: string, hotelStar: string, address: string, rate: number, commentCount: number, announcement: string, bizRegion: string, hotelLandscape: string, hotelPortrait: string }>();

const showDescription = (description: string) => {
  ElMessageBox.alert(description, '酒店简介', {
    showConfirmButton: false,
    closeOnClickModal: true,
    closeOnPressEscape: true,
  });
};
</script>
<template>
  <section
    id="hotel_info_card"
    style="width: 1160px"
  >
    <div class="headline">
      <div class="detail">
        <div class="title">
          <h1 class="hotel_name">
            {{ hotelName }}
          </h1>
          <div
            class="star"
            v-for="i in new Array(hotelStarMap[hotelStar])"
            :key="i"
          >
            <i class="el-icon-star-on" />
          </div>
        </div>
        <div class="address">
          <div class="position">
            <div style="display: inline-block;vertical-align: baseline;line-height: 22px;">
              <i class="el-icon-location" />
            </div>
            <span class="position_info">
              <span class="position_text">位于{{ address }},在<b>{{ bizRegion }}</b>商圈中</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-input">
      <div class="head_album">
        <div
          class="album_box"
          style="position: absolute;top: 0;bottom: 0;right: 0;left: 0"
        >
          <div class="big_pic">
            <div style="position: absolute; inset: 0">
              <img
                class="bigpic_img"
                alt="酒店图片"
                :src="hotelLandscape"
                style="height: 100%;width: 100%"
              >
            </div>
          </div>
          <div class="child_box">
            <img
              :src="hotelPortrait"
              alt=""
              style="height: 100%; width: 100%"
            >
          </div>
        </div>
      </div>
      <div class="head_context">
        <div class="review_container">
          <div
            class="review_container_tab"
            style="width: 98%;"
          >
            <div
              class="review_info"
              style="display: flex;justify-content: flex-start;align-items: center;margin-bottom: 4px"
            >
              <div
                class="review_sum"
                style="width: calc(55% - 4px);display: flex;flex-direction: column"
              >
                <p style="margin-bottom: 8px;margin-top: 0">
                  <span class="score_box">
                    <b
                      class="score_value"
                      style="color: #fff;font-size: 20px;margin-right: 2px"
                    >{{ rate }}</b>
                    <span style="font-size: 16px;line-height: 22px;color: #fff;font-weight: 500;opacity: .6;">分</span>
                  </span>
                  <span class="score_text">{{
                    rate >= 4 ? '非常满意' : (rate >= 3 ? '比较满意' : (rate >= 2 ? '一般' : (rate >= 1 ? '不太满意' : '不满意')))
                  }}</span>
                </p>
                <p
                  class="review_all"
                  style="margin-bottom: 10px;margin-top: 10px"
                >
                  共有 {{ commentCount }}用户评论了该酒店
                </p>
                <p
                  class="review_quality"
                  style="margin-bottom:4px;margin-top: 8px"
                >
                  环境优雅、房间很大
                </p>
              </div>
              <div
                class="review_box"
                style="position: relative;width: 45%;right:0"
              >
                <div class="review_bubble" />
                <div class="review_content">
                  <div class="review_content_context">
                    <span class="review_keyword">
                      {{ announcement }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="traffic_container"
          style="min-height: 130px"
        >
          <span class="hotel_desc">
            {{ description.length >= 125 ? description.substring(0, 126) + '...' : description }}
          </span>
        </div>
        <div class="amenity_container">
          <div class="amenity_list">
            <span class="amenity_item">棋牌室</span>
            <span class="amenity_item">
              <span class="mr_4"> |</span>
              24小时大堂经理
            </span>
            <span class="amenity_item">
              <span class="mr_4"> |</span>
              会议厅
            </span>
          </div>
          <div
            class="amenity_show_more"
            style="text-align: right"
          >
            <span
              class="amenity-link"
              @click="showDescription(description)"
            >
              显示完整简介
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  max-width: 1160px;
  margin-bottom: 16px;
  margin-top: 8px;
}

body {
  font: 12px/1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
}

.headline {
  display: flex;
  padding: 8px 0;
  background: #f5f7fa;
}

.comment-input {
  display: flex;
  padding: 12px 24px;
  border-radius: 8px;
  background: white;
  
}

.head_album {
  display: flex;
  width: 100%;
  position: relative;
  max-width: 57%;
  padding-bottom: 25%;
  height: 0;
}

.head_album .big_pic {
  position: relative;
  width: 65%;
  height: 100%;
  display: inline-block;
}

.head_album .child_box {
  display: inline-block;
  width: 33%;
  float: right;
  height: 100%;
}

.child_box {
  background-size: cover;
  width: 50%;
  height: 33.3%;
  float: left;
  padding-left: 8px;
  padding-bottom: 8px;
  box-sizing: border-box;
}

.head_context {
  max-width: 43%;
  flex: auto;
  padding: 0 0 0 16px;
  position: relative;
}

.review_container {
  display: flex;
  align-items: center;
  /*padding-bottom: 12px;*/
  border-bottom: 2px solid #f0f2f5;
  /*margin-bottom: 12px;*/
  /*max-width: 460px;*/
  justify-content: flex-start;
  /*margin-left: 12px;*/
}

.score_box {
  background-color: #4978ce;
  padding: 3px 8px;
  border-radius: 2px;
  font-size: 22px;
  line-height: 22px;
  color: hsla(0, 0%, 100%, .6);
  font-weight: 700;
  white-space: nowrap;
  display: inline-block;
}

.score_text {
  color: #4978ce;
  font-size: 20px;
  margin-left: 8px;
  font-weight: 700;
  position: relative;
  top: 1px;
}

.review_all {
  margin-bottom: 4px;
  font-size: 14px;
  color: #287dfa;
  font-weight: 700;
  white-space: nowrap;
}

.review_quality {
  margin-bottom: 4px;
  font-size: 14px;
  color: #06aebd;
  font-weight: 400;
  white-space: nowrap;
}

.review_bubble {
  padding: 8px;
  transform: rotate(45deg);
  background-color: #eaf1fc;
  position: absolute;
  left: -4px;
  top: 20px;
}

.review_content {
  /*background: #f5f9ff;*/
  background: #eaf1fc;
  height: 54px;
  /*max-width: 198px;*/
  margin-left: 20px;
  position: relative;
  overflow: hidden;
  outline: 15px solid #eaf1fc;
  /*outline: 15px solid lightsteelblue;*/
}

.review_content:before {
  float: left;
  width: 100px;
  content: "";
  height: 54px;
}

.review_content:after {
  float: right;
  content: "...";
  height: 18px;
  line-height: 18px;
  width: 30px;
  position: relative;
  left: calc(100% - 100px);
  top: -18px;
  text-align: right;
}

.review_content_context {
  float: right;
  margin-left: -100px;
  width: 100%;
  word-break: break-all;
  line-height: 18px;
  font-size: 14px;
  color: #455873;
  letter-spacing: 0;
  font-family: PingFangSC-Regular, serif;
}

.traffic_container {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f0f2f5;
}

.traffic_container .hotel_desc {
  display: block;
  justify-content: space-between;
  margin: 13px 3px 13px 0;
  font-size: 18px;
  letter-spacing: 0;
  text-align: left;
  line-height: 30px;
  word-break: break-all;
  width: 100%;
  color: #455873;
  font-family: PingFangSC-Regular, serif;
}

.amenity_container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  overflow: hidden;
  height: 28px;
}

.amenity_list {
  flex-shrink: 0;
  max-width: 330px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.amenity_item {
  display: inline-block;
  font-size: 14px;
  color: #0f294d;
  letter-spacing: 0;
  text-align: left;
  line-height: 18px;
  padding-right: 6px;
  align-items: baseline;
}

.amenity-link {
  font-size: 14px;
  color: #287dfa;
  letter-spacing: 0;
  line-height: 18px;
  font-weight: 700;
  cursor: pointer;
}

.detail {
  flex: auto;
  max-width: 57%;
  padding: 4px;
}

.title {
  width: 100%;
  margin-bottom: 6px;
}

.title .hotel_name {
  font-size: 24px;
  color: #0f294d;
  display: inline;
  margin-right: 8px;
}

.title .star {
  display: inline;
  color: #ff9501;
  font-size: 20px;
  /*font-size: 16px;*/
  /*line-height: 20px;*/
  /*font-family: smarticon,sans-serif!important;*/
  /*font-style: normal;*/
  /*vertical-align: baseline;*/
  /*font-weight:400;*/
}

.address .position {
  display: inline-block;
  margin-bottom: 6px;
  align-items: baseline;
  justify-content: center;
  text-align: center;
}

/*.address .desc{*/
/*  display: flex;*/
/*  align-items: baseline;*/
/*  font-size: 14px;*/
/*}*/
.position_info {
  font-size: 14px;
  color: #455873;
  letter-spacing: 0;
  text-align: left;
  line-height: 22px;
  margin-left: 1px;
  padding-left: 1px;
  display: inline-block;
  align-items: baseline;
  justify-content: center;
}


</style>
