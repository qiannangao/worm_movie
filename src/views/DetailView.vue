<template>
  <div>
    <!-- 存在title时，代表该条数据已被渲染到，不用考虑控制台报错的问题 -->
    <div class="bg" v-if="movie.title">
      <div class="w">
        <div class="cover">
          <img :src="movie.medium" alt="" />
        </div>
        <div class="info">
          <div class="title">
            {{ movie.title }}
          </div>
          <div class="en">{{ movie.original_title }}</div>
          <p class="type">类型：{{movie.genres}}</p>
          <p class="time">时长：{{ movie.longtime | toStr }}</p>
          <p class="date">上映时间: {{ movie.show_date[0]}}</p>
          <div class="btn view">
            <img src="@/assets/xin.png" alt="" />
            想看
          </div>
          <div class="btn score">
            <img src="@/assets/xinxi.png" alt="" />
            评分
          </div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="w clearfix">
        <div class="title"></div>
        <div class="section">
          <div class="tab-nav clearfix">
            <a href="#summary" class="act">介绍</a>
            <a href="#actor">演职人员</a>
            <a href="#imgs">图集</a>
            <a href="#commet">评论</a>
          </div>
          <div id="summary">
            <div class="tip">剧情简介</div>
            <div class="text">
             {{movie.summary}}
            </div>
          </div>
          <div id="actor">
            <div class="tip">演职人员</div>
            <!-- <div class="tip-dir"
              style="
                width: 148px;
                height: 20px;
                display: inline-block;
                font-size: 14px;
              "
            >
              导演
            </div> -->
            <!-- <div class="tip-dir"
              style="
                width: 28px;
                height: 20px;
                display: inline-block;
                font-size: 14px;
              "
            >
              演员
            </div> -->
            <ul class="list clearfix" style="width: 725px; height: 214px">
              <li class="item" v-for="player in movie.players.slice(0,5)" :key='player.playerId'>
                <img :src="player.avatar" alt="" class="avatar">
                <p>{{player.name}}</p>
                <p>{{player.role}}</p>
              </li>
              <!-- <li class="item-actor">
                            <a href="">
                                <img v-for="i in 4" :key=i  :src="movie.photos" alt="">
                            </a>
                        </li> -->
            </ul>
          </div>
          <div id="imgs">
            <div class="tip">图集</div>
            <ul class="img-list clearfix">
              <li class="img-item">
                <!-- <img src="" alt=""> -->
              </li>
            </ul>
          </div>
          <div id="commet">
            <div class="tip">热评短评</div>
            <ul class="com-list">
              <!-- <li class="com-item">
                            <div class="info">
                                <div class="avatar"></div>
                                <div class="user">
                                    <div class="name">forwards</div>
                                    <div class="date">2022-4-9</div>
                                    <div class="rate">
                                        <img src="img/star.png" alt="">
                                    </div>
                                </div>
                                <div class="vote">
                                    <img src="img/xin.png" alt="">
                                    <span>2345</span>
                                </div>
                            </div>
                            <div class="text">
                                sdgfkjsdgjfgsdjfgjsdgfjgdsjfgjsdgfjgsdjfgsjdweuroweuroweuoruweo
                            </div>
                        </li> -->
            </ul>
          </div>
        </div>
        <div class="aside">
          <div class="tab-nav clearfix">
            <a href="#trailers" class="act">预告片</a>
            <a href="#info">相关资讯</a>
          </div>
          <div id="trailers">
            <div class="tip">预告片</div>
            <ul class="trai-list">
              <li class="trai-item clearfix">
                <!-- <a href="">
                                <div class="cover">
                                    <video src=""></video>
                                </div>

                            </a> -->
              </li>
            </ul>
          </div>
          <!-- <div id="info">
                    <div class="tip">相关资讯</div>
                </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDetail } from "../request/index";
export default {
  name: "DetailView",

  data() {
    return {
      movie: '',
      
    };
  },
  filters: {
    toStr(arr) {
      return arr[0];
    },
  },
  mounted() {
    // console.log(this.$route.params.mId);
    this.getDetailLs();
  },
  // 进入本页面前拦截获取到mId
  beforeRouteEnter(to, from, next) {
    //  在组件中定义的路由拦截函数，进入movie页面之前，与定义单个路由的守卫功能一致
    // next可以接收函数作为参数，函数自带一个形参为页面的实例；函数内的参数vm代表当前页面vue实例
    next((vm) => {
      //   console.log(vm.$route.params.mId);
    });
  },
  methods: {
    async getDetailLs() {
      let res = await getDetail(this.$route.params.mId);
      console.log(res);
      this.movie = res.data.data;
    },
  },
};
</script>

<style src='../css/detail.css' scoped>
</style>