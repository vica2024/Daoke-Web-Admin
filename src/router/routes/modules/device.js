import { DEFAULT_LAYOUT } from "../base";
// import { AppRouteRecordRaw } from '../types';

export default {
	path: "/device",
	name: "Device",
	component: DEFAULT_LAYOUT,
	meta: {
		locale: "menu.device",
		requiresAuth: true,
		icon: "icon-relation",
		order: 2,
	},
	children: [
		{
			path: "index", // The midline path complies with SEO specifications
			name: "Device Management",
			component: () => import("@/views/order/entrust.vue"),
			meta: {
				locale: "menu.device.management",
				requiresAuth: true,
				roles: ["*"],
			},
		},
	],
};

