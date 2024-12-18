import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import NotFoundPage from '../components/NotFoundPage.vue'

const routes = [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
    const router = createRouter({
        history: createWebHistory(),
        linkExactActiveClass: 'active',
        routes
    })

export default router

