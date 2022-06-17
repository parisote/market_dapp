import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import MyRents from '../components/MyRents.vue'
import Layout from '../components/Layout.vue'
import AddLocation from '../components/AddLocation.vue'
import LayoutPlace from '../components/LayoutPlace.vue'
import Login from '../components/Login.vue'
import { createPinia } from 'pinia'

//app.use(createPinia())

const routes = [
    { path: '/', component: Home },
    { path: '/MyRents', component: MyRents },
    { path: '/Layout/:Categoria', component: Layout },
    { path: '/AddLocation', component: AddLocation },
    { path: '/LayoutPlace/:index/:category', component: LayoutPlace },
    { path: '/Login', component: Login}
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router
