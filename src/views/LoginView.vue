<template>
  <div class="login">
    <div class="img">
      <img src="@/assets/login.png" alt="" width="481px" height="370px" />
    </div>
    <div class="login-input">
      <div class="line">
        <input
          v-model="user.username"
          type="text"
          placeholder="请输入用户名"
          class="user"
        />
      </div>
      <div class="line">
        <input
          v-model="user.password"
          type="text"
          placeholder="请输入密码"
          class="pwd"
        />
      </div>
      <div class="line user-msg" style="color: #e63211; display: none">
        用户名不符合规则
      </div>
      <div class="line pwd-msg" style="color: #e63211; display: none">
        密码不符合规则
      </div>
      <!-- <div class="line"   style="color: #E63211">
                用户名或密码错误
            </div> -->

      <div class="btn reg" style="display: none" v-show="isRegister">
        <a href="javascript:;" class="reglink" @click="getRegister">注册</a>
      </div>
      <div class="btn log" v-show="isLogin">
        <a href="javascript:;" class="loglink" @click="getLogin"> 登录 </a>
      </div>

      <div class="read">
        <div class="checkbox">
          <input id="check" type="checkbox" />
          <label for="check"></label>
        </div>
        <div>
          <p>我已阅读并同意<span>《虫虫用户服务协议》《隐私政策》</span></p>
          <p>客服电话 : 1010-5335</p>
        </div>
      </div>
      <p class="switch" @click="change">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import { Login, Register } from "../request/index";
export default {
  name: "LoginView",

  data() {
    return {
      isRegister: false,
      isLogin: true,
      text: "切换为注册",
      user: {
        username: "",
        password: "",
      },
    };
  },

  mounted() {
    console.log('从此页面跳转而来',this.$route.query.from);
  },

  methods: {
    async getRegister() {
      let res = await Register(this.user);
      console.log("用户注册成功的返回值", res); //这个返回值并没有什么信息
      if (res.data.success) {
        alert("您已注册成功");
      }
    },
    async getLogin() {
      let res = await Login(this.user);
      console.log("用户登录成功的返回值", res);
      if (res.data.success) {
        // 如果获取值成功
        // 将令牌的值存入本地存储
        localStorage.setItem("token", res.data.data.token);
        // 登录成功返回上一步的页面
        console.log("登录成功");
        this.$router.replace(this.$route.query.from);
      }
    },
    change() {
      // 如果是登录状态，切换为注册，isRegister设为true

      if (!this.isRegister) {
        this.isRegister = true;
        this.isLogin = false;
        this.text = "切换为登录";
      } else {
        this.isRegister = false;
        this.isLogin = true;
        this.text = "切换为注册";
      }
    },
  },
};
</script>

<style src="../css/login.css" scoped>
</style>