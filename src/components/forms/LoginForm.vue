<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form" @submit.native.prevent="onLogin">
      <div class="form-item-logo">
        <Logo size="200px" />
      </div>
      <div class="brand">Nebula</div>
      <el-form-item label="" prop="username">
        <el-input placeholder="username" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input type="password" placeholder="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <div class="form-actions">
        <img :src="captchaUrl" alt="Captcha" @click="initCaptcha" style="cursor: pointer;" title="点击刷新验证码"/>
      </div>
      <div class="form-actions">
        <el-input placeholder="请输入验证码" v-model="captcha" style="width: 20%"></el-input>
      </div>
      <div class="form-actions">
        <el-button type="primary" :loading="isSubmitting" class="login-button" @click="onLogin">Login</el-button>
      </div>
      <div class="form-actions">
        <el-button type="text" class="register-button" @click="goToRegister">Register</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import Logo from '../Logo.vue';
import axios from 'axios';

export default {
  name: 'LoginForm',
  components: {
    Logo,
    ElForm,
    ElFormItem,
    ElInput,
    ElButton
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      hasCaptcha: false,
      isSubmitting: false,
      captchaUrl: '',
      captcha: '',
      captchaKey: ''
    };
  },
  mounted() {
    this.initCaptcha();
  },
  methods: {
    onLogin() {
      this.isSubmitting = true;
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          axios({
            method: 'post',
            url: '/apis/user/login',
            params:{
              "username":this.loginForm.username,
              "password":this.loginForm.password,
              "key":this.captchaKey
            }
          }).then(response=>{
            console.log(response)
          })

          this.isSubmitting = false; // 确保在登录逻辑完成后设置isSubmitting为false
        } else {
          this.isSubmitting = false; // 如果表单验证失败，确保能再次提交
          alert('Please fill in the form correctly.');
        }
      });
    },
    goToRegister() {
      console.log("register")
      this.$router.push({ name: 'Register' }); // 假设你的注册路由命名为 'register'
    },
    initCaptcha() {
      axios({
        method: 'get',
        url: '/apis/user/getCaptcha',
        responseType: 'blob', // 重要：以arraybuffer形式接收响应体
        headers: {
          'Accept': 'image/jpeg' // 明确告诉服务器您期望的响应内容类型
        },
      })
          .then(response => {
            // 从响应头获取Captcha-Key
            const blob = new Blob([response.data], { type: 'image/jpeg' });
            this.captchaUrl = URL.createObjectURL(blob);
          })
          .catch(error => {
            console.error('Failed to fetch captcha', error);
          });
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 使登录容器占满整个视口高度 */
  padding: 0 20px; /* 防止内容触碰到视窗边缘 */
}
.login-form {
  flex-grow: 1; /* 允许login-form根据父容器大小进行伸展 */
  max-width: 30%; /* 设置一个最大宽度 */
  padding: 35px; /* 增加内边距 */
  border: 1px solid #dcdfe6;
  border-radius: 10px; /* 圆角 */
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
  background-color: white;
}

.login-button {
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
  .login-form {
    max-width: 100%;
    padding: 25px;
  }
}
</style>
