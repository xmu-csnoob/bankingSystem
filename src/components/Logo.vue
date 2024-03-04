<template>
  <div class="logo" :style="{ width: size, height: size }">
    <img src="../assets/logo.png" :alt="altText" :style="{ width: '100%', height: '100%' }" />
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    size: {
      type: String,
      default: '100px' // 默认大小，如果没有传递 size 属性
    },
    altText: {
      type: String,
      default: 'Logo'
    }
  }
}
</script>

<style>
.logo{
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 使登录容器占满整个视口高度 */
  padding: 0 20px; /* 防止内容触碰到视窗边缘 */
}
</style>
