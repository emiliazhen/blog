---
title: 巩固ajax
date: 2021-08-26
order: 5
icon: ajax
---

## `Ajax`是什么，如何创建一个`Ajax`

使用`ajax`原生方式发送请求主要通过`XMLHttpRequest`、`ActiveXObject(IE浏览器)`对象实现异步通信效果

```js
var xhr = null
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest()
} else {
  xhr = new ActiveXObject('Microsoft.XMLHTTP')
}
xhr.open('方式', '地址', '标志位')
xhr.setRequestHeader('', '')
xhr.onreadystatechange = function () {}
xhr.send()
```

## http 常见的状态码有哪些

- 200-请求成功
- 301-资源(网页等)被永久转移到其他 URL
- 404-请求的资源(网页等)不存在
- 500-内部服务器错误

## ajax 的请求步骤

get 请求：

1. 创建`xml`
2. 准备发送

```js
xhr.open（"get","地址?...",true）
```

3. 执行发送

```js
xhr.send(null)
```

4. 执行回调函数

```js
xhr.onreadystatechange = function () {}
```

post 请求：

1. 创建`xml`
2. 准备发送

```js
xhr.open（"post","地址",true）
```

3. 设置请求头（不需要去记忆固定写法）

```js
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
```

4. 执行发送

```js
xhr.send(param)
```

5. 执行回调函数

```js
xhr.onreadystatechange = function () {}
```

## 理解`xss`，`csrf`，`ddos`攻击原理以及避免方式

- `XSS（Cross-Site Scripting，跨站脚本攻击）`是一种代码注入攻击。攻击者在目标网站上注入恶意代码，当被攻击者登陆网站时就会执行这些恶意代码，这些脚本可以读取 `cookie`，`session tokens`，或者其它敏感的网站信息，对用户进行钓鱼欺诈，甚至发起蠕虫攻击等。
- `CSRF（Cross-site request forgery）`跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。
- `DDoS（Distributed Denial of Service）`又叫分布式拒绝服务，其原理就是利用大量的请求造成资源过载，导致服务不可用。

### `XSS`避免方式：

1. `url`参数使用`encodeURIComponent`方法转义
2. 尽量不是有`InnerHtml`插入`HTML`内容
3. 使用特殊符号、标签转义符。

### `CSRF`避免方式：

1. 添加验证码
2. 使用`token`

- 服务端给用户生成一个`token`，加密后传递给用户
- 用户在提交请求时，需要携带这个`token`
- 服务端验证`token`是否正确

### `DDos`避免方式：

1. 限制单 IP 请求频率。
2. 防火墙等防护设置禁止 ICMP 包等
3. 检查特权端口的开放
