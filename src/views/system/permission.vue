<script setup>

import {ref, h} from "vue";
import {Checkbox} from '@arco-design/web-vue';

const tableH= ref(725);

const roleList = ref([
  {
    title: '角色类型列表',
    dataIndex: 'roleName',
    render: ({record, rowIndex}) => {
      return h('span', {
        className:record.checked? 'text-blue-500 font-bold':'text-gray'
      }, record.roleName);
    },
  },
]);

const roleData = ref([
  {roleName: "超级管理员", roleId: 1, checked: true},
  {roleName: "普通管理员", roleId: 2, checked: false},
  {roleName: "财务", roleId: 3, checked: false},
  {roleName: "客服", roleId: 4, checked: false},
  {roleName: "运营", roleId: 5, checked: false}
]);

// 原始数据
const rawData = ref([
  {module: "首页", permission: '账户信息', operate: "修改密码", checked: false},
  {module: "首页", permission: '账户信息', operate: "创建密码", checked: false},
  {module: "首页", permission: '账户信息', operate: "删除密码", checked: false},
  {module: "首页", permission: '邮件合同', operate: "修改状态", checked: false},
  {module: "首页", permission: '电子警报锁', operate: "修改状态", checked: false},
  {module: "首页", permission: '电子警报锁', operate: "修改状态", checked: false},
  {module: "首页", permission: '电子警报锁', operate: "修改状态", checked: false},
  {module: "设置", permission: '用户管理', operate: "添加用户", checked: false},
  {module: "设置", permission: '用户管理', operate: "删除用户", checked: false},
  {module: "设置", permission: '系统配置', operate: "修改配置", checked: false},
  {module: "报表", permission: '销售报表', operate: "查看报表", checked: false},
  {module: "报表", permission: '财务报表', operate: "导出报表", checked: false},
  {module: "报表", permission: '库存报表', operate: "查看报表", checked: false},
  {module: "帮助", permission: '在线帮助', operate: "查看帮助", checked: false},
  {module: "帮助", permission: '联系支持', operate: "发送请求", checked: false},
  {module: "帮助", permission: '在线帮助', operate: "q", checked: false},
  {module: "帮助", permission: '联系支持', operate: "w", checked: false},
  {module: "帮助", permission: '在线帮助', operate: "e", checked: false},
  {module: "帮助", permission: '联系支持', operate: "r", checked: false},
  {module: "帮助", permission: '在线帮助', operate: "t", checked: false},
  {module: "帮助", permission: '联系支持', operate: "y", checked: false},
  {module: "帮助", permission: '在线帮助', operate: "y", checked: false},
  {module: "帮助", permission: '联系支持', operate: "y", checked: false},
]);
const processedData = ref([])
// 处理数据以便表格使用
processedData.value = rawData.value.map((item, index) => ({
  ...item,
  key: index,
}));


// 定义表格列
const columns = [
  {
    title: '模块',
    dataIndex: 'module',
    width:100,
    key: 'module',
    render: ({record, rowIndex}) => {
      return h('span', [
        h(Checkbox, {
          defaultChecked: record.checked,
          onChange: (checked) => {
            console.log('Checkbox checked:', checked.module, record);
          },
        }, () => record.module)
      ]);
    },
  },
  {
    title: '权限',
    dataIndex: 'permission',
    key: 'permission',
    width:100,
    render: ({record, rowIndex}) => {
      return h('span', {
        className:'flex justify-between'
      },[
        h(Checkbox, {
          size:'large',
          defaultChecked: record.checked,
          onChange: (checked) => {

            console.log('Checkbox checked:', rowIndex);
          },
        }, () => record.permission)
      ]);
    },
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    width:100,
    render: ({record, rowIndex}) => {
      return h('span', {
        className:'flex justify-between'
      },[
        h(Checkbox, {
          defaultChecked: record.checked,
          onChange: (checked) => {
            processedData.value[rowIndex].checked = true;
            console.log('Checkbox checked:', rowIndex);
          },
        }, () => record.operate)
      ]);
    },
  },
];

// 合并单元格方法
const spanMethod = ({record, columnIndex, rowIndex}) => {
  if (columnIndex === 0) {
    const currentModule = record.module;
    const isFirstRowForModule = rawData.value.findIndex(item => item.module === currentModule) === rowIndex;
    const rowspan = rawData.value.filter(item => item.module === currentModule).length;
    return {
      rowspan: isFirstRowForModule ? rowspan : 0,
      colspan: 1,
    };
  }
  if (columnIndex === 1) {
    const currentPermission = record.permission;
    const isFirstRowForPermission = rawData.value.findIndex(item => item.permission === currentPermission && item.module === record.module) === rowIndex;
    const rowspan = rawData.value.filter(item => item.permission === currentPermission && item.module === record.module).length;
    return {
      rowspan: isFirstRowForPermission ? rowspan : 0,
      colspan: 1,
    };
  }
  return {rowspan: 1, colspan: 1};
};
</script>

<template>
  <div class="w-full h-full">
    <div class="flex bg-white p-5 justify-between">
      <a-button type="primary">添加权限角色</a-button>
      <a-input class="w-1/4">
        <template #suffix>
          <icon-search/>
        </template>
      </a-input>
    </div>
    <div class="w-full h-full mt-5 flex justify-between">
      <div style="width: 230px;" class="left-table bg-white p-5 mr-5">
        <a-table size="large" :pagination="false" :data="roleData" :height="tableH" :scroll={y:tableH} :columns="roleList"/>
      </div>
      <div class="flex-1 right-table bg-white p-5">
        <div>
          <a-table size="large" :columns="columns" :pagination="false"  :scroll={y:tableH} :data="processedData" :hoverable="false"
                   :span-method="spanMethod"></a-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px #ccc;
}

::-webkit-scrollbar {
  width: 2px !important;
  /* 对垂直流动条有效 */
}
</style>
