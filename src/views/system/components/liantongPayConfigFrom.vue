<script setup lang="ts">
   import {ref} from "vue";

   const form= ref({})

</script>

<template>
<div>
  <a-form :model="form" :auto-label-width="true" style="width: 80%; margin: auto" >
    <a-form-item field="name" label="通联商户号：">
      <div class="block">
        <a-input placeholder="请输入通联商户号"></a-input>
        <div class="text-gray-400 text-xs mt-3">通联支付商户号，由贵公司申请获得</div>
      </div>
    </a-form-item>
    <a-form-item field="Key" label="通联支付Appid:">
      <div class="block">
         <a-input placeholder="请输入通联支付Appid"></a-input>
        <div class="text-gray-400 text-xs mt-3">通联商户后台的设置-》对接设置中查看</div>
      </div>
    </a-form-item>
    <a-form-item field="Mchid" label="通联MD5私钥:">
      <div class="block">
        <a-input placeholder="请输入通联MD5私钥"></a-input>
        <div class="text-gray-400 text-xs mt-3">通联支付的MD5私钥，可以在商户后台设置中进行配置</div>
      </div>
    </a-form-item>
    <a-form-item>
      <a-button type="primary">提交</a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<style scoped lang="less">

</style>
