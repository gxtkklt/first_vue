<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <blog-header></blog-header>
    <hr/>
    <div>
      用户名:<input type="text" v-model="loginInfoVo.username" placeholder="请输入用户名" />
      <br/>
      密码：<input type="password" v-model="loginInfoVo.password" placeholder="请输入密码" />
      <br/>
      <button v-on:click="login">登录</button>
      <br/>
      登录验证情况：<textarea cols="30" rows="10" v-model="responseResult"></textarea>
    </div>
    <hr/>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          username: "admin",
          password: "123456"
        },
        loading: false,
        pwdType: "password",
      };
    },
    methods: {
      showPwd() {
        if (this.pwdType === "password") {
          this.pwdType = "";
        } else {
          this.pwdType = "password";
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            this.$store
              .dispatch("Login", this.loginForm)
              .then(response => {
                this.loading = false;
                let code = response.data.code;
                if (code == 200) {
                  this.$router.push({
                    path: "/success",
                    query: { data: response.data.data }
                  });
                } else {
                  this.$router.push({
                    path: "/error",
                    query: { message: response.data.message }
                  });
                }
              })
              .catch(() => {
                this.loading = false;
              });
          } else {
            // eslint-disable-next-line no-console
            console.log("参数验证不合法！");
            return false;
          }
        });
      }
    }
  };
</script>

<style scoped>
  .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409eff;
  }

  .login-title {
    text-align: center;
  }

  .login-center-layout {
    background: #409eff;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
  }
</style>
