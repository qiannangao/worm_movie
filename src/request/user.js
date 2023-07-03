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
// 更新头像
function updateAvatar(file){
    let formData=new FormData();
    formData.append('file',file);
    return axios({
        method:'post',
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
export{Login,Register,getUser,updateAvatar,updateUser}
