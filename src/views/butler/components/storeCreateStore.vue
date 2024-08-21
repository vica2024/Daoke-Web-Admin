<script setup>
import {ref, inject} from "vue";

const setStoreMadelStatus = inject('setStoreMadelStatus');

const options = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'chaoyang',
        label: 'ChaoYang',
        children: [
          {
            value: 'datunli',
            label: 'Datunli',
          },
        ],
      },
      {
        value: 'haidian',
        label: 'Haidian',
      },
      {
        value: 'dongcheng',
        label: 'Dongcheng',
      },
      {
        value: 'xicheng',
        label: 'Xicheng',
        children: [
          {
            value: 'jinrongjie',
            label: 'Jinrongjie',
          },
          {
            value: 'tianqiao',
            label: 'Tianqiao',
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'huangpu',
        label: 'Huangpu',
      },
    ],
  },
];
const form = ref({});

const createStore = () => {
  setStoreMadelStatus(false);
}

const reSet = ()=>{


}
</script>

<template>
  <a-form :model="form" :style="{width: '400px',margin:'auto'}" auto-label-width @submit="handleSubmit">
    <a-form-item field="name" label="门店名称">
      <a-input v-model="form.name" placeholder=""/>
    </a-form-item>
    <a-form-item field="post" label="店长姓名">
      <a-input :style="{width:'180px'}" v-model="form.post" placeholder=""/>
    </a-form-item>
    <a-form-item field="post" label="联系电话">
      <a-input :style="{width:'180px'}" v-model="form.post" placeholder=""/>
    </a-form-item>
    <a-form-item field="post" label="门店地址">
      <a-input v-model="form.post" placeholder=""/>
    </a-form-item>
    <a-form-item field="post" label="管理区域">
      <a-cascader :options="options" default-value="datunli" expand-trigger="hover" placeholder=""/>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="createStore" size="large" class="mr-5">创建</a-button>
      <a-button size="large" @click="reSet">重置</a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped lang="less">

</style>
