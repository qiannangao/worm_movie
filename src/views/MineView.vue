<template>
    <div>
         <div class="main">
        <div class="main-c clearfix">
            <div class="side">
                <div class="title">个人中心</div>
                <div>
                    <router-link class="tab-item" to="/mine/info" exact>基本信息</router-link>
                     <router-link class="tab-item" to="/mine/collect">我的收藏</router-link>
                      <router-link class="tab-item" to="/mine/comments">我的评论</router-link>
                       <router-link class="tab-item" to="/mine/manage">用户管理</router-link>
                   
                </div>

            </div>
           
               <router-view></router-view>
                <!-- 收藏 -->
                <!-- <div class="con collect" style="display: none;">
                    <ul class="list">
                        <li class="item">
                            <div class="top">
                                2022-12-18
                                <span class="del-icon"></span>
                            </div>
                            <div class="text clearfix">
                                <img src="" alt="">
                                <div class="cname">奇迹笨小孩</div>
                                <p>主演：萨姆·沃辛顿,佐伊·索尔达娜,米歇尔·罗德里格兹</p>
                                <p>上映时间：2021-10-10</p>
                                <a href="">查看详情</a>
                            </div>
                        </li>
                    </ul>
                    <div class="page">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                    </div>
                </div> -->
                <!-- 评论 -->
                <!-- <div class="con discuss" style="display: none;">
                    <ul class="list">
                        <li class="item">
                            <div class="top">
                                奇迹笨小孩
                                <span class="del-icon"></span>
                            </div>
                            <div class="text clearfix">
                                <img src="" alt="">
                                <div class="date">
                                    2022-12-28
                                    <div class="rate">
                                        <img src="@/assets/star.png" alt="">
                                        <img src="@/assets/star.png" alt="">
                                        <img src="@/assets/star.png" alt="">
                                    </div>
                                </div>
                                <div class="detail">
                                    我认为这是一部跟摔跤吧爸爸同层次的电影，忍到最后还是会流泪。生命很坚强也很脆弱，命与药的关系就是这么赤裸裸。（不良厂商做药设天价，没有良心，不合理，但是这在世界都是完全合法的，决定用这个药来牟取暴利还是济世度人是药商自己的权利，毕竟药是他们研发的。）之前刚看完在这里说不良厂商，还是刚看完有些不清醒了，其实不论他们的主观意愿是什么，都是他们的成果给了病人选择的希望。国家政府会把药纳入医保、发展制度、免除关税来降低病人的压力，我们个人也应该为诸如此类的研发事业做出贡献，比如为医学难题做出重大突破，等等各行各业，才能将未来将好东西做到平价(
                                    ¯ᒡ̱¯ )و
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="page">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                    </div>
                </div> -->
                <!-- 管理 -->
              
           
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'MineView',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style src="../css/mine.css" scoped>

</style>