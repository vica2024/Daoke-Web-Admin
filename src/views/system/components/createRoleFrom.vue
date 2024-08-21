<script setup lang="ts">
   import {ref} from "vue";

   const form= ref({})
</script>

<template>
<div>
  <a-form :model="form" style="width: 80%; margin: auto" layout="vertical">
    <a-form-item field="name" label="角色名称">
      <a-input  placeholder="请输入" style="width: 200px;" />
    </a-form-item>
    <a-form-item field="post" label="登录账户">
      <a-input  placeholder="请输入" style="width: 200px;" />
    </a-form-item>
    <a-form-item field="post" label="角色类型">
      <a-select :options="[]" style="width: 200px;" placeholder="请选择" />
    </a-form-item>
  </a-form>
</div>
</template>

<style scoped lang="less">

</style>
