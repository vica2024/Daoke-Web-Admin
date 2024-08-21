import { DEFAULT_LAYOUT } from "../base";
// import { AppRouteRecordRaw } from '../types';

export default {
	path: "/order",
	name: "order",
	component: DEFAULT_LAYOUT,
	meta: {
		locale: "menu.order",
		requiresAuth: true,
		icon: "icon-file",
		order: 2,
	},
	children: [
		{
			path: "entrust", // The midline path complies with SEO specifications
			name: "Order List",
			component: () => import("@/views/order/entrust.vue"),
			meta: {
				locale: "menu.order.entrust",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "look-house", // The midline path complies with SEO specifications
			name: "Order Look",
			component: () => import("@/views/order/look.vue"),
			meta: {
				locale: "menu.order.look",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "check-in-sign", // The midline path complies with SEO specifications
			name: "Order Signing",
			component: () => import("@/views/order/check-in-sign.vue"),
			meta: {
				locale: "menu.order.check-in-sign",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "check-in-homestay", // The midline path complies with SEO specifications
			name: "Order Homestay",
			component: () => import("@/views/order/check-in-homestay.vue"),
			meta: {
				locale: "menu.order.check-in-homestay",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "repair", // The midline path complies with SEO specifications
			name: "Order Repair",
			component: () => import("@/views/order/repair.vue"),
			meta: {
				locale: "menu.order.repair",
				requiresAuth: true,
				roles: ["*"],
			},
		},
	],
};

