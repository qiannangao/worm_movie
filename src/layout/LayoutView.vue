<template>
  <div>
    <!-- 公共头部 -->
   <HeadView></HeadView>
    <!-- <router-link to="/">首页</router-link>|
    <router-link to="/list/0">榜单页</router-link>|
    <router-link to="/detail">电影详情页</router-link>|
    <router-link to="/trailer">预告片页</router-link>|
    <router-link to="/login">登录注册页</router-link>|
    <router-link to="/mine">个人信息页</router-link>| -->

    <router-view></router-view>
    <!--  -->
    <FootView></FootView>
  </div>
</template>

<script>
import FootView from './FootView.vue';
import HeadView from './HeadView.vue';

export default {
  name: "LayoutView",
components:{
  FootView,HeadView
},
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
@import url("@/css/common.css");
</style>