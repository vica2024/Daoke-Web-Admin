<script setup lang="ts">
   import {ref} from "vue";

   const form= ref({})
   const options = [
     { label: '明文模式', value: '0' },
     { label: '兼容模式', value: '1' },
     { label: '安全模式', value: '2' }
   ];
</script>

<template>
<div>
  <a-form :model="form" :auto-label-width="true" style="width: 80%; margin: auto" >
    <a-form-item field="name" label="接口地址">
      <div class="block">
        <a-input placeholder="请输入"></a-input>
        <div class="text-gray-400 text-xs mt-3">配置服务器域名使用的接口地址，直接复制输入框内容（此项系统生成，无法修改）</div>
      </div> </a-form-item>
    <a-form-item field="post" label="消息加解密方式">
      <div class="block">
      <a-radio-group :options="options">
        <template #label="{ data }">
          {{ data.label }}
        </template>
      </a-radio-group>
      <div class="text-gray-400 text-xs mt-3">如需使用安全模式请在管理中心修改，仅限服务号和认证订阅号</div>
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
