import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import InSellProduct from '../components/InSellProduct.vue'
import MyProduct from '../components/MyProduct.vue'
import { createPinia } from 'pinia'

//app.use(createPinia())

const routes = [
    { path: '/', component: Home },
    { path: '/InSellProduct', component: InSellProduct },
    { path: '/MyProduct', component: MyProduct },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router
