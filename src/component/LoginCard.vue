<script setup lang="ts">
import {ElMessage} from 'element-plus';
import {inject, reactive, ref, registerRuntimeCompiler} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useTypedStore} from '../store';
import useTranslation from '../config/i18n/useTranslation';
import {RegisterAPI} from '../api/user/register';

const loginData = reactive({
  identity: '',
  password: '',
});
const registerData = reactive({
  identity: '',
  username: '',
  password: '',
  verify: '',
});
const store = useTypedStore();
const router = useRouter();
const route = useRoute();
const closeModal = inject<{ (): void } | undefined>('VirryModal.close', undefined);
const message = useTranslation(['accountLogin', 'identity', 'password', 'register', 'login', 'loginOk']);
let ifLogin = ref(true);
const switchLoginOrRegister = () => {
  ifLogin.value = !ifLogin.value;
};
const login = async () => {
  try {
    if (loginData.identity === '' || loginData.password === '') {
      ElMessage.error({
        message: '输入信息不能为空',
        center: true,
      });
    } else {
      await store.dispatch('user/login', {
        email: loginData.identity,
        password: loginData.password,
      });
      if (closeModal) closeModal();
      else {
        const target = (route.query.redirect as string) ?? '/';
        await router.push(target);
      }
      
      ElMessage.success({
        message: message.value.loginOk,
        center: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
const register = () => {
  if (registerData.identity === '' || registerData.username === '' || registerData.password === '' || registerData.verify === '') {
    ElMessage.error({
      message: '输入信息不能为空',
      center: true,
    });
  } else if (registerData.password !== registerData.verify) {
    ElMessage.error({
      message: '两次输入密码不一致',
      center: true,
    });
  } else {
    RegisterAPI({
      email: registerData.identity,
      username: registerData.username,
      password: registerData.password,
    },
    ).then(() => {
      ElMessage.success({
        message: '注册成功',
        center: true,
      });
      ifLogin.value = true;
    })
      .catch(() => {
        console.log('爆炸了');
      });
  }
}
;
</script>

<template>
  <div
    id="login-card"
    v-if="ifLogin"
  >
    <h1>{{ message.accountLogin }}</h1>
    <ElInput
      class="input-line"
      v-model="loginData.identity"
      :placeholder="message.identity"
      @keyup.enter="login"
    />
    <ElInput
      class="input-line"
      v-model="loginData.password"
      :placeholder="message.password"
      @keyup.enter="login"
      show-password
    />
    <div class="flex-end">
      <span
        class="extern-link"
        @click="() => ifLogin = false"
      >
        {{ message.register }}
      </span>
      <ElButton
        @click="login"
        class="login-button"
      >
        {{ message.login }}
      </ElButton>
    </div>
  </div>
  <div
    id="register-card"
    v-if="!ifLogin"
  >
    <h1>注册</h1>
    <ElInput
      class="input-line"
      v-model="registerData.identity"
      placeholder="邮箱"
      @keyup.enter="register"
    />
    <ElInput
      class="input-line"
      v-model="registerData.username"
      placeholder="用户名"
      @keyup.enter="register"
    />
    <ElInput
      class="input-line"
      v-model="registerData.password"
      placeholder="请输入新密码"
      @keyup.enter="register"
      show-password
    />
    <ElInput
      class="input-line"
      v-model="registerData.verify"
      placeholder="再次确认新密码"
      @keyup.enter="register"
      show-password
    />
    <div class="flex-end">
      <span
        class="extern-link"
        @click="switchLoginOrRegister"
      >
        {{ message.login }}
      </span>
      <ElButton
        @click="register"
        class="register-button"
      >
        注册
      </ElButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'src/util/Color';
@use 'src/util/Shadow';
@use 'src/util/Other';

$inputLen: 400px;

.input-line {
  width: $inputLen;
  margin: 10px 10px;
}

.extern-link {
  font: 0.75em sans-serif;
  margin: 0 10px;
  cursor: pointer;
  
  &:hover {
    color: #0b3d52;
  }
}

.flex-end {
  margin-top: 30px;
  align-self: flex-end;
}

#login-card {
  width: $inputLen;
  @include Other.center-flex;
  flex-direction: column;
  @include Other.card;
}

@mixin add-color($color) {
  background-color: $color;
  color: white;
  
  &:hover {
    background-color: Color.tint($color, 20);
  }
}

.login-button {
  @include add-color(#0d887e);
}

#register-card {
  width: $inputLen;
  @include Other.center-flex;
  flex-direction: column;
  @include Other.card;
}

.register-button {
  @include add-color(#0d887e);
}


</style>
