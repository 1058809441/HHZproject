import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './views/Home'             //首页
import Login from './views/Login'           //登录
import Register from './views/Register' //注册
import Users from './views/Users'             //个人中心
import Center from './views/Center' //个人中心
import Cart from './views/Cart' //购物车
// import Message from './views/Message'       //社区动态
// import ProductDetail from './views/ProductDetail'//商品详情
// import AboutUs from './views/AboutUs'       //关于我们



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      { path: '/', redirect:'/home' },//此处的redirect是为了使页面一加载出来就重定向到login路径的组件去
      { path: '/home', component: Home },
      { path: '/login', component: Login },
      { path: '/register', component: Register },
      { 
          path: '/users', 
          component: Users,
          children:[
              { path: '/users/', redirect: '/users/center' },
              { path: '/users/center', component: Center },
              { path: '/users/cart', component: Cart }

          ]
      },
      { path: '/cart', component: Cart },
  ]
})
