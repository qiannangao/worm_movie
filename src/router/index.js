import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutView from '../layout/LayoutView'
import IndexView from '../views/IndexView'
import ListView from '../views/ListView'
import DetailView from '../views/DetailView'
import LoginView from '../views/LoginView'
import MineView from '../views/MineView'
import TrailerView from '../views/TrailerView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: LayoutView,
    children:[
      {
        path:'/',
        name:'index',
        component: () => import('../views/IndexView')
      },
      {
        path:'/list',
        name:'list',
        component: () => import('../views/ListView')
      },
      {
        path:'/detail',
        name:'detail',
        component: () => import('../views/DetailView')
      },
      {
        path:'/mine',
        name:'mine',
        component: () => import('../views/MineView')
      },
      {
        path: '*', // * 表示匹配所有路径
        redirect: '/' // 这里意思就是当上述匹配的路径都不成立时，将其他任意路径替换为访问 /
    }
    ]
  },
  {
    path: '/trailer',
    name: 'trailer',
    component: () => import('../views/TrailerView')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView')
  },
  {
    path: '*', // * 表示匹配所有路径
    redirect: '/' // 这里意思就是当上述匹配的路径都不成立时，将其他任意路径替换为访问 /
}
]

const router = new VueRouter({
  routes
})

export default router
