<template>
  <div class="mt-3 bg-white p-5">
    <div class="font-bold">房型出租比例</div>
    <a-divider/>
    <Chart height="600px" :option="optionData"/>
  </div>
</template>
<script setup>
import {ref} from "vue";

const optionData = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    left: 20,
    top: 20
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLine: {
      show: false // 隐藏 x 轴线
    },
    axisLabel: {
      show: false // 隐藏 y 轴刻度值
    },
    splitLine: {
      show: false // 隐藏 x 轴网格线
    },
    axisTick: {
      show: false // 隐藏 x 轴刻度
    }
  },
  yAxis: {
    type: 'category',
    data: ['一室一厅', '二室一厅', '二室二厅', '三室一厅', '三室二厅', '四室一厅', '四室二厅', '五室及以上'],
    axisLine: {
      show: false // 隐藏 y 轴线
    },
    axisTick: {
      show: false // 隐藏 x 轴刻度
    },
  },
  series: [
    {
      name: '已出租数量',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series'
      },
      barWidth: '50%',
      itemStyle: {
        color: '#3aa0ff'
      },
      data: [320, 302, 40, 34, 23, 45, 44, 32]
    },
    {
      name: '总数量',
      type: 'bar',
      stack: 'total',
      barWidth: '50%',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        color: '#ffc927'
      },
      data: [120, 132, 403, 23, 45, 33, 55, 55]
    }
  ]
});
</script>
<style lang="less" scoped>

</style>
