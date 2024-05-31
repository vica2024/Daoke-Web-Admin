<template>
  <div :style="`background-color: #f9f9fa;padding: 15px;height:${clientHeight-70}px`">
    <component :is="mode"/>
  </div>
</template>

<script setup>
import {ref, markRaw, defineComponent} from 'vue';

let mode = ref('div');
const loadComponents = (url) => {
  if (!url) {
    return false;
  }
  return fetch(url).then((res) => {
    if (res.status === 200) {
      res.text().then((code) => {
        new Function(code)();
        mode.value = markRaw(window.MyComponent);
      });
    }
  });
}
defineExpose({loadComponents})
</script>

<style scoped>

</style>