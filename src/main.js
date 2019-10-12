import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './vuex/store'
import './mock/mockServe'
import  './validate'
import VueLazyload from 'vue-lazyload'
import loading from './assets/images/loading.gif'
Vue.use(VueLazyload, {
    loading
  })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
