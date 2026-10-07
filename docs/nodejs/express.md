---
title: express
date: 2017-11-18
category: nodejs
icon: express-delivery
---

## art-template

1. 安装

```powershell
npm i art-template -S
```

2. 引入

```js
require('art-template')
```

3. 模版渲染数据

```js
const htmlStr = template('./../index.html', data)
res.end(htmlStr)
```

4. 渲染数据的页面字符串

## Express

基于`Node.js`后端`javascript`平台之上开发出来的一套`Web`开发框架。`Express`中基于原色`Node`的特性做了进一步封装，提供了一些更好用的方法，并且没有覆盖或者删除原生的`http`模块方法

1. 安装

```powershell
npm install express -S
```

2. 引入

```js
const express = require('express')
```

3. 创建服务器

```js
const app = express()
```

4. 根据不同的 url 地址和请求类型返回不同的类容

```js
app.get('/', (req, res) => {
  res.end('xxx')
})
app.post()
app.all()
res.send()
res.sendFile('./src')
返回静态资源文件
```

5. 监听

```js
app.listen(3000,function(){...})
```

### 托管静态资源

`express.static('静态资源目录')`是`express`内置中间件
`app.use(express.static('pubilc'); ` `app.use()`注册中间件
把指定目录托管为资源目录之后，那么这一层被托管的目录不应该出现在资源访问的`URL`地址中
在多次调用`express.static`的时候如果文件名称有重复的则以先注册的中间件为主
`app.use('./pubilc',express.static('./public'));`参数 1 为手动挂载一个路径标识符，访问`public`目录下的资源时路径中必须要包含我们为其挂载的那个路径标识符

```js
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
```

### compression 压缩

1. 安装

```powershell
npm i compression -S
```

2. 导入

```js
const compression = require('compression')
```

3. 注册压缩资源中间件

```js
app.use(compression())
```

### express 结合 ejs 模版 渲染动态页面

在调用`res.render()`函数之前需要指定模版引擎

1. 安装合适的模版引擎

```powershell
npm i ejs -s
```

2. 配置模版引擎

```js
app.set('view engine', 'ejs')
```

3. 配置模版页面存放路径

```js
app.set('views', './views') // 参数1固定写法 参数2路径
```

`res.render('index.ejs',data)` 参数 1 要渲染的页面，后缀可以省略 参数 2 数据对象

```js
const express = require('express')
const app = express()
const data = {
  name: 'zs',
  age: '18',
}
app.set('view engine', 'ejs')
app.set('views', './views')
app.get('/', (req, res) => {
  res.render('index.ejs', data)
})
app.listen('3000', () => {
  console.log('http://127.0.0.1:3000')
})
```

4.在.ejs 文件中，使用`<%=xxx%>`

```html
<body>
  <h2>111</h2>
  <%=name%> <%=age%>
</body>
```

### 创建路由对象

前端请求的`URL`地址都要对应一个后端的处理函数，这种`URL`地址到处理函数之间的对应关系就叫后端路由

1. 定义一个`router.js`文件，并导入`express`
2. `Express`对象调用`router `

```js
const router = express.Router()
```

3. 每个请求的处理函数以`router`来调用
4. 必须把`router`这个模块暴露出去这样别的文件才可以调用 `moudle.exports=router`

```js
const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
  res.send('index')
})
router.get('/movie.html', (req, res) => {
  res.send('movie')
})
router.get('/music.html', (req, res) => {
  res.send('music')
})
router.post('/api/postInfo', (req, res) => {
  console.log(req.body, 6666)
  res.send('获取的数据为' + JSON.stringify(req.body))
})
module.exports = router
```

5. 在主 js 文件中导入`rotuer.js`模块，注册`router`

```js
app.use(router)
```

## Mock

`serve.js`

```ts
const express = require('express')
const Mock = require('mockjs')
const path = require('path')
const userRoutes = require('./user/index.ts')
const PORT = 8019
const app = express()
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.use(express.static(path.join(__dirname, './images/')))
app.use('/user', userRoutes)
app.listen(PORT, () => {
  console.log(`---- Listen ${PORT} ----`)
})
```

`./user/index.js`

```ts
const express = require('express')
const Mock = require('mockjs')
const apiRoutes = express.Router()
const random = Math.random() * 500 + 500
apiRoutes.get('/test', function (req, res) {
  const { list } = Mock.mock({
    'list|5': [
      {
        'id|+1': 1,
        'name|1': ['tom', 'lily', 'jack'],
      },
    ],
  })
  setTimeout(() => {
    res.json({
      code: 200,
      msg: '操作成功',
      data: list,
      total: 5,
    })
  }, random)
})
module.exports = apiRoutes
```

### mock 生成规则

#### 属性值是 String

<table>
  <tr>
    <td>'name | min-max': string</td>
    <td>通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max</td>
  </tr>
  <tr>
    <td>'name | count': string</td>
    <td>通过重复 string 生成一个字符串，重复次数等于 count </td>
  </tr>
</table>

#### 属性值是 Number

<table>
  <tr>
    <td>'name | +1': number</td>
    <td>属性值自动加 1，初始值为 number。</td>
  </tr>
  <tr>
    <td>'name | min-max': number</td>
    <td>生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型 </td>
  </tr>
    <tr>
    <td>'name | min-max.dmin-dmax': number</td>
    <td>生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位 </td>
  </tr>
</table>

#### 属性值是 Boolean

<table>
  <tr>
    <td>'name | 1': boolean</td>
    <td>随机生成一个布尔值，值为 true 和 false 的概率均为 1/2</td>
  </tr>
  <tr>
    <td>'name | min-max': boolean</td>
    <td>随机生成一个布尔值，值为 boolean 的概率是 min / (min + max)，值为 !boolean 的概率是 max / (min + max)</td>
  </tr>
</table>

#### 属性值是 Object

<table>
  <tr>
    <td>'name | count': object</td>
    <td>从属性值 object 中随机选取 count 个属性</td>
  </tr>
  <tr>
    <td>'name | min-max': object</td>
    <td>从属性值 object 中随机选取 min 到 max 个属性</td>
  </tr>
</table>

#### 属性值是 Array

<table>
  <tr>
    <td>'name | 1': array</td>
    <td>从属性值 array 中随机选取 1 个元素，作为最终值</td>
  </tr>
  <tr>
    <td>name | +1': array</td>
    <td>从属性值 array 中顺序选取 1 个元素，作为最终值</td>
  </tr>
   <tr>
    <td>name | min-max': array</td>
    <td>通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max</td>
  </tr>
     <tr>
    <td>name | count': array</td>
    <td>通过重复属性值 array 生成一个新数组，重复次数为 count</td>
  </tr>
</table>

#### 属性值是 Function

<table>
  <tr>
    <td>'name': function</td>
    <td>执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。</td>
  </tr>
</table>

#### 属性值是 RegExp

<table>
  <tr>
    <td>'name': regExp</td>
    <td>根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串</td>
  </tr>
</table>

```js
Mock.mock({
    'regexp1': /[a-z][A-Z][0-9]/,
    'regexp2': /\w\W\s\S\d\D/,
    'regexp3': /\d{5,10}/
})
// =>
{
    "regexp1": "pJ7",
    "regexp2": "F)\fp1G",
    "regexp3": "561659409"
}
```

### 随机生成数据

| TYPE          | METHOD                                                                                |
| :------------ | :------------------------------------------------------------------------------------ |
| Basic         | boolean, natural, integer, float, character, string, range, date, time, datetime, now |
| Image         | image, dataImage                                                                      |
| Color         | color                                                                                 |
| Text          | paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle                |
| Name          | first, last, name, cfirst, clast, cname                                               |
| Web           | url, domain, email, ip, tld                                                           |
| Address       | area, region                                                                          |
| Helper        | capitalize, upper, lower, pick, shuffle                                               |
| Miscellaneous | guid, id                                                                              |

```js
Mock.mock({
  err: 0,
  data: {
    boo1: '@boolean', //随机获取boolean值
    img: '@image', //随机获取图片路径
    bg: '@image("300x300","#50b347","#fff","hello")', //大小、背景色、前景色、图片格式、图片文字
    name: '@name', //随机获取名字
    txt: '@cword(10,15)', //指定长度范围
    address: '@city(true)', //true生成省和市
    date: '@date(yyy-MM-dd hh:mm:ss)', //时间
  },
})
```

### mysql

安装

```powershell
npm i mysql -S
```

```js
const mysql = require('mysql')
const connect = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'test05',
})
app.post('/api/updatehero', (req, res) => {
  const sqlStr = 'update heros set ? where id = ?'
  connect.query(sqlStr, [req.body, req.body.id], (err, result) => {
    if (err) return res.json({ err_code: 1, message: '获取数据失   败', affectedRows: 0 })
    if (result.affectedRows !== 1) return res.json({ err_code: 1, message: '英雄不存在!', affectedRows: result.affectedRows })
    res.json({ err_code: 0, message: '更新成功', affectedRows: result.affectedRows })
  })
})
```

const sqlStr = 'insert into users set ?' ?表示占位符，将来需要具体的参数来填充
connect.query(sqlStr,data,(err,result)=>{ … }) 参数 1sql 语句,参数 2?的值

### 获取请求链接地址传递的参数

通过 get 请求时获取参数 `127.0.0.1:3000/index.html?a=1&b=2;`

```js
app.get('/index.html', (req, res) => {
  console.log(req.query)
  res.end('ok')
})
```

通过 get 请求时获取参数 `127.0.0.1:3000/getinfo/3/aa`

```js
app.get('/getinfo/:id/:name', (req, res) => {
  console.log(req.params)
  res.end('ok')
})
```

通过 pst 请求时获取参数 先下载并引入第三方`body-parser`

```js
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/postinfo2', (req, res) => {
  console.log(req.body)
  res.end(JSON.stringify(req.body))
})
```

### CROS 解决跨域问题

`jsonp`动态创建`script`标签，`src`指向`php`脚本，执行返回的`Js`代码;无法支持`post`请求
`cors`跨域资源共享，本质是使用 XHR 对象发送 ajax 请求来进行跨域的资源共享；如果要启用 cors 跨域资源共享，关键在于服务器端，只要服务器支持 cors 跨域资源共享则浏览器肯定能够正常反问这种 cors 接口，而且客户端在发送 ajax 的时候就像发送普通 ajax 一样，没有任何代码上的变化；对于 Node 来说，如果想要开启 cors 跨域通信只需安装 cors 的模块即可

```powershell
npm i cors -S
```

```js
const cors = require('cors')
app.use(cors())
```

## 快速实现 web 端前端接口调用

- `web`,`js`开启服务器
- 托管静态资源文件`app.use('/node_moudles',express.static('../node_modules'));`
- 托管静态页面 即加载`web,js`就让其去访问`index.html`
- 静态页面`index.html`引入`jquery`，发送`ajax`请求
- web,js 打开时也一定要先打开`ajax`请求地址的服务器
- `index.html`页面引入`art-template`渲染页面

## axios

安装

```powershell
npm i axios -S
```

引入 js

```js
axios('请求的url地址',参数id=1$name='zs').then(成功的回调).catch(失败的回调);
axios.get()
axios.post()
```

```js
$('#form').on('submit', function (e) {
  e.preventDefault() //阻止表单默认提交
})
```

## promise

- `Promise`是一个构造函数，可以`new Promise()`得到一个`Promise`的实例
- 在`Promise`上有`resolve()`成功后的回调函数和`reject()`失败后的回调函数
- 在`Promise`构造函数的`prototype`属性上有个`then()`方法
- `Promise`表示一个异步操作，每当我们`new`一个`Promise`的实例，这个实例就表示一个具体的异步操作
- `Promise`是一个异步操作，无法使用`return`把操作结果返回给调用者，只能使用回调函数的形式把成功或者失败的结果返回给调用者。异步成功了需要在内部调用回调函数`resolve`把结果返回给调用者，异步失败了需要在内部调用回调函数`reject`把结果返回给回调者
- 我们可以在 new 出来的`Promise`实例上调用`.then()`方法，为这个 Promise 异步操作地址成功`resolve`和失败`reject`的回调函数

```js
async foo(){
console.log(1)
let res = await this.timeOut()
console.log(res)
},
timeOut(){
return new Promise((resolve,reject) => {
  setTimeout(()=>{
    console.log(2)
    resolve('success!')
  },1000)
})
}
```

`.all`可以将多个`Promise`实例包装成一个新的`Promise`实例，同时成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，失败时返回最先被`reject`失败状态的值
`.race`里面哪个结果获得快，就返回哪个结果

```js
new Promise((resolve,reject) => {).then(res=>{}).catch(err=>{})
Promise.all([foo1(),foo2()])
Promise.race([foo1(),foo2()])
```

`const promise = new Promise( function(){..})` 实例只要被创建就会立即执行里面的异步方法
`promise.then(成功的回调,失败的回调) `一般只传成功回调然后接`.catch(失败的回调)`

## Node 环境变量

`process`对象是一个`global`全局变量，提供有关信息，控制当前`Node.js`进程。作为一个对象，它对于`Node.js`应用程序始终是可用的，故无需使用`require()`
`process.env`属性返回一个包含用户环境信息的对象

`caross-env` 提供一个设置环境变量的`scripts`,让你能够以`unix`方式设置环境变量，然后在`windows`上也能兼容运行

```powershell
npm i cross-env -D
```

```powershell
cross-env NODE_ENV = xxx
```
