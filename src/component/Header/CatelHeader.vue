<script setup lang="ts">
import MenuLink from './MenuLink.vue';
import BiggerButton from './BiggerButton.vue';
import FlexSpace from '../Util/FlexSpace.vue';
import {useRouter} from 'vue-router';
import {useTypedStore} from '../../store';
import {computed, ref} from 'vue';
import VirryModal from '../Util/VirryModal.vue';
import LoginCard from '../LoginCard.vue';
import RegisterCard from '../RegisterCard.vue';
import {ElMessage} from 'element-plus';
import LocaleSelect from '../Util/LocaleSelect.vue';
import useTranslation from '../../config/i18n/useTranslation';

const router = useRouter();
const store = useTypedStore();
const message = useTranslation([
  'home', 'aboutUs', 'hotel', 'login', 'logout', 'order', 'personal', 'logoutOk',
]);

const logged = computed(() => store.getters['user/logged']);
const logout = () => {
  store.commit('user/logout');
  router.push('/');
  ElMessage.success({
    message: message.value.logoutOk,
    center: true,
  });
};

const loginModal = ref();
const showLoginModal = () => loginModal.value.open();
let ifRegister = ref(false);

</script>

<template>
  <header id="catel-header">
    <div
      class="trademark"
      @click="()=>router.push('/')"
    >
      <img
        class="logo"
        src="/src/asset/icon_256x256.png"
        alt="Catel Logo"
        width="64"
        height="64"
      >
      <span class="logo-name">Catel</span>
    </div>
    <LocaleSelect />
    <FlexSpace />
    <nav>
      <MenuLink
        :text="message.home"
        to="/"
      />
      <MenuLink
        :text="message.aboutUs"
        to="/"
      />
      <MenuLink
        :text="message.hotel"
        to="/"
      />
      <MenuLink
        v-if="logged"
        :text="message.order"
        to="/"
      />
      <MenuLink
        v-if="logged"
        :text="message.personal"
        to="/personalInfo"
      />
    </nav>
    <BiggerButton
      v-if="!logged"
      id="login-button"
      color="green"
      :text="message.login"
      @click="showLoginModal"
    />
    <BiggerButton
      v-else
      id="logout-button"
      color="red"
      :text="message.logout"
      @click="logout"
    />
    <VirryModal
      ref="loginModal"
    >
      <LoginCard />
    </VirryModal>
  </header>
</template>

<style lang="scss" scoped>
#catel-header {
  //background-color: white;
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  padding: 0 10vw;
  position: sticky;
  top: 0;
  left: 0;
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
