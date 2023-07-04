<template>
    <div>
        <!-- indexView的子组件 -->
         <div class="title">
                       <span>{{title}}</span>
                       <router-link :to="`/list/${type}`">全部></router-link>
                       
                    </div>
                    <ul class="list clearfix">
                        <li class="item" v-for="movie in list" :key="movie.mId">
                            <div class="cover">
                                <img :src="movie.medium"
                                    alt="" @error="reload">
                                <div class="cname">{{movie.title}}</div>
                            </div>
                            <!--slot使用子组件通过props拿刀父组件传来的数据，再将数据传给父组件  -->
                           <slot :year='movie.year' :many='movie.id'></slot>
                        </li>
                       
                    </ul>
    </div>
</template>

<script>
export default {
    name: 'IndexContent',
props:['type','title','list'],
    data() {
        return {
            
        };
    },

    mounted() {

    },

    methods: {
        reload(e){
        e.target.src='https://ts2.cn.mm.bing.net/th?id=OIP-C.wqav1TrfiQ_dc8W4NMa-FwHaFE&w=301&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2'
    }
    },
};
</script>

<style src='../css/index.css' scoped>

</style>