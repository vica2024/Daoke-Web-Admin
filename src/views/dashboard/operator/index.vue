<script setup lang="ts">
import BaseInfo from "./components/baseInfo.vue";
import VisitChart from "./components/visitChart.vue";
import RoomsDistribute from "./components/roomsDistributede.vue";
import RentedSituation from "./components/rentedSituations.vue";
import Other from "./components/other.vue";

</script>

<template>
  <div>
    <!--头部-->
    <base-info ref="baseInfo"/>
    <!--小方块-->
    <visit-chart ref="visitChart"/>
    <!--房屋分布-->
    <rooms-distribute />
    <!--户型出租状况-->
    <rented-situation />
    <!--其他图表-->
    <other/>
  </div>
</template>

<style scoped lang="less">

</style>
