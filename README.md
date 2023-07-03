# worm_movie
## 项目准备
1.在views文件夹下添加IndexView,ListView,DetailView,LoginView,MineView,TrailerView组件
2.src下新建request文件夹；http.js中填写封装的axios请求；movie.js和user.js分别是电影接口和用户接口的请求函数；在index.js中集体导出
3.src下新建utils文件夹；config.js文件中存放axios请求的基地址
4.src下新建css文件夹存放css样式文件；
5.图片资源文件存放在assets文件夹下
6.在router/index.js中书写对应路由表；layout的子路由页面有index首页，list榜单页，movie-detail电影详情页，mine个人信息页；layout同级的路由页面有login登录注册页,trailer预告片页
7.LayoutView.vue中书写公共头部和尾部
## index主页
