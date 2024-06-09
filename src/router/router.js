import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import MainPage from "@/pages/MainPage.vue";

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