<template>
  <div class="carts">
    <h2>购物车</h2>
    <div class="cart">
      <p>商品种类</p>
      <p>商品</p>
      <p>数量（件）</p>
      <p>单价（元）</p>
      <p>操作</p>
    </div>
    <hr />
    <div v-for="(v,index) in tableData" :key="v.ID" class="mycart">
      <img :src="v.productImg" style="width:100px height:100px" />
      <p style="padding-left: 80px">{{v.productName}}</p>
      <p class="counter">
        <input type="button" value="-" @click="update(-1,index)" />
        <input type="text" v-model="v.productCount" class="inp" />
        <input type="button" value="+" @click="update(1,index)" />
      </p>
      <p>{{v.productPrice}}</p>
      <p @click="del(index)" class="del">删除</p>
    </div>
    <div class="operat">
      <!-- <p style="padding-left:100px">总计：￥ {{total | totalFilter(tableData) }}</p> -->
      <p style="padding-left:100px">总计：￥ {{total}}</p>
      <div @click="settlement(total)">结算</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      tableData: this.$store.state.shoppingCar,
      total: 0
    };
  },
  // filters: {
  //   totalFilter: (value, v) => {
  //     // console.log(value, v);
  //     let money = 0;
  //     v.forEach(item => {
  //       // console.log(item);

  //       let a = parseInt(item.productPrice) * parseInt(item.productCount);
  //       money += a;
  //     });
  //     return money;
  //   }
  // },
  mounted() {
    this.mytotal();
  },
  beforeUpdate() {
    this.mytotal();
  },


  methods: {
    mytotal() {
      let money = 0;
      this.tableData.forEach(item => {
        // console.log(item);

        let a = parseInt(item.productPrice) * parseInt(item.productCount);
        money += a;
      });
      this.total = money;
      return money;
    },

    settlement(total) {
      alert("去结算,一共" + total + "元");
      this.$store.state.shoppingCar = [];

      this.axios
        .post("/AddOrder", {
          username: this.$store.state.username
        })
        .then(res => {
          console.log(res.data);
          this.$router.push("/users/center");
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    update(type, index) {
      if (type == -1) {
        this.$store.commit("reduceCount", index);
        this.mytotal();
      } else if (type == 1) {
        this.$store.commit("addCount", index);
        this.mytotal();
      }

      this.axios
        .post("/UpdateShoppingCar", {
          tag: type,
          username: this.$store.state.username,
          productID: this.tableData[index].productID,
          productName: this.tableData[index].productName,
          productPrice: this.tableData[index].productPrice,
          productType: this.tableData[index].productType,
          productImg: this.$store.state.productImg
        })
        .then(res => {
          // window.console.log(res);
        })
        .catch(error => {
          window.console.log(error);
        });
    },

    settle() {
      alert("去结算");
    },
    del(index) {
      alert("确定删除商品？");
      this.axios
        .post("/DeleteFromShoppingCar", {
          username: this.$store.state.username,
          productID: this.tableData[index].productID
        })
        .then(res => {
          this.$store.commit("delShop", index);
          this.tableData.splice(index, 1);
          console.log(this.$store.state.shoppingCar, this.tableData);
        })
        .catch(error => {
          window.console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.carts {
  width: 800px;
  height: 100%;
  font-size: 14px;
  color: gray;
  text-align: center;
  margin: 0 auto;
}
.cart {
  display: flex;
  background-color: white;
  padding: 10px;
}
.cart p {
  width: 190px;
}
.mycart {
  display: flex;
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid gainsboro;
}
.mycart p {
  width: 190px;
}
.operat {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: rgb(151, 133, 133);
  background-color: white;
  border-top: 1px solid gainsboro;
}
.operat p {
  /* width: 190px; */
  cursor: pointer;
}
.operat p:hover {
  color: rgb(145, 84, 9);
}
.operat div {
  width: 190px;
  height: 47px;
  line-height: 47px;
  border: 1px solid rgb(243, 237, 237);
  background-color: rgb(243, 237, 237);
  cursor: pointer;
}
.operat div:hover {
  color: whitesmoke;
  border: 1px solid red;
  background-color: red;
}
.counter {
  width: 50px;
  height: 20px;
  display: flex;
  padding-left: 50px;
}
.inp {
  display: block;
  width: 20px;
  text-align: center;
  /* padding-left:10px ; */
}
.del {
  cursor: pointer;
}
.del:hover {
  color: rgb(145, 84, 9);
}
img {
  width: 100px;
  height: 100px;
}
</style>