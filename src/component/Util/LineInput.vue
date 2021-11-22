<script setup lang="ts">
const props = defineProps<{
  label: string;
  height?: number;
  password?: boolean;
}>();
const inputType = props.password ? 'password' : 'text';
</script>

<template>
  <div id="line-input">
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      :type="inputType"
    >
  </div>
</template>

<style lang="scss" scoped>
@use "src/util/Other";
$mainColor: #d36565;
$duration: 300ms;

#line-input {
  @include Other.center-flex;
  margin: 5px;
  
  label {
    align-self: start;
  }
  input {
    all: unset;
    position: relative;
    border-bottom: 2px solid gray;
    transition: border-bottom-color $duration;
    width: 35vh;
    padding: 15px 5px;

    &:focus {
      border-bottom-color: $mainColor;
    }
  }
}
</style>
