<script setup lang="ts">

import LoginCard from '../component/LoginCard.vue';

</script>

<template>
  <div id="page-login">
    <LoginCard />
  </div>
</template>

<style lang="scss" scoped>
@use "src/util/Other";

#page-login {
  @include Other.center-flex;
  flex-grow: 1;
}
</style>
