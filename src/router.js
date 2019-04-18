import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
    ],
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        console.log('---', savedPosition);

        if (savedPosition) {
            return savedPosition;
        } else {
            if (to.name === 'home') {
                return { x: 0, y: 50 };
            } else {
                return { x: 0, y: 0 };
            }
        }
    }
});

router.beforeEach((to, from, next) => {
    console.log(to, from);

    next();
});

export default router;
