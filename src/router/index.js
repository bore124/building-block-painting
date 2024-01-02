import {createRouter, createWebHashHistory} from 'vue-router'



const menus = [
    {
        path: "/",
        meta: {
            token: true,
        },
        redirect: '/home1',
    },
    {
        name: "home",
        path: "/home:timestamp(\\d*)",
        meta: {
            token: true,
        },
        component: () => import('@/views/main/home/index.vue')
    },


    // {
    //     name: "login",
    //     path: "/login:timestamp(\\d*)",
    //     component: () => import('@/views/user/login/index.vue')
    // },

    {
        name: "404",
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/system/not-find/index.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...menus],
    scrollBehavior(to, form, savedPosition) {
        return savedPosition || {top: 0}
    }
})

router.beforeEach((to, from, next) => {
        //验证逻辑 现在没接口先不用，以后再说
        // if (to.meta.token) {
        //     if (getToken() === null) {
        //         next({
        //             path: '/login',
        //             query: {redirect: to.fullPath}
        //         })
        //         return
        //     }
        // }
        next()
    }
)
router.afterEach((to,) => {
        //动态操作title
        if (to.meta.title) {
            document.title = to.meta.title
        }

    }
)
export default router
