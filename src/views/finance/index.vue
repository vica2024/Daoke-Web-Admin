<script setup>
import financeSearchFrom from "./components/financeSearchFrom.vue";
import {ref, provide} from "vue";

const data = ref([])
const rowSelection = {
  type: 'checkbox',
  showCheckedAll: true
};
const visible = ref(false);
const total = ref(0)
const setcreateDeviceStatus= ()=>{
  visible.value = false;
}
const handleCancel = () => {
  visible.value = false;
}
provide('setcreateDeviceStatus',setcreateDeviceStatus);

</script>

<template>
  <div class="w-full bg-white p-5">
    <finance-search-from/>
    <div class="w-full">
      <a-table :data="data" :row-selection="rowSelection">
        <template #columns>
          <a-table-column title="提现编号" data-index="salary"></a-table-column>
          <a-table-column title="用户" data-index="address"></a-table-column>
          <a-table-column title="手机号" data-index="email"></a-table-column>
          <a-table-column title="提现申请时间" data-index="email"></a-table-column>
          <a-table-column title="提现金额" data-index="email"></a-table-column>
          <a-table-column title="手续费" data-index="email"></a-table-column>
          <a-table-column title="提款渠道" data-index="email"></a-table-column>
          <a-table-column title="提款账户" data-index="email"></a-table-column>
          <a-table-column title="状态" data-index="email"></a-table-column>
          <a-table-column title="操作">
            <template #cell="{ record }">
              <a-button>拒绝</a-button>
              <a-button>通过</a-button>
            </template>
          </a-table-column>
        </template>
      </a-table>
      <div class="mt-3 overflow-hidden">
        <a-pagination :total="total" class="float-right" show-page-size/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
