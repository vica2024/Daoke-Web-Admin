<script setup lang="ts">
   import {ref} from "vue";

   const form= ref({})
</script>

<template>
<div>
  <a-form :model="form" style="width: 80%; margin: auto" :auto-label-width="true">
    <a-form-item field="name" label="房东姓名">
      <a-input  placeholder="请输入" style="width: 200px;" />
    </a-form-item>
    <a-form-item field="name" label="联系方式">
      <a-input  placeholder="请输入" style="width: 200px;" />
    </a-form-item>
    <a-form-item field="post" label="上门时间">
      <a-date-picker style="width: 200px;" />
    </a-form-item>
    <a-form-item field="name" label="小区">
      <a-input  placeholder="请输入" style="width: 200px;" />
    </a-form-item>
    <a-form-item field="name" label="楼号门牌号">
      <a-input  placeholder="请输入" style="width: 200px;" />
    </a-form-item>
    <a-form-item field="name" label="预期租金">
      <a-input  placeholder="请输入" style="width: 200px;" />
    </a-form-item>
    <a-form-item field="post" label="备注">
     <a-textarea placeholder="备注" allow-clear/>
    </a-form-item>
  </a-form>
</div>
</template>

<style scoped lang="less">

</style>
