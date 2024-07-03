// import type { Router, LocationQueryRaw } from 'vue-router';
import NProgress from "nprogress"; // progress bar

import { useUserStore } from "@/store";
import { isLogin } from "@/utils/auth";
import { WHITE_LIST } from "./../constants";

export default function setupUserLoginInfoGuard(router) {
	router.beforeEach(async (to, from, next) => {
		NProgress.start();
		const userStore = useUserStore();
		if (WHITE_LIST.find((el) => el.name === to.name)) {
			next();
			return;
		}
		if (isLogin()) {
			if (userStore.role) {
				next();
			} else {
				try {
					await userStore.info();
					next();
				} catch (error) {
					await userStore.logout();
					next({
						name: "login",
						query: {
							redirect: to.name,
							...to.query,
						},
					});
				}
			}
		} else {
			if (to.name === "login") {
				next();
				return;
			}
			next({
				name: "login",
				query: {
					redirect: to.name,
					...to.query,
				},
			});
		}
	});
}
