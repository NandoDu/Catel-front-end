<script setup lang="ts">
import {ref} from 'vue';
import {hotelListItemO} from '../../api/hotelApi';

defineProps<{ hotelsList: hotelListItemO[] }>();
const showLines = ref(2);
const showMoreLines = () => {
  showLines.value = showLines.value + 2;
};
</script>

<template>
  <div
    v-for="(hotelLine, lineNum) in Math.ceil(hotelsList.length / 5)"
    :key="lineNum"
    class="hotelList"
    :class="{'firstLine': lineNum === 0}"
    v-show="lineNum < showLines"
  >
    <div
      v-for="(hotel, index) in hotelsList"
      :key="index"
    >
      <div
        v-if="index / (hotelLine * 5) < 1 && index >= (hotelLine - 1) * 5"
      >
        <div
          class="hotelItem"
          :class="{'hotelItemHead' : index % 5 === 0}"
        >
          <h4
            style="position: relative; top: 65px; left: 20px; color: white; font-size: 18px; text-shadow: 1px 1px 0 #383838"
          >
            {{ hotel['name'].length > 8 ? hotel['name'].substring(0, 7) + '...' : hotel['name'] }} >
          </h4>
          <img
            alt="hotelPic"
            :src="hotel['portrait']"
            class="hotelItemPic"
            style="width: 100%; height: 100%; border-radius: 10px;"
            @click="$router.push(`/hotel/${hotel.id}`)"
          >
        </div>
      </div>
    </div>
  </div>
  
  <div
    class="showMore"
    @click="showMoreLines"
    v-show="showLines < hotelsList.length / 5"
  >
    <div class="showMoreIcon">
      <img
        alt="showMore"
        src="../../asset/showMore.png"
        class="showMoreImg"
      >
      <img
        alt="showMoreHover"
        src="../../asset/showMoreHover.png"
        class="showMoreHoverImg"
      >
    </div>
    <div class="showMoreText">
      显示更多
    </div>
  </div>
  <div
    class="showAll"
    v-show="showLines >= hotelsList.length / 5"
  >
    已经到底啦～
  </div>
</template>

<style lang="scss" scoped>
.hotelList {
  display: flex;
  flex-direction: row;
}

.firstLine {
  margin-top: -60px;
}

.showMore {
  margin-top: 80px;
  display: flex;
  align-self: center;
  font-size: 15px;
  color: #515151;
  cursor: pointer;
  font-weight: bolder;
}

.showMore:hover {
}

.showMore:hover .showMoreImg {
  display: none;
}

.showMore:hover .showMoreHoverImg {
  display: block;
}

.showMoreIcon {
  margin-top: 2px;
  width: 20px;
  height: 20px;
}

.showMoreImg {
  width: 15px;
  height: 15px;
}

.showMoreHoverImg {
  width: 15px;
  height: 15px;
  display: none;
  margin-top: 1px;
}

.showMoreText {
  margin-left: 1px;
}

.showMoreText:hover {
  color: #06aebd;
}

.hotelItem {
  margin-top: 20px;
  height: 350px;
  width: 199px;
  border-radius: 10px;
  margin-left: 20px;
}

//.hotelItem:hover {
//  cursor: pointer;
//}

//.hotelItemHead:hover {
//  cursor: pointer;
//}

.hotelItemHead {
  height: 350px;
  width: 199px;
  border-radius: 10px;
  margin-left: 0;
}

.showAll {
  margin-top: 80px;
  display: flex;
  align-self: center;
  font-size: 15px;
}

.hotelItemPic:hover {
  cursor: pointer;
}
</style>
