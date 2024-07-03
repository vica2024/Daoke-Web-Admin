import { ref } from "vue";
import { EditModelOpenMode } from '@/config/globlaEnum.js'

export default function useEditTableRow({
  fetchTableData, // 获取数据
}) {
  const visible = ref(false);
  const clickRow = ref({});
  const openMode = ref(EditModelOpenMode.ADD)
  const closeDialog = (flag) => {
    if (flag === true) {
      fetchTableData()
    }
    visible.value = false;
  }

  const addRow = (row, type) => {
    clickRow.value = {
      ...row
    };
    openMode.value = type;
    visible.value = true;
  }

  return {
    visible,
    clickRow,
    openMode,
    closeDialog,
    addRow
  }
}