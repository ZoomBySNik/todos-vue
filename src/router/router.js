import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import MainPage from "@/pages/MainPage.vue";
import PostIdPage from "@/pages/PostIdPage.vue";

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/posts',
        name: 'PostPage',
        component: PostPage,
    },
    {
        path: '/posts/:id',
        name: 'PostIdPage',
        component: PostIdPage,
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;