# worm_movie
## 整体介绍
+ 本网站是基于vue2的仿豆瓣电影的虫虫电影网站；整体包含电影主页，榜单页，电影详情，登录注册，个人信息页。
 - 整体使用了一个layout布局，公共头部和底部是写了两个组件；首页分为三个类型的模块，模块内容是写在一个子组件内，通过父子传值实现内容渲染，模块内容中电影列表项的不同部分是写了一个插槽。从首页跳转到榜单页可以在头部的导航栏和模块中的“全部”切换，使用params动态传参
 - 榜单页也是展示了三个模块的内容，点击顶部tab栏使用params动态传参，在组件内使用导航守卫监听，实现不同模块的数据的切换；底部分页切换是写了一个分页组件作为全局组件引入，通过父子传参实现数据切换
 - 点击榜单页内电影列表项目切换到电影详情页，渲染数据
 - 登录页点击登录后跳转至个人信息页，包含上传头像和修改信息功能；
 - 个人信息页不同模块是写的mine页面的子路由；头像和公共头部的头像是使用了vuex，实现数据共享
 - 个人信息中的数据是双向绑定data中的数据，更新信息后再次刷新页面数据也已经渲染了最新的
 - 

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

 ### Mine 
 + info个人信息页
  - 在mine下添加info，manage子路由
  - info页面下调用getUser获取用户信息，渲染到页面上
  - info页面下调用updateUser更新用户信息
  - 修改密码：点击修改按钮调用updatePwd函数，传入参数并修改成功
  - 更新头像：。。。
    + store下添加user模块，书写changeAvatar函数;InfoView和HeadView中导入辅助函数;InfoView下的mounted中直接调用changeAvatar函数，传递user中的avatar作为参数
    + 头像预览；。。
 + manage用户管理页


### 分页组件
 + components下新建PageCom全局组件，在main.js中注册PageCom组件，即可在全局的页面中使用。
  - 传递total总页数和current属性。
  - current的值是点击的当前页面。获取current的值有两种方法；(1)给li添加点击事件，向父组件传递当前的n值(分页器的内容)
  (2)在子组件标签上传递current属性后面加上sync修饰符，在子组件更改该属性值的时候传一个this.$emit('update:修改的属性名', 修改的值);
+ 上一页。。。。

### 问题
 + 渲染正常页面报错的问题：数据没有默认值(当页面数据还未加载时，页面已经开始渲染，于是控制台报错。使用v-if标签，当存在数据属性时代表数据加载完成了，这时渲染不会报错)
 + 图片数据加载失败，控制台才报错，这时才调用error处理函数
 + ManageView导入baseURL报错。原因是导入的变量不属于当前实例的私有属性，需要在data中注册该变量