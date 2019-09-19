<template>
  <div class="reg">
    <h2>注册</h2>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules2"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="checkName">
        <el-input type="username" v-model="ruleForm.checkName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <a @click="toLogin">已有账号，去登录</a>
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
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        checkName: "",
        pass: "",
        checkPass: "",
      },
      ReCode: [],
      rules2: {
        checkName: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          window.console.log("提交成功!");
          this.axios
            .post("/register", this.ruleForm)
            .then(res => {
              window.console.log(res.data);
              if(res.data.ifLogin==true){
                alert("注册成功")
                this.$router.push("/login");
              }
              // this.ReCode = res.data.code;
              // if (this.ReCode == 1) {
              //   alert("注册成功");
              //   this.$router.push("/login");
              //   alert("请登录注册好的账号");
              // } else if (this.ReCode == -1) {
              //   alert("用户已存在");
              // } else {
              //   alert("注册失败");
              // }
            })
            .catch(function(error) {
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
    toLogin(){
      this.$router.push("/login");
    }
  },
  mounted() {}
};
</script>
<style scoped>
.reg {
  width: 400px;
  text-align: center;
  padding: 100px 100px 100px 50px;
  background-color: white;
  border: 1px solid white;
  margin: 0 auto;
}
</style>