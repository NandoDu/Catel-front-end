<script setup lang="ts">
import {reactive, ref} from 'vue';

const ifOperationShow = ref(false);
const operationIndex = ref(0);
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
    'phone': 13333333333,
    'idNumber': 232323232323232323,
    'birthday': '1999-05-03',
  },
  {
    'ifOperationShow': false,
    'name': '张四',
    'phone': 14444444444,
    'idNumber': 242424242424242424,
    'birthday': '1999-05-04',
  },
  {
    'ifOperationShow': false,
    'name': '张五',
    'phone': 15555555555,
    'idNumber': 252525252525252525,
    'birthday': '1999-05-05',
  },
]);
const showOrHideOperation = function (index: any) {
  for (let i = 0; i < orderInfoList.length; i++) {
    if (i == index) {
      continue;
    }
    orderInfoList[i].ifOperationShow = false;
  }
  orderInfoList[index].ifOperationShow = !orderInfoList[index].ifOperationShow;
};
const showOrHidePersonOperation = function (index: any) {
  for (let i = 0; i < personInfoList.length; i++) {
    if (i == index) {
      continue;
    }
    personInfoList[i].ifOperationShow = false;
  }
  personInfoList[index].ifOperationShow = !personInfoList[index].ifOperationShow;
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
          <div
            class="orderList"
            v-for="(orderInfo, index) in orderInfoList"
          >
            <div
              class="orderInfoCard"
              :class="{'orderInfoFirst' : index === 0}"
              @click="showOrHideOperation(index)"
            >
              <div class="orderState">
                {{ orderInfo['state'] }}
              </div>
              <div class="separatingLine" />
              <div class="orderHotelNameAndAddress">
                <div class="orderHotelName">
                  {{ orderInfo['name'] }}
                </div>
                <div class="orderHotelAddress">
                  <img
                    src="src/asset/dizhi.png"
                    style="width: 15px; height: 15px; align-self: center"
                  >
                  <div class="orderHotelAddressText">
                    {{ orderInfo['address'] }}
                  </div>
                </div>
              </div>
              <div class="orderDateInfo">
                <div class="orderDateInInfo">
                  <div class="orderDateInIcon">
                    住
                  </div>
                  <div class="orderDateIn">
                    {{ orderInfo['dateIn'] }}
                  </div>
                </div>
                <div class="orderDateOutInfo">
                  <div class="orderDateOutIcon">
                    离
                  </div>
                  <div class="orderDateOut">
                    {{ orderInfo['dateOut'] }}
                  </div>
                </div>
              </div>
              <div class="orderPrice">
                ¥ {{ orderInfo['price'] }}
              </div>
            </div>
            <div
              class="orderOperation"
              v-show="orderInfo['ifOperationShow']"
            >
              <div class="operationOpt">
                <div class="checkOperation">
                  <div class="checkIcon">
                    A
                  </div>
                  <div class="checkText">
                    查看
                  </div>
                </div>
                <div class="cancelOperation">
                  <div class="cancelIcon">
                    B
                  </div>
                  <div class="cancelText">
                    撤销
                  </div>
                </div>
                <div class="reviewOperation">
                  <div class="reviewIcon">
                    C
                  </div>
                  <div class="reviewText">
                    评价
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div
              class="personList"
              v-for="(personInfo, index) in personInfoList"
            >
              <div
                class="personInfoCard"
                :class="{'personInfoFirst' : index === 0}"
                @click="showOrHidePersonOperation(index)"
              >
                <div class="personName">
                  {{ personInfo['name'] }}
                </div>
                <div class="personPhone">
                  {{ personInfo['phone'] }}
                </div>
              </div>
              <div
                class="personOperation"
                v-show="personInfo['ifOperationShow']"
              >
                <div class="personOperationOpt">
                  <div class="personCheckOperation">
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
                  <div class="personDeleteOperation">
                    <div class="personDeleteIcon">
                      C
                    </div>
                    <div class="personDeleteText">
                      删除
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="addPerson">
              <div class="addPersonIcon">
                <img
                  class="addPersonImg"
                  src="src/asset/jia.png"
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
            <div
              class="creditRecordList"
              v-for="(record, index) in orderInfoList"
            >
              <div
                class="creditRecordCard"
                :class="{'creditRecordFirst' : index === 0}"
                v-show="record['state'] !== '已预定'"
              >
                <div
                  class="addCreditIcon"
                  v-show="record['state'] === '已入住'"
                >
                  <img
                    class="addCreditImg"
                    src="src/asset/shangzhang.png"
                  >
                </div>
                <div
                  class="addCreditNum"
                  v-show="record['state'] === '已入住'"
                >
                  +{{ record['price'] }}
                </div>
                <div
                  class="minusCreditIcon"
                  v-show="record['state'] === '已撤销'"
                >
                  <img
                    class="minusCreditImg"
                    src="src/asset/xiadie.png"
                  >
                </div>
                <div
                  class="minusCreditNum"
                  v-show="record['state'] === '已撤销'"
                >
                  -{{ record['price'] }}
                </div>
                <div class="recordSeparatingLine" />
                <div class="recordHotelNameAndAddress">
                  <div class="recordHotelName">
                    {{ record['name'] }}
                  </div>
                  <div class="recordHotelAddress">
                    <img
                      src="src/asset/dizhi.png"
                      style="width: 13px; height: 13px; align-self: center"
                    >
                    <div class="recordHotelAddressText">
                      {{ record['address'] }}
                    </div>
                  </div>
                </div>
                <div class="recordDateInfo">
                  <div class="recordDateInInfo">
                    <div class="recordDateInIcon">
                      住
                    </div>
                    <div class="recordDateIn">
                      {{ record['dateIn'] }}
                    </div>
                  </div>
                  <div class="recordDateOutInfo">
                    <div class="recordDateOutIcon">
                      离
                    </div>
                    <div class="recordDateOut">
                      {{ record['dateOut'] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./PersonalInfo.scss" lang="scss" scoped />
