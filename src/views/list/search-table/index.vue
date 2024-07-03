<template>
	<div class="container">
		<Breadcrumb :items="['menu.list', 'menu.list.searchTable']" />
		<a-card class="general-card" :title="$t('menu.list.searchTable')">
			<a-row>
				<a-col :flex="1">
					<a-form
						:model="searchFormModel"
						:label-col-props="{ span: 6 }"
						:wrapper-col-props="{ span: 18 }"
						label-align="left"
					>
						<a-row :gutter="16">
							<a-col :span="8">
								<a-form-item field="number" :label="$t('searchTable.form.number')">
									<a-input
										v-model="searchFormModel.number"
										:placeholder="$t('searchTable.form.number.placeholder')"
									/>
								</a-form-item>
							</a-col>
							<a-col :span="8">
								<a-form-item field="name" :label="$t('searchTable.form.name')">
									<a-input
										v-model="searchFormModel.name"
										:placeholder="$t('searchTable.form.name.placeholder')"
									/>
								</a-form-item>
							</a-col>
							<a-col :span="8">
								<a-form-item field="contentType" :label="$t('searchTable.form.contentType')">
									<a-select
										v-model="searchFormModel.contentType"
										:options="contentTypeOptions"
										:placeholder="$t('searchTable.form.selectDefault')"
									/>
								</a-form-item>
							</a-col>
							<a-col :span="8">
								<a-form-item field="filterType" :label="$t('searchTable.form.filterType')">
									<a-select
										v-model="searchFormModel.filterType"
										:options="filterTypeOptions"
										:placeholder="$t('searchTable.form.selectDefault')"
									/>
								</a-form-item>
							</a-col>
							<a-col :span="8">
								<a-form-item field="createdTime" :label="$t('searchTable.form.createdTime')">
									<a-range-picker v-model="searchFormModel.createdTime" style="width: 100%" />
								</a-form-item>
							</a-col>
							<a-col :span="8">
								<a-form-item field="status" :label="$t('searchTable.form.status')">
									<a-select
										v-model="searchFormModel.status"
										:options="statusOptions"
										:placeholder="$t('searchTable.form.selectDefault')"
									/>
								</a-form-item>
							</a-col>
						</a-row>
					</a-form>
				</a-col>
				<a-divider style="height: 84px" direction="vertical" />
				<a-col :flex="'86px'" style="text-align: right">
					<a-space direction="vertical" :size="18">
						<a-button type="primary" @click="fetchTableData">
							<template #icon>
								<icon-search />
							</template>
							{{ $t("searchTable.form.search") }}
						</a-button>
						<a-button @click="resetFn">
							<template #icon>
								<icon-refresh />
							</template>
							{{ $t("searchTable.form.reset") }}
						</a-button>
					</a-space>
				</a-col>
			</a-row>
			<a-divider style="margin-top: 0" />
			<a-row style="margin-bottom: 16px">
				<a-col :span="12">
					<a-space>
						<a-button type="primary" @click="addRow({}, EditModelOpenModeR.ADD)">
							<template #icon>
								<icon-plus />
							</template>
							{{ $t("searchTable.operation.create") }}
						</a-button>
						<a-upload action="/">
							<template #upload-button>
								<a-button>
									{{ $t("searchTable.operation.import") }}
								</a-button>
							</template>
						</a-upload>
					</a-space>
				</a-col>
				<a-col :span="12" style="display: flex; align-items: center; justify-content: end">
					<a-button>
						<template #icon>
							<icon-download />
						</template>
						{{ $t("searchTable.operation.download") }}
					</a-button>
					<a-tooltip :content="$t('searchTable.actions.refresh')">
						<div class="action-icon" @click="fetchTableData"><icon-refresh size="18" /></div>
					</a-tooltip>
					<a-dropdown @select="handleSelectDensity">
						<a-tooltip :content="$t('searchTable.actions.density')">
							<div class="action-icon"><icon-line-height size="18" /></div>
						</a-tooltip>
						<template #content>
							<a-doption
								v-for="item in densityList"
								:key="item.value"
								:value="item.value"
								:class="{ active: item.value === size }"
							>
								<span>{{ item.name }}</span>
							</a-doption>
						</template>
					</a-dropdown>
					<a-tooltip :content="$t('searchTable.actions.columnSetting')">
						<a-popover trigger="click" position="bl" @popup-visible-change="popupColumnVisibleChange">
							<div class="action-icon"><icon-settings size="18" /></div>
							<template #content>
								<div id="tableSetting">
									<div v-for="(item, index) in showColumns" :key="item.dataIndex" class="setting">
										<div style="margin-right: 4px; cursor: move">
											<icon-drag-arrow />
										</div>
										<div>
											<a-checkbox
												v-model="item.checked"
												@change="handleColumnVisiable($event, item, index)"
											></a-checkbox>
										</div>
										<div class="title">
											{{ item.title === "#" ? "序列号" : item.title }}
										</div>
									</div>
								</div>
							</template>
						</a-popover>
					</a-tooltip>
				</a-col>
			</a-row>
			<a-table
				row-key="id"
				class="container-table"
				:loading="loading"
				:pagination="pagination"
				:columns="cloneColumns"
				:data="tableData"
				:bordered="false"
				:scroll="{ x: '100%', y: tableHeight + 'px' }"
				@page-change="handleTablePageChange"
				@page-size-change="handlePageSizeChange"
			>
				<template #index="{ rowIndex }">
					{{ rowIndex + 1 + (pagination.current - 1) * pagination.pageSize }}
				</template>
				<template #contentType="{ record }">
					<a-space>
						<a-avatar v-if="record.contentType === 'img'" :size="16" shape="square">
							<img
								alt="avatar"
								src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image"
							/>
						</a-avatar>
						<a-avatar v-else-if="record.contentType === 'horizontalVideo'" :size="16" shape="square">
							<img
								alt="avatar"
								src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image"
							/>
						</a-avatar>
						<a-avatar v-else :size="16" shape="square">
							<img
								alt="avatar"
								src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image"
							/>
						</a-avatar>
						{{ $t(`searchTable.form.contentType.${record.contentType}`) }}
					</a-space>
				</template>
				<template #filterType="{ record }">
					{{ $t(`searchTable.form.filterType.${record.filterType}`) }}
				</template>
				<template #status="{ record }">
					<span v-if="record.status === 'offline'" class="circle"></span>
					<span v-else class="circle pass"></span>
					{{ $t(`searchTable.form.status.${record.status}`) }}
				</template>
				<template #operations="{ record }">
					<!-- 这种是 基本按钮模式 -->
					<a-button v-permission="['admin']" type="text" @click="addRow(record, EditModelOpenModeR.VIEW)">
						{{ $t("searchTable.columns.operations.view") }}
					</a-button>
					<a-dropdown trigger="hover">
						<a-button type="text">{{ $t("searchTable.columns.operations.more") }}</a-button>
						<template #content>
							<a-doption @click="addRow(record, EditModelOpenModeR.EDIT)">
								{{ $t("searchTable.columns.operations.edit") }}
							</a-doption>
							<a-doption @click="addRow_TemplateDialog(record, EditModelOpenModeR.VIEW)">
								{{ $t("searchTable.columns.operations.view") }}
							</a-doption>
							<a-doption @click="deleteFn(record)" value="delete">
								{{ $t("searchTable.columns.operations.delete") }}
							</a-doption>
						</template>
					</a-dropdown>

					<!-- 这种是 直接按钮上面 添加操作按钮 -->
					<!-- <a-popconfirm :content="$t('searchTable.columns.operations.delete.description')"
            :on-before-ok="deleteFn(record)">
            <a-button v-permission="['admin']" type="text">{{ $t('searchTable.columns.operations.delete')
              }}</a-button>
          </a-popconfirm> -->
				</template>
			</a-table>
		</a-card>
		<TemplateAddRowModal
			v-if="visible"
			:visible="visible"
			:editData="clickRow"
			:openMode="openMode"
			@close="closeDialog"
		/>
		<TemplateDialog
			v-if="visible_TemplateDialog"
			:visible="visible_TemplateDialog"
			:editData="clickRow_TemplateDialog"
			:openMode="openMode_TemplateDialog"
			@close="closeDialog_TemplateDialog"
		/>
	</div>
</template>

<script setup>
import { computed, ref, reactive } from "vue";
import { useI18n } from "vue-i18n";
import TemplateAddRowModal from "@/components/TemplateAddRowModal/TemplateAddRowModal.vue";
import TemplateDialog from "@/components/TemplateDialog/TemplateDialog.vue";
import { EditModelOpenMode } from "@/config/globlaEnum.js";

import useTableHook from "@/hooks/useTableHook.js";
import useAddTableRow from "@/hooks/useAddTableRow.js";
import useDeleteConfim from "@/hooks/useDeleteConfim.js";
import useMessage from "@/hooks/useMessage.js";

import { queryPolicyList } from "@/api/list";

const generateFormModel = () => {
	return {
		number: "",
		name: "",
		contentType: "",
		filterType: "",
		createdTime: [],
		status: "",
	};
};
const { t } = useI18n();
const { MessageFn } = useMessage();
const EditModelOpenModeR = reactive({
	...EditModelOpenMode,
});

const columns = computed(() => [
	{
		title: t("searchTable.columns.index"),
		dataIndex: "index",
		slotName: "index",
	},
	{
		title: t("searchTable.columns.number"),
		dataIndex: "number",
	},
	{
		title: t("searchTable.columns.name"),
		dataIndex: "name",
	},
	{
		title: t("searchTable.columns.contentType"),
		dataIndex: "contentType",
		slotName: "contentType",
	},
	{
		title: t("searchTable.columns.filterType"),
		dataIndex: "filterType",
	},
	{
		title: t("searchTable.columns.count"),
		dataIndex: "count",
	},
	{
		title: t("searchTable.columns.createdTime"),
		dataIndex: "createdTime",
	},
	{
		title: t("searchTable.columns.status"),
		dataIndex: "status",
		slotName: "status",
	},
	{
		title: t("searchTable.columns.operations"),
		dataIndex: "operations",
		slotName: "operations",
	},
]);
// 表格基本获取数据  loading， 重置、 翻页等操作
const {
	searchFormModel,
	tableData,
	tableHeight,
	loading,
	pagination,
	cloneColumns,
	showColumns,
	handleTablePageChange,
	handlePageSizeChange,
	fetchTableData,
	handleColumnVisiable,
	popupColumnVisibleChange,
	resetFn,
} = useTableHook({
	tableClass: ".container-table",
	columns: columns,
	generateFormModel,
	queryList: queryPolicyList,
});

// 用于控制弹框
const { visible, clickRow, openMode, closeDialog, addRow } = useAddTableRow({
	fetchTableData,
});
// 用于控制弹框
const {
	visible: visible_TemplateDialog,
	clickRow: clickRow_TemplateDialog,
	openMode: openMode_TemplateDialog,
	closeDialog: closeDialog_TemplateDialog,
	addRow: addRow_TemplateDialog,
} = useAddTableRow({
	fetchTableData,
});

const size = ref("medium");

const densityList = computed(() => [
	{
		name: t("searchTable.size.mini"),
		value: "mini",
	},
	{
		name: t("searchTable.size.small"),
		value: "small",
	},
	{
		name: t("searchTable.size.medium"),
		value: "medium",
	},
	{
		name: t("searchTable.size.large"),
		value: "large",
	},
]);
const contentTypeOptions = computed(() => [
	{
		label: t("searchTable.form.contentType.img"),
		value: "img",
	},
	{
		label: t("searchTable.form.contentType.horizontalVideo"),
		value: "horizontalVideo",
	},
	{
		label: t("searchTable.form.contentType.verticalVideo"),
		value: "verticalVideo",
	},
]);
const filterTypeOptions = computed(() => [
	{
		label: t("searchTable.form.filterType.artificial"),
		value: "artificial",
	},
	{
		label: t("searchTable.form.filterType.rules"),
		value: "rules",
	},
]);
const statusOptions = computed(() => [
	{
		label: t("searchTable.form.status.online"),
		value: "online",
	},
	{
		label: t("searchTable.form.status.offline"),
		value: "offline",
	},
]);

const handleSelectDensity = (val) => {
	size.value = val;
};
// 这种是 直接按钮上面 添加操作按钮
// const deleteFn = (row) => {
//   return (done) => {
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(true);
//       }, 2000);
//     }).then(res => {
//       done(true);
//       fetchTableData();
//     })
//   }
// }
const deleteAsync = (row) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(true);
			MessageFn("success", "delete");
		}, 2000);
	});
};
const { deleteFn } = useDeleteConfim("searchTable.columns.operations.delete.description", deleteAsync);
</script>

<script>
export default {
	name: "SearchTable",
};
</script>

<style scoped lang="less">
.container {
	padding: 0 20px 20px 20px;
}

:deep(.arco-table-th) {
	&:last-child {
		.arco-table-th-item-title {
			margin-left: 16px;
		}
	}
}

.action-icon {
	margin-left: 12px;
	cursor: pointer;
}

.active {
	color: #0960bd;
	background-color: #e3f4fc;
}

.setting {
	display: flex;
	align-items: center;
	width: 200px;

	.title {
		margin-left: 12px;
		cursor: pointer;
	}
}
</style>
../../../hooks/useTableHook.js
