
import { useI18n } from 'vue-i18n';
import { Modal } from '@arco-design/web-vue';

export default function useDeleteConfim(title, asyncFn, content = null) {
  const { t } = useI18n();
  const deleteFn = (row) => {
    const deleteDesc = t(title)
    const okText = t('modal.footer.delete')
    const cancelText = t('modal.footer.cancel')
    Modal.confirm({
      title: deleteDesc,
      titleAlign: 'start',
      content: content,
      okText: okText,
      cancelText: cancelText,
      onBeforeOk: (done) => {
        return asyncFn(row).then(() => {
          done(true)
        }).catch(() => {
          done(false)
        })
      },
      onBeforeCancel: () => {
        return true
      }
    })
  }

  return {
    deleteFn
  }


}