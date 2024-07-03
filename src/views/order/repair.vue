<script setup>
import SearchForm from "@/views/order/components/searchForm.vue";
import {ref} from "vue";

const columns = ref([
  {
    title: '订单编号',
    dataIndex: 'name',
    ellipsis: true,
    tooltip: true,
  },
  {
    title: '维修类型',
    dataIndex: 'salary',
  },
  {
    title: '姓名',
    dataIndex: 'address',
    ellipsis: true,
  },
  {
    title: '手机',
    dataIndex: 'email',
    ellipsis: true,
    tooltip: {position: 'left'},
  },
  {
    title: '房源',
    dataIndex: 'email',
    ellipsis: true,
    tooltip: {position: 'left'},
  },
  {
    title: '上门时间',
    dataIndex: 'email',
    ellipsis: true,
    tooltip: {position: 'left'},
  },
  {
    title: '订单状态',
    dataIndex: 'email',
    ellipsis: true,
    tooltip: {position: 'left'},
  },
  {
    title: '发起时间',
    dataIndex: 'email',
    ellipsis: true,
    tooltip: {position: 'left'},
  },
]);

const data=ref([])

</script>

<template>
  <div class="w-full">
      <search-form/>
      <div class="w-full">
        <a-table :columns="columns" :data="data" />
      </div>
  </div>
</template>

<style scoped lang="less">

</style>
