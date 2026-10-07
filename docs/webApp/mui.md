---
title: mui
date: 2015-06-19
category: webApp
order: 4
icon: mobile
---

## 项目开发模式类型

- 混合性模式
  前端写好静态页面后台去套模版即可
- 前后分离模式
  前端写好静态页面，前端套模版，完全依赖后台提供好的数据

### 数据获取展示

按照接口文档来写`ajax`请求数据，使用`art-template`模板引擎渲染数据

#### 便携模版：

```php
<script id="test" type="text/html">
  <h1>{{title}}</h1>
  <ul>
        //原生方法
        <% for(var i=0;i<title.length;i++){ %>
        <li data-id="<%=id%>">索引:<%=i+1%>:<%=title[i]%></li>
        <% } %>

     //简单方法
     {{each list as value i}}
     <li data-id="{{id}}">索引{{i+1}}:{{value}}</li>
     {{/each}}
  </ul>
</script>
```

#### 渲染模板：

```js
var data = {
  title: '标签',
  id: 3,
  list: ['文艺', '博客', '摄影', '电影'],
}
var html = template('test', data)
document.getElementById('content').innerHTML = html
```

对于动态生成的对象绑定事件需要事件委托

```js
$('#links').on('click','a',function(){…})
```

## 存储搜索历史关键字

```js
if (localStorage.getItem('keywords')) {
  var keywords = JSON.parse(localStorage.getItem('keywords'))
  keywords.push(keyword)
  localStorage.setItem('keywords', JSON.stringify(keywords))
} else {
  localStorage.setItem('keywords', JSON.stringify([keyword]))
}
location.href = 'search-list.html?key=' + keyword
```

获取搜索内容
location.search;

```js
function getParamsByUrl(url, name) {
  var params = url.substr(url.indexOf('?') + 1).split('&')
  for (var i = 0; i < params.length; i++) {
    var param = params[i].split('=')
    if (param[0] == name) {
      return param[1]
    } else {
      return null
    }
  }
}
```

- `$('#from).serialize() ` 返回一个字符串，为 form 中的'a=1&b=2'
- `new URLSearchParams( str ); ` 接口定义了很多个用来处理 URL 参数串的方法
  - `xxx.has('str1');`
  - `xxx.get('str2')`
  - `xxx.set('str3','vul3');`
  - `xxx.getAll('str4');`

```js
var loginInfo = $('#loginForm').serialize()
var data = new URLSearchParams(loginInfo)
if (data.get('username').length < 6) {
  mui.toast('用户名格式不正确')
  return
}
if (data.get('password').length < 6) {
  mui.toast('密码格式不正确')
  return
}
$.ajax({
  url: '/user/login',
  type: 'post',
  data: loginInfo,
  success: function (info) {
    console.log(info)
    if (info.success) {
      mui.toast('登录成功')
      location.href = 'user.html'
    } else {
      mui.toast(info.message)
      return
    }
  },
})
```

## 上拉加载

`mui.init({})`,

- `callback`必填
- `that.endPullupToRefresh(boolean)`是否可以继续加载

## 实现页面跳转

`mui`会默认阻止`a`链接页面跳转

- `mui.openWindow({url:..}) `
- `loaction.reload()`
- `location.href='..'`

```js
$(function () {
  $('body').on('tap', 'a', function () {
    mui.openWindow({
      url: $(this).attr('href'),
    })
  })
})
```

## 用户登录

- `ajax`中`beforeSend:function(){}` 在`ajax`成功请求之前
- 获取用户信息并处理用户未登录情况
  `ajax`请求放在最外面，使用同步请求，失败跳转登录页面，登录成功将获取的信息暴露到全局，在加载时再渲染到 html

```js
$.trim(str) 去除两侧空白
mui.toast('str')
mui.confirm('message','title',['y','n'],callback);
mui.swipeoutClose(被关闭的Dom对象)  列表滑动后返回
```

## 模态框

## 文件上传

1.引入`jquery.ui.widget.js；` `jquery.iframe-transport.js；` `jquery.fileupload.js` 2.在表单中写入接口地址`data-url="php上传地址"`

```html
<input type="file" accept="image/jpeg" name="pic1" multiple data-url=".." />
```

3.插件方法调用，把返回的数据渲染到页面 img 元素上

```js
$('#fileUpload').fileupload(
  dataType:'json',
  done:function(e,data){
  var imgUrl=data.result.picAddr;
  $('#showImg').attr('src',imgUrl);
  }
)
```

`.slideToggle()`，通过滑动效果实现显示和隐藏
