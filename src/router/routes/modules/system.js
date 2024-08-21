import { DEFAULT_LAYOUT } from "../base";
// import { AppRouteRecordRaw } from '../types';

export default {
	path: "/system",
	name: "system",
	component: DEFAULT_LAYOUT,
	meta: {
		locale: "menu.system",
		requiresAuth: true,
		icon: "icon-settings",
		order: 2,
	},
	children: [
		{
			path: "role", // The midline path complies with SEO specifications
			name: "Role",
			component: () => import("@/views/system/role.vue"),
			meta: {
				locale: "menu.system.role",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "permission", // The midline path complies with SEO specifications
			name: "Permission",
			component: () => import("@/views/system/permission.vue"),
			meta: {
				locale: "menu.system.permission",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "wechat-config", // The midline path complies with SEO specifications
			name: "Wechat Configure",
			component: () => import("@/views/system/wechatSeting.vue"),
			meta: {
				locale: "menu.system.wechat-config",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "payment-config", // The midline path complies with SEO specifications
			name: "Payment Configure",
			component: () => import("@/views/system/payment.vue"),
			meta: {
				locale: "menu.system.payment-config",
				requiresAuth: true,
				roles: ["*"],
			},
		},
	],
};

