import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from '../layout/LayoutView'
import IndexView from '../views/IndexView'
import ListView from '../views/ListView'
import DetailView from '../views/DetailView'
import LoginView from '../views/LoginView'
import MineView from '../views/MineView'
import InfoView from '../views/mine/InfoView'
import ManageView from '../views/mine/ManageView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',

    component: LayoutView,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/IndexView'),
      },

      {
        path: '/list',
        redirect: '/list/0',
      },
      {
        path: '/list/:type',
        name: 'list',
        component: () => import('../views/ListView')
      },
      {
        path: '/detail/:mId',
        name: 'detail',
        component: () => import('../views/DetailView')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/MineView'),
        redirect:'/mine/info',
        children: [
           {
            path:'/mine/info',
            name:'info',
            component:()=>import('../views/mine/InfoView')
           },
           {
            path:'/mine/manage',
            name:'manage',
            component:()=>import('../views/mine/ManageView')
           }
        ],
        // 局部导航守卫
        // 跳转至我的信息页面先作判断，存在本地token则直接跳转;否则跳转到login页面并使用query传递静态参数from=/mine表示是从mine页面跳转来的
        beforeEnter(to,from,next){
          let token=localStorage.getItem('token')
          if(token){
            next();
          }else{
            next('/login?from=/mine')
          }
        }
      },
    ]
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
  routes,
  // 滚动行为
  scrollBehavior(to, from, savePosition) {
    // 跳转时让页面回到顶部
    return ({ x: 0, y: 0 })
  }
})

export default router
