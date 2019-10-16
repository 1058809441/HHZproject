<template>
  <div>
    <div class="content">
      <div class="contentson">
        <p>我的账号</p>
        <hr />
        <div class="user">
          <!-- 头像上传组件 -->
          <div class="avatar">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:8888/upload"
              data={username:this.$store.state.username}
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <!-- v-html="username"  -->
          <p>欢迎您：{{username}}</p>  
          <!-- <p>您已经消费：元</p> -->
        </div>
      </div>
      <!-- <div class="contentson">
        <p>我的钱包</p>
        <hr />
        <p>余额：￥1000</p>
      </div> -->
      <!--  -->
      <div class="contentson">
        <p>我的订单</p>
        <hr />
        <div class="myoders">
          <p>创建时间</p>
          <p>商品</p>
          <p>数量</p>
          <p>价格</p>
        </div>
        <div v-for="item in tableData" :key="item.id" class="order">
          <p>{{item.orderTime}}</p>
          <p>{{item.productName}}</p>
          <p>{{item.productCount}}</p>
          <p>{{item.orderMoney}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username:this.$store.state.username,
      tableData: [],
      imageUrl: this.$store.state.userData.headImg
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      this.axios
        .post("/UserOrder",{username:this.$store.state.username})
        .then(res => {
          window.console.log(res.data);
          this.tableData = res.data;
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    // 头像上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
}
.user p{
  padding-left: 50px;
}
.order {
  display: flex;
  background-color: white;
  padding: 10px;
  text-align: center;
}
.order p {
  width: 250px;
}
.myoders {
  display: flex;
  background-color: white;
  padding: 10px;
  text-align: center;
}
.myoders p {
  width: 250px;
}
/* 头像上传 */
/* .avatar-uploader .el-upload {
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
} */
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;

  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
</style>