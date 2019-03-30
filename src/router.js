import Vue from 'vue'


//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//组件
import index from './components/index.vue'
import login from './components/login.vue'

//规则
let routes = [
    {
        path:'/',
        component:index
    },
    {
        path:'./login',
        component:login
    }
]

//实例化路由对象
let router = new VueRouter({
    routes
})

//暴露出去
export default router 