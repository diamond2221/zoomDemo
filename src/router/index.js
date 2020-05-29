import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const constantRoutes = [
    {
        path: "/",
        component: () => import("@/views/demo/index.vue"),
        meta: {
            title: "demo"
        }
    }
];

const createRouter = () => {
    const router = new Router({
        mode: 'hash', // history  => require service support
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes
    });
    router.afterEach((to, from) => {
        document.title = to.meta.title || '';
    })
    return router
}

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}

export default router;
