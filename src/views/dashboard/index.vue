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
  <a-layout-content class="flex flex-col">
    <statistics v-if="userStore.user && userStore.user.dashboard === 'statistics'" />
    <work-panel v-else-if="userStore.user" />
  </a-layout-content>
</template>

<script setup>
import { useUserStore } from '@/store'
import Statistics from './components/statistics.vue'
import WorkPanel from './components/work-panel.vue'
const userStore = useUserStore()
</script>
<script>
export default { name: 'dashboard' }
</script>
