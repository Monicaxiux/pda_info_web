import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { ElNotification } from 'element-plus'
import { piniaData } from '@/store';//引入pinia状态管理

const routes: Array<RouteRecordRaw> = [
    {
        path: '/index',//首页
        name: 'index',
        component: () => import('../views/index.vue'),
        children: [
            {
                path: '/grinder',
                name: 'grinder',
                component: () => import('../views/grinder.vue'),
            },
        ]
    },
    {
        path: '/',//登录
        name: 'login',
        component: () => import('../views/login.vue')
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// // 路由全局守卫：登录拦截 本地没有用户信息, 请重新登录
// router.beforeEach((to, from, next) => {
//     const store = piniaData()
//     // 判断有没有登录
//     if (!store.userInfo.id) {
//         if (to.name == "login") {
//             next();
//         } else {
//             ElNotification({
//                 message: '请先登录！',
//                 type: 'error',
//             })
//             router.push('/')
//         }
//     } else {
//         next();
//     }
// });

export default router