<script setup lang="ts">
import VirryModal from './VirryModal.vue';
import BiggerButton from './BiggerButton.vue';
import useTranslation from '../../config/i18n/useTranslation';
import {ref} from 'vue';

const emit = defineEmits<{
  (e: 'confirmed'): void
}>();
const openModal = () => theModal.value.open();
const closeModal = () => theModal.value.close();
const message = useTranslation(['cancel', 'confirm']);
const theModal = ref();
defineExpose({
  open: openModal,
  close: closeModal,
});
</script>

<template>
  <VirryModal
    class="confirm-modal"
    ref="theModal"
  >
    <div class="content">
      <div class="info">
        <slot />
      </div>
      <div class="actions">
        <BiggerButton
          :text="message.cancel"
          color="red"
          @click="closeModal"
        />
        <BiggerButton
          :text="message.confirm"
          color="green"
          @click="()=>emit('confirmed')"
        />
      </div>
    </div>
  </VirryModal>
</template>

<style lang="scss" scoped>
@use "src/util/Other";

.confirm-modal .content {
  @include Other.center-flex;
  @include Other.card;
  flex-direction: column;

  .info {
    padding: 10px;
  }

  .actions {
    @include Other.even-line;
  }
}

</style>
