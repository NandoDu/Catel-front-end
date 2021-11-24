<script setup lang="ts">
import {reactive} from 'vue';
import HotCarousel from '../component/HotCarousel.vue';

const hotels_first = reactive([
  {
    'name': '网红民宿',
    'img': 'https://m.tuniucdn.com/fb2/t1/G6/M00/05/F7/Cii-TF2phVWIGUYVAAXiIljWMXkAAA9-wFu7b8ABeI699.jpeg',
  },
  {
    'name': '亲子酒店',
    'img': 'https://m2.tuniucdn.com/fb2/t1/G6/M00/02/82/Cii-TF2kGHKID3DvAAONEaR4GZgAAAedwFYbBAAA40p73.jpeg',
  },
  {
    'name': '花样青旅',
    'img': 'https://m2.tuniucdn.com/fb2/t1/G3/M00/C7/6A/Cii_Ll2MadWIL9TPAADI0Jjt3TMAAI1wwIbv74AAMjo74.jpeg',
  },
  {
    'name': '古镇酒店',
    'img': 'https://m.tuniucdn.com/fb2/t1/G4/M00/E2/1F/Cii-VV2MadSIDWB_AAFiV3EjK-4AAK-pgP7oWMAAWJv33.jpeg',
  },
  {'name': '出境酒店', 'img': 'https://s.tuniu.net/qn/images/23af3649b4265c97b0c95a2aa859f76e.jpg'},
]);
const hotels_second = reactive([
  {'name': '出境酒店', 'img': 'https://s.tuniu.net/qn/images/23af3649b4265c97b0c95a2aa859f76e.jpg'},
  {
    'name': '古镇酒店',
    'img': 'https://m.tuniucdn.com/fb2/t1/G4/M00/E2/1F/Cii-VV2MadSIDWB_AAFiV3EjK-4AAK-pgP7oWMAAWJv33.jpeg',
  },
  {
    'name': '花样青旅',
    'img': 'https://m2.tuniucdn.com/fb2/t1/G3/M00/C7/6A/Cii_Ll2MadWIL9TPAADI0Jjt3TMAAI1wwIbv74AAMjo74.jpeg',
  },
  {
    'name': '亲子酒店',
    'img': 'https://m2.tuniucdn.com/fb2/t1/G6/M00/02/82/Cii-TF2kGHKID3DvAAONEaR4GZgAAAedwFYbBAAA40p73.jpeg',
  },
  {
    'name': '网红民宿',
    'img': 'https://m.tuniucdn.com/fb2/t1/G6/M00/05/F7/Cii-TF2phVWIGUYVAAXiIljWMXkAAA9-wFu7b8ABeI699.jpeg',
  },
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
</script>

<template>
  <div class="displayArea">
    <div class="recommendArea">
      <h3 class="recommendTxt">
        热门推荐
      </h3>
      <img
        src="/src/asset/budalagong.png"
        class="recommendPng"
      >
    </div>
    <div>
      <h3 class="recommendTxt">
        酒店热销榜
      </h3>
      <div class="block">
        <HotCarousel />
      </div>
    </div>
  </div>
  <div class="hotelArea">
    <h3>
      精选酒店
    </h3>
    <div class="hotelListFirst">
      <div
        v-for="(hotel, index) in hotels_first"
        :key="hotel.img"
      >
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
      <div
        v-for="(hotel, index) in hotels_second"
        :key="hotel.img"
      >
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
    <h3>
      合作品牌
    </h3>
    <div class="brandList">
      <div
        v-for="(brand, index) in brands"
        :key="brand.img"
      >
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

<style src="./Home.scss" lang="scss" scoped />
