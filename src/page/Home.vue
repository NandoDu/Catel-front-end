<template>
  <div class="displayArea">
    <div class="recommendArea">
      <h3 class="recommendTxt">
        热门推荐
      </h3>
      <img
        src="src/asset/budalagong.png"
        class="recommendPng"
      >
    </div>
    <div>
      <h3 class="recommendTxt">
        酒店热销榜
      </h3>
      <div class="block">
        <el-carousel
          trigger="click"
          height="350px"
          style="width: 500px"
          autoplay="false"
          arrow="never"
          indicator-position="outside"
        >
          <el-carousel-item
            v-for="item in 3"
            :key="item"
          >
            <div>
              <div v-for="(card, index) in cards">
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
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
  <div class="hotelArea">
    <h3 style="margin-left: 185px; color: #383838">
      精选酒店
    </h3>
    <div class="hotelListFirst">
      <div v-for="(hotel, index) in hotels_first">
        <div
          class="hotelItemFirst"
          :class="{'hotelItemFirstHead' : index === 0}"
        >
          <h4 style="position: relative; top: 65px; left: 20px; color: white; font-size: 18px; text-shadow: 1px 1px 0px #383838">
            {{ hotel['name'] }} >
          </h4>
          <img
            :src="hotel['img']"
            style="width: 100%; height: 100%; border-radius: 10px;"
          >
        </div>
      </div>
    </div>
    <div class="hotelListSecond">
      <div v-for="(hotel, index) in hotels_second">
        <div
          class="hotelItemSecond"
          :class="{'hotelItemSecondHead' : index === 0}"
        >
          <h4 style="position: relative; top: 65px; left: 20px; color: white; font-size: 18px; text-shadow: 1px 1px 0px #383838">
            {{ hotel['name'] }} >
          </h4>
          <img
            :src="hotel['img']"
            style="width: 100%; height: 100%; border-radius: 10px;"
          >
        </div>
      </div>
    </div>
  </div>
  <div
    class="cooperateArea"
    style="margin-top: 100px;"
  >
    <h3 style="margin-left: 185px; color: #383838">
      合作品牌
    </h3>
    <div class="brandList">
      <div v-for="(brand, index) in brands">
        <div
          class="brandItem"
          :class="{'brandItemHead': index === 0}"
        >
          <img
            :src="brand['img']"
            style="width: 90%; border-radius: 10px; padding-top: 5px; padding-bottom: 5px;"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';

export default {
  setup() {
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
    const hotels_first = reactive([
      {'name': '网红民宿', 'img': 'https://m.tuniucdn.com/fb2/t1/G6/M00/05/F7/Cii-TF2phVWIGUYVAAXiIljWMXkAAA9-wFu7b8ABeI699.jpeg'},
      {'name': '亲子酒店', 'img': 'https://m2.tuniucdn.com/fb2/t1/G6/M00/02/82/Cii-TF2kGHKID3DvAAONEaR4GZgAAAedwFYbBAAA40p73.jpeg'},
      {'name': '花样青旅', 'img': 'https://m2.tuniucdn.com/fb2/t1/G3/M00/C7/6A/Cii_Ll2MadWIL9TPAADI0Jjt3TMAAI1wwIbv74AAMjo74.jpeg'},
      {'name': '古镇酒店', 'img': 'https://m.tuniucdn.com/fb2/t1/G4/M00/E2/1F/Cii-VV2MadSIDWB_AAFiV3EjK-4AAK-pgP7oWMAAWJv33.jpeg'},
      {'name': '出境酒店', 'img': 'https://s.tuniu.net/qn/images/23af3649b4265c97b0c95a2aa859f76e.jpg'},
    ]);
    const hotels_second = reactive([
      {'name': '出境酒店', 'img': 'https://s.tuniu.net/qn/images/23af3649b4265c97b0c95a2aa859f76e.jpg'},
      {'name': '古镇酒店', 'img': 'https://m.tuniucdn.com/fb2/t1/G4/M00/E2/1F/Cii-VV2MadSIDWB_AAFiV3EjK-4AAK-pgP7oWMAAWJv33.jpeg'},
      {'name': '花样青旅', 'img': 'https://m2.tuniucdn.com/fb2/t1/G3/M00/C7/6A/Cii_Ll2MadWIL9TPAADI0Jjt3TMAAI1wwIbv74AAMjo74.jpeg'},
      {'name': '亲子酒店', 'img': 'https://m2.tuniucdn.com/fb2/t1/G6/M00/02/82/Cii-TF2kGHKID3DvAAONEaR4GZgAAAedwFYbBAAA40p73.jpeg'},
      {'name': '网红民宿', 'img': 'https://m.tuniucdn.com/fb2/t1/G6/M00/05/F7/Cii-TF2phVWIGUYVAAXiIljWMXkAAA9-wFu7b8ABeI699.jpeg'},
    ]);
    const brands = reactive([
      {'img': 'https://m3.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-U12gVTiIAggEAAAlmo1PkUgAAAKEQGqxBcAACWy515.png'},
      {'img': 'https://m2.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-TF2gVTqICr8MAAAQXjSoO8sAAAKEAP_50cAABB2471.png'},
      {'img': 'https://m3.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-TF2gVTmIE5hbAAAzrZwaj60AAAKEQGv8VsAADPF375.png'},
      {'img': 'https://m1.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-TF2gVTmIKGtUAAA0SHfakcoAAAKEQGyuxEAADRg884.png'},
      {'img': 'https://m3.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-U12gVTiIJLhqAABHUxpcROAAAAKEQGvUO0AAEdr391.png'},
      {'img': 'https://m4.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-U12gVTmIW3uiAAAZr6LlqoQAAAKEQGy73EAABnH805.png'},
      {'img': 'https://m1.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-TF2gVTmIWGXpAAAnixokL50AAAKEQGvmFgAACej539.png'},
      {'img': 'https://m.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-U12gVTmIWyQGAAAxSLvM0TwAAAKEQGvv_sAADFg111.png'},
      {'img': 'https://m3.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-TF2gVTiICK0PAABGEvl7RNoAAAKEQGqfe0AAEYq389.png'},
      {'img': 'https://m1.tuniucdn.com/fb2/t1/G6/M00/00/CA/Cii-U12gVTiIDmD5AABHEZQvmz8AAAKEQGuB-EAAEcp009.png'},
    ]);
    return {
      cards,
      hotels_first,
      hotels_second,
      brands,
    };
  },
};
</script>

<style src="./Home.scss" lang="scss" scoped />