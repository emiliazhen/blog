---
title: api
date: 2017-11-06
category: nodejs
icon: node
---

## 全局 Path 环境变量

我的电脑-属性-系统属性-高级-环境变量-Path；设置路径将该位置暴露到全局

## Node.js

`Node`中`javascript`也有一个`ECMAScript`核心，`Node`中没有浏览器的概念，所有`BOM`和`DOM`在`Node`中不需要。  
`Node`中的`JS`组成部分`ECMAScrip`t 核心+全局成员+模块系统成员

- 全局成员 `console.log` `setTimeout` `setInterval`
- 模块系统成员 `Node`中的一些核心模块，提供了一些后端的编程能力

### Node.js 环境中执行 JS 代码的两种方式

- `REPL`环境
  打开任意终端，然后输入`node`并回车 就会进入到`REPL`环境中
  离开`REPL`环境：`ctrl+c`两次
  R:`Read` 读取，输入完毕代码后只要回车 Node 环境就会读取用户输入的代码
  E:`Evaluate` 解析执行，把 Read 进来的代码调用类似于 Eval 的函数去解析执行
  P:`Print` 输出，把解析执行的结果输出给用户
  L:`Loop` 循环，输出完毕后进入下一次的 REP 循环
- `Node`命令执行 js 文件 `node ./要执行的js文件路径`  
  `cls`清屏
  `Nodemon`

### node 版本管理

暂时只用过`fnm`，使用`rust`编写，可跨平台。  
下面介绍`fnm`在`window`下使用

- 安装

```powershell
choco install fnm
```

- 配置文件

在`powershell`输入命令`$PROFILE`打印出配置地址后，打开对应文件，加入下面这行并保存

```powershell
fnm env --use-on-cd | Out-String | Invoke-Expression
```

- 使用

```powershell
# 查看版本
fnm --version
# 安装最新长期稳定版
fnm install --lts
# 安装指定版本
fnm install 14.18.0
# 已安装列表
fnm ls
# 切换默认版本
fnm default 14.18.0
node -v
# 卸载node版本
fnm uninstall 12.17.0
```

> [!tip]  
> `npm`全局包建议每次都装到最新版本下，使用时切换到该版本使用。

## Node.js API

### fs 模块

```js
const fs = require('fs')
fs.readFile(pathStr, 'utf-8', callback(err, dataStr)) // 文件读取
fs.writeFile(pathStr, 'content', callback(err)) // 文件写入
fs.copyFile(copyPath, copyToPath, callback(err)) // 复制
fs.appendFile(pathStr, 'content', callback(err)) // 追加内容
```

#### fs 模块中路径

`__dirname;`当前文件所在的目录`name`;当前文件的完整路径

```js
const path = require('path')
path.join(__dirnane, './demo/d1.js') // 来解决;
```

### path 模块

```js
path.join([…paths]);// 用平台特定的分隔符将path片段连接到一起生成规范化路径
path.sep // 提供了平台特定的路径片段分隔符  'b\\a/c'.split(path.sep);  //['b','a','c']
path.basename(path[,ext]);  // 返回path的最后一部分
path.dirname(path)  // 返回路径的目录名
path.extname(path)  // 返回文件的后缀名
```

### commonjs

commonjs 是为了实现 javascript 的模块化而制定的一套规范

```js
require // 模块引用      const m1= require('./m/m1.js');const m2 =require('./m/m2.js')
exports // 模块定义     在m1.js和m2.js中暴露  module.exports.a = a;
module // 模块标识     console.log(m1,m2)
```

node.js 中没有`window`全局对象，替代的是`global`对象

### 模块分类

- 核心模块（由 Node 官方提供的好用模块）
  require('核心模块标识符')

- 第三方模块（非官方提供的模块）
  - 在 npm 官网上下载指定的第三方模块
  - 使用 require('第三方模块的名称标识符')来导入模块
  - 根据第三方模块文档使用
- 用户自定义模块（程序员自己写的 JS 文件）
  requeire('路径标识符')

## Packages

方便分发推广基于 CommonJS 规范实现的应用程序或类库，可以看作是模块、代码和其他资源组合起来形成的独立作用域
包都要以一个单独的目录存在，`package.json`必须在包的顶层目录下，必须符合`JSON`格式，并且必须有`name`、`version`、`main`(入口文件)三个属性

## 全局安装和卸载 NPM 包

node package manager
安装

```powershell
npm install i5ting_toc -g
# 用i5ting_toc将md文档转为html
i5ting_toc -f ./xx.md -o
```

卸载

```powershell
npm uninstall i5ting_toc -g
```

## 安装和卸载本地包

```powershell
# 先初始化配置文件
npm init -y
# 安装指定的包本地安装包 缩写-S
npm i jquery --save
```

`package-lock.json`文件里记录了曾经装过的包的下载地址，方便下次直接下载包
| 命令| 标识| 说明 |
| :----------------------- | :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
|--save --production| 上线 | 依赖于 dependencies，表示项目上线部署时候需要的依赖项|
|--save-dev 缩写-D| 测试开发| 依赖于 devDependencies，表示项目在开发阶段需要的依赖项|

```powershell
## 快速装包会检查package.json文件中所有依赖项
npm i
##只安装dependencies节点下记录的包
npm i --prodiction
```

## 解决 npm 下载慢的问题

`nrm` 里面记录了好多下载`npm`包的服务器地址

```powershell
# 查看所有可用的服务器列表
nrm ls
# 切换下载包时候的服务器地址
nrm use 服务器名称
```

## 创建 web 服务器

1. 导入 `http` 核心模块

```js
const http = require('http')
```

2. 创建服务器

```js
const server = http.createServer()
```

3. 给服务器绑定事件 每次请求完毕必须调用 `res` 的 `end` 方法来结束本次响应

```js
server.on('request', (req, res) => {
  res.end('..')
})
```

4. 监听服务器 `request` 事件

```js
server.listen(3000,'127.0.0.1',()=>{..});
```

### 获取请求方式和地址

`req.method.toLowerCase` `req.url`

### 解决响应返回中文乱码

```js
res.writeHeader(200, { 'Content-Type': 'text/javascript,charset=utf-8' })
```

或

```js
res.setHeader('Content-Type', 'text/javascript,charset=utf-8')
```

`res.end()`中只能传`str`和`二进制`，可以引入`fs模块`，读取对应的文件将二进制页面返回到`res.end()`中
