<script setup lang="ts">
import {provide, readonly, ref} from 'vue';
import {Close as ElClose} from '@element-plus/icons';

const visible = ref(false);
const open = () => visible.value = true;
const close = () => visible.value = false;

provide('VirryModal.close', readonly(close));
defineExpose({open, close});
</script>

<template>
  <section
    class="backdrop"
    v-if="visible"
  >
    <div class="modal">
      <button
        @click="close"
      >
        <ElIcon :size="32">
          <ElClose />
        </ElIcon>
      </button>
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.modal {
  box-shadow: 2px 2px 40px 1px;
  position: relative;
}

button {
  all: unset;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  cursor: pointer;
  padding: 5px 5px 0 0;
}
</style>
