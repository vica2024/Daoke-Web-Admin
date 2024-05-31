<template>
  <a-layout-sider collapsible breakpoint="xl" :style="`height: ${height}px`">
    <div class="logo">
      <span></span>
    </div>
    <a-menu :default-open-keys="['1']" :default-selected-keys="['0_3']" :style="{ width: '100%' }" @menu-item-click="onClickMenuItem">
      <a-menu-item :key="`${item.component}.v${item.version}.js`" v-for="(item, index) in hasOneMenus">
        <IconCalendar></IconCalendar>
        {{ item.name }}
      </a-menu-item>
      <a-sub-menu :key="index" v-for="(item, index) in hasMoreMenus">
        <template #title>
          <IconCalendar></IconCalendar>
          {{ item.name }}
        </template>
        <a-menu-item :key="`${subItem.component}.v${subItem.version}.js`" v-for="(subItem,subIndex) in item.children">
          {{subItem.name}}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import {ref, defineEmits} from 'vue';
import app from '@/api/system/app';
export default {
  name: "appMenu",
  props: {
    height:{
      type:Number,
      default: document.body.offsetHeight
    }
  },
  setup(props,{emit}) {
    const hasOneMenus = ref([]);
    const hasMoreMenus = ref([]);
    const onClickMenuItem = (e) => {
      emit('set-app-page', e)
    }

    const init = () => {
      app.getMenuList().then(res => {
        if (res.code == 200) {
          res.data.forEach((item, index) => {
            if (item.children.length > 0) {
              hasMoreMenus.value.push(item)
            } else {
              hasOneMenus.value.push(item)
            }
          })
        }
      });
    }
    init();
    return {
      hasOneMenus,
      hasMoreMenus,
      onClickMenuItem
    }
  }
}
</script>

<style scoped>
.logo{
  padding-top: 6%;
  height:68px;
}
.logo span{
  display: block;
  width: 80%;
  height: 80%;
  margin: auto;
  border-radius: 20%;
  background-color: #e7e7e7;
}
</style>