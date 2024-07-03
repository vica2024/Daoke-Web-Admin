<script setup>
import {ref} from "vue";

const columns = ref([
  {
    title: '角色名称',
    dataIndex: 'name',
    ellipsis: true,
    tooltip: true,
  },
  {
    title: '登陆账号',
    dataIndex: 'salary',
  },
  {
    title: '角色类型',
    dataIndex: 'address',
    ellipsis: true,
  },
  {
    title: '权限',
    dataIndex: 'email',
    ellipsis: true,
    tooltip: {position: 'left'},
  },
  {
    title: '状态',
    dataIndex: 'email',
    ellipsis: true,
    tooltip: {position: 'left'},
  },
  {
    title: '操作',
    dataIndex: 'email',
    ellipsis: true,
    tooltip: {position: 'left'},
  },
]);
</script>

<template>
  <div class="bg-white h-full w-full  p-5">
     <div class="flex justify-between">
       <a-button type="primary">添加角色</a-button>
       <a-input class="w-1/4">
         <template #suffix>
           <icon-search />
         </template>
       </a-input>
     </div>
    <div class="w-full mt-5">
      <a-table size="large" :columns="columns" :data="data" />
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
