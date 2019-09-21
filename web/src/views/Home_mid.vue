
<template>
  <div class="mid">
     <video src="https://static1.gotokeep.com/homepage/5s.mp4" muted autoplay loop></video>
    <Slider></Slider>
    <div class="goods">
      <div class="first">
        <img src />
      </div>
      <div class="second">
        <img src />
      </div>
      <div class="third">
        <img src />
      </div>
    </div>
    <div class="lesson">
      <div class="first">
        <img src="https://static1.keepcdn.com/2016/11/08/15/1478591073270_750x700.jpg" />
      </div>
      <div class="second">
        <img src="http://static1.keepcdn.com/2016/11/08/15/1478588565783_750x700.jpg" />
      </div>
      <div class="third">
        <img src="http://static1.keepcdn.com/2017/03/02/18/1488452269169_750x700.jpg" />
      </div>
      <div class="forth">
        <img src="https://static1.keepcdn.com/misc/2016/03/01/15/54cc47743b800000.jpg" />
      </div>
      <div class="fifth">
        <img src="https://static1.keepcdn.com/2016/11/08/15/1478591225452_750x700.jpg" />
      </div>
      <div class="sixth">
        <img src="https://static1.keepcdn.com/misc/2016/03/10/20/54d81f3d5b000000.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";

export default {
  name: "mid",
  components: {
    Slider
  }
};
</script>

<style lang="less" scoped>
video{
  position: relative;
  width: 100%;
}
.goods {
  width: 100%;
  height: 400px;
  background-color: pink;
  display: flex;
  justify-content: space-around;
}
.goods > div {
  width: 300px;
  height: 400px;
  background-color: lightblue;
}
.lesson {
  margin-top: 30px;
  width: 100%;
  height: 600px;
  background-color: lightyellow;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.lesson > .first {
  width: 300px;
  height: 260px;
  background-color: lightgreen;
}

.lesson > div > img {
  width: 300px;
  height: 260px;
}
</style>
