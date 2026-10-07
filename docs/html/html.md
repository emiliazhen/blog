---
title: HTML
date: 2015-03-21
category: HTML
order: 1
icon: html
---

## 认识 WEB

### 网页上元素类型

- 文字
- 图片
- 超链接

### 浏览器的种类

- 谷歌
- 火狐
- IE,Edge

### 浏览器内核

`webkit` 谷歌和苹果，手机浏览器也是 `webkit` 内核

### web 三个标准

- 结构标准`HTML`
- 样式标准`css`
- 行为标准`js`

### html 的基本骨架

- html
- head
- title
- body

## 标签

```html
<!-- @Start 标题 -->
<!--h1-h6  表示1-6级标题-->
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
<!-- @End 标题 -->

<!-- @Start 加粗 -->
<strong></strong>
<!-- @End 加粗 -->

<!-- @Start 段落 -->
<p></p>
<!-- @End 段落 -->

<!-- @Start 水平线 -->
<hr />
<!-- @End 水平线 -->

<!-- @Start 换行 -->
<br />
<!-- @End 换行 -->

<!-- @Start 透明的盒子 -->
<div></div>
<span><span></span></span>
<!-- @End 透明的盒子 -->

<!-- @Start  文字格式化 -->
<strong>加粗</strong>
<b>加粗</b>
<i>斜体</i>
<em>斜体</em>
<s>删除线</s>
<del>删除线</del>
<u>下划线</u>
<ins>下划线</ins>
<!-- @End  文字格式化 -->

<!-- @Start  图片 -->
<img src="" />
<!-- @End  图片 -->

<!-- @Start 超链接 -->
<a href="##" target="_blank"></a>
<!-- 锚点跳转 -->
<a href="#跳转位置的id名"></a>
<!-- @End 超链接 -->

<!-- @Start BASE -->
<base target="_blank" />
<!-- @End BASE -->

<!-- @Start 列表 -->
<!-- 无序列表 -->
<ul>
  <li></li>
  <li></li>
</ul>
<!-- 有序列表 -->
<ol>
  <li></li>
  <li></li>
</ol>
<!-- 描述列表 -->
<dl>
  <dt>Vegetable</dt>
  <dd>Carrot</dd>
  <dd>Tomato</dd>
  <dd>Potato</dd>
  <dt>Fruit</dt>
  <dd>Apple</dd>
  <dd>Orange</dd>
  <dd>Banana</dd>
</dl>
<!-- @End 列表 -->

<!-- @Start 表格 -->
<table border="1">
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>
<!-- @End 表格 -->

<!-- @Start 表单 -->
  <!-- action提交地址 method请求方式 name表单名字 -->
<form action="" method="get" name="form1"></form>
  <!-- 普通文本框 -->
  <input type="text" />
  <!-- 密码框 -->
  <input type="password" />
  <input type="submit" />
  -------------------------------------------------
  <!-- 按钮 -->
  <input type="button" value="按钮" />
  <input type="reset" value="登录" />
  <input type="reset" value="重置按钮" />
  <!-- 文件上传 -->
  <input type="file" />
  <input type="image" src="图片路径" />
  <!-- 单选框 -->
  <input type="radio" />
  <input type="radio" name="sex" checked />
  <!-- 注意：多个单选name名字要一样 -->
  <input type="checkbox" />
  <input type="checkbox" checked="checked" />
  <!-- 注意：默认选中checked=checked -->
  <!-- 下拉菜单 -->
  <select>
    <option>上海</option>
    <option value="北京">北京</option>
    <option value="上海" selected="selected">上海</option>
  </select>
  <!-- 文本域 -->
  <textarea></textarea>
  <!-- label -->
  <label for="one">
    <input type="text" id="one" />
    测试
  </label>
</form>
<!-- @End 表单 -->
```

### 元素属性的语法

`key="value"`，属性名="属性值"

### 图片标签

最简单的写法 src 属性里面放的是图片的路径  
图片标签的属性： 宽 高 alt title border(一般只需要了解前面两个)

### 超链接标签

超链接默认是在当前窗体中打开页面，可以通过 `target="\_blank"` 设置新窗口中打开  
`href` 中写一个`#`和两个`##`都是表示空链接，一个`#`号会刷新页面，回到页面顶部，两个`##`号表示不跳转

#### 锚点的使用

给任意标签上给一个`id="名字"`属性，然后`a`标签`href`属性为`#对应id名`

> [!warning]  
> 使用锚点的时候需要页面足够长，如果只有一屏，锚点看不出效果。

### base 标签

统一设置 `a` 标签的属性  
最常用的就是设置新窗口中打开 `target="\_blank"`，`_self`表示在当前窗口中打开

> [!warning]  
> base 标签应该写在 head 标签中

### 表格标签

表格的基本结构 table tr td
任何的多个标签固定结构，都是最里层的标签可以放内容，外层标签不允许放。

#### 属性

`border=1` `width=500` `height=300` `cellspacing=0` `cellpadding=10` `align`  
`cellspacing` 是单元格与单元格之间的距离  
`cellpadding` 是单元格与内容之间的距离  
`rules` 线

#### 表头标签

`th` 只需要替换 `td` 即可， 表头的效果是： 加粗+居中

#### 表格的结构

`thead` `tbody` 这个两个标签没有任何作用，只是让结构好看点，使用时包裹内容即可。

#### 表格的标题

```html
<caption>表格的标题</caption>
```

#### 单元格跨行和跨列

`rowspan` `colspan`

### 表单标签

只有被 form 表单包裹的表单元素才能被提交  
表单元素指的是让用户选和填的内容

#### 输入框

两个属性
`maxlength` 限制输入长度  
`value` 值

#### label

点击文字时可以选中输入框
使用 `label` 标签直接包裹表单和文字
使用 `label for` 直接指定选中某个表单

## 特殊字符

空格 `&nbsp;` 小于 `&lt;` 大于 `&gt;`

> [!warning]  
> 在页面中直接输入连续的空格和换行，会只当做一个空格看待。

## 路径

上一级路径：`../文件名`  
同级路径：`文件名` `./文件名`  
下一级路径：`文件夹名/文件名` `./文件夹名/文件名`  
绝对路径：绝对不会变的位置，如带盘符`C:\Windows`、网址`http://xxxx`

## URL 地址

URL 地址由协议头、服务器地址、文件路径三部分组成

```
## file协议-访问本地计算机的资源
file:///Users/XXX/Desktop/basic.html

## ftp协议-访问共享主机的文件资源
ftp://ftp.baidu.com/movies

## http协议-超文本传输协议， 访问远程网络资源
## https协议-安全的ssl加密传输协议，访问远程网络资源
https: // example.com : 8080 /p/a/t/h ? query=string #hash
└──────────origin──────────┘└pathname┘└───search────┘└hash┘

## mailto协议-访问电子邮件地址
mailto:username@gmail.com
```
