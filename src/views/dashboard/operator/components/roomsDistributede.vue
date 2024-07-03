<script setup>
import {ref} from "vue";

const optionsList = ref([])
const cityList = ref([
  {name:"广州"},
  {name:"深圳"},
  {name:"阳江"},
  {name:"珠海"},
])
const color = ['#3aa1fe', '#69d288', '#fcda56', '#3aa1ff', '#35cbca', '#fcda56'];
const areas = ['天河区', '番禺区', '越秀区', '萝岗区', '白云区', '黄浦区'];
for (let i = 0; i < 6; i++) {
  const data = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    graphic: {
      elements: [
        {
          type: 'text',
          left: '38%',
          top: '42%',
          style: {
            text: areas[i],
            fill: '#4E5969',
            fontSize: 12,
            lineWidth: 10,
            fontWeight: 'bold',
          },
        }, {
          type: 'text',
          left: '43%',
          top: '54%',
          style: {
            text: '70%',
            fill: '#4E5969',
            fontSize: 11,
            lineWidth: 10
          },
        }]
    },
    series: [
      {
        name: areas[i],
        type: 'pie',
        radius: ['50%', '80%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {value: 30 + (i * 5), itemStyle: {color: color[i]}},
          {value: 70 - (i * 5), itemStyle: {color: '#f0f2f5'}}
        ]
      }
    ]
  }
  optionsList.value.push(data)
}


</script>
<template>
  <div class="mt-3">
    <div class="bg-white p-5">
      <div class="flex justify-between">
        <div class="w-2/3"><span class="font-bold">区域房源分布占比</span></div>
        <div class="w-1/3">
          <a-tabs type="rounded" :default-active-key="0">
            <a-tab-pane v-for="(item,index) in cityList" :key="index" :title="item.name"/>
          </a-tabs>
        </div>
      </div>
      <a-divider></a-divider>
      <div class="pb-5 grid grid-cols-6 gap-3">
        <div class="col-span-1" v-for="(item) in optionsList">
          <div>
            <Chart height="150px" :option="item"/>
            <div class="text-center">
              <p>房源总数：120</p>
              <p>已出租：26</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>

</style>
