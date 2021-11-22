<script setup lang="ts">
import {inject, reactive, unref} from 'vue';
import LineInput from '../Util/LineInput.vue';
import BiggerButton from '../Header/BiggerButton.vue';

const residentInfo = reactive({
  name: '',
  phone: '',
  idNo: '',
});
const closeModal = inject<{ (): void } | undefined>('VirryModal.close', undefined);
const submitModify = () => {
  console.log(residentInfo);
};
</script>

<template>
  <div class="resident-addition">
    <h3>增加入住人</h3>

    <LineInput
      label="Resident Name"
      placeholder="Real Name"
      v-model="residentInfo.name"
    />

    <LineInput
      label="Phone Number"
      placeholder="Phone Number"
      v-model="residentInfo.phone"
    />

    <LineInput
      label="Id Number"
      placeholder="Id Number"
      v-model="residentInfo.idNo"
    />

    <div class="inline">
      Birthday
      <ElDatePicker />
    </div>

    <div class="inline">
      <BiggerButton
        color="red"
        text="Cancel"
        @click="closeModal"
      />
      <BiggerButton
        color="green"
        text="Modify"
        @click="submitModify"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "src/util/Shadow";
@use "src/util/Other";


.resident-addition {
  @include Other.center-flex;
  @include Other.card;
}

.inline {
  @include Other.center-flex;
  width: 100%;
  flex-direction: row;
  margin: 5px;
  justify-content: space-evenly;
}


label {
  width: 400px;
  margin: 10px;
}

</style>
