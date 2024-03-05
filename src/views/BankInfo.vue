<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { apiTransactionHistory } from '../api'

const timeRange = ref([])
watch(() => timeRange.value, (newValue, oldValue) => {
  if (newValue) {
    searchInfo.startTime = newValue[0]
    searchInfo.endTime = newValue[1]
  } else {
    searchInfo.startTime = ''
    searchInfo.endTime = ''
  }
})

const searchInfo = reactive({
  pageNum: 1,
  pageSize: 10,
  username: '',
  startTime: '',
  endTime: ''
})

const tableData = ref([])
const total = ref(0)
const getTableList = async () => {
  const res = await apiTransactionHistory(searchInfo)
  if (res.code === 200) {
    tableData.value = res.data.list
    total.value = res.data.total || 0
  }
}

const handleCurrentChange = (val) => {
  searchInfo.pageNum = val
  getTableList()
}

onMounted(() => {
  console.log('env', import.meta.env)
  getTableList()
})
</script>

<template>
  <div class='bank-info'>
    <div class='search'>
      <el-input v-model='searchInfo.username' placeholder='用户名' clearable />
      <el-date-picker v-model="timeRange" type="daterange" range-separator="至" start-placeholder="开始时间"
        end-placeholder="结束时间" format="YYYY-MM-DD" value-format="YYYY-MM-DD" />
      <el-button @click="getTableList">搜索</el-button>
    </div>

    <div class='table'>
      <el-table :data='tableData' border style='width: 100%'>
        <el-table-column prop='senderCardNumber' label='转出账号' />
        <el-table-column prop='receiverCardNumber' label='转入账号' />
        <el-table-column prop='amount' label='交易金额' />
        <el-table-column prop='createdTime' label='交易时间' />
      </el-table>

      <el-pagination small background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.bank-info {
  padding: 20px;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
}
.search {
  text-align: left;
  margin-bottom: 20px;
  .el-input {
    width: 200px;
    margin-right: 10px;
  }
  .el-button {
    margin-left: 10px;
  }
}
.el-pagination {
  margin-top: 10px;
}
</style>
