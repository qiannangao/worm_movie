<template>
    <div>
        <div class="main">
        <div class="w clearfix">
            <div class="content">
                <div class="section now">
                    <div class="title">
                       <span>正在热映</span>
                       <router-link to="/list/0">全部></router-link>
                       
                    </div>
                    <ul class="list clearfix">
                        <li class="item" v-for="movie in listIn" :key="movie.mId">
                            <div class="cover">
                                <img :src="movie.medium"
                                    alt="" @error="reload">
                                <div class="cname">{{movie.title}}</div>
                            </div>
                            <div class="buy">
                                购票
                            </div>
                        </li>
                       
                    </ul>

                </div>
                <div class="section soon">
                    <div class="title">
                       <span>即将热映</span>
                        <router-link to="/list/1">全部></router-link>
                    </div>
                    <ul class="list clearfix">
                        <li class="item" v-for="movie in listSoon" :key="movie.mId">
                            <div class="cover">
                                <img :src="movie.medium"
                                    alt="" @error="reload">
                                <div class="cname">{{movie.title}}</div>
                            </div>
                            <p>234人想看</p>
                            <div class="btn">
                                <span>预告片</span>
                                <span>预售</span>
                            </div>
                            <div class="date">12月17日上映</div>
                        </li>
                    </ul>

                </div>
                <div class="section top">
                    <div class="title">
                        <span>电影-top250</span>
                         <router-link to="/list/2">全部></router-link>
                    </div>
                    <ul class="list clearfix">
                        <li class="item" v-for="movie in listTop" :key="movie.mId">
                            <div class="cover">
                                <img :src="movie.medium"
                                    alt="" @error="reload">
                                <div class="cname">{{movie.title}}</div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
            <div class="aside">
                <div class="box">
                    <div class="title">今日票房</div>
                    <ul class="list">
                        <li class="item first">
                            <img src="../assets/haibao.png"
                                alt="">
                            <span class="num"></span> 航海王：红发歌姬 <span class="right">9634.66万</span>
                        </li>
                        <li class="item">
                            <span class="num" style="color:#E61111;">2</span> 航海王：红发歌姬 <span class="right">963万</span>
                        </li>
                        <li class="item">
                            <span class="num" style="color:#E61111;">3</span> 航海王：红发歌姬 <span class="right">63万</span>
                        </li>
                        <li class="item">
                            <span class="num">4</span> 航海王：红发歌姬 <span class="right">4.66万</span>
                        </li>
                        <li class="item">
                            <span class="num">5</span> 航海王：红发歌姬 <span class="right">4.66万</span>
                        </li>
                    </ul>
                    <div class="info">
                        <div class="tip">今<br>日<br>大<br>盘</div>
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
                            <img src="../assets/haibao.png"
                                alt="">
                            <span class="num"></span>
                            <p style="margin-top: 50px;">航海王: 红发歌姬</p>
                            <p>上映时间: 2022</p> <span class="right">2839376人想看</span>
                        </li>
                        <li class="item two" style="margin-right: 15px;">
                            <img src="../assets/haibao.png"
                                alt="">
                            <span class="num">2</span> 保你平安 <span class="right">2839376人想看</span>
                        </li>
                        <li class="item two">
                            <img src="../assets/haibao.png"
                                alt="">
                            <span class="num">3</span> 保你平安 <span class="right">2839376人想看</span>
                        </li>
                        <li class="item">
                            <span class="num">4</span> 绝望主妇 <span class="right">2839376人想看</span>
                        </li>
                        <li class="item">
                            <span class="num">5</span> 绝望主妇 <span class="right">2839376人想看</span>
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
                            <img src="../assets/haibao.png"
                                alt="">
                            <span class="num"></span> 航海王：红发歌姬 <span class="right">9.6分</span>
                        </li>
                        <li class="item">
                            <span class="num" style="color:#E61111;">2</span> 航海王：红发歌姬 <span class="right">9.6分</span>
                        </li>
                        <li class="item">
                            <span class="num" style="color:#E61111;">3</span> 航海王：红发歌姬 <span class="right">9.6分</span>
                        </li>
                        <li class="item">
                            <span class="num">4</span> 航海王：红发歌姬 <span class="right">9.6分</span>
                        </li>
                        <li class="item">
                            <span class="num">5</span> 航海王：红发歌姬 <span class="right">9.6分</span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import {getMovie} from '@/request/index'
export default {
    name: 'IndexView',

    data() {
        return {
           listIn:[],
           listSoon:[],
           listTop:[] 
        };
    },

    mounted() {
        this.getMovieLs();
    },

    methods: {
        async getMovieLs(){
            let res1=await getMovie(0);
             let res2=await getMovie(1);
              let res3=await getMovie(2);
             this.listIn = res1.data.data.list;
              this.listSoon = res2.data.data.list;
               this.listTop= res3.data.data.list;
        },
          reload(e){
        e.target.src='https://ts2.cn.mm.bing.net/th?id=OIP-C.wqav1TrfiQ_dc8W4NMa-FwHaFE&w=301&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2'
    }
    },
  
};
</script>

<style src='../css/index.css' scoped>

</style>