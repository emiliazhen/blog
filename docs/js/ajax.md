---
title: ajax
date: 2015-08-18
category: js
icon: ajax
---

## Ajax

`Asynchronous Jacascript And XML`，就是使用`JS`代码获取服务器数据，实现异步请求，局部刷新

在`JS`中事件`Ajax`主要的类就是`XMLHttpRequest`，它的使用一般有 `4` 个步骤

1. 创建 X`MLHttpRequest`对象

```js
if (window.XMLHttpRequest) {
  var xhr = new XMLHttpRequest()
} else {
  var xhr = new ActiveXObject('Microsoft.XMLHTTP')
}
```

2. 准备发送网络请求

```js
//参数1:请求方式 参数2:请求的地址 参数3:true异步 false同步
xhr.open('post', './check_register.php', true)
```

3. 开始发送网络请求

```js
var param = 'username=' + this.value
//设置请求头
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
//发送  若是get请求,则无需设置请求头,send参数为null,传的值在open的url中
xhr.send(param)
```

4. 指定回调函数

```js
//当xhr.readystate改变的时候触发  4代表数据已经解析完成 200代表响应成功
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    //当xhr.responseXML 获取xml格式
    var result = xhr.responseText
    var info = document.getElementById('info')
    if (result == 1) {
      info.innerText = '该账户已被注册'
    } else {
      info.innerText = '可注册'
    }
  }
}
```

## 同步和异步

`js`是单线程加事件队列的  
`ajax`异步原理：在`send()`时请求浏览器进行网络数据的请求，浏览器得到数据后更改`xhr`中的`radyState`的值触发事件队列中的方法执行。

## 数据格式

- `xml`数据格式，将数据以标签的方式进行组装，必须以`<?xml version="1.0" encoding="utf-8"?>`开头。
- `Json`数据格式，类似于`js`中的对象方式，`key`必须加双引号，
  - `JSON.parse();`字符串型的`json`数据转换为对象
  - `JSON.stringify();`转换为`string`;

## `$.ajax()`方法

```js
$.ajax({
  url: './check_register.php',
  type: 'POST',
  async: true,
  dataType: 'text', //xml json text html script jsonp
  data: { username: $(this).val() },
  success: function (data) {
    //如果dataType是json,success方法中的data是对象类型
    console.logo(data) //如果dataType是text,success方法中data是string类型
  },
})
```

## Jsonp

`ajax`请求数据必须遵循同源策略，`ajax`不能跨域(域名/协议/端口不能不同)  
解决`ajax`跨域的方式：`jsonp`,`cros`等  
`Jsonp`原理：

1. 静态`script`标签的`src`属性进行跨域请求，但是发出去的请求是异步请求
2. 动态创建`script`标签，通过标签的`src`属性发送请求。在当前页面定义一个函数，在服务器端返回函数调用。这个返回的函数调用就是`Jsonp`

```js
$.ajax({
  url: 'https://suggest.taobao.com/sug',
  data: { q: 1 },
  dataType: 'jsonp', //跨域请求数据必须设置为jsonp,底层执行的是动 态创建script标签
  success: function (data) {
    console.log(data)
  },
})
```

## 模板引擎

将数据和模板结合起来生成`html`片段。模板引擎需要两个组成部分：模板和数据，通过数据将模板指定的标签动态生成，方便维护

1. 引入 `JS` 文件

```html
<script src="./template.js"></script>
```

2. 定义模板

```html
<!-- 模板的type=text/html 给模板配一个ID -->
<script type="text/html" id="resultTemplate">
```

3. 将数据和模板结合起来生成 `html` 片段

```js
var html = template('resultTemplate', data)
$('#stageDiv').html(html)
```

4. 将 html 片段渲染到界面中

```html
<script type="text/html" id="resultTemplate">
  <ul>
    {{each result as value i}}
    <li>
      <div>
        <span>结果{{i+1}}</span>
        <span>:{{value[0]}}</span>
      </div>
    </li>
    {{/each}}
  </ul>
</script>
<script>
  $(function () {
    $('#keyword').keyup(function () {
      $.ajax({
        url: 'https://suggest.taobao.com/sug',
        data: { q: $(this).val() },
        dataType: 'jsonp',
        success: function (data) {
          var html = template('resultTemplate', data)
          $('#stageDiv').html(html)
        },
      })
    })
  })
</script>
```

基本语法

```
{{value}} # 得到数据中的值
{{each result as value I }}{{/each}} #循环操作
{{#value}} #转义，将 `value` 为代码的字符串，转成 `html`
{{if xxx}}{{/if}}
#返回的值为数组，each 一个接受这个数据的新数组
```

动态生成的元素绑定事件需要事件代理 `.on('click','a'.function(){});`
