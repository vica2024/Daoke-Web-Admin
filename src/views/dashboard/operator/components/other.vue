<template>
  <div class="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
    <div class="bg-white p-5 col-span-1">
      <div>
        <span class="font-bold">房屋租金出租占比（元）</span>
        <a-divider/>
      </div>
      <div>
        <Chart height="295px" :options="optionData"/>
      </div>
    </div>
    <div class="bg-white p-5 col-span-1">
      <div>
        <span class="font-bold">热门搜索</span>
        <a-divider/>
      </div>
      <div>
        <a-table :columns="columns" :data="data"></a-table>
        <div style="text-align: right">
          <a-page :total="100" show-elevator style="margin-top: 15px"/>
        </div>
      </div>
    </div>
  </div>


</template>
<script setup>

import {ref} from "vue";

const optionData = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical', // 设置为垂直布局
    right: '10%', // 调整位置到右侧
    top: '15%', // 调整位置到顶部
    itemGap: 25, // 设置列表项之间的间距
    formatter: '{name}',// 设置图例项的格式
  },
  series: [
    {
      name: '租金占比',
      type: 'pie',
      radius: ['55%', '75%'],
      center: ['30%', '50%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        focus: 'self',// 突出显示该数据项
        label: {
          show: true,
          fontSize: 15,
          fontWeight: 'bold',
          formatter: '{b} {d}%'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        {value: 100, name: '0-1000', selected: false, itemStyle: {color: '#975fe4'}},
        {value: 200, name: '1000-1500', selected: false, itemStyle: {color: '#3aa0ff'}},
        {value: 300, name: '1500-2500', selected: false, itemStyle: {color: '#36cbcb'}},
        {value: 400, name: '2500-4000', selected: false, itemStyle: {color: '#4dcb73'}},
        {value: 500, name: '4000-6000', selected: true, itemStyle: {color: '#fad338'}},
        {value: 600, name: '>6000', selected: false, itemStyle: {color: '#f2637b'}}
      ]
    }
  ]
});

const columns = ref([
  {
    title: '排名',
    dataIndex: 'rank'
  },
  {
    title: '搜索关键词',
    dataIndex: 'keyWork'
  },
  {
    title: '用户数',
    dataIndex: 'total'
  },
  {
    title: '周涨幅',
    dataIndex: 'grew',
    "sortable": true
  }
])
const data = ref([
  {
    keyWork: '单身公寓',
    rank: 1,
    total: '2000',
    grew: '10%'
  },
  {
    keyWork: '小蛮腰民宿',
    rank: 2,
    total: '2000',
    grew: '22%'
  },
  {
    keyWork: '广州南站',
    rank: 3,
    total: '2000',
    grew: '34%'
  },
  {
    keyWork: '白云机场',
    rank: 4,
    total: '2000',
    grew: '120%'
  }
])


</script>
<style lang="less" scoped>

</style>
