<script setup>
import {useI18n} from "vue-i18n";
import {reactive} from "vue";

const {t} = useI18n();
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
</script>
<template>
  <div class="mb-5">
    <a-form :model="searchFormModel" :auto-label-width="true">
      <a-row :gutter="8">
        <a-col :span="8">
          <a-form-item field="name" label="经纪人信息">
            <a-input-group>
              <a-select :options="['Option1','Option2','Option3']" :style="{width:'160px'}" placeholder="first"/>
              <a-input placeholder="second"/>
            </a-input-group>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item field="name" label="工作区域">
            <a-cascader :options="options" default-value="datunli" expand-trigger="hover" placeholder=""/>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item field="name" label="所属门店">
            <a-select :options="['Option1','Option2','Option3']" placeholder="first"/>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item field="name" label="状态">
            <a-select :options="['Option1','Option2','Option3']" placeholder="first"/>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item>
            <a-button type="outline" class="mr-3">查找</a-button>
            <a-button>重置</a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<style scoped lang="less">

</style>
