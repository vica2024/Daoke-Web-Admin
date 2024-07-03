# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

-   [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

简单说明一下： 我在考虑用 vue3 来搭建后台管理系统， 对比了几个热门模板之后，选择了 [arcoDesignPro](https://github.com/arco-design/arco-design-pro-vue)， 因为他的代码结构比较清晰， 而且文档比较详细， 而且有中文文档。

-   但是在启动项目过程中， ts、node、vue、vite等不知道哪个版本冲突了，这种问题 我不会去花太多时间去排查，所以直接 使用 vite 生成 vue 项目， 然后把 arcoDesignPro 中的代码复制过来。

-   为了第一眼能初步理解 arcoDesignPro 这个优秀的项目结构， 所以我把 它的 MD 文档 也复制过来， 方便大家快速了解这个项目。

-   arcoDesignVue 很优秀，但是它的 api 设计有时还是不够友好， 比如： form validate 返回的预期值不对，而且文档里面也没有这个用法说明。
    api 例子不够齐全等。

---

## 快速上手

```bash
  pnpm install
  pnpm run dev
```

## 项目结构

```bash
  ├── README.md
  ├── package.json
  ├── index.html
  ├── src
  │   ├── api  # 请求接口
  │   ├── assets  # 静态资源
  │          └── style 全局样式
  │   ├── components  # 通用业务组件
  │   ├── config  # 全局配置(包含echarts主题)
  │          └── settings.json  # 配置文件
  │   ├── directives # 指令集（如需，可自行补充）
  │   ├── filters # 过滤器（如需，可自行补充）
  │   ├── hooks # 全局hooks
  │   ├── layout  # 布局
  │   ├── locale  # 国际化语言包
  │   ├── mock  # 模拟数据
  │   ├── views  # 页面模板
  │   ├── router # 路由配置
  │   ├── store  # 状态管理中心
  │   ├── types  # Typescript 类型
  │   └── utils  # 工具库
  │   └── App.vue  # 视图入口
  │   └── main.ts  # 入口文件
  └── tsconfig.json
  └── vite.config.ts

```

---

## 路由和菜单

路由通常都和菜单绑定在一起，为了减少维护的量，我们直接通过路由表生成了菜单。

首先，需要先了解一下路由表的配置。基本的路由配置请参阅 [Vue-Router](https://router.vuejs.org/) 官方文档

```ts
// 在本例子中，页面最终路径为 /dashboard/workplace
export default {
	path: "dashboard",
	name: "dashboard", // 路由名称
	component: () => import("@/views/dashboard/index.vue"),
	meta: {
		locale: "menu.dashboard",
		requiresAuth: true,
		icon: "icon-dashboard",
	},
	children: [
		{
			path: "workplace",
			name: "workplace",
			component: () => import("@/views/dashboard/workplace/index.vue"),
			meta: {
				locale: "menu.dashboard.workplace",
				requiresAuth: true,
				roles: ["admin"],
				hideInMenu: false,
			},
		},
	],
};
```

路由 `Meta` 元信息

| 参数名             | 说明                                                         | 类型     | 默认值 |
| ------------------ | ------------------------------------------------------------ | -------- | ------ |
| roles              | 配置能访问该页面的角色，如果不匹配，则会被禁止访问该路由页面 | string[] | -      |
| requiresAuth       | 是否需要登录鉴权                                             | boolean  | false  |
| icon               | 菜单配置icon                                                 | string   | -      |
| locale             | 一级菜单名（语言包键名）                                     | string   | -      |
| hideInMenu         | 是否在左侧菜单中隐藏该项                                     | boolean  | -      |
| hideChildrenInMenu | 强制在左侧菜单中显示单项                                     | boolean  | -      |
| activeMenu         | 高亮设置的菜单项                                             | string   | -      |
| order              | 排序路由菜单项。如果设置该值，值越高，越靠前                 | number   | -      |
| noAffix            | 如果设置为true，标签将不会添加到tab-bar中                    | boolean  | -      |
| ignoreCache        | 如果设置为true页面将不会被缓存                               | boolean  | -      |

### 菜单

前端菜单生成过程：

-   通过 [appRoute](https://github.com/arco-design/arco-design-pro-vue/blob/23a21ceb939e1e2334e8c3b0f1f8a8049503ad9d/arco-design-pro-vite/src/components/menu/useMenuTree.ts#L10) 计算属性，得到带有路由信息的路由树。

-   使用上一步获取的路由信息进行权限过滤，生成用于渲染的 [菜单树](https://github.com/arco-design/arco-design-pro-vue/blob/23a21ceb939e1e2334e8c3b0f1f8a8049503ad9d/arco-design-pro-vite/src/components/menu/useMenuTree.ts#L23)。

-   通过 [渲染](https://github.com/arco-design/arco-design-pro-vue/blob/23a21ceb939e1e2334e8c3b0f1f8a8049503ad9d/arco-design-pro-vite/src/components/menu/index.vue#L48) 菜单树，递归生成菜单。

服务端菜单生成过程：

-   在Store中增加api请求的 [action](https://github.com/arco-design/arco-design-pro-vue/blob/23a21ceb939e1e2334e8c3b0f1f8a8049503ad9d/arco-design-pro-vite/src/store/modules/app/index.ts#L47)，用于获取服务端的路由配置。

-   发起请求，将服务端的路由配置结果存储在Store中。
-   通过 [appRoute](https://github.com/arco-design/arco-design-pro-vue/blob/23a21ceb939e1e2334e8c3b0f1f8a8049503ad9d/arco-design-pro-vite/src/components/menu/useMenuTree.ts#L10) 计算属性，得到带有路由信息的路由树。

-   使用上一步获取的路由信息进行权限过滤，生成用于渲染的 [菜单树](https://github.com/arco-design/arco-design-pro-vue/blob/23a21ceb939e1e2334e8c3b0f1f8a8049503ad9d/arco-design-pro-vite/src/components/menu/useMenuTree.ts#L23)。

-   通过 [渲染](https://github.com/arco-design/arco-design-pro-vue/blob/23a21ceb939e1e2334e8c3b0f1f8a8049503ad9d/arco-design-pro-vite/src/components/menu/index.vue#L48) 菜单树，递归生成菜单。

**说明：服务端菜单相对于本地菜单生成过程，仅仅是多了接口请求以及服务端路由配置信息存储的步骤。**
**个别公司可能会有相应的权限管理系统，以生成相应的服务端路由配置信息，并进行储存，以供前端进行接口调取。但总体大同小异，只要后端接口返回的路由配置信息，符合上述路由配置规范，并能被前端正确解析即可**

### 新增一个菜单项的步骤

了解完路由和菜单的生成，就可以上手配置一个新的菜单项了，以新增一个监控页面为例。

-   在 views/dashboard 中新增一个 monitor 文件夹，并在其中新增 index.vue

```ts
<script lang="ts" setup><script>
```

-   在路由表中新增监控页的路由配置

```diff
export default {
  path: 'dashboard',
  name: 'dashboard',
  component: () => import('@/views/dashboard/index.vue'),
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    icon: 'icon-dashboard',
  },
  children: [
    {
      path: 'workplace',
      name: 'workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: {
        locale: 'menu.dashboard.workplace',
        requiresAuth: true,
      },
    },
+   {
+     path: 'monitor',
+     name: 'monitor',
+     component: () => import('@/views/dashboard/monitor/index.vue'),
+     meta: {
+       locale: 'menu.dashboard.monitor',
+       requiresAuth: true,
+       roles: ['admin'],
+     },
+   },
  ],
};
```

-   在语言包中新增菜单名

以下是中文语言包，其他语言包不赘述。

```diff
// src/locale/zh-CN.ts
export default {
  'menu.dashboard': '仪表盘',
  'menu.dashboard.workplace': '工作台',
+ 'menu.dashboard.monitor': '实时监控',
}
```

以上，就完成了一个菜单项的配置。现在刷新一下页面，就能看到新的菜单项。

## 菜单权限管理适用场景

中后台常见的前端权限控制大概可概括为以下场景：

1. 菜单权限控制，针对**某个菜单/页面**进行权限管理，有则能看到此页面，否则将展示无权限。

[//]: # "![](http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/116622141d7b228ad2259c81cd32d095.gif~tplv-uwbnlip3yd-3.awebp)"

2. **针对某页面中的某触发器**进行权限管理，例如对列表页的某一条数据进行删除操作。有权限情况下则展示删除按钮。

[//]: # "![](http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/7b410fa5dad6e47665c264fae910c0c8.gif~tplv-uwbnlip3yd-3.awebp)"

### 使用

针对菜单及路由权限控制，可以在 路由配置项 中，对某项增加 `roles` 参数即可。（如果不加，默认为拥有权限）

`roles` 可以根据自己的业务进行定义。

```ts
export default {
	path: "dashboard",
	name: "dashboard",
	component: () => import("@/views/dashboard/index.vue"),
	meta: {
		locale: "menu.dashboard",
		requiresAuth: true,
		icon: "icon-dashboard",
	},
	children: [
		{
			path: "workplace",
			name: "workplace",
			component: () => import("@/views/dashboard/workplace/index.vue"),
			meta: {
				locale: "menu.dashboard.workplace",
				requiresAuth: true,
				roles: ["*"], // * 表示通配权限。提示：为了少写点代码，也可以不定义这个字段。
			},
		},
		{
			path: "monitor",
			name: "monitor",
			component: () => import("@/views/dashboard/monitor/index.vue"),
			meta: {
				locale: "menu.dashboard.monitor",
				requiresAuth: true,
				roles: ["admin"],
			},
		},
	],
};
```

### 某按钮权限管理

Arco Design Pro 封装了 `v-permission` 指令。可在组件或者原生元素上使用。
如下，将有权限的角色类型放置在数组中即可。

```vue
<button v-permission="['admin']">删除</button>

<a-button v-permission="['user']">删除</a-button>
```

以上是前端页面进行权限控制的具体使用方法，但是需要结合后端接口将用户所拥有的具体权限返回至前端。

同时，在中后台系统中，仅仅有简单的前端权限控制是远远不够的，还需要后端进行接口权限控制。特别是涉及到写操作的一些接口，需要严格把控权限。

### 路由权限管理

Pro提供对应的权限管理钩子。可以自定义业务的权限需求。

```ts
#src / hooks / permission.ts;

import { RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import { useUserStore } from "@/store";

export default function usePermission() {
	const userStore = useUserStore();
	return {
		accessRouter(route: RouteLocationNormalized | RouteRecordRaw) {
			// 判断当前用户是否有该路由的权限
			return (
				!route.meta?.requiresAuth ||
				!route.meta?.roles ||
				route.meta?.roles?.includes("*") ||
				route.meta?.roles?.includes(userStore.role)
			);
		},
		// You can add any rules you want
	};
}
```

设置路由守卫，在路由守卫中对用户的页面进出进行管理。例如 当前用户是否已经登录、当前用户是否有页面权限。

```ts
router.beforeEach(async (to, from, next) => {
	const userStore = useUserStore();
	async function crossroads() {
		const Permission = usePermission();
		if (Permission.accessRouter(to)) await next();
		else {
			const destination = Permission.findFirstPermissionRoute(appRoutes, userStore.role) || {
				name: "notFound",
			}; // 前往首个有权限的页面或者404。
			await next(destination);
		}
	}
	if (isLogin()) {
		// 判读用户是否登录
		if (userStore.role) {
			// 有角色信息表示当前用户已经登录且获取过用户信息
			crossroads();
		} else {
			try {
				await userStore.info(); // 获取用户角色信息后再进行后续跳转处理
				crossroads();
			} catch (error) {
				next({
					name: "login",
					query: {
						redirect: to.name,
						...to.query,
					} as LocationQueryRaw,
				});
			}
		}
	} else {
		// 如果未登录则重定向到登录页面
		if (to.name === "login") {
			next();
			return;
		}
		next({
			name: "login",
			query: {
				redirect: to.name,
				...to.query,
			} as LocationQueryRaw,
		});
	}
});
```

自定义权限指令

```ts
import { DirectiveBinding } from "vue";
import { useUserStore } from "@/store";

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
	const { value } = binding;
	const userStore = useUserStore();
	const { role } = userStore;

	if (Array.isArray(value)) {
		if (value.length > 0) {
			const permissionValues = value;
			// 对当前用户的角色权限和传入指令的权限类型进行比对。如果当前用户无权限则会执行节点删除操作。
			const hasPermission = permissionValues.includes(role);
			if (!hasPermission && el.parentNode) {
				el.parentNode.removeChild(el);
			}
		}
	} else {
		throw new Error(`need roles! Like v-permission="['admin','user']"`);
	}
}

export default {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		checkPermission(el, binding);
	},
	updated(el: HTMLElement, binding: DirectiveBinding) {
		checkPermission(el, binding);
	},
};
```

---

## Pinia 说明

关于 Pinia 带来的众多新特性及用法，大家可以在 [Pinia](https://pinia.vuejs.org/) 官网进行学习了解。本文不做过多赘述。

全局状态管理是一个大型系统不可避免的存在，因为经常有一些需要全局共享的信息需要存储，比如用户信息，所以 PRO 中内置了 Pinia 用于信息共享。

使用 Pinia ，目录更加简洁明了。 同时对Typescript的支持更加友好，具有无可比拟的优越性。

```
├── modulers
│ ├── user (具体模块，以实际项目为准)
│ │ └── index.ts (store定义)
│ │ └── types.ts (store类型)
├── index.ts （用于导出store）
```

### 添加新模块

<!-- 1.  添加 state 类型声明

```ts
// store/modulers/user/types.ts
export interface UserState {
  name: string;
  avatar: string;
}
``` -->

1.  定义store，就像定义一个组件一样简单

```ts
// store/modulers/user/index.ts
import { defineStore } from "pinia";
import { login as userLogin, getUserInfo, LoginData } from "@/api/user";
import { setToken } from "@/utils/auth";
import { UserState } from "./types";

export const useUserStore = defineStore("user", {
	state: () => ({
		name: "",
		avatar: "",
	}),

	getters: {
		userInfo(state) {
			return { ...state };
		},
	},

	actions: {
		// Get user's information
		async info() {
			const res = await getUserInfo();

			this.setInfo(res.data);
		},

		// Login
		async login(loginForm) {
			const res = await userLogin(loginForm);
			setToken(res.data.token);
		},
	},
});
```

### 具体使用

```ts
import { defineComponent } from "vue";
import { useUserStore } from "@/store";

export default defineComponent({
	setup() {
		const userStore = useUserStore();
		const login = () => {
			const userInfo = {
				username: "admin",
				password: "admin",
			};
			await userStore.login(userInfo);
		};
		return {
			login,
		};
	},
});
```

---

## 基本用法

通过 [ConfigProvider](/vue/component/config-provider) 组件实现国际化。

```vue
<template>
	<a-config-provider :locale="enUS">
		<a-pagination :total="50" show-total show-jumper show-page-size />
	</a-config-provider>
</template>

<script>
import enUS from "@arco-design/web-vue/es/locale/lang/en-us";

export default {
	data() {
		return {
			enUS,
		};
	},
};
</script>
```

### 支持的地区语言

| 语言                 | 地区编码 |
| -------------------- | -------- |
| 简体中文             | zh-CN    |
| 英文                 | en-US    |
| 日文                 | ja-JP    |
| 繁体中文（中国台湾） | zh-TW    |
| 葡萄牙语             | pt-PT    |
| 西班牙语             | es-ES    |
| 印度尼西亚语         | id-ID    |
| 法语（法国）         | fr-FR    |
| 德语（德国）         | de-DE    |
| 韩语                 | ko-KR    |
| 意大利语(意大利)     | it-IT    |
| 马来语(马来西亚)     | ms-MY    |
| 泰语                 | th-TH    |
| 越南语               | vi-VN    |
| 高棉语（柬埔寨）     | km-KH    |
| 阿拉伯语（埃及）     | ar-EG    |

---

## 网络请求及 Mock 数据

使用axios进行远程接口请求。

建议完善返回及请求数据的类型定义。

```ts
import axios from "axios";

export interface UserToken {
	token: string;
}

export interface UserStateTypes {
	name: string;
	location: string;
}
export function getUserInfo(data: UserToken) {
	// 通过传递泛型，以获得完整的类型提示。
	return axios.post<UserStateTypes>("/api/user/info", data);
}
```

### 拦截器

可以根据自身系统需要增加多层拦截器。

```ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// 用户可以根据自身后台系统进行修改
export interface HttpResponse<T = unknown> {
	status: number;
	msg: string;
	code: number;
	data: T;
}

axios.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// 此处对请求进行配置
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	},
);
// 添加响应拦截器
axios.interceptors.response.use(
	(response: AxiosResponse<HttpResponse>) => {
		const res = response.data;
		// if the custom code is not 20000, it is judged as an error.
		if (res.code !== 20000) {
			// remind users

			// 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
			if ([50008, 50012, 50014].includes(res.code)) {
				// do something
			}
			return Promise.reject(new Error(res.msg || "Error"));
		}
		return res;
	},
	(error) => {
		return Promise.reject(error);
	},
);
```

### mock解决方案

拦截 ajax 并返回模拟的数据

前后端并行开发意味着前端需要在没有接口数据的情况下进行开发，在这种情况下如果能提供模拟数据请求的功能，我们的数据请求代码就能正常书写，Pro 采用了 Mock.js 来实现这个功能。

Mock.js 会拦截 ajax 请求，如果有匹配的 mock 规则，就不会将 ajax 发出去，而是返回 mock 的数据。Mock.js 有着丰富的模拟数据生成方法，建议先读一下文档，文档写的很清晰易懂 [MockJs 文档](http://mockjs.com/)

```ts
import Mock from "mockjs";
import { successResponseWrap } from "@/utils/setup-mock";

Mock.mock(new RegExp("/api/chatList"), () => {
	const data = Mock.mock(
		successResponseWrap({
			"data|4-6": [
				{
					"id|+1": 1,
					username: "用户7352772",
					content: "马上就开始了，好激动！",
					time: "13:09:12",
					"isCollect|2": true,
				},
			],
		}),
	);

	return data.data;
});
```

当客户端发送请求的 url 被 `new RegExp('/api/chatList')` 匹配到，Mock.js 就会拦截这条请求，并执行对应的回调函数，返回回调函数中 return 的数据。

> 注意：被 Mock.js 匹配并拦截的请求，不会出现在开发者工具的 network 面板中。

### 关闭 Mock

为了方便开启和关闭数据模拟功能，每个 `Mock` 都会被 `setupMock.setup` 包裹，setupMock 如下：

```
import { debug } from './env';
export default ({ mock, setup }: { mock?: boolean; setup: () => void; }) => {
  if (mock !== false && debug) setup();
};
```

非生产环境下默认启动数据模拟，当我们需要调试接口的时候只需要将 setupMock 的 mock 参数置为 false 即可，如下：

```ts
import Mock from 'mockjs';
import setupMock from '../utils/setupMock';

setupMock({
 mock: false
 setup() {
 // 用户信息
   Mock.mock(new RegExp('/api/userInfo'), () => {
       return {
         name: 'name',
       };
   });
 },
});
```

### 代码格式化

-   安装 vscode prettier 插件
-   删除 vscode settings.json 中的 eslint 或者 其它格式化配置，保留 格式化以外的配置
-   在vscode 打开.vue 或者其它格式文件，鼠标右击 选择 使用...默认格式化 选择 prettier

### git 代码提交报错

-   当你在vscode 进行git commit 时，出现报错，请选择 报错弹框中 “显示命令输出”；然后在 gitxxx.log 文件就可以看到为什么会报错。

## setting

-   node.js 20.10.0
-   vite ^5.2.0
-   vue ^3.4.21
-   pinia ^2.1.7
-   echarts ^5.5.0
-   vue-router ^4.3.0
