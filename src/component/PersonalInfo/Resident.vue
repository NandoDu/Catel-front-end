<script setup lang="ts">
import {deleteResidentAPI, UserResident} from '../../api/userApi';
import ConfirmModal from '../Util/ConfirmModal.vue';
import useTranslation from '../../config/i18n/useTranslation';
import {ref} from 'vue';
import {ElMessage} from 'element-plus';
import VirryModal from '../Util/VirryModal.vue';
import ResidentDetail from './ResidentDetail.vue';

const prop = defineProps<{
  residentInfo: UserResident
  index: number
  ifOperationShow: boolean
}>();

const emit = defineEmits<{
  (e: 'toggle', index: number): void
  (e: 'needRefresh'): void
}>();
const message = useTranslation(['sureToDelete', 'deleteOk']);
const conformModal = ref();
const residentDetail = ref();
const showConfirm = () => conformModal.value.open();
const showDetail = () => residentDetail.value.open();
const deleteResident = async () => {
  console.log('delete');
  try {
    await deleteResidentAPI({residentId: prop.residentInfo.id});
    ElMessage.success({
      message: message.value.deleteOk,
      center: true,
    });
    emit('needRefresh');
  } catch (e) {
    console.log(e);
  }
  conformModal.value.close();
};
</script>

<template>
  <div
    class="personList"
  >
    <div
      class="personInfoCard"
      :class="{'personInfoFirst' : index === 0}"
      @click="emit('toggle', index)"
    >
      <div class="personName">
        {{ residentInfo.realName }}
      </div>
      <div class="personPhone">
        {{ residentInfo.phoneNumber }}
      </div>
    </div>
    <div
      class="personOperation"
      v-show="ifOperationShow"
    >
      <div class="personOperationOpt">
        <div
          class="personCheckOperation"
          @click="showDetail"
        >
          <div class="personCheckIcon">
            A
          </div>
          <div class="personCheckText">
            查看
          </div>
        </div>
        <div class="personModifyOperation">
          <div class="personModifyIcon">
            B
          </div>
          <div class="personModifyText">
            修改
          </div>
        </div>
        <div
          class="personDeleteOperation"
          @click="showConfirm"
        >
          <div class="personDeleteIcon">
            C
          </div>
          <div class="personDeleteText">
            删除
          </div>
        </div>
      </div>
    </div>
    <ConfirmModal
      ref="conformModal"
      @confirmed="deleteResident"
    >
      {{ message.sureToDelete }}
    </ConfirmModal>
    <VirryModal ref="residentDetail">
      <ResidentDetail :resident-info="residentInfo" />
    </VirryModal>
  </div>
</template>

<style lang="scss" scoped>
.personInfoCard {
  width: 100%;
  height: 35px;
  background-color: #f6f7f7;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  position: relative;
}

.personInfoCard:hover {
  cursor: pointer;
}

.personInfoFirst {
  margin-top: 10px;
}

.personName {
  font-size: 14px;
  align-self: center;
  position: absolute;
  left: 30px;
  color: #666;
}

.personPhone {
  font-size: 14px;
  align-self: center;
  position: absolute;
  right: 30px;
  color: #666;
}

.personOperation {
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  margin-right: 20px;
}

.personCheckOperation {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 200px;
  align-self: center;
  margin-left: 18px;
}

.personCheckIcon {
  background-color: green;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  border-radius: 50%;
  color: white;
  align-self: center;
  font-weight: bolder;
  font-size: 13px;
}

.personCheckText {
  align-self: center;
  margin-left: 3px;
  margin-top: -2px;
  color: green;
  font-weight: bolder;
  font-size: 13px;
  width: 28px;
}

.personModifyOperation {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin-left: 10px;
}

.personModifyIcon {
  background-color: dodgerblue;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  border-radius: 50%;
  color: white;
  align-self: center;
  font-weight: bolder;
  font-size: 13px;
}

.personModifyText {
  align-self: center;
  margin-left: 5px;
  margin-top: -2px;
  color: dodgerblue;
  font-weight: bolder;
  font-size: 13px;
  width: 28px;
}

.personDeleteOperation {
  display: flex;
  flex-direction: row;
  margin-right: 100px;
  cursor: pointer;
  margin-left: 10px;
}

.personDeleteIcon {
  background-color: red;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  border-radius: 50%;
  color: white;
  align-self: center;
  font-weight: bolder;
  font-size: 13px;
}

.personDeleteText {
  align-self: center;
  margin-left: 5px;
  margin-top: -2px;
  color: red;
  font-weight: bolder;
  font-size: 13px;
  width: 28px;
}

.personOperationOpt {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
}
</style>
