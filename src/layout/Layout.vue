<template>
  <div class="layout">
    <div class="container">
      <div class="button-group">
        <button type="primary" plain @click="setRomoteUrl('http://127.0.0.1:5000/component-a.0.0.0.umd.js')">
          加载远程组件A
        </button>
        <button type="danger" plain @click="setRomoteUrl('http://127.0.0.1:5000/Home.0.0.0.umd.js?V=32')">
          加载远程组件B
        </button>
      </div>

      <fieldset>
        <legend>
          <h4>远程组件容器</h4>
        </legend>
        <RemoteComponentContainer :url="romoteUrl" />
      </fieldset>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import RemoteComponentContainer from '@/components/RemoteComponentContainer.vue';
let romoteUrl = ref('');

const setRomoteUrl = (val) => {
  romoteUrl.value = val;
};

</script>

<style lang="scss" scoped>
.container {
  width: 100%;

  .button-group {
    margin-bottom: 10px;
  }

  fieldset {
    min-height: 200px;
  }
}
</style>
