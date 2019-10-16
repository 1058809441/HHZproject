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
        background-color="transparent"
        text-color="#fff"
        active-text-color="#58A8FB"
      >
        <el-menu-item>
          <router-link to="/home/home_mid">首页</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link to="/home/Community">社区</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link to="/home/aboutus">关于我们</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link to="/users/">个人中心</router-link>
        </el-menu-item>
      </el-menu>
      <div class>
        <el-input placeholder="请输入" v-model="input3">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="login">
        <router-link to="/users/login">登录</router-link>
        <router-link to="/users/register">/注册</router-link>
      </div>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  components: {
    Footer
  },
  data() {
    return {
      activeIndex: "1",
      input3: "",
    }
  },
  mounted() {
    this.axios
      .get("/products") //接口：/UpdateShoppingCar，使用post请求
      .then(res => {
        window.console.log(res.data); //检查从后台获得的数据是否成功，并打印
        this.$store.state.allProduct = res.data;

        let arr1 = [];
        let arr2 = [];
        let len = res.data.length;
        for (let i = 0; i < len; i++) {
          if (res.data[i].productType == "tool") {
            arr1.push(res.data[i]);
          } else if (res.data[i].productType == "course") {
            arr2.push(res.data[i]);
          }
        }
        this.$store.state.Product1 = arr1;
        this.$store.state.Product2 = arr2;
        console.log(this.$store.state.Product1);
        console.log(this.$store.state.Product2);
        // this.users = res.data; //把从后台得到的数据传给data里的users
      })
      .catch(error => {
        window.console.log(error);
      });
  },
  methods: {
  
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
@my_width: 100%;
@my_background: transparent;
#top {
  width: @my_width;
  background: @my_background;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 0px;
}
.el-menu.el-menu--horizontal {
  border-bottom: 1px solid transparent;
}
// video{
//   position: relative;
//   width: 100%;
// }
.icon {
  width: 50px;
  height: 50px;
  margin-top: 6px;
  img {
    width: @my_width;
    height: 100%;
  }
}

.login a {
  text-decoration: none;
  color: white;
}
</style>
