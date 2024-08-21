<script setup lang="ts">
   import {ref} from "vue";

   const form= ref({})
   const interfaces = [
     { label: 'v2(支持企业支付到零钱)', value: '0' },
     { label: 'v3(支持商户转账到零钱)', value: '1' }
   ];
   const mchTypes = [
     { label: '微信支付商户模式', value: '0' },
     { label: '关闭', value: '1' }
   ];
</script>

<template>
<div>
  <a-form :model="form" :auto-label-width="true" style="width: 80%; margin: auto" >
    <a-form-item field="name" label="支付接口类型：">
      <div class="block">
        <a-radio-group :options="interfaces">
          <template #label="{ data }">
            {{ data.label }}
          </template>
        </a-radio-group>
        <div class="text-gray-400 text-xs mt-3">支付接口类型v2对应微信支付旧版v2支付。v3对应微信支付v3支付接口。支付证书可以通用一个。支付秘钥和v2旧版支付有区别</div>
      </div>
    </a-form-item>
    <a-form-item field="Key" label="支付接口类型：">
      <div class="block">
        <a-input placeholder="请输入key"></a-input>
        <div class="text-gray-400 text-xs mt-3">商户支付密钥Key。审核通过后，在微信发送的邮件中查看。</div>
      </div>
    </a-form-item>
    <a-form-item field="Mchid" label="Mchid：">
      <div class="block">
        <a-input placeholder="请输入Mchid"></a-input>
        <div class="text-gray-400 text-xs mt-3">微信商户商户号，微信商户商户号</div>
      </div>
    </a-form-item>
    <a-form-item field="name" label="微信支付证书：">
      <a-upload action="/" >
        <template #upload-button>
          <div>
            <icon-file size="50" class="text-gray-400" />
            <div class="text-gray-400 text-xs">微信支付证书，在微信商家平台中可以下载！文件名一般为apiclient_cert.pem</div>
          </div>
        </template>
      </a-upload>
    </a-form-item>
    <a-form-item field="name" label="微信支付证书密钥：">
      <a-upload action="/" >
        <template #upload-button>
          <div>
            <icon-file size="50" class="text-gray-400" />
            <div class="text-gray-400 text-xs">微信支付证书密钥，在微信商家平台中可以下载！文件名一般为apiclient_key.pem</div>
          </div>
        </template>
      </a-upload>
    </a-form-item>
    <a-form-item field="post" label="小程序商户号选择：">
      <div class="block">
        <a-radio-group :options="options1">
          <template #label="{ data }">
            {{ data.label }}
          </template>
        </a-radio-group>
        <div class="text-gray-400 text-xs mt-3">小程序开发后台有支付管理的请选择非商户号绑定</div>
      </div>
    </a-form-item>
    <a-form-item field="post" label="商户类型：">
      <div class="block">
      <a-radio-group :options="mchTypes">
        <template #label="{ data }">
          {{ data.label }}
        </template>
      </a-radio-group>
      <div class="text-gray-400 text-xs mt-3">商户类型，目前支持普通微信商户模式和普通微信服务商模式；</div>
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
