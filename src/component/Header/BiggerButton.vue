<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <button>
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
@use 'src/util/Color';

$mainColor: #68b668;
$duration: 200ms;
button {
  all: unset;
  cursor: pointer;
  border: 2px solid $mainColor;
  border-radius: 40px;
  padding: 8px 28px;
  color: $mainColor;
  transition: color $duration, background-color $duration;

  &:hover {
    color: white;
    background-color: $mainColor;
  }

  &:active {
    background-color: Color.tint($mainColor, 20);
  }

}
</style>
