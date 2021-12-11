<script setup lang="ts">
import {useRoute} from 'vue-router';
import {hotelDetailAPI} from '../api/hotelApi';
import {useTypedStore} from '../store';
import {UserState} from '../store/user';
import {Checked as ELChecked} from '@element-plus/icons';
import SmallBox from './Util/SmallBox.vue';

const route = useRoute();
const store = useTypedStore();
const user = store.getters['user/all'] as UserState;
const orderId = route.params.orderId as unknown as number;
const hotelInfo = await hotelDetailAPI({orderId});
console.log(hotelInfo);
</script>

<template>
  <div class="detail-of-order">
    <ElIcon
      :size="64"
      color="#207080"
      style="margin-top: 15px;"
    >
      <ELChecked />
    </ElIcon>
    <h2>订单详情 # {{ hotelInfo.id }}</h2>
    <p class="thanks">
      尊敬的 {{ user.username }}，感谢您在本平台的消费，本订单已被系统接受
    </p>
    <hr style="width: 100%; border-top: 1px solid gray;">
    <div class="dates">
      <SmallBox
        title="入住日期"
        :value="hotelInfo.checkInDate"
      />
      <SmallBox
        title="结束日期"
        :value="hotelInfo.checkOutDate"
      />
    </div>
    <hr style="width: 100%; border-top: 1px solid gray;">
    <div class="detail">
      <div class="hotel">
        酒店：{{ hotelInfo.hotelName }}
      </div>
      <div class="creditDelta">
        信用值变更：{{ hotelInfo.creditDelta }}
      </div>
    </div>

    <div class="price">
      价格：{{ hotelInfo.price }}
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "src/util/Other";

.detail-of-order {
  @include Other.center-flex;
  flex-direction: column;
  padding: 0 25vw;

  .thanks {
    color: gray;
  }

  .dates {
    @include Other.even-line;
    width: 100%;
    margin: 10px;
  }

  .price {
    align-self: end;
  }
}

</style>
