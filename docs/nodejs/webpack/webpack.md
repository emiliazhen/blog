---
title: webpack
date: 2017-12-09
category:
  - nodejs
  - webpack
icon: webpack
---

## Webpack

一个基于 Node 的前端构建工具，可以实现对项目的打包，主要解决文件(模块)之间的依赖，文件(模块)和压缩等问题

- `webpack <需要打包的文件路径> <输出文件的路径>`
- `webpack`推荐在项目中安装`-D`，`npm5.2`以上版本使用`npx`命令执行
- `webpack4.0`之后可以实现`0`配置打包构建，`0`配置限制较多，无法自定义很多配置

1. 在根目录新建`webpack.config.js`，设置打包的入口文件和输出文件

```js
const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    // path: path.resolve('./dist/'), // 解析当前相对路径的绝对路径
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js',
  },
  mode: 'development',
  // watch: true,
  devServer: {
    open: true,
    port: 8090,
    hot: true,
    compress: true,
    contentBase: './src',
  },
}
```

2. 执行打包命令 webpack
   若配置文件名其他则格式为`webpack --webpack.dev.config.js`
3. `index.html`中修改`<script src="/dist/bundle.js"></script>`必须根路径
4. 配置`script`，`"dev":"webpack serve --inline --hot --open --post 8090"`

- `--hot`热更新，可以局部更新文件
- `--open`自动打开浏览器
- `--port`配置端口号
- `--contentBase`指定服务器目录
  或直接在`config.js`文件中`devServer`里更改

## 处理 css/less/sass

安装`style-loader` `css-loader`

- less:安装 less less-loader
- sass:安装 node-sass sass-loader

```js
module: {
  rules: [
    { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
    { test: /\.s(c|a)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
  ]
}
```

`webpack`读取`loader`时是从右到左的读取，会将`css`文件交给最右侧的`loader`来处理  
`loader`的执行顺序是从右到左以管道的方式链式调用  
`css-loader`解析`css`文件，`style-loader`将解析出来的结果放到`html`中，使其生效

## 处理图片字体

安装`file-loader` `url-loader`

```js
module: {
  rules: [
    {
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 5 * 1024,
          outputPath: 'images',
          name: '[name]-[hash:4].[ext]',
        },
      },
    },
    {
      test: /\.(woff|woff2|eot|svg|ttf)$/,
      use: 'url-loader',
    },
  ]
}
```

## babel

安装 `balel-loader` `@balel/core` `@babel/preset-env`

- 需要支持更高级`ES6`语法，安装插件`@babel/plugin-proposal-class-properties`
- 需要使用`generator`需要安装插件`@babel/plugin-transform-runtime`并安装依赖`@babel/runtime`
- 需要使用对象原型提供的新方法需要安装`@babel/polyfill -S`，在需要用时新方法的地方直接引入
  在根目录下新建`.babelrc`

```json
{
  "presets": ["@babel/env"],
  "plugins": ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"]
}
```

## source map

开发环境推荐`cheap-module-eval-source-map`,生产环境不推荐
| 值 | 说明 |
| :------------------------------------- | :------------------------------------------- |
|cheap|模式大幅提高 source map 生成效率|
|module|可支持 babel 这种预编译工具，映射转换前的代码|
|eval|可大幅度提高构建效率|
|eval-source-map|模式可以减少网络请求|

```js
module.exports = {
  ....
  devTool: 'eval-cheap-module-source-map'
}
```

## 插件

### html-webpack-plugin

```js
 const HtmlWebpackPlugin = require('html-webpack-plugin')
....
 plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      htmlWebpackPlugin: {
        "files": {
                "css": ["app.css"], // 需要引入的css文件
               "js": ["vendors.js", "bundle.js"]  // 需要引入的js文件
        }
      }
    })
  ]
```

### clean-webpack-plugin

自动清除 dist 文件夹

```js
 const { CleanWebpackPlugin } = require('clean-webpack-plugin')
....
 plugins: [
    new CleanWebpackPlugin({cleanAfterEveryBuildPatterns: ['dist']})
 ]
```

### copy-webpack-plugin

将整个文件或这个目录复制到构建目录

```js
const CopyWebpackPlugin = require('copy-webpack-plugin')
....
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: path.join(__dirname,'assets'),
        to: 'assets'
      }]
    })
  ],
```

### BannerPlugin

webpack 内置插件，给打包的 JS 文件加上版权注释信息

```js
const webpack = require('webpack')
....
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.join(__dirname,'assets'),
        to: 'assets'
      }]
    }),
    new webpack.BannerPlugin('EmiliaZhen')
  ],
```

### 优化压缩 Js

`webpack.optimize.UglifyJsPlugin`是`webpack`内置插件，用来压缩 Js 代码
在 plugins 数组中添加

```js
new webpack.optimize.UglifyJsPlugin({
   compress: { // 配置压缩选项
       warnings: false // 移除警告
    }
}),
new webpack.optimize.DedupePlugin({ // 设置为产品上线环境，进一步压缩JS代码
     'process.env.NODE_ENV': '"production"'
}),
```

### 优化压缩 Html

在`plugins`节点下的`htmlWebpackPlugin`插件中，添加`minify`子节点

```js
new htmlWebpackPlugin({
template: path.join(__dirname, './src/index.html'),
filename: 'index.html',
minify: {
collapseWhitespace: true, // 合并多余的空格
removeComments: true, // 移除注释
removeAttributeQuotes: true // 移除 属性上的双引号
}
}),
```

### 抽取 CSS 文件

安装抽取`css`文件的插件

```powershell
npm install --save-dev extract-text-webpack-plugin
```

在配置文件中导入

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin')
```

修改 css 和 sass 的 loader

```js
{
    test: /\.css$/,
  use: ExtractTextPlugin.extract({
         fallback: "style-loader",
          use: "css-loader",
          publicPath: '../' // 指定抽取的时候，自动为我们的路径加上 ../ 前缀
     })
},
{
    test: /\.scss$/,
  use: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: ['css-loader', 'sass-loader'],
        publicPath: '../' // 指定抽取的时候，自动为我们的路径加上 ../ 前缀
     })
},
```

在 plugins 节点下新增插件

```js
new ExtractTextPlugin("css/styles.css"), // 抽取CSS文件
```

### 压缩抽取出来的 css 文件

```powershell
npm i optimize-css-assets-webpack-plugin --save-dev
```

在配置文件头部导入插件

```js
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
```

在 plugins 节点下新增插件

```js
new OptimizeCssAssetsPlugin() // 压缩CSS的插件
```

### 压缩代码插件（删除警告）

```js
new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"production"',
  },
})
```
