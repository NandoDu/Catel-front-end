<script setup lang="ts">
import {inject, reactive, ref} from 'vue';
import LineInput from '../Util/LineInput.vue';
import BiggerButton from '../Util/BiggerButton.vue';
import {useTypedStore} from '../../store';
import {ElMessage} from 'element-plus';
import useTranslation from '../../config/i18n/useTranslation';
import {UserState} from '../../store/user';
import {ModifyUserInfoAPI} from '../../api/userApi';


const emit = defineEmits<{
  (e: 'needRefresh'): void
}>();

const store = useTypedStore();
const closeModal = inject<{ (): void } | undefined>('VirryModal.close', undefined);
const userState: UserState = store.getters['user/all'];


const message = useTranslation([
  'residentAddition', 'residentName', 'realName',
  'phoneNumber', 'cancel', 'add', 'idNo', 'birthday', 'fieldMissing',
  'AlterResident',
]);

class UserInfo {
  idNo = userState.userId!;
  name = userState.username!;
  email = userState.email!;
  userType = userState.userType!;
}

const userInfo = reactive(new UserInfo());

const firstInput = ref();

const submitModify = async () => {
  if (userInfo.name == '' ||
    userInfo.email == '') {
    ElMessage.error({
      message: message.value.fieldMissing,
      center: true,
    });
    firstInput.value.focus();
    return;
  }
  try {
    await ModifyUserInfoAPI({
      id: +(userInfo.idNo),
      name: userInfo.name,
      email: userInfo.email,
    });
    ElMessage.success({
      message: ('修改个人信息成功'),
      center: true,
    });
    closeModal?.();
    emit('needRefresh');
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <section class="info-modification">
    <h3>修改个人信息</h3>
    <LineInput
      label="用户姓名"
      :placeholder="userInfo.name"
      v-model="userInfo.name"
      ref="firstInput"
    />

    <LineInput
      label="用户邮箱"
      :placeholder="userInfo.email"
      v-model="userInfo.email"
    />
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
