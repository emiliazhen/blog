---
title: 巩固Flutter
date: 2018-03-21
order: 9
icon: flutter
---

## `Flutter`与`ReactNative`区别

`Flutter`通过`dart`语言开发，`ReactNative`使用`JS`开发  
`Flutter`对`android`支持更好,`ReactNative`对苹果支持更好  
两者最终都能生成原生`APP`

## `Widgets`、`RenderObjects` 和 `Elements`的关系

`widgets`是由`elements`管理的，包括`widget`的状态，位置信息等，`RenderObjects`是用来渲染绘制的，最终页面能够呈现在我们的手机屏幕上就是靠`RenderObjects`。

## `flutter`使用到的 Key 有哪些

`localkey`、`globalkey`、`uniquekey`、`ObjectKey`，`globalkey`可以是全局的`key`，整个应用唯一的，是很昂贵的，允许`element`在树周围移动或变更父节点而不会丢失状态，一般尽量少用。

## `Stateless Widget`和`Stateful Widget`区别

`Stateless`是无状态，不会重新绘制页面，`Stateful` 使用状态的，可以通过`setstate`来让页面重新绘制，所以一般如果不需要保持状态的页面应该使用`stateless Widget`，这样可以减少页面的加载时间及内存的占用。

## `flutter`页面的生命周期

类似原生`android`或者`ios`开发一样，`flutter`也有自己的声明周期，如下：

- `initState()`
- `didChangeDependencies()`
- `build()`
- `reassemble()`
- `didUpdateWidget()`
- `deactivate()`
- `dispose()`

## 有使用过哪些常用的第三方框架？

`provider`状态管理插件，`fluro`路由管理插件，`sqflite`数据库插件等

## `Hot Restart` 和 `Hot Reload` 有什么区别吗？

`Hot Restart`重启整个应用，也就是重新编译代码， `Hot Reload`只是加载部分更改的代码，所以`hot reload`是比`hot restart`更快的显示。

## `future` 和`stream`的区别

都是用来异步处理的，`future`是单个异步的，而`stream`是操作连续的异步处理

## `mixin`特性

`mixin`是`dart`语言独有的新特性，意思就是可以混入多个类，类似多继承，但并不是传统的那种继承，`mixin`定义的类不能有构造方法，避免了与父类的构造方法的冲突

## `Flutter`架构介绍

`flutter`主要有三层`Framework`、`Engine`、`Embedder`

- `framework`就是提供给我们开发的各种组件等，
- `engine`就是把我们的代码编译运行，帮我们渲染`UI`，绘制图形等
- `Embedder`是用来映射成原生的`app`
