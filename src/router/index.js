import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
   //component: AboutView
  
  },
  {
    path: '/mywork',
    name: 'mywork',
    component: () => import('../views/MyWorkView.vue')
  },
  {
    path: '/myrequest',
    name: 'myrequest',
    component: () => import('../views/MyRequestView.vue')
  },
  {
    path: '/mydata',
    name: 'mydata',
    component: () => import('../views/MyDataView.vue')
  },
  {
    path: '/mycheck',
    name: 'mycheck',
    component: () => import('../views/MyCheckView.vue'),
    meta: {
      showAppBar: false // 在这里设置需要隐藏横幅的页面
    }
  },
  {
    path: '/myleave',
    name: 'myleave',
    component: () => import('../views/MyLeaveView.vue'),
    meta: {
      showAppBar: false // 在这里设置需要隐藏横幅的页面
    }
  },
  {
    path: '/overtime',
    name: 'overtime',
    component: () => import('../views/OvertimeView.vue'),
    meta: {
      showAppBar: false // 在这里设置需要隐藏横幅的页面
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
