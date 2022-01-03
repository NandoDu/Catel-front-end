<script setup lang="ts">
import {computed, inject, ref} from 'vue';
import BiggerButton from '../Util/BiggerButton.vue';
import {useTypedStore} from '../../store';
import {ElMessage} from 'element-plus';
import {ChargeVipAPI} from '../../api/userApi';

const emit = defineEmits<{
  (e: 'needRefresh'): void
}>();

const store = useTypedStore();
const closeModal = inject<{ (): void } | undefined>('VirryModal.close', undefined);
const userId = computed(() => store.getters['user/userId']);
let vipRange = ref('');
let zfb = ref(null);

const submitCharge = async () => {
  if (vipRange.value === '') {
    ElMessage.error({
      message: '请选择会员等级',
      center: true,
    });
  }
  if (zfb.value === null) {
    ElMessage.error({
      message: '请选择支付方式',
      center: true,
    });
  }
  
  ChargeVipAPI({
    id: userId.value,
    vipType: vipRange.value,
  }).then(() => {
    ElMessage.success({
      message: ('充值成功'),
      center: true,
    });
  }).catch((e) => {
    console.log(e);
  });
  console.log('充值会员');
  closeModal?.();
  emit('needRefresh');
};
</script>

<template>
  <section
    class="vip-charge"
    style="max-width: 500px"
  >
    <h3>充值会员</h3>
    <h4>选择会员等级</h4>
    <div
      style="display: flex;flex-direction: row;width: 50%"
    >
      <el-radio
        v-model="vipRange"
        label="small"
        size="large"
      >
        升级超级会员
      </el-radio>
      <el-radio
        v-model="vipRange"
        label="big"
        size="large"
      >
        升级企业级会员
      </el-radio>
    </div>
    <h4>选择支付方式</h4>
    <div
      style="display: flex;flex-direction: row;width: 32%"
    >
      <el-radio
        v-model="zfb"
        :label="true"
        size="large"
      >
        支付宝
      </el-radio>
      <el-radio
        v-model="zfb"
        :label="false"
        size="large"
      >
        微信
      </el-radio>
    </div>
    <div
      v-if="zfb"
      style="margin-bottom: 15px"
    >
      <span style="font-size: 14px">支付宝支付</span>
    </div>
    <div
      v-if="!zfb"
      style="margin-bottom: 15px"
    >
      <span style="font-size: 14px">微信支付</span>
    </div>
    <div class="inline">
      <BiggerButton
        color="red"
        text="取消充值"
        @click="closeModal"
      />
      <BiggerButton
        color="green"
        text="确定充值"
        @click="submitCharge"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "src/util/Other";

.vip-charge {
  @include Other.center-flex;
  @include Other.card;
  flex-direction: column;
}

.inline {
  @include Other.even-line;
  width: 100%;
  margin: 5px;
}


label {
  width: 400px;
  margin: 10px;
}

</style>
