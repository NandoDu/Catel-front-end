<script setup lang="ts">
import {ref} from 'vue';

let value = ref('');
let peopleNum = ref(1);
let roomNum = ref(1);
let breakfast = ref(2);
let breakInfo = ref('是否早餐');
let current = ref(new Date);
let end = ref(new Date());
const setDate=()=>{
  end.value.setTime(current.value.getTime()+ 3600*1000*24);
};
setDate();
const disabledDate = (select: Date) => {
  // Can not select days before today and today
  // (current && current < moment().subtract(1, "days")) ||
  let now = new Date().getTime();
  console.log(select.getTime());
  return (now && select.getTime() < now - 3600 * 1000 * 24 || select.getTime() > now + 3600 * 1000 * 28 * 24);
};
const changeBreak = () => {
  breakfast.value = (breakfast.value + 1) % 3;
  if (breakfast.value == 1) {
    breakInfo.value = '提供早餐';
  } else if (breakfast.value == 2) {
    breakInfo.value = '是否早餐';
  } else {
    breakInfo.value = '不供早餐';
  }
};
</script>
<template>
  <div class="date-range-container">
    <div class="date-range-holder">
      <div style="display: flex;flex-direction: row;padding-top: 10px;align-items: center;justify-content: center">
        <el-date-picker
          size="large"
          style="border-radius: 10px;"
          v-model="value"
          type="daterange"
          unlink-panels
          range-separator="至"
          :start-placeholder="current.getFullYear() +'年'+ current.getMonth()+ '月' + current.getDay() + '日'"
          :end-placeholder="end.getFullYear() +'年'+ end.getMonth()+ '月' + end.getDay() + '日'"
          format="YYYY年MM月DD日"
          :disabled-date="disabledDate"
        />
        <el-popover
          ref="popover"
          :width="200"
          trigger="click"
        >
          <template #reference>
            <el-button class="popover">
              {{ peopleNum }}位，{{ roomNum }}间
            </el-button>
          </template>
          <div style="display: flex;flex-direction: row;line-height: 50px;">
            入住人数：
            <el-input-number
              v-model="peopleNum"
              :min="1"
              size="small"
              style="margin-top: 9px"
            />
          </div>
          <div style="display: flex;flex-direction: row;line-height: 50px;">
            房间数量：
            <el-input-number
              v-model="roomNum"
              :min="1"
              size="small"
              style="margin-top: 9px"
            />
          </div>
        </el-popover>
        <el-button
          :class="breakfast === 0 ? 'noBreakfast breakButton': breakfast === 1 ? 'haveBreakfast breakButton' : 'screwBreakfast breakButton'"
          @click="changeBreak"
        >
          {{ breakInfo }}
        </el-button>
        <el-button class="confirm-button">
          确认筛选
        </el-button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.date-range-container {
  background-color: white;
  height: 80px;
  width: 1160px;
  margin-bottom: 15px;
  border-radius: 8px;
}

.date-range-holder {
  height: 60px;
  background-color: #f0f2f5;
  margin: 10px 40px;
  border-radius: 20px;
}

.popover {
  margin-left: 40px;
  font-weight: bolder;
  border-radius: 10px;
}

.noBreakfast {
  background-color: red;
  color: white;
}

.haveBreakfast {
  background-color: #13ce66;
  color: black;
}

.screwBreakfast {
  background-color: #409eff;
  color: white;
}

.breakButton {
  border-radius: 10px;
  transition: 0.5s all;
  margin-left: 35px;
}

.confirm-button {
  background-color: #ff9500;
  border-radius: 10px;
  color: white;
  font-weight: bolder;
  font-size: 16px;
  margin-top: -1px;
  margin-left: 60px;
}
</style>