<script setup>
import {reactive, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import HouseInfo from "@/views/house/components/from/house-info.vue";
import HousePhotos from "@/views/house/components/from/house-photos.vue";
import HouseButle from "@/views/house/components/from/house-butle.vue";
import HouseLandlordInfo from "@/views/house/components/from/house-landlord.vue";
import HouseSignInfo from "@/views/house/components/from/house-signing.vue";


const {t} = useI18n();

const searchFormModel = reactive({
  keyWord: '',
  address: '',
  rent: null,
  status: null,
});

const isShowAddMadle = ref(false)

</script>

<template>
    <div>
       <house-info></house-info>
      <house-photos></house-photos>
      <house-butle></house-butle>
      <house-landlord-info></house-landlord-info>
      <house-sign-info></house-sign-info>
    </div>
</template>

<style scoped lang="less">
/* Add any scoped styles here if needed */
</style>
