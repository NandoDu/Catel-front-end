<script setup lang="ts">
import {reactive} from 'vue';
import OrderItem from '../component/PersonalInfo/OrderItem.vue';
import Resident from '../component/PersonalInfo/Resident.vue';
import CreditEntry from '../component/PersonalInfo/CreditEntry.vue';

const orderInfoList = reactive([
  {
    'ifOperationShow': false,
    'state': '已入住',
    'name': '全季酒店',
    'address': '北京朝阳区亚运村小营东路3号凯基伦大厦4-5层',
    'dateIn': '2021-04-16',
    'dateOut': '2021-04-17',
    'price': '1401.00',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G2/M00/33/24/Cii-Tli89XeIVj6LAASlvtFwJXAAAIHHAJd-gsABKXW202_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已预定',
    'name': '金陵饭店',
    'address': '南京鼓楼区汉中路2号',
    'dateIn': '2021-06-15',
    'dateOut': '2021-06-16',
    'price': '769.01',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G2/M00/33/27/Cii-TFi89vaIINP0AAHNwdCmqR0AAIHIAKjWu4AAc3Z977_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已撤销',
    'name': '金鹰珠江壹号国际酒店',
    'address': '北京朝阳区亚运村小营东路3号凯基伦大厦4-5层',
    'dateIn': '2021-06-16',
    'dateOut': '2021-06-17',
    'price': '500.00',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G1/M00/9A/21/Cii9EFi9Qz2IRVonAApT49DJ5fwAAIb9gHEZe8AClP7382_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已入住',
    'name': '香格里拉大酒店',
    'address': '西安雁塔区科技路38号乙',
    'dateIn': '2021-07-13',
    'dateOut': '2021-07-14',
    'price': '663.00',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G5/M00/F3/C8/Cii-slrz4mOIZD1AAAJJlkSuRT8AAGpJAKdGcwAAkmu187_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已入住',
    'name': '全季酒店',
    'address': '北京朝阳区亚运村小营东路3号凯基伦大厦4-5层',
    'dateIn': '2021-04-16',
    'dateOut': '2021-04-17',
    'price': '401.00',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G2/M00/33/79/Cii-T1i9Hf-IUZpYAACB6DJGKykAAIHwQP-89gAAIIA154_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已撤销',
    'name': '金陵饭店',
    'address': '南京鼓楼区汉中路2号',
    'dateIn': '2021-06-15',
    'dateOut': '2021-06-16',
    'price': '769.01',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G2/M00/C7/FD/Cii-TFknV4GIddkeAAFP_vTDaYkAAKaVwM4kNgAAVAW454_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已入住',
    'name': '金鹰珠江壹号国际酒店',
    'address': '北京朝阳区亚运村小营东路3号凯基伦大厦4-5层',
    'dateIn': '2021-06-16',
    'dateOut': '2021-06-17',
    'price': '500.00',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G2/M00/33/24/Cii-Tli89XeIVj6LAASlvtFwJXAAAIHHAJd-gsABKXW202_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已撤销',
    'name': '香格里拉大酒店',
    'address': '西安雁塔区科技路38号乙',
    'dateIn': '2021-07-13',
    'dateOut': '2021-07-14',
    'price': '663.00',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G2/M00/33/27/Cii-TFi89vaIINP0AAHNwdCmqR0AAIHIAKjWu4AAc3Z977_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已入住',
    'name': '全季酒店',
    'address': '北京朝阳区亚运村小营东路3号凯基伦大厦4-5层',
    'dateIn': '2021-04-16',
    'dateOut': '2021-04-17',
    'price': '401.00',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G1/M00/9A/21/Cii9EFi9Qz2IRVonAApT49DJ5fwAAIb9gHEZe8AClP7382_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已撤销',
    'name': '金陵饭店',
    'address': '南京鼓楼区汉中路2号',
    'dateIn': '2021-06-15',
    'dateOut': '2021-06-16',
    'price': '769.01',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G5/M00/F3/C8/Cii-slrz4mOIZD1AAAJJlkSuRT8AAGpJAKdGcwAAkmu187_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已入住',
    'name': '金鹰珠江壹号国际酒店',
    'address': '北京朝阳区亚运村小营东路3号凯基伦大厦4-5层',
    'dateIn': '2021-06-16',
    'dateOut': '2021-06-17',
    'price': '500.00',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G5/M00/F3/C8/Cii-slrz4mOIZD1AAAJJlkSuRT8AAGpJAKdGcwAAkmu187_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已入住',
    'name': '香格里拉大酒店',
    'address': '西安雁塔区科技路38号乙',
    'dateIn': '2021-07-13',
    'dateOut': '2021-07-14',
    'price': '663.00',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G5/M00/F3/C8/Cii-slrz4mOIZD1AAAJJlkSuRT8AAGpJAKdGcwAAkmu187_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已撤销',
    'name': '全季酒店',
    'address': '北京朝阳区亚运村小营东路3号凯基伦大厦4-5层',
    'dateIn': '2021-04-16',
    'dateOut': '2021-04-17',
    'price': '401.00',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G5/M00/F3/C8/Cii-slrz4mOIZD1AAAJJlkSuRT8AAGpJAKdGcwAAkmu187_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已入住',
    'name': '金陵饭店',
    'address': '南京鼓楼区汉中路2号',
    'dateIn': '2021-06-15',
    'dateOut': '2021-06-16',
    'price': '769.01',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G5/M00/F3/C8/Cii-slrz4mOIZD1AAAJJlkSuRT8AAGpJAKdGcwAAkmu187_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已入住',
    'name': '金鹰珠江壹号国际酒店',
    'address': '北京朝阳区亚运村小营东路3号凯基伦大厦4-5层',
    'dateIn': '2021-06-16',
    'dateOut': '2021-06-17',
    'price': '500.00',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G5/M00/F3/C8/Cii-slrz4mOIZD1AAAJJlkSuRT8AAGpJAKdGcwAAkmu187_w450_h300_c1_t0.jpg',
  },
  {
    'ifOperationShow': false,
    'state': '已入住',
    'name': '香格里拉大酒店',
    'address': '西安雁塔区科技路38号乙',
    'dateIn': '2021-07-13',
    'dateOut': '2021-07-14',
    'price': '663.00',
    'roomType': '大床房',
    'breakfast': false,
    'img': 'https://m.tuniucdn.com/fb2/t1/G5/M00/F3/C8/Cii-slrz4mOIZD1AAAJJlkSuRT8AAGpJAKdGcwAAkmu187_w450_h300_c1_t0.jpg',
  },
]);
const personInfoList = reactive([
  {
    'ifOperationShow': false,
    'name': '张三',
    'phone': '13333333333',
    'idNumber': '232323232323232323',
    'birthday': '1999-05-03',
  },
  {
    'ifOperationShow': false,
    'name': '张四',
    'phone': '14444444444',
    'idNumber': '242424242424242424',
    'birthday': '1999-05-04',
  },
  {
    'ifOperationShow': false,
    'name': '张五',
    'phone': '15555555555',
    'idNumber': '252525252525252525',
    'birthday': '1999-05-05',
  },
]);

const activeResidentItem = (index: number) => {
  for (let i = 0; i < personInfoList.length; i++) {
    if (i == index) {
      continue;
    }
    personInfoList[i].ifOperationShow = false;
  }
  personInfoList[index].ifOperationShow = !personInfoList[index].ifOperationShow;
};
const activeOrderItem = (index: number) => {
  for (let i = 0; i < orderInfoList.length; i++) {
    if (i == index) {
      continue;
    }
    orderInfoList[i].ifOperationShow = false;
  }
  orderInfoList[index].ifOperationShow = !orderInfoList[index].ifOperationShow;
};
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
                >
                <div class="modifyAvatar">
                  修改头像
                </div>
              </div>
              <div class="userNamePart">
                <div class="userNameIcon">
                  <img
                    src="src/asset/xiugai.png"
                    class="userNameImg"
                  >
                </div>
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
          <div class="addPersonText">
            添加
          </div>
          <div class="personListPart">
            <Resident
              v-for="(personInfo, index) in personInfoList"
              :key="index"
              :resident-info="{index, ...personInfo}"
              @toggle="activeResidentItem"
            />
            <div class="addPerson">
              <div class="addPersonIcon">
                <img
                  class="addPersonImg"
                  src="src/asset/icons/add.png"
                  alt="Add Sign"
                >
              </div>
              <div class="addPersonBottomText">
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
</template>

<style src="./PersonalInfo.scss" lang="scss" scoped />
