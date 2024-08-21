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
      <a-form-item field="name" label="申请用户">
        <a-input  placeholder="请选择" />
      </a-form-item>
      <a-form-item field="name" label="手机号">
        <a-input  placeholder="请选择" />
      </a-form-item>
      <a-form-item field="name" label="提现状态">
        <a-select :options="[]"  placeholder="请选择" />
      </a-form-item>
      <a-form-item field="name" label="申请时间">
        <a-range-picker
            show-time
            style="width: 250px;"
            :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }"
            format="YYYY-MM-DD HH:mm"
            @change="onChange"
            @select="onSelect"
            @ok="onOk"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="outline" class="mr-3">查找</a-button>
        <a-button class="mr-3">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped lang="less">

</style>
