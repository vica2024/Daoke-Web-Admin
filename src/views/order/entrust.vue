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
    title: '委托信息',
    dataIndex: 'salary',
  },
  {
    title: '预期租金',
    dataIndex: 'address',
    ellipsis: true,
  },
  {
    title: '管家',
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
    title: '委托状态',
    dataIndex: 'email',
    ellipsis: true,
    tooltip: {position: 'left'},
  },
  {
    title: '发起时间',
    dataIndex: 'email',
    ellipsis: true,
    tooltip: {position: 'left'},
  }
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
