---
title: bootstrap
date: 2015-06-13
category: webApp
order: 3
icon: bootstrap
---

## 兼容

- 要兼容`media query`需要引入`respond.js`
- 为了让`ie`浏览器运行最新的渲染模式需加入

  ```html
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  ```

## 布局容器

- container

| 当前视口宽度 | 样式宽度 |
| :----------- | :------- |
| 0-768        | 100%     |
| 768-992      | 750px    |
| 992-1200     | 970px    |
| >1200        | 1170px   |

- container-fluid
  宽度`width:100%;`

## 栅格系统

默认将当前`12`等分

1. 添加布局容器`container/container-fluid`
2. 在布局容器中添加 row
3. 在 row 中添加子元素设置栅格样式 `col-xs-3` `col-sm-6` `col-md-8` `col-lg-12`
4. 在子元素中添加具体内容

## offset

偏移距离以栅格作为单位，实际是通过`margin-left`属性来实现 `col-sm-offset-2`
`push`右推 `pull`左拉
通过定位来实现的 col-md-pull-3;

## less

动态的样式表语言

### 注释

`//`在解析的 css 中看不到 `/* */`在解释的 css 中可以看到

### 变量

```less
@aa: red;
```

### 混入

```less
.active(@bb:red) {
  color: @bb;
}
.active2 {
  .active(green);
}
```

### 嵌套

```less
.jd_layout {
  color: @aa;
  .jd_search {
    width: 100%;
  }
  a {
    color: blue;
    &:hover {
      color: red;
    }
  }
}
```

### 导入

```less
@import 'aa.less'; //@import + 路径
p {
  color: @bb;
}
```

### bootstrap 轮播

`w<768px` 使用 `img`标签 宽度 `100%`;  
`w>=768px` 使用背景图片 `background-image; background-size:cover; `
更改 `data-target` 和 `href data-traget="#id"`控制为`#id `的容器，`herf="#a"`锚连接  
在 `div` 行内设置` data` 属性 `data-small-image="";data-large-image=""; `
背景图在移动端隐藏 `img `标签图片在非移动端隐藏  
因用响应式工具会浪费资源，需同时加载两个端的所有图片，需用 `js` 根据窗口大小判断使用背景图还是 `img` 标签，在 `div` 的 `data` 中获取图片地址

```js
/*获取当前所有item*/
var items = $('.carousel-inner .item')
/*监听屏幕的大小改变*/
$(window)
  .on('resize', function () {
    /*1.获取当前屏幕的宽度*/
    var width = $(window).width()
    /*2.判断屏幕的宽度*/
    if (width >= 768) {
      /*说明非移动端*/
      /*为每一个item添加子元素--遍历*/
      $(items).each(function (index, value) {
        var item = $(this)
        /*当前自定义属性中 存储的图片路径*/
        var imgSrc = item.data('largeImage')
        /*添加非移动端的子元素*/
        item.html($('<a href="javascript:;" class="pcImg"></a>').css('backgroundImage', "url('" + imgSrc + "')"))
      })
    } else {
      $(items).each(function (index, value) {
        var item = $(this)
        var imgSrc = item.data('smallImage')
        item.html('<a href="javascript:;" class="mobileImg"><img src="' + imgSrc + '" alt="..."></a>')
      })
    }
  })
  .trigger('resize')
```

| 属性名            | 说明                          |
| :---------------- | :---------------------------- |
| innerWidth();     | content+padding               |
| outerWidth();     | content+padding+border        |
| outerWidth(true); | content+padding+border+margin |

### bootstrap 定制

`em`容器设置`font-size`对`em`会做相应的倍数  
`rem` 容器设置`font-size`对`rem`没影响，`html`设置对`rem`有影响  
利用媒体查询，设置在不同屏幕下`html`的`font-size`将屏幕设置相应的等分，算出每分等于多少`px`，在后面做布局设置，如每份`32px`设置`margin:0 20px`则`margin:0 20/32rem`;

```js
$(function () {
  $(window)
    .on('resize', function () {
      /*1,获取屏幕的宽度*/
      var width = $(window).width()
      /*2.计算转换至*/
      var fontSize = (width / 640) * 100
      /*3.把值传给html*/
      $('html').css('font-size', fontSize)
    })
    .trigger('resize')
})
```

20px -> 20/100rem;
