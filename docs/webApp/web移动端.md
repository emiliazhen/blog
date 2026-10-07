---
title: web移动端
date: 2015-06-03
category: webApp
order: 1
icon: mobile
---

## 调试

- 远程调试
- 模拟调试 网页中打开开发者模式
- 真机调试

## 视口

`pc端`的视口大小就是浏览器的大小 `width:100%` 流式布局/百分比布局
`pc端`的视口有一个默认的尺寸 `980px` `pc`的页面在移动端会被缩放

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
```

### 可设置值

| 属性          | 说明                                                              |
| :------------ | :---------------------------------------------------------------- |
| width         | 设置`layout viewport`的宽度，为一个正整数，或字符串`device-width` |
| intial-scale  | 设置页面初始缩放值                                                |
| minimum-scale | 允许用户的最小缩放值                                              |
| maximum-scale | 允许用户的最大缩放值                                              |
| height        | 设置`layout viewport`的高度                                       |
| user-scalable | 是否允许用户进行缩放，no 或 yes                                   |

## onresize

当窗口或框架被调整大小时触发

## 相机

```html
<input ctype="file" accept="image/*" capture="camera" />
```

## 图片轮播

可以用`transform`和定位来实现，需要克隆两张到头和尾，需要动态更改父盒子和图片的宽度大小  
首先声明`index=1;`让定时器执行一次执行偏移并索引自增一次

```js
function jdBannerMove(params) {
  var bannerWidth = document.querySelector('.jd_banner').offsetWidth
  // console.log(bannerWidth);
  var ul = document.querySelector('.jd_bannerImg')
  var lis = document.querySelectorAll('.jd_bannerImg li')
  // console.log(lis);
  ul.appendChild(lis[0].cloneNode(true))
  ul.insertBefore(lis[lis.length - 1].cloneNode(true), lis[0])
  lis = document.querySelectorAll('.jd_bannerImg li')
  var count = lis.length
  // console.log(count);
  ul.style.width = count * bannerWidth + 'px'
  for (var i = 0; i < count; i++) {
    lis[i].style.width = bannerWidth + 'px'
  }
  var index = 1
  ul.style.transform = 'translateX(' + -index * bannerWidth + 'px)'
  window.onresize = function () {
    ul.style.transition = 'none'
    bannerWidth = document.querySelector('.jd_banner').offsetWidth
    ul.style.width = count * bannerWidth + 'px'
    for (var i = 0; i < count; i++) {
      lis[i].style.width = bannerWidth + 'px'
    }
    ul.style.transform = 'translateX(' + -index * bannerWidth + 'px)'
  }
  var timerId
  function startAutoMove() {
    timerId = setInterval(function () {
      index++
      ul.style.transition = 'transform 0.8s ease-in-out'
      ul.style.transform = 'translateX(' + -index * bannerWidth + 'px)'
      // console.log(index);
      setTimeout(function () {
        if (index == count - 1) {
          ul.style.transition = 'none'
          index = 1
          ul.style.transform = 'translateX(' + -index * bannerWidth + 'px)'
        }
      }, 800)
    }, 2000)
  }
  startAutoMove()
  var startX, moveX, distanceX
  var isEnd = true
  ul.addEventListener('touchstart', function (e) {
    startX = e.targetTouches[0].clientX
    clearInterval(timerId)
  })
  ul.addEventListener('touchmove', function (e) {
    if (isEnd == true) {
      moveX = e.targetTouches[0].clientX
      distanceX = moveX - startX
      ul.style.transition = 'none'
      ul.style.transform = 'translateX(' + (-index * bannerWidth + distanceX) + 'px)'
    }
  })
  var persentX = 0.15
  ul.addEventListener('touchend', function () {
    isEnd = false
    if (distanceX != 0) {
      if (Math.abs(distanceX) >= persentX * bannerWidth) {
        if (distanceX > 0) {
          index--
        } else {
          index++
        }
        ul.style.transition = 'transform 0.8s ease-in-out'
        ul.style.transform = 'translateX(' + -index * bannerWidth + 'px)'
      } else if (Math.abs(distanceX) < persentX * bannerWidth) {
        ul.style.transition = 'transform 0.8s ease-in-out'
        ul.style.transform = 'translateX(' + -index * bannerWidth + 'px)'
      }
    }
    startX = 0
    moveX = 0
    distanceX = 0
  })
  ul.addEventListener('webkitTransitionEnd', function () {
    if (index == 0) {
      index = count - 2
      ul.style.transition = 'none'
      ul.style.transform = 'translateX(' + -index * bannerWidth + 'px)'
    }
    if (index == count - 1) {
      index = 1
      ul.style.transition = 'none'
      ul.style.transform = 'translateX(' + -index * bannerWidth + 'px)'
    }
    olActiveChange(index)
    setTimeout(function () {
      isEnd = true
      clearInterval(timerId)
      startAutoMove()
    }, 200)
  })
  // 小圆点跟随图片滚动而切换
  function olActiveChange(index) {
    var ol_lis = document.querySelectorAll('.jd_bannerIndicator li')
    // console.log(ol_lis);
    for (var i = 0; i < ol_lis.length; i++) {
      ol_lis[i].classList.remove('active')
    }
    ol_lis[index - 1].classList.add('active')
  }
}
```

## 触屏事件

| 事件       | 说明                   |
| :--------- | :--------------------- |
| touchstart | 手指触摸屏幕时触发     |
| touchmove  | 手指在屏幕上移动时触发 |
| touchend   | 手指离开屏幕时触发     |

TouchEvent 对象
| 属性 | 说明 |
| :------------ | :---------------------------------------------------------------- |
|touches|位于屏幕上的所有手指的列表|
|targetTouches|位于该元素上的所有手指的列表 推荐用 targetTouches|
|changedTouches |touchstart 时包含刚与触摸屏接触的触点,touched 时包含离开触摸屏的触点|

touch 对象
| 属性 | 说明 |
| :------------ | :---------------------------------------------------------------- |
|clientX/clientY |手指相对于 layout viewport 的水平/垂直像素距离|
|pageX/pageY |手指相对于 layout viewport 的水平/垂直像素距离(含滚动)|
|screenX/screenY |手指相对于 layout viewport 的水平/垂直像素距离(含滚动)|
|target |手指最初与屏幕接触时的元素|

过渡结束事件兼容
webkitTransitionEnd

## tap 事件封装

```js
传 /*同一个元素不仅仅只有单击事件，所以用对象的成员提高扩展性*/
var tools = {
  /*dom:传入的dom元素让我们可以为任意的元素添加tap事件*/
  tap: function (dom, callback) {
    /*判断是否传入对象同时对象应该是一个dom元素*/
    if (!dom || typeof dom != 'object') {
      return
    }
    var startTime, startX, startY
    dom.addEventListener('touchstart', function (e) {
      /*判断是否只有一根手指进行操作*/
      if (e.targetTouches.length > 1) {
        //说明不止一个手指
        return
      }
      /*记录手指开始触摸的时间*/
      startTime = Date.now()
      /*记录当前手指的坐标*/
      startX = e.targetTouches[0].clientX
      startY = e.targetTouches[0].clientY
      /*来做一些与事件相关的初始化操作*/
    })
    /*touchend：当手指松开时候触发，意味着当前元素上已经没有手指对象了,所以无法通过targetTouches来获取手指对象*/
    dom.addEventListener('touchend', function (e) {
      /*判断是否只有一根手指进行操作*/
      if (e.changedTouches.length > 1) {
        //说明不止一个手指
        return
      }
      if (Date.now() - startTime > 150) {
        //长按操作
        return
      }
      /*判断松开手指时的坐标与触摸开始时的坐标的距离差异*/
      var endX = e.changedTouches[0].clientX
      var endY = e.changedTouches[0].clientY
      /*这里暂且将距离差异定为6*/
      if (Math.abs(endX - startX) < 6 && Math.abs(endY - startY) < 6) {
        console.log('这就是移动端的单击事件--tap事件')
        /*执行tap事件响应后的处理操作*/
        /*判断用户是否传入的回调函数*/
        callback && callback(e)
      }
    })
  },
}
```

## zepto

Tap 事件

```js
$('#id').on('tap', callback)
```

## 点透

当我们触发当前的事件时会导致跟他相关的对象也会触发绑定在他们身上的事件

## fastClick

1. 引入 fastclick.js
2. js 代码

```js
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function () {
      FastClick.attach(document.body)
    },
    false
  )
}
```

或者

```js
$(function () {
  FastClick.attach(document.body)
})
```

3. 对我们需要的对象绑定事件

```js
div.addEventListener('click', callback)
```

## iscroll

可以实现客户端原生滚动效果  
添加滚动条需给标签元素添加一个`position:relative`属性

```html
<div id="wrapper">
  <ul>
    <li>...</li>
    <li>...</li>
    ...
  </ul>
</div>
<script src="./js/iscroll.js"></script>
<script type="text/javascript">
  var myScroll = new IScroll('#wrapper', {
    mouseWheel: true, // 鼠标滚动也可以实现滑动
    scrollbars: true, //添加滚动条
  })
</script>
```

## swiper

[swiper](http://www.swiper.com.cn/)
滑动插件、轮播图

## 响应式布局

屏幕尺寸不一样展示给用户的网页内容也不一样

<table>
  <tr>
    <td>0-768px</td>
    <td>移动端</td>
  </tr>
  <tr>
    <td>768-992px</td>
    <td>平板端</td>
  </tr>
  <tr>
    <td>992-1200px</td>
    <td>老式电脑</td>
  </tr>
  <tr>
    <td>>1200px</td>
    <td>pc 端 </td>
  </tr>
</table>

## 媒体查询

```css
@media screen and (min-width: 768px) and (max-width: 992px) {
}
```

条件只写`min-width` 从小宽度到大写

```css
@media screen and (min-width:768px){
     body{ background-color:red}
}

@media not screen and (min-width:768px) and (max-width:992px){…}
<link rel="stylesheet" media="screen and (min-width:992px)" href="aa.css">
```

## 常见响应式框架

bootstrap  
amaza UI  
Framework 7
