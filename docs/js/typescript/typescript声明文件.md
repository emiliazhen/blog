---
title: typescript声明文件
date: 2020-10-13
category: js
icon: typescript
---

## 声明文件

通常我们会把声明语句放到一个单独的 xx.d.ts 文件中

```
/path/to/project
├─ src
│  ├─ index.ts
│  └─ jQuery.d.ts
└─ tsconfig.json
```

## 第三方声明文件

[声明文件查找](https://microsoft.github.io/TypeSearch/)
搜索已经定义好了的声明文件，直接用 npm 安装

```powershell
npm install @types/jquery --save-dev
```

## 书写声明文件

### 全局变量

declare var 声明全局变量

```ts
declare const jQuery: (selector: string) => any
```

declare function 声明全局方法

```ts
declare function jQuery(selector: string): any
```

declare class 声明全局类

```ts
declare class Animal {
  name: string
  constructor(name: string)
  sayHi(): string
}
```

declare enum 声明全局枚举类型

```ts
declare enum Directions {
  Up,
  Down,
  Left,
  Right,
}
```

declare namespace 声明（含有子属性的）全局对象
`namespace`是早期为了解决模块化而创造的关键字，中文名称为命名空间  
在早期还没有 ES6 时，ts 提供了一种模块化方案，使用`module`关键字表示内部模块。但后来`ES6`也使用了`module`关键字，`ts`为了兼容 ES6，使用`namespace`替代了自己的`module`。
推荐使用 ES6 的模块化方案

```ts
declare namespace jQuery {
  function ajax(url: string, settings?: any): void
  const version: number
  class Event {
    blur(eventType: EventType): void
  }
  enum EventType {
    CustomClick,
  }
  namespace fn {
    function extend(object: any): void
  }
}
```

interface 和 type 声明全局类型

### npm 包

给一个`npm`包创建声明文件前先看看它的声明文件是否存在，一般来说可能存在与两个地方：

1. 与该`npm`包绑定在一起。判断依据是`package.json`中有`types`字段，或者有一个`index.d.ts`声明文件；
2. 发布到`@type`里。尝试安装下对应的@type 包即可

若以上两种都没找到对应的声明文件，就需要自己为它写声明文件

1. 可以创建一个`node_modules/@types/xxxx/index.d.ts`文件存放`xxx`模块的声明文件，但目录不稳定，而且无法保存到仓库中
2. 创建一个`types`目录，来管理自己写的声明文件，将`xxx`的声明放到`types/xxx/index/d/ts`中，这种方式需要配置下`tsconfig.json`中的`paths`和`baseUrl`字段

```json
// tsconfig.json
{
  "compilerOptions": {
    "module": "commonjs",
    "baseUrl": "./",
    "paths": {
      "*": ["types/*"]
    }
  }
}
```

配置后，通过`import`导入的`xxx`时，会去`types`目录下寻找对应的模块声明文件

```ts
export const name: string
export function getName(): string
export class Animal {
  constructor(name: string)
  sayHi(): string
}
export enum Directions {
  Up,
  Down,
  Left,
  Right,
}
export interface Options {
  data: any
}
export namespace foo {
  const name: string
  namespace bar {
    function baz(): string
  }
}
```

### UMD 库

既可以通过`<script>`标签引入，又可以通过`import`导入的库，称为`UMD库`
相比`npm`包的类型声明文件，我们需要额外声明一个全局变量，`ts`提供了语法`export as namespace`

```ts
export as namespace foo
export default foo
declare function foo(): string
declare namespace foo {
  const bar: number
}
```

### 在 npm 包或 UMD 库中扩展全局标量

对于`npm包`或`UMD库`，如果导入此库后会宽展全局变量，需要使用`declare global`在声明文件中扩展全局变量的类型

```ts
declare global {
  interface String {
    prependHello(): string
  }
}
export {}
```

### 模块插件

有时通过 import 导入一个模块插件，可以改变另一个原有模块的结构。此时如果原有模块已经有了类型声明文件，而插件模块没有类型声明文件，就会导致类型不完整，缺少插件部分的类型。ts 提供了 declare module 可以用来扩展原有模块的类型

```ts
import * as moment from 'moment'
declare module 'moment' {
  export function foo(): moment.CalendarKey
}
```

### 声明文件中的依赖

除了可以在声明文件中通过`import`导入另一个声明文件中的类型外，还可以用三斜线指令来导入另一个声明文件

1. 书写一个全局变量的声明文件
   在全局变量的声明文件中，是不允许出现`import,export`关键字的，一旦出现了，会被视为一个`npm包`或`UMD库`。
   `///`后面使用 xml 格式添加了对`jquery`类型的依赖，可以在声明文件中使用`JQuery.AjaxSerring`类型了
   `///`指令必须放在文件的最顶端

```ts
/// <reference types="jquery" />
declare function foo(options: JQuery.AjaxSettings): string
```

2. 依赖一个全局变量的声明文件
   引入的 node 中的类型都是全局变量的类型，它们没有办法通过`import`来导入，需要通过`///`来引入。在`src/index.ts`中`foo(global.process)`

```ts
/// <reference types="node" />
export function foo(p: NodeJS.Process): string
```

### 自动生成声明文件

如果库的源码本身就是由`ts`写的，那么在使用`tsc`脚本将`ts`编译为`js`时，添加`declaration`选项，就可以同时也生成`.d.ts`声明文件了  
可以在命令行添加`--declaration` 或 `-d`，或者在`tsconfing.json`中添加`declaration`选项，添加`outDir`选项，将`ts`文件的编译结果输出到`lib`目录下

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "outDir": "lib",
    "declaration": true
  }
}
```

## 发布声明文件

如果声明文件是通过`tsc`自动生成的，那么无需做任何配置，只需把编译好的文件也发布到`npm`上，使用放就可以获取到类型的提示了
如果是手动写的声明文件那么需要满足一下条件之一，才能被正确的识别

1. 给`package.json`中的`types`或`typings`字段指定一个类型声明文件地址
2. 在项目根目录下，编写一个`index.d.ts`文件
3. 针对入口文件`（package.json中main字段指定的入口文件）`，编写一个同名不同后缀的`.d.ts`文件

```json
{
  "name": "xxx",
  "version": "1.0.0",
  "main": "lib/index.js",
  "types": "xxx.d.ts"
}
```

如果我们是在给别人的仓库添加类型声明文件，但原作者不愿意合并，那么需要将声明文件发布到`@types`下
暴露在最外层的`interface`或`type`会作为全局类型作用于整个项目中，我们应该尽可能得减少全局变量或全局类型的数量。最好将他们放在`namespace`下

```ts
declare namespace jQuery {
  interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any
  }
  function ajax(url: string, settings?: AjaxSettings): void
}

// src/index.ts
let settings: jQuery.AjaxSettings = {
  method: 'POST',
  data: {
    name: 'foo',
  },
}
jQuery.ajax('/api/post_something', settings)
```
