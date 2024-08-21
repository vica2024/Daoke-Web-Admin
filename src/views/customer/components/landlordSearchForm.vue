<script setup>
import {useI18n} from "vue-i18n";
import {reactive} from "vue";
const {t} = useI18n();

</script>
<template>
  <div class="mb-5">
    <a-form :model="searchFormModel" layout="inline">
      <a-form-item field="name" label="房东信息">
        <a-input-group>
          <a-select :options="['手机号','姓名']" :style="{width:'100px'}" placeholder="请选择" />
          <a-input :style="{width:'260px'}" placeholder="请输入" />
        </a-input-group>
      </a-form-item>
      <a-form-item>
        <a-button type="outline" class="mr-3">查找</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped lang="less">

</style>
