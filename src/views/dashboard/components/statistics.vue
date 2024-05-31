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

  <st-welcome />
  <st-count />
  <st-login-chart />

  <div class="block lg:flex">
    <st-announced />
    <st-dao-ke />
  </div>
</template>

<script setup>
  import StCount from './components/st-count.vue'
  import StWelcome from './components/st-welcome.vue'
  import StLoginChart from './components/st-loginChart.vue'
  import StDaoKe from './components/st-daoke.vue'
  import StAnnounced from './components/st-announced.vue'
</script>

