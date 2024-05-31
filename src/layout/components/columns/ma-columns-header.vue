<!--
 - Dao-ke is a comprehensive and powerful property management system.
 - Please view the LICENSE file that was distributed with this source code,
 - For the full copyright and license information.
 - Thank you very much for using Dao-ke.
 -
 - @Author zhuovica@gmail.com>
 - @Link   https://github.com/vica2024/DaokeHomestay.git
-->

<template>
  <a-layout-header class="layout-header flex flex-col operation-area">
    <div class="flex justify-between" style="height: 50px;">
      <a-avatar class="mt-1 ml-2 inline lg:hidden" style="width:45px;" :size="40"><img :src="`${$url}logo.svg`" class="bg-white" /></a-avatar>
      <ma-breadcrumb />
      <ma-operation />
    </div>
    <ma-tags class="hidden lg:flex" />
  </a-layout-header>
</template>

<script setup>
  import MaBreadcrumb from '../ma-breadcrumb.vue'
  import MaOperation from '../ma-operation.vue'
  import MaTags from '../ma-tags.vue'
</script>
