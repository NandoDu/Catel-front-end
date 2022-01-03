<script setup lang="ts">
import {computed, inject, reactive, ref} from 'vue';
import LineInput from '../Util/LineInput.vue';
import BiggerButton from '../Header/BiggerButton.vue';
// import {addResidentAPI} from '../../api/user/addResident';
import {useTypedStore} from '../../store';
import {ElMessage} from 'element-plus';
import useTranslation from '../../config/i18n/useTranslation';
import {changePassAPI} from '../../api/userApi';

const store = useTypedStore();
const closeModal = inject<{ (): void } | undefined>('VirryModal.close', undefined);
const userId = computed(() => store.getters['user/userId']);

const message = useTranslation([
  'residentAddition', 'residentName', 'realName',
  'phoneNumber', 'cancel', 'add', 'idNo', 'birthday', 'fieldMissing',
  'AlterResident',
]);

class PwdInfo {
  id = userId.value;
  oldPwd = '';
  newPwd = '';
  confirm = '';
}

const pwdInfo = reactive(new PwdInfo());

const firstInput = ref();

const submitModify = async () => {
  if (pwdInfo.oldPwd == '' ||
    pwdInfo.newPwd == '') {
    ElMessage.error({
      message: message.value.fieldMissing,
      center: true,
    });
    console.log(firstInput.value);
    firstInput.value.focus();
    return;
  }
  
  if (pwdInfo.newPwd != pwdInfo.confirm) {
    ElMessage.error({
      message: '两次新密码输入不一致',
      center: true,
    });
    return;
  }
  
  try {
    await changePassAPI({
      id: userId.value,
      oldPass: pwdInfo.oldPwd,
      newPass: pwdInfo.newPwd,
    });
    ElMessage.success({
      message: ('修改成功'),
      center: true,
    });
    console.log('修改密码');
    closeModal?.();
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <section class="pwd-modification">
    <h3>修改密码</h3>
    <LineInput
      label="原密码"
      password
      placeholder="请输入原有密码"
      v-model="pwdInfo.oldPwd"
      ref="firstInput"
    />

    <LineInput
      label="新密码"
      password
      placeholder="请输入新密码"
      v-model="pwdInfo.newPwd"
    />
    <LineInput
      password
      label="确认新密码"
      placeholder="请再次确认新密码"
      v-model="pwdInfo.confirm"
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

.pwd-modification {
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
