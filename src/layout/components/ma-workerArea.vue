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
  <a-layout-content class="work-area customer-scrollbar relative">
    <div class="h-full" :class="{ 'p-3': $route.path.indexOf('maIframe') === -1 }">
      <router-view v-slot="{ Component }">
        <transition :name="appStore.animation" mode="out-in">
          <keep-alive :include="keepStore.keepAlives">
            <component :is="Component" :key="$route.fullPath" v-if="keepStore.show" />
          </keep-alive>
        </transition>
      </router-view>
      <iframe-view />
    </div>
  </a-layout-content>
</template>

<script setup>
  import { useAppStore, useKeepAliveStore } from '@/store'
  import IframeView from './components/iframe-view.vue'
  const appStore = useAppStore()
  const keepStore = useKeepAliveStore()
</script>
