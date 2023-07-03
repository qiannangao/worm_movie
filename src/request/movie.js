import axios from './http'
// 获取电影信息
function getMovie(type,page={start:1,limit:8}){
    let arr=['in_theaters','coming_soon','top250']
    return axios({
        url:'/movie/'+arr[type],
        data:page
    })
}
// 根据mid获取电影详情
function getDetail(mId){
    return axios({
        url:'/movie/subject',
        data:{
            mId
        }
    })
}
// 获取演员信息
function getActor(playerId){
    return axios({
        url:'/movie/playerInfo',
        data:{
            playerId
        }
    })
}
// 根据mId获取预告片
function getTrailer(mId){
    return axios({
        url:'/movie/findPreviewByMid',
    data:{
        mId
    }
    })
}
export {
    getMovie,getDetail,getActor,getTrailer
}