import { reactive, ref, nextTick, watch, onUnmounted } from "vue";
import Sortable from "sortablejs";
import { useAppStore } from "@/store";

const cloneDeep = (arr) => {
  return arr.map((e) => ({ ...e }));
};

/**
 * 1. 表格参数查询 // 需要提供 generateFormModel 搜索条件重置参数， 可以传入 handerSearchForm 函数 处理搜索条件
 * 2. 表格 页码 查询 // 默认 1 20
 * 3. 表格数据重置 // resetFn
 * 4. 表格动态计算高度 // 需要传 table 的 class 名称 <a-table class="xxx"></a-table> 需要传递 xxx class 名称
 * 5. 表格列 显示/隐藏  // popupColumnVisibleChange 配合  handleColumnVisiable
 * 6. 表格列 排序  // popupColumnVisibleChange 配合  sortable
 * 7. 表格 loading
 * 8. 表格 选中项 selectedKeys
 *
 */
export default function useTableHook({
  tableClass,
  columns,
  generateFormModel,
  handerSearchForm,
  queryList,
}) {
  // 项目 src/config 里面配置信息
  const appStore = useAppStore();
  // 搜索项
  const searchFormModel = ref(generateFormModel());
  // table数据
  const tableData = ref([]);
  const tableHeight = ref(300);
  // table loading
  const loading = ref(false);
  // table 页码
  const pagination = reactive({
    current: 1,
    pageSize: 20,
    total: 0,

    showTotal: true,
    showPageSize: true,
    // showJumper: true,
    showSizeChanger: true,
    pageSizeOptions: [10, 20, 40, 100],
  });
  // 选中 table rowKey
  const selectedKeys = ref([]);
  // 列排序实例
  let sortable = null;

  // 显示列
  const cloneColumns = ref([]);
  const showColumns = ref([]);
  // 页码切换
  const handleTablePageChange = (current) => {
    pagination.current = current || 1;
    fetchTableData();
  };
  // 页码 数量变化
  const handlePageSizeChange = (pageSize) => {
    pagination.pageSize = pageSize || 20;
    fetchTableData();
  };
  // 重置 table
  const resetFn = () => {
    searchFormModel.value = generateFormModel();
    pagination.current = 1;
    pagination.pageSize = 20;
    pagination.total = 0;
    fetchTableData();
  };
  const fetchTableData = () => {
    loading.value = true;
    // 是否需要对查询参数进行处理，如果需要处理，则返回处理后的参数，否则返回原始参数
    const params = handerSearchForm
      ? handerSearchForm(searchFormModel.value)
      : searchFormModel.value;
    queryList({
      ...pagination,
      ...params,
    })
      .then((res) => {
        loading.value = false;
        const { list, total } = res.data || {};
        tableData.value = list;
        pagination.total = total;
      })
      .catch(() => {
        loading.value = false;
        tableData.value = [];
      });
  };

  // 列项 显示/隐藏
  const handleColumnVisiable = (checked, column, index) => {
    if (!checked) {
      cloneColumns.value = showColumns.value.filter(
        (item) => item.dataIndex !== column.dataIndex
      );
    } else {
      cloneColumns.value.splice(index, 0, column);
    }
  };

  // 列排序 改变
  const exchangeColumunArray = (array, beforeIdx, newIdx, isDeep = false) => {
    const newArray = isDeep ? cloneDeep(array) : array;
    if (beforeIdx > -1 && newIdx > -1) {
      // 先替换后面的，然后拿到替换的结果替换前面的
      newArray.splice(
        beforeIdx,
        1,
        newArray.splice(newIdx, 1, newArray[beforeIdx]).pop()
      );
    }
    return newArray;
  };
  // 列排序 初始化
  const popupColumnVisibleChange = (val) => {
    if (val) {
      nextTick(() => {
        const el = document.getElementById("tableSetting");
        sortable = new Sortable(el, {
          onEnd(e) {
            const { oldIndex, newIndex } = e;
            exchangeColumunArray(cloneColumns.value, oldIndex, newIndex);
            exchangeColumunArray(showColumns.value, oldIndex, newIndex);
          },
        });
      });
    }
  };

  // 列选项变动后 及时更新 列排序里面列选项
  watch(
    () => columns.value,
    (val) => {
      cloneColumns.value = cloneDeep(val);
      cloneColumns.value.forEach((item, index) => {
        item.checked = true;
      });
      showColumns.value = cloneDeep(cloneColumns.value);
    },
    { immediate: true }
    // { deep: true, immediate: true }
  );
  // 数据变化后 及时更新 表格高度
  watch(
    () => tableData.value,
    (val) => {
      if (!tableClass) {
        return;
      }
      nextTick(() => {
        const el = document.querySelector(tableClass);
        if (!el) {
          tableHeight.value = 350;
          return;
        }
        // tableHeight.value = window.innerHeight -  el.getBoundingClientRect().top - 40;
        tableHeight.value =
          window.innerHeight -
          el.getBoundingClientRect().top -
          40 -
          (appStore.footer ? 40 : 0);
      });
    }
  );
  // 初始化请求 tableData
  fetchTableData();

  // 销毁 排序实例
  onUnmounted(() => {
    sortable && sortable.destroy();
  });

  return {
    searchFormModel,
    tableData,
    tableHeight,
    loading,
    pagination,
    selectedKeys,
    cloneColumns,
    showColumns,
    handleTablePageChange,
    handlePageSizeChange,
    fetchTableData,
    handleColumnVisiable,
    popupColumnVisibleChange,
    resetFn,
  };
}
