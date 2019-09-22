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
    <div v-for="(item,index) in tableData" :key="item.ID" class="mycart">
      <img :src="item.productImg" />
      <p style="padding-left: 80px">{{item.productName}}</p>
      <p class="counter">
        <input type="button" value="-" @click="update(-1,index)" />
        <input type="text" v-model="item.productCount" class="inp" />
        <input type="button" value="+" @click="update(1,index)" />
      </p>
      <p>{{item.productPrice}}</p>
      <p @click="del" class="del">删除</p>
    </div>
    <div class="operat">
      <p @click="emptyCart">清空购物车</p>
      <p @click="Total">总计：￥ {{this.total}} </p>
      <div>结算</div>
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
  mounted() {
    this.Total();
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row);
    },
    update(type, index) {
      if (type == -1) {
        this.$store.commit("reduceCount", index);
        this.Total()
      } else if (type == 1) {
        this.$store.commit("addCount", index);
        this.Total()
      }
    },

    settle() {
      alert("去结算");
    },
    del(index) {
      alert("确定删除商品？");
      this.tableData.splice(index, "");
      this.$store.commit("delShop", index);
    },
    emptyCart() {
      alert("您要清空购物车吗");
      this.tableData = []; //清空页面购物车
      this.$store.commit("emptyCart"); //清空仓库购物车
    },
    Total() {
      let money = 0;
      this.tableData.forEach(item => {
        let a = parseInt(item.productPrice) * parseInt(item.productCount);
        money += a;
      });
      this.total = money;
      console.log(this.total);

      return this.total;
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
</style>