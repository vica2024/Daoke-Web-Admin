<script setup lang="ts">
   import {ref} from "vue";

   const form= ref({})
</script>

<template>
<div>
  <a-form :model="form" style="width: 80%; margin: auto" :auto-label-width="ture">
    <a-form-item field="name" label="设备编号">
      <a-input  placeholder="请输入设备编号" style="width: 200px;" />
    </a-form-item>
    <a-form-item field="post" label="设备型号">
      <a-select :options="[]" style="width: 200px;" placeholder="请选择设备型号" />
    </a-form-item>
    <a-form-item field="post" label="安装日期">
      <a-date-picker style="width: 200px;" />
    </a-form-item>
  </a-form>
</div>
</template>

<style scoped lang="less">

</style>
