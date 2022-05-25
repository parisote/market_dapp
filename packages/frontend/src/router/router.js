import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import MyProduct from '../components/MyProduct.vue'
import Layout from '../components/Layout.vue'
import AddLocation from '../components/AddLocation.vue'
import { createPinia } from 'pinia'

//app.use(createPinia())

const routes = [
    { path: '/', component: Home },
    { path: '/MyProduct', component: MyProduct },
    { path: '/Layout/:Categoria', component: Layout },
    { path: '/AddLocation', component: AddLocation }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router
