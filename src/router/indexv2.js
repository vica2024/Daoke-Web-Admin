/**
 * @Description:
 * @author Awin Zhuo <azhuo@apm.mc>
 * @date
 */
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Layout.vue'; // 导入你的组件

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;