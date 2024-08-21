<script setup>
import butlerSearchForm from "@/views/butler/components/butlerSearchForm.vue";
import {ref, reactive, provide} from "vue";
import agencyCreateStore from "@/views/butler/components/agencyCreateStore.vue";

const data = ref([])
const rowSelection = {
  type: 'checkbox',
  showCheckedAll: true
};
const visible = ref(false);
const total = ref(0)
const handleCancel = () => {
  visible.value = false;
}

const agencyMadelStatus = () => {
  visible.value = false;
}
provide('agencyMadelStatus',agencyMadelStatus);

</script>

<template>
  <div class="w-full bg-white p-5">
    <butler-search-form/>
    <div class="mb-3">
      <a-button type="outline" @click="visible=true">添加经纪人</a-button>
    </div>
    <div class="w-full">
      <a-table :data="data" :row-selection="rowSelection">
        <template #columns>
          <a-table-column title="头像" data-index="salary"></a-table-column>
          <a-table-column title="姓名" data-index="address"></a-table-column>
          <a-table-column title="性别" data-index="email"></a-table-column>
          <a-table-column title="所属门店" data-index="email"></a-table-column>
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
    <a-drawer :width="640" @cancel="handleCancel" :visible="visible" :footer="false">
      <template #title>
        添加经纪人
      </template>
      <div>
        <agency-create-store/>
      </div>
    </a-drawer>
  </div>
</template>

<style scoped lang="less">

</style>
