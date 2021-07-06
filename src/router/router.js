// 用于主目录的路由目录
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export const constantRoutes = [
    {
        path: '/page1',
        name: 'page1',
        component: ()=>import('@/pages/page1/main'),
        meta: { title: 'page1' }
    },
    {
        path: '/page2',
        name: 'page2',
        component: ()=>import('@/pages/page2/main'),
        meta: { title: 'page2' }
    },
    {
        path: '/page3',
        name: 'page3',
        component: ()=>import('@/pages/page3/main'),
        meta: { title: 'page3' }
    },
]
const createRouter = new VueRouter({
    // scrollBehavior: () => ({ y: 0 }),
    mode: 'history',
    routes: constantRoutes,
})

// const router = createRouter()
// export function resetRouter() {
//     const newRouter = createRouter()
//     router.matcher = newRouter.matcher // reset router
// }

export default createRouter;
