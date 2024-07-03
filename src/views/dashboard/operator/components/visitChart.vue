<script setup>
import {ref} from "vue";

const tabs = ref([
  {title: "销售额"},
  {title: "访问量"}
]);
const ranking = ref([
  {firstName: "Vica",commission:1654},
  {firstName: "John",commission:1235},
  {firstName: "Mia",commission:1067},
  {firstName: "Zhang",commission:879},
  {firstName: "Zhao",commission:767},
  {firstName: "Huang",commission:500},
])
const chartOption = ref({
  grid: {
    left: '5%', // 图表左侧的边距
    right: '5%', // 图表右侧的边距
    top: '10%', // 图表顶部的边距
    bottom: '10%' // 图表底部的边距
  },
  xAxis: {
    type: 'category',
    splitLine: {
      show: false // 隐藏 x 轴网格线
    },
    axisTick: {
      show: false // 隐藏 x 轴刻度
    },
    axisLine: {
      show: false // 隐藏 y 轴线
    },
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false // 隐藏 y 轴线
    },
    axisTick: {
      show: false // 隐藏 x 轴刻度
    },
    splitLine: {
      lineStyle: {
        type: 'dashed' // 设置 Y 轴的分隔线样式为虚线
      }
    }
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130, 120, 143, 123, 44, 56],
      type: 'bar',
      barWidth: 30,
      itemStyle: {
        color: '#3ba1ff' // 设置高亮状态下的柱状图颜色为紫色

      },
      markLine: {
        lineStyle: {
          type: 'dashed' // 设置柱状图的线样式为虚线
        },
        data: [
          {type: 'average', name: '平均值'} // 在柱状图上绘制平均值线
        ]
      }
    }
  ]
})
</script>

<template>
  <div class="mt-3 w-full">
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div class="bg-white col-span-1 lg:col-span-2">
        <a-tabs :default-active-key="0">
          <a-tab-pane v-for="(item,index) in tabs" :key="index">
            <template #title>
              {{ item.title }}
            </template>
            <div class="pl-3 pr-3">
              <Chart height="243px" :option="chartOption"/>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
      <div class="bg-white p-5 col-span-1">
        <h2 class="font-bold">经纪人收益排行榜</h2>
        <div class="mt-4">
          <div class="grid grid-cols-7 mb-3 items-center" v-for="(item,index) in ranking">
            <div class="col-span-1"><a-avatar :class="['bg-gray-200 text-gray-500',{'bg-blue-500 text-white':index<3}]" :size="28">{{ index+1 }}</a-avatar></div>
            <div class="col-span-4">{{item.firstName}}</div>
            <div class="col-span-2 text-right">
              <a-statistic :value-style="{fontSize:'15px'}" :value="item.commission" show-group-separator>
                <template #prefix>¥</template>
              </a-statistic>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
