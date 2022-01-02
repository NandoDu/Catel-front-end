<script setup lang="ts">
import {reactive, ref} from 'vue';
import OrderItem from '../component/PersonalInfo/OrderItem.vue';
import Resident from '../component/PersonalInfo/Resident.vue';
import CreditEntry from '../component/PersonalInfo/CreditEntry.vue';
import {useAsyncState} from '@vueuse/core';
import {ordersOfUserAPI} from '../api/orderApi';
import {useTypedStore} from '../store';
import {userCreditHistoryAPI, userResidentsAPI} from '../api/userApi';
import VirryModal from '../component/Util/VirryModal.vue';
import ResidentAddition from '../component/PersonalInfo/ResidentAddition.vue';
import ModifyPassword from '../component/PersonalInfo/ModifyPassword.vue';
import ChargeVIP from '../component/PersonalInfo/ChargeVIP.vue';
import ModifyInfo from '../component/PersonalInfo/ModifyInfo.vue';
import {UserState} from '../store/user';
import useTranslation from '../config/i18n/useTranslation';

const store = useTypedStore();
const userState: UserState = store.getters['user/all'];
const message = useTranslation(['noPremium', 'basicPremium', 'superPremium']);
const premium2msg = {
  Nil: 'noPremium',
  Small: 'basicPremium',
  Big: 'superPremium',
};

const fetchOrders = () => ordersOfUserAPI({id: userState.userId!});
const fetchResidents = () => userResidentsAPI({id: userState.userId!});
const fetchCreditHistory = () => userCreditHistoryAPI({userId: userState.userId!});
const {state: orders} = useAsyncState(fetchOrders, []);
const {state: residents} = useAsyncState(fetchResidents, []);
const {state: creditHistory} = useAsyncState(fetchCreditHistory, []);
const refreshResident = async () => {
  residents.value = await fetchResidents();
};
const refreshOrder = async () => {
  orders.value = await fetchOrders();
  creditHistory.value = await fetchCreditHistory();
};

const activatedOrders = reactive<number[]>([]);
const activatedResidents = reactive<number[]>([]);
const activeItem = (list: number[], index: number) => {
  if (list.length == 0) list.push(index);
  else {
    if (list[0] == index) list.pop();
    else list[0] = index;
  }
};
const activeOrderItem = (index: number) => activeItem(activatedOrders, index);
const activeResidentItem = (index: number) => activeItem(activatedResidents, index);

const residentAddition = ref();
const showResidentAddition = () => residentAddition.value.open();
const modifyPassword = ref();
const showModifyPassword = () => modifyPassword.value.open();
const chargeVip = ref();
const showChargeVip = () => chargeVip.value.open();
const modifyInfo = ref();
const showModifyInfo = () => modifyInfo.value.open();
</script>

<template>
  <div class="mainPart">
    <div class="leftPart">
      <div class="orderPart">
        <div class="titleSquare" />
        <div class="orderPartTitle">
          我的订单
        </div>
        <!--        <div class="allOrderText">-->
        <!--          全部订单-->
        <!--        </div>-->
        <div class="orderListPart">
          <OrderItem
            v-for="(orderInfo, index) in orders"
            :key="index"
            :order-info="orderInfo"
            :index="index"
            :if-operation-show="activatedOrders.includes(index)"
            @toggle="activeOrderItem"
            @needRefresh="refreshOrder"
          />
        </div>
      </div>
    </div>
    <div class="rightPart">
      <div class="rightTopPart">
        <div class="userPart">
          <div class="titleSquare" />
          <div class="userPartTitle">
            账号信息
          </div>
          <div
            class="modifyUserText"
            @click="showModifyInfo"
          >
            修改
          </div>
          <div class="userInfoPart">
            <div class="userAvatarAndName">
              <div class="userAvatar">
                <img
                  :src="userState.avatar"
                  class="userAvatarImg"
                  alt=""
                >
                <div class="modifyAvatar">
                  修改头像
                </div>
              </div>
              <div class="userNamePart">
                <!--                <div class="userNameIcon">-->
                <!--                  <img-->
                <!--                    src="src/asset/modify.png"-->
                <!--                    class="userNameImg"-->
                <!--                    alt="Modify"-->
                <!--                  >-->
                <!--                </div>-->
                <div class="userName">
                  {{ userState.username }}
                </div>
              </div>
            </div>
            <div class="userBasicInfoPart">
              <div class="userEmail">
                {{ userState.email }}
              </div>
              <div class="userType">
                {{ message[premium2msg[userState.premium]] }}
              </div>
              <div class="userCredit">
                (信用值：{{ userState.credit }})
              </div>
            </div>
            <div class="userOperationPart">
              <div
                class="modifyPassword"
                @click="showModifyPassword"
              >
                <div class="modifyPasswordText">
                  修改密码
                </div>
                <div class="modifyPasswordIcon" />
              </div>
              <div class="becomeVIP">
                <div
                  class="becomeVIPText"
                  @click="showChargeVip"
                >
                  充值会员
                </div>
                <div class="becomeVIPIcon" />
              </div>
            </div>
          </div>
        </div>
        <div class="personPart">
          <div class="titleSquare" />
          <div class="personPartTitle">
            入住人信息
          </div>
          <div
            class="addPersonText"
            @click="showResidentAddition"
          >
            添加
          </div>
          <div class="personListPart">
            <Resident
              v-for="(personInfo, index) in residents"
              :key="index"
              :resident-info="personInfo"
              :index="index"
              :if-operation-show="activatedResidents.includes(index)"
              @toggle="activeResidentItem"
              @need-refresh="refreshResident"
            />
            <div class="addPerson">
              <div class="addPersonIcon">
                <img
                  class="addPersonImg"
                  src="src/asset/icon/add.png"
                  alt="Add Sign"
                >
              </div>
              <div
                class="addPersonBottomText"
                @click="showResidentAddition"
              >
                添加新的入住人信息
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rightBottomPart">
        <div class="creditPart">
          <div class="titleSquare" />
          <div class="creditPartTitle">
            信用值变更
          </div>
          <div class="creditRecordListPart">
            <CreditEntry
              v-for="(entry, index) in creditHistory"
              :key="index"
              :record="entry"
              :index="index"
            />
            <div
              class="noCreditEntry"
              v-if="creditHistory.length === 0"
            >
              <img
                src="src/asset/empty.png"
                class="noCreditEntryIcon"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <VirryModal ref="residentAddition">
    <ResidentAddition @need-refresh="refreshResident" />
  </VirryModal>
  <VirryModal ref="modifyPassword">
    <ModifyPassword />
  </VirryModal>
  <VirryModal ref="chargeVip">
    <ChargeVIP
      @need-refresh="changeVipType"
    />
  </VirryModal>
  <VirryModal ref="modifyInfo">
    <ModifyInfo is-update />
  </VirryModal>
</template>

<style src="./PersonalInfo.scss" lang="scss" scoped />
