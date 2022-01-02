<script setup lang="ts">
defineProps<{
  text: string
  color: 'red' | 'green'
  size?: 'big' | 'small'
}>();

</script>

<template>
  <button
    class="bigger-button"
    :class="[`color-${color}`, `size-${size ?? 'big'}`]"
  >
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
@use 'src/util/Color';
@use 'src/util/Size';

$duration: 200ms;

.bigger-button {
  @each $name, $color in Color.$buttonColors {
    &.color-#{$name} {
      --base-color: #{$color};
      --light-color: #{Color.tint($color, 15)};
      --lighter-color: #{Color.tint($color, 30)};
    }
  }
  @each $name, $size in Size.$buttonSizes {
    &.size-#{$name} {
      --base-size: #{$size};
    }
  }
  $baseColor: var(--base-color);
  $lightColor: var(--light-color);
  $lighterColor: var(--lighter-color);
  $baseSize: var(--base-size);

  all: unset;
  cursor: pointer;
  transition: color $duration, background-color $duration;
  color: $baseColor;
  background-color: white;
  text-align: center;
  border: 1px solid $baseColor;
  border-radius: 20px;
  padding: (2 * 4px) $baseSize;
  
  &:hover {
    color: white;
    background-color: $lightColor;
  }

  &:active {
    background-color: $lighterColor;
  }


}
</style>
