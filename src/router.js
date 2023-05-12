import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/helloworld',
        name: 'HelloWorld',
        component: () => import("./components/HelloWorld.vue"),
        meta: {
        	keepAlive: true  // 需要缓存
      	}
    },
    {
        path: '/helloworld1',
        name: 'HelloWorld1',
        component: () => import("./components/HelloWorld1.vue")
    },
    {
        path: '/countdownPage',
        name: 'countdownPage',
        component: () => import("./views/CountdownPage.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});

export default router