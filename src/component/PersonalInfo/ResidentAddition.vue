<script setup lang="ts">
import {reactive} from 'vue';
import LineInput from '../Util/LineInput.vue';

const residentInfo = reactive({
  name: '',
  phone: '',
  idNo: '',
});

</script>

<template>
  <div id="resident-addition">
    <h3>增加入住人</h3>

    <LineInput
      label="Resident Name"
      placeholder="Real Name"
    />

    <LineInput
      label="Phone Number"
      placeholder="Phone Number"
    />

    <LineInput
      label="Id Number"
      placeholder="Id Number"
    />

    <div class="inline">
      <ElDatePicker style="display: block" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "src/util/Shadow";
@use "src/util/Other";


#resident-addition {
  @include Other.center-flex;
  @include Other.card;
}

.inline {
  @include Other.center-flex;
  flex-direction: row;
  margin: 5px;
}


label {
  //text-align: right;
  width: 400px;
  margin: 10px;
}

</style>
