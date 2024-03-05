<template>
  <div id="register-page">
    <RegisterForm />
  </div>
</template>

<script setup>
import RegisterForm from '../components/forms/RegisterForm.vue'
</script>

<style scoped>
#register-page {
  background-image: url('../assets/login.jpg'); /* 根据需要调整背景图片路径 */
  width: 100%;
  max-height: 100%;
  position: -ms-device-fixed;
  background-size: cover; /* 覆盖整个容器，保持背景图片的比例 */
}
</style>
