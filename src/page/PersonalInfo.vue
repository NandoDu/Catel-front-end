<script setup lang="ts">
import {reactive, ref} from 'vue';
import OrderItem from '../component/PersonalInfo/OrderItem.vue';
import Resident from '../component/PersonalInfo/Resident.vue';
import CreditEntry from '../component/PersonalInfo/CreditEntry.vue';
import {useAsyncState} from '@vueuse/core';
import {ordersOfUserAPI} from '../api/orderApi';
import {useTypedStore} from '../store';
import {userResidentsAPI} from '../api/userApi';
import VirryModal from '../component/Util/VirryModal.vue';
import ResidentAddition from '../component/PersonalInfo/ResidentAddition.vue';

const store = useTypedStore();
const id = store.getters['user/userId'];
const activatedOrders = reactive<number[]>([]);
const activatedResidents = reactive<number[]>([]);
const {state: orderInfoList} = useAsyncState(ordersOfUserAPI({id}), []);
const {state: personInfoList} = useAsyncState(userResidentsAPI({id}), []);
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
</script>

<template>
  <div class="mainPart">
    <div class="leftPart">
      <div class="orderPart">
        <div class="titleSquare" />
        <div class="orderPartTitle">
          我的订单
        </div>
        <div class="allOrderText">
          全部订单
        </div>
        <div class="orderListPart">
          <OrderItem
            v-for="(orderInfo, index) in orderInfoList"
            :key="index"
            :order-info="{index, ...orderInfo}"
            :if-operation-show="activatedOrders.includes(index)"
            @toggle="activeOrderItem"
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
          <div class="modifyUserText">
            修改
          </div>
          <div class="userInfoPart">
            <div class="userAvatarAndName">
              <div class="userAvatar">
                <img
                  src="src/asset/cat.jpeg"
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
                  Catel
                </div>
              </div>
            </div>
            <div class="userBasicInfoPart">
              <div class="userEmail">
                nandodu@163.com
              </div>
              <div class="userType">
                普通用户
              </div>
              <div class="userCredit">
                (信用值：100)
              </div>
            </div>
            <div class="userOperationPart">
              <div class="modifyPassword">
                <div class="modifyPasswordText">
                  修改密码
                </div>
                <div class="modifyPasswordIcon" />
              </div>
              <div class="becomeVIP">
                <div class="becomeVIPText">
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
              v-for="(personInfo, index) in personInfoList"
              :key="index"
              :resident-info="{index, ...personInfo}"
              :if-operation-show="activatedResidents.includes(index)"
              @toggle="activeResidentItem"
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
          <div class="allCreditText">
            全部记录
          </div>
          <div class="creditRecordListPart">
            <CreditEntry
              v-for="(record, index) in orderInfoList"
              :key="index"
              :record="{index, ...record}"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <VirryModal ref="residentAddition">
    <ResidentAddition />
  </VirryModal>
</template>

<style src="./PersonalInfo.scss" lang="scss" scoped />
