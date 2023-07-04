<template>
  <div>
    <header>
      <div class="head">
        <div class="w">
          <div class="logo"></div>
          <div class="pos">
            郑州
            <img src="../assets/bd.png" alt="" />
          </div>
          <ul class="nav">
            <li class="nav-item">
              <router-link to="/" exact>首页</router-link>
            </li>
            <li class="nav-item">
              <a href="">电影</a>
            </li>
            <li class="nav-item">
              <a href="">影院</a>
            </li>
            <li class="nav-item">
              <a href="">演出</a>
            </li>
            <li class="nav-item">
              <router-link to="/list/0">榜单</router-link>
            </li>
            <li class="nav-item">
              <a href="">热点</a>
            </li>
            <li class="nav-item">
              <a href="">商城</a>
            </li>
          </ul>
          <div class="user">
            <a href="#" class="avatar"></a>
            <img src="../assets/bd.png" alt="" />
            <ul class="mine-list">
              <li>我的订单</li>
              <li class="mine-info">我的信息</li>
              <li class="mine-unlog">退出登录</li>
            </ul>
          </div>
          <div class="search">
            <input type="text" placeholder="找影视剧；影人；影院" />
            <div class="icon"></div>
          </div>
        </div>
      </div>
    </header>
    <router-link to="/">首页</router-link>|
    <router-link to="/list/0">榜单页</router-link>|
    <router-link to="/detail">电影详情页</router-link>|
    <router-link to="/trailer">预告片页</router-link>|
    <router-link to="/login">登录注册页</router-link>|
    <router-link to="/mine">个人信息页</router-link>|

    <router-view></router-view>
    <footer>
      <div class="foot">
        <div class="w">
          <p>
            关于虫虫 : 关于我们 管理团队 投资者关系 友情链接 : 美团网 格瓦拉
            美团下载 欢喜首映
          </p>
          <p>
            商务合作邮箱：v@chongchong.com 客服电话：10665335
            违法和不良信息/涉未成年人有害信息举报电话：4003456018900
          </p>
          <p>
            用户举报/涉未成年人有害信息举报邮箱：chongchong@.com
            舞弊线索举报邮箱：wubijubao@comhcomg.com
          </p>
          <p>
            中华人民共和国增值电信业务经营许可证 京B2-20190350 营业性演出许可证
            京演（机构）（2019）4094号
          </p>
          <p>
            广播电视节目制作经营许可证 （京）字第08478号 网络文化经营许可证
            京网文（2022）1334-041号
          </p>
          <p>艺术品经营单位备案证明 京东艺（2022）0095号</p>
        </div>
      </div>
    </footer>
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
@import url("@/css/common.css");
</style>