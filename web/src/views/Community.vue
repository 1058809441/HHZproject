<template>
  <div id="community">
    <div class="left_box">11112222223333333444</div>

    <div class="all">
      <!-- 用户输入框 -->
      <div class="user_box">
        <div class="user">
          <h4>有什么新鲜事想告诉大家?</h4>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="textarea2"
            maxlength="400"
            show-word-limit
          ></el-input>
          <div class="kind_left" >
            <!-- 点击发布会出现全屏加载 -->
            <el-button type="primary" plain @click="openFullScreen">发布</el-button>
          </div>

          <div class="kind_right"></div>
        </div>
      </div>
      <!-- 发表的内容 -->
      <div class="contain" v-for="item in users" :key="item.index">
        <div class="headin">
          <img :src="item.pic" />
        </div>
        <div class="aaa">
          <div class="title" style="font-size:22px">{{item.title}}</div>
          <span>{{item.time}}</span>
          <span>{{item.detailtime}}</span>
          <p>{{item.contain}}</p>
          <div>
            <video
              style="width:265px;"
              muted
              autoplay
              loop
              src="https://www.021sports.com/video/wangzhangjie.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea2: "",
      users: [
        {
          pic:
            "http://storage.360buyimg.com/i.imageUpload/6a645f3763303762333330666536623531353033393731353639323435_mid.jpg",
          title: "标题",
          time: "2019.09.26",
          contain: "zheshi 这是内容萨达四大啊",
          detailtime: "12:56"
        },
        {
          pic:
            "http://storage.360buyimg.com/i.imageUpload/6a645f3763303762333330666536623531353033393731353639323435_mid.jpg",
          title: "标题",
          time: "2019.09.26",
          contain: "zheshi 这是内容萨达四大啊",
          detailtime: "12:56"
        },
        {
          pic:
            "http://storage.360buyimg.com/i.imageUpload/6a645f3763303762333330666536623531353033393731353639323435_mid.jpg",
          title: "标题",
          time: "2019.09.26",
          contain: "zheshi 这是内容萨达四大啊",
          detailtime: "12:56"
        },
        {
          pic:
            "http://storage.360buyimg.com/i.imageUpload/6a645f3763303762333330666536623531353033393731353639323435_mid.jpg",
          title: "标题",
          time: "2019.09.26",
          contain: "zheshi 这是内容萨达四大啊",
          detailtime: "12:56"
        }
      ]
    };
  },
  methods: {
    // 加载部分的方法
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 0);
    },
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 1000);
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
  background: red;
  padding-top: 10px;
  .user_box {
    // width: 90%;
    height: auto;
    background: pink;
    margin: 10px auto;
    border-radius: 15px;
    margin: 10px 10px 10px 10px;
    padding: 2px 20px 20px;
  }
  .contain {
    height: 300px;
    background: white;
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
.left_box {
  width: 10%;
  height: 800px;
  background: rgb(238, 100, 100);
  position: absolute;
  z-index: 2;
}.kind_left{
  float:right;
}
.kind_right {
  width: 80%;
  height: 34px;
  background: rgb(238, 100, 100);
}
</style> 