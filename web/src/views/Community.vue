<template>
  <div id="community">
    <div class="sidebar"></div>

    <div class="all">
      <!-- 用户输入框 -->
      <div class="user_box">
        <div class="user">
          <!-- 用户名 -->
          <h4>欢迎您：{{username}}</h4>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="addMessage"
            maxlength="200"
            show-word-limit
          ></el-input>
          <!-- 发布按钮：点击发布会出现全屏加载 -->
          <div v-if="iflogin" class="kind_right">
            <el-button style="padding: 6px 18px;" type="primary" plain @click="openFullScreen">发布</el-button>
          </div>
          <!-- 图标部分 -->
          <!-- <div class="kind_left">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="bg-purple">
                  <a href="#">
                    <i class="el-icon-share" style="color:orange"></i>分享
                  </a>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="bg-purple">
                  <a href="#">
                    <i class="el-icon-camera" style="color:blue"></i>视频
                  </a>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="bg-purple">
                  <a href="#">
                    <i class="el-icon-s-promotion" style="color:red"></i>地址
                  </a>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="bg-purple">
                  <a href="#">
                    <i class="el-icon-picture-outline" style="color:yellow"></i>
                    图片
                  </a>
                </div>
              </el-col>
            </el-row>
          </div> -->
        </div>
      </div>
      <!-- 所有用户发表的内容：从后台获得username、time、content -->
      <div class="contain" v-for="item in users" :key="item.index">
        <!-- <div class="headin">
          <img :src="item.pic" />
        </div>-->
        <div class="aaa">
          <div class="title" style="font-size:22px">{{item.username}}</div>
          <span>{{item.time}}</span>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addMessage: [], //用户输入信息
      users: this.$store.state.allMessage, //从后台获得所有用户数据：姓名、时间、内容
      username: this.$store.state.username, //当前用户：姓名
      // 上传图片
      fileList: [],
      iflogin:this.$store.state.ifLogin,
    };
  },

  created() {
    // this.getAllMessage();
  },

  methods: {
   

    // // 11、获取全部的动态，所有用户的信息
    // getAllMessage() {
    //   this.axios
    //     .get("/AllMessage") //接口：/AllMessage，使用get请求
    //     .then(res => {
    //       window.console.log(res.data); //检查从后台获得的数据是否成功，并打印
    //       this.users = res.data; //把从后台得到的数据传给data里的users
    //     })
    //     .catch(error => {
    //       window.console.log(error);
    //     });
    // },

    // 显示全屏加载部分的方法
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 1000);
    },
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.5)"
      });
      setTimeout(() => {
        loading.close();
      }, 1000);
      // 点击发布判断是否登录

      console.log(this.addMessage); //获取到用户输入的信息
      // 12、点击发动态按钮
      // app.post('/AddMessage',
      // 请求数据的格式：
      // { username:zxz,content:this.addMessage }
      // 返回数据的格式：
      // { myMessage：新的我的动态的数组，allMessage：新的全部动态的数组 }

      this.axios
        .post("/AddMessage", { username: this.$store.state.username, content: this.addMessage }) //使用post请求，接口：/AddMessage;
        .then(res => {
          window.console.log(res.data); //检查从后台获得的数据是否成功，并打印
          //修改store；

          this.$store.commit("updateAllMessage", res.data.allMessage);
          this.users = res.data.allMessage; //把从后台得到的数据传给data里的users
        })
        .catch(error => {
          window.console.log(error);
        });
    }
  }
};
</script>


<style lang="less" scoped>
#community {
  margin-top: 70px;
}
.all {
  width: 80%;
  margin-left: 13%;
  background: black;
  padding-top: 10px;
  .user_box {
    // width: 90%;
    height: auto;
    background: #778899;
    margin: 10px auto;
    border-radius: 15px;
    margin: 10px 10px 10px 10px;
    padding: 2px 20px 20px;
    .user h4 {
      color: white;
    }
  }
  .contain {
    // height: 300px;
    background: #d3dce6;
    border-radius: 15px;
    margin: 10px 10px 10px 10px;
    display: flex;
    padding: 20px 20px;
    .aaa {
      margin-left: 15px;
      span {
        color: #808080;
        font-size: 12px;
      }
    }
    .headin img {
      border-radius: 50px;
    }
  }
}
.el-textarea {
  margin-bottom: 10px;
}
.sidebar {
  width: 10%;
  height: 800px;
  background: #d3dce6;
  position: absolute;
  z-index: 2;
}
.kind_right {
  float: right;
}
// 输入框下面图标表情等-栅格布局
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.bg-purple {
  background: #d3dce6;
}
[class*=" el-icon-"],
[class^="el-icon-"] {
  margin: auto 10px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  // background-color: #f9fafc;
}
.kind_left {
  width: 80%;
  height: 34px;
  // background: rgb(238, 100, 100);
}
</style> 