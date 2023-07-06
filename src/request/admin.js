import axios from './http'
import { getUser } from './user'

// 获取用户列表
function getUserList(data={start:1,limit:10}) {
   return axios({
      url: '/admin/getUserList',
      data
   })
}
export { getUserList }