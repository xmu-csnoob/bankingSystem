<template>
  <el-menu active-text-color='#ffd04b' background-color='#545c64' class='el-menu-vertical-demo'
    default-active='/bank/BankInfo' text-color='#fff' @open='handleOpen' @close='handleClose' router>
    <el-menu-item index='/bank/BankInfo'>
      <el-icon>
        <icon-menu />
      </el-icon>
      <span>交易记录</span>
    </el-menu-item>
    <el-menu-item index='/bank/BankTransfer'>
      <el-icon>
        <document />
      </el-icon>
      <span>转账页面</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu
} from '@element-plus/icons-vue'

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style  lang="scss">
.el-menu {
  height: 100%;
}
</style>
