import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 注册全局组件
import PageCom from '@/components/PageCom'
Vue.component('PageCom',PageCom)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
