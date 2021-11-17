<script setup lang="ts">
import {ElMessage} from 'element-plus';
import {reactive} from 'vue';
import {useRouter} from 'vue-router';
import {useTypedStore} from '../store';

const loginData = reactive({
  identity: '',
  password: '',
});
const store = useTypedStore();
const router = useRouter();

const login = async () => {
  try {
    await store.dispatch('user/login', {
      email: loginData.identity,
      password: loginData.password,
    });
    ElMessage.success({
      message: 'Login Successfully!',
      center: true,
    });
    await router.push('/');
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <ElCard>
    <div class="flex-col login-box">
      <h1>Account Login</h1>
      <ElInput
        class="input-line"
        v-model="loginData.identity"
        placeholder="Email or Username"
        @keyup.enter="login"
      />
      <ElInput
        class="input-line"
        v-model="loginData.password"
        placeholder="Password"
        @keyup.enter="login"
        show-password
      />
      <br>
      <div class="flex-end">
        <span
          class="extern-link"
          @click="() => $router.push('/')"
        >Register</span>
        <ElButton
          @click="login"
          class="login-button"
        >
          Login
        </ElButton>
      </div>
    </div>
  </ElCard>
</template>

<style lang="scss" scoped>
@use 'src/util/Color';

$inputLen: 400px;

.input-line {
  width: $inputLen;
  margin: 10px 10px;
}

.extern-link {
  font: 0.75em sans-serif;
  margin: 0 10px;
  text-decoration: underline;
}

.flex-end {
  align-self: flex-end;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.flex-col {
  @extend .flex;
  flex-flow: column nowrap;
}

.login-box {
  width: $inputLen;
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
