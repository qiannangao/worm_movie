<template>
  <div class="box" v-if="movie">
    <!-- 存在title时，代表该条数据已被渲染到，不用考虑控制台报错的问题 -->
    <div class="bg">
      <div class="w">
        <div class="cover">
          <img :src="movie.medium" alt="" @error="reload" />
        </div>
        <div class="info">
          <div class="title">
            {{ movie.title }}
          </div>
          <div class="en">{{ movie.original_title }}</div>
          <p class="type">类型：{{ movie.genres }}</p>
          <p class="time">时长：{{ movie.longtime | toStr }}</p>
          <p class="date">上映时间: {{ movie.show_date[0] }}</p>
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
      <div v-if="movie" class="w clearfix">
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
              {{ movie.summary }}
            </div>
          </div>
          <div id="actor">
            <div class="tip">演职人员</div>
          
            <ul class="list clearfix" style="width: 725px; height: 214px">
              <li
                class="item"
                v-for="player in movie.players.slice(0, 5)"
                :key="player.playerId"
              >
                <img :src="player.avatar" alt="" class="avatar" @error="reload">
                <p>{{ player.name }}</p>
                <p>{{ player.role }}</p>
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
              <li
                class="img-item"
                v-for="i in movie.photos.img.slice(0, 5)"
                :key="i"
              >
                <img :src="i" alt="" @error="reload" />
              </li>
            </ul>
          </div>
          <div id="commet">
            <div class="tip">热评短评</div>
            <ul class="com-list">
              <li
                class="com-item"
                v-for="i in movie.comments.list.slice(0, 5)"
                :key="i.cid"
              >
                <div class="info">
                  <div class="avatar">
                    <img :src="i.avatar" alt="" @error="reload" />
                  </div>
                  <div class="user">
                    <div class="name">{{ i.author }}</div>
                    <div class="date">{{ i.date }}</div>
                    <div class="rate">
                      <img
                        v-for="star in i.star / 10"
                        :key="star"
                        src="@/assets/star.png"
                        alt=""
                      @error="reload" />
                    </div>
                  </div>
                  <div class="vote">
                    <img src="@/assets/xin.png" alt="" />
                    <span>{{ i.vote }}</span>
                  </div>
                </div>
                <div class="text">
                  {{ i.content }}
                </div>
              </li>
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
              <!-- 点击时传入预告片路径 -->
              <li
                @click="openMask(i)"
                v-for="(trailer, i) in movie.trailers.video.slice(0, 5)"
                :key="i"
                class="trai-item clearfix"
              >
                <div class="cover">
                  <video :src="trailer"></video>
                </div>
                <div class="text">
                  {{ movie.title }}
                </div>
              </li>
            </ul>
          </div>
          <!-- <div id="info">
                    <div class="tip">相关资讯</div>
                </div> -->
         
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
         <div class="vd-mask" v-show="isShow" @click.self="isShow=false">
            <div class="mask-content">
              <video :src="movie.trailers.video[vdIndex]" controls ></video>
              <p>
                 <!-- <button @click="vdIndex-=1" >上一个</button>
             <button @click="vdIndex+=1" >下一个</button> -->
                <button @click="prev" :disabled='vdIndex==0'>上一个</button>
              <button @click="next" :disabled='vdIndex==movie.trailers.video.length-1'>下一个</button>
              </p>
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
      movie: "",
      isShow: false,
      vdSrc: "",
      vdIndex:0
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
      console.log('详情',res);
      this.movie = res.data.data;
    },
    openMask(i) {
      this.isShow = true;
      this.vdIndex = i;
    },
    prev(){
      // 点击上一个下标-1
      this.vdIndex-=1;
    },
    next(){
      this.vdIndex+=1
    },
    reload(e) {
      e.target.src =
        "https://ts3.cn.mm.bing.net/th?id=OIP-C.ADlFHdE1Blf2lAAzDQgBUAHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2";
    },
  },
};
</script>

<style src='../css/detail.css' scoped>
</style>