import { DEFAULT_LAYOUT } from "../base";
// import { AppRouteRecordRaw } from '../types';

export default {
	path: "/house",
	name: "house",
	component: DEFAULT_LAYOUT,
	meta: {
		locale: "menu.house",
		requiresAuth: true,
		icon: "icon-home",
		order: 2,
	},
	children: [
		{
			path: "list", // The midline path complies with SEO specifications
			name: "House List",
			component: () => import("@/views/house/list.vue"),
			meta: {
				locale: "menu.house.list",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "state", // The midline path complies with SEO specifications
			name: "House State",
			component: () => import("@/views/house/state.vue"),
			meta: {
				locale: "menu.house.state",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "Price", // The midline path complies with SEO specifications
			name: "House Price",
			component: () => import("@/views/house/price.vue"),
			meta: {
				locale: "menu.house.price",
				requiresAuth: true,
				roles: ["*"],
			},
		},
	],
};

