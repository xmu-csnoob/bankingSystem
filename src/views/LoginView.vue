<script setup>
import LoginForm from "../components/forms/LoginForm.vue";
import Logo from "../components/Logo.vue";
</script>

<template>
  <div id="login-page">
    <LoginForm />
  </div>
</template>

<style scoped>
#login-page {
  background-image: url('../assets/login.jpg'); /* 调整为实际的图片路径 */
  width: 100%;
  max-height: 100%;
  position: -ms-device-fixed;
  background-size: 100%;
}
</style>