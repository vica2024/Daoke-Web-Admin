<script setup>
import SearchForm from "@/views/order/components/searchForm.vue";
import {ref} from "vue";

const columns = ref([
  {
    title: '订单信息',
    dataIndex: 'name',
    ellipsis: true,
    tooltip: true,
  },
  {
    title: '租客类型',
    dataIndex: 'salary',
  },
  {
    title: '租客信息',
    dataIndex: 'salary',
  },
  {
    title: '入住信息',
    dataIndex: 'address',
    ellipsis: true,
  },
  {
    title: '入住房源',
    dataIndex: 'email',
    ellipsis: true,
    tooltip: {position: 'left'},
  },
  {
    title: '管家',
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
