<template>
  <div>
    <header>公共头部</header>
<router-link to="/">首页</router-link>|
<router-link to="/list">榜单页</router-link>|
<router-link to="/detail">电影详情页</router-link>|
<router-link to="/trailer">预告片页</router-link>|
<router-link to="/login">登录注册页</router-link>|
<router-link to="/mine">个人信息页</router-link>|

    <router-view></router-view>
    <footer>公共尾部</footer>
  </div>
</template>

<script>
export default {
  name: "LayoutView",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>