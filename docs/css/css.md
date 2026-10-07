---
title: css
date: 2015-04-02
order: 1
icon: css
---

## 文字样式

### 字体颜色

```css
color: red;
color: #000000;
color: #000;
color: rgba(255, 255, 255, 1); /* 红绿蓝透明度 */
```

### 字体大小

```css
font-size: 20px;
```

浏览器的默认字体大小`16px`  
浏览器最小能显示的字体:`12px`  
推荐使用的字体最好为偶数,最常用`14px`

### 字体粗细

```css
/* 正常字体 */
font-weight: normal;
```

`bold` 加粗  
`700` 加粗，注意不能加单位

### 字体样式

```css
font-style:normal;  正常字体
```

`italic` 斜体

### 字体系列

```css
font-family: '微软雅黑';
```

字体的种类:

- 中文
- 中文翻译的英文
- 多个单词的英文字体
- Unicode 编码
- 英文字体

> [!warning]  
> 一个单词的英文字体不需要加引号,其他字体都加  
> 多个字体之间用逗号隔开  
> 工作中:字体我们常用的是微软雅黑和宋体,而且我们都用中文,上线之前去别的地方复制一个过来就行了.
> font:12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif

### 复合属性 font

```css
font: 字体样式 字体粗细 字体大小/行高 字体系列;
font: 字体大小/行高 字体类型; /* 这种写法是最常见的. */
font: 12px '微软雅黑';
```

> [!warning]  
> 设置一个字体的时候,最少需要字体大小和字体系列. 复合属性的顺序也不能变  
> 当你写了 font 复合属性, 之前写过的所有字体属性都可能无效.  
> 工作中: 我们建议初学者不写这种,因为容易错. 但是要认识这种写法.

```css
font-style: italic;
font: 12px '微软雅黑';
/* 这个时候斜体就会无效. */
```

### 文本对齐

```
text-align:center;
```

left;
right;

> [!warning]  
> text-align 对图片也有效果。但是不用给图片身上，给父元素。  
> text-align 对 span, b 等标签暂时无效。因为没有多余的宽度

### 首行文本缩进

```css
text-indent: 2em; 表示 2 个字的举例
text-indent: -99999em;
```

### 行高

```css
line-heigth: 100px;
```

- 行高不是一行的高度，是基线与基线之间的距离(上一行文字的底部，到下一行文字的底部)
- 行高等于高度时候垂直居中
- 行高是调整文字在垂直方向的距离

> [!warning]  
> line-height:100; line-height:100em; 还有这两种写法,都是字体大小的倍数  
> font:12px/1.5 "微软雅黑";

### 字符间距和单词间距

```css
letter-spacing: 10px; /* 字符(中文和英文) */
word-spacing: 10px; /* 单词(只能用于英文) */
```

### 文字超出省略

一行

```css
overflow: hidden; /* 超出的文本隐藏 */
text-overflow: ellipsis; /* 溢出用省略号显示 */
white-space: nowrap; /* 溢出不换行 */
```

多行

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box; /* 作为弹性伸缩盒子模型显示。 */
-webkit-box-orient: vertical; /* 设置伸缩盒子的子元素排列方式--从上到下垂直排列 */
-webkit-line-clamp: 2; /* 显示的行 */
```

### 颜色透明度

```css
rgba(0,0,0,0.5);
rgba(0,0,0,.3);
```

> [!warning]  
> 以后只要用到颜色的地方，都建议用这种。

### 文字阴影

```css
text-shadow: x 轴 y 轴 模糊 颜色; (3+1)
```

## 选择器

标签选择器

```css
p {
}
div {
}
```

类选择器

### 标签选择器

通过标签来找元素,问题就是标签的种类有限.设置页面上的效果范围太广,不建议单独使用.

```css
标签名 {
}
div {
}
p {
}
ul {
}
```

### 类选择器

自定义规则来选取不同的标签  
类选择器的语法: 定义+调用  
定义:在 style 中,使用.来表示一个类,后面跟类名,这个名字是自己取的,然后是大括号写样式.  
调用:在需要这个样式的标签上,写一个 class="类名";

类的定义

```css
.caidan {
  color: red;
}
```

类的调用

```html
<div class="caidan"></div>
```

> [!warning]  
> 类选择器存在一个问题: 取名字太多,类名可以重复.

#### 命名规则

- 不能用中文
- 数字不能开头
- 建议见名知意:别人怎么写,你就学学,多用词典
- 切记不要写如下内容:
  - .a1
  - .a2
  - .div1
  - .div2
- 建议加上前缀 `zs-box` `tm-box` `hm-box` `cz-box` `zsf-box` `CZCMS` `header` `footer`
- CSS 命名区分大小写

### id 选择器(唯一选择器)

跟类选择器类似,就是单词符号不一样
id 选择器的定义

```css
#one {
}
```

id 选择器的调用

```html
<div id="one"></div>
```

> [!tip]  
> id 选择器和类选择器的区别: 写法不一样, 使用次数不一样,同一个 id 只能使用一次

### 通配符选择器

经常用来清除默认边距  
通配符选择器表示选择所有的标签

```css
* {
}
```

### 伪类选择器

```css
a {
  /* 链接默认的状态 */
}
a:hover {
  /* 鼠标移入的时候的样式 */
}
a:link {
  /* 默认链接状态 */
}
a:visited {
  /* 访问过的状态; */
}
a:active {
  /* 鼠标按下的状态 */
}
```

### 结构伪类选择器

快速选择器第几个标签

```css
li:first-child {
  /* 第一个 */
}
li:last-child {
  /* 最后一个 */
}
li:nth-child(n) {
  /* 第几个 li */
}
li:nth-last-child(n) {
  /* 倒数第几个 li */
}
```

> [!warning]  
> 工作中使用最多的 nth-child(n)
> n 可以写倍数关系 3n 3n+1;

## 三大特性

### 层叠性

相同属性覆盖，不同属性叠加，就近原则

### 继承性

父元素有某些属性，子元素可以直接获得。字体相关属性(line-height text-align)

### 权重优先级

多个选择器选择某个标签，权重大的，优先显示。  
标签选择器 < 类选择器 < id 选择器 < 行内样式 < !important  
1 10 100 1000 无穷大

> [!warning]  
> 1.权重会叠加 2.继承权重为 0 3.权重不能越级
> a 标签的颜色不能继承，需要单独给 a 自己

## 盒子模型

边框 border + 内边距 padding + 外边距 margin

- 外加盒子: padding 和 border 会撑大盒子
- 内减盒子: padding 和 border 不会撑大盒子,但是会让盒子的可使用区域变小。

```css
box-sizing: border-box;
```

盒子阴影

```css
text-shadow: 1px 1px 1px red; /* 3+1 */
box-shadow: 1px 1px 1px 1px red; /* 4+1 */
```

### 边框

```css
border: 1px solid red;
border-top: 1px solid blue;
border: 0; /* 清除边框 */
border: none; /* 清除边框 */
```

### 内边距

盒子与内容之间的距离

```css
padding-top: 30px;
padding: 10px 20px 30px 40px;
```

padding 撑大盒子  
行内元素的上下内边距无效。

### 外边距

盒子与盒子之间的距离

```css
margin: 20px; /* 上下左右外边距 20; */
margin: 20px auto; /* 上下 20 左右 auto 就是居中 */
margin: 10px auto 0; /* 上 10px 左右居中 下 0 */
margin: 10px 20px 30px 40px; /* 上右下左 */
```

在写任何的效果之前都需要清除默认样式:

```css
* {
  margin: 0;
  padding: 0;
}
```

### 外边距 margin 有两个问题:

- 外边距合并  
  解决办法：避免就好了
  上下两个盒子，上盒子`margin-bottom:30px;` 下盒子 `margin-top:20px;`最终距离`30`，取两者之大。
- 外边距塌陷  
  父子嵌套盒子, 子盒子需要`margin-top:30px;` 导致父盒子跟着掉下来，这种现象称之为外边距塌陷。  
  解决方法: 给父元素 边框 、上内边距 `overflow:hidden;`  
  最容易出现的现象： 给一个盒子 margin，导致父盒子掉下来。

## 内边距 padding 会撑大盒子,内边距是盒子内部的

页面上看到的盒子大小= 宽度 + 边框 + padding

- padding 和 border 会撑大盒子，在工作中，测量盒子后，撑大的距离要减去。
- 只有不写 width 属性的盒子，padding-left 和 padding-right 才不会撑大，继承的宽度不会被撑大。
