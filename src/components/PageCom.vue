<template>
    <div class="content">
       <div class="w">
        <div class="page clearfix">
          <div class="page-btn" @click="prev">《上一页</div>
          <span @click="change(i)" :class="{act:current==i}" class="num" href=""  v-for="i in total"
            :key="i">{{i}}</span>
          
          <div class="page-btn" @click="next">下一页》</div>
        </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'PageCom',
props:['total','current'],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        change(i){
            console.log(i);
            this.$emit('update:current',i)
        },
        prev(){

        },
        next(){
            
        }
    },
};
</script>

<style src='../css/list.css' scoped>

</style> 