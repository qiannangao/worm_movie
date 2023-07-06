export default {
    namespaced: true,
    state: {
        avatar:localStorage.getItem('avatar')|| require('@/assets/avatar.png')
    },
    mutations: {
        // 第一个参数是state，第二个参数是传进来的参数
        changeAvatar(state, newAvatar) { 
            //刚进页面时user中的avatar为空。当传进来的参数不存在时，使用本地图片
          state.avatar=newAvatar||require('@/assets/avatar.png');
        //   vuex刷新时值会还原，所以将值存储到本地
          localStorage.setItem('avatar',newAvatar)
        }
    }
}