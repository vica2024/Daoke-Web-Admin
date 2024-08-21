<script setup>
import LandlordSearchForm from "./components/landlordSearchForm.vue";
import {ref, provide} from "vue";

const data = ref([])
const rowSelection = {
  type: 'checkbox',
  showCheckedAll: true
};
const visible = ref(false);

const setStoreMadelStatus= ()=>{
  visible.value = false;
}
const handleCancel = () => {
  visible.value = false;
}
const total = ref(0)
provide('setStoreMadelStatus',setStoreMadelStatus);

</script>

<template>
  <div class="w-full bg-white p-5">
    <landlord-search-form/>
    <div class="w-full">
      <a-table :data="data" :row-selection="rowSelection">
        <template #columns>
          <a-table-column title="姓名" data-index="salary"></a-table-column>
          <a-table-column title="手机号" data-index="address"></a-table-column>
          <a-table-column title="性别" data-index="email"></a-table-column>
          <a-table-column title="拥有房源" data-index="email"></a-table-column>
          <a-table-column title="本月收租" data-index="email"></a-table-column>
          <a-table-column title="累计收租" data-index="email"></a-table-column>
          <a-table-column title="操作">
            <template #cell="{ record }">
              <a-button>预览</a-button>
              <a-button>下载合同</a-button>
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
