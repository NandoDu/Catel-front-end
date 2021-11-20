<script setup lang="ts">
import {ref} from 'vue';

const emit = defineEmits(['startSearch', 'changeBreak']);
let value = ref('');
let peopleNum = ref(1);
let roomNum = ref(1);
let breakfast = ref(2);
let breakInfo = ref('是否早餐');
let current = ref(new Date());
const disabledDate = (select: Date) => {
  let now = new Date().getTime();
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
  emit('changeBreak', breakfast.value);
  console.log('改变早餐状态emit已送出');
};
const startSearch = () => {
  if(value.value==='') console.log('empty');
  else{
    console.log(value.value);
  }
  emit('startSearch', value.value);
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
          :start-placeholder="current.getFullYear() +'年'+ String(current.getMonth()+1)+ '月' + current.getDate() + '日'"
          :end-placeholder="current.getFullYear() +'年'+ String(current.getMonth()+1)+ '月' + String(current.getDate()+1) + '日'"
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
              {{ roomNum }}间，每间 {{ peopleNum }}人
            </el-button>
          </template>
          <div style="display: flex;flex-direction: row;line-height: 50px;">
            房间数量：
            <el-input-number
              v-model="roomNum"
              :min="1"
              size="small"
              style="margin-top: 9px"
            />
          </div>
          <div style="display: flex;flex-direction: row;line-height: 50px;">
            每间人数：
            <el-input-number
              v-model="peopleNum"
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
        <el-button
          class="confirm-button"
          @click="startSearch"
        >
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