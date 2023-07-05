<template>
  <div>
    <div class="top-bar">
      <div class="w">
        <div class="tab-list">
          <router-link class="tab-item" to="/list/0" :class="{ act: type == 0 }"
            >正在上映</router-link
          >
          <router-link class="tab-item" to="/list/1" :class="{ act: type == 1 }"
            >即将上映</router-link
          >
          <router-link class="tab-item" to="/list/2" :class="{ act: type == 2 }"
            >top250</router-link
          >
        </div>
      </div>
    </div>
    <div class="content">
      <div class="w">
        <div class="tip">
          <!-- <p>2021年-12-14 已更新</p> -->
          <p>
            榜单规则：将昨日国内热映的影片，按照评分从高到低列取前10名，每天上午10点更新。相关数据来源于“虫虫影视库”
          </p>
        </div>
        <ul class="list">
          <!-- 跳转时,携带这部电影的 mId -->
          <li class="item" v-for="(movie, i) in movieList" :key="i">
            <router-link :to="'/detail/' + movie.mId">
              <div class="num">{{ i > 0 ? i + 1 : "" }}</div>
              <div class="cover">
                <img v-if="movie" :src="movie.medium" alt="" @error="reload" />
              </div>
              <div class="info">
                <div class="title">{{ movie.title }}</div>
                <p class="actor">导演:{{ movie.director | toStr }}</p>
                <p class="actor">编剧:{{ movie.scriptwriter | toStr }}</p>
                <p class="time">上映时间:{{ movie.show_date | toStr }}</p>
                <div class="rate" v-rate="movie.rating_average"></div>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="page clearfix">
          <div class="page-btn">《上一页</div>
          <router-link
            class="num"
            :to="'/list/0/'+{start:i,limit:8}"
            v-for="i in total"
            :key="i"
            >{{ i }}</router-link
          >
          <div class="page-btn">下一页》</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMovie } from "../request/index";
export default {
  name: "ListView",

  data() {
    return {
      type: 0,
      movieList: [],
      total: 0,
    };
  },
  filters: {
    toStr(arr) {
      return arr.join(",");
    },
  },
  // 自定义指令
  directives: {
    rate: {
      bind(el, binding) {
        // 评分拆分；binding.value是指令绑定的值
        el.innerHTML = `${binding.value[0]}.<span>${
          binding.value[2] || 0
        }</span>`;
      },
    },
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // next可以接收函数作为参数，函数自带一个形参为页面的实例；函数内的参数vm代表当前页面vue实例
    next((vm) => {
      vm.type = to.params.type;
    console.log(vm.type);
      vm.getMovieLs(vm.type);
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // to代表路由信息this.$route
    console.log("路由参数改变监听", to.params); //mId值
    next();
    this.getMovieLs(to.params.type);
  },
  mounted() {
    this.getMovieLs(this.type);
  },

  methods: {
    async getMovieLs(type) {
      this.type = type;
      let res = await getMovie(this.type);
      console.log("list页调用函数的返回值", res);
      this.movieList = res.data.data.list;
      this.total = res.data.data.totalPage;
    },
    reload(e) {
      e.target.src =
        "https://ts3.cn.mm.bing.net/th?id=OIP-C.ADlFHdE1Blf2lAAzDQgBUAHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2";
    },
  },
};
</script>

<style src='@/css/list.css' scoped>
</style>