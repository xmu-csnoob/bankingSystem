<template>
  <div class="transact-container">
    <el-form ref="transactForm" :model="transactForm" class="transact-form" @submit.native.prevent="ontransact">
      <div class="form-item-logo">
        <Logo size="200px" />
      </div>
      <el-form-item label="Account Number" prop="accountNumber">
        <el-input placeholder="Account Number" v-model="transactForm.accountNumber" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Amount" prop="amount">
        <el-input type="currency" placeholder="Amount" v-model="transactForm.amount" autocomplete="off"></el-input>
      </el-form-item>
      <div class="form-actions">
        <el-button type="primary" :loading="isSubmitting" class="transact-button" @click="ontransact">Send</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import Logo from "../Logo.vue";
import axios from 'axios';
export default {
  name: 'transactForm',
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
        accountNumber: '',
        amount: '',
      },
      isSubmitting: false
    };
  },
  methods: {
    ontransact() {
      this.isSubmitting = true;
      const transactionData = {
        accountNumber: this.transactForm.accountNumber,
        amount: this.transactForm.amount,
      };

      axios.post('http://localhost:8080/user/transact', transactionData)
          .then(response => {
            // 处理响应数据
            console.log('Registration successful', response.data);
            // 这里可以添加更多注册成功后的操作，比如跳转到登录页面或显示成功消息
            this.isSubmitting = false;
          })
          .catch(error => {
            // 处理错误
            console.error('Registration failed', error);
            this.isSubmitting = false;
            // 这里可以添加错误处理逻辑，比如显示错误消息
          });
    }
  }
};
</script>

<style scoped>
.transact-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 使注册容器占满整个视口高度 */
  padding: 0 20px; /* 防止内容触碰到视窗边缘 */
}

.transact-form {
  flex-grow: 1; /* 允许transact-form根据父容器大小进行伸展 */
  max-width: 400px; /* 设置一个最大宽度，可根据实际需要调整 */
  padding: 35px; /* 增加内边距 */
  border: 1px solid #dcdfe6;
  border-radius: 10px; /* 圆角 */
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
  background-color: white;
}

.transact-button {
  width: 100%; /* 让注册按钮宽度充满容器 */
  padding: 12px 20px; /* 增加按钮的垂直和水平填充 */
  margin-top: 20px; /* 与上一个表单项的间距 */
}

.form-item-logo {
  display: flex;
  justify-content: center;
  width: 100%; /* 让Logo的容器宽度与form相同 */
  margin-bottom: 20px; /* Logo与下方内容的间距 */
}

.form-actions {
  display: flex;
  justify-content: center;
}

/* 响应式设计：小屏幕设备上的样式调整 */
@media (max-width: 600px) {
  .transact-form {
    max-width: 100%; /* 小屏幕上占满可用宽度 */
    padding: 25px;
  }
}
</style>
