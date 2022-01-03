<script setup lang="ts">
import {reactive, ref} from 'vue';
import * as events from 'events';
import dateFormat from 'dateformat';
import {disabledDate, reverseBizRegionMap} from '../../util/globalMap';

let priceRangeList = reactive([
  '200元以下',
  '200-300元',
  '300-500元',
  '500-1000元',
  '1000-2000元',
  '2000元以上',
]);
let current = ref(new Date());
let value = ref('');
let rateValue = ref('');
let starList = ref([]);
const filterPriceLower = ref(0);
const filterPriceUpper = ref(999999);
const filterRate = ref(6);
const currentPriceIndex = ref(-1);
const filterLocation = ref('酒店商圈');
const showFilterPrice = ref('预期价格');
const emit = defineEmits(['screen']);
const priceRangeClick = (index: number) => {
  if (currentPriceIndex.value === index) {
    currentPriceIndex.value = -1;
    filterPriceLower.value = 0;
    filterPriceUpper.value = 999999;
    showFilterPrice.value = '预期价格';
  } else {
    currentPriceIndex.value = index;
    switch (priceRangeList[index]) {
      case '200元以下':
        filterPriceLower.value = 0;
        filterPriceUpper.value = 200;
        showFilterPrice.value = '200元以下';
        break;
      case '200-300元':
        filterPriceLower.value = 200;
        filterPriceUpper.value = 300;
        showFilterPrice.value = '200-300元';
        break;
      case '300-500元':
        filterPriceLower.value = 300;
        filterPriceUpper.value = 500;
        showFilterPrice.value = '300-500元';
        break;
      case '500-1000元':
        filterPriceLower.value = 500;
        filterPriceUpper.value = 1000;
        showFilterPrice.value = '500-1000元';
        break;
      case '1000-2000元':
        filterPriceLower.value = 1000;
        filterPriceUpper.value = 2000;
        showFilterPrice.value = '1000-2000元';
        break;
      case '2000元以上':
        filterPriceLower.value = 2000;
        filterPriceUpper.value = 999999;
        showFilterPrice.value = '2000元以上';
        break;
      default:
        break;
    }
  }
};
const rateChange = () => {
  filterRate.value = +(rateValue.value);
};
const priceDiyLow = ref('0');
const priceDiyHigh = ref('0');
const setPriceDiyLow = (event: events) => {
  currentPriceIndex.value = -1;
  priceDiyLow.value = (parseInt(event.currentTarget.value)).toString();
  if (priceDiyLow.value === 'NaN') {
    priceDiyLow.value = '';
  }
  if (parseInt(priceDiyLow.value) > parseInt(priceDiyHigh.value)) {
    priceDiyHigh.value = priceDiyLow.value;
  }
  filterPriceLower.value = +(priceDiyLow.value);
  filterPriceUpper.value = +(priceDiyHigh.value);
};
const setPriceDiyHigh = (event: events) => {
  currentPriceIndex.value = -1;
  priceDiyHigh.value = parseInt(event.currentTarget.value).toString();
  if (priceDiyHigh.value === 'NaN') {
    priceDiyHigh.value = '';
  }
  filterPriceLower.value = +(priceDiyLow.value);
  filterPriceUpper.value = +(priceDiyHigh.value);
};
const resetPriceDiyHigh = (event: events) => {
  currentPriceIndex.value = -1;
  if (parseInt(priceDiyLow.value) > parseInt(priceDiyHigh.value)) {
    priceDiyHigh.value = priceDiyLow.value;
  }
  if (isNaN(parseInt(priceDiyHigh.value))) {
    priceDiyHigh.value = priceDiyLow.value;
  }
  showFilterPrice.value = priceDiyLow.value + '-' + priceDiyHigh.value + '元';
};
const resetPriceDiyLow = (event: events) => {
  currentPriceIndex.value = -1;
  if (parseInt(priceDiyLow.value) > parseInt(priceDiyHigh.value)) {
    priceDiyHigh.value = priceDiyLow.value;
  }
  if (isNaN(parseInt(priceDiyLow.value))) {
    priceDiyLow.value = '0';
  }
  showFilterPrice.value = priceDiyLow.value + '-' + priceDiyHigh.value + '元';
};
const clearLocation = () => {
  filterLocation.value = '';
};
const resetLocation = () => {
  if (filterLocation.value == '') {
    filterLocation.value = '酒店商圈';
  }
};
const clearFilterPrice = () => {
  currentPriceIndex.value = -1;
  filterPriceLower.value = 0;
  filterPriceUpper.value = 999999;
  showFilterPrice.value = '预期价格';
  priceDiyLow.value = '0';
  priceDiyHigh.value = '0';
};
const clearFilterRateAndStar = () => {
  rateValue.value = '0';
  filterRate.value = 6;
  starList.value = [];
};
const screen = () => {
  let star = '';
  for (let item of starList.value) {
    switch (item) {
      case '一星级':
        star += '1';
        break;
      case '两星级':
        star += '2';
        break;
      case '三星级':
        star += '3';
        break;
      case '四星级':
        star += '4';
        break;
      case '五星级':
        star += '5';
        break;
      default:
        break;
    }
  }
  if (!value.value)
    emit('screen', reverseBizRegionMap[filterLocation.value as '西单'], 0, 0, filterPriceLower.value, filterPriceUpper.value, filterRate.value, star);
  else
    emit('screen', reverseBizRegionMap[filterLocation.value as '西单'], value.value.length === 0 ? 0 : value.value[0], value.value.length === 0
      ? 0 : value.value[1], filterPriceLower.value, filterPriceUpper.value, filterRate.value, star);
};
</script>
<template>
  <div class="FilterArea">
    <div class="FilterBar">
      <div class="locationArea">
        <div class="locationIcon">
          <img
            src="../../asset/location.png"
            style="width: 15px"
            alt="location"
          >
        </div>
        <input
          type="text"
          name="firstname"
          v-model="filterLocation"
          class="locationTitle"
          @click="clearLocation"
          @blur="resetLocation"
        >
      </div>
      <div
        class="separateLine"
        style=""
      />
      <div class="dateArea">
        <div class="datePicker">
          <el-date-picker
            size="medium"
            style="border-radius: 10px;"
            v-model="value"
            type="daterange"
            unlink-panels
            range-separator="至"
            :start-placeholder="dateFormat(current.getTime(),'yyyy年mm月dd日')"
            :end-placeholder="dateFormat(current.getTime()+ 1000*60*60*24,'yyyy年mm月dd日')"
            format="YYYY年MM月DD日"
            :disabled-date="disabledDate"
          />
        </div>
      </div>
      <div
        class="separateLine"
        style="left: 760px"
      />
      <div class="priceArea">
        <el-popover
          placement="bottom"
          trigger="click"
          :width="200"
        >
          <template #reference>
            <div style="display: flex; flex-direction: row">
              <div class="priceIcon">
                <img
                  src="../../asset/price.png"
                  style="width: 15px"
                  alt="icon"
                >
              </div>
              <div class="priceTitle">
                {{ showFilterPrice }}
              </div>
            </div>
          </template>
          <div class="priceRangeSelectArea">
            <div
              v-for="(priceRange, index) in priceRangeList"
              :key="index"
              @click="priceRangeClick(index)"
              :class="{active: index === currentPriceIndex}"
            >
              <div class="priceRange">
                {{ priceRange }}
              </div>
            </div>
          </div>
          <div class="priceDiyArea">
            <div class="priceDiyTitle">
              自定义区间:
            </div>
            <div class="priceDiyInput">
              <input
                type="text"
                v-model="priceDiyLow"
                class="priceDiyLow"
                @keyup.enter="resetPriceDiyLow"
                @input="setPriceDiyLow($event)"
                @click="resetPriceDiyLow($event)"
                @blur="resetPriceDiyLow($event)"
              >
              <div style="margin-top: -2px; margin-left: 2px;">
                -
              </div>
              <input
                type="text"
                v-model="priceDiyHigh"
                class="priceDiyHigh"
                @keyup.enter="resetPriceDiyHigh"
                @input="setPriceDiyHigh($event)"
                @click="resetPriceDiyHigh($event)"
                @blur="resetPriceDiyHigh($event)"
              >
            </div>
          </div>
          <div
            class="resetDiyPrice"
            @click="clearFilterPrice"
          >
            重置价格设定
          </div>
        </el-popover>
      </div>
      <div
        class="separateLine"
        style="left: 900px"
      />
      <div class="moreOptionArea">
        <el-popover
          placement="bottom"
          trigger="click"
          :width="200"
        >
          <template #reference>
            <div style="display: flex; flex-direction: row">
              <div class="moreOptionIcon">
                <img
                  src="../../asset/screen.png"
                  style="width: 15px"
                  alt="icon"
                >
              </div>
              <div class="moreOptionTitle">
                更多筛选
              </div>
            </div>
          </template>
          <div class="rateRangeSelectArea">
            <div class="rateRangeSelectTitle">
              最低评分:
            </div>
            <div class="rateRangeSelectStar">
              <el-rate
                v-model="rateValue"
                allow-half
                show-score
                score-template="{value} 分"
                @change="rateChange"
              />
            </div>
          </div>
          <div class="horizontalLine" />
          <div class="starRangeSelectArea">
            <div class="starRangeSelectTitle">
              酒店星级:
            </div>
            <div class="starRangeSelectCheckBox">
              <el-checkbox-group
                v-model="starList"
                class="starCheckBoxList"
                :style="{'--fill-color': '#ffffff'}"
              >
                <el-checkbox
                  label="一星级"
                  class="starCheckBox"
                />
                <el-checkbox
                  label="两星级"
                  class="starCheckBox"
                />
                <el-checkbox
                  label="三星级"
                  class="starCheckBox"
                />
                <el-checkbox
                  label="四星级"
                  class="starCheckBox"
                />
                <el-checkbox
                  label="五星级"
                  class="starCheckBox"
                />
              </el-checkbox-group>
            </div>
          </div>
          <div
            class="resetMoreOptions"
            @click="clearFilterRateAndStar"
          >
            重置设定
          </div>
        </el-popover>
      </div>
    </div>
    <div
      class="FilterSearch"
      @click="screen"
    >
      <div class="searchTitle">
        搜索酒店
      </div>
    </div>
  </div>
  <!--  <div class="filterLabel">-->
  <!--    <div v-for="label in labelList">-->
  <!--      <div class="labelItem">-->
  <!--        <div class="labelTitle">-->
  <!--          {{label[0]}}-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<style lang="scss" scoped>
.locationArea {
  display: flex;
  flex-direction: row;
  width: 190px;
  cursor: pointer;
}

.dateArea {
  width: 390px;
  cursor: pointer;
}

.priceArea {
  display: flex;
  flex-direction: row;
  width: 115px;
  cursor: pointer;
}

.moreOptionArea {
  display: flex;
  flex-direction: row;
  width: 170px;
  cursor: pointer;
}

.separateLine {
  height: 60px;
  background-color: #cccccc;
  width: 1px;
}

.FilterArea {
  display: flex;
  flex-direction: row;
}

.FilterBar {
  height: 60px;
  width: 900px;
  box-shadow: black 0 0 1px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  background-color: white;
}

.FilterSearch {
  height: 60px;
  width: 200px;
  box-shadow: black 0 0 1px inset;
  border-radius: 20px;
  margin-left: 10px;
  background-color: rgb(81, 179, 109);
  color: white;
  cursor: pointer;
}

.searchTitle {
  font-size: 17px;
  margin-top: 18px;
  margin-left: 65px;
}

.locationIcon {
  margin-top: 22px;
  margin-left: 55px;
}

.locationTitle {
  margin-top: 5px;
  font-size: 14px;
  margin-left: 5px;
  color: #2c2c2c;
  border: none;
  outline: none;
}

.locationTitle >>> .el-input__inner {
  border: 0;
}

.priceIcon {
  margin-top: 20px;
  margin-left: 12px;
}

.priceTitle {
  width: 90px;
  margin-top: 20px;
  margin-left: -1px;
  font-size: 14px;
  color: #2c2c2c;
  text-align: center;
}

.moreOptionIcon {
  margin-top: 20px;
  margin-left: 45px;
}

.moreOptionTitle {
  margin-top: 20px;
  margin-left: 5px;
  font-size: 14px;
  color: #2c2c2c;
}

.datePicker {
  margin-top: 13px;
  margin-left: 20px;
  font-size: 14px;
}

.priceRangeChoice {
  margin-left: 10px;
}

.priceSelectArea {
  display: flex;
  flex-direction: row;
}

.priceRangeSelectArea {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 30px 30px 30px;
  //flex-direction: column;
  width: 1000px;
  height: 85px;
  margin-left: -15px;
}

.priceRange {
  width: 90px;
  height: 22px;
  background-color: #fafbfb;
  border-radius: 20px;
  margin-left: 20px;
  font-size: 10px;
  align-self: center;
  text-align: center;
  line-height: 22px;
  border: black 1px solid;
}

.priceRange:hover {
  box-shadow: white 0 0 1px inset;
  border: rgb(253, 170, 134) 1px solid;
  color: rgb(252, 81, 30);
  background-color: rgb(255, 240, 235);
  cursor: pointer;
}

.active div {
  box-shadow: white 0 0 1px inset;
  border: rgb(253, 170, 134) 1px solid;
  color: rgb(252, 81, 30);
  background-color: rgb(255, 240, 235);
  cursor: pointer;
}

.dateSelectArea {
  display: flex;
  flex-direction: row;
}

.dateSelectPicker {
  margin-left: 20px;
}

.priceDiyTitle {
  font-size: 12px;
}

.priceDiyInput {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  height: 20px;
}

.priceDiyArea {
  margin-top: 12px;
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  width: 1000px;
}

.priceDiyLow {
  margin-left: -10px;
  margin-top: -2px;
  width: 45px;
  text-align: center;
  border-bottom: 1px solid dimgrey;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  outline: none;
}

.priceDiyHigh {
  margin-top: -2px;
  width: 45px;
  margin-left: 2px;
  text-align: center;
  border-bottom: 1px solid dimgrey;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  outline: none;
}

.checkBox {
  width: 10px;
  height: 10px;
  background-color: white;
  border: black 1px solid;
  margin-right: 10px;
}

.checkBoxActive {
  background-color: #13ce66;
}

.rateCheck {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  cursor: pointer;
}

.rateRange {

}

.rateRangeSelectArea {
  display: flex;
  flex-direction: column;
}

.rateRangeSelectStar {
  margin-top: 5px;
}

.starRangeSelectArea {
  margin-top: 10px;
}

.starCheckBox {
  margin-bottom: -15px;
}

.starCheckBoxList {
  display: flex;
  flex-direction: column;
}

.filterLabel {
  width: 1000px;
  height: 20px;
  display: flex;
  flex-direction: row;
  margin-left: -10px;
  margin-top: 10px;
}

.labelItem {
  width: fit-content;
  height: 25px;
  background-color: #cccccc;
  margin-left: 10px;
  line-height: 25px;
}

.labelTitle {
  color: #69717c;
  font-size: 12px;
  margin-left: 3px;
  margin-right: 8px;
}

.horizontalLine {
  width: 200px;
  height: 1px;
  margin-top: 10px;
  opacity: .3;
  background-color: #cccccc;
}

.resetDiyPrice {
  width: 85px;
  height: 25px;
  margin-left: 60px;
  margin-top: 8px;
  background-color: rgb(252, 81, 30);
  border-radius: 20px;
  text-align: center;
  line-height: 23px;
  color: white;
  font-size: 12px;
}

.resetDiyPrice:hover {
  cursor: pointer;
}

.resetMoreOptions {
  width: 85px;
  height: 25px;
  margin-left: 60px;
  margin-top: 15px;
  background-color: rgb(252, 81, 30);
  border-radius: 20px;
  text-align: center;
  line-height: 23px;
  color: white;
  font-size: 12px;
}

.resetMoreOptions:hover {
  cursor: pointer;
}
</style>
