
<template>
  <div id="slider">
    <!-- 轮播图 -->
    <el-carousel :interval="1200" type="card" height="400px">
      <el-carousel-item v-for="item in image" :key="item.index">
        <img :src="item.url" height="400px" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "slider",
  data() {
    return {
      image: [
        {
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=913643593,488636701&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3528567612,1493319107&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3923836592,180916732&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=422969539,2350803566&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569044439202&di=e0da1ecd9d8eff9b9885177981f5dbef&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F533d579e1665fd758ad00b8f2ec6ae338bdc547c47cbe-bU89TB_fw658"
        },
        {
          url:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1084993280,220482974&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=179003902,3242474903&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1103080062,3038759796&fm=26&gp=0.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#slider {
  margin-top: 20px;
}

img{
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
