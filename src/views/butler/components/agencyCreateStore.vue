<script setup>
import {ref, inject} from "vue";
import {Upload} from "@arco-design/web-vue";
const agencyMadelStatus = inject('agencyMadelStatus')
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
const current = ref(1);
const form = ref({})
const fileList = [
  {
    uid: '-2',
    name: '20200717-103937.png',
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  },
  {
    uid: '-1',
    name: 'hahhahahahaha.png',
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
  },
];
const reCreate = () => {
  current.value = 1;

}
const create = () => {
  current.value = 3;

}
const stepClick = (n) => {
  current.value = n;
}

const close = ()=>{
  agencyMadelStatus();
}
</script>

<template>
  <div>
    <div class="p-5 mb-10">
      <a-steps :current="current">
        <a-step>填写基本信息</a-step>
        <a-step>上传认证资料</a-step>
        <a-step>完成</a-step>
      </a-steps>
    </div>
    <a-form v-if="current==1" :model="form" :style="{width: '400px',margin:'auto'}" auto-label-width
            @submit="handleSubmit">
      <a-form-item field="name" label="登录帐号">
        <a-input v-model="form.name" :style="{width:'180px'}" placeholder=""/>
      </a-form-item>
      <a-form-item field="post" label="登录密码">
        <a-input :style="{width:'180px'}" v-model="form.post" placeholder=""/>
      </a-form-item>
      <a-form-item field="post" label="经纪人性质">
        <a-input :style="{width:'180px'}" v-model="form.post" placeholder=""/>
      </a-form-item>
      <a-form-item field="post" label="门店/工作区域">
        <a-cascader :style="{width:'280px'}" :options="options" default-value="datunli" expand-trigger="hover"
                    placeholder=""/>
      </a-form-item>
      <a-form-item field="post" label="手机号">
        <a-input v-model="form.post" :style="{width:'180px'}" placeholder=""/>
      </a-form-item>
      <a-form-item field="post" label="性别">
        <a-radio-group>
          <a-radio>男</a-radio>
          <a-radio>女</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item>
        <a-button size="large" @click="stepClick(2)" type="primary">下一步</a-button>
      </a-form-item>
    </a-form>

    <a-form v-if="current==2" :model="form" :style="{width: '400px',margin:'auto'}" auto-label-width
            @submit="handleSubmit">
      <a-form-item field="name" label="真实姓名">
        <a-input v-model="form.name" :style="{width:'180px'}" placeholder=""/>
      </a-form-item>
      <a-form-item field="post" label="身份证号">
        <a-input :style="{width:'180px'}" v-model="form.post" placeholder=""/>
      </a-form-item>
      <a-form-item field="post" label="身份证正面">
        <upload
            list-type="picture-card"
            action="/"
            :default-file-list="fileList"
            image-preview
        />
      </a-form-item>
      <a-form-item field="post" label="身份证背面">
        <upload
            list-type="picture-card"
            action="/"
            :default-file-list="fileList"
            image-preview
        />
      </a-form-item>
      <a-form-item field="post" label="其他资质">
        <a-select :options="['房地产经纪人资格证书']" placeholder="请选择资质"/>
      </a-form-item>
      <a-form-item field="post" label="证件照片">
        <upload
            list-type="picture-card"
            action="/"
            :default-file-list="fileList"
            image-preview
        />
      </a-form-item>
      <a-form-item>
        <a-button size="large" @click="stepClick(1)" class="mr-3">上一步</a-button>
        <a-button size="large" @click="create" type="primary" class="mr-3">提交</a-button>
        <a-button size="large" @click="stepClick(3)">跳过</a-button>
      </a-form-item>
    </a-form>
    <div v-if="current==3" :style="{width: '400px',margin:'auto'}">
      <div class="text-center">
        <div>
          <icon-check-circle-fill size="80" class="text-green-500"/>
        </div>
        <h1 class="text-lg font-bold ">经纪人添加成功</h1>
        <h3 class="mt-3">请在手机端登录完善个人头像照片等信息</h3>
      </div>
      <div class="m-auto p-5 w-4/5 bg-gray-50 mt-5 mb-5">
        <p class="mb-3">登录账户： daoke</p>
        <p class="mb-3">手机号： 1316832604</p>
        <p class="mb-3">所属门店： 广州市-天河区</p>
        <p class="mb-3">姓名： Vica</p>
      </div>
      <div class="text-center">
        <a-button size="large" @click="close" type="primary" class="mr-3">关闭</a-button>
        <a-button size="large" @click="reCreate">继续添加</a-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
