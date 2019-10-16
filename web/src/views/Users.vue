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
          <el-menu-item>
            <router-link to="/home">首页</router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link to="/users/center">个人中心</router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link to="/users/cart">购物车</router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link to="/users/login">登录</router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link to="/users/register">注册</router-link>
          </el-menu-item>
        </el-menu>
      </div>

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
.headin ul {
  padding-left: 300px;
}
</style>