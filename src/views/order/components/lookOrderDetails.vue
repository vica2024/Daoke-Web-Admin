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
    title: "房屋信息",
    list: [{
      label: '房屋标题',
      value: '新世界先休息休息',
      span: 2
    }, {
      label: '房屋地址',
      value: '广州天河珠江新城xxxx',
      span: 2
    }]
  }];

</script>

<template>
  <div>
    <a-card title="入住签约进度" class="mb-3" :bordered="false">
      <div class="p-5">
        <a-steps :current="1">
          <a-step>申请中</a-step>
          <a-step>待房东确认</a-step>
          <a-step>待付款</a-step>
          <a-step>完成</a-step>
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
        <p class="mb-3">暂无数据，等待管家服务</p>
      </div>
    </a-card>

    <a-card title="认证信息" class="mb-3" :bordered="false">
      <div class="p-5">
         <a-descriptions layout="inline-vertical" bordered>
           <a-descriptions-item :span="2" label="租客姓名">鲁迅</a-descriptions-item>
           <a-descriptions-item :span="2" label="身份证号">356169xxxx65164</a-descriptions-item>
           <a-descriptions-item :span="2" label="证件照">
             <a-image
                 width="200"
                 src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
             />
           </a-descriptions-item>
         </a-descriptions>
      </div>
    </a-card>
  </div>
</template>

<style scoped lang="less">

</style>
