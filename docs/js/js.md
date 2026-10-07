---
title: js
date: 2015-05-15
category: js
icon: javascript
---

## web 端的 JavaScript 的组成

ECMAScript + BOM + DOM  
ECMAScript 是一套规范,规定了 JavaScript 的语法是怎样的

## JS 在 HTML 中的书写位置

1. 直接写在 script 标签中

```html
<script>
  // js代码
</script>
```

2. 引入外部的 JS 文件,script 标签的 src 属性: 指定外部 JS 文件的路径

```html
<script type="text/javascript" src="js/random1.js"></script>
```

> [!warning]  
> 如果引入了外部的 JS 文件,当前 script 标签中就不能写 JS 代码了,如果需要在当前页面继续写 JS 代码,可以另开一个 script 标签

## 变量

就是内存中的一个标识符, 可以通过这个标识符找到内存中的一片空间, 更方便的操作内存中的数据；  
在 JS 中申明变量:`var` 关键字

### 打印方法

将变量内容输出到控制台

```js{2-3}
var a = 1
console.log('hello ! ') // hello !
console.log(a) // 1
```

### 命名规则和规范

规则:

- 由字母 数字 \_ $ 组成, 不能以数字开头
- 不能是关键字或保留字,例如: var
- 区分大小写,声明时用大写,使用时就得用大写

规范:

- 见名知意,起名字必须要有意义
- 驼峰命名法

## 数据类型

JS 是一门 `弱类型` 的语言  
弱类型: 声明变量时不需要指定具体的数据类型

<table>
  <tr>
    <td>基本数据类型 (简单类型)</td>
    <td>number, string, boolean, undefined, null</td>
  </tr>
  <tr>
    <td>引用数据类型 (复杂类型)</td>
    <td>除了基本数据类型外的所有数据</td>
  </tr>
</table>

### number 类型

#### 数值范围:

<table>
  <tr>
    <td>Number.MAX_VALUE</td>
    <td>最大值 正数</td>
  </tr>
  <tr>
    <td>Number.MIN_VALUE</td>
    <td>最小值 正数 无限接近于 0 的小数</td>
  </tr>
   <tr>
    <td>Infinity</td>
    <td>无限大</td>
  </tr>
</table>

#### 浮点数

```js
var n = 5e-324 // 科学计数法 5 乘以 10 的-324 次方
```

浮点数值的最高精度是 17 位小数，但在进行算术计算时其精确度远远不如整数

#### 数值判断

<table>
  <tr>
    <td>NaN</td>
    <td>not a number,是number类型, 当运算后不是一个number类型的数, 例如 1 * 'a' </td>
  </tr>
   <tr>
    <td>isNaN()</td>
    <td>是非数字吗? 如果不是一个数字返回true, 如果是一个数字返回false</td>
  </tr>
   
</table>

### string 类型

#### 转义符

反斜杠 `\` 将字符本身的含义进行转换,比如将具有特殊含义的字符转成普通字符, `\"` 将双引号转为普通的字符串双引号

#### 长度

```js
var str = 'hehe'
console.log(str.length) // 4
```

#### 拼接

凡是和字符串用 + 相连接的情况,都是字符串拼接

### boolean 类型

Boolean 字面量： `true` 和 `false`
计算机内部存储：`true` 为 1，`false` 为 0
`undefined` 类型和 `null` 类型

### undefined

表示变量声明了,但是没有赋值

### null

表示空,没有

## 类型判断

`typeof`获取变量的数据类型

## 类型转换

### 其他数据类型转 string

1. toString(), undefined 和 null 没有 toString()
2. String()
3. 字符串拼接, 推荐, 因为没有类型的限制, 所有类型转为 string 都可以直接拼接一个空字符串 ""

### 将其他类型转为 number 类型

1. `Number()` 不常用
   非数字字符串,不可以转换

   ```js
   var str = 'abc'
   Number(str) // --> NaN
   ```

   纯数字字符串,可以转换:

   ```js
   var str = '123'
   Number(str) // --> 123
   ```

   boolean 类型,可以转换:

   ```js
   var b = true
   Number(b) // --> 1 true 就是 1 false 就是 0
   ```

   数字加字符串混合的字符串,不可以转换:

   ```js
   var str = '120px'
   Number(str) // --> NaN
   ```

2. `parseInt()`掌握,经常使用
   非数字字符串,不可以转换
   ```js
   var str = 'abc'
   Number(str) // --> NaN
   ```
   纯数字字符串,可以转换:
   ```js
   var str = '123'
   parseInt(str) // --> 123
   ```
   boolean 类型,不可以转换:
   ```js
   var b = true
   parseInt(b) // --> NaN
   ```
   数字加字符串混合的字符串,可以转换:
   ```js
   var str = '120px'
   parseInt(str) // --> 120 当遇到字符串就停止,直接返回前面的数字
   ```
3. `parseFloat()`
   用法与 parseInt()一样, 区别在于, 如果字符串中有小数, parseFloat()会取小数进行转换, 而 parseInt()只保留了整数
4. 使用数学中的正负号
   只适合纯数字的字符串或 `boolean` 类型, 不推荐使用
   ```js
   var str = '123'
   ;+str
   ```

### 将其他类型转为 boolean

`Boolean()`
不常用
有以下几种情况转为 boolean 类型是 `false`:  
 `' '` `0` `NaN` `undefined` `null`

## 运算符

### 算术运算符

`+` `-` `*` `/` `%`

### 一元运算符

`++` : 自增一  
`--` : 自减一

#### 前置和后置的区别:

后置: 先返回值,再自增
前置: 先自增一, 再返回自增后的值

```js
var num1 = 1
num1++ // 后置
++num1 // 前置
```

### 逻辑运算符

`&` 与 `|` 或 `!` 非

### 比较运算符

`<` `<=` `>` `>=` `==` `===` `!=` `!==`

### 赋值运算符

`=` `+=` `-=` `*=` `/=` `%=`
