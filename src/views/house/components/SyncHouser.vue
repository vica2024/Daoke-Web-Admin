<script setup>
import {reactive, ref} from "vue";


const form = reactive({

})
const handleCancel = ()=>{

}

const handleOk = () => {

}

</script>

<template>
  <a-modal :visible="visible" @ok="handleOk" @cancel="handleCancel" okText="Confirm" cancelText="Exit" unmountOnClose>
    <a-form :model="form" :style="{width:'600px'}">
      <a-form-item field="平台" label="ota" validate-trigger="checkbox" required>
        <a-checkbox value="1">途家民宿</a-checkbox>
        <a-checkbox value="2">小猪民宿</a-checkbox>
        <a-checkbox value="3">美团民宿</a-checkbox>
        <a-checkbox value="4">携程</a-checkbox>
      </a-form-item>
      <a-form-item field="isRead">

      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style scoped lang="less">

</style>
