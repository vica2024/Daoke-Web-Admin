<script setup>

</script>

<template>
  <div class="w-full pl-5 pr-5 text-sm cursor-pointer hover:bg-gray-100">
    <div class="flex text-gray-500 justify-between items-center border-b border-b-gray-300">
      <div class="">
        <p class="">订单编号</p>
        <p class="text-gray-800">DK202408201233</p>
      </div>
      <div class="">
        <p class="">房客信息</p>
        <p>Vica Zhuo (13168320604)</p>
        <p>广州市天河区珠江新城11栋805</p>
      </div>
      <div class="">
        <p class="">费用</p>
        <p>¥300.00/晚 x2</p>
        <p>税：¥300.00</p>
        <p>总共：¥600.00</p>
      </div>
      <div class="">
        <p>服务管家</p>
        <p>张三</p>
      </div>
      <div class="text-gray-800">
        <a-badge status="warning"/>
        待入住
      </div>
      <div class="pt-5">
        <a-timeline>
          <a-timeline-item label="2024-08-10 09:00:00">入住时间</a-timeline-item>
          <a-timeline-item label="2024-08-12 12:00:00">离开时间</a-timeline-item>
        </a-timeline>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
