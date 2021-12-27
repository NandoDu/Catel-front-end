<script setup lang="ts">
import {reactive, ref, toRefs} from 'vue';
import * as events from "events";
let priceRangeList = reactive([
    '200元以下',
    '200-300元',
    '300-500元',
    '500-1000元',
    '1000-2000元',
    '2000元以上'
])
let rateRangeList = reactive([
  '0分以上',
  '1分以上',
  '2分以上',
  '3分以上',
  '4分以上'
])
let current = ref(new Date());
let value = ref('');
const filterPriceLower = ref(0);
const filterPriceUpper = ref(200);
const filterRate = ref(4);
const currentPriceIndex = ref(-1);
const currentRateIndex = ref(4);
const filterLocation = ref('酒店地址');
const showFilterPrice = ref("预期价格")
const disabledDate = (select: Date) => {
  let now = new Date().getTime();
  return (now && select.getTime() < now - 3600 * 1000 * 24 || select.getTime() > now + 3600 * 1000 * 28 * 24);
};
const priceRangeClick = (index: number) => {
  currentPriceIndex.value = index;
  switch (priceRangeList[index]) {
    case '200元以下':
      filterPriceLower.value = 0;
      filterPriceUpper.value = 200;
      showFilterPrice.value = "200元以下"
      break;
    case '200-300元':
      filterPriceLower.value = 200;
      filterPriceUpper.value = 300;
      showFilterPrice.value = "200-300元"
      break;
    case '300-500元':
      filterPriceLower.value = 300;
      filterPriceUpper.value = 500;
      showFilterPrice.value = "300-500元"
      break;
    case '500-1000元':
      filterPriceLower.value = 500;
      filterPriceUpper.value = 1000;
      showFilterPrice.value = "500-1000元"
      break;
    case '1000-2000元':
      filterPriceLower.value = 1000;
      filterPriceUpper.value = 2000;
      showFilterPrice.value = "1000-2000元"
      break;
    case '2000元以上':
      filterPriceLower.value = 2000;
      filterPriceUpper.value = 20000000000000;
      showFilterPrice.value = "2000元以上"
      break;
    default:
      break;
  }
  console.log('filterPriceLower: ' + filterPriceLower.value);
  console.log('filterPriceUpper: ' + filterPriceUpper.value);
}
const rateRangeClick = (index: number) => {
  currentRateIndex.value = index;
  switch (rateRangeList[index]) {
    case '0分以上':
      filterRate.value = 0;
      break;
    case '1分以上':
      filterRate.value = 1;
      break;
    case '2分以上':
      filterRate.value = 2;
      break;
    case '3分以上':
      filterRate.value = 3;
      break;
    case '4分以上':
      filterRate.value = 4;
      break;
    default:
      break;
  }
  console.log('filterRate: ' + filterRate.value);
}
const priceDiyLow = ref("0")
const priceDiyHigh = ref("0")
const setPriceDiyLow = (event: events) => {
  currentPriceIndex.value = -1;
  priceDiyLow.value = event.currentTarget.value
  if(parseInt(priceDiyLow.value) > parseInt(priceDiyHigh.value)) {
    priceDiyHigh.value = priceDiyLow.value
  }
  console.log(parseInt(priceDiyLow.value))
}
const setPriceDiyHigh = (event: events) => {
  currentPriceIndex.value = -1;
  priceDiyHigh.value = event.currentTarget.value
  console.log(parseInt(priceDiyHigh.value))
}
const resetPriceDiyHigh = (event: events) => {
  if(parseInt(priceDiyLow.value) > parseInt(priceDiyHigh.value)) {
    priceDiyHigh.value = priceDiyLow.value
    console.log("priceDiyLow > priceDiyHigh")
  }
  if(isNaN(parseInt(priceDiyHigh.value))) {
    priceDiyHigh.value = priceDiyLow.value
  }
  showFilterPrice.value = priceDiyLow.value + "-" + priceDiyHigh.value + "元"
  console.log("priceDiyLow: " + priceDiyLow.value)
  console.log("priceDiyHigh: " + priceDiyHigh.value)
}
const resetPriceDiyLow = (event: events) => {
  if(parseInt(priceDiyLow.value) > parseInt(priceDiyHigh.value)) {
    priceDiyHigh.value = priceDiyLow.value
    console.log("priceDiyLow > priceDiyHigh")
  }
  if(isNaN(parseInt(priceDiyLow.value))) {
    priceDiyLow.value = "0"
  }
  showFilterPrice.value = priceDiyLow.value + "-" + priceDiyHigh.value + "元"
  console.log("priceDiyLow: " + priceDiyLow.value)
  console.log("priceDiyHigh: " + priceDiyHigh.value)
}
const clearLocation = () => {
  filterLocation.value = ""
}
const resetLocation = () => {
  if(filterLocation.value == '') {
    filterLocation.value = '酒店地址'
  }
}
</script>
<template>
  <div class="FilterArea">
    <div class="FilterBar">
      <div class="locationArea">
        <div class="locationIcon">
          <img src="src/asset/weizhi.png" style="width: 15px">
        </div>
        <input type="text" name="firstname" v-model="filterLocation" class="locationTitle" @click="clearLocation" @input="setLocation($event)" @blur="resetLocation">
      </div>
      <div class="separateLine" style=""></div>
      <div class="dateArea">
        <div class="datePicker">
          <el-date-picker
              size="medium"
              style="border-radius: 10px;"
              v-model="value"
              type="daterange"
              unlink-panels
              range-separator="至"
              :start-placeholder="current.getFullYear() +'年'+ String(current.getMonth()+1)+ '月' + current.getDate() + '日'"
              :end-placeholder="current.getFullYear() +'年'+ String(current.getMonth()+1)+ '月' + String(current.getDate()+1) + '日'"
              format="YYYY年MM月DD日"
              :disabled-date="disabledDate"
          />
        </div>
      </div>
      <div class="separateLine" style="left: 760px"></div>
      <div class="priceArea">
        <el-popover
            placement="bottom"
            trigger="click"
            :width="200"
        >
          <template #reference>
            <div style="display: flex; flex-direction: row">
              <div class="priceIcon">
                <img src="src/asset/jiage.png" style="width: 15px">
              </div>
              <div class="priceTitle">
                {{showFilterPrice}}
              </div>
            </div>
          </template>
          <div class="priceRangeSelectArea">
            <div v-for="(priceRange, index) in priceRangeList" @click="priceRangeClick(index)" :class="{active: index ===  currentPriceIndex}">
              <div class="priceRange">
                {{priceRange}}
              </div>
            </div>
          </div>
          <div class="priceDiyArea">
            <div class="priceDiyTitle">
              自定义区间:
            </div>
            <div class="priceDiyInput">
              <input type="text" v-model=priceDiyLow class="priceDiyLow" @keyup.enter="resetPriceDiyLow" @input="setPriceDiyLow($event)" @click="resetPriceDiyLow($event)" @blur="resetPriceDiyLow($event)">
              <div style="margin-top: -2px; margin-left: 2px;">-</div>
              <input type="text" v-model=priceDiyHigh class="priceDiyHigh" @keyup.enter="resetPriceDiyHigh" @input="setPriceDiyHigh($event)" @click="resetPriceDiyHigh($event)" @blur="resetPriceDiyHigh($event)">
            </div>
          </div>
        </el-popover>
      </div>
      <div class="separateLine" style="left: 900px"></div>
      <div class="moreOptionArea">
        <div class="moreOptionIcon">
          <img src="src/asset/shaixuan.png" style="width: 15px">
        </div>
        <div class="moreOptionTitle">
          更多筛选
        </div>
      </div>
    </div>
    <div class="FilterSearch">
      <div class="searchTitle">
        搜索酒店
      </div>
    </div>
  </div>
  <div class="Bar">
    <div class="priceSelectArea">
      <div class="priceSelectAreaTitle">
        评分区间:
      </div>
      <div class="priceRangeSelectArea">
        <div v-for="(priceRange, index) in priceRangeList" @click="priceRangeClick(index)" :class="{active: index ===  currentPriceIndex}">
          <div class="priceRange">
            {{priceRange}}
          </div>
        </div>
      </div>
    </div>
    <div class="priceSelectArea">
      <div class="priceSelectAreaTitle">
        评分区间:
      </div>
      <div class="priceRangeSelectArea">
        <div v-for="(rateRange, index) in rateRangeList" @click="rateRangeClick(index)" :class="{active: index ===  currentRateIndex}">
          <div class="priceRange">
            {{rateRange}}
          </div>
        </div>
      </div>
    </div>
    <div class="dateSelectArea">
      <div class="priceSelectAreaTitle">
        时间区间:
      </div>
      <div class="dateSelectPicker">
        <el-date-picker
            size="mini"
            style="border-radius: 10px;"
            v-model="value"
            type="daterange"
            unlink-panels
            range-separator="至"
            :start-placeholder="current.getFullYear() +'年'+ String(current.getMonth()+1)+ '月' + current.getDate() + '日'"
            :end-placeholder="current.getFullYear() +'年'+ String(current.getMonth()+1)+ '月' + String(current.getDate()+1) + '日'"
            format="YYYY年MM月DD日"
            :disabled-date="disabledDate"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.locationArea {
  display: flex;
  flex-direction: row;
  width: 190px;
}
.locationArea:hover {
  cursor: pointer;
}
.dateArea {
  width: 390px;
}
.dateArea:hover {
  cursor: pointer;
}
.priceArea {
  display: flex;
  flex-direction: row;
  width: 115px;
}
.priceArea:hover {
  cursor: pointer;
}
.moreOptionArea {
  display: flex;
  flex-direction: row;
  width: 170px;
}
.moreOptionArea:hover {
  cursor: pointer;
}
.separateLine {
  height: 60px;
  background-color: #cccccc;
  width: 1px;
}
.FilterArea {
  display: flex;
  flex-display: row;
}
.FilterBar {
  height: 60px;
  width: 900px;
  box-shadow: black 0px 0px 1px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  background-color: white;
}
.FilterSearch {
  height: 60px;
  width: 200px;
  box-shadow: black 0px 0px 1px inset;
  border-radius: 20px;
  margin-left: 10px;
  background-color: rgb(81, 179, 109);
  color: white;
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
.locationTitle>>>.el-input__inner {
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
  box-shadow: white 0px 0px 1px inset;
  border: rgb(253, 170, 134) 1px solid;
  color: rgb(252, 81, 30);
  background-color: rgb(255, 240, 235);
  cursor: pointer;
}
.active div {
  box-shadow: white 0px 0px 1px inset;
  border: rgb(253, 170, 134) 1px solid;
  color: rgb(252, 81, 30);
  background-color: rgb(255, 240, 235);
  cursor: pointer;
}
.dateSelectArea {
  display: flex;
  flex: row;
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
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  outline: none;
}
.priceDiyHigh {
  margin-top: -2px;
  width: 45px;
  margin-left: 2px;
  text-align: center;
  border-bottom: 1px solid dimgrey;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  outline: none;
}
</style>