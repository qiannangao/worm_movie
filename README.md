# worm_movie
## 项目结构
+  / => layout页面(包含公共头部和底部)
  -  / => 主页
  - /list  => 榜单页
  - /detail => 电影详情页
  - /mine => 个人信息页
    + /mine/info 
    + /mine/manage
+ /login => 登录注册页

+ request 请求文件夹
  - http.js => 封装的axios请求
  - movie.js => 封装电影接口的请求函数
  - user.js => 封装用户接口的请求函数
  - index.js => 集中导出函数

+ utils 
  - config.js => 存放axios请求的基地址

+ css  css样式文件夹

+ assets  静态资源文件夹（存放图片）

## 实现步骤
### 导航栏
 + 切换页面时给router-link添加激活样式：在route-link的css样式中设置背景色为主题色
 + 
   - 使用params动态参数传参时，导航栏的route-link的to属性只写/list，但会无法跳转，需要在路由表中添加/list重定向，点击/list路径时跳转至/list/0
   - 使用query静态参数传参，切换tab时路径只匹配？前面的路径，所以可以实现导航栏与tab同步切换；使用params动态传参时，切换tab会匹配整体路径，所以不能实现同步切换
  
### index主页
 + 传入getMovie函数;初始化渲染电影列表时调用getMovie函数并传入不同的参数

### list榜单页
 + 使用组件内导航守卫beforeRouteEnter，根据传进的type参数调用getMovie函数，（index页面中使用params动态传参，点击进入list页面时传递type参数）;使用v-for循环渲染列表数据;
  - tips:渲染数据遇到数组时使用过滤器进行分割;
  - 拆分数据一般使用自定义指令的形式，不在页面上直接拆分
 + 导航栏切换：导航项route-link点击时进行传参，使用组件内导航守卫beforeRouteUpdate监测type值的变化；点击对应导航项，修改type值，然后调用getMovie函数重新渲染数据
 + 分页器切换：？
 + 点击列表项跳转至detail页：使用params动态传参，跳转时传递movie.mId

 ### detail电影详情页
 + 使用组件内导航守卫beforeRouterEnter，进入detail页面时获取list页传进的mId，调用getDetail函数，用res渲染数据
 + 图片加载？
 + 预告片;根据movie.trailers渲染预告片内容，click时打开遮罩层；设置预告片切换按钮：click时传递索引值，对索引值增加/减少实现切换

 ### Login 登录注册页
 + 使用v-show绑定登录/注册按钮，点击切换按钮时调用change函数改变状态，控制登录/注册按钮的显示和隐藏
 + 使用v-model绑定表单输入框，调用Login和Register请求函数，将user作为参数传入
 + 
   - route/index.js下：在路由表mine路由下设置局部导航守卫； 跳转至我的信息页面先作判断，存在本地token则直接跳转;否则跳转到login页面并使用query传递静态参数from=/mine表示是从mine页面跳转来的
   - LoginView页面下：点击登录按钮跳转到来时的页面，由this.$route.query.from获取来时的页面参数
 + 正则。。。
 ### Mine 个人信息页
 + 在mine下添加info，manage子路由
 + info页面下调用获取getUser函数渲染数据...
 + 导航守卫判断token是否存在，传递路径。。。
 + 在info组件中，发送请求拿到信息渲染页面。。。
 + 点击保存，传入user,发送请求。。。
 + 修改密码：点击出现弹窗，。。。
### 问题
 + 渲染正常页面报错的问题：数据没有默认值(当页面数据还未加载时，页面已经开始渲染，于是控制台报错。使用v-if标签，当存在数据属性时代表数据加载完成了，这时渲染不会报错)

 + 图片数据加载失败，控制台才报错，这时才调用error处理函数