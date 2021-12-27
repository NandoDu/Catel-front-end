<script setup lang="ts">
import {reactive, ref} from 'vue';

const hotels_list = reactive([
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
const showLines = ref(2);
const showMoreLines = () => {
  showLines.value = showLines.value + 2;
};
</script>

<template>
  <div
    v-for="(hotelLine, lineNum) in hotels_list.length / 5"
    class="hotelList"
    :class="{'firstLine': lineNum === 0}"
    v-show="lineNum < showLines"
  >
    <div
      v-for="(hotel, index) in hotels_list"
      :key="index"
    >
      <div
        v-if="index / (hotelLine * 5) < 1 && index >= (hotelLine - 1) * 5"
      >
        <div
          class="hotelItem"
          :class="{'hotelItemHead' : index % 5 === 0}"
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
    class="showMore"
    @click="showMoreLines"
    v-show="showLines < hotels_list.length / 5"
  >
    <div class="showMoreIcon">
      <img
        src="src/asset/showMore.png"
        class="showMoreImg"
      >
      <img
        src="src/asset/showMoreHover.png"
        class="showMoreHoverImg"
      >
    </div>
    <div class="showMoreText">
      显示更多
    </div>
  </div>
  <div
    class="showAll"
    v-show="showLines >= hotels_list.length / 5"
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

.hotelItemHead {
  height: 350px;
  width: 199px;
  border-radius: 10px;
  margin-left: 0px;
}
.showAll {
  margin-top: 80px;
  display: flex;
  align-self: center;
  font-size: 15px;
}
</style>
