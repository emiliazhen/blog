---
title: DOM
date: 2015-05-09
category: webApi
order: 1
icon: browser
---

## DOM 的概念

`DOM (Document Object Model) `文档对象模型

- 是一个规范, 规定了浏览器必须按照规范提供一套完整的`API`
- 学习 DOM 其实就是学习 DOM 规范中提供的`API`(对象和方法)
- 页面上所有能看到的东西都是节点, 节点分为文本节点,注释节点,属性节点,元素节点
- 整个页面是一个文档，页面中所有的标签都被成为元素节点,也简称元素

### document.getElementById()

传入的 id 区分大小写
JS 代码一定要在页面加载完成之后执行, script 标签需要放在需要获取元素的页面结构后面, 否则会出现获取不到元素的情况
script 标签如果写在 body 或 html 标签外面, Chrome 浏览器会自动把 script 标签放到 body 标签的底部

### getElementsByTagName()

根据标签名获取元素, 返回值是一个伪数组
返回的伪数组是一个动态集合, 页面上如果动态生成了一些元素, 集合也会跟着一起改变
该方法除了 document 对象可以调用, 其他的 DOM 元素都可以调用, 可以实现限定范围的获取元素, 例如获取 id 为 container 下所有的 div

### 其他获取元素的方法

<table>
  <tr>
    <td>getElementsByName</td>
    <td>根据 name 属性查找元素, 返回伪数组, 有兼容性问题, 老版本 IE 和 Opera 会把 id 也算进去</td>
  </tr>
  <tr>
    <td>getElementsByClassName</td>
    <td>根据 className 属性查找元素, 返回伪数组, 有兼容性问题, 老版本 IE 不兼容</td>
  </tr>
  <tr>
    <td>querySelector</td>
    <td>根据选择器查找元素, 返回第一个找到的元素对象, 有兼容性问题, 老版本 IE 不兼容</td>
  </tr>
  <tr>
    <td>querySelectorAll</td>
    <td>根据选择器查找元素, 返回伪数组, 所有和选择器匹配的元素, 有兼容性问题, 老版本 IE 不兼容 </td>
  </tr>
</table>

以上这些有兼容性问题的方法, 基础阶段不推荐使用

## 注册事件

注册事件有三要素

1. 事件源
2. 事件类型
3. 事件处理函数
   事件源.事件类型 = 事件处理函数

当事件被触发时, 浏览器会执行对应的事件处理函数, 例如当前按钮被点击时, 就会找到当前按钮的`onclick`方法并调用  
非表单元素属性
`href`、`title`、`id`、`src`、`className`
`className`: 对应着标签中的`class`, 因为`class`是 JS 中的保留字, 不能作为属性名来使用, 通过 DOM 对象设置元素的类样式, 一定要使用`className`
事件处理函数中的`this`

1. 普通函数调用 this 的指向 window
2. 构造函数的 this 指向 新创建的对象
3. 对象调用方法的 this 指向 当前方法所属的对象
   事件源.事件类型 = 事件处理函数

```js
btn.onclick = function () {
  this //指向当前的事件源 btn
}
div.onclick = function () {
  this //指向当前的事件源 div
}
```

点击 A 标签，切换大图中的显示图

```js
var imageGallery = document.getElementById('imageGallery')
var links = imageGallery.getElementsByTagName('a')
var image = document.getElementById('image')
var des = document.getElementById('des')
console.dir(des)
for (var i = 0; i < links.length; i++) {
  var link = links[i]
  console.log(link)
  link.onclick = function () {
    image.src = this.href
    des.innerText = this.title
    return false
  }
}
```

循环绑定事件，并且在时间处理函数中要用到时间源时只能用 `this`

## innerText 和 innerHTML

```js
p.innerText = 'hello'
div.innerHTML = '<p>aaa</p>'
```

字符串拼接 -> 解析 HTML 代码创建 DOM 对象 ->将 DOM 对象挂载到 DOM 树 ->重绘页面

### innerText

获取: 纯文本, 不包括 HTML 标签
设置: 纯文本, 如果有 HTML 标签也会被解析成纯文本, 不会在页面上起到效果

### innerHTML:

获取: 当前元素内所有的内容, 包括 HTML 标签
设置: 当前元素的内容, 如果有 HTML 标签会被解析并显示效果

> [!tip]  
> 当确定标签内的内容一定是纯文本的时候, 推荐使用 innerHTML 获取, 因为这时候 innerText 和 innerHTML 效果一模一样, 但是 innerHTML 没有兼容性问题

## 表单元素属性

### 表示状态

- disabled  
  是否禁用
- selected  
  是否选择
- checked  
  是否勾选

### 文本类: 都是 string 类型

- value
- type

### 事件

- onfocus  
  事件获取焦点事件
- onblur  
  失去焦点事件

### 全选反选

```js
function checkAllCheckBox() {
  var isAllChecked = true
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i]
    if (input.type === 'checkbox') {
      if (!input.checked) {
        isAllChecked = false
        break
      }
    }
  }
  j_cbAll.checked = isAllChecked
}
var j_tb = document.getElementById('j_tb')
var inputs = j_tb.getElementsByTagName('input')
var j_cbAll = document.getElementById('j_cbAll')
j_cbAll.onclick = function () {
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i]
    if (input.type === 'checkbox') {
      //点击全选时，子选项全选/不选
      input.checked = this.checked
    }
  }
}
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i]
  if (input.type === 'checkbox') {
    //给每一个子选项注册点击时间
    input.onclick = function () {
      checkAllCheckBox()
    }
  }
}
var btn = document.getElementById('btn')
btn.onclick = function () {
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i]
    if (input.type === 'checkbox') {
      input.checked = !input.checked
    }
  }
  checkAllCheckBox()
}
```

## 操作自定义属性

- 添加  
  setAttribute
- 获取  
  getAttribute
- 移除  
  removeAttribute

> [!tip]
> 除了操作自定义属性还可以操作已有的属性
> 但是, 不推荐使用以上方式操作已有属性, 因为不方便

## 样式操作

使用 style 方式设置的仰视显示在标签行内

```js
var box = document.getElementById('box')
box.style.backgroundColor = 'red'
```

通过样式属性设置宽高、位置的属性类型是字符串，需要加上 px

## 事件

- onmouseover  
  鼠标经过
- onmouseout  
  鼠标离开

## Tab 切换

```js
var hd = document.getElementById('hd')
var spans = hd.getElementsByTagName('span')
var bd = document.getElementById('bd')
for (var i = 0; i < spans.length; i++) {
  var span = spans[i]
  span.onmouseover = fn
}
function fn() {
  for (var i = 0; i < spans.length; i++) {
    var span = spans[i]
    span.setAttribute('index', i)
    span.className = ''
  }
  this.className = 'current'
  var divs = bd.getElementsByTagName('div')
  for (var i = 0; i < spans.length; i++) {
    var div = divs[i]
    div.className = ''
  }
  var index = parseInt(this.getAttribute('index'))
  divs[index].className = 'current'
}
```

## 短路与 短路或 的另一种用法

```js
this.nodeName = options.nodeName || ''
```

连接两个非`boolean`类型的运算数，返回对表达式结果起到决定性作用的那个运算数
决定性作用:与运算的特点就是只要有`false`就是`false` 或运算的特点就是只要有`true`就是`true`

## 节点

### 父子节点

| 属性              | 说明                                                      |
| :---------------- | :-------------------------------------------------------- |
| childNodes        | 获取所有的子节点（包括元素、文本、注释），多个            |
| parentNode        | 父节点，一定是元素，只有一个                              |
| children          | 获取所有的直接子元素                                      |
| firstchild        | 第一个子节点                                              |
| firstElementChild | 第一个子元素，更简单的方法：children[0]                   |
| lastElementChild  | 最后一个子元素，更简单的方法：children[children.length-1] |

只要是获取元素相关的属性，都有兼容性问题，兼容性问题的处理方式：

```js
function getFirstElementChild(element) {
  var node
  var nodes = element.childNodes // 节点相关的属性 都没有兼容性问题
  var i = 0
  while ((node = nodes[i++])) {
    // 只要是对象 非undefined 非null 转成boolean类型都是true
    if (node.nodeType === 1) {
      return node
    }
  }
  return null // 没有元素节点 就返回null
}
```

> [!tip]
> javascript:void(0)让 a 标签不跳转

### 兄弟节点

| 属性                   | 说明           |
| :--------------------- | :------------- |
| previousSibling        | 上一个兄弟节点 |
| nextSilbling           | 下一个兄弟节点 |
| previousElementSibling | 上一个兄弟元素 |
| nextElementSibling     | 下一个兄弟元素 |

兼容性处理方式：

```js
function getNextElementSibling(element) {
  var el = element
  while ((el = el.nextSibling)) {
    if (el.nodeType === 1) {
      return el
    }
  }
  return null
}
```

### 元素操作

#### 创建

- document.write()  
  会覆盖整个页面，不推荐使用
- document.createElement()  
  在内存中创建一个元素对象，可以通过操作`DOM`对象的方式来修改属性，不会显示在页面上，如果需要显示在页面上某个位置，需要父元素调用 `appendChild()`

#### 移除

- removeChild()  
  移除子元素
- this.parentNode.removeChild(this)  
  移除自己

#### 插入

- appendChild()  
  将元素对象追加当前元素末尾，如果元素对象已经存在于`DOM`树中，会直接移动过来
- insertBefore()  
  将元素插入到指定参考节点前

#### 替换/克隆

- replaceChild()  
  替换元素
- cloneNode()  
  克隆节点，参数 1：是否深层克隆 `true`表示需要克隆所有的子节点，`false`只克隆当前一层

## 事件监听

绑定事件的另一种方式

### 添加

`addEventListener()`
参数 1：事件类型，不带 on,例如："click"  
参数 2：事件处理函数  
兼容性处理

```js
function addEventListener(element, eventName, fn) {
  // 判断当前浏览器是否支持addEventListener 方法
  if (element.addEventListener) {
    element.addEventListener(eventName, fn) // 第三个参数 默认是false
  } else if (element.attachEvent) {
    element.attachEvent('on' + eventName, fn)
  } else {
    // 相当于 element.onclick = fn;
    element['on' + eventName] = fn
  }
}
```

### 移除

`removeEventListener()`

- 参数 1  
  事件类型，不带 on
- 参数 2  
  事件处理函数，必须是添加事件监听器时使用的函数，添加事件监听器时不能使用匿名函数

兼容性处理

```js
function removeEventListener(element, eventName, fn) {
  if (element.removeEventListener) {
    element.removeEventListener(eventName, fn)
  } else if (element.detachEvent) {
    element.detachEvent('on' + eventName, fn)
  } else {
    element['on' + eventName] = null
  }
}
```

### 事件的三个阶段

- 捕获阶段
- 目标阶段
- 冒泡阶段

> [!tip]  
> 所有事件触发时，都会经历以上三个阶段，而平时绑定事件时只能选择处理捕获阶段或者冒泡阶段  
> 捕获就是从外到内逐层触发事件  
> 冒泡就是从内到外逐层触发事件

### 事件对象

所有事件触发时都会携带一个参数传入事件处理函数中，那个参数就是事件对象

```js
div.onclick = function (e) {
  //e 就是事件对象
  //e.currentTarget就是div
}
```

处理兼容性问题:

```js
e = e || window.event
```

事件对象中存储了事件触发时的相关信息, 例如:
| 属性| 说明 |
| :--------- | :-------------------------------- |
|target | 事件目标，真正触发事件的那个元素 兼容性处理：` var tartget = e.target || e.srcElement`|
|eventPhase |事件阶段|
|currentTarget |事件处理函数所属的对象，同`this`|
|type |当前触发的事件类型，不带 on|
|clinentX / clinentY |鼠标在可视区的坐标|
|pageX / pageY |鼠标在页面中的坐标|

### 鼠标事件

`onmousemove`
| 事件 | 说明 |
| :--------- | :-------------------------------- |
|onscroll |滚动时间|
|onmouseenter |鼠标经过，不冒泡|
|onmouseleave |鼠标离开，不冒泡|

> [!warning]  
> onmouseout 的问题  
> 会冒泡  
> 当鼠标从父元素移动到子元素时，也会被判定为鼠标离开了父元素  
> 使用 onmouseleave 即可解决，因为 onmouseleave 离开盒子时会看文档结构，鼠标只有离开了当前元素及其所有子元素才会判定为离开当前元素

#### pageX 和 pageY 的兼容性处理

clientX + 页面滚动出去的距离 = pageX

```js
function getScroll() {
  var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop,
  }
}
function getPage(e) {
  var pageX = e.pageX || e.clientX + getScroll().scrollLeft
  var pageY = e.pageY || e.clientY + getScroll().scrollTop
  return {
    pageX: pageX,
    pageY: pageY,
  }
}
```

#### 获取鼠标在盒子中的位置

鼠标在盒子中的位置：

```js
e.pageX - box.offsetLeft
e.pageY - box.offsetTop
```

### 阻止冒泡

```js
e.stopPropagation()
```

需要阻止哪个元素的事件冒泡，就在哪个元素的事件处理函数中调用该方法即可

### 键盘事件

#### 键盘按下:

| 事件       | 说明                                                               |
| :--------- | :----------------------------------------------------------------- |
| onkeydown  | 不区分大小写, 大写 `A` 和小写 `a` 都是 `65 `                       |
| onkeypress | 键盘按下时触发, 但是区分大小写, 大写 `A` 为 `65`, 小写 `a` 为 `97` |

#### 键盘弹起

`onkeyup`  
触发键盘事件时也会携带事件对象

```js
input.onkeydown = function (e) {
  //e.keyCode; 键盘码 ASCII按下键盘时 那个按键对应的键盘码
}
```
