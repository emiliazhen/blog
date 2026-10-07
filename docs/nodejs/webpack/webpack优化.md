---
title: webpack优化
date: 2018-12-06
category:
  - nodejs
  - webpack
icon: webpack
---

## production 模块打包自带优化

1. `tree shaking` 打包时移除`JS`中未引用的代码，依赖于`import`和`export`的静态结构特性
2. `scope hoisting` 将模块之间的关系进行结果推测，让打包出来的代码文件更小、运行更快
3. 代码压缩 所有代码使用`UglifyJsPlugin`插件进行压缩、混淆

## CSS 优化

`mini-css-extract-plugin`是用于将`CSS`提取为独立的文件的插件，对每个包含`CSS`的`js`文件都会创建一个`CSS`文件，支持按需加载`CSS`和`sourceMap`。异步加载，不重复编译，只针对`CSS`
安装 `-D`

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
new MiniCssExtractPlugin({
      filename: '[name].css'
    })
    ····
module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      },
    ],
  },
```

## 自动添加 CSS 前缀

安装`postcss-loader` `autoprefixer`

```js
rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']
      },
    ],
```

在根目录新建`postcss.config.js`

```js
module.exports = {
  plugins: [require('autoprefixer')],
}
```

## css 压缩

安装`optimize-css-assets-webpack-plugin` `terser-webpack-plugin`

```js
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
...

optimization: {
  minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
},
```

## js 代码分离

代码分离可以用于获取更小的`bundle`，以及控制资源加载优先级

1. 使用`entry`配置手动分离代码
2. 使用`SplitChunksPlugin`去重和分离`chunk`

```js
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
```

3. 动态导入，使用模块的内联函数调用来分离代码，用到那个模块才会加载哪个模块，可以提高`SPA`首屏加载速度
   `webpack4`默认允许`import`语法动态导入，但需要`babel`插件支持
   安装`@babel/plugin-syntax-dynamic-import`，并加入`.bablelrc`配置文件添加改插件

```js
function getComponent() {
  return import('jquery').then(({ default: $ }) => {
    return $('<div></div>').html('main')
  })
}
window.onload = function () {
  document.getElementById('btn').onclick = function () {
    getComponent().then((res) => res.appendTo('body'))
  }
}
```

## splitChunksPlugin 默认配置

```js
  optimization: {
    splitChunks: {
      chunks: 'async', // 只对异步加载的模块进行拆分，可选值还有all | initial
      minSize: 30000, // 模块最少大于30KB才拆分
      maxSize: 0,  // 模块大小无上限，只要大于30KB都拆分
      minChunks: 1, // 模块最少引用一次才会被拆分
      maxAsyncRequests: 5, // 异步加载时同时发送的请求数量最大不能超过5,超过5的部分不拆分
      maxInitialRequests: 3, // 页面初始化时同时发送的请求数量最大不能超过3,超过3的部分不拆分
      automaticNameDelimiter: '~', // 默认的连接符
      name: true, // 拆分的chunk名,设为true表示根据模块名和CacheGroup的key来自动生成,使用上面连接符连接
      cacheGroups: { // 缓存组配置,上面配置读取完成后进行拆分,如果需要把多个模块拆分到一个文件,就需要缓存,所以命名为缓存组
        vendors: { // 自定义缓存组名
          test: /[\\/]node_modules[\\/]/, // 检查node_modules目录,只要模块在该目录下就使用上面配置拆分到这个组
          priority: -10 // 权重-10,决定了哪个组优先匹配,例如node_modules下有个模块要拆分,同时满足vendors和default组,此时就会分到vendors组,因为-10 > -20
        },
        default: { // 默认缓存组名
          minChunks: 2, // 最少引用两次才会被拆分
          priority: -20, // 权重-20
          reuseExistingChunk: true // 如果主入口中引入了两个模块,其中一个正好也引用了后一个,就会直接复用,无需引用两次
        }
      }
    }
  }
```

## noParse

在引入一些第三方模块时，我们知道其内部肯定不会依赖其他模块，此时再去解析他们的内部依赖关系是非常浪费时间的

```js
  module: {
    noParse: /jquery/,
  },
```

## IgnorePlugin

在引入一些第三方模块时，内部会做`i18n`国际化处理，可以忽略语言包，然后按需引入
① 查看源码，分析可得出`locale`目录就是`moment`所依赖的语言包目录

```js
function loadLocale(name) {
  var oldLocale = null
  // TODO: Find a better way to register and load all the locales in Node
  if (!locales[name] && typeof module !== 'undefined' && module && module.exports) {
    try {
      oldLocale = globalLocale._abbr
      var aliasedRequire = require
      aliasedRequire('./locale/' + name)
      getSetGlobalLocale(oldLocale)
    } catch (e) {}
  }
  return locales[name]
}
```

2. 使用`IgnorePlugin`插件来忽略掉`moment`模块的`locale`目录
   参数 1 表示要忽略的资源路径，参数 2 要忽略的资源 context

```js
new webpack.IgnorePlugin(/\.\/locale/, /moment/)
```

3. 按需引入语言包

```js
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-CN')
console.log(moment().subtract(6, 'days').calendar())
```

## DllPlugin

在引入一些第三方模块时，`vue`/`react`/`angular`等框架文件一般都是不会修改的，而每次打包都需要去解析，会影响打包速度，做拆分只提高了上线后用户访问速度，并不会提高构建速度，应该使用动态链接库的方式，借助`DllPlugin`插件实现将这些框架座位一个个的动态链接库，只构建一次，以后每次构建都只生成自己的业务代码，主要将一些不做修改的依赖文件提前打包

### vue/react 项目中的库抽取成 Dll

1. 在 build 目录新建一个文件`webpack.vue.js`或`webpack.react.js`
   配置入口：将多个要做成`dll`的库全放进来
   配置出口：一定要设置`library`属性，将打包好的结果全暴露在全局
   配置 plugin：设置打包后`dll`文件名和 manifest 文件所在地

```js
const path = require('path')
const { webpack } = require('webpack')
module.exports = {
  mode: 'produce',
  entry: {
    vue: ['vue/dist/vue.js', 'vue-router'],
    // react: [
    //   'react',
    //   'react-dom'
    // ]
  },
  output: {
    filename: '[name]_dll.js',
    path: path.resolve(__dirname, '../dist'),
    library: '[name]_dll',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll',
      path: path.resolve(__dirname, '../dist/manifest.json'),
    }),
  ],
}
```

2. 在`webpack.base.js`中进行插件配置，使用`DllReferencePlugin`指定`manifest`文件的位置

```js
new webpack.DllReferencePlugin({
  manifest: path.resolve(__dirname, '../dist/manifest.json'),
})
```

3. 配置插件自动添加`script`标签到`Html`中，安装`add-asset-html-webpack-plugin`

```js
new AddAssetHtmlWebpackPlugin({
  filepath: path.resolve(__dirname, '../dist/vue_dll.js'),
})
```

## happypack

由于`webpack`在`node`环境中运行打包构建，所以是单线程的模式，在打包众多资源时效率会比较低下，早期可以通过`Happypack`来实现多进程打包。当然，这个问题只出现在低版本的`webpack`中，现在的`webpack`性能已经非常强劲了，所以无需使用`Happypack`也可以实现高性能打包  
安装`happypack`，引入插件修改配置规则，配置插件

```js
const HappyPack = require('happypack')
...
{
  test: /.js$/,
  use: {
      loader: 'happypack/loader'
    },
  include: path.resolve(__dirname, '../src'),
  exclude: /node_modules/
}
...
new HappyPack({
  loaders: [ 'babel-loader' ]
})
```

## 浏览器缓存

在做了众多代码分离的优化后，其目的是为了利用浏览器缓存，达到提高访问速度的效果，所以构建项目时做代码分割是必须的，例如将固定的第三方模块抽离，下次修改了业务代码，重新发布上线不重启服务器，用户再次访问服务器就不需要再次加载第三方模块了。如果再次打包上线不重启服务器，客户端会把以前的业务代码和第三方模块同时缓存，再次访问时依旧会访问缓存中的业务代码，所以会导致业务代码也无法更新，需要在`output`节点的`filename`中使用`placeholder`语法，根据代码内容生成文件名的`hash`，之后每次打包业务代码时，如果有改变，会生成新的`hash`作为文件名，浏览器就不会使用缓存了，而第三方模块不会重新打包生成新的名字，则会继续使用缓存

```js
output: {
  path: path.join(__dirname,'../dist/'),
  filename: '[name].[contenthash:8].bundle.js',
  publicPath: '/'
},
```

打包分析
安装`webpack-bundle-analyzer -D`

```js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  plugins: [
    new BundleAnalyzerPlugin()
  ],
```

## Prefetching 和 Preloading

在`Chrome`浏览器控制台`ctrl+shift+p`，查找`coverage`，可查看覆盖率  
在懒加载时使用魔法注释`Prefetching`，在首页资源加载完毕后空闲时将动态导入的资源加载进来，这样可以提高首屏加载速度，也可以解决懒加载可能会影响用户体验的问题

```js
function getComponent() {
  return import(/* webpackPrefetch: true */ 'jquery').then(({ default: $ }) => {
    return $('<div></div>').html('我是main')
  })
}
```
