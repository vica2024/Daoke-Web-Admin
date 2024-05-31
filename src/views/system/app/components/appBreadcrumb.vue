<template>
  <div style="background: #fff;padding: 15px 10px;">
    <a-row class="grid-demo" :gutter="24">
      <a-col :span="22">
        <a-breadcrumb>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
      </a-col>
      <a-col :span="2">
        <div style="display: flex">
          <a-avatar :size="30">
            <img alt="avatar"
                 src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
          </a-avatar>
          <a-popover position="bottom">
            <div style="text-align: center; margin-top: -2px; padding-left: 6px;">
              <h3 style="font-size: 13px;">Kitilo</h3>
              <p style="font-size: 10px;color: #999">超级管理员</p>
            </div>
            <template #content>
              <div style="width:100px;">
                <a-button type="text" style="color: #2a3746">
                  <template #icon>
                    <icon-user/>
                  </template>
                  <template #default>个人中心</template>
                </a-button>
                <a-button type="text" style="color: #2a3746" @click="logout">
                  <template #icon>
                    <icon-poweroff :size="14"/>
                  </template>
                  <template #default>退出登陆</template>
                </a-button>
              </div>
            </template>
          </a-popover>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "appBreadcrumb",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {emit}) {

    const logout = () => {
      emit('closeWindow',false)
    }
    return {
      logout
    }
  }
})
</script>

<style scoped>

</style>