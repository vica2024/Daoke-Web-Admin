<script setup>
import lockSearchFrom from "./components/lockSearchFrom.vue";
import {ref, provide} from "vue";
import CreateDeviceFrom from "@/views/device/components/createDeviceFrom.vue";

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
    <lock-search-from />
    <div class="mb-3">
      <a-button type="outline" @click="visible=true">添加设备</a-button>
    </div>
    <div class="w-full">
      <a-table :data="data" :row-selection="rowSelection">
        <template #columns>
          <a-table-column title="设备编号" data-index="salary"></a-table-column>
          <a-table-column title="设备类型" data-index="address"></a-table-column>
          <a-table-column title="关联房屋" data-index="email"></a-table-column>
          <a-table-column title="设备状态" data-index="email"></a-table-column>
          <a-table-column title="安装时间" data-index="email"></a-table-column>
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
    <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
      <template #title>
        添加设备
      </template>
      <create-device-from></create-device-from>
    </a-modal>
  </div>
</template>

<style scoped lang="less">

</style>
