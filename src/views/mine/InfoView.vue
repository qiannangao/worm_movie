<template>
    <div class="content">
          <div class="con-title">基本信息</div>
          <div class="con-list">
            <!-- 根据用户选择的tab导航,切换这一部分内容 -->
            <!-- 基本信息 -->
            <div class="con info">
              <div class="bg">
                <img
                  src=""
                  class="img-rounded"
                  alt=""
                 
                >
                <label for="file-avatar" class="btn">更换头像</label>
                <input
                  type="file"
                  id="file-avatar"
                  style="display: none"
                />
                <span> 图片支持jpg ;jpeg;png格式 且小于1mb </span>
              </div>

              <!-- 表单 -->
              <form class="form-horizontal">
                <div class="form-group">
                  <label for="username" class="col-sm-2 control-label"
                    >用户名</label
                  >
                  <div class="col-sm-10">
                    <input
                      :value="user.username"
                      type="text"
                      class="form-control"
                      id="username"
                      disabled
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="nickname" class="col-sm-2 control-label"
                    >昵称</label
                  >
                  <div class="col-sm-10">
                    <input
                      :value="user.nickname"
                      type="text"
                      class="form-control"
                      id="nickname"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="col-sm-2 control-label">性别</label>
                  <div class="col-sm-10">
                    <label class="radio-inline">
                      <input
                        v-model="user.sex"
                        type="radio"
                        name="sex"
                        id="men"
                        value="0"
                      />
                      男
                    </label>
                    <label class="radio-inline">
                      <input
                        v-model="user.sex"
                        type="radio"
                        name="sex"
                        id="woman"
                        value="1"
                      />
                      女
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <label for="birthday" class="col-sm-2 control-label"
                    >生日</label
                  >
                  <div class="col-sm-10">
                    <input
                      v-model="user.birth"
                      class="form-control"
                      id="birthday"
                      type="date"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="pwd" class="col-sm-2 control-label">密码</label>
                  <div class="col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="pwd"
                      placeholder=""
                    />
                    <div class="eye">
                      <!-- <img src="./img/eyeopen.png" alt="" width="25px" height="25px"> -->
                      <img
                        src="@/assets/eyeclose.png"
                        alt=""
                        width="25px"
                        height="25px"
                      />
                    </div>
                    <span class="changepwd">修改密码</span>
                  </div>
                </div>
                <div class="form-group">
                  <label for="tel" class="col-sm-2 control-label">电话</label>
                  <div class="col-sm-10">
                    <input
                      v-model="user.tel"
                      type="text"
                      class="form-control"
                      id="tel"
                      placeholder=""
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="sign" class="col-sm-2 control-label"
                    >个性签名</label
                  >
                  <div class="col-sm-10">
                    <input
                      v-model="user.summary"
                      type="text"
                      class="form-control"
                      id="sign"
                      placeholder="20个字以内"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-sm-10">
                    <div class="save" >保存</div>
                  </div>
                </div>
              </form>
            </div>
            <!-- <div class="mask" >
                    <div class="center">
                    <p class="title">修改密码</p>
                    <input type="password" placeholder="请输入原密码" >
                    <input type="password" placeholder="请输入新密码" >
                    <input type="password" placeholder="请输入新密码" >
                    <button class="pwd-btn">修改</button>
                    </div> -->
          </div>
    </div>
</template>

<script>
import {getUser} from '../../request/index'
export default {
    name: 'InfoView',

    data() {
        return {
            user:{}
        };
    },

    mounted() {
        this.getUserLs();
    },

    methods: {
       async getUserLs(){
        let res=await getUser();
        console.log('获取到用户信息的返回值',res);
        this.user=res.data.data
       } 
    },
};
</script>

<style src="../../css/mine.css" scoped>

</style>