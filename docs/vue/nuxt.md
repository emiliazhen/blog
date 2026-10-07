---
title: nuxt
date: 2018-12-27
category:
  - vue
  - nuxt
icon: nuxt
---

## 安装

```powershell
vue-init nuxt-community/starter-template dddname
npm install
npm run dev

npm i vue-cli -g
vue init nuxt/starter # 初始化Nuxt.js项目
```

## 目录结构

- `assets`资源目录 用于组织未编译的静态资源如`LESS`/`SASS`/`JS`
- `components`组件目录 用于组织应用的 Vue.js 组件
- `layouts`布局目录 用于组织应用的布局组件
- `middleware`中间件目录 用于存放应用的中间件
- `pages`页面目录 用于组织应用的路由及视图，`Nuxt.js`框架读取该目录下所有的`.vue`文件并自动生成对应的路由配置
- `plugins`插件目录 用于组织那些需要在根`vue.js`应用实例化之前需要运行的 js 插件
- `static`静态文件目录 用于存放应用的静态文件，此类文件不会被`Nuxt.js`调用`webpack`进行构建编译处理。服务器启动的时候该目录下的文件会映射至根路径下
- `store`用于组织应用的 Vuex 状态树文件。`Nuxt.js`框架继承了`Vuex`状态树的相关功能配置，在`store`目录下创建一个`index.js`文件可激活这些配置
- `nuxt.config.js`文件用于组织`Nuxt.js`应用的个性化配置，以便覆盖默认配置。
- `package.json`文件用于描述应用的依赖关系和对外暴露的脚本接口

### nuxt.config.js

- `head`:对应`html`中的`head`标签
- `loading`:上方进度条颜色
- `build`:`build`配置，loaders..

## 配置端口

在`package.json`中添加

```json
"config": {
  "nuxt": {
     "host": "127.0.0.1",
     "port": "8099"
  }
},
```

## 配置全局 CSS

`/asset/css/normailze.css`
`/nuxt.config.js`

```json
css:  ['~assets/css/normalize.css'],
```

## 配置 webpack 的 loader

在`nuxt.config.js`里是可以对`webpack`的基本配置进行覆盖的

```json
build: {
  loaders: [
    {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: "url-loader",
      query: {
         limit: 10000,
         name:"img/[name].[hash].[ext]"
       }
     }
   ],
}
```

## 路由

`Nuxt.js`的路由给我们进行了封装，让我们省去了很多配置环节
在`/page`里新建文件夹，并写入`index.vue`文件

```vue
<nuxt-link to="/">Home</nuxt-link>
<nuxt-link :to="{ name: 'news', params: { newsId: 3 } }">News</nuxt-link>
<nuxt-link to="/about/12">About</nuxt-link>
```

`$route.params.newsId`

### 动态路由

在 news 文件夹下新建`_id.vue`,以下划线前缀的`vue`文件就是动态路由，然后可以在该文件用`$route.params.xx`来接收参数

```vue
<nuxt-link to="/news/123">news</nuxt-link>
<nuxt-link to="/news/error">news</nuxt-link>
<nuxt-link :to="{ name: 'news-id', params: { id: 5 } }">News</nuxt-link>
```

### 动态参数校验

对参数传递的正确性校验，`Nuxt.js`准备了校验方法`validate()`，返回`false`则进入`404`页面

```js
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
}
```

### 路由动画效果

全局路由动画
在`/assets/css/a.css`，然后配置全局样式

```css
.page-enter-active,
.page-leave-active {
  transition: opacity 2s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
```

单独设置页面动画效果

1. 在全局样式中添加自定义命名的动画样式

```css
.single-enter-active,
.single-leave-active {
  transition: all 2s;
  font-size: 12px;
}
.single-enter,
.single-leave-active {
  opacity: 0;
  font-size: 40px;
}
```

2. 在对应 index.vue 页面使用

```js
export default {
  transition: 'single',
}
```

## 默认模版

`Nuxt`为我们提供了默认模版定制方法，只要在根目录下创建`app.html`就可以实现了
`{{HEAD}}`读取`nuxt.config.js`里的信息，`{{APP}}`就是我们写的`pages`文件夹下的主体页面

```xml
<!DOCTYPE html>
<html lang="en">
  <head>
     {{HEAD}}
  </head>
  <body>
     <p>111 TOP 111</p>
     {{APP}}
  </body>
</html>
```

## 默认布局

默认布局主要针对于页面的统一布局使用，位置在`/layouts/default.vue`，`<nuxt/>`为我们每个页面的内容

```vue
<template>
  <div>
    <p>hhhh top</p>
    <nuxt />
  </div>
</template>
```

## 建立错误页面

在`/layout`文件夹下新建`error.vue`文件

```vue
<template>
  <div>
    <h2 v-if="error.statusCode === 404">404页面，您需要的页面没有找到</h2>
    <h2 v-else>500页面，服务器错误</h2>
  </div>
</template>
<script>
export default {
  props: ['error'],
}
</script>
```

## meta 设置

需要对每个页面都有不同的`title`和`meta`设置，直接使用`head`方法来设置当前页面的头部信息

```js
data () {
  return {
    title: 'news'
  }
},
head () {
  return {
    title: this.title,
    meta: [
      {hid: 'description', name: 'news', content: 'This is news page'}
    ]
  }
}
```

## asyncData 方法获取数据

`Nuxt.js`添加了`asyncData`方法在渲染组件之前异步获取数据
由于`asyncData`方法是在组件初始化前被调用的，所以在方法内是没有办法通过`this`来引用组件的实例对象

```powershell
npm install axios -S # 安装axios
```

```js
import axios from 'axios'
···
asyncData () {
  return axios.get('http://xxx.com/api')
  .then(res => {
     return {info:res.data}
  })
}
···
{{info.name}}
```

现在都使用`async...await`来解决异步

```js
async asyncData () {
   let data = await axios.get('http://xxx.com/api/xx')
   return {info:data}
}
```

## 静态资源

`Nuxt.js`提供了根路径`~`,引用资源时，使用`~/static/img`

## 全局引入 Element-UI

1. 安装

```powershell
npm i element-ui -S
```

2. 在`/plugins`文件夹新建`ElementUI.js`文件

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
```

3. 在`nuxt.config.js`中添加配置，把`axios.element-ui`打包到`vendor.js`中

```json
plugins: [
 {
  src: '~/plugins/ElementUI',
  ssr: true
 }
],
css: ['~assets/css/normalize.css', 'element-ui/lib/theme-chalk/index.css'],
build: {
  vendor: ['axios','element-ui']
}
```

## extendRoutes

在`nuxt.config.js`中通过`extendRoutes`配置项来扩展`Nuxt.js`生成的路由配置

```js
router:{
  extendRoutes(routes){
    routes.push({
      name: '',
      path: '/login',
      component:resolve(__dirname,'pages/login')
    })
  }
},
```

## SSR

`Server Side Render`服务端渲染，在没有`SPA`之前，绝大多数的网页都是通过服务器渲染生成的：用户向服务器发送请求，服务器获取请求，然后再查询数据库，根据查询的数据动态的生成一张一张网页，最后将网页内容返回给浏览器端

## no-ssr

```xml
<no-srr>xxx</no-srr>
```

## Window 或 Document 对象未定义

```js
if (process.browser) {
  require('xxx')
  window.xxx = {..}
}
```

## 更改当前页的描述 meta 标签

在应用配置文件`nuxt.config.js`中配置默认`meta`

```js
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
  title: 'AAA系统',
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'AAAAA系统' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  ···
}
```

在页面中利用 hid 来覆盖指定的`meta`配置

```js
export default {
head () {
  return {
    title: '购物车',
    meta: [{
      hid: 'description', name: 'description', content: '购物车'
    }]
  }
},
```

## 封装 SEO 处理

1. 在`plugins`目录下新建`globalSEO.js`

```js
import Vue from 'vue'
Vue.mixin({
  methods: {
    $seo(title, content, payload = []) {
      return {
        title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content,
          },
        ].concat(payload),
      }
    },
  },
})
```

2. 在`nuxt.congfig.js`

```js
plugins: [ '~plugins/globalSEO'],
```

3. 在`pages`页面中

```js
head () {
return this.$seo('购物车-在线订货系统' + (!this.$store.state.carTotal ? '' : ' ( '+ this.$store.state.carTotal +' )'),'购物车')
},
```

## server

```js
const { Nuxt, Builder } = require('nuxt')
const opn = require('opn')
const express = require('express')
const app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 8089
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.set('port', port)
// Start nuxt.js
async function start() {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config)
  // Add nuxt.js middleware
  app.use(nuxt.render)
  // Build in development
  if (config.dev) {
    try {
      const builder = new Builder(nuxt)
      await builder.build()
    } catch (error) {
      // eslint-disable-line no-console
      console.error(error)
      process.exit(1)
    }
  }
  // Listen the server
  app.listen(port, host)
  const _url = 'http://' + host + ':' + port
  // eslint-disable-line no-console
  console.log('Server listening on ' + _url)
  opn(_url)
}
start()
```

## Nuxt 部署

`nuxt`是`ssr`方式，不能指定静态文件根目录
在根目录新建 `.dockerignore`

```powershell
#node_modules
#.nuxt
```

在根目录新建 `Dockerfile`

```powershell
FROM node:8.9.1
MAINTAINER stark.wang
ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /app
COPY . /app
WORKDIR /app
EXPOSE 3000
#If the environment in China build please open the following comments
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
RUN npm run build
CMD ["npm", "start"]
```

然后在服务端打镜像

```powershell
# build image
$ docker build -t nuxt-demo .
# serve at localhost:8080
$ docker run -dt -p 8080:3000 nuxt-p
```

## 编辑

this.$set()

## 中间件实现拦截

`~/middleware/auth.js`

```js
import utils from '~/utils/utils'
export default function ({route, req, res, redirect}) {
let isClient = process.client;
let isServer = process.server;
let redirectURL = '/login';
var token, path
//在服务端
if (isServer) {
  let cookies = utils.getcookiesInServer(req)
  path = req.originalUrl;
  token = cookies.token ? cookies.token : ''
}
//在客户端判读是否需要登陆
if (isClient) {
  token = utils.getcookiesInClient('token')
  path = route.path;
}
if (path) {
  redirectURL = '/login?ref=' + encodeURIComponent(path)
}
//需要进行权限判断的页面开头
if (!token) {
  redirect(redirectURL)
}
```

`~/utils/utils`

```js
import Cookie from 'js-cookie'
export default {
  // 获取服务端cookie
  getCookiesInServer: function (req) {
    let service_cookie = {}
    req &&
      req.headers.cookie &&
      req.headers.cookie.split(';').forEach((val) => {
        let parts = val.split('=')
        service_cookie[parts[0].trim()] = (parts[1] || '').trim()
      })
    return service_cookie
  },
  // 获取客户端cookie
  getCookiesInClient: function (key) {
    return Cookie.get(key) ? Cookie.get(key) : ''
  },
}
```

最后运用到项目中，
在`nuxt.config.js`，全局

```js
router: {
  middleware: 'auth'
}
```

或者单页面`pages/user/setting.vue`中

```js
export default {
  middleware: 'auth',
}
```

## nuxtServerInit

如果在状态树中指定了`nuxtServerInit`方法，`Nuxt.js`调用它的时候会将页面的上下文对象作为第`2`个参数传给它，当我们想将服务端的一些数据传到客户端时，这个方法是非常好用的

```js
actions: {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session.user) {
      commit('user', req.session.user)
    }
  }
}
```

## fetch

用于在渲染页面前填充应用的状态树数据，与`asyncData`方法类似，不同的是他不会设置组件的数据

```js
export default {
  fetch({ store, redirect }) {
    if (!store.state.access_token) {
      return redirect('/')
    }
  },
}
```
