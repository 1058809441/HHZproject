<template>
  <div class="ProductDetail">
    <div class="big">
      <img :src="img" />
      <span class="first">商品名称 ： {{productName}}</span>
      <span class="second">商品描述 ： {{productIntro}}</span>
      <span class="third">定价 ： $ {{productPrice}}</span>
      <el-button @click="toCAr()" type="danger" class="final">ADD TO CART</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: "",
      productName: "",
      productIntro: "",
      productPrice: null,
      productID: null,
      productType: ""
    };
  },
  mounted() {
    var data = this.$route.query;

    this.img = data.img;
    this.productName = data.productName;
    this.productIntro = data.productIntro;
    this.productPrice = data.productPrice;
    this.productID = data.productID;
    this.productType = data.productType;
    this.productImg = data.productImg;

    console.log(data);
  },
  methods: {
    //注意methods的写法！！！不加（）
    // 函数执行：点击事件触发/调用触发
    //     7、增减商品到购物车
    // 注释1：四种商品（预定课程course、预约教练coach、健身用品tool、健身套餐card），当发生购物车增减操作时，判断商品种类，除了tool，其它的数量只能为1
    // 注释2：商品详情页只能  将原来购物车中没有的商品新加入购物车  或者  将原本购物车中商品的数量增加 1
    // 注释3：购物车页 可以增加或者减少已有的商品，通过判断种类，使得除了tool以外其他商品都只能为1
    // 注释4：锁定购物车的商品数量不能小于1，删除只能点击删除按钮
    // app.post('/UpdateShoppingCar',
    // 后台请求数据格式：（前端传值过去）
    // { tag：数字 1 是增加数字 -1 是减少， username，productID，productName，productPrice，productType，productImg }
    toCAr() {
      this.axios
        .post("/UpdateShoppingCar", {
          tag: 1,
          username: this.$store.state.username,
          productID: this.productID,
          productName: this.productName,
          productPrice: this.productPrice,
          productType: this.productType,
          productImg: this.productImg
        }) //接口：/UpdateShoppingCar，使用post请求
        .then(res => {
          window.console.log(res.data); //检查从后台获得的数据是否成功，并打印
          let len = this.$store.state.shoppingCar.length;
          var tag = true;
          for (let i = 0; i < len; i++) {
            if (this.$store.state.shoppingCar[i].productID == this.productID) {
              this.$store.state.shoppingCar[i].productCount++;
              tag = false;
            }
          }
          if (tag) {
            this.$store.commit("addToShoppingCar", {
              username: this.$store.state.username,
              productID: this.productID,
              productName: this.productName,
              productPrice: this.productPrice,
              productType: this.productType,
              productImg: this.productImg,
              productCount: 1
            });
          }
          this.$router.push("/users/cart"); //点击则跳转购物车页面

          // this.users = res.data; //把从后台得到的数据传给data里的users
        })
        .catch(error => {
          window.console.log(error);
        });
    }
  }
};
</script>


<style lang="less" scoped>
.big {
  width: 100%;
  height: 500px;
  position: relative;
  top: 100px;
}

.big img {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50px;
  left: 200px;
}

.big .first,
.second,
.third {
  display: inline-block;
  width: 300px;
  position: absolute;
  right: 230px;
  font-size: 18px;
}
.big .first {
  height: 40px;
  top: 70px;
  line-height: 40px;
}
.big .second {
  height: 180px;
  position: absolute;
  top: 130px;
}

.big .third {
  height: 40px;
  position: absolute;
  top: 320px;
}

.big .final {
  position: absolute;
  right: 390px;
  top: 370px;
}
</style> 