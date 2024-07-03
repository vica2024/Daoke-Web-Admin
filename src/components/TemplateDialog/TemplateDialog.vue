<template>
  <a-modal :visible="props.visible" :width="props.width" :title="modalTitle" draggable title-align="start"
    :mask-closable="false" :on-before-ok="handleOk" @cancel="closeDialog(false)">
    <!--  -->
    <!-- <template #title>
      Title
    </template> -->
    <!-- <template #footer></template> -->
    <span>这里面放你的逻辑</span>
  </a-modal>

</template>
<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { EditModelOpenMode } from '@/config/globlaEnum.js'

const { t } = useI18n();

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  openMode: {
    type: Number, // 1 | 2 | 3, // 1新增 2编辑 3查看
    default: EditModelOpenMode.ADD
  },
  editData: {
    type: Object,
    default: () => ({})
  },
  width: {
    type: [String, Number],
    default: 700
  },
});
const emit = defineEmits(['close']);
const closeDialog = (flag) => {
  emit('close', flag);
}
const modalTitle = computed(() => {
  return ['', t('modal.title.add'), t('modal.title.edit'), t('modal.title.view')][props.openMode]
})


const handleOk = (done) => {
  // 如果是查看模式，直接关闭
  if (props.openMode === EditModelOpenMode.VIEW) {
    done(true);
    closeDialog(true)
    return
  }
  setTimeout(() => {
    done(true);
    closeDialog(true)
  }, 3000);
};
</script>