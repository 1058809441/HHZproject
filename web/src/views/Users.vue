<template>
  <div>
    <div class="head">
      <!--  -->
      <div class="headin">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#58A8FB"
        >
        <el-menu-item ><router-link to="/home">首页</router-link></el-menu-item>
        <el-menu-item ><router-link to="/users/center">个人中心</router-link></el-menu-item>
        <el-menu-item > <router-link to="/users/cart">购物车</router-link></el-menu-item>
        <el-menu-item > <router-link to="/users/login">登录</router-link></el-menu-item>
        <el-menu-item > <router-link to="/users/register">注册</router-link></el-menu-item>
      </el-menu>
      </div>
      <!--  -->
      <!-- <div class="headin">
        <img
          src="http://storage.360buyimg.com/i.imageUpload/6a645f3763303762333330666536623531353033393731353639323435_mid.jpg"
        />
        <div @click="toHome">首页</div>
        <router-link to="/home">首页</router-link>
        <router-link to="/users/center">个人中心</router-link>
        <router-link to="/users/cart">购物车</router-link>
        <a @click="toLogin">登录</a>
        <a @click="toRegister">注册</a>
      </div> -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          count: "1",
          money: "100"
        }
      ]
    };
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    toCart() {
      this.$router.push("/cart");
    },
    toLogin() {
      this.$router.push("/login");
    },
    toRegister() {
      this.$router.push("/register");
    }
  }
};
</script>
<style scoped>
/* .head {
  width: 100%;
  height: 80px;
  line-height: 80px;
  font-size: 14px;
  background-color: white;
  margin-bottom: 30px;
} */
.head{

}
.headin {
  /* width: 800px; */
  margin: 0 auto;
  /* display: flex; */
  /* justify-content: space-between; */
}
/* .headin img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
} */
</style>