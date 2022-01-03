<script setup lang="ts">
import {CarouselItemO} from '../../api/userApi';
import {computed, reactive, ref, unref} from 'vue';

const props = defineProps<{
  card: CarouselItemO,
  rank: number
}>();

const card = reactive(props.card);

const rateDesc = computed(() =>
  card.rate > 4.0 ? '好评如潮' : card.rate > 3.5 ? '特别好评' : card.rate > 2 ? '多数好评' : '差评如潮',
);

</script>

<template>
  <div
    class="cardHotel"
    @click="$router.push(`/hotel/${card.id}`)"
  >
    <div class="cardHotelOrder">
      {{ rank + 1 }}
    </div>
    <div class="cardHotelBasicInfo">
      <div class="cardHotelName">
        {{ card.name }}
      </div>
      <div class="cardHotelAddress">
        {{ card.address.substring(9) }}
      </div>
      <div class="cardHotelStar">
        <div class="cardHotelStarNum">
          {{ card.rate }}
        </div>
        <div class="cardHotelStarTxt">
          {{ rateDesc }}
        </div>
      </div>
    </div>
    <div class="cardHotelPrice">
      <span>低至</span>
      <div class="cardHotelPriceNum">
        {{ card.minPrice }}
      </div>
      
      <div>元</div>
    </div>
    <div class="cardHotelImg">
      <img
        alt="hotelPic"
        :src="card.landscape"
        style="width: 100%; height: 100%; border-radius: 10px;"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "src/util/Shadow";

.cardHotel {
  @extend .shadow-3d;
  width: 99%;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  //margin: 12px 0;
}

.cardHotelOrder {
  width: 20px;
  height: 50px;
  font-size: 38px;
  color: #ccc;
  font-weight: bolder;
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
}

.cardHotelAddress {
  width: fit-content;
  height: 20px;
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
  margin-top: 10px;
  margin-left: 5px;
}

.cardHotelPrice {
  width: fit-content;
  height: 20px;
  margin-top: 70px;
  position: absolute;
  right: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.cardHotelPriceNum {
  font-size: 2.0rem;
  font-weight: bolder;
  margin: 0 5px;
}

.cardHotelImg {
  width: 120px;
  height: 70px;
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-self: center;
}
</style>
