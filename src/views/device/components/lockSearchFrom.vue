<script setup>
import {useI18n} from "vue-i18n";
import {reactive} from "vue";
const {t} = useI18n();
const onSelect = (dateString, date)=> {
  console.log('onSelect', dateString, date);
}

const onChange = (dateString, date) =>{

}

const onOk = ()=>{


}
</script>
<template>
  <div class="mb-5">
    <a-form :model="searchFormModel" layout="inline">

      <a-form-item field="name" label="设备状态">
        <a-select :options="['为入住','已入住']"  placeholder="请选择" />
      </a-form-item>
      <a-form-item field="name" label="设备编号">
        <a-input placeholder="请输入设备编号" />
      </a-form-item>
      <a-form-item>
        <a-button type="outline" class="mr-3">查找</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped lang="less">

</style>
