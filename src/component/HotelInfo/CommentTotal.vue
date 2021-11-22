<script setup lang="ts">
defineProps<{ count: number, rate: number }>();
</script>
<template>
  <div class="main-container">
    <div class="content-container">
      <div class="total-title">
        <div class="comment-title">
          点评
        </div>
        <div class="count-title">
          （{{ count }}位住客真实评价）
        </div>
      </div>
      <div class="total-content">
        <div class="comment-rate">
          <div class="rate-word">
            {{ rate >= 4 ? '非常满意' : (rate >= 3 ? '比较满意' : (rate >= 2 ? '一般' : (rate >= 1 ? '不太满意' : '不满意'))) }}
          </div>
          <div class="rate-score">
            <div class="current-score">
              <strong>{{ rate }}</strong>
            </div>
            <div class="full-score">
              / 5
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.main-container {
  margin-top: 11px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom: 1px solid #dadfe6;
  width: 1160px;
  height: 250px;
  background-color: white;
}

.content-container {
  width: 1128px;
  margin-left: 16px;
  margin-top: 24px;
}

.total-title {
  display: flex;
  flex-direction: row;
  height: 26px;
  line-height: 26px;
}

.comment-title {
  font-size: 20px;
  font-weight: 700;
  color: #0f294d;
}

.count-title {
  color: #999;
  font-size: 16px;
  margin-left: 8px;
  font-weight: bold;
}

.total-content {
  height: 175px;
  width: 1128px;
  margin-top: 20px;
  padding-top: 16px;
}

.comment-rate {
  margin-top: 16px;
  height: 88px;
  width: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rate-word{
  font-size: 22px;
  color: #366ab3;
  font-weight: 700;
  line-height: 33px;
}
.rate-score{
  display: flex;
  flex-direction: row;

}
.current-score{
  font-size: 48px;
  color: #366ab3;
  line-height: 55px;
  padding-right: 7px;
  font-family: BlinkMacSystemFont,-apple-system,Roboto,Helvetica,Arial,sans-serif;
}
.full-score{
  font-size: 32px;
  color: #acb4bf;
  line-height: 55px;
  text-align: left;
  font-family: BlinkMacSystemFont,-apple-system,Roboto,Helvetica,Arial,sans-serif;
}
</style>