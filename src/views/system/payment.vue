<script setup>

import WechatConfigFrom from "@/views/system/components/wechatConfigFrom.vue";
import ServeConfigFrom from "@/views/system/components/serveConfigFrom.vue";
import PaymentBasicFrom from "@/views/system/components/paymentBasicFrom.vue";
import WePayConfigFrom from "@/views/system/components/wePayConfigFrom.vue";
import LiantongPayConfigFrom from "@/views/system/components/liantongPayConfigFrom.vue";
import AliPayConfigFrom from "@/views/system/components/aliPayConfigFrom.vue";
import BitCionPayConfigFrom from "@/views/system/components/bitCionPayConfigFrom.vue";
</script>

<template>
  <div class="bg-white p-5">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" title="基础配置">
        <payment-basic-from></payment-basic-from>
      </a-tab-pane>
      <a-tab-pane key="2" title="微信支付">
        <we-pay-config-from/>
      </a-tab-pane>
      <a-tab-pane key="3" title="支付宝">
        <ali-pay-config-from></ali-pay-config-from>
      </a-tab-pane>
      <a-tab-pane key="4" title="通联支付">
        <liantong-pay-config-from/>
      </a-tab-pane>
      <a-tab-pane key="5" title="加密货币">
       <bit-cion-pay-config-from/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped lang="less">

</style>
