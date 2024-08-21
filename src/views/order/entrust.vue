<script setup>
import entrustItem from "./components/entrustItem.vue";
import {ref, provide} from "vue";
import createEntrustFrom from "./components/createEntrustFrom.vue";
import EntrustOrderDetails from "@/views/order/components/entrustOrderDetails.vue";

const data = ref([])
const rowSelection = {
  type: 'checkbox',
  showCheckedAll: true
};
const visible = ref(false);
const detailsVisible = ref(false)
const total = ref(0)
const setcreateEntrustStatus= ()=>{
  visible.value = false;
}
const handleCancel = () => {

  visible.value = false;
}
const showDetails = ()=>{
  detailsVisible.value = true;
}

provide('setcreateEntrustStatus',setcreateEntrustStatus);

</script>

<template>
  <div class="w-full bg-white p-5">
    <div class="flex justify-between mb-5">
      <h2>委托列表</h2>
      <div>
        <a-radio-group type="button">
          <a-radio value="Beijing">全部</a-radio>
          <a-radio value="Shanghai">委托中</a-radio>
          <a-radio value="Guangzhou">待签约</a-radio>
          <a-radio value="Shenzhen">待装锁</a-radio>
          <a-radio value="Shenzhen">已完成</a-radio>
          <a-radio value="Shenzhen">已取消</a-radio>
        </a-radio-group>
        <a-input-search style="width: 188px; margin-left: 15px;" placeholder="请输入订单号"/>
      </div>
    </div>
   <div @click="visible=true" class="border cursor-pointer mb-5 border-dashed border-gray-300 text-center p-2 text-sm text-gray-400">
     <icon-plus /> 添加
   </div>
    <div class="w-full">
      <div @click="showDetails">
        <entrust-item/>
      </div>
      <div class="mt-3 overflow-hidden">
        <a-pagination :total="total" class="float-right" show-page-size/>
      </div>
    </div>
    <a-drawer :width="680" :visible="detailsVisible"  @cancel="detailsVisible=false" :footer="false">
      <template #title>
        订单详情
      </template>
      <div>
        <entrust-order-details/>
      </div>
    </a-drawer>
    <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
      <template #title>
        新建委托
      </template>
      <create-entrust-from></create-entrust-from>
    </a-modal>
  </div>
</template>

<style scoped lang="less">

</style>
