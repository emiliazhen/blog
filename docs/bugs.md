---
title: 错题集
date: 2023-09-25
breadcrumb: false
icon: debug
---

## 移动端

### 页面生成图片分享

#### 问题描述

`Flutter` 分享到微信，在 `android` 可以，`ios` 无反应

#### 解决方法

`ios9` 开始使用了 `universalLink`，需要使用 `xCode` 配置相应的参数

## Web 端

### IE 渐变字体兼容

#### 问题描述

使用`CSS`线性渐变和`background-clip:text`做渐变文字，做浏览器兼容加好前缀后在`IE`下还是不行。

#### 解决方法

通过`SVG`实现线性渐变

```html
<svg>
  <defs>
    <linearGradient id="grad" x1="10%" y1="10%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:blue; stop-opacity:1" />
      <stop offset="30%" style="stop-color:#66aa66; stop-opacity:1" />
      <stop offset="60%" style="stop-color:orange; stop-opacity:1" />
      <stop offset="100%" style="stop-color:red; stop-opacity:1" />
    </linearGradient>
  </defs>
  <text x="0" y="36" fill="url(#grad)" style="font-size:36px">你好，欢迎光临</text>
</svg>
```

### Element-Plus 文件上传卡死

#### 问题描述

`win7`时，点击上传选择文件确定后页面卡死。

#### 解决方法

上传时关闭搜狗输入法

### Element-Plus 文件上传设置手动后还是会自动上传

#### 问题描述

`win7`时，设置了`action="#" auto-upload="false"`还是会自动上传。

#### 解决方法

更改 `onChange` 方法，通过判断返回的当前文件状态来做是否向后台上传处理

### Antv-X6 图元按钮

#### 问题描述

图元有点击，且图元有按钮工具时，点击按钮后还依然进 `graph` 的 `onClick` 事件

#### 解决方法

在图元形状里定义按钮，然后在 `graph.onClick` 中判断 `target` 来实现逻辑

### Pinia 封装

#### 问题描述

在`store/index.ts`中定义了`store`，并且在该`store`的`action`下使用了封装的请求`fetch`；  
封装的`fetch`里使用了定义的某个`store`，比如响应拦截里无权限时自动退出账户；  
报错`cannot access 'store" before initializsation`

#### 解决方法

::: code-group

```ts [main.ts]
import { store } from '@/store'

app.use(store)
```

```ts [store/index.ts]
const store = createPinia()
export { store }
```

```ts [store/user.ts]
import { defineStore } from 'pinia'
import { store } from '@/store'
const useUserStore = defineStore({
  id: 'user'
  ...
})
const useUserStoreWithout = () => useUserStore(store)
export {
  useUserStore,
  useUserStoreWithout
}
```

```ts [utils/fetch.ts]
import { userStoreWithout } from '@/store/user'

service.interceptors.response.use(
  (response) => {
    const { code, msg } = response.data
    if (code !== 200) {
      msg && ElMessage.error(msg)
    }
    return response
  },
  (error) => {
    ElMessage.closeAll()
    if (error.response.status === 401) {
      ElMessage.error('认证失败，请先登录！')
      const userStoreWithout = useUserStoreWithout()
      userStoreWithout.access_token_logout().then(() => {
        router.replace({ path: '/login' })
      })
    } else {
      ElMessage.error('系统繁忙，请稍后再试！')
    }
    return Promise.reject(error)
  }
)
```

:::

### ElementUI 表单输入框回车事件

#### 问题描述

使用`element-ui`的表单，输入框使用`@keyup.enter.native`时，触发了表单的`submit`。  
在`element-plus`中输入框`@keyup.enter`时无此类问题。

#### 解决方法

```vue
<el-form @submit.native.prevent>
  ...
</el-form>
```

### Iframe 展示 pdf 时标题不正确

#### 问题描述

使用`iframe`展示 pdf，文件显示标题不正确，未展示文件名。

#### 解决办法

使用`Adobe Acrobat`打开该 pdf 文件，在`文件`栏里的`属性`里更改`标题`项内容，然后使用 iframe 链接该文件地址。

### Iframe 链接的文件不存在

#### 问题描述

使用新窗口打开`iframe`链接文件，有文件不存在的情况，需要先做判断来处理失败错误。

#### 解决办法

可以先使用可跨域的标签来请求该文件地址，有问题时捕捉到并做处理。

```javascript
const link = document.createElement('link')
link.rel = 'stylesheet'
link.type = 'text/css'
const pdfUrl = 'xxxxxxxxx'
link.href = pdfUrl
link.onload = function () {
  const newWindow = window.open('', '_blank', 'width=1000px,height=700px,top=200px,left=200px')
  const iframeEl = document.create('iframe')
  iframeEl.onerror = function (e) {
    console.log(e, 'error~')
  }
  iframeEl.onloadeddata = function (e) {
    console.log(e, 'loaded~')
  }
  iframeEl.src = pdfUrl
  iframeEl.style.width = '100%'
  iframeEl.style.height = '100%'
  iframeEl.style.border = 'none'
  newWindow.document.title = 'xxxxxxx'
  newWindow.document.body.style.margin = '0'
  newWindow.document.body.appendChild(iframeEl)
  link.onerror = function () {
    document.body.removeChild(link)
    $message.error('无法查看，文件不存在！')
  }
  document.body.appendChild(link)
}
```
