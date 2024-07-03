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
			component: () => import("@/views/order/entrust.vue"),
			meta: {
				locale: "menu.butler.store",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "agency-apply", // The midline path complies with SEO specifications
			name: "Agency Apply",
			component: () => import("@/views/order/look.vue"),
			meta: {
				locale: "menu.butler.agency-apply",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "agency-manage", // The midline path complies with SEO specifications
			name: "Agency Manage",
			component: () => import("@/views/order/check-in.vue"),
			meta: {
				locale: "menu.butler.agency-manage",
				requiresAuth: true,
				roles: ["*"],
			},
		},
	],
};

