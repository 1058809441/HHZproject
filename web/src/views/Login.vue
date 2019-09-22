<template>
  <div class="log">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules2"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h2 class="login">登录</h2>
      <el-form-item label="账号" prop="checkName">
        <el-input type="username" v-model="ruleForm.checkName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <a @click="toRegister">没有账号，去注册</a>
  </div>
</template>
<script>
import "../css/login.css";
export default {
  data() {
    let validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm.checkName !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      ruleForm: {
        checkName: "",
        pass: ""
      },
      ReCode: [],
      rules2: {
        checkName: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          window.console.log("提交成功!");
          this.axios
            .post("/login", this.ruleForm)
            .then(res => {
              window.console.log(res.data);
              if (res.data.ifLogin == true) {
                alert("登录成功");
                this.$router.push("/home");
              }
            })
            .catch(error => {
              window.console.log(error);
            });
        } else {
          window.console.log("提交失败!!");
          return false;
        }
      });

      window.console.log(this.ruleForm);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toRegister() {
      this.$router.push("/register");
    }
  },
  mounted() {}
};
</script>

<style scoped>

.log {
  width: 400px;
  text-align: center;
  padding: 100px 100px 100px 50px;
  margin: 0 auto;
  /* background-color: rgba(31, 2, 2, 0.514); */

}
.log a{
  font-size: 12px;
  color: white;
  margin-left: 90px;
  cursor: pointer;

}
.login{
  color: aliceblue;
  margin-bottom: 30px;
  margin-left: 90px;
}
</style>