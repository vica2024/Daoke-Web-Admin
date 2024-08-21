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
			component: () => import("@/views/device/lock.vue"),
			meta: {
				locale: "menu.lock.management",
				requiresAuth: true,
				roles: ["*"],
			},
		},
	],
};

