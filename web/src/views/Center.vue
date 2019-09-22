<template>
  <div>
    <div class="content">
      <div class="contentson">
        <p>我的账号</p>
        <hr />
        <div class="user">
          <!-- <img :src="src" /> -->
          <!-- 上传图片 -->
          <img style="width:50,height:50"/>
          <input
            type="file"
            accept="image/gif, image/jpeg, image/jpg, image/png, image/svg"
            @click="fn"
          />
          <!--  -->
          <!-- <p>用户名：{{username}}</p> -->
        </div>
      </div>
      <div class="contentson">
        <p>我的钱包</p>
        <p>余额：￥1000</p>
      </div>
      <!--  -->
      <div class="contentson">
        <p>我的订单</p>
        <el-table style="width: 100%" v-for="item in tableData" :key="item.orderID">
          <div>{{item.orderTime}}</div>
          <!-- <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
          <el-table-column prop="name" label="商品" width="300"></el-table-column>
          <el-table-column prop="count" label="数量(件)" width="150"></el-table-column>
          <el-table-column prop="money" label="金额(元)" width="150"></el-table-column>-->
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
// import '../Utils/webuploader/webuploader.css'
// import '../Utils/webuploader/webuploader.css'
// import '../Utils/webuploader/Uploader.swf'
// import "http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"
export default {
  data() {
    return {
      src:
        "http://storage.360buyimg.com/i.imageUpload/6a645f3763303762333330666536623531353033393731353639323435_mid.jpg",
      username: "tony",
      tableData: []
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    fn() {
      let uploader = WebUploader.create({
        // 选完文件后，是否自动上传。
        auto: true,
        // swf文件路径
        swf: "https://cdn.staticfile.org/webuploader/0.1.1/Uploader.swf",
        // 文件接收服务端。
        server: "localhost:8888/upload",
        // 要传递的参数
        formData: {
          username: ""
        },
        accept: {
          title: "Images",
          extensions: "gif,jpg,jpeg,bmp,png",
          mimeTypes: "image/*"
        }
      });

      // 文件上传成功
      uploader.on("uploadSuccess", function(file, response) {
        //获得服务器的图片 img
        let url = response.url;
        let img = document.getElementById("img1");
        img.src = url;
        console.log(url);
        alert("上传成功！");
      });

      uploader.upload();
    },
    getTableData() {
      this.axios
        .post("/orders")
        .then(res => {
          window.console.log(res.data);
          this.tableData = res.data;
        })
        .catch(error => {
          window.console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.content {
  width: 800px;
  height: 100%;
  margin: 0 auto;
}
.contentson {
  background-color: white;
  padding: 10px 20px;
  margin: 10px 0;
}
.user {
  display: flex;
  flex-grow: 2;
}

.file-box {
  /* position: relative; */
  display: inline-block;
}
.file-box img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* position: absolute; */
  /* top: -30px;
  left: 0; */
  display: inline-block;
  border: none;
}
.file-box .txt,
.file-box .file {
  width: 70px;
  height: 36px;
  /* position: absolute; */
  /* top: -20px; */
  /* left: 100px; */
  text-align: center;
}
</style>