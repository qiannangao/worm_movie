<template>
  <div class="content">
    <div class="con-title">基本信息</div>
    <div class="con-list">
      <!-- 根据用户选择的tab导航,切换这一部分内容 -->
      <!-- 基本信息 -->
      <div class="con info">
        <div class="bg">
          <img :src="avatar" class="img-rounded" alt="" />
          <label for="file-avatar" class="btn">更换头像</label>
          <input
            type="file"
            id="file-avatar"
            style="display: none"
            @change="preview"
          />
          <span> 图片支持jpg ;jpeg;png格式 且小于1mb </span>
        </div>
<div class="img-mask" v-show="isPreview"> 
<div class="mask-content">
  <img class="preview" :src="previewSrc" alt="">
  <button class="sure" @click="uploadAvatarLs">确认</button>
  <button>取消</button>
</div>
</div>
        <!-- 表单 -->
        <form class="form-horizontal">
          <div class="form-group">
            <label for="username" class="col-sm-2 control-label">用户名</label>
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
            <label for="nickname" class="col-sm-2 control-label">昵称</label>
            <div class="col-sm-10">
              <input
                v-model="user.nikename"
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
            <label for="birthday" class="col-sm-2 control-label">生日</label>
            <div class="col-sm-10">
              <input
                v-model="user.birthday"
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
              <span class="changepwd" @click="isEdit = true">修改密码</span>
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
            <label for="sign" class="col-sm-2 control-label">个性签名</label>
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
              <div class="save" @click="updateUserLs">保存</div>
            </div>
          </div>
        </form>
      </div>
      <div class="mask" v-show="isEdit" @click.self="isEdit = false">
        <div class="center">
          <p class="title">
            修改密码
            <span class="pwd-close" @click="isEdit = false"></span>
          </p>
          <input
            type="password"
            v-model="password"
            placeholder="请输入原密码"
            class="form-control"
          />
          <input
            type="password"
            v-model="newPassword"
            placeholder="请输入新密码"
            class="form-control"
          />
          <input
            type="password"
            placeholder="请输入新密码"
            v-model="newPassword2"
            class="form-control"
          />
          <button class="pwd-btn" @click="changepwd">修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getUser,
  updateUser,
  updateAvatar,
  updatePwd,
  uploadAvatar,
} from "../../request/index";
// 导入辅助函数
import { mapMutations, mapState } from "vuex";
import { baseURL } from "@/utils/config";
export default {
  name: "InfoView",

  data() {
    return {
      user: {},
      isEdit: false,
      password: "",
      newPassword: "",
      newPassword2: "",
      file: null,
      isPreview:false,
      previewSrc:''
    };
  },
  computed: {
    ...mapState("user", ["avatar"]),
  },

  mounted() {
    this.getUserLs();
    
  },
  created() {
    this.changeAvatar(baseURL + this.user.avatar);
  },
  methods: {
    ...mapMutations("user", ["changeAvatar"]),
    async getUserLs() {
      let res = await getUser();
      console.log("获取到用户信息的返回值", res);
      this.user = res.data.data;
    },
    async updateUserLs() {
      this.user.id = this.user.id + "";
      this.user.sex += "";
      let res = await updateUser(this.user);
      console.log("更新用户信息成功的返回值", res);
      if (res.data.success) {
        alert("用户信息更新成功");
      }
    },
    async changepwd() {
      if (this.newPwd == this.newPwd2) {
        let res = await updatePwd({
          username: this.user.username,
          password: this.password,
          newPassword: this.newPassword,
        });
        console.log(res);
        if (res.data.success) {
          alert("修改成功");
          this.isEdit = false;
        }
      } else {
        alert("两次密码不一致");
      }
    },
    // 预览头像
    preview(e) {
      let file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        alert("文件大于2M");
      }
      if (!/image/.test(file.type)) {
        alert("文件的类型不符");
        return;
      }
      // 将文件转换为base64格式
      let fileReader = new FileReader();
      fileReader.onload = () => {
        this.previewSrc = fileReader.result;//结果
      };
      fileReader.readAsDataURL(file);
      console.log('转换后的file文件',this.previewSrc);
      // 预览头像时开启弹窗
      this.isPreview=true;//开启弹窗
      this.file=file
    },
    async uploadAvatarLs() {
      let res = await uploadAvatar(this.file);
      console.log('上传头像的返回值',res);
      if(res.data.success){
         this.isPreview=false;
        // 更新成功，改变头像
        this.changeAvatar(baseURL+res.data.data.avatar)
        // console.log(baseURL+res.data.data.avatar);
       
      }
    },
  },
};
</script>

<style src="../../css/mine.css" scoped>
</style>