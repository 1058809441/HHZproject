<template>
  <div>
    <div class="content">
      <div class="contentson">
        <p>我的账号</p>
        <hr />
        <div class="user">
          <img :src="src" />

          <p>用户名：{{username}}</p>
        </div>
      </div>
      <div class="contentson">
        <p>我的钱包</p>
        <hr />
        <p>余额：￥1000</p>
      </div>
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
// import '../Utils/webuploader/webuploader.css'
// import '../Utils/webuploader/webuploader.css'
// import '../Utils/webuploader/Uploader.swf'
// import "http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"
>>>>>>> 8d608c2faa1844e4443d5000b40954ff82ea76cb
=======
>>>>>>> hm的更新9.22
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
<<<<<<< HEAD
    fn() {    },
=======
>>>>>>> hm的更新9.22
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
</style>