<template>
  <div class="user-info-card">
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
    <button class="text-button" @click="$emit('show-user-details')">查看详情</button>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.user-info-card {
  border: 1px solid #eaecef;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;
  background: #fff; /* 卡片背景颜色 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.details-link {
  text-decoration: none; /* 移除链接下划线 */
}

.text-button {
  background: none;
  border: none;
  padding: 0;
  color: #409eff; /* Element UI的蓝色 */
  cursor: pointer;
}

.text-button:hover {
  text-decoration: underline; /* 鼠标悬浮时添加下划线 */
}
</style>
