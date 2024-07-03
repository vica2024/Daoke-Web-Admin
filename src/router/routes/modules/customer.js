import { DEFAULT_LAYOUT } from "../base";
// import { AppRouteRecordRaw } from '../types';

export default {
	path: "/customers",
	name: "customers",
	component: DEFAULT_LAYOUT,
	meta: {
		locale: "menu.customers",
		requiresAuth: true,
		icon: "icon-user",
		order: 2,
	},
	children: [
		{
			path: "tenant", // The midline path complies with SEO specifications
			name: "Tenant Management",
			component: () => import("@/views/order/entrust.vue"),
			meta: {
				locale: "menu.customers.tenant",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "landlord", // The midline path complies with SEO specifications
			name: "Landlord Management",
			component: () => import("@/views/order/look.vue"),
			meta: {
				locale: "menu.customers.landlord",
				requiresAuth: true,
				roles: ["*"],
			},
		},
	],
};

