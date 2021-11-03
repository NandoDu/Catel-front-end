<script setup lang="ts">

defineProps<{ hotelName: string, roomType: string, breakfast: boolean, roomNumber: number, roomPrice: number, maxPeople: number }>();


</script>

<template>
  <div class="main-container">
    <div class="room-container">
      <div class="room-info">
        <div class="room-panel">
          <div class="room-panel-pic">
            <img
              src="https://dimg04.c-ctrip.com/images/0201a120008owxnsb0EA1_R_400_400_R5_D.jpg_.webp"
              alt="hotelPic"
              style="width: 100%;height: 100%;text-align: center"
            >
          </div>
          <div class="room-panel-name">
            {{ hotelName+'-'+roomType }}
          </div>
        </div>
        <div class="room-sale">
          <div class="room-sale-info">
            <div class="room-sale-card">
              <div class="room-sale-flex">
                <div class="room-sale-people">
                  <div class="people-box">
                    <div class="people-icon">
                      <div style="height: 100px">
                        <el-icon
                          v-for="i in Array(maxPeople)"
                          :key="i"
                          size="20"
                          color="black"
                        >
                          <avatar style="width: 20px!important;height: 20px!important;" />
                        </el-icon>
                      </div>
                    </div>
                    <div class="bed-info">
                      <div class="bed-info-span">
                        {{ roomType }}
                      </div>
                      <div class="bed-info-span-blue">
                        {{ breakfast?'包含早餐':'不包含早餐' }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="room-sale-other">
                  <div style="display: block;margin-bottom: 6px">
                    剩余{{ roomNumber }}间
                  </div>
                </div>
                <div class="room-sale-policy">
                  <div class="bed-info-span">
                    下单后可免费取消
                  </div>
                  <div class="bed-info-span-blue">
                    订单闪付
                  </div>
                </div>
                <div class="room-sale-promotion">
                  <el-tag>可用优惠</el-tag>
                </div>
                <div style="flex: 1 1 0;" />
                <div class="room-sale-price">
                  <div class="price-panel">
                    <div style="color: #0f294d;padding-bottom: 8px;font-size: 12px">
                      <span>会员特惠价</span>
                    </div>
                    <div
                      style="line-height: 28px;color: #0086f6;font-size: 24px;display: inline-block;font-weight: 600;"
                    >
                      ￥{{ roomPrice }}
                    </div>
                  </div>
                  <div class="sale-button">
                    <div>
                      <el-button style="background-color: #ff9500;color: white;font-weight: bold">
                        预订
                      </el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.main-container {
  background-color: white;
  height: 160px;
  width: 960px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  border-radius: 8px;
}

.room-container {
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  /*position: relative;*/
  
}

.room-info {
  height: 112px;
  width: 100%;
  display: flex;
  padding-bottom: 24px;
}

.room-panel {
  border-right: 1px solid #dadfe6;
  flex: auto;
  max-width: 124px;
  width: 124px;
}

.room-sale {
  width: 786px;
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 35px;
}

.room-panel-pic {
  margin-top: 10px;
  width: 100px;
  height: 71px;
  position: relative;
  cursor: pointer;
}

.room-panel-name {
  width: 100px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #0f294d;
  padding: 6px 0;
}

.room-sale-info {
  flex: 100%;
}

.room-sale-card {
  border-bottom: none;
  margin-left: 24px;
  padding: 24px 24px 24px 0;
  /*border-left: 1px solid #dadfe6;*/
  /*border-bottom: 1px solid #dadfe6;*/
  /*position: relative;*/
}

.room-sale-card:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.room-sale-card:first-child {
  padding-top: 0;
}

.room-sale-flex {
  display: flex;
}

.room-sale-people {
  width: 206px;
  padding-right: 16px;
  box-sizing: border-box;
}

.people-box {
  display: flex;
}

.people-icon {
  width: 80px;
  height: 100%;
  padding-right: 21px;
}

.bed-info {
  flex: 1;
  color: #0f294d;
}

.bed-info-span {
  text-decoration-line: underline;
  color: #455873;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px;
}

.bed-info-span-blue {
  text-decoration-line: underline;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px;
  color: #06aebd;
}

.room-sale-other {
  width: 102px;
  padding-right: 16px;
  box-sizing: border-box;
}

.room-sale-policy {
  width: 160px;
  padding-right: 30px;
  box-sizing: border-box;
}

.room-sale-promotion {
  max-width: 120px;
  padding-right: 10px;
  box-sizing: border-box;
}

.room-sale-price {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.price-panel {
  margin-right: 16px;
  word-break: break-all;
  text-align: right;
}

.sale-button {
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin-right: -0px;
}
</style>