<script setup lang="ts">
   import {ref} from "vue";

   const form= ref({})

</script>

<template>
<div>
  <a-form :model="form" :auto-label-width="true" style="width: 80%; margin: auto" >
    <a-form-item>
      <a-button type="primary">提交</a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<style scoped lang="less">

</style>
