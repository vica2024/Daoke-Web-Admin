<script setup lang="ts">
   import {ref} from "vue";

   const form= ref({})
   const options = [
     { label: '开启', value: '0' },
     { label: '关闭', value: '1' }
   ];
   const options1 = [
     { label: '开启', value: '0' },
     { label: '关闭', value: '1' }
   ];
</script>

<template>
<div>
  <a-form :model="form" :auto-label-width="true" style="width: 80%; margin: auto" >
    <a-form-item field="name" label="关注二维码">
      <a-upload action="/" >
        <template #upload-button>
          <div>
            <icon-file-image size="50" class="text-gray-400" />
            <div class="text-gray-400 text-xs">引导关注公众号显示的公众号关注二维码</div>
          </div>
        </template>
      </a-upload>
    </a-form-item>
    <a-form-item field="post" label="微信校验文件">
      <a-upload action="/" >
        <template #upload-button>
          <div>
            <icon-file size="50" class="text-gray-400" />
            <div class="text-gray-400 text-xs">配置微信网页授权域名时候下载的微信校验文件，在此处上传</div>
          </div>
        </template>
      </a-upload>
    </a-form-item>
    <a-form-item field="post" label="公众号推广码类型">
      <div class="block">
        <a-radio-group :options="options1">
          <template #label="{ data }">
            {{ data.label }}
          </template>
        </a-radio-group>
        <div class="text-gray-400 text-xs mt-3">用户关注公众号之后是否生成商城用户</div>
      </div>
    </a-form-item>
    <a-form-item field="post" label="关注是否生成用户">
      <div class="block">
      <a-radio-group :options="options">
        <template #label="{ data }">
          {{ data.label }}
        </template>
      </a-radio-group>
      <div class="text-gray-400 text-xs mt-3">公众号生成的推广码类型：商城：扫码直接进入商城，公众号：扫码进入公众号后推送商城的链接</div>
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
