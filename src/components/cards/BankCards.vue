<template>
  <div class="bank-cards-container">
    <el-card v-for="card in bankCards" :key="card.id" class="bank-card">
      <div>
        <h3>{{ card.bankName }}</h3>
        <p>{{ card.cardNumber }}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'BankCards',
  props: {
    bankCards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.bank-cards-container {
  position: relative;
  height: 300px; /* 增加高度以适应更大的间隔 */
}

.bank-card {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 1rem;
  background: #fff;
  border: 1px solid #eaecef;
}

.bank-card:not(:first-child) {
  top: 150px; /* 增加间隔 */
}

.bank-card:hover {
  z-index: 200;
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}

</style>
