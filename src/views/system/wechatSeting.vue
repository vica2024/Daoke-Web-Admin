<script setup>

import WechatConfigFrom from "@/views/system/components/wechatConfigFrom.vue";
import ServeConfigFrom from "@/views/system/components/serveConfigFrom.vue";
</script>

<template>
<div class="bg-white p-5">
  <a-tabs default-active-key="1">
    <a-tab-pane key="1" title="公众号配置">
      <wechat-config-from></wechat-config-from>
    </a-tab-pane>
    <a-tab-pane key="2" title="服务器域名配置">
      <serve-config-from></serve-config-from>
    </a-tab-pane>
  </a-tabs>
</div>
</template>

<style scoped lang="less">

</style>
