<template>
  <div>
    <!-- 主页：顶部、中间部分（包括轮播图）、尾部 -->
    <div id="top">
      <div class="icon">
        <img src="../assets/icon.png" alt />
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#58A8FB"
        >
        <el-menu-item ><router-link to="/home/home_mid">Home</router-link></el-menu-item>
        <el-menu-item > <router-link to="/home/purchase">Purchase</router-link></el-menu-item>
        <el-menu-item ><router-link to="/home/aboutus">About us</router-link></el-menu-item>
        <el-menu-item   @click="toUser">个人中心</el-menu-item>
      </el-menu>
      <div class>
        <el-input placeholder="请输入" v-model="input3">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="login">
        <router-link to="/login">Login</router-link>       
        <router-link to="/register">|register</router-link>       
      </div>   
    </div>
    <router-view></router-view> 
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer.vue'
export default {
  components:{
    Footer
  },
  data() {
    return {
      activeIndex: "1",
      input3: ""
    };
  },
  methods: {
    toUser() {
      this.$router.push("/users");
    },
     toLogin() {
      this.$router.push("/login");
    },
    
    
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
@my_width: 100%;
@my_background: #545c64;
#top {
  width: @my_width;
  background: @my_background;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.icon {
  width: 50px;
  height: 50px;
  margin-top: 6px;
  img {
    width: @my_width;
    height: 100%;
    // vertical-align: middle;
  }
}
.el-menu.el-menu--horizontal {
    border-bottom: solid 0px #e6e6e6 !important;

}

</style>
