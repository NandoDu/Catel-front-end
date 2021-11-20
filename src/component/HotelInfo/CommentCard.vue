<script setup lang="ts">
defineProps<{ avatar: string, title: string, content: string, username: string, score: number, hotelName: string}>();
</script>
<template>
  <div class="main-container">
    <div class="user-container">
      <img
        :src="avatar"
        alt="用户头像"
        class="avatar-holder"
      >
      <span style="margin-bottom: 7px">{{ username }}</span>
      <span>{{ hotelName }}</span>
      <el-rate
        :model-value="score"
        :score-template="score+'分'"
        disabled
        show-score
        text-color="#ff9900"
      />
    </div>
    <div class="comment-container">
      <h3 style="height: 30px;margin-right: 24px;margin-top:12px;margin-bottom:7px;border-bottom: 1px solid #dadfe6">
        {{ title }}
      </h3>
      <p style="margin-top: 5px">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.main-container {
	width: 1160px;
	height: 200px;
  border-bottom: 1px solid #dadfe6 ;
	background-color: white;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.user-container{
  margin-left: 24px;
  height: 180px;
  border-right: 1px solid #dadfe6;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.avatar-holder{
	width: 50px;
	height: 50px;
  margin-bottom: 9px;
  border-radius: 25px;
}
.comment-container{
  width: 1100px;
  height: 180px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
}
</style>