import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import MyRents from '../components/MyRents.vue'
import MyPlaces from '../components/MyPlaces.vue'
import Layout from '../components/Layout.vue'
import AddLocation from '../components/AddLocation.vue'
import AddCategory from '../components/AddCategory.vue'
import LayoutPlace from '../components/LayoutPlace.vue'
import Login from '../components/Login.vue'
import About from '../components/AboutUs.vue'
import MyProfile from '../components/MyProfile.vue'

const routes = [
    { path: '/', name:"Home", component: Home },
    { path: '/About', component: About },
    { path: '/MyProfile', component: MyProfile },
    { path: '/MyRents', component: MyRents, meta: { requiresAuth: true } },
    { path: '/MyPlaces', component: MyPlaces, meta: { requiresAuth: true } },
    { path: '/Layout/:index/:Categoria', component: Layout },
    { path: '/AddLocation', component: AddLocation, meta: { requiresAuth: true }},
    { path: '/AddCategory', name:"AddCategory", component: AddCategory, meta: { requiresAuth: true } },
    { path: '/LayoutPlace/:index/:category', component: LayoutPlace },
    { path: '/Login', name: "Login", component: Login, meta: { requiresAuth: true }}
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach(async (to, from) => {
  if((to.name == "AddCategory") && (localStorage.getItem("isOwner") === 'false')){
    return { name: 'Home' }
  }
  if (to.meta.requiresAuth && !localStorage.getItem("address")) {
    return { name: 'Home' }
  }
})

export default router
