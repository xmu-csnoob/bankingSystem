<script setup>
import { House } from '@element-plus/icons-vue'
import LeftMenu from './LeftMenu.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => {
  router.push({
    name: 'Home'
  })
}
</script>

<template>
  <div class='left-menu'>
    <div class='left'>
      <div class='left-l' @click='goHome'>
        <el-icon :size='22' color='#fff'>
          <House />
        </el-icon>Logo
      </div>
      <div class='left-r'>Bank A XXXX XXXX XXXX 1234</div>
    </div>
    <div class='right'>
      <div class='right-l'>
        <LeftMenu></LeftMenu>
      </div>
      <div class='right-r'>
        <router-view v-slot='{ Component }'>
          <keep-alive>
            <component :is='Component' />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
  <div></div>
</template>

<style scoped  lang="scss">
.left-menu {
    height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .left {
    width: 100%;
    height: 50px;
    background: #545c64;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    .left-l {
      width: 200px;
      line-height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      .el-icon {
        margin-right: 10px;
      }
    }
    .left-r {
      flex: 1;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .right-l {
      width: 200px;
    }
    .right-r {
      flex: 1;
      padding: 20px;
    }
  }
}
</style>
