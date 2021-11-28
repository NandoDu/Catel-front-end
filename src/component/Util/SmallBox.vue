<script setup lang="ts">
defineProps<{
  title: string
  value: string
}>();
</script>

<template>
  <section class="small-box">
    <header>{{ title }}</header>
    <strong>{{ value }}</strong>
  </section>
</template>

<style lang="scss" scoped>
@use "src/util/Other";

.small-box {
  @include Other.center-flex;
  background-color: white;
  flex-direction: column;
  padding: 10px 0;
  border: 1px solid gray;
  border-top: 5px solid #06aebd;
  width: 20vw;

  strong {
    margin-top: 10px;
    font-size: 1.8rem;
  }
}
</style>
