import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入路由
import router from './router.js'

new Vue({
  render: h => h(App),
  //挂载Vue实例
  router
}).$mount('#app')
