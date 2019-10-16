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
    //接口：/UpdateShoppingCar，使用post请求
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
        })
        .then(res => {
          window.console.log(res.data);
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