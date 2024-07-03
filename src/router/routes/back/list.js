import { DEFAULT_LAYOUT } from "../base";
// import { AppRouteRecordRaw } from '../types';

const LIST = {
	path: "/list",
	name: "list",
	component: DEFAULT_LAYOUT,
	meta: {
		locale: "menu.list",
		requiresAuth: true,
		icon: "icon-list",
		order: 2,
	},
	children: [
		{
			path: "search-table", // The midline path complies with SEO specifications
			name: "SearchTable",
			component: () => import("@/views/list/search-table/index.vue"),
			meta: {
				locale: "menu.list.searchTable",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "card",
			name: "Card",
			component: () => import("@/views/list/card/index.vue"),
			meta: {
				locale: "menu.list.cardList",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "animation",
			name: "Animation",
			component: () => import("@/views/list/table-animation/index.vue"),
			meta: {
				locale: "menu.list.animation",
				requiresAuth: true,
				ignoreCache: true,
				roles: ["*"],
			},
		},
		{
			path: "list",
			name: "tableList",
			component: () => import("@/views/list/tableList/index.vue"),
			meta: {
				locale: "menu.list.tableList",
				requiresAuth: true,
				ignoreCache: true,
				roles: ["*"],
			},
		},
	],
};

export default LIST;
