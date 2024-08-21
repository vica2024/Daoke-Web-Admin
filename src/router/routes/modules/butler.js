import { DEFAULT_LAYOUT } from "../base";
// import { AppRouteRecordRaw } from '../types';

export default {
	path: "/butler",
	name: "Butler",
	component: DEFAULT_LAYOUT,
	meta: {
		locale: "menu.butler",
		requiresAuth: true,
		icon: "icon-robot",
		order: 2,
	},
	children: [
		{
			path: "store", // The midline path complies with SEO specifications
			name: "Store Manage",
			component: () => import("@/views/butler/stores.vue"),
			meta: {
				locale: "menu.butler.store",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "agency-apply", // The midline path complies with SEO specifications
			name: "Agency Apply",
			component: () => import("@/views/butler/agencys.vue"),
			meta: {
				locale: "menu.butler.agency-apply",
				requiresAuth: true,
				roles: ["*"],
			},
		}
	],
};

