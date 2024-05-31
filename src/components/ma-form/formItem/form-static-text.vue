<!--
 - Dao-ke is a comprehensive and powerful property management system.
 - Please view the LICENSE file that was distributed with this source code,
 - For the full copyright and license information.
 - Thank you very much for using Dao-ke.
 -
 - @Author zhuovica@gmail.com>
 - @Link   https://github.com/vica2024/DaokeHomestay.git
-->
<template>
  <slot :name="`form-${props.component.dataIndex}`" v-bind="props.component">
    <div
      v-if="(typeof props.component.display == 'undefined' || props.component.display === true)"
      :class="[ 'static-text', props.component.customClass ]"
      :style="props.component.style"
    >{{ props.component.title ?? '' }}</div>
  </slot>
</template>

<script setup>
import { onMounted } from 'vue'
import { maEvent } from '../js/formItemMixin.js'
const props = defineProps({
  component: Object,
})

maEvent.handleCommonEvent(props.component, 'onCreated')
onMounted(() => {
  maEvent.handleCommonEvent(props.component, 'onMounted')
})
</script>
