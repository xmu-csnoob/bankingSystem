<template>
  <el-form :model='formInline' :rules="addFormRules" class='demo-form-inline' ref="addFormRef">
    <el-form-item label='转出账号' prop="senderCardNumber">
      <el-input v-model='formInline.senderCardNumber' placeholder='请输入' clearable />
    </el-form-item>
    <el-form-item label='转出名称' prop="senderName">
      <el-input v-model='formInline.senderName' placeholder='请输入' clearable />
    </el-form-item>
    <el-form-item label='安全码' prop="senderName">
      <el-input v-model='formInline.securityCode' placeholder='请输入' clearable />
    </el-form-item>
    <el-form-item label='转入账号' prop="receiverCardNumber">
      <el-input v-model='formInline.receiverCardNumber' placeholder='请输入' clearable />
    </el-form-item>
    <el-form-item label='收款人名称' prop="receiverName">
      <el-input v-model='formInline.receiverName' placeholder='请输入' clearable />
    </el-form-item>
    <el-form-item label='金额' prop="amount">
      <el-input v-model='formInline.amount' placeholder='请输入金额' clearable />
    </el-form-item>

    <div style='text-align: center;'>
      <el-button type='primary' @click='onSubmit'>提交</el-button>
    </div>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiTransactionTransfer } from '../api'
import { ElMessage } from 'element-plus'

const formInline = reactive({
  senderCardNumber: '',
  senderName: '',
  securityCode: '',
  receiverCardNumber: '',
  receiverName: '',
  amount: ''
})
const addFormRef = ref(null)

const subLoading = ref(false)
const onSubmit = async () => {
  try {
    await addFormRef.value.validate()
    subLoading.value = true
    const res = await apiTransactionTransfer(formInline)
    console.log('submit!', res)
    ElMessage.warning('提交成功')
    // location.reload()
  } catch (error) {

  } finally {
    subLoading.value = false
  }
}

const addFormRules = {
  senderCardNumber: { required: true, message: '请输入', trigger: 'blur' },
  senderName: { required: true, message: '请输入', trigger: 'blur' },
  receiverCardNumber: { required: true, message: '请输入', trigger: 'blur' },
  receiverName: { required: true, message: '请输入', trigger: 'blur' },
  securityCode: { required: true, message: '请输入', trigger: 'blur' },
  amount: { required: true, message: '请输入', trigger: 'blur' }
}
</script>

<style>
.demo-form-inline {
  width: 520px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 40px 40px;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
  background-color: white;
  height: 500px;
}
.demo-form-inline .el-input {
  --el-input-width: 500px;
}
.el-form-item label{
  width: 100px;
}
</style>
