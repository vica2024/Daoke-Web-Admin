import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css";
import { createRouter, createWebHistory } from "vue-router";

import createRouteGuard from "./guard";
import { appRoutes } from "./routes";
import { NOT_FOUND_ROUTE, REDIRECT_MAIN } from "./routes/base";

NProgress.configure({ showSpinner: false }); // NProgress Configuration
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			redirect: "home",
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/login/index.vue"),
			meta: {
				requiresAuth: false,
			},
		},
		{
			path: "/home",
			name: "home",
			component: () => import("@/views/home/index.vue"),
			meta: {
				requiresAuth: false,
			},
		},
		...appRoutes,
		REDIRECT_MAIN,
		NOT_FOUND_ROUTE,
	],
	scrollBehavior() {
		return { top: 0 };
	},
});

createRouteGuard(router);

export default router;

/**
 * 
 * roles
配置能访问该页面的角色，如果不匹配，则会被禁止访问该路由页面
string[]
-
requiresAuth
是否需要登录鉴权
boolean
false
icon
菜单配置icon
string
-
locale
一级菜单名（语言包键名）
string
-
hideInMenu
是否在左侧菜单中隐藏该项
boolean
-
hideChildrenInMenu
强制在左侧菜单中显示单项
boolean
-
activeMenu
高亮设置的菜单项
string
-
order
排序路由菜单项。如果设置该值，值越高，越靠前
number
-
noAffix
如果设置为true，标签将不会添加到tab-bar中
boolean
-
ignoreCache
如果设置为true页面将不会被缓存
boolean
-
 */
