<template>
  <div id="transact-page">
    <TransactForm />
  </div>
</template>

<script setup>
import TransactForm from "../components/forms/TransactForm.vue";
</script>

<style scoped>
#transact-page {
  width: 100%;
  max-height: 100%;
  position: -ms-device-fixed;
  background-size: cover; /* 覆盖整个容器，保持背景图片的比例 */
}
</style>
