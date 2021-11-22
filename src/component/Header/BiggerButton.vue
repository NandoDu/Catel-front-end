<script setup lang="ts">
defineProps<{
  text: string
  color: 'red' | 'green'
}>();

</script>

<template>
  <button
    class="bigger-button"
    :class="`color-${color}`"
  >
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
@use 'src/util/Color';

$duration: 200ms;

.bigger-button {
  @each $name, $color in Color.$buttonColors {
    &.color-#{$name} {
      all: unset;
      cursor: pointer;
      border: 2px solid $color;
      border-radius: 40px;
      padding: 8px 28px;
      color: $color;
      transition: color $duration, background-color $duration;

      &:hover {
        color: white;
        background-color: $color;
      }

      &:active {
        background-color: Color.tint($color, 20);
      }
    }
  }
}
</style>
