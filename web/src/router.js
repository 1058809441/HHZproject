import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'             //首页
import Login from './views/Login'           //登录注册
import User from './views/User'             //个人中心
import Message from './views/Message'       //社区动态
import ProductDetail from './views/ProductDetail'//商品详情
import ShoppinCar from './views/ShoppinCar' //购物车
import AboutUs from './views/AboutUs'       //关于我们


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

  ]
})
