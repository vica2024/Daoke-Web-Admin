import { ref, reactive, onBeforeUnmount, computed } from "vue"
import { useI18n } from 'vue-i18n';
import { EditModelOpenMode } from '@/config/globlaEnum.js'

export default function useEditRowForm({
  generateFormModel,
  editData,
  openMode
}) {
  const { t } = useI18n();

  // 编辑表单的 form 变量
  const dataForm = reactive({
    ...generateFormModel()
  });
  // 用于表单校验的 ref
  const dataFormRef = ref()

  const modalTitle = computed(() => {
    return ['', t('modal.title.add'), t('modal.title.edit'), t('modal.title.view')][openMode]
  })

  // 设置表单数据
  const resetForm = (formJson) => {
    Object.keys(generateFormModel()).forEach(key => {
      dataForm[key] = formJson[key]
    })
  }
  // 初始化表单数据
  resetForm(openMode === EditModelOpenMode.ADD ? generateFormModel() : editData);
  // 提交时进行表单校验
  const validateForm = () => {
    return new Promise((resolve, reject) => {
      if (!dataFormRef.value) {
        reject();
        return
      }
      dataFormRef.value.validate((valid) => {
        // 校验通过 有错误返回字段， 没有错误返回 viod 0
        if (valid && Object.values(valid).some(value => value.isRequiredError === true)) {
          reject()
        } else {
          resolve()
        }
      })
    })
  }
  // 卸载时 重置表单数据
  onBeforeUnmount(() => {
    resetForm(generateFormModel())
  })
  return {
    modalTitle,
    dataForm,
    dataFormRef,
    resetForm,
    validateForm,
  }
}