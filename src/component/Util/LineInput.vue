<script setup lang="ts">
/* eslint-disable vue/no-mutating-props */
import {useVModel} from '@vueuse/core';
import {ref} from 'vue';

const props = defineProps<{
  label: string;
  height?: number;
  modelValue?: string;
  password?: boolean;
  placeholder?: string;
}>();
const emit = defineEmits<{ (e: 'update:modelValue'): void }>();
const inputType = props.password ? 'password' : 'text';
const model = useVModel(props, 'modelValue', emit);

const theInput = ref();
const focus = () => theInput.value.focus();
defineExpose({focus});
</script>

<template>
  <div id="line-input">
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      :type="inputType"
      v-model="model"
      autocomplete="off"
      ref="theInput"
      :placeholder="placeholder"
    >
  </div>
</template>

<style lang="scss" scoped>
@use "src/util/Other";

$mainColor: #d36565;
$duration: 300ms;

#line-input {
  @include Other.center-flex;
  flex-direction: column;
  margin: 5px;

  label {
    align-self: start;
  }

  input {
    all: unset;
    position: relative;
    border-bottom: 1px solid gray;
    transition: border-bottom-color $duration;
    width: 35vh;
    padding: 10px 5px;

    &:focus {
      border-bottom-color: $mainColor;
    }
  }
}
</style>
