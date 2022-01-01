<script setup lang="ts">
import {GetCarouselAPI} from '../../api/userApi';
import {useAsyncState} from '@vueuse/core';

const {state: cards} = useAsyncState(GetCarouselAPI({limit: 9}), []);
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
          :key="index"
        >
          <div
            class="cardHotel"
            :class="{'firstCardHotel' : index % 3 === 0}"
            v-if="index / (item * 3) < 1 && index >= (item - 1) * 3"
            @click="$router.push(`/hotel/${card.id}`)"
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
                  {{ card['rate'] }}
                </div>
                <div class="cardHotelStarTxt">
                  超棒
                </div>
              </div>
            </div>
            <div class="cardHotelPrice">
              <div style="font-weight: bolder; font-size: 20px;">
                ¥
              </div>
              <div class="cardHotelPriceNum">
                {{ card['minPrice'] }}
              </div>
              <div>起</div>
            </div>
            <div class="cardHotelImg">
              <img
                alt="hotelPic"
                :src="card['landscape']"
                style="width: 100%; height: 100%; border-radius: 10px;"
              >
            </div>
          </div>
        </div>
      </div>
    </ElCarouselItem>
  </ElCarousel>
</template>

<style lang="scss" scoped>
.cardHotel {
  width: 99%;
  height: 100px;
  background-color: white;
  box-shadow: black 0 0 1px inset;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  cursor: pointer;
}

.firstCardHotel {
  width: 99%;
  height: 100px;
  background-color: white;
  box-shadow: black 0 0 1px inset;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  margin-top: 0;
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
  border-radius: 5px 0 5px 0;
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
