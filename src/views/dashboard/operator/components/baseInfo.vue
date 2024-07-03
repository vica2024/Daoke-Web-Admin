<script setup>
import {ref} from "vue";[]
import {queryContentData} from "@/api/dashboard.js";
const chartOption={
  grid: {
    left: 0,
        right: 0,
        top: 0,
        bottom: 0
  },
  xAxis: {
    type: 'category',
        show: false,
  },
  yAxis: {
    show: false,
  },
  tooltip: {
    show: true,
        trigger: 'axis',
        formatter: '{c}',
  },
  series: [
    {
      data: [0, 5, 10, 50, 25,20.25,10,5,30,34,23,23,12,4],
      smooth: true,
      type: 'line',
      showSymbol: false,
      areaStyle: {
        color: '#3ba1ff', // 设置填充颜色为紫色
        opacity: 1, // 设置填充透明度为50%
        shadowBlur: 10, // 设置阴影模糊大小为10
        shadowColor: 'rgba(0, 0, 0, 0.3)' // 设置阴影颜色为深灰色
      },
      itemStyle: {
        color: '#3ba1ff' // 设置高亮状态下的柱状图颜色为紫色

      }
    }
  ],
}
const list = ref([
  {
    title: "总收入",
    figure: [125670],
    type: "percent",
    data: [12.4, -4.2],
    totalText: "日均收入",
    total: 1343,
    symbol: "¥"
  },
  {
    title: "已出租/总房源",
    figure: [40, 100],
    type: "graph",
    data: [12.4, 10],
    totalText: "空房率",
    total: 40,
    symbol: "%"
  },
  {
    title: "昨日新增/总租客数",
    figure: [10, 5],
    type: "graph",
    data: [12.4, -4.2],
    totalText: "转换率",
    total: 50,
    symbol: "%"
  },
  {
    title: "今日看房/今日预约看房",
    figure: [92, 68],
    type: "graph",
    data: [12.4, -4.2],
    totalText: "总访问量",
    total: 60,
    symbol: "人次"
  }
])

const fetchData = async () => {
  try {
    const { data: chartData } = await queryContentData();
    chartData.forEach((el, idx) => {

    });
  } catch (err) {
    // you can report use errorHandler or other
  } finally {

  }
};
fetchData();
</script>
<template>
  <div>
    <a-grid :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }" :colGap="12" :rowGap="16" class="grid-demo-grid">
      <a-grid-item v-for="item in list">
        <a-card :bordered="false">
          <template #title>
            <span class="text-gray-400">{{ item.title }}</span>
          </template>
          <template #extra>
            <a-link>
              <icon-info-circle/>
            </a-link>
          </template>
          <div class="w-full">
            <a-statistic v-if="item.figure.length===1" :value="item.figure[0]" show-group-separator>
              <template #prefix>¥</template>
            </a-statistic>
            <div class=" flex items-center" v-else>
              <a-statistic :value="item.figure[0]" show-group-separator/>
              <span class="text-xl font-bold ml-1 mr-1">/</span>
              <a-statistic :value="item.figure[1]" show-group-separator/>
            </div>
            <div class="flex mt-3 mb-4" v-if="item.type==='percent'">
              <span class="text-sm pr-2 text-gray-400">周同比
                <a-statistic :value-style="{fontSize:'18px'}" :value="item.data[0]" show-group-separator>
                  <template #prefix>
                    <icon-arrow-rise class="text-green-400"/>
                  </template>
                   <template #suffix>%</template>
                </a-statistic>
              </span>
              <span class="text-sm pl-2 text-gray-400">周同比
                <a-statistic :value-style="{fontSize:'18px'}" :value="item.data[1]" show-group-separator>
                  <template #prefix>
                  <icon-arrow-fall class="text-red-400"/>
                  </template>
                  <template #suffix>%</template>
                </a-statistic>
              </span>
            </div>
            <div v-else class="pb-1">
              <Chart height="43px" :option="chartOption" />
            </div>
            <a-divider class="mt-2 mb-2"/>
            <div class="flex">
              <span class="text-base">{{ item.totalText }}
                <a-statistic :value="item.total" :value-style="{fontSize:'18px'}" show-group-separator>
                   <template v-if="['¥'].includes(item.symbol)" #prefix>{{ item.symbol }}</template>
                   <template v-else #suffix>{{ item.symbol }}</template>
              </a-statistic></span>
            </div>
          </div>
        </a-card>
      </a-grid-item>
    </a-grid>
  </div>
</template>

