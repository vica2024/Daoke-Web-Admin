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
  <a-layout class="layout flex justify-between h-full">

    <ma-classic-slider class="ma-ui-slider" />

    <a-layout-content class="flex flex-col">
      <ma-classic-header class="ma-ui-header" />
      <ma-worker-area />
    </a-layout-content>

  </a-layout>
</template>

<script setup>
import { ref } from 'vue'

import MaClassicSlider from './ma-classic-slider.vue'
import MaClassicHeader from './ma-classic-header.vue'
import MaWorkerArea from '../ma-workerArea.vue'

</script>
