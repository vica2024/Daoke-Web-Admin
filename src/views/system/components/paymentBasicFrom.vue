<script setup lang="ts">
   import {ref} from "vue";

   const form= ref({})

</script>

<template>
<div>
  <a-form :model="form" :auto-label-width="true" style="width: 80%; margin: auto" >
    <a-form-item field="name" label="微信支付：">
      <div class="block">
        <a-switch>
          <template #checked>
            ON
          </template>
          <template #unchecked>
            OFF
          </template>
        </a-switch>
        <div class="text-gray-400 text-xs mt-3">请选择微信支付通道，关闭用户端不展示</div>
      </div>
    </a-form-item>
    <a-form-item field="Key" label="支付宝支付：">
      <div class="block">
        <a-switch>
          <template #checked>
            ON
          </template>
          <template #unchecked>
            OFF
          </template>
        </a-switch>
        <div class="text-gray-400 text-xs mt-3">请选择支付宝通道，关闭用户端不显示</div>
      </div>
    </a-form-item>
    <a-form-item field="Key" label="通联支付：">
      <div class="block">
        <a-switch>
          <template #checked>
            ON
          </template>
          <template #unchecked>
            OFF
          </template>
        </a-switch>
        <div class="text-gray-400 text-xs mt-3">请选择通联支付请选择开启或关闭</div>
      </div>
    </a-form-item>
    <a-form-item field="Key" label="加密货币：">
      <div class="block">
        <a-switch>
          <template #checked>
            ON
          </template>
          <template #unchecked>
            OFF
          </template>
        </a-switch>
        <div class="text-gray-400 text-xs mt-3">请选择加密货币支付请选择开启或关闭</div>
      </div>
    </a-form-item>
    <a-form-item field="Key" label="线下支付：">
      <div class="block">
        <a-switch>
          <template #checked>
            ON
          </template>
          <template #unchecked>
            OFF
          </template>
        </a-switch>
        <div class="text-gray-400 text-xs mt-3">请选择线下支付请选择开启或关闭</div>
      </div>
    </a-form-item>
  </a-form>
</div>
</template>

<style scoped lang="less">

</style>
