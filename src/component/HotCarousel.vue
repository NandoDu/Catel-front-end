<script setup lang="ts">
import { reactive } from 'vue';

const cards = reactive([
  { 'name': '三亚亚龙湾美高梅度假酒店', 'address': '亚龙湾', 'star': 4.7, 'review': '超棒！', 'price': 1187, 'img': 'https://m.tuniucdn.com/fb2/t1/G2/M00/33/24/Cii-Tli89XeIVj6LAASlvtFwJXAAAIHHAJd-gsABKXW202_w450_h300_c1_t0.jpg' },
  { 'name': '金茂三亚亚龙湾希尔顿大酒店', 'address': '亚龙湾', 'star': 4.7, 'review': '超棒！', 'price': 1187, 'img': 'https://m.tuniucdn.com/fb2/t1/G2/M00/33/27/Cii-TFi89vaIINP0AAHNwdCmqR0AAIHIAKjWu4AAc3Z977_w450_h300_c1_t0.jpg'},
  { 'name': '三亚天域度假酒店', 'address': '亚龙湾', 'star': 4.7, 'review': '超棒！', 'price': 1187, 'img': 'https://m.tuniucdn.com/fb2/t1/G1/M00/9A/21/Cii9EFi9Qz2IRVonAApT49DJ5fwAAIb9gHEZe8AClP7382_w450_h300_c1_t0.jpg'},
  { 'name': '红璞假日酒店', 'address': '亚龙湾', 'star': 4.7, 'review': '超棒！', 'price': 1187, 'img': 'https://m.tuniucdn.com/fb2/t1/G5/M00/F3/C8/Cii-slrz4mOIZD1AAAJJlkSuRT8AAGpJAKdGcwAAkmu187_w450_h300_c1_t0.jpg'},
  { 'name': '千岛湖绿城度假酒店', 'address': '亚龙湾', 'star': 4.7, 'review': '超棒！', 'price': 1187, 'img': 'https://m.tuniucdn.com/fb2/t1/G2/M00/33/79/Cii-T1i9Hf-IUZpYAACB6DJGKykAAIHwQP-89gAAIIA154_w450_h300_c1_t0.jpg'},
  { 'name': '无锡拈花湾拈花客栈', 'address': '亚龙湾', 'star': 4.7, 'review': '超棒！', 'price': 1187, 'img': 'https://m.tuniucdn.com/fb2/t1/G2/M00/C7/FD/Cii-TFknV4GIddkeAAFP_vTDaYkAAKaVwM4kNgAAVAW454_w450_h300_c1_t0.jpg'},
  { 'name': '南京金陵饭店', 'address': '亚龙湾', 'star': 4.7, 'review': '超棒！', 'price': 1187, 'img': 'https://m.tuniucdn.com/fb2/t1/G4/M00/B8/AC/Cii_J10oTRyIfrkAAAOR67wxzQsAAH30gFkRIcAA5ID543_w450_h300_c1_t0.jpg'},
  { 'name': '锦江都城经典', 'address': '亚龙湾', 'star': 4.7, 'review': '超棒！', 'price': 1187, 'img': 'https://m.tuniucdn.com/fb2/t1/G1/M00/99/D7/Cii9EFi9FSOIL_VyAAJjfMjFJQQAAIbkAPxvVsAAmOU547_w450_h300_c1_t0.jpg'},
  { 'name': '上海玩具总动员酒店', 'address': '亚龙湾', 'star': 4.7, 'review': '超棒！', 'price': 1187, 'img': 'https://m.tuniucdn.com/fb2/t1/G5/M00/73/BA/Cii-sl0ciFuILMzGAA1QKVKRO9cAAXWzAJOV2kADVBB078_w450_h300_c1_t0.jpg'},
]);
</script>

<template>
  <ElCarousel
    trigger="click"
    height="350px"
    style="width: 500px"
    :autoplay="true"
    arrow="never"
    indicator-position="outside"
  >
    <ElCarouselItem
      v-for="item in 3"
      :key="item"
    >
      <div>
        <div
          v-for="(card, index) in cards"
          :key="card.img"
        >
          <div
            class="cardHotel"
            :class="{'firstCardHotel' : index % 3 === 0}"
            v-if="index / (item * 3) < 1 && index >= (item - 1) * 3"
          >
            <div class="cardHotelOrder">
              {{ index + 1 }}
            </div>
            <div class="cardHotelBasicInfo">
              <div class="cardHotelName">
                {{ card['name'] }}
              </div>
              <div class="cardHotelAddress">
                {{ card['address'] }}
              </div>
              <div class="cardHotelStar">
                <div class="cardHotelStarNum">
                  {{ card['star'] }}
                </div>
                <div class="cardHotelStarTxt">
                  {{ card['review'] }}
                </div>
              </div>
            </div>
            <div class="cardHotelPrice">
              <div style="font-weight: bolder; font-size: 20px;">
                ¥
              </div>
              <div class="cardHotelPriceNum">
                {{ card['price'] }}
              </div>
              <div>起</div>
            </div>
            <div class="cardHotelImg">
              <img
                :src="card['img']"
                style="width: 100%; height: 100%; border-radius: 10px;"
              >
            </div>
          </div>
        </div>
      </div>
    </ElCarouselItem>
  </ElCarousel>
</template>

<style lang="scss" scoped >
.cardHotel {
  width: 100%;
  height: 100px;
  background-color: #f6f6f6;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.firstCardHotel {
  width: 100%;
  height: 100px;
  background-color: #f6f6f6;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  margin-top: 0px;
}

.cardHotelOrder {
  width: 20px;
  height: 50px;
  font-size: 38px;
  color: #ccc;
  font-weight: bolder;
  //background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.cardHotelBasicInfo {
  width: fit-content;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 5px;
}
.cardHotelName {
  width: fit-content;
  height: 20px;
  font-weight: 700;
  //background-color: white;
}
.cardHotelAddress {
  width: fit-content;
  height: 20px;
  //background-color: white;
  margin-top: 10px;
}
.cardHotelStar {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.cardHotelStarNum {
  width: 30px;
  height: 20px;
  color: white;
  font-weight: bolder;
  background-color: red;
  border-radius: 5px 0px 5px 0px;
  margin-top: 10px;
  text-align: center;
  line-height: 20px;
}
.cardHotelStarTxt {
  color: red;
  margin-top: 5px;
  margin-left: 5px;
}
.cardHotelPrice {
  width: fit-content;
  height: 20px;
  //background-color: white;
  margin-top: 70px;
  position: absolute;
  right: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.cardHotelPriceNum {
  font-size: 20px;
  font-weight: bolder;
  margin-left: 5px;
}
.cardHotelImg {
  width: 120px;
  height: 70px;
  position: absolute;
  right: 20px;
  //background-color: white;
  display: flex;
  flex-direction: column;
  align-self: center;
}

</style>
