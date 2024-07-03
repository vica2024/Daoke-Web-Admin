<script setup>
import {ref,defineProps} from "vue";
const prop = defineProps({
  item:{
    type:Array,
    default:[]
  },
  index:{
    type:Number,
    default:0
  }
});

const tags = {
  m:"purple",
  d:"green",
  h:"orange"
}
</script>

<template>
  <div class="flex">
    <!-- 房屋 -->
    <div class="house-item overflow-hidden flex items-center">
      <a-image :src="item.defaultPicture" :preview-visible="visible" @preview-visible-change="() => { visible= false }"
      />
    </div>
    <!-- 日历 -->
    <div class="flex-1 pl-3 relative">
      <div class="h-1/2 flex">
        <!--  房源信息  -->
        <div class="border-r w-1/2 pr-3">
          <a-typography-title style="margin-top:0; margin-bottom:0;" :heading="6" :ellipsis="true">
            {{ item.unitName }}
          </a-typography-title>
          <div class="flex items-center text-gray-500 mt-1">
            <icon-location size="13"/>
            <span class="pl-1 text-xs">{{ item.address }}</span>
          </div>
        </div>
        <!--  房间编号  -->
        <div class="w-1/2">
          <div class="flex w-full h-full pt-4">
            <a-tabs size="small" type="rounded">
              <a-tab-pane :key="room.unitNo" v-for="room in item.roomList">
                <template #title>
                  <span class="mr-1">
                    {{ room.unitNo }}
                    <a-badge :color="tags[room.rentSummaries]"/>
                  </span>
                </template>
              </a-tab-pane>
            </a-tabs>
          </div>
        </div>
      </div>
      <div class="w-full h-1/2 flex justify-between">
        <div class="bg-gray-100 relative h-full flex items-center pl-1 pr-1 cursor-pointer active:bg-gray-200">
          <icon-left size="17"/>
        </div>
        <div class="flex-1 cursor-pointer border-r pl-2 pr-2 text-center hover:bg-gray-50" v-for="unit in item.roomList[index].unitPrices">
          <div class="text-center mb-2 text-base">{{ unit.day }}
            <span class="text-xs text-gray-400">{{ unit.week }}</span>
          </div>
          <span class="text-xs">
            <icon-lock v-if="unit.isLock" />
            <icon-unlock v-else />
          </span>
        </div>
        <div class="bg-gray-100 h-full flex items-center pl-1 pr-1 cursor-pointer active:bg-gray-200">
          <icon-right size="17"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.house-item {
  width: 176px;
  height: 120px;
}
</style>
