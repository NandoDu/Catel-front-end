<script setup lang="ts">
/* eslint-disable vue/no-mutating-props */
import {useVModel} from '@vueuse/core';

const props = defineProps<{
  label: string;
  height?: number;
  modelValue?: string;
  password?: boolean;
}>();
const emit = defineEmits<{ (e: 'update:modelValue'): void }>();
const inputType = props.password ? 'password' : 'text';
const model = useVModel(props, 'modelValue', emit);
</script>

<template>
  <div id="line-input">
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      :type="inputType"
      v-model="model"
      autocomplete="off"
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
    padding: 10px 5px;

    &:focus {
      border-bottom-color: $mainColor;
    }
  }
}
</style>
