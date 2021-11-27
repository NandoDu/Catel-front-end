<script setup lang="ts">
import BiggerButton from '../Header/BiggerButton.vue';
import useTranslation from '../../config/i18n/useTranslation';
import {inject, reactive} from 'vue';
import {publishCommentAPI} from '../../api/comment/publish';
import {useTypedStore} from '../../store';
import {ElMessage} from 'element-plus';

const prop = defineProps<{
  orderId: number,
}>();

const message = useTranslation(['publishComment', 'publishOk', 'title', 'publish', 'fieldMissing']);
const closeModal = inject<{ (): void }>('VirryModal.close');
const comment = reactive({
  score: 5,
  title: '',
  content: '',
});
const store = useTypedStore();
const userId = store.getters['user/userId'];

const contentSize = {
  minRows: 3,
  maxRows: 8,
};

const submit = async () => {
  if (comment.title == '') {
    ElMessage.error({
      message: message.value.fieldMissing,
      center: true,
    });
    return;
  }
  try {
    await publishCommentAPI({
      userId,
      orderId: prop.orderId,
      score: comment.score,
      title: comment.title,
      content: comment.content,
    });
  } catch (e) {
    console.log(e);
  }
  closeModal?.();
  ElMessage.success({
    message: message.value.publishOk,
    center: true,
  });
};
</script>

<template>
  <section class="order-comment">
    <h3>{{ message.publishComment }}</h3>
    <ElInput
      class="comment-input"
      v-model="comment.title"
    >
      <template #prepend>
        {{ message.title }}
      </template>
    </ElInput>
    <div id="rate">
      评分
      <ElRate
        class="comment-input"
        v-model="comment.score"
      />
    </div>
    <ElInput
      class="comment-input"
      type="textarea"
      v-model="comment.content"
      :autosize="contentSize"
    />
    <BiggerButton
      class="comment-input"
      :text="message.publish"
      color="green"
      @click="submit"
    />
  </section>
</template>

<style lang="scss" scoped>
@use "src/util/Other";

.order-comment {
  @include Other.center-flex;
  @include Other.card;
  flex-direction: column;
}

#rate {
  @include Other.center-flex;
}

.comment-input, .bigger-button.comment-input {
  margin: 10px 10px;
}
</style>
