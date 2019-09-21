<template>
  <div id="community">
    <div class="all">
      <div class="user_input">
        有什么新鲜事想告诉大家?
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="textarea2"
          maxlength="400"
          show-word-limit
        ></el-input>

        <el-button type="primary" plain>发布</el-button>
      </div>

      <div class="contain" v-for="item in users" :key="item.index">
        <div class="headin">
          <img :src="item.pic" />
        </div>
        <div class="aaa">
          <h2 class="title">{{item.title}}</h2>
          <span>{{item.time}}</span>
          <!-- <span> </span> -->
          <p>{{item.contain}}</p>
        </div>
      </div>
      <!-- <div class="contain">
        <div class="title">标题</div>
        <div class="headin">
          <img
            src="http://storage.360buyimg.com/i.imageUpload/6a645f3763303762333330666536623531353033393731353639323435_mid.jpg"
          />
        </div>
        <span>2019年.9.20</span>
        <span>24:00:00</span>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea2: "",
      users: [
        {
          pic:"http://storage.360buyimg.com/i.imageUpload/6a645f3763303762333330666536623531353033393731353639323435_mid.jpg",
          title:"标题",
          time:"2019.09.26",
          contain:"zheshi 这是内容萨达四大啊"
        },{
          pic:"http://storage.360buyimg.com/i.imageUpload/6a645f3763303762333330666536623531353033393731353639323435_mid.jpg",
          title:"标题",
          time:"2019.09.26",
          contain:"zheshi 这是内容萨达四大啊"
        },{
          pic:"http://storage.360buyimg.com/i.imageUpload/6a645f3763303762333330666536623531353033393731353639323435_mid.jpg",
          title:"标题",
          time:"2019.09.26",
          contain:"zheshi 这是内容萨达四大啊"
        },

        {
          pic:"http://storage.360buyimg.com/i.imageUpload/6a645f3763303762333330666536623531353033393731353639323435_mid.jpg",
          title:"标题",
          time:"2019.09.26",
          contain:"zheshi 这是内容萨达四大啊"
        }
      ]
    };
  }
};
</script>


<style lang="less" scoped>
#community {
  margin-top: 70px;
}
.all {
  width: 85%;
  margin: 0 auto;
  background: red;
  // height: 800px;
  .user_input {
    width: 90%;
    height: auto;
    background: pink;
    margin: 10px auto;
     border-radius: 15px;
  }
  .contain {
    height: 300px;
    background: pink;
    border-radius: 15px;
    margin: 10px 10px 10px 10px;
    display: flex;
    // margin: 10px;
    .aaa {
      margin-left: 15px;
    }
    .headin img{
      border-radius: 15px;
    }
  }
}
</style> 