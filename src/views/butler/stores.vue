<script setup>
import storeSearchForm from "@/views/butler/components/storeSearchForm.vue";
import {ref, provide} from "vue";
import StoreCreateStore from "@/views/butler/components/storeCreateStore.vue";

const data = ref([])
const rowSelection = {
  type: 'checkbox',
  showCheckedAll: true
};
const visible = ref(false);
const total = ref(0)
const setStoreMadelStatus= ()=>{
  visible.value = false;
}
const handleCancel = () => {
  visible.value = false;
}
provide('setStoreMadelStatus',setStoreMadelStatus);

</script>

<template>
  <div class="w-full bg-white p-5">
    <store-search-form/>
    <div class="mb-3">
      <a-button type="outline" @click="visible=true">添加门店</a-button>
    </div>
    <div class="w-full">
      <a-table :data="data" :row-selection="rowSelection">
        <template #columns>
          <a-table-column title="门店编号" data-index="salary"></a-table-column>
          <a-table-column title="门店地点" data-index="address"></a-table-column>
          <a-table-column title="门店负责人" data-index="email"></a-table-column>
          <a-table-column title="看房次数" data-index="email"></a-table-column>
          <a-table-column title="操作">
            <template #cell="{ record }">
              <a-button>添加经纪人</a-button>
              <a-button>编辑</a-button>
            </template>
          </a-table-column>
        </template>
      </a-table>
      <div class="mt-3 overflow-hidden">
        <a-pagination :total="total" class="float-right" show-page-size/>
      </div>
    </div>
    <a-drawer :width="540" @cancel="handleCancel" :visible="visible" :footer="false">
      <template #title>
        添加门店
      </template>
      <div>
        <store-create-store/>
      </div>
    </a-drawer>
  </div>
</template>

<style scoped lang="less">

</style>
