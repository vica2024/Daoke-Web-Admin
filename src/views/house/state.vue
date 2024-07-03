<script setup>
import {ref} from "vue";
import { queryHouseList } from "@/api/house.js";
import HouseItems from "@/views/house/components/houseItems.vue";
import SearchForm from "@/views/house/components/searchForm.vue";
import PriceItem from "@/views/house/components/priceItem.vue";
import StateItem from "@/views/house/components/stateItem.vue";
const calendar = ref([])

const houseList= ref([]);

const fetchHouseList = async () => {
  const {data} = await queryHouseList();
  houseList.value= data;
  console.log(houseList.value)
}
const previousWeek = () => {

}

const nextWeek = () => {

}
const onChange = () => {

}
const onSelect = () => {

}
const defaultDates = ref([]);
function getNextWeekRange() {
  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 7);

  const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  defaultDates.value.push(formatDateTime(today));
  defaultDates.value.push(formatDateTime(endDate));

}
getNextWeekRange();
fetchHouseList();
</script>

<template>
  <div class="w-full">
    <search-form></search-form>
    <div class="bg-white p-3">
      <div class="w-full pt-3 flex justify-between items-center">
        <div class="flex">
          <a-button type="primary">同步</a-button>
          <a-button class="ml-2"><icon-lock/>锁定</a-button>
          <a-button class="ml-2"><icon-unlock/>解锁</a-button>
          <a-range-picker class="ml-2 w-2/5" :defaultValue="defaultDates" @change="onChange" @select="onSelect"/>
        </div>
        <div class="w-1/3 text-right">
          <a-badge color="purple" text="月租" class="mr-2"/>
          <a-badge color="green" text="日租" class="mr-2"/>
          <a-badge color="orange" text="时租"/>
        </div>
      </div>
      <a-divider/>
      <state-item v-for="item in houseList" :item="item" />
    </div>

  </div>
</template>

<style scoped lang="less">

</style>
