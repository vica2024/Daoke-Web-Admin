<script setup>
import lookSearchForm from "@/views/order/components/lookSearchForm.vue";
import {ref} from "vue";
import lookOrderDetails from "@/views/order/components/lookOrderDetails.vue";

const detailsVisible = ref(false)
const data=ref([{
  order_no:'DK20230405323423',
  customer:'Vica Zhuo',
  phone:'13168320604',
  created_time:'2023-04-05 09:30:09'
}])
const viewDetails = ()=>{
  detailsVisible.value=true;
}
</script>

<template>
  <div class="w-full">
    <look-search-form/>
    <div class="p-5 bg-white">
      <a-table :data="data"  :bordered="false">
        <template #columns>
          <a-table-column title="订单编号" data-index="order_no"></a-table-column>
          <a-table-column title="订单类型" data-index="order_type"></a-table-column>
          <a-table-column title="姓名" data-index="customer"></a-table-column>
          <a-table-column title="手机号" data-index="phone"></a-table-column>
          <a-table-column title="上门时间" data-index="arrive_time"></a-table-column>
          <a-table-column title="订单状态" data-index="status"></a-table-column>
          <a-table-column title="发起时间" data-index="created_time"></a-table-column>
        </template>
      </a-table>
    </div>
    <a-drawer :width="680" :visible="detailsVisible"  @cancel="detailsVisible=false" :footer="false">
      <template #title>
        订单详情
      </template>
      <div>
        <look-order-details/>
      </div>
    </a-drawer>
  </div>
</template>

<style scoped lang="less">

</style>
