import { DEFAULT_LAYOUT } from "../base";
// import { AppRouteRecordRaw } from '../types';

export default {
	path: "/content",
	name: "Content",
	component: DEFAULT_LAYOUT,
	meta: {
		locale: "menu.content",
		requiresAuth: true,
		icon: "icon-book",
		order: 2,
	},
	children: [
		{
			path: "validation", // The midline path complies with SEO specifications
			name: "Validation ID",
			component: () => import("@/views/order/entrust.vue"),
			meta: {
				locale: "menu.content.validation",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "customer-feedback", // The midline path complies with SEO specifications
			name: "Customer Feedback",
			component: () => import("@/views/order/look.vue"),
			meta: {
				locale: "menu.content.feedback",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "contract-manage", // The midline path complies with SEO specifications
			name: "Contract Manage",
			component: () => import("@/views/order/check-in.vue"),
			meta: {
				locale: "menu.content.contract",
				requiresAuth: true,
				roles: ["*"],
			},
		},
	],
};

