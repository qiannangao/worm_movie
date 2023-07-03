// 封装axios请求
// 1 导入axios
import axios from 'axios'
import {baseURL} from '@/utils/config' 
// 2 创建实例
let instance = axios.create({
baseURL,
timeout: 6000
})
// 3.1 请求拦截
instance.interceptors.request.use(config => {
if(config.method.toUpperCase()=='GET'){
    config.params=config.data
}
// 设置全局的公共头部
var token=localStorage.getItem('token')
if(token){
    config.headers.Authorization = 'Bearer ' + token
}
  return config;
})
// 3.2响应拦截
axios.interceptors.response.use(response => {
return response.data;
}, error => {
// 提示什么错误的原因
 httpErrorStatusHandle(error)
 return { message: '请求失败了'
}
})
// 封装一个处理异常的函数
function httpErrorStatusHandle(error) {
 let message = '';
 if (error.response) {
// 有响应值（说明已请求），但状态码不对
    switch (error.response.status) {
       case 302: message = '接口重定向了';
           break;
       case 400: message = '参数不正确';
           break;
       case 401: message = '您未登录或登录已超时，请先登录'; break;
       case 403: message = '您没有权限操作！'; break;
       case 404: message = `请求地址出错: ${error.response.config.url
}`; break; // 在正确域名下
       case 408: message = '请求超时！'; break;
        case 409: message = '系统已存在相同数据！'; break;
        case 500: message = '服务器内部错误！'; break;
       case 501: message = '服务未实现！'; break;
        case 502: message = '网关错误！'; break;
        case 503: message = '服务不可用！'; break;
        case 504: message = '服务暂时无法访问，请稍后再试！'; break;
       case 505: message = 'HTTP版本不受支持！'; break;
       default: message = '异常问题，请联系管理员！'; break
}
} else if (error.message.includes('timeout')) {
   message = '网络请求超时'
} else if (error.message.includes('NetWork')) {
    message = window.navigator.onLine ? '服务端异常' : '您断网了'
}
}
export default instance