<script setup>
import {useI18n} from "vue-i18n";
import {reactive} from "vue";
const {t} = useI18n();

</script>
<template>
  <div class="mb-5">
    <a-form :model="searchFormModel" layout="inline">
      <a-form-item field="name" label="合同编号">
        <a-input placeholder="请选择"/>
      </a-form-item>
      <a-form-item field="name" label="合同类型">
        <a-select :options="['one']" placeholder="请选择"/>
      </a-form-item>
      <a-form-item>
        <a-button type="outline" class="mr-3">查找</a-button>
        <a-button>重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped lang="less">

</style>
