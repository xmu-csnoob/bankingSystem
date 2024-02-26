<template>
  <el-container class="home-view">
    <div class="content-container">
      <el-header>
        <UserInfo id="user-info" :user="user" @open-user-details="openUserDetailsDialog"/>
        <el-dialog
            title="个人信息"
            :visible.sync="isDialogVisible"
            width="30%"
            :before-close="handleClose">
          <p>姓名: {{ user.name }}</p>
          <p>邮箱: {{ user.email }}</p>
          <!-- ... 其他个人信息 ... -->
        </el-dialog>
      </el-header>
      <el-main>
        <BankCards id="bankcard" :bankCards="user.bankCards" />
      </el-main>
    </div>
  </el-container>
</template>

<script>


import UserInfo from "../components/cards/UserInfo.vue";
import BankCards from "../components/cards/BankCards.vue";

export default {
  components: {
    UserInfo,
    BankCards
  },
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bankCards: [
          { id: 1, bankName: 'Bank A', cardNumber: 'XXXX XXXX XXXX 1234' },
          { id: 2, bankName: 'Bank B', cardNumber: 'XXXX XXXX XXXX 5678' },
          // 更多银行卡数据...
        ],
      },
      dialogVisible: false, // 控制对话框的显示
    };
  },
  methods: {
    handleShowUserDetails() {
      this.isDialogVisible = true; // 当点击按钮时显示对话框
    },
    handleClose(done) {
      this.isDialogVisible = false; // 关闭对话框的方法
    },
  },
};
</script>

<style scoped>
.home-view {
  padding: 2rem;
  margin: 0;
  min-height: 100vh; /* 使背景图片填满整个视口的高度 */
  background-image: url('../assets/login.jpg'); /* 替换为您的背景图片路径 */
  background-size: cover; /* 背景图片覆盖整个元素 */
  background-position: center center; /* 背景图片居中 */
  background-repeat: no-repeat; /* 不重复背景图片 */
  box-sizing: border-box;
  display: flex;
  justify-content: center; /* 水平居中内部容器 */
}

.content-container {
  width: 100%;
  max-width: 50vw; /* 屏幕宽度的50% */
  background: #FFFFFF; /* Element UI 常用的纯白背景 */
  padding: 20px;
  margin: 40px auto; /* 在页面中居中显示 */
  box-shadow: 0 2px 12px rgba(0,0,0,0.1); /* Element UI 常用的阴影效果 */
  border-radius: 4px; /* 圆角 */
}

#user-info, #bankcard {
  border: 1px solid #ebeef5; /* Element UI 常用的边框颜色 */
  margin-bottom: 20px; /* 底部外边距 */
  box-shadow: 0 2px 12px rgba(0,0,0,0.05); /* 给子组件也应用轻微的阴影，以产生层次感 */
}

/* Element UI 风格的按钮 */
.el-button {
  background-color: #409eff; /* Element UI 主题蓝色 */
  color: white;
  border: none; /* 移除边框 */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* 按钮阴影 */
}

.el-button:hover {
  background-color: #66b1ff; /* 鼠标悬浮时的颜色 */
}

</style>
