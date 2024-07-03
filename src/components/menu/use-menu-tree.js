import { computed } from "vue";
// import { RouteRecordRaw, RouteRecordNormalized } from 'vue-router';
import usePermission from "@/hooks/permission";
import { useAppStore } from "@/store";
import appClientMenus from "@/router/app-menus";
// import { cloneDeep } from 'lodash';
const cloneDeep = (obj) => {
	if (Array.isArray(obj)) {
		return obj.map((item) => cloneDeep(item));
	}
	const newObj = Object.create(Object.getPrototypeOf(obj));
	Object.getOwnPropertyNames(obj).forEach((prop) => {
		// Bypass type checking since the primitive cases
		// are already checked in the beginning
		newObj[prop] = obj[prop];
	});
	return newObj;
};

export default function useMenuTree() {
	const permission = usePermission();
	const appStore = useAppStore();
	const appRoute = computed(() => {
		if (appStore.menuFromServer) {
			return appStore.appAsyncMenus;
		}
		return appClientMenus;
	});
	const menuTree = computed(() => {
		const copyRouter = cloneDeep(appRoute.value);
		copyRouter.sort((a, b) => {
			return (a.meta.order || 0) - (b.meta.order || 0);
		});
		function travel(_routes, layer) {
			if (!_routes) return null;

			const collector = _routes.map((element) => {
				// no access
				if (!permission.accessRouter(element)) {
					return null;
				}

				// leaf node
				if (element.meta?.hideChildrenInMenu || !element.children) {
					element.children = [];
					return element;
				}

				// route filter hideInMenu true
				element.children = element.children.filter((x) => x.meta?.hideInMenu !== true);

				// Associated child node
				const subItem = travel(element.children, layer + 1);

				if (subItem.length) {
					element.children = subItem;
					return element;
				}
				// the else logic
				if (layer > 1) {
					element.children = subItem;
					return element;
				}

				if (element.meta?.hideInMenu === false) {
					return element;
				}

				return null;
			});
			return collector.filter(Boolean);
		}
		return travel(copyRouter, 0);
	});

	return {
		menuTree,
	};
}
