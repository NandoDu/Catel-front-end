<script setup lang="ts">
import {CreditEntry} from '../../api/userApi';
import {computed} from 'vue';
import BiggerButton from '../Util/BiggerButton.vue';

const prop = defineProps<{
  record: CreditEntry
  index: number
}>();

const up = computed(() => prop.record.creditDelta > 0);
const color = computed(() => up.value ? 'green' : 'brown');
const classes = computed(() => ['credit-entry', up.value ? 'up' : 'down']);

</script>

<template>
  <section :class="classes">
    <div class="title">
      订单 #{{ record.orderId }}
    </div>

    <span class="content">
      信用值{{ up ? '增加' : '降低' }}
      {{ Math.abs(record.creditDelta) }}
      点
    </span>

    <div class="more">
      <BiggerButton
        text="详细信息"
        :color="color"
        size="small"
        @click="$router.push(`/order-detail/${record.orderId}`)"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "src/util/Other";
@use "src/util/Shadow";

.credit-entry {
  @include Other.center-flex;
  border-radius: 15px;
  padding: 10px 20px;
  @extend .shadow-3d;

  &.up {
    background-color: rgba(212, 248, 217, 0.92);
  }

  &.down {
    background-color: #f5c1b8;
  }

  .title {
    font-size: 2.4rem;
    width: 25%;
    min-width: 120px;
  }

  .content {
    width: 40%;
    flex-grow: 1;
  }

}


</style>
