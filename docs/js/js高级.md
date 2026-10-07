---
title: JS高级
date: 2015-08-19
category: js
icon: javascript
---

```
 ┌─────────────────────────────────────────┐  ┌─────┐
 │         User Interface                  │  │  D  │
 └────────────────┬────────────────────┬───┘  │  a  │
                  │                    │      │  t  │
                  │                    │      │  a  │
 ┌────────────────▼────────────────┐   │      │     │
 │  Browser engine                 ├───┼─────►│  P  │
 └────────────────┬────────────────┘   │      │  e  │
                  │                    │      │  r  │
 ┌────────────────▼────────────────┐   │      │  s  │
 │ Rendering engine                │   │      │  i  │
 └────┬──────────────┬──────────┬──┘   │      │  s  │
      │              │          │      │      │  t  │
      │              │          │      │      │  e  │
 ┌────▼─────┐ ┌──────▼─────┐  ┌─▼──────▼──┐   │  n  │
 │Networking│ │ JavaScript │  │UI Backend │   │  c  │
 │          │ │ Interpreter│  │           │   │  e  │
 └──────────┘ └────────────┘  └───────────┘   └─────┘
```

| 名称                              | 说明                                                              |
| :-------------------------------- | :---------------------------------------------------------------- |
| User Interface                    | 用户界面，我们所看到的浏览器                                      |
| Browser engine                    | 浏览器引擎，用来查询和操作渲染引擎                                |
| \* Rendering engine               | 用来显示请求的内容，负责解析`HTML`、`CSS`，并把解析的内容显示出来 |
| Networking                        | 网络，负责发送网络请求                                            |
| \* JavaScript Interpreter(解析者) | `JavaScript`解析器，负责执行`JavaScript`的代码                    |
| UI Backend                        | UI 后端，用来绘制类似组合框和弹出窗口                             |
| Data Persistence(持久化)          | 数据持久化，数据存储 `cookie`、`HTML5`中的`sessionStorage`        |

## JS 的特点

js 就是解释执行的弱类型动态语言
java 就是编译执行的强类型静态语言

- 解释型
  解释一行执行一行，编译过程在执行时进行
- 弱类型
  在变量声明时不需要指定数据类型
- 动态
  在代码执行过程中可以给对象动态添加属性

## 对象

现实世界中的任何具体的事或者物都可以抽象为程序中的对象
对象就是一个无序属性的集合，也就是一个容器

### 构造函数

`instanceof`关键字
判断对象是否是通过该构造函数创建的 `stu1 instanceof Student`;
构造函数不是在声明时决定的，而是在调用时决定的，只有用`new`关键字调用的函数才是构造函数

静态成员和实例成员
成员：属性和方法
给构造函数添加属性，就是静态成员，静态成员在内存中是唯一的
给对象添加成员，就是实例成员（对象成员）

```js
function Student() {}
var stu = new Student()
stu.name = '小明' //stu.name就是实例成员
Student.sex = '男' //Student.sex就是静态成员
// 实例成员使用方式： console.log(stu.name);
// 静态成员使用方式： console.log(Student.sex);
```

### 原型

面向对象的三大特征： `继承` `封装` `抽象`

```js
function Student(name, age) {
  this.name = name
  this.age = age
  this.sayHi = function () {
    console.log('我是' + this.name)
  }
}
student.prototype //静态成员，在内存中唯一，prototype就是一个对象，可以往对象中添加属性或方法
var stu1 = new Student('小明', 18)
stu1.sayHi()
var stu2 = new Student('小红', 18)
stu2.sayHi()
```

以上代码，创建多个对象，`sayHi`方法重复，`sayHi`方法内容本质上是一样的，但是浪费资源
原型的作用：解决了多次创建对象，重复声明方法的问题

```js
function Student(name, age) {
  this.name = name
  this.age = age
}
Student.prototype.sayHi = function () {
  console.log('我是' + this.name)
}
var stu1 = new Student('小明', 18)
stu1.sayHi()
var stu2 = new Student('小红', 18)
stu2.sayHi()
```

之所以对象可以访问构造函数的`prototype`中的成员，是因为所有的对象都有一个`__proto__`属性，该属性指向了当前对象构造函数的`prototype`属性

#### bind 方法

ES5 之后出现的新方法
属于函数的一个方法，返回值是一个新的函数，函数的功能和原先函数一模一样，唯一的区别就是 this 指向 bind 方法中的参数-对象
调用该方法可以改变函数中 this 的指向，返回的新函数需要手动调用，bind 方法不会自动调用新创建的函数
复制一个函数，改变函数中的 this 指向

- 参数 1：设置函数内部 this 的指向
- 参数 2-n：对应函数的参数

```js
function fn() {
  console.log(this)
}
fn() //window
var obj = { name: 'zs' }
var newFn = fn.bind(obj) //不会执行fn函数，也不会执行返回的新函数
newFn() //obj
```

#### call 方法

call()方法调用一个函数，其具有一个指定的 this 值

- 参数 1：将函数内部的`this`指向的对象
- 参数 2-参数 n ：调用函数传入的实参
- 返回值：call 的返回值就是函数的返回值

```js
fun.call(thisArg,arg1,arg2…);
```

#### callee 方法

返回正被执行的 function 对象，也就是所指定的`function`对象正文  
`arguments.length`实参长度，`arguments.callee.length`是形参长度

#### apply 方法

### 对象的属性查找规则

#### 获取属性：

对象自身有该属性的时候，会优先使用自身属性
如果自身没有该属性，会找原型对象中是否有该属性，原型对象中有就使用，没有继续找原型对象的原型对象是否有该属性，不断重复此过程，直至 Object 的原型对象找到为止

#### 设置属性：

设置在谁身上，属性就在谁身上，例如：给 stu 对象设置 test 属性，不会设置到原型上，即使原型上有 test 属性，也只会设置给 stu 对象自身

## 自调用函数

避免污染全局作用域

```js
;(function (window, undefined) {
  var a = 10
  var b = 20
  window.a = a
})(window, undefined)
```

> [!tip]  
> 传入 `window` 对象，将来代码压缩的时候，可以把 `function(window)`压缩成 `function(w)`;  
> 传入 `undefined`，把 `undefined` 作为函数的参数，因为在老版本的浏览器中 `undefined` 可以被重新赋值，防止 `undefined` 被重新赋值  
> 代码规范中建议在自调用函数之前加上分号，避免自调用函数语法错误

## 函数

### 函数声明与函数表达式

函数声明

```js
function fn() {}
```

函数表达式

```js
var fn = function () {}
```

#### 区别

- 函数声明必须有名字
- 函数声明会函数提升，在预解析阶段就已创建，声明前后都可以调用
- 函数表达式类似于变量赋值
- 函数表达式可以没有名字，例如匿名函数
- 函数表达式没有变量提升，在执行阶段创建，必须在表达式执行之后才可以调用

> [!tip]  
> 函数也是对象 所有函数都是 Function 的实例

### 回调函数

将一个函数作为参数，放在另一个函数中调用，就是回调函数

### 闭包

函数内部声明了一个函数，里面的函数用到了外面函数作用域中的成员，导致外面函数作用域中的成员无法释放，将成员放置在闭包空间中

- 含义：在一个作用域中可以访问另一个作用域的变量
- 特点：延展了函数的作用域范围
- 问题：本该被释放的内存没有被释放 ---> 内存泄漏

### 定时器的工作原理

JS 是一门单线程的语言，同一时间只能执行一项任务

<table>
  <tr>
    <td>执行栈</td>
    <td>由上到下执行的代码</td>
    <td>先进后出</td>
  </tr>
  <tr>
    <td>任务队列</td>
    <td>定时器的任务</td>
    <td>先进先出</td>
  </tr>
</table>

`setTimeout` 或 `setInterval` 这写代码会将任务函数发布到任务队列中，依次执行  
在程序执行时，优先执行执行栈的代码，执行栈中所有代码全部执行完毕后才会执行任务队列的代码，即使任务队列延迟只有`0`毫秒

### 递归

函数自身调用自身的一种编程方式，一定要定义好结束条件，否则会出现最大堆栈调用溢出（堆栈溢出异常）

```js
function fn() {
  var n = 10
  console.log(n)
  setTimeout(function () {
    fn()
  }, 0)
}
fn()
```

如果使用定时器来无限调用，就不会形成栈内存溢出
因为堆栈的特性是先进后出，意味着最新执行的函数如果不释放，最低下的函数永远无法释放

## 对象的拷贝

- 浅拷贝
  将对象中第一层的属性拷贝，如果对象中的属性有引用数据类型，那第二层的属性不会被拷贝，只是将该属性的地址拷贝，会导致两个对象引用同一个数据
- 深拷贝
  拷贝对象属性时进行判断，如果是引用数据类型，就继续调用拷贝方法进行递归拷贝，如果是基本数据类型，直接拷贝

```js
function deepCopy(o1, o2) {
  for (var key in o1) {
    if (o1[key] instanceof Array) {
      console.log(key) // 如果key是数组类型 Array？  []
      o2[key] = []
      deepCopy(o1[key], o2[key])
    } else if (o1[key] instanceof Object) {
      // 如果key是复杂类型 Object？ {}
      o2[key] = {}
      deepCopy(o1[key], o2[key])
    } else {
      // 如果key这个属性 是基本类型
      o2[key] = o1[key]
    }
  }
}
```
