---
title: 巩固Vue
date: 2021-09-01
order: 6
icon: vue
---

## `v-on`事件修饰符和键盘修饰符的作用

事件修饰符：主要是用于处理浏览器上的默认行为，比如阻止事件的冒泡、阻止 a 标签、form 表单的默认时间

- 阻止默认行为`.prevent`
- 只触发一次事件`.once`
- 保证事件由自己触发，不会经过冒泡或者捕获进行触发`.self`
- 阻止冒泡`.stop`

键盘修饰符主要针对`keyup`/`keydown`，

自定义键盘修饰符

```js
Vue.config.f1 = 键码
@keyup.f1 = 'fff'
```

## `v-if`和`v-show`区别,使用场景

都来用来控制元素显示和隐藏，当值是`true`元素显示，值为`false`元素隐藏

- v-if 当值为`true`时会创建元素，为`false`时会删除元素
- v-show 当值为`true`时会`display:block`;为`false`时会`display:none`

使用场景：当元素显示隐藏切换频繁时使用`v-show`，反之使用`v-if`;例如页面加载数据时的`loading`动画可以使用`v-if`;页面中某个元素需要使用动画效果，这个动画效果需要人为进行操作控制，那么最好使用`v-show`，加入购物车时飞入动画

## `v-cloak`解决差值表达式闪烁的原理

由于网速的原因导致`vue.js`没有被加载回来，此时页面中的差值表达式不会被`Vue`实例解析，浏览器进行解析的时候会直接当做字符串；然后`vue.js`加载回来之后，`Vue`实例又能进行解析，那么插值表达式就会被解析成具体的值，这个过程会出现闪烁现象  
`v-cloak`原理：使用`v-clock`指令绑定到元素上面之后，再配合`[v-cloak]｛display:none｝`这个样式进行控制；在浏览器进行解析时，浏览器会将属性选择器的样式作用于元素身上，该元素会被隐藏；然后`vue`进行解析时，会将`v-cloak`从元素身上删除，样式也随之失效，插值表达式中的值也能够显示出来

## 什么是`Vue`双向数据绑定，原理？

数据劫持，`ES5`中的`Object.defineProperty()`

```js
var value = 'zs'
Object.defineProperty(obj, 'name', {
  get() {
    return value
  },
  set(v) {
    // 设置值的时候就是数据劫持，只要走这个方法表示模型中的数据发生了变化
    value = v
  },
})
```

当模型中数据发生变化时会触发`Object.defineProperty`的`set`方法，在这个方法内部能够劫持到数据的改变，然后就可以在该方法内部通知视图更新；
视图中的数据如何同步到模型中，监听表单元素的`change`事件，在`change`事件中可以拿到用户输入的数据，然后给模型中的数据赋值

---angular 双向数据绑定  
脏数据监测：会使用定时器进行轮询，并不是将定时器一直开着，只有触发了指定的一些方法时才会进行轮询，$apply 发送异步请求，触发了定时器也会轮询

## `vue2`如何监测数组变化

使用了函数劫持的方式，重写了数组的方法，`Vue`将`data`中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组`api`时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化

## `scoped`作用原理，怎么解决加了`scoped`后动态渲染的`HTML`标签样式不能修改的问题

`scoped`可以隔离组件之间的样式，避免样式污染
作用原理：当一个组件的`style`加了`scoped`后，首先`vue`解析当前组件时会给当前组件中所有元素加上一个随机属性，然后`style`中书写的样式会变成属性选择器，那么即使其他组件有相同的样式或者相同的标签，由于随机添加的属性是不一样的，组件之间的样式也不会相互影响  
当在父组件中去修改子组件中标签样式，可以使用深度作用选择器，在`css`中使用 `.aaa >>> .bbb`，在`scss`中使用 `.aaa /deep/ .bbb`

## `Vue`生命周期

生命周期就是在`vue`实例执行过程中会触发的一批函数，这些函数可以帮助我们处理不同时间段的业务逻辑。
| 函数 | 阶段|
| :--------- | :------- |
|beforeCreate created |实例创建阶段|
|beforeMount mounted |DOM 渲染阶段|
|beforeUpdate updated |数据更新阶段|
|beforeDistory distorted| 实例销毁阶段|

## `vue-router`路由模式有几种，原理分别是什么

`vue-router`路由库是用哪种技术实现的，总共有两种，分别叫`hash模式`和`history模式`，默认`model:'hash'`,

- `hash`模式：地址上带有`#`号；`URL`地址可以放在任意标签中打开；可以兼容低版本浏览器
- `history`模式：地址上没有#号，更加符合`URL`形式；`URL`地址不能重复打开；
  `hash`模式原理：监听`hashchange`事件，可以调用`window.location.hash`获取到锚点值，和路由规则进行匹配，匹配到之后将路由规则中定义的组件渲染到页面
  `history`模式原理：利用`HTML5`新提供的`history.pushState API`来完成`URL`跳转而无需重新加载页面
  `history`模式需要后台进行相关配置：要在服务器增加一个覆盖所有情况的候选资源：如果`URL`匹配不到任何静态资源则应该返回同一个`index.html`页面，这个页面就是你`app`依赖的页面

## `vue-router`导航钩子函数使用场景

- `beforeEach`全局守卫，在路由跳转时会对路由进行拦截，只有调用了`next`函数才会释放路由，使用场景：通常在后台管理系统中，页面是需要登录之后才能访问，那么对于所有的页面跳转都需要使用 `beforeEach`进行拦截判断是否登录
- `beforeEnter`路由独享守卫，只会拦截加了独享守卫的路由跳转。使用场景：如果整个项目中只有某一部分页面是需要登录之后才能访问，此时只能针对这一部分页面的路由规则加上独享守卫进行拦截

## `vue-router`路由懒加载（单页应用程序优的性能优化）

路由懒加载：使用懒加载可以在跳转到具体路由时才去加载对应的组件代码，没有访问的路由的组件代码永远不会加载回来  
用法将导入组件的方式换成 `const Foo = ()=> import('./Foo.vue')`

## `Vue.use()`方法作用？`Vue`插件实现

`Vue.use`是用来安装`Vue`的插件
插件可以实现的功能：添加全局方法或属性，添加全局资源（指令、过滤器、组件），注入组件
如何实现插件：插件必须实现一个`install`方法，这个方法接收一个参数是`Vue`，这个方法内部就可以去添加全局的组件以及实例的属性。然后在使用插件时，调用`Vue.use(插件对象)`，则`install`方法中的形参`Vue`就会接收到实参`Vue`

```js
MyPlugin.install = function (Vue, options) {}
```

## `axios`拦截函数的使用场景

- 请求拦截:在发送请求之前，对请求对象做相关配置，给请求头添加验证属性（登录校验）、设置参数数据格式（`content-Type`），

```js
axios.interceptors.request.use(function (config) {
  return config
})
```

- 响应拦截:当接口返回的信息是统一的类型时，如果都在具体的请求函数里面去做处理，比较繁琐，可以在响应拦截器中先做统一处理，再分发到具体的函数中。当后台的 token 过期时，如果在每一个请求函数中都做判断，然后跳转页面比较麻烦，由于 token 过期后台会返回规定的状态码，那么就可以使用响应拦截在拦截器中进行跳转

```js
axios.interceptors.response.use(function (response) {
  return response
})
```

## 代理（解决的是开发阶段跨域问题）

代理是通过服务器向服务器发送数据请求不存在跨域问题的机制解决浏览器向存在跨域问题的服务器发请求的技术
`C` -> `S`
在客户端所在电脑上搭建一个服务器`P`，
`C` -> `P` -> `S`
跨域通常存在于开发阶段

```js
// webpack.config.js配置文件导出对象中加入
devServer: {
   // 代理跨域
   proxy: {
    '/api': {
       target: 'http://vue.xxx.io/api', //需要被代理的api根域名
       changeOrigin: true, // 是否跨域
       pathRewrite: {
           '^/api': '' // 重写(target中只有根域名时不需要配置此选项)
       }
     }
   }
}
---------------------------
// vue-cli中
// config/index.js中dev
proxyTable: {
   '/api': {
        target: 'http://vue.xxx.io/api',
        changeOrigin: true,
        pathRewrite: {
             '^/api': ''
        }
   }
}
```

cors

```js
res.header("Access-Control-Allow-Origin","*")允许所有域请求
res.header("Access-Control-Allow-Headers","X-Request-With");
res.header("Access-Control-Allow-Methods","*");
```

JSONP  
在`script`发送请求前定义一个函数，在 script 发送请求`<script src = 'http:..?cb=getdata'>`，后台返回同样函数名的函数调用，`res.end(`getdata(${JSON.stringify(obj)})`)`;

深拷贝浅拷贝的区别
深拷贝讨论的对象主要是指定`js`中的复杂数据类型
深拷贝不会对原对象产生影响
最简单的实现方式：`var cloneObj = JSON.parse(JSON.stringify(obj))`，这种方式的弊端不能实现对象中函数的拷贝
最符合需求的方式：`for in`循环加递归实现,`for in` 循环需要判断不同的数据类型，如果是对象使用递归克隆，如果是数组，可以直接调用`concat`方法或者`splice`方法进行深拷贝，如果是函数，使用`constructor`重新实例化函数和时间类型

```js
var cloneObj = {}
fucntion deepClone(obj){
  var cloneObj = {}
 for (var key in obj){
  if(obj.hasOwnProperty(key)){
   if(typeof obj[key] === 'object'){
     cloneObj = deepClone(obj[key])
   }else{
    cloneObj[key] = obj[key]
   }
  }
  return cloneObj;
 }
}
```

## 工作中处理过的兼容性问题

- 移动端滚动穿透
- 移动端输入框被键盘挡住问题
- IOS 滚动不平滑的问题
- click 300ms 延迟响应

## 处理过的性能优化问题

### `webpack`里面

1. 路由懒加载(组件按需加载)
2. 分离第三方包(抽取第三方模块安装包的代码，减少`build.js`的体积)
3. 分离`css`(减少`build.js`体积)

### `JS`

1. 对高频触发的事件进行节流和防抖（`touchmove`）
2. 尽量减少`HTTP`请求个数-需权衡（精灵图和合并请求，分离第三方包/`css`是拆分请求）
3. 避免空的`src`和`href`
4. 减少`dom`访问，减少`DOM`访问层级（迫不得已需要访问`DOM`，可以将`DOM`进行缓存）
5. 使用`CDN`（内容分发网络）（静态资源使用`CDN`加速，用户访问时从`CDN`获取资源，`CDN`根据 IP 地址直接返回当前城市服务器中的资源）

## 工作中遇到的难解决的问题，后来如何解决的

`scoped`问题（父组件无法直接修改子组件的样式，`vue-loader`深度作用选择器）  
`mui`严格模式（当`webpack`项目中引入`mui.js`，会报`caller`,`callee`,`arguments`在严格模式下无法使用）
真正问题产生是由于`babel-loder`在编译代码时会加严格模式

- 方法 1：`"ignore":['./src/js/mui/mui.min.js']`
- 方法 2：`{test:/\.js$/,use:'babel-loader',exclude:/mui\.min\.js/}`
- 方法 3：安装 b`abel-plugin-transoform-remove-strict-mode`移除整个项目打包编译时的严格模式
  `mui.css`引入到脚手架，打包时会报 SVG 图片属性错误（需要将`mui.css`文件中引入`SVG`图片的单引号改成双引号）

## `MVVM`

`MVVM`是`Model-View-ViewModel`缩写，也就是把`MVC`中的`Controller`演变成`ViewModel`。`Model`层代表数据模型，`View`代表`UI`组件，`ViewModel`是`View`和`Model`层的桥梁，数据会绑定到`viewModel`层并自动将数据渲染到页面中，视图变化的时候会通知`viewModel`层更新数据。

## `nextTick`知道吗,实现原理是什么

在下次`DOM`更新循环结束之后执行延迟回调。`nextTick`主要使用了宏任务和微任务。根据执行环境分别尝试采用`Promise`、`MutationObserver`、`setImmediate`，如果以上都不行则采用`setTimeout`  
定义了一个异步方法，多次调用`nextTick`会将方法存入队列中，通过这个异步方法清空当前队列

## 组件中的`data`为什么是一个函数

一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。如果`data`是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间`data`不冲突，`data`必须是一个函数。

## `v-model`的原理

`v-model`本质就是一个语法糖，可以看成是`value` + `input`方法的语法糖。
可以通过`model`属性的`prop`和`event`属性来进行自定义。原生的`v-model`，会根据标签的不同生成不同的事件和属性。

## `Vue`模版编译原理

简单说，`Vue`的编译过程就是将`template`转化为`render`函数的过程。会经历以下阶段：

- 生成`AST`树
- 优化
- `codegen`

1. 首先解析模版，生成`AST`语法树(一种用`JavaScript`对象的形式来描述整个模板)。
2. 使用大量的正则表达式对模板进行解析，遇到标签、文本的时候都会执行对应的钩子进行相关处理。
3. Vue 的数据是响应式的，但其实模板中并不是所有的数据都是响应式的。有一些数据首次渲染后就不会再变化，对应的 DOM 也不会变化。那么优化过程就是深度遍历 AST 树，按照相关条件对树节点进行标记。这些被标记的节点(静态节点)我们就可以跳过对它们的比对，对运行时的模板起到很大的优化作用。
4. 编译的最后一步是将优化后的 AST 树转换为可执行的代码。

## `Vue2.x`和`Vue3.x`渲染器的`diff`算法分别说一下

简单来说，`diff`算法有以下过程

- 同级比较，再比较子节点
- 先判断一方有子节点一方没有子节点的情况(如果新的`children`没有子节点，将旧的子节点移除)
- 比较都有子节点的情况(核心`diff`)
- 递归比较子节点
- 正常`Diff`两个树的时间复杂度是`O(n^3)`，但实际情况下我们很少会进行跨层级的移动`DOM`，所以`Vue`将`Diff`进行了优化，从`O(n^3)` -> `O(n)`，只有当新旧`children`都为多个子节点时才需要用核心的`Diff`算法进行同层级比较。

`Vue2`的核心`Diff`算法采用了双端比较的算法，同时从新旧`children`的两端开始进行比较，借助`key`值找到可复用的节点，再进行相关操作。相比`React`的`Diff`算法，同样情况下可以减少移动节点次数，减少不必要的性能损耗，更加的优雅。

`Vue3.x`借鉴了`ivi`算法和 `inferno`算法

在创建`VNode`时就确定其类型，以及在 `mount`/`patch` 的过程中采用位运算来判断一个`VNode`的类型，在这个基础之上再配合核心的`Diff`算法，使得性能上较`Vue2.x`有了提升。(实际的实现可以结合`Vue3.x`源码看。)

该算法中还运用了动态规划的思想求解最长递归子序列。

## 再说一下虚拟 Dom 以及 key 属性的作用

由于在浏览器中操作`DOM`是很昂贵的。频繁的操作`DOM`，会产生一定的性能问题。这就是虚拟`Dom`的产生原因。

`Vue2`的`Virtual DOM`借鉴了开源库`snabbdom`的实现。

`Virtual DOM`本质就是用一个原生的`JS`对象去描述一个`DOM`节点。是对真实`DOM`的一层抽象。(也就是源码中的`VNode`类，它定义在`src/core/vdom/vnode.js`中。)

`VirtualDOM`映射到真实`DOM`要经历`VNode`的`create`、`diff`、`patch`等阶段。

`key`的作用是尽可能的复用 `DOM` 元素。

新旧 `children` 中的节点只有顺序是不同的时候，最佳的操作应该是通过移动元素的位置来达到更新的目的。

需要在新旧 `children` 的节点中保存映射关系，以便能够在旧 `children` 的节点中找到可复用的节点。`key`也就是`children`中节点的唯一标识。

## keep-alive 了解吗

`keep-alive`可以实现组件缓存，当组件切换时不会对当前组件进行卸载。  
常用的两个属性`include`/`exclude`，允许组件有条件的进行缓存。  
两个生命周期`activated`/`deactivated`，用来得知当前组件是否处于活跃状态。  
`keep-alive`的中还运用了`LRU(Least Recently Used)`算法。  
原理：`Vue.js`内部将`DOM`节点抽象成了一个个的`VNode`节点，`keep-alive`组件的缓存也是基于`VNode`节点的而不是直接存储`DOM`结构。它将满足条件（`pruneCache`与`pruneCache`）的组件在`cache`对象中缓存起来，在需要重新渲染的时候再将`vnode`节点从`cache`对象中取出并渲染。

## Vue 中组件生命周期调用顺序说一下

组件的调用顺序都是先父后子,渲染完成的顺序是先子后父。

组件的销毁操作是先父后子，销毁完成的顺序是先子后父。

加载渲染过程  
父`beforeCreate`-> 父`created`-> 父`beforeMount`-> 子`beforeCreate`-> 子`created`-> 子`beforeMount` -> 子`mounted` -> 父`mounted`

子组件更新过程  
父`beforeUpdate` -> 子`beforeUpdate` -> 子`updated` -> 父`updated`

父组件更新过程  
父`beforeUpdate` -> 父`updated`

销毁过程  
父`beforeDestroy` -> 子`beforeDestroy` -> 子`destroyed` -> 父`destroyed`

## Vue2.x 组件通信有哪些方式

### 父子组件通信

- 父 -> 子`props`，子 -> 父 `$on`、`$emit`

- 获取父子组件实例 `$parent`、`$children`

- `Ref` 获取实例的方式调用组件的属性或者方法

- `Provide`、`inject` 官方不推荐使用，但是写组件库时很常用

### 兄弟组件通信

- `Event Bus` 实现跨组件通信 `Vue.prototype.$bus = new Vue`

- `Vuex`

### 跨级组件通信

- `Vuex`

- `$attrs`、`$listeners`

- `Provide`、`inject`

## `SSR`了解吗

`SSR`也就是服务端渲染，也就是将`Vue`在客户端把标签渲染成`HTML`的工作放在服务端完成，然后再把`html`直接返回给客户端。

`SSR`有着更好的`SEO`、并且首屏加载速度更快等优点。不过它也有一些缺点，比如我们的开发条件会受到限制，服务器端渲染只支持`beforeCreate`和`created`两个钩子，当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于`Node.js`的运行环境。还有就是服务器会有更大的负载需求。

## 你都做过哪些`Vue`的性能优化

1. 编码阶段

- 尽量减少`data`中的数据，`data`中的数据都会增加`getter`和`setter`，会收集对应的`watcher`
- `v-if`和`v-for`不能连用
- 如果需要使用`v-for`给每项元素绑定事件时使用事件代理
- `SPA` 页面采用`keep-alive`缓存组件
- 在更多的情况下，使用`v-if`替代`v-show`
- `key`保证唯一
- 使用路由懒加载、异步组件
- 防抖、节流
- 第三方模块按需导入
- 长列表滚动到可视区域动态加载
- 图片懒加载

2. `SEO`优化

- 预渲染
- 服务端渲染`SSR`

3. 打包优化

- 压缩代码
- `Tree Shaking`/`Scope Hoisting`
- 使用`cdn`加载第三方模块
- 多线程打包`happypack`
- `splitChunks`抽离公共文件
- `sourceMap`优化

4. 用户体验

- 骨架屏
- `PWA`
- 还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启`gzip`压缩等。

## hash 路由和 history 路由实现原理说一下

`location.hash`的值实际就是`URL`中`#`后面的东西。
`history`实际采用了`HTML5中`提供的`API`来实现，主要有`history.pushState()`和`history.replaceState()`。

## v-for 中 key 的作用

`key`的作用主要是为了更高效的对比虚拟`DOM`中每个节点是否是相同节点;
`Vue`在`patch`过程中判断两个节点是否是相同节点,`key`是一个必要条件，渲染一组列表时，`key`往往是唯一标识，所以如果不定义`key`的话，`Vue`只能认为比较的两个节点是同一个，哪怕它们实际上不是，这导致了频繁更新元素，使得整个`patch`过程比较低效，影响性能;
从源码中可以知道，`Vue`判断两个节点是否相同时主要判断两者的`key`和元素类型等，因此如果不设置`key`,它的值就是`undefined`，则可能永远认为这是两个相同的节点，只能去做更新操作，这造成了大量的`dom`更新操作，明显是不可取的。
