---
title: HTML5
date: 2015-07-06
category: HTML
order: 2
icon: html
---

## html5 的新标签

html 的骨架不一样
html5 的新增标签： `header` `nav` `footer` `section` 这几个标签跟 `div` 没什么区别，就是语义更强
`section` `aside` `article`

`datalist`
下拉菜单=input+select

> [!warning]  
> datalist 中的 option 的 value 值要跟选项一样，或者不写

分组标签 `fieldset` 分组名字 `legend`

### html5 新增表单类型：

`number` `date`

### html5 新增表单属性：

`placeholder`(提示文本)
`autofocus`(自动获得焦点)
`multiple`(多文件上传)
`autocomplete`(自动提示)：1.必须要有表单域和提交按钮 2.必须要有 name
`requried`(必填项)
`accesskey`(快捷键):alt+键盘字母

## 应用图标

```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
```

> [!warning]  
> 1、它不是 `iconfont` 字体。  
> 2、位置是放到 `head` 标签中间。  
> 3、后面的 `type="image/x-icon"` 属性可以省略。（我相信你也愿意省略。）  
> 4、为了兼容性，请将`favicon.ico`这个图标放到根目录下。

## 网页 title 标题

首页标题：网站名（产品名）- 网站的介绍

- 长度百度（28 个中文）谷歌（35 个中文）
- 最先出现的词语权重越高
- 主关键词出现 3 次，辅关键词出现 1 次

```html
<title>京东(JD.COM)-综合网购首选-正品低价、品质保障、配送及时、轻松购物！</title>
```

> [!warning]  
> 1、描述中出现关键词，与正文内容相关，这部分内容是给人看的，所以要写的很详细，让人感兴趣， 吸引用户点击。  
> 2、同样遵循简短原则，字符数含空格在内不要超过 `120` 个汉字。  
> 3、补充在 `title` 和 `keywords` 中未能充分表述的说明.  
> 4、用英文逗号 `关键词1,关键词2`

```html
<meta
  name="description"
  content="京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!" />
<meta name="keywords" content="小米,小米6,红米Note4,小米MIX,小米商城" />
```

`Keywords`是页面关键词，是搜索引擎关注点之一。  
`Keywords`应该限制在`6～8`个关键词左右，电商类网站可以多少许。

## 清除标签

清除了一些标签，  
常用标签如下：
`blockquote`, `body`, `button`, `dd`, `dl`, `dt`, `fieldset`, `form`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `hr`, `input`, `legend`, `li`, `ol`, `p`, `pre`, `td`, `textarea`, `th`, `ul`

## 兼容处理

在不支持 H5 新标签的浏览器里会将这些新的标签解析成行内元素，需要将其转换成块元素

```html
<!--[if lt IE9]>
    < script src = "js/respond.js" ></script >
    <script src="/js/html5shiv.min.js"></script>    
<![endif]-->
```

## 获取元素

| 方法                         | 说明                             |
| :--------------------------- | :------------------------------- |
| document.querySelector();    | 获取匹配条件的第一个元素         |
| document.querySelectorAll(); | 获取以数组形式存在，需要遍历操作 |

## 类名操作

| 方法                                 | 说明                           |
| :----------------------------------- | :----------------------------- |
| Node.classList.add('className');     | 添加 class                     |
| Node.classList.remove('className');  | 移除 class                     |
| Node.classList.toggle('className');  | 切换 class，有则移除，无则添加 |
| Node.classList.contains('className') | 检测是否存在 class             |

## 自定义属性

`data-xxx="…"` html 标签中加入 `data-id-num="8"`;  
获取 `div.dataset.idNum` 或`div.dataset['idNum']`  
设置 `div.dataset.idNum= 99;` `div.dataset['idNum']=99;`  
删除 `div.dataset.idNum=null`; `div.dataset['idNum']=null`;  
在 JQ 中 `$('div').attr('data-name')`; `$('div').data('idNum')`;

## 网络监听

```js
$(window).addEventLinstener('online', function () {})
$(window).addEventLinstener('offline', function () {})
```

## 全屏显示

| 方法                 | 说明                                      |
| :------------------- | :---------------------------------------- |
| requestFullScreen(); | 开启全屏显示                              |
| cancelFullScreen();  | 退出全屏显示,只能使用 document 来调用实现 |
| fullScreenElement    | 是否是全屏状态，只能通过 document 来调用  |

```css
chrome:webkit
firefox:moz
ie:ms
opeara:o
```

```js
div.webkitRequestFullScreen()
if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
  alert(true)
} else {
  alert(false)
}
```

## FileReader

`onchange` 事件 标签值发生改变触发事件

```js
document.querySelector('#myfile').onchange = function () {
  var reader = new FileReader()
  var file = document.querySelector('#myfile').files[0]
  reader.readAsDataURL(file)
  reader.onload = function () {
    document.querySelector('img').src = reader.result
  }
}
```

① 创建文件读取对象
② 读取文件，获取 `DataURL`
| 方法 | 说明 |
| :----------------------------------- | :----------------------------- |
|readAsText(); |读取文件文件，返回文本字符串，默认编码是 UTF-8|
|readAsBinaryString();|读取任意类型文件，返回二进制字符串，不是用来展示给用户看的，而是传递给后台存储|
|readAsDataURL |没有任何返回值:void;但是读取完文件后会将读取的结果存储在文件读取对象的 result 中。需要传递一个参数文件。文件以 Base64 编码存储在 file 表单元素的 files 属性中，files 是一个数组。|

③ 获取数据
| 方法 | 说明 |
| :----------------------------------- | :----------------------------- |
|onabort| 读取文件中断片时触发|
|onerror| 读取错误时触发|
|onload |文件读取成功完成时触发|
|onloadstart| 开始读取时触发|
|onprogress |读取文件过程中持续触发|

// 多图片上传显示在页面

```js
var file = document.querrySelector('#myfile').files
for (var i = 0; i < file.length; i++) {
  var reader = new FileReader()
  reader.readAsDataURL(file[i])
  reader.onload = function (e) {
    var img = document.createElement('img')
    img.src = e.target.result
    document.querySelector('#dv').appdendChild(img)
  }
}
```

## 拖拽

① 被拖拽标签行内加 `draggable="true"`;
② 应用于被拖拽元素的事件
| 方法 | 说明|
| :----------------------------------- | :----------------------------- |
|ondrag |整个拖拽过程都会调用-持续|
|ondragstart |当拖拽开始时调用|
|ondragleave |当鼠标离开拖拽元素时调用|
|ondragend |当拖拽结束时调用|

③ 应用于目标元素的事件
| 方法 | 说明 |
| :----------------------------------- | :----------------------------- |
|ondragenter| 当拖拽元素进入时调用|
|ondragover| 当停留在目标元素上时调用|
|ondrop |当在目标元素上松开鼠标时调用|
|ondragleave |当鼠标离开目标元素时调用|

浏览器默认会阻止 `ondrop` 事件，必须在 `ondragover` 中阻止浏览器默认行为，`e.preventDefault()`;

```js
document.ondragstart = function (e) {
  console.log(e)
  var id = e.target.id
  e.dataTransfer.setData('text/html', id)
  // console.log(id);
}
document.ondragover = function (e) {
  e.preventDefault()
}
document.ondrop = function (e) {
  id = e.dataTransfer.getData('text/html')
  e.target.appendChild(document.getElementById(id))
}
```

##地图
① 申请密钥
② 找到开发选择 jsAPI
③ 找到需要的 demo,把代码引入并更换密钥

## Web 存储接口

### loaclStorage

```js
localStorage.setItem('aa', 'bb')
localStorage.getItem('aa')
localStorage.removeItem('aa')
```

生命周期：20M 大小，关闭浏览器数据还在，在不同浏览器不能获取该数据，在同一浏览器不同窗口数据可共享

### sessionStorage

```js
sessionStorage.setItem(key, value)
sessionStorage.getItem(value)
sessionStorage.removeItem(key)
sessionStorage.clear() // 清空所有存储内容
```

生命周期：5M 大小，关闭浏览器数据不在，在不同浏览器不能获取该数据，在同一个浏览器不同窗口数据不能共享

### 应用缓存接口

可配置需要缓存的资源；网络无连接应用仍可用；本地读取缓存资源，提升访问速度，增强用户体验；减少请求，缓解服务负担
如需启用应用程序缓存，需在文档的`<html>`标签中包含 `manifest` 属性

```html
<html manifest="demo.appcache">
  manifest文件扩展名建议.appcache;
</html>
```

```php
CACHE MANIFEST
#上面一句代码必须是当前文档的第一句; #后面写注释

#需要缓存的文件清单列表
CACHE: #下面就是需要缓存的清单列表
../images/l1.jpg
../images/l2.jpg

# \*:代表所有文件

#配置每一次都需要重新从服务器获取的文件清单列表
NETWORK:
../images/l3.jpg

#配置如果文件无法获取则使用指定的文件进行替代
FALLBACK:
../images/l4.jpg ../images/banner_1.jpg

# /:代表所有文件
```

## 自定义播放器

### 音视频标签

```html
<audio src="" autoplay controls loop></audio>
<audio autoplay controls loop>
  <source src=""></source>
</audio>
```

### 常用属性

| 属性        | 说明               |
| :---------- | :----------------- |
| currentTime | 视频播放的当前进度 |
| duration    | 视频的总时间       |
| paused      | 视频播放的状态     |

### 常用事件

| 方法         | 说明                                  |
| :----------- | :------------------------------------ |
| oncanplay    | 事件在用户可以开始播放视频/音频时触发 |
| ontimeupdate | 通过该事件来报告当前的播放进度        |
| onended      | 播放完时触发-重置                     |

```js
$(function () {
  var video = $('video')[0]
  $('.switch').click(function () {
    console.log(1)
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
    $(this).toggleClass('fa-play fa-pause')
  })
  $('.expand').click(function () {
    console.log(1)
    if (video.requestFullScreen) {
      video.requestFullscreen()
    } else if (video.webkitRequestFullScreen) {
      video.webkitRequestFullScreen()
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullscreen()
    } else if (video.msRequestFullScreen) {
      video.msRequestFullScreen()
    }
  })
  function timeToHis(time) {
    var hour = Math.floor(time / 3600)
    hour = hour < 10 ? '0' + hour : hour
    var minute = Math.floor((time % 3600) / 60)
    minute = minute < 10 ? '0' + minute : minute
    var second = Math.floor(time % 60)
    second = second < 10 ? '0' + second : second
    return hour + ':' + minute + ':' + second
  }
  video.oncanplay = function () {
    setTimeout(function () {
      video.style.display = 'block'
    }, 2000)
    var totalTime = timeToHis(video.duration)
    $('.totalTime').html(totalTime)
  }
  video.ontimeupdate = function () {
    var currentTime = timeToHis(video.currentTime)
    $('.currentTime').html(currentTime)
    var percent = (video.currentTime / video.duration) * 100 + '%'
    $('.elapse').css('width', percent)
  }
  $('.bar').click(function (e) {
    video.currentTime = (e.offsetX / $(this).width()) * video.duration
  })
  video.onended = function () {
    video.currentTime = 0
    $('.switch').removeClass('fa-pause').addClass('fa-play')
  }
})
```

### fetch 请求

第一个`.then`中拿到的是一个`Response`对象，我们可以调用`response.json()`得到一个新的`promise`

```js
fetch('https://api.douban.com/v2/movie/in_theaters')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
```

默认的`window.fetch`受到跨域限制，无法直接使用，这时候我们使用第三方包`fetch-jsonp`来发送`JSONP`请求，他的用法和浏览器内置的`fetch`完全兼容

```js
import fetchJSONP from 'fetch-jsonp'
fetchJSONP('https://..')
  .then((response) => response.json())
  .then((data) => console.log(data))
```
