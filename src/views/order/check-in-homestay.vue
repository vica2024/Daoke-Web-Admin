<script setup>
import checkInHomestaySearchForm from "@/views/order/components/checkInHomestaySearchForm.vue";
import {ref} from "vue";
import CheckInHomestayItem from "@/views/order/components/checkInHomestayItem.vue";

const data = ref([])

</script>

<template>
  <div class="w-full">
    <check-in-homestay-search-form/>
    <div class="p-5 bg-white">
      <div @click="showDetails" class="mb-3">
        <check-in-homestay-item/>
      </div>
      <div class="overflow-hidden">
        <a-pagination :total="total" class="float-right" show-page-size/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
