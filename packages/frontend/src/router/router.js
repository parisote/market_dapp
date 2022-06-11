import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import MyRents from '../components/MyRents.vue'
import MyPlaces from '../components/MyPlaces.vue'
import Layout from '../components/Layout.vue'
import AddLocation from '../components/AddLocation.vue'
import AddCategory from '../components/AddCategory.vue'
import LayoutPlace from '../components/LayoutPlace.vue'
import Login from '../components/Login.vue'
import { createPinia } from 'pinia'

//app.use(createPinia())

const routes = [
    { path: '/', name:"Home", component: Home },
    { path: '/MyRents', component: MyRents },
    { path: '/MyPlaces', component: MyPlaces },
    { path: '/Layout/:index/:Categoria', component: Layout },
    { path: '/AddLocation', component: AddLocation },
    { path: '/AddCategory', component: AddCategory },
    { path: '/LayoutPlace/:index/:category', component: LayoutPlace },
    { path: '/Login', name: "Login", component: Login}
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach(async (to, from) => {
    if (
        !localStorage.getItem('address') &&
        to.name !== 'Login'
      ) {
        // redirect the user to the login page
        return { name: 'Home' }
      }
})

export default router
