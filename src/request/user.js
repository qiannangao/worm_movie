// 存放用户相关请求
import axios from './http'
// 获取用户信息
function getUser(){
    return axios({
        url:'/user/getUserInfo',
    })
}
// 登录
function Login(data){
    return axios({
        method:'post',
        url:'/user/login',
        data
    })
}
// 注册
function Register(data){
    return axios({
        method:'post',
        url:'/user/register',
        data
    })
}
// 上传头像
function uploadAvatar(file){
    let formData=new FormData();
    formData.append('file',file);
    return axios({
        method:'POST',
        url: '/user/uploadAvatar',
        data:formData
    })
}
// 更新用户信息
function updateUser(user){
    return axios({
        method:'post',
        url: '/user/updateUserInfo',
       data:user
    })
}
// 修改密码
function updatePwd(info){
    return axios({
        method:'POST',
    url:'/user/resetPassword',
    data:info
    })
}

export{Login,Register,getUser,uploadAvatar,updateUser,updatePwd}
