
<template>
  <div id="footer">
    <a href="#" class="footer-services">
      <div class="wrapper">
        <div class="footer-service" v-for="item in services" :key="item.index">
          <span>{{item.info}}</span>
        </div>
      </div>
    </a>
    <div class="footer-center">
      <div class="footer-menus">
        <div class="wrapper01">
          <div class="footer-menu" v-for="item01 in menus" :key="item01.index">
            <div class="footer-menu-title">{{item01.name}}</div>
            <div
              class="footer-menu-list"
              v-for="item02 in item01.info"
              :key="item02.index"
            >{{item02}}</div>
          </div>
        </div>
      </div>
      <div class="footer-contact" v-for="item03 in contacts" :key="item03.index">
        <div class="footer-phone">{{item03.phone}}</div>
        <div class="footer-time">{{item03.time01}}</div>
        <div class="footer-online">
          <a href="#">在线客服</a>
        </div>
        <div class="footer-time">{{item03.time02}}</div>
        <div class="footer-socials"></div>
      </div>
    </div>
    <div class="footer-region">{{region}}</div>
    <div class="footer-bottom">
      <div class="wrapper03">
        <div class="copyright">
          © 2019 realme 版权所有.
          <a href="#">渝ICP备19011033号-1</a>
          <a href="#">粤公网安备 44030402002821号</a>
        </div>
        <div class="footer-legal">
          <a href>隐私政策</a>
          <a href>用户协议</a>
          <a href>服务政策</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      menus: [
        {
          name: "器械动作",
          info: ["哑铃", "杠铃", "弹力带", "瑞士球", "推肩器"]
        },
        {
          name: "新手课程",
          info: ["新手专题", "郑多燕减肥操", "弹力带", "瑞士球", "推肩器"]
        },
        {
          name: "进阶课程",
          info: ["哑铃", "杠铃", "弹力带", "瑞士球", "推肩器"]
        },
        {
          name: "明星课程",
          info: ["哑铃", "杠铃", "弹力带", "瑞士球", "推肩器"]
        }
      ],
      services: [
        { info: "7天无理由退货" },
        { info: "15天换货保障" },
        { info: "满79元包邮" },
        { info: "正品保障" }
      ],
      contacts: [
        {
          phone: "400-628-0066",
          time01: "8:00-20:00，周一至周日",
          time02: "9:00-22:00，周一至周日"
        }
      ],
      region: "Mainland China ( 简体中文 / CNY )"
    };
  }
};
</script>

<style scoped>
.footer-services {
  height: 40px;
  padding-top: 30px;
  border-bottom: 1px solid #d8d8d8;
  /* padding-bottom: 0; */
  /* background: #fff; */
  display: block;
}
.wrapper {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-bottom: 30px;
}
.footer-service {
  width: 25%;
  height: 70px;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
  text-align: center;
  /* background: papayawhip; */
  color: #6a6a6a;
}
.footer-center {
  height: 220px;
  display: flex;
  /* justify-content: space-between; */
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0 10px 0;
  /* background-color: lightcyan; */
}
.footer-menus {
  width: 880px;
  height: 220px;
  /* background-color: aliceblue; */
}
.wrapper01 {
  width: 100%;
  height: 183px;
  display: flex;
}
.footer-menu {
  width: 25%;
  height: 100%;
  /* background: olive; */
}
.footer-menu-title {
  margin-bottom: 23px;
  border-bottom: 0;
  line-height: 20px;
  font-size: 14px;
}
.footer-menu-list {
  display: block;
  font-size: 12px;
  line-height: 28px;
}
.footer-menu-list a {
  color: #6a6a6a;
}
.footer-contact {
  width: 202px;
  text-align: center;
  background: #fcfcfc;
}
.footer-region {
  padding: 15px 0;
  width: 1200px;
  margin: 0 auto;
  text-align: left;
  /* background-color: bisque; */
}
.footer-bottom {
  padding: 15px 0 20px 0;
  /* background-color: azure; */
}
.wrapper03 {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.footer-phone {
  font-size: 14px;
  color: #000;
}
.footer-time {
  margin-top: 6px;
  font-size: 12px;
  line-height: 18px;
  color: #6a6a6a;
}
.footer-online {
  width: 200px;
  height: 48px;
  margin-top: 30px;
  border: 1px solid #000;
}
.footer-online a {
  font-size: 16px;
  width: 200px;
  line-height: 48px;
  color: #000;
  margin: 0 auto;
}
.footer-region {
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #d8d8d8;
}
.wrapper03,
.wrapper03 a {
  font-size: 12px;
  color: #6a6a6a;
}
.footer-legal a {
  padding: 0 30px;
  border-right: solid 0.01rem #d8d8d8;
}
.footer-legal a:last-child {
  border-right: none;
}
</style>
