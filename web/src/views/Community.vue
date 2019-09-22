<template>
  <div id="community">
    <div class="sidebar"></div>

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
          >
           
          </el-input>
          <!-- 点击发布会出现全屏加载 -->
          <div class="kind_right">
            <el-button style="padding: 6px 18px;" type="primary" plain @click="openFullScreen">发布</el-button>
          </div>
          <div class="kind_left">
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
                    <!-- <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList"
                    >
                      <el-button size="small" type="primary">图片</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload> -->
                    图片
                  </a>
                </div>
              </el-col>
            </el-row>
          </div>
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
      ],
      // 上传图片
      fileList: []
    };
  },
  methods: {
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
    },
    // 上传图片
    // handleRemove(file, fileList) {
    //   console.log(file, fileList);
    // },
    // handlePreview(file) {
    //   console.log(file);
    // },
    // handleExceed(files, fileList) {
    //   this.$message.warning(
    //     `当前限制选择 3 个文件，本次选择了 ${
    //       files.length
    //     } 个文件，共选择了 ${files.length + fileList.length} 个文件`
    //   );
    // },
    // beforeRemove(file, fileList) {
    //   return this.$confirm(`确定移除 ${file.name}？`);
    // }
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
    height: 300px;
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