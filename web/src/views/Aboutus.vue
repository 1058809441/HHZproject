
<template>
  <div id="aboutus">
    <h2>Aboutus</h2>
    <div class="contain1">
      <div class="contain1_left"></div>
      <div class="contain1_right">
        <h3>About Gym Workout</h3>
        <p>Aliquam in dolor eu ipsum elementum auctor vitae eget felis. Integer feugiat rutrum accumsan. Donec velit eros, eleifend vitae nisi nec, mattis auctor dui. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod justo sit amet porttitor viverra. In hac habitasse platea dictumst, tempor rhoncus mauris urna sed tortor.</p>
      </div>
    </div>
    <div class="contain2">
      <div v-for="item in about" :key="item.index">
        <h3>{{item.title}}</h3>
        <p>{{item.info}}</p>
      </div>
    </div>
    <div class="contain3">
      <h2>What Client's Say</h2>
      <p>Aliquam in dolor eu ipsum elementum auctor vitae eget felis. Integer feugiat rutrum accumsan. Donec velit eros, eleifend vitae nisi nec, mattis auctor dui. Aliquam erat volutpat Neque porro quisquam est qui dolorem Lorem ipsum dolor sit amet.</p>

      <!-- 在这里更改轮播图的高 -->
      <!-- <el-carousel height="280px" indicator-position="outside">
        <el-carousel-item v-for="item in 2" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>-->
    </div>
    <div class="contain4">
      <h2>创立历史</h2>
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutus",
  data() {
    return {
      about: [
        {
          title: "SPACIOUS GYM",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipisc elit. Proin ultricies vestibulum velit."
        },
        {
          title: "SPACIOUS GYM",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipisc elit. Proin ultricies vestibulum velit."
        },
        {
          title: "SPACIOUS GYM",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipisc elit. Proin ultricies vestibulum velit."
        },
        {
          title: "SPACIOUS GYM",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipisc elit. Proin ultricies vestibulum velit."
        }
      ]
    };
  }
  // methods:{
  //   toCommunity()
  // }
};
</script>


<style lang="less" scoped>
#aboutus {
  margin-top: 74px;
  background: #1f2223;
  color: white;
  padding-top: 20px;
}
// 公共宽
@my_width: 90%;
h2 {
  text-align: center;
  // color: white;
  margin: 38px 0 38px;
}
// 第一部分
.contain1 {
  width: @my_width;
  height: 275px;
  margin: 0 auto;
  // background: red;
  display: flex;
  .contain1_left {
    width: 41%;
    height: 100%;
    background: pink;
    background: url(http://demo.cssmoban.com/cssthemes5/cpts_1491_cfi/images/about.jpg)
      0 0 no-repeat;
  }
  .contain1_right {
    width: 50%;
    height: 100%;
    background: #778899;
    margin-left: 7%;

    padding-left: 20px;
  }
}
// 第二部分
.contain2 {
  width: @my_width;
  height: 275px;
  // background: green;
  margin: 30px auto;
  display: flex;
  div {
    width: 25%;
    padding: 10px 20px;
  }
  div:nth-child(2n) {
    height: 275px;
    background: #a02323;
  }
  div:nth-child(2n + 1) {
    height: 200px;
    background: #778899;
  }
}
// 第三部分
.contain3 {
  width: 87%;
  height: auto;
  background: #778899;
  margin: 40px auto;
  padding: 10px 20px;
  // 这是轮播图部分
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
// 第四部分时间轴
.contain4 {
  width: @my_width;
  margin: 0 auto;
  background: #778899;
  padding-top: 10px;
}
.is_top{
  color: white;
}
</style>
