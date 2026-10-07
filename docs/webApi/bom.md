---
title: BOM
date: 2015-05-16
category: webApi
order: 2
icon: browser
---

## 顶级对象 window

在全局作用域中所有的东西都是`window`的属性，所有`window.的属性或方法`，都可以省略`window`

<table>
  <tr>
    <td>onload 事件</td>
    <td>Na页面加载事件，`onload`页面结构加载完成，外部资源加载完成时触发</td>
  </tr>
  <tr>
    <td>onunload 事件</td>
    <td>页面卸载时触发</td>
  </tr>
</table>

### 对话框

- `alert();`
- `prompt();`
- `confirm();`

### 延时定时器

设置定时器后，延时指定的时间做一些事情

#### 设置

`setTimeout()`

- 参数 1：函数，要执行的代码
- 参数 2：延时的时间，单位是 ms（毫秒）
- 返回值：定时器 ID，number 类型

#### 清除

`clearTimeout()`

- 参数 1：定时器 ID

### 间歇定时器

设置定时器后，延时指定的时间做一些事情，并且每隔指定的时间都会重复执行

#### 设置

`setInterval()`

#### 清除

`clearInterval()`

### location 对象

#### href 属性

地址栏，设置该属性可以实现页面跳转

<table>
  <tr>
    <td>assign</td>
    <td>跳转，会保留历史记录，可以返回</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>跳转，不会保留历史记录，无法返回</td>
  </tr>
   <tr>
    <td>reload</td>
    <td>刷新页面，传入 boolean 值，是否强制刷新，类似ctrl+F5</td>
  </tr>
</table>

#### url 的组成

```
h t t p ://127.0.0.1:8080/logManager?pageIndex=1&pageSize=20#logDetails
└scheme┘  └──host──┘└port┘└──path──┘└─────────query─────────┘└fragment┘
```

<table>
  <tr>
    <td>scheme</td>
    <td>通信协议</td>
    <td>常用的http, ftp, maito等</td>
  </tr>
  <tr>
    <td>host</td>
    <td>主机</td>
    <td>服务器(计算机)域名系统(`DNS`) 主机名或 IP 地址</td>
  </tr>
  <tr>
    <td>port</td>
    <td>端口号</td>
    <td>整数，可选，省略时使用方案的默认端口，如 http 的默认端口为 80</td>
  </tr>
  <tr>
    <td>path</td>
    <td>路径</td>
    <td>由零或多个'/'符号隔开的字符串，一般用来表示主机上的一个目录或文件地址</td>
  </tr>
  <tr>
    <td>query</td>
    <td>查询</td>
    <td>可选，用于给动态网页传递参数，可有多个参数，用'&'符号隔开，每个参数的名和值用=符号隔开。例如：name=zs</td>
  </tr>
  <tr>
    <td>fragment</td>
    <td>信息片断</td>
    <td>字符串，锚点</td>
  </tr>
</table>

### history 对象

页面前进后腿

- forword()
- back()
- go()

### navigator 对象

获取客户端版本信息`navigator.userAgent`

### offset 系列属性

<table>
  <tr>
    <td>offsetLeft</td>
    <td>获取到 offsetParent 左边缘的距离</td>
  </tr>
  <tr>
    <td>offsetTop</td>
    <td>获取到 offsetParent 上边缘的距离 </td>
  </tr>
  <tr>
    <td>offsetHeight</td>
    <td>获取元素的高度，包括 border，padding，内容自身的高度</td>
  </tr>
  <tr>
    <td>offsetWidth</td>
    <td>获取元素的宽度，包括 border，padding，内容自身的宽度</td>
  </tr>
  <tr>
    <td>offsetParent</td>
    <td>获取距离自身最近的且带有定位（position 非 static）的父元素</td>
  </tr>
</table>

### client 系列属性

<table>
  <tr>
    <td>clientLeft</td>
    <td>（没啥用）</td>
  </tr>
  <tr>
    <td>clientTop</td>
    <td>（没啥用） </td>
  </tr>
  <tr>
    <td>clientHeight</td>
    <td>获取元素的高度，包括 padding，内容自身的高度，不包括 border </td>
  </tr>
  <tr>
    <td>clientWidth</td>
    <td>获取元素的宽度，包括 padding，内容自身的宽度，不包括 border</td>
  </tr>
</table>

### scroll 系列属性

<table>
  <tr>
    <td>scrollLeft</td>
    <td>获取内容向左滚出去的宽度</td>
  </tr>
  <tr>
    <td>scrollTop</td>
    <td>获取内容向上滚动出去的高度</td>
  </tr>
  <tr>
    <td>scrollHeight</td>
    <td>获取内容的高度，如果内容溢出，获取的也是整体内容的宽度（包括了溢出的内容），如果内同没有溢出，同 clientHeight</td>
  </tr>
  <tr>
    <td>scrollWidth</td>
    <td>获取内容的高度，如果内容溢出，获取的也是整体内容的宽度（包括了溢出的内容），如果内同没有溢出，同 clientWidth </td>
  </tr>
</table>

> [!tip]  
> 以上三个属性都是只读属性，只能获取不能设置，获取的都是不带单位的 number 类型的数据

## 轮播图

```js
// 获取元素
var box = my$('box')
var screen = box.children[0]
var ul = screen.children[0]
var ol = screen.children[1]
// 箭头 arrow
var arr = my$('arr')
var arrLeft = my$('left')
var arrRight = my$('right')
// 图片的宽度
var imgWidth = screen.offsetWidth
// 1 动态生成序号
// 页面上总共有多少张图片 5 没有克隆的li
var count = ul.children.length
for (var i = 0; i < count; i++) {
  var li = document.createElement('li')
  ol.appendChild(li)
  setInnerText(li, i + 1)
  // 2 点击序号 动画的方式 切换图片
  li.onclick = liClick
  // 让当前li记录他的索引
  // 设置标签的自定义属性
  li.setAttribute('index', i)
}
function liClick() {
  // 2.1 取消其它li的高亮显示，让当前li高亮显示
  for (var i = 0; i < ol.children.length; i++) {
    var li = ol.children[i]
    li.className = ''
  }
  // 让当前li高亮显示
  this.className = 'current'
  // 2.2 点击序号，动画的方式切换到当前点击的图片位置
  // 获取自定义属性
  var liIndex = parseInt(this.getAttribute('index'))
  animate(ul, -liIndex * imgWidth)
  // 全局变量index 和 li中的index保持一致
  index = liIndex
}
// 让序号1高亮显示
ol.children[0].className = 'current'

// 3 鼠标放到盒子上显示箭头
box.onmouseenter = function () {
  arr.style.display = 'block'
  // 清除定时器
  clearInterval(timerId)
}
box.onmouseleave = function () {
  arr.style.display = 'none'
  // 重新开启定时器
  timerId = setInterval(function () {
    arrRight.click()
  }, 2000)
}
// 4 实现上一张和下一张的功能
// 下一张
var index = 0 // 第一张图片的索引
arrRight.onclick = function () {
  // 判断是否是克隆的第一张图片，如果是克隆的第一张图片，此时修改ul的坐标，显示真正的第一张图片
  if (index === count) {
    ul.style.left = '0px'
    index = 0
  }
  //
  // 总共有5张图片，但是还有一张克隆的图片 克隆的图片的索引是5
  // 4 < 5
  index++
  if (index < count) {
    // animate(ul, -index * imgWidth);
    // //
    // 获取图片对应的序号，让序号点击
    ol.children[index].click()
  } else {
    //如果是最后一张图片 以动画的方式，移动到克隆的第一张图片
    animate(ul, -index * imgWidth)
    // 取消所有序号的高亮显示，让第一序号高亮显示
    for (var i = 0; i < ol.children.length; i++) {
      var li = ol.children[i]
      li.className = ''
    }
    ol.children[0].className = 'current'
  }
}
// 上一张
arrLeft.onclick = function () {
  // 如果当前是第一张图片，此时要偷偷的切换到最后一张图片的位置（克隆的第一张图片）
  if (index === 0) {
    index = count
    ul.style.left = -index * imgWidth + 'px'
  }
  index--
  ol.children[index].click()
  // // 如果不是第一张的话 index--
  // if (index > 0) {
  // index--;
  // // animate(ul, -index * imgWidth);
  // ol.children[index].click();
  // }
}
// 无缝滚动
// 获取ul中的第一个li
var firstLi = ul.children[0]
// 克隆li cloneNode() 复制节点
// 参数 true 复制节点中的内容
// false 只复制当前节点，不复制里面的内容
var cloneLi = firstLi.cloneNode(true)
ul.appendChild(cloneLi)

// 5 自动切换图片
var timerId = setInterval(function () {
  // 切换到下一张图片
  arrRight.click()
}, 2000)
```
