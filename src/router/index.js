import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import User from '../views/user.vue'
import Main from '../views/main.vue'
Vue.use(VueRouter)
//创建路由组件
//路由与组件映射
const routes =[
    {
        path:'/',
        component:Main,
        children:[
            {path:'home',component:Home},
            {path:'user',component:User}
        ]
    }
]

  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

  export default router
