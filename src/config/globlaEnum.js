export const EditModelOpenMode = {
  // 新增 
  ADD: 1,
  // 编辑
  EDIT: 2,
  // 查看
  VIEW: 3,
}

export const editModelTitle = (editModelOpenMode = EditModelOpenMode.ADD) => {
  return ['', '新增', '编辑', '查看'][editModelOpenMode] || '未知'
}