<script setup lang="ts">
import {inject, reactive, ref} from 'vue';
import LineInput from '../Util/LineInput.vue';
import BiggerButton from '../Header/BiggerButton.vue';
import {ElMessage} from 'element-plus';
import useTranslation from '../../config/i18n/useTranslation';
import {UserResident} from '../../api/user/userResidents';
import {ModifyResidentInfoAPI} from '../../api/userApi';

const prop = defineProps<{
  residentInfo: UserResident
}>();


const emit = defineEmits<{
  (e: 'needRefresh'): void
}>();
const info = reactive(prop.residentInfo);
// const store = useTypedStore();
const closeModal = inject<{ (): void } | undefined>('VirryModal.close', undefined);
// const userState: UserState = store.getters['user/all'];


const message = useTranslation([
  'residentAddition', 'residentName', 'realName',
  'phoneNumber', 'cancel', 'add', 'idNo', 'birthday', 'fieldMissing',
  'AlterResident',
]);


const firstInput = ref();

const submitModify = async () => {
  if (info.realName == '' ||
    info.phoneNumber == '') {
    ElMessage.error({
      message: message.value.fieldMissing,
      center: true,
    });
    console.log(firstInput.value);
    firstInput.value.focus();
    return;
  }
  ModifyResidentInfoAPI({
    residentId: info.id,
    name: info.realName,
    phoneNumber: info.phoneNumber,
  }).then(() => {
    ElMessage.success({
      message: ('修改个人信息成功'),
      center: true,
    });
  }).catch((e) => {
    console.log(e);
  });
  console.log('修改信息');
  closeModal?.();
  emit('needRefresh');
};
</script>

<template>
  <section class="info-modification">
    <h3>修改入住人信息</h3>
    <LineInput
      label="入住人姓名"
      :placeholde="info.realName"
      v-model="info.realName"
      ref="firstInput"
    />
    
    <LineInput
      label="用户电话"
      :placeholder="info.phoneNumber"
      v-model="info.phoneNumber"
    />
    <div style="width: 100%;padding-left: 10px">
      <div style="margin-top: 10px;margin-bottom: 10px">
        用户身份证号
      </div>
      <div style="margin-bottom: 10px;padding-left: 4px">
        {{ info.idNo }}
      </div>
    </div>
    <div style="width: 100%;padding-left: 10px">
      <div style="margin-top: 10px;margin-bottom: 10px">
        用户生日
      </div>
      <div style="margin-bottom: 20px;padding-left: 4px">
        {{ info.birthday }}
      </div>
    </div>
    <div class="inline">
      <BiggerButton
        color="red"
        text="取消修改"
        @click="closeModal"
      />
      <BiggerButton
        color="green"
        text="确定修改"
        @click="submitModify"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "src/util/Other";

.info-modification {
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
