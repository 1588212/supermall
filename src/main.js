import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from './components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'


Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/favor.png')
})
// 解决移动端的300ms 延迟
FastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
