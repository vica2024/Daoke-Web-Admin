import { DEFAULT_LAYOUT } from "../base";
// import { AppRouteRecordRaw } from '../types';

export default {
	path: "/finance",
	name: "Finance",
	component: DEFAULT_LAYOUT,
	meta: {
		locale: "menu.finance",
		requiresAuth: true,
		icon: "icon-computer",
		order: 2,
	},
	children: [
		{
			path: "withdraw-money-apply", // The midline path complies with SEO specifications
			name: "Withdraw Money Apply",
			component: () => import("@/views/finance/index.vue"),
			meta: {
				locale: "menu.finance.apply",
				requiresAuth: true,
				roles: ["*"],
			},
		},
		{
			path: "finance-details", // The midline path complies with SEO specifications
			name: "Finance Management",
			component: () => import("@/views/finance/withdrawMoney.vue"),
			meta: {
				locale: "menu.finance.details",
				requiresAuth: true,
				roles: ["*"],
			},
		},
	],
};

