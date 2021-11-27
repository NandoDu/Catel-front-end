<script setup lang="ts">

</script>
<template>
  <div class="main-container">
    <div class="announce-container">
      <div class="announce-title">
        价格说明
      </div>
      <div class="announce-content">
        <ul class="announce-list">
          <li class="announce-list-item">
            划线价格为参考价，该价格指商品或服务的门市价、服务提供商的指导价、零售价或该商品或服务曾经展示过的销售价等，并非原价；由于产品信息实时更新、市场价格波动等可能会与您预订时展示的不一致，该价格仅供您参考。
          </li>
          <li class="announce-list-item">
            价格指商品或服务的实时标价，为划线价基础上计算出的优惠金额。具体成交价格根据商品或服务参加活动，或会员使用优惠券等发生变化，最终以订单结算页价格为准。
          </li>
          <li class="announce-list-item">
            如有疑问，您可在预订前联系客服进行咨询。
          </li>
          <li class="announce-list-item">
            此说明仅当出现价格比较时有效。若服务提供商单独对划线价格进行说明的，以服务提供商的表述为准。
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container{
  height: 202px;
  width: 1160px;
  margin-top: 16px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 20px;
}
.announce-container{
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
}
.announce-title{
  font-family: BlinkMacSystemFont,-apple-system,Roboto,Helvetica,Arial,sans-serif;
  color: #0f294e;
  font-weight: 700;
  font-size: 20px;
}
.announce-list{
  color: #69717c;
  font-size: 14px;
  margin-left: 5px;
}
.announce-list-item{
  margin-top: 5px;
}

</style>