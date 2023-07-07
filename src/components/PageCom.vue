<template>
  <div class="content">
    <div class="w">
      <div class="page clearfix">
        <div class="page-btn" @click="prev">《上一页</div>
        <span
          @click="edit(i)"
          :class="{ act: current == i }"
          class="num"
          href=""
          v-for="i in total"
          :key="i"
          >{{ i }}</span
        >

        <div class="page-btn" @click="next">下一页》</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageCom",
  props: ["total", "current"],
  data() {
    return {};
  },

  mounted() {},

  methods: {
    prev() {
      if (this.current == 1) {
        return;
      }
      // 将修改的事件发出去
      this.$emit("page", this.current - 1);
    },
    next() {
      if (this.current == this.total) {
        return;
      }
      // 将修改的事件发出去
      this.$emit("page", this.current + 1);
    },
    edit(n) {
      // 将修改的事件发出去
      this.$emit("page", n);
    },
  },
};
</script>

<style src='../css/list.css' scoped>
</style> 