<script setup lang="ts">
import {ElMessage} from 'element-plus';
import {inject, reactive} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useTypedStore} from '../store';
import useTranslation from '../config/i18n/useTranslation';

const loginData = reactive({
  identity: '',
  password: '',
});
const store = useTypedStore();
const router = useRouter();
const route = useRoute();
const closeModal = inject<{ (): void } | undefined>('VirryModal.close', undefined);
const message = useTranslation(['accountLogin', 'identity', 'password', 'register', 'login', 'loginOk']);

const login = async () => {
  try {
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
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <div id="login-card">
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
        @click="() => $router.push('/')"
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

</style>
