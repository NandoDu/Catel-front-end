<script setup lang="ts">
const props = defineProps<{
  label: string;
  height?: number;
  password?: boolean;
}>();
const inputType = props.password ? 'password' : 'text';
</script>

<template>
  <label>{{ label }}</label>
  <input :type="inputType">
</template>

<style lang="scss" scoped>
$mainColor: #d36565;
$duration: 300ms;

input {
  all: unset;
  padding: 5px;
  position: relative;
  border-bottom: 1px solid gray;
  transition: border-bottom-color $duration;

  &:focus {
    border-bottom-color: $mainColor;
  }
}
</style>
