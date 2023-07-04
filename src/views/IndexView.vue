<template>
  <div>
    <div class="main">
      <div class="w clearfix">
        <div class="content">
          <div class="section now">
            <IndexContent type='0' title="正在热映" :list="listIn">
                
              <div class="buy">购票</div>
             
            </IndexContent>
          </div>
          <div class="section soon">
            <IndexContent type='1' title="即将上映" :list="listSoon">
                <template v-slot:default="obj">
              <p>{{obj.many}}人想看</p>
              <div class="btn">
                <span>预告片</span>
                <span>预售</span>
                <div class="date">{{obj.year}}年上映</div>
              </div>
               </template>
            </IndexContent>
          </div>
          <div class="section top">
            <IndexContent type='2' title="Top250" :list="listTop"></IndexContent>
          </div>
        </div>
        <div class="aside">
          <div class="box">
            <div class="title">今日票房</div>
            <ul class="list">
              <li class="item first">
                <img src="../assets/haibao.png" alt="" />
                <span class="num"></span> 航海王：红发歌姬
                <span class="right">9634.66万</span>
              </li>
              <li class="item">
                <span class="num" style="color: #e61111">2</span>
                航海王：红发歌姬 <span class="right">963万</span>
              </li>
              <li class="item">
                <span class="num" style="color: #e61111">3</span>
                航海王：红发歌姬 <span class="right">63万</span>
              </li>
              <li class="item">
                <span class="num">4</span> 航海王：红发歌姬
                <span class="right">4.66万</span>
              </li>
              <li class="item">
                <span class="num">5</span> 航海王：红发歌姬
                <span class="right">4.66万</span>
              </li>
            </ul>
            <div class="info">
              <div class="tip">今<br />日<br />大<br />盘</div>
              <div class="text">
                12835.3万
                <a href="">查看更多》</a>
              </div>
              <p>北京时间 14:46:30 虫虫专业版实时票房数据</p>
            </div>
          </div>
          <div class="box">
            <div class="title">
              最受期待
              <a href="">查看完整榜单》</a>
            </div>
            <ul class="list">
              <li class="item one">
                <img src="../assets/haibao.png" alt="" />
                <span class="num"></span>
                <p style="margin-top: 50px">航海王: 红发歌姬</p>
                <p>上映时间: 2022</p>
                <span class="right">2839376人想看</span>
              </li>
              <li class="item two" style="margin-right: 15px">
                <img src="../assets/haibao.png" alt="" />
                <span class="num">2</span> 保你平安
                <span class="right">2839376人想看</span>
              </li>
              <li class="item two">
                <img src="../assets/haibao.png" alt="" />
                <span class="num">3</span> 保你平安
                <span class="right">2839376人想看</span>
              </li>
              <li class="item">
                <span class="num">4</span> 绝望主妇
                <span class="right">2839376人想看</span>
              </li>
              <li class="item">
                <span class="num">5</span> 绝望主妇
                <span class="right">2839376人想看</span>
              </li>
            </ul>
          </div>
          <div class="box">
            <div class="title">
              电影-top100
              <a href="">查看完整榜单》</a>
            </div>
            <ul class="list">
              <li class="item first">
                <img src="../assets/haibao.png" alt="" />
                <span class="num"></span> 航海王：红发歌姬
                <span class="right">9.6分</span>
              </li>
              <li class="item">
                <span class="num" style="color: #e61111">2</span>
                航海王：红发歌姬 <span class="right">9.6分</span>
              </li>
              <li class="item">
                <span class="num" style="color: #e61111">3</span>
                航海王：红发歌姬 <span class="right">9.6分</span>
              </li>
              <li class="item">
                <span class="num">4</span> 航海王：红发歌姬
                <span class="right">9.6分</span>
              </li>
              <li class="item">
                <span class="num">5</span> 航海王：红发歌姬
                <span class="right">9.6分</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IndexContent from "./IndexContent.vue";
import { getMovie } from "@/request/index";
export default {
  name: "IndexView",
  components: { IndexContent },
  data() {
    return {

      listIn: [],
      listSoon: [],
      listTop: [],
    };
  },

  mounted() {
    this.getMovieLs();
  },

  methods: {
    async getMovieLs() {
      let res1 = await getMovie(0);
      let res2 = await getMovie(1);
      let res3 = await getMovie(2);
      this.listIn = res1.data.data.list;
      this.listSoon = res2.data.data.list;
      this.listTop = res3.data.data.list;
    },
  },
};
</script>

<style src='../css/index.css' scoped>
/* src导入样式仅对当前组件样式生效 */
</style>