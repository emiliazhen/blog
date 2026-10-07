---
title: 巩固JS
date: 2021-08-25
order: 4
icon: javascript
---

## `typeof`返回哪些数据类型

- object
- string
- boolean
- number
- undefined
- function

## `split()` `join()`区别

`split()`切割成数组形式，`join()`将数组转换成字符串

## 数组方法 pop() push() unshift() shift()

- push()尾部添加
- pop()尾部删除
- unshift()头部添加
- shift()头部删除

## 事件绑定和普通事件的区别

普通添加事件

```js
btn.onclick = function () {
  alert(1)
}
btn.onclick = function () {
  alert(2)
}
// 执行代码只会 alert(2)
```

事件绑定方式添加事件

```js
btn.addEventListener('click', function () {
  alert(1)
})
btn.addEventListener('click', function () {
  alert(2)
})
// 执行代码会先 alert(1) 再 alert(2)
```

- 普通添加时间的方法不支持添加多个事件，最下面的事件会覆盖上面的，而事件绑定方式添加事件可以添加多个
- addEventListener 不兼容低版本 IE
- 普通事件无法取消
- addEventListener 支持事件冒泡+事件捕获

## `IE`和`DOM`事件流的区别

- 事件流区别：`IE`采用冒泡型时间 `Netscape`使用捕获型事件 `DOM`使用先捕获后冒泡型时间
- 事件监听函数区别：`IE`使用`attachEvent('name',function);` `detachEvent(..)`，`DOM`使用`addEventListener('name',function,bCapture);` `removerEventListener`

## `call`和`apply`的区别

-`call(thisObj,object1,object2..)`，调用一个对象的一个方法，以另一个对象替换当前对象。 -`apply(thisObj,[..])`用某一对象的一个方法，用另一个对象替换当前对象。 -`foo.call(this,arg1,arg2,arg3)==foo.apply(this.arguments)==this.foo(arg1,arg2,arg3)`

## 阻止事件冒泡和默认时间

- `cancelBubble()`只支持 IE，
- `return false`,`stopPropagation()`

## 添加删除替换插入到某个节点的方法

```js
obj.appendChild()
obj.insertBefore()
obj.replaceChild()
obj.removeChild()
```

## `javascript`的本地对象，内置对象和宿主对象

- 本地对象为`array`,`obj`,`regexp`等可以 new 实例化
- 内置对象为`gload`，`Math`等不可以实例化
- 宿主为浏览器自带的`document`,`window`等

## `window.onload`和`document ready`的区别

`window.onload`是在`dom`文档树加载完和所有文件加载完之后执行一个函数，`document.ready`原生中没有这个方法，`jQuery`中有`$().ready(function)`，在`dom`文档树加载完之后执行一个函数，这里的文档树加载不代表全部文件加载完。`$(document).ready`要比`window.onload`先执行，`window.onload`只能出来一次，`$(document).ready`可以出现多次

## `==`和`===`的不同

`==`会自动转换类型

## `javascript`的同源策略

一段脚本只能读取来自同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号

## `Javascipt`的特点

是一种直译式脚本语言(代码不进行预编译)，是一种动态类型、弱类型、基于原型的语言，内置支持类型

## `Javascript`的数据类型都有什么

- 基本数据类型：`String`,`Boolean`,`Number`,`Undefined`,`Null`
- 引用数据类型：`Object(Array,Date,RegExp,Function)`

## 如何判断某变量是否为数组数据类型

`obj instanceof Array`,在某些`IE`版本中不正确  
`ES5`中定义了新方法`Array.isArray()`

## 当一个`DOM`节点被点击时希望能执行一个函数怎么做

- 在`DOM`里绑定事件：`<div onclick = "test()"></div>`
- 在`js`里通过`onclick`绑定：`xxx.onclick = test`
- 通过事件添加进行绑定：`addEventListener(xxx.'click',test)`

## Javascript 如何实现继承

1. 构造函数绑定
   使用 call 或 apply 方法，将父对象的构造函数绑定在子对象上

```js
function Cat(name, color) {
  Animal.apply(this.arguments)
  this.name = name
  this.color = color
}
var cat1 = new Cat('catA', 'yellow')
```

2. `prototype`模式

```js
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat
```

3. 直接继承`prototype`

```js
Animal.prototype.species = '动物'
Cat.prototype = Animal.prototype
Cat.prototype.constructor = Cat
```

4. 利用空对象做中介

```js
var F = function () {}
F.prototype = Animal.prototype
Cat.prototype = new F()
Cat.prototype.constructor = Cat
```

5. 拷贝继承

## `iframe`的优缺点

优点：

1. 解决加载缓慢的第三方内容如图标和广告等的加载问题
2. `Securtiy` `sandbox`
3. 并行加载脚本

缺点:

1. `iframe`会阻塞主页的`onload`事件
2. 即使内容为空，加载也需要时间
3. 没有语义

## `js`延时加载的方式

1. `defer`和`async`
2. 动态创建`DOM`方式（创建`script`，插入到`DOM`中，加载完毕后`callBack`）
3. 按需异步载入`js`

## 哪些操作会造成内存泄漏

内存泄漏指任何对象在您不再拥有或需要它之后仍然存在  
垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为`0`，或对该对象的唯一引用是循环的，那么该对象的内存即可回收

1. `setTimeout`的第一个参数使用字符串而非函数会引发内存泄漏
2. 闭包
3. 控制台日志
4. 循环

## 闭包是什么，有什么特性，对页面有什么影响

闭包就是能够读取其他函数内部变量的函数  
闭包用途：

- 能够访问函数定义时所在的词法作用域(阻止其被回收)
- 私有化变量
- 模拟块级作用域
- 创建模块

闭包缺点：会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏

## `bind()`,`live()`,`delegate()`区别

- `bind`:绑定事件，对新添加的事件不起作用，方法用于将一个处理程序附加到每个匹配元素的事件上并返回 jQuery 对象
- `live`:方法将一个事件处理程序附加到与当前选择器匹配的所有元素（包含现有的或将来添加的）的指定事件上并返回 jQuery 对象
- `delegate`:方法基于一组特定的根元素将处理程序附加到匹配选择器的所有元素（现有的或将来的）的一个或多个事件上

## 优化自己的代码

代码重用，避免全局变量，拆分函数避免函数过于臃肿，注释

## 在`javascript`中什么是伪数组，如何将伪数组转化成标准数组

伪数组：无法直接调用数组方法或期望`length`属性有什么特殊的行为，但仍可以对真正数组遍历方法来遍历他们。典型的是函数`argument`参数，还有像调用`getElementsByTagName`,`document.childNodes`之类的，他们都返回`NodeList`对象都属于伪数组。

```js
Array.prototype.slice.call(fakeArray)
```

## Js 中有一个函数执行对象查找时永远不会查找原型

```js
HasOwnProperty
```

## 模块化开发

理解模块化开发模式：浏览器端`requirejs`,`seajs`；服务器端`nodejs`；`ES6`模块化；`fis`、`webpack`等前端整体模块化解决方案；`grunt`、`gulp`等前端工作流的使用

## `AMD(Modules/Asynchronous-Definition)`、`CMD(Common Module Definition)`区别

理解这两种规范的差异主要通过`requirejs`与`seajs`的对比，理解模块的定义与引用方式的差异以及这两种规范的设计原则

## `requireJS`的核心原理是什么

核心是`js`的加载模块，通过正则匹配模块以及模块的依赖关系，保证文件加载的先后顺序，根据文件的路径对加载过的文件做了缓存

## `js`继承的`6`种方法

1. 原型链继承
2. 借用构造函数继承
3. 组合继承（原型+借用构造）
4. 原型式继承
5. 寄生式继承
6. 寄生组合式继承

## `Sass` `Less`区别

- 他们是动态的样式语言，是`CSS`预处理器，`CSS`上的一种抽象层
- 变量符不一样，`less`是`@`,`Sass`是`$`
- `Sass`支持条件语句，可以使用`if{}else{}`,`for{}`循环等，而`less`不支持
- `Sass`是基于`Ruby`的，是在服务端处理的，而`less`是需要引入`less.js`来处理`less`代码输出`css`到浏览器

## `this` 的理解

- 在 `js` 中，`this` 通常指向我们正在执行的函数本身或者是指向该函数所属对象
- 全局 `this` 指向 `window`
- 函数中的 `this` 指向的是函数所在的对象
- 对象中的 `this` 指向其本身
