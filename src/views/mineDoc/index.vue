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
  <div class="h-full">
    <doc-main v-if="docStore.auth" />
    <auth v-else  />
  </div>
</template>

<script setup>
import { useDocStore } from '@/store'
import Auth from './components/auth.vue'
import DocMain from './components/docMain.vue'

const docStore = useDocStore()
</script>
