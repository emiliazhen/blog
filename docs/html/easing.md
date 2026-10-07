---
title: Easing.js
date: 2015-08-21
category: HTML
order: 3
icon: html
---

easing 是 jquery 的一个插件，使用它可以创建更加绚丽的动画效果

```js
$('.car').animate({ left: '150%' }, 4000, 'easeInElastic', function () {})
```

[tools](https://matthewlein.com/experiments/easing.html)

## 3D 旋转

① 引入 js 文件 `jquery.js` 、`circlr.min.js`
② 书写结构，`data-src`里写路径 `loader`是加载项

```html
<div class="container">
  <div id="circlr">
    <img data-src="picture/1.png" />
    <img data-src="picture/2.png" />
    ...
    <div id="loader"></div>
  </div>
</div>
```

③ 书写 css

```css
#circlr {
  cursor: move;
  margin: 0 auto;
  min-height: 100px;
  position: relative;
}
#circlr #loader {
  background: url(images/loader.gif) center center no-repeat;
  bottom: 0;
  display: none;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
```

④ 调用文件对象

```html
<script>
  // 循环生成图片标签
  for (var i = 1; i < 75; i++) {
    $("<img data-src='picture/" + i + ".png'/>").appendTo('#circlr')
  }
</script>

<script type="text/javascript">
  var crl = circlr('circlr', {
    scroll: true,
    loader: 'loader',
  })
</script>
```

## 视差滚动

利用`background-attachment`属性实现 `fixed` `scroll` `local`
① 引用 `jquery.js` 、`stellar.main.js`
② 引用 html

```html
<div class="content" id="content1">
  <p>TEXT HERE</p>
</div>
<div class="content" id="content2">
  <p>TEXT HERE</p>
</div>
<div class="content" id="content3" data-stellar-background-ratio="0.5">
  <p>TEXT HERE</p>
</div>
<div class="content" id="content4" data-stellar-background-ratio="0.5">
  <p>TEXT HERE</p>
</div>
```

③ 引入 css

```css
body {
  font-size: 20px;
  color: white;
  text-shadow: 0 1px 0 black, 0 0 5px black;
}
p {
  padding: 0 0.5em;
  margin: 0;
}
.content {
  background-attachment: fixed;
  height: 400px;
}
#content1 {
  background-image: url('xxx.jpg');
}
#content2 {
  background-image: url('xxx.jpg');
}
#content3 {
  background-image: url('xxx.jpg');
}
#content4 {
  background-image: url('xxx.jpg');
}
```

④ 调用函数

```js
$.stellar({
  horizontalScrolling: false,
  responsive: true,
})
```

## 参数

| 名称                                  | 说明                                                                                              |
| :------------------------------------ | :------------------------------------------------------------------------------------------------ |
| horizontalScrolling verticalScrolling | 设置视差效果的方向。horizontalScrolling 设置水平方向，verticalScrolling 设置垂直方向，默认为 true |
| responsive                            | 制定 load 或者 resize 时间触发时是否刷新页面，默认为 false                                        |
| hideDistantElements                   | 设置移出视线的元素是否隐藏，若不想隐藏则设置 false                                                |
| data-stellar-radio="2"                | 定义了此元素针对页面滚动的速度比率，如 0.5 为页面滚动的 50%，数值越大页面元素滚动速度越快。       |
| data-stellar-background-radio         | 该配置用在单个有背景元素中，值为一个正数，用来改变被设置元素的影响速度                            |
