
<template>
  <div class="mid">
    <video src="https://static1.gotokeep.com/homepage/5s.mp4" muted autoplay loop></video>
    <Slider></Slider>
    <div class="title">课程同款</div>
    <div class="goods">
      <!-- <a @click="toproductDetail" v-for="item1 in goods" :key="item1.index">
        <img :src="item1.src" />
        <div>{{itme1.name}}</div>
      </a>-->
      <!-- 不能用item1？？？ -->
      <a @click="toproductDetail(item)" v-for="item in $store.state.Product1" :key="item.index">
        <img :src="item.productImg" />
        <div>{{item.productName}}</div>
      </a>
      <!-- <a @click="toproductDetail" >
        <img src="https://static2.keepcdn.com/2019/05/31/1559285404659_800x800.jpg" />
        <div>筋膜枪Keep定制版</div>
      </a>
      <a @click="toproductDetail">
        <img src="https://static2.keepcdn.com/2019/05/31/1559285404659_800x800.jpg" />
        <div>筋膜枪Keep定制版</div>
      </a>
      <a @click="toproductDetail" >
        <img src="https://static2.keepcdn.com/ec/product/4621/fe5df232cafa4c4e0f1a0294418e5660.jpg" />
        <div>Keep 智能体脂秤S1</div>
      </a>-->
    </div>
    <div class="now_title">线上课程</div>
    <div class="lessons">
      <!-- 循环的部分：每个课程 类名、图片循环-->
      <a @click="toproductDetail(item)" :class="item.num" v-for="item in $store.state.Product2" :key="item.index">
        <img :src="item.productImg" />
      </a>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";

export default {
  components: {
    Slider
  },
  data() {
    return {
      goods: this.$store.state.Product1,
      image: this.$store.state.Product2
    };
  },
  // mounted(){
  //   this.goods= this.$store.state.Product1;
  //     this.image= this.$store.state.Product2;
  //     console.log(this.goods);console.log(this.image);
  // },
  methods: {
    //注意methods的写法！！！不加（）

    toproductDetail(item) {
      console.log(item);
      this.$router.push({
        path: "/productDetail",
        query: {
          img: item.productImg,
          productName: item.productName,
          productIntro: item.productIntro,
          productPrice: item.productPrice,
          productID:item.productId,
          productType:item.productType,
          productImg:item.productImg
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
video {
  position: relative;
  width: 100%;
}
// 课程同款
.title {
  width: 100%;
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 24px;
}
.goods {
  width: 100%;
  height: 400px;
  // background-color: lightblue;
  display: flex;
  justify-content: space-around;
}
.goods > a {
  width: 390px;
  height: 400px;
  position: relative;
  // background-color: lightblue;
}
.goods > a > div {
  width: 100%;
  height: 5%;
  text-align: center;
  position: absolute;
  bottom: 20px;
  font-size: 16px;
  color: gray;
}

.goods > a > img,
.first > img,
.second > img {
  width: 100%;
  height: 100%;
}
// 线上课程
.now_title {
  width: 100%;
  height: 70px;
  line-height: 100px;
  text-align: center;
  font-size: 24px;
}

.lessons {
  margin-top: 30px;
  width: 100%;
  // height: 600px;
  // background: red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.lessons > a {
  width: 300px;
  height: 260px;
  // background: blanchedalmond;
}

.lessons > a > img {
  width: 300px;
  height: 260px;
}
</style>
