<template>
  <div>
    <a-row class="grid-demo" :gutter="{ md: 8, lg: 24, xl: 32 }">
      <a-col :span="6">
        <a-card>
          <template #actions>
            <a-typography-text @click="openApp(1)" :style="{color: '#1389e1',}">进入应用
              <icon-send/>
            </a-typography-text>
          </template>
          <template #cover>
            <div :style="{height: '204px',overflow: 'hidden',}">
              <img :style="{ width: '100%', transform: 'translateY(-20px)' }" alt="dessert"
                   src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"/>
            </div>
          </template>
          <a-card-meta title="房屋管理" description="This is the description">
            <template #avatar>
              <div :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
                <a-avatar :size="24" :style="{ marginRight: '8px' }">A</a-avatar>
                <a-typography-text></a-typography-text>
              </div>
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <a-modal v-model:visible="isShow" :body-style="{'padding':'0px',height:'100%'}" :closable="false" :footer="false"
             fullscreen>
      <a-layout class="layout-main">
        <app-menu @set-app-page="setPage" ></app-menu>
        <a-layout>
          <app-breadcrumb @closeWindow="closeWindow"></app-breadcrumb>
          <app-main @setStatus="setStatus" ref="appMainComponent"></app-main>
        </a-layout>
      </a-layout>
    </a-modal>
    <a-modal v-model:visible="visible" title="系统提示" :mask-closable="false" :closable="false" :footer="false">
      <div style="text-align: center;margin: 50px 0;">
        <a-spin dot/>
      </div>
    </a-modal>
  </div>
</template>

<script>
import {ref} from "vue";
import app from '@/api/system/app';
import appMenu from "./components/appMenu.vue";
import appMain from "./components/appMain.vue";
import appBreadcrumb from "./components/appBreadcrumb.vue";
import apiGroup from "@/api/system/apiGroup";

export default {
  name: "sys-app-list",
  components: {
    appMenu,
    appMain,
    appBreadcrumb,
  },
  setup() {
    const componentName = ref('');
    const isShow = ref(false);
    const appMainComponent = ref(null);
    const menuItemList = ref([])
    const setPage = (url) => {
      const path = `http://127.0.0.1:5000/${url}`;
      console.log(path)
      appMainComponent.value.loadComponents(path)
    }
    const closeWindow = (value) => {
      isShow.value = value;
    }
    const setStatus = (s)=>{
      visible.value=s;
    }
    const openApp = (id) => {
      isShow.value = true;
    }

    return {
      isShow,
      setPage,
      openApp,
      setStatus,
      closeWindow,
      menuItemList,
      componentName,
      appMainComponent
    };
  }

}
</script>

<style scoped>
img {
  width: 200px;
}

.h1 {
  border: 5px solid red !important;
  padding: 1px !important;
}

.section {
  border: 1px solid black;
  padding: 10px;
}
</style>