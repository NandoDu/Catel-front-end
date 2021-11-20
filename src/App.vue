<script setup lang="ts">
import CatelHeader from './component/Header/CatelHeader.vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <CatelHeader />
    <RouterView />
  </ElConfigProvider>
</template>

<style lang="scss" src="./util/Global.scss" />
