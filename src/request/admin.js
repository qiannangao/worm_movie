import axios from './http'
import { getUser } from './user'

// 获取用户列表
function getUserList(data={start:1,limit:10}) {
   return axios({
      url: '/admin/getUserList',
      data
   })
}

function delUser(userId){
   return axios({
     url: '/admin/delUser',
     method: "DELETE",
     data: { userId }
   })  
 }
 
 function editAuth(isOpen, username){
   return axios({
     url: '/admin/' + (isOpen ? 'unlockUser' : 'lockUser'),
     method: 'POST',
     data: {username}
   })
 }
export { getUserList,delUser,editAuth }