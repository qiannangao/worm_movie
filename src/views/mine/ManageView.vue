<template>
  <div class="content" v-if="userList">
    <div class="admin">
      <div class="manage-title">
        用户管理
        <div class="fr search">
          查询状态：
          <select>
            <option value="">全部</option>
            <option value="1">可用</option>
            <option value="0">不可用</option>
          </select>
          查询用户名：
          <input type="text" />
        </div>
      </div>
      <table>
        <tr class="table-title">
          <th>#</th>
          <th>头像</th>
          <th>用户名</th>
          <th>密码</th>
          <th>昵称</th>
          <th>性别</th>
          <th>电话</th>
          <th>添加时间</th>
          <th>是否可用</th>
          <th>删除</th>
        </tr>
        <tr v-for="(user, i) in userList" :key="user.id">
          <td>{{ i + 1 }}</td>
          <td class="avatar">
            <img :src="baseURL + user.avatar" alt="" @error="reload">
          </td>
          <td>{{ user.username }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.nikename }}</td>
          <!-- 但凡对数据进行处理，推荐使用 过滤器 -->
          <td>{{ user.sex | toStr }}</td>
          <td>{{ user.tel }}电话</td>
          <td>{{ user.addtime }}</td>
          <td><input type="checkbox" v-model="user.available" /></td>
          <td>
            <img @click="(delShow = true, delId = user.id)" src="@/assets/del.png" alt="" />
          </td>
        </tr>
      </table>
      <div class="manage-mask" v-show="delShow">
        <p>确定要删除吗？</p>
        <button @click="sure">yes</button>
        <button @click="delShow=false">no</button>
      </div>
      <PageCom :total="total" :current="start" @page="reList"></PageCom>
    </div>
  </div>
</template>

<script>
import { getUserList } from "../../request/index";
import { baseURL } from "@/utils/config";
import {delUser} from '../../request/admin'
export default {
  name: "ManageView",

  data() {
    return {
      userList: {},
      total: 0,
      start: 1,
      baseURL,
      delShow:false,
       delId: '',
    };
  },
  filters: {
    toStr(sex) {
      return sex == 0 ? "男" : "女";
    },
  },
  mounted() {
    this.getLs();
  },

  methods: {
    async getLs() {
      console.log(this.start);
      let res = await getUserList({ start: this.start, limit: 10 });
      console.log("个人信息/管理的数据", res);
      this.userList = res.data.data.list;
      this.total = res.data.data.totalPage;
      
    },
    reList(start){
      this.start=start;
      this.getLs()
    },
    reload(e){
e.target.src=require('@/assets/avatar.png')
    },
     async sure(){
      // this.delShow=true
      let res = await delUser(this.delId + '')
      this.delShow = false;
      console.log('删除',res);
      if(res.data.success){
        alert('删除成功');
        this.getLs()
      }else {
        alert('删除失败');
      }
    },
  },
};
</script>

<style src='../../css/mine.css' scoped>
</style>