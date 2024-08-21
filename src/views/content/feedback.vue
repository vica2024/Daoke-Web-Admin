<script setup>
import feedbackSearchForm from "./components/feedbackSearchForm.vue";
import {ref, provide} from "vue";

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
    <feedback-search-form/>
    <div class="w-full">
      <a-table :data="data" :row-selection="rowSelection">
        <template #columns>
          <a-table-column title="客户端" data-index="salary"></a-table-column>
          <a-table-column title="反馈类型" data-index="address"></a-table-column>
          <a-table-column title="反馈内容" data-index="email"></a-table-column>
          <a-table-column title="反馈图片" data-index="email"></a-table-column>
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
