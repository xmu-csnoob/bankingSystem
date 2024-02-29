<template>
  <div class="transact-container">
    <el-form ref="transactForm" :model="transactForm" class="transact-form" @submit.native.prevent="ontransact">
      <div class="form-item-logo">
        <Logo size="200px"/>
      </div>
      <div class="brand">
        <el-form-item label="Nebula" prop="brand"/>
      </div>
      <el-form-item label="" prop="username">
        <el-input placeholder="username" v-model="transactForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input type="password" placeholder="password" v-model="transactForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <div class="form-actions">
        <el-button type="primary" :loading="isSubmitting" class="transact-button" @click="ontransact">transact</el-button>
      </div>
      <div class="form-actions">
        <el-button type="text" class="register-button" @click="goToRegister">Register</el-button>
      </div>
    </el-form>
  </div>
</template>


<script>
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import Logo from "../Logo.vue";

export default {
  name: 'TransactForm',
  components: {
    Logo,
    ElForm,
    ElFormItem,
    ElInput,
    ElButton
  },
  data() {
    return {
      transactForm: {
        username: '',
        password: ''
      },
      isSubmitting: false
    };
  },
  methods: {
    ontransact() {
      this.isSubmitting = true;
      this.$refs.transactForm.validate((valid) => {
        if (valid) {
          alert('transact successful');
          // TODO: Implement your forms logic here
          // After forms logic, set isSubmitting to false
        } else {
          alert('Please fill in the form');
          this.isSubmitting = false;
          return false;
        }
      });
    },
    goToRegister() {
      this.$router.push({ name: 'register' }); // 假设你的注册路由命名为 'register'
    }
  }
};
</script>

<style scoped>
.transact-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 使登录容器占满整个视口高度 */
  padding: 0 20px; /* 防止内容触碰到视窗边缘 */
}
.transact-form {
  flex-grow: 1; /* 允许transact-form根据父容器大小进行伸展 */
  max-width: 30%; /* 设置一个最大宽度 */
  padding: 35px; /* 增加内边距 */
  border: 1px solid #dcdfe6;
  border-radius: 10px; /* 圆角 */
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
  background-color: white;
}

.transact-button {
  width: 50%; /* 让登录按钮宽度充满容器 */
  padding: 12px 20px; /* 增加按钮的垂直和水平填充 */
}
.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}
.form-item-logo{
  display: flex;
  justify-content: center;
  width: 100%; /* 让Logo的容器宽度与form相同 */
  /* 如果需要，可以添加上下边距 */
  margin-bottom: 20px;
  margin-top: 0;
}
.brand {
  display: flex;
  justify-content: center;
  font-size: 72px; /* 修改字体大小 */
  font-weight: bold; /* 字体加粗 */
  font-style: italic;
  font-family: Georgia,serif;
  color: #333; /* 修改字体颜色 */
  width: 100%; /* 保持宽度与form相同 */
  margin-bottom: 20px; /* Brand与下方内容的间距 */
}
.register-button {
  padding: 6px 12px; /* 注册按钮的填充小于登录按钮 */
  color: #606266; /* 为注册按钮设置颜色，使其看起来更像文本 */
  font-size: 0.875em; /* 字体大小稍小 */
  border: none; /* 去除边框 */
  background: none; /* 去除背景 */
}


/* 可以考虑添加一些媒体查询来调整小屏幕上的表现 */
@media (max-width: 600px) {
  .transact-form {
    max-width: 100%;
    padding: 25px;
  }
}
</style>
