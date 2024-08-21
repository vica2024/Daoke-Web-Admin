<script setup>
import {defineProps, ref} from "vue"
const props =defineProps({
  house: {
    type: Object,
    default: {
      title: "房源标题",
      tags: [],
      state: 0,
      address: null
    }
  }
})
const visible = ref(false);

</script>

<template>
  <div>
    <a-image
        show-loader
        src='https://pic.tujia.com/upload/landlordunit/day_240419/thumb/202404191714156824_700_467.jpg'
        :preview-visible="visible"
        @preview-visible-change="() => { visible = false }"
    >
      <template #extra>
        <div class="absolute right-1 bottom-1">
          <span class="text-sm">待出租</span>
        </div>
      </template>
    </a-image>
    <div>
      <h2 class="text-base font-bold mb-2">{{ house.title }} </h2>
      <a-breadcrumb v-if="house.tags.length>0" separator="|">
        <a-breadcrumb-item v-for="tag in house.tags">{{ tag }}</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="flex items-center text-gray-500 mt-2">
        <icon-location/>
        <span class="pl-1">广州番禺大夫山脚下</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
