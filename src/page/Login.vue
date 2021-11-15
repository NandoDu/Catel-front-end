<script setup lang="ts">
import {ElMessage} from 'element-plus';
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {useTypedStore} from '../store';

const username = ref('');
const password = ref('');
const store = useTypedStore();
const router = useRouter();

const login = async () => {
  try {
    await store.dispatch('user/login', {
      email: username.value,
      password: password.value,
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
  <div
    class="flex"
  >
    <ElCard>
      <div class="flex-col login-box">
        <h1>Account Login</h1>
        <ElInput
          class="input-line"
          v-model="username"
          placeholder="Email or Username"
          @keyup.enter="login"
        />
        <ElInput
          class="input-line"
          v-model="password"
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
  </div>
</template>

<style scoped lang="scss" src="./Login.scss" />
