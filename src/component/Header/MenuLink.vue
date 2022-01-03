<script setup lang="ts">
defineProps<{ text: string, to: string }>();
</script>

<template>
  <RouterLink :to="to">
    {{ text }}
  </RouterLink>
</template>

<style lang="scss" scoped>
@use 'src/util/Color';

$duration: 200ms;
$mainColor: Color.$bingo;

a {
  all: unset;
  position: relative;
  box-sizing: border-box;
  font: 1.6rem "Fira Code", serif;
  margin: 0 20px;
  cursor: pointer;
  transition: color $duration;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -10%;
    width: 120%;
    height: 0.1em;
    opacity: 0;
    background-color: $mainColor;
    transition: opacity $duration, transform $duration;
  }

  &:hover {
    color: $mainColor;

    &::after {
      opacity: 1;
      text-decoration-color: rgba(0, 0, 0, 1);
      transform: translateY(0.4em);
    }
  }

}
</style>
