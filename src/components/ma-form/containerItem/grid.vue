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
  <a-row
      v-if="(typeof props.component?.display == 'undefined' || props.component?.display === true)"
      :class="[props.component?.customClass]"
      :gutter="props.component?.gutter"
      :justify="props.component?.justify"
      :align="props.component?.align"
      :div="props.component?.div"
      :wrap="props.component?.wrap"
  >
    <template v-for="(col, colIndex) in (props.component?.cols ?? [])" :key="colIndex">
      <ma-grid-col :component="col">
        <template v-for="slot in Object.keys($slots)" #[slot]="component">
          <slot :name="slot" v-bind="component" />
        </template>
      </ma-grid-col>
    </template>
  </a-row>
</template>

<script setup>
import { onMounted } from 'vue'
import MaGridCol from './grid-col.vue'
import { maEvent } from '../js/formItemMixin.js'
const props = defineProps({ component: Object })

maEvent.handleCommonEvent(props.component, 'onCreated')
onMounted(() => {
  maEvent.handleCommonEvent(props.component, 'onMounted')
})
</script>
