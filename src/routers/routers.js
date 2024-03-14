import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import NotFound from '@/pages/NotFound.vue'
import CardItem from '@/pages/_CardItem.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/card/:itemAlias',
        name: 'itemAlias',
        component: CardItem,
        
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound 
        // redirect: '/'
    },
    
   
    

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router