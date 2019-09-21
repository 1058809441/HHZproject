import Vue from 'vue'
import App from './App.vue'
// 引入组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入ajax插件
import axios from 'axios'
Vue.prototype.axios = axios
// 设置请求的根路径
axios.defaults.baseURL = "http://localhost:8888"

// 引入路由文件
import router from './router'



Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,// 将路由规则对象注册到vm实例上，用来监听url地址的变化，展示对应的组件
  render: h => h(App),
}).$mount('#app')
