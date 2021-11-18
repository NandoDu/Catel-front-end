<script setup lang="ts">
defineProps<{ avatar: string, hotelId: string, title: string, content: string, username: string}>();
</script>
<template>
  <div class="main-container">
    <img
      :src="avatar"
      alt="用户头像"
      class="avatar-holder"
    >
  </div>
</template>

<style scoped>
.main-container {
	width: 1160px;
	height: 200px;
	margin-bottom: 20px;
	background-color: white;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.avatar-holder{
	width: 50px;
	height: 50px;
}
</style>