<script setup>
const data = [{
  title: "",
  list: [{
    label: '订单类型',
    value: '房屋委托',
    span: 2
  }, {
    label: '订单编号',
    value: 'DK2024060532423',
    span: 2
  }, {
    label: '下单用户',
    value: 'Vica Zhuo',
    span: 2
  }, {
    label: '下单时间',
    value: '2017-10-01 12:00:26',
  }]
},
  {
    title: "委托内容",
    list: [{
      label: '预留姓名',
      value: 'Vica Zhuo （Mr.）',
      span: 2
    }, {
      label: '联系方式',
      value: '13168320604',
      span: 2
    }, {
      label: '面积',
      value: '130㎡',
      span: 2
    }, {
      label: '厅室',
      value: '3室1厅2卫',
      span: 2
    }, {
      label: '房源地址',
      value: '广州天河11号xxx',
      span: 2
    }, {
      label: '楼层',
      value: '6/30',
      span: 2
    }, {
      label: '预期租金',
      value: '1500.00元',
      span: 2
    }, {
      label: '朝向',
      value: '南北',
      span: 2
    }, {
      label: '上门时间',
      value: '2023-12-13 18:00~20:00',
      span: 2
    }, {
      label: '装修',
      value: '精装修',
      span: 2
    }, {
      label: '房屋设施',
      value: '床、衣柜、书桌、宽带、空调、洗衣机、热水器',
      span: 2
    }, {
      label: '房源特色',
      value: '首次出租、有电梯、交通便利、只租家庭',
    }, {
      label: '备注',
      value: '',
    }]
  }];
</script>

<template>
  <div>
    <a-card title="委托进度" class="mb-3" :bordered="false">
      <div class="p-5">
        <a-steps :current="1">
          <a-step>委托中</a-step>
          <a-step>待签约</a-step>
          <a-step>待装锁</a-step>
          <a-step>完成（上架）</a-step>
        </a-steps>
      </div>
    </a-card>

    <a-card title="订单信息" class="mb-3" :bordered="false">
      <div class="p-5">
        <a-descriptions layout="inline-vertical" class="mb-5" v-for="item in data" :data="item.list" :title="item.title"
                        bordered/>
      </div>
    </a-card>

    <a-card title="管家信息" class="mb-3" :bordered="false">
      <div class="p-5">
        <p class="mb-3">说明：如果迟迟没有管家接单，建议指派经纪人</p>
        <a-button type="primary">指派管家</a-button>
      </div>
    </a-card>
  </div>
</template>

<style scoped lang="less">

</style>
