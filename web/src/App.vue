<template>
  <div id="app">
    <!-- <router-link to='/home'>首页</router-link> -->
    <!-- <router-link to='/login' tag='span'>登录</router-link> -->
    <!-- <router-link to='/register'>注册</router-link> -->
    <!-- <router-link to='/users'>个人中心</router-link> -->
    <!-- 这是vue-router提供的占位符，由路由规则匹配到的组件就会展示在这里面 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: lightslategray;
}
#app {
  color: black;
}

/* router-link标签默认类名 */
.router-link-active {
  text-decoration: none;
}a{
  text-decoration: none;
}
</style>
