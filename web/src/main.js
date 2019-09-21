import Vue from 'vue'
import App from './App.vue'
// 引入组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 都知道，bootstrap框架基于jQuery，因此，想使用bootstrap框架，就得先引入jQuery。
// import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'

//引入ajax插件
import axios from 'axios'
Vue.prototype.axios = axios
axios.defaults.baseURL = "http://localhost:8888"

// 引入路由文件
import router from './router'



Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,// 将路由规则对象注册到vm实例上，用来监听url地址的变化，展示对应的组件
  render: h => h(App),
}).$mount('#app')
