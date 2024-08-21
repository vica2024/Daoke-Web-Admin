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
      <a-form-item field="name" label="租客信息">
        <a-input-group>
          <a-select :options="['手机号','姓名']" :style="{width:'100px'}" placeholder="请选择" />
          <a-input :style="{width:'260px'}" placeholder="请输入" />
        </a-input-group>
      </a-form-item>
      <a-form-item field="name" label="租客状态">
        <a-select :options="['为入住','已入住']"  placeholder="请选择" />
      </a-form-item>
      <a-form-item field="name" label="电子锁状态">
        <a-select :options="['正常','异常']"  placeholder="请选择" />
      </a-form-item>
      <a-form-item field="name" label="退租日期">
        <a-range-picker
            show-time
            :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }"
            format="YYYY-MM-DD HH:mm"
            @change="onChange"
            @select="onSelect"
            @ok="onOk"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="outline" class="mr-3">查找</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped lang="less">

</style>
