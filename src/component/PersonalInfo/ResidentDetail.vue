<script setup lang="ts">
import {UserResident} from '../../api/user/userResidents';

defineProps<{
  residentInfo: UserResident
}>();
</script>

<template>
  <section class="resident-detail">
    <h3>入住人信息</h3>
    <div class="info-line">
      <strong>姓名</strong>
      <p>{{ residentInfo.realName }}</p>
    </div>
    <div class="info-line">
      <strong>手机号码</strong>
      <p>{{ residentInfo.phoneNumber }}</p>
    </div>
    <div class="info-line">
      <strong>身份证号</strong>
      <p>{{ residentInfo.idNo }}</p>
    </div>
    <div class="info-line">
      <strong>生日</strong>
      <p>{{ residentInfo.birthday }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "src/util/Other";

.resident-detail {
  @include Other.center-flex;
  @include Other.card;
  flex-direction: column;

  .info-line {
    @include Other.center-flex;
    strong {
      margin: 0 10px 0 0;
    }
  }
}
</style>
