---
title: Fullpage
date: 2015-09-10
category: HTML
order: 4
icon: html
---

## 初始化

① 引入`jquery.fullpage.css` , `jquery.js` , `esaing.js` , `jquery.fullpage.js`
② 引入 html 结构
#yourIdName > .section \* num
③ 调用初始函数代码

```js
$(function () {
  $('#yourIdName').fullpage()
})
```

## fullpage()参数

| 选项                              | 默认值      | 说明                                                               |
| :-------------------------------- | :---------- | :----------------------------------------------------------------- |
| verticalCentered                  | true        | 内容是否垂直居中                                                   |
| resize                            | false       | 字体是否随着窗口缩放而缩放                                         |
| sectionColor                      | \           | 设置背景颜色                                                       |
| anchors                           | \           | 定义锚链接                                                         |
| scrollingSpeed                    | 700         | 滚动速度，单位毫秒                                                 |
| easing                            | easeInQuart | 滚动动画方式                                                       |
| menu                              | false       | 绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动    |
| navigation                        | false       | 是否显示项目导航                                                   |
| navigationPosition                | right       | 项目导航的位置，可选 left 或 right                                 |
| navigationTooltips                | \           | 项目导航的 tip                                                     |
| slidesNavigation                  | false       | 是否显示左右滑块的项目导航                                         |
| controlArrowColor                 | #fff        | 左右滑块的箭头的背景颜色                                           |
| loopBottom                        | false       | 滚动到最底部后是否滚回顶部                                         |
| loopTop                           | false       | 滚动到最顶部后是否滚底部                                           |
| loopHorizontal                    | true        | 左右滑块是否循环滑动                                               |
| autoScrolling                     | true        | 是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条 |
| scrollOverflow                    | false       | 内容超过满屏后是否显示滚动条                                       |
| css3                              | false       | 是否使用 CSS3 transforms 滚动                                      |
| paddingTop                        | 0           | 与顶部的距离                                                       |
| paddingBottom                     | 0           | 与底部的距离                                                       |
| fixdElements                      | \|          |
| normalScrollElements              | \|          |
| keyboardScrolling                 | true        | 是否使用键盘方向键导航                                             |
| touchSensitivity                  | 5           |                                                                    |
| continuousVertical                | false       | 是否循环滚动，与 loopTop 及 loopBottom 不兼容                      |
| animateAnchor                     | true        |                                                                    |
| normalScrollElementTouchThreshold | 5           |                                                                    |

## fullPage.js 方法

方法的使用 $.fn.fullpage.moveTo(1);
|名称 |说明|
|:--|:--|
|moveSectionUp() |向上滚动|
|moveSectionDown() |向下滚动|
|moveTo(section,slide) |滚动到|
|moveSlideRight() |slide 向右滚动|
|moveSlideLeft() |slide 向左滚动|
|setAutoScrolling() |设置页面滚动方式，true 为自动滚动|
|setAllowScrolling() |添加或删除鼠标滚轮/触控板控制|
|setKeyboardScrolling() |添加或删除键盘方向控制|
|setScrollingSpeed() |定义以毫秒为单位的滚动速度|

## 回调函数

| 名称           | 说明                                                                                                                                                                                                     |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| afterLoad      | 滚动到某一屏后的回调函数，接受 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从 1 开始计算                                                                                      |
| onLeave        | 滚动前的回调函数，接收 index、nextIndex 和 direction3 个参数:index 是离开的页面的序号，从 1 开始计算；nextIndex 是滚动到的页面的序号，从 1 开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down |
| afterRender    | 页面结构生成后的回调函数，页面初始化完成后的回调函数                                                                                                                                                     |
| afterSlideLoad | 滚动到某一水平滑块后的回调函数，与 afterLoad 类似，接受 anchorLink、index、slideIndex、direction 4 个参数                                                                                                |

## 背景

background : #fff url() no-repeat 100% 80% / 20px 30px
颜色 图片 平铺 定位 大小
渐变颜色：
线性渐变 background:linear-gradient(top,red,bule);
top red 50% blue 起始位置红色 to top red 20% bule
径向渐变 background:radial-gradient(形状 大小 定位,red,green);
定位 at XXX ; at top , at 50%;
大小 size: closest-side 最近边 farthest-side 最远边 closest-corner 最近角 farthest-corner 最远角 默认最远角

## 动画

`animation-fill-mode:backwards`
|方法|说明|
| :--|:------|
| forwards | 会保留动画结束时的状态，在有延迟的情况下，并不会立即进行到动画的初始状态 |
| backwards | 不会保留动画结束时的状态，在添加了动画延迟的前提下，如果动画有初始状态，那么会立刻进行到初始状态 |
| both | 会保留动画的结束时状态，在有延迟的情况下会立刻进入到动画初始状态 |

### 动画的播放状态

paused 暂停 running 播放

```js
div.style.animationPlayState = 'paused'
```

进场出场可以给父盒子 `comein` 类名 添加和移除做动画

背景移动动画，更改 `backgroundposition animate({'backgroundPositionX':'100%'},200)`

显示和隐藏切换

```js
$('.btn').toggle()
```

### 屏幕高度

```js
$(window).height()`
```

### z-index

上屏滑动到下屏，上屏的元素需要在下屏的上方，可以更改这个元素的父盒子层级

### 页面所有动画复原

让元素清除行内样式即可

```js
$('img, .move').attr('style', '')
```

### 页面重新加载

```js
window.location.reload()
```

### 设置页面的最小和最大宽度

```css
min-height: 100px;
max-width: 100px;
```
