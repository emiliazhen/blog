---
title: es6
date: 2018-03-14
category: js
icon: es6
---

## 变量声明

<table>
  <tr>
    <td>var</td>
    <td>有变量提升问题</td>
    <td>没有作用域</td>
  </tr>
   <tr>
    <td>let</td>
    <td>没有变量提升</td>
    <td>没有作用域</td>
  </tr>
   <tr>
    <td>const</td>
    <td>没有变量提升</td>
    <td>const 定义的常量，无法再重新赋值，而且必须初始化</td>
  </tr>
</table>

## 解构赋值

把某个对象中的属性，当做变量给解放出来，今后就能够当做变量直接使用了

```js
person = { name:"zs", age:11, sex:"男" }；
const { name: name123, age } = person;
console.log(name123); //'zs';
```

可以从数组中提取值，按照对应位置对变量赋值

```js
let [a, b, c] = [1, 2, 3]
let [x, y = 'b'] = ['a'] //x='a',y='b'
```

## 字符串扩展

| 方法                | 说明                                            |
| :------------------ | :---------------------------------------------- |
| .startsWith('str'); | 判断字符串是否以指定的字符串开头，返回 boolean; |
| .endsWith('str);    | 判断字符串是否以指定的字符串结尾，返回 boolean; |
| .padStart(2,'0');   | 参数 1 填充后的总长，参数 2 用哪个字符串填充    |
| .padEnd(1,'2');     | 参数 1 填充后的总长，参数 2 用哪个字符串填充    |

## 模版字符串

使用``

```js
let arr = [{ name: 'zs', age: '1', sex: 'm' }]
for (let i = 0; i < arr.length; i++) {
  str = `<tr>
    <td>${arr[i].name}</td>
    <td>${arr[i].age}</td>
      <td>${arr[i].sex}</td>
</tr>`
}
```

## 函数扩展

ES6 允许为函数的参数设置默认值，直接写在参数定义的后面。一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域，等到初始化结束，这个作用域就会消失。这种语法行为在不设置参数默认值时是不会出现的

```js
var x = 1
function foo(
  x,
  y = function () {
    x = 2
  }
) {
  var x = 3
  y()
  console.log(x)
}
foo() //3
console.log(x) //1
```

参数默认值可以与结构赋值的默认值结合起来使用

```js
function add({ x, y = 0 }) {
  return x + y
}
const result = add({ x: 3 })
console.log(result) //3
```

函数 length 属性，指定默认值后将返回没有指定默认值的个数，如果默认值参数不是尾参数，那么 length 属性也不再计入后面的参数了

```js
;(function (a) {})
  .length(
    // 1
    function (a = 5) {}
  )
  .length(
    // 0
    function (a, b, c = 5) {}
  )
  .length(
    // 2
    function (...args) {}
  )
  .length(
    // 0
    function (a = 0, b, c) {}
  )
  .length(
    // 0
    function (a, b = 1, c) {}
  ).length // 1
```

### rest 参数

```js
function add(...argus) {
  let total = 0
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  console.log(total)
}
add(1, 2, 3)
add(1, 2, 3, 4, 5, 6, 7)
let arr = [1, 2, 3, 4, 5]
add(...arr)
```

### 箭头函数

```js
var add = function (x,y) {..函数体}    //Es 5
var add = (x,y) => {..函数体}                   //Es 6
```

- 箭头函数内部的`this`永远和箭头函数外部的`this`保持一致
- 箭头函数本质就是一个匿名函数，标准格式为 `(参数列表) => {函数体}`
- 如果箭头函数左侧的形参列表只有 1 个形参，`()`可以省略， `x=>{console.log(x)}`;
- 如果箭头函数右侧函数体只有一行代码，`{}`可省略，`(x,y)=>console.log(x+y)`;
- 如果箭头函数左侧只有一个形参，右侧只有一行代码，那么左右侧都可以省略括号， `x=> console.log(X)`;
- 如果省略了右侧`{}`，那么默认会把右侧函数体执行结果返回出去，`(x+y) =>x+y`;

对象中定义方法和属性的便捷方式

```js
const name = 'zs'
const age = 18
const data = { name, age }
console.log(data) //{ name: 'zs', age: 18 }
```

ES6 允许直接写入变量和函数，作为对象的属性和方法

```js
function add(x, y) {
  return x + y
}
const o = { add }
console.log(o) //{ add: [Function: add] }
```

ES6 允许在对象中直接写变量，属性名为变量名，属性值为变量的值

```js
function foo(x, y) {
  return { x, y } //{x:x,y:y}
}
foo(1, 2) //{x:1,y:2}
```

## 数据结构 Set

类似于数组但是成员的值都是唯一的没有重复的值,Set 内部判断两个值是否不同,使用类似于全等运算符

```js
const set = new Set([1, 2, 3, 4, 4, 4])
[...set] // [1,2,3,4]
[...new Set(array)]    //数组去重    Array.from(new Set(array))
```

`Set.prototype.size`返回`set`实例的成员总数
`.add(val)`添加某个值，返回`Set`结构本身
`.delete(val)`删除某个值，返回一个布尔值，表示删除是否成功
`.has(val)`返回一个布尔值，表示该值是否为`Set`成员
`.clear()`清除所有成员，没有返回值
`Array.from(set)`可以将`Set`结构转为数组

### Set 结构遍历方法，遍历成员

`keys()`返回键名的遍历器
`values()`返回键值的遍历器
`entries()`返回键值对的遍历器
`forEach()`使用回调函数遍历每个成员
`Set`的遍历顺序就是插入顺序

```js
let set = new Set(['red', 'green', 'blue'])
for (let item of set.keys()) {
  console.log(item)
}
for (let item of set) {
  console.log(item)
}
set.forEach((value, key) => console.log(key + ' : ' + value))
```

## 数据结构 Map

JavaScript 的对象本质上是键值对的集合，但是传统上只能用字符串当做键。
ES6 提供了 Map 数据结构，它类似于对象，也是键值对的集合但是各种类型的值(包括对象)都可以当做键

```js
new Map([
  [true, 7],
  [{ foo: 3 }, ['abc']],
])
// Map {
// true => 7,
// Object {foo: 3} => ['abc']
// }
```

`size`属性返回 Map 结构成员总数
`.set(key,value)`设置键名 key 对应的键值为 value，然后返回整个 Map 结构
`.get(key)`读取 key 对应的键值
`.has(key)`返回一个布尔值，表示某个键是否在当前 Map 对象之中
.`delete(key)`删除某个键，返回 true
`.clear()`清楚所有成员
Map 遍历方法,`keys()`,`valuse()`,`entries()`,`forEach()`

## Symbol

Symbol 值通过 Symbol 函数生成，对象的属性名现在可以有两个类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型，凡是属性名属于 Symbol 类型就都是独一无二的，可以保证不会与其他属性名产生冲突

```js
let s = Symbol(1)
typeof s //'Symbol'
```

## Iterator 和 for..of 循环

任意一个对象的`Symbol.iterator`方法，等于该对象的遍历器生成函数，调用该函数会返回对象的一个遍历对象

## Generator 函数

```js
const id = document.getElementById('btn')
function* hello() {
  yield 1
  yield 2
  yield 3
  return 'end'
}
const h = hello()
btn.addEventListener('click', function () {
  console.log(h.next()) // { value: '1', done: false }
  console.log(h.next()) // { value: '2', done: false }
  console.log(h.next()) // { value: '3', done: false }
  console.log(h.next()) // { value: 'end', done: true }
})
```

`yield`表达式只能在`Generator`函数中，如果`yield`表达式用在另一个表达式必须放在圆括号包裹，若`yield`表达式作函数参数或放在赋值表达式的右边可以不加括号

```js
function* demo() {
  console.log('Hello' + (yield)) // OK
  console.log('Hello' + (yield 123)) // OK
}
function* demo2() {
  foo(yield 'a', yield 'b') // OK
  let input = yield // OK
}
```

## async 函数

```js
const asyncReadFile = async function () {
  const f1 = await readFile('/etc/fstab')
  const f2 = await readFile('/etc/shells')
  console.log(f1.toString())
  console.log(f2.toString())
}
```

- `async`函数就是将`Generator`函数的`*`替换成`async`，将`yield`替换成`await`。
- `Generator`函数的执行必须靠执行器，而`async`函数自带执行器，`async`函数的执行，与普通函数一模一样
  `async`和`await`，比起星号和`yield`语义更清楚了。`async`表示函数里有异步操作，`await`表示紧跟在后面表达式需要等待结果
- `co`模块约定，`yield`命令后面只能是`Thunk`函数或`Promise`对象，而`async`函数的`await`命令后面，可以是`Promise`对象和原始类型的值
- `async`函数的返回值是`Promise`对象，这比`Generator`函数的返回值是`Iterator`对象方便多了。可以使用`then`方法指定下一步操作
- `async`函数完全可以看做多个异步操作，包装成的一个`Promise`对象，而`await`命令就是内部`then`命令的语法糖

`await`命令后面的`Promise`对象，运行结果可能是`rejected`，所以最好把`await`命令放在`try...catch`代码中。或用在内部使用`.catch(err=>{...})`

```js
async function main() {
  try {
    const val1 = await firstStep()
    const val2 = await secondStep(val1)
    const val3 = await thirdStep(val1, val2)
    console.log('Final: ', val3)
  } catch (err) {
    console.error(err)
  }
}
```

## 数组方法扩展

### Array.prototype.forEach

替代 for 循环对数组进行循环遍历

```js
arr.forEach(function(v,i){...})
```

### Array.prototype.map

对数组进行遍历，同时会返回一个新数组，新数组中的每一项都是回调函数中的返回值

```js
var list = [1, 2, 3, 4, 5]
var arr = list.map(function (v, i) {
  return v * 2
}) // [2,4,6,8,10]
```

### Array.prototype.findIndex

对数组进行遍历，会返回一个满足回调函数条件的元素的索引

```js
var list = [1, 2, 3, 4, 5]
var index = list.findIndex(function (v, i) {
  if (v == 4) return true
}) // 3
```

### Array.prototype.filter

对数组过滤，对数组会遍历，v 就是遍历的当前项。当遍历的过程中满足函数中条件时`return true`会将当前遍历的这一项放到一个新数组中

```js
var list = [1,2,3,4,5]
var arr  = list.filter(function(v,i){return v%2 = = 0})    // [2,4]
```

### Array.prototype.some

对数组进行遍历，返回一个布尔值，判断当前数组中是否有一个元素符合回调函数中的条件(特点：只要一个元素满足条件，最终返回结果就是`true`)

```js
var list = [1, 2, 3, 4, 5]
var flag = list.some(function (v, i) {
  if (v % 2 == 0) return true
}) // true
```

### Array.prototype.every

对数组进行遍历，返回一个布尔值，判断当前数组中是否每一个元素都符合回调函数中的条件(特点：只要一个元素不满足条件，最终返回结果就是`false`)

```js
var list = [1, 2, 3, 4, 5]
var flag = list.every(function (v, i) {
  if (v % 2 == 0) return true
}) // false
```
