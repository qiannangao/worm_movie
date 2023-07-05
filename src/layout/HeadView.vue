<template>
    <div>
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
              <router-link to="/list">榜单</router-link>
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
              <li class="mine-info">
                <router-link to="/mine">我的信息</router-link>
                </li>
              <li class="mine-unlog">退出登录</li>
            </ul>
          </div>
          <div class="search">
            <input type="text" placeholder="找影视剧；影人；影院" />
            <div class="icon"></div>
          </div>
        </div>
      </div> 
    </div>
</template>

<script>
export default {
    name: 'HeadView',

    data() {
        return {
            // type:0
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>