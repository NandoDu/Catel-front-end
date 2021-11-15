<script setup lang="ts">
import MenuLink from './MenuLink.vue';
import BiggerButton from './BiggerButton.vue';
import FlexSpace from '../Util/FlexSpace.vue';
import {useRouter} from 'vue-router';
import {useTypedStore} from '../../store';
import {computed} from 'vue';

const router = useRouter();
const state = useTypedStore();
const username = computed(() => state.getters['user/username']);

const logout = () => state.commit('user/logout');
</script>

<template>
  <header>
    <div
      class="trademark"
      @click="()=>router.push('/')"
    >
      <img
        class="logo"
        src="/src/asset/icon_64x64.png"
        alt="Catel Logo"
      >
      <span class="logo-name">Catel</span>
    </div>
    <FlexSpace />
    <nav>
      <MenuLink
        text="Hotel"
        to="/roomList"
      />
      <MenuLink
        text="About Us"
        to="/roomList"
      />
      <MenuLink
        v-if="username"
        text="Order"
        to="/roomList"
      />
      <MenuLink
        v-if="username"
        text="Personal"
        to="/roomList"
      />
    </nav>
    <BiggerButton
      v-if="!username"
      id="login-button"
      text="Login"
      @click="()=>router.push('/login')"
    />
    <BiggerButton
      v-else
      id="logout-button"
      text="Logout"
      @click="logout"
    />
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 10vw;
  position: sticky;
  top: 0;
  z-index: 10;
}

nav {
  display: flex;
}

.trademark {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  & > * {
    margin: 8px 12px;
  }
}

.logo-name {
  font: 3rem "Dank Mono";
}

#login-button, #logout-button {
  margin: 8px;
}
</style>
