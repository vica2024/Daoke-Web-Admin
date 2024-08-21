<script setup>
import {provide, ref} from "vue";
import createRoleFrom from "./components/createRoleFrom.vue";

const data = ref([]);
const visible = ref(false);

const setcreateDeviceStatus= ()=>{
  visible.value = false;
}
const handleCancel = () => {
  visible.value = false;
}
provide('setcreateDeviceStatus',setcreateDeviceStatus);
</script>

<template>
  <div class="bg-white h-full w-full  p-5">
     <div class="flex justify-between">
       <a-button type="primary" @click="visible=true">添加角色</a-button>
       <a-input class="w-1/4">
         <template #suffix>
           <icon-search />
         </template>
       </a-input>
     </div>
    <div class="w-full mt-5">
      <a-table :data="data"  :bordered="false">
        <template #columns>
          <a-table-column title="角色名称" data-index="customer"></a-table-column>
          <a-table-column title="登陆账号" data-index="phone"></a-table-column>
          <a-table-column title="角色类型" data-index="email"></a-table-column>
          <a-table-column title="权限" data-index="email"></a-table-column>
          <a-table-column title="状态" data-index="created_time"></a-table-column>
          <a-table-column title="操作">
            <template #cell="{ record }">
              <a-button type="text">编辑</a-button>
              <a-button type="text">擅长</a-button>
            </template>
          </a-table-column>
        </template>
      </a-table>
    </div>
    <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
      <template #title>
        添加角色
      </template>
      <create-role-from></create-role-from>
    </a-modal>
  </div>
</template>

<style scoped lang="less">

</style>
