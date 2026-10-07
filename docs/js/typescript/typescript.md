---
title: typescript
date: 2020-10-12
category: js
icon: typescript
---

```powershell
npm install -g typescript
```

编译 TypeScript 文件

```powershell
tsc hello.ts
tsc hello.tsx
```

## 原始数据类型

```ts
let flag: boolean = false
let createBoolean: boolean = Boolean(1)
let myName: string = 'Tom'
let decLiteral: number = 6
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010
// ES6 中的八进制表示法
let octalLiteral: number = 0o744
let notANumber: number = NaN
let infinityNumber: number = Infinity
let u: undefined = undefined
let n: null = null
// 可以用 void 表示没有任何返回值的函数：
function alertName(): void {
  let decLiteral: number = 6
  alert('My name is Tom')
}
```

## 任意值

如果是一个普通类型，在赋值过程中改变类型是不被允许的
如果是 any 类型，则允许被赋值为任意类型，在任意值上访问任何属性都是被允许的变量如果在声明时未指定其类型，那么会被识别为任意值类型

```ts
let myNumber: any = 'seven'
myNumber = 7
```

## 类型推论

在没有明确指定类型的时候推测出一个类型

```ts
let a = 'seven'
a = 7 //error TS2322: Type 'number' is not assignable to type 'string'
```

## 联合类型

联合类型表示取值可以为多种中的一种，使用 | 分割每个类型
联合类型的变量在被赋值时，会根据类型推论推断出一个类型

```ts
let b: string | number
b = '1'
console.log(b.length) // 1
b = 2
console.log(b.length) // error
```

## 接口

- 在`TypeScript`中，我们使用接口`interface`来定义对象的类型
- 在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类去实现
- TypeScripe 中的接口除了可用于对类的一部分行为进行抽象外，也常用于对"对象的形状"进行描述
- 接口一般首写字母大写
- 定义的变量比接口少了一些属性或者多了一些属性是不允许的，赋值的时候，变量的形状必须和接口的形状保持一致

```ts
interface Person {
  name: string
  age: number
}
let tom: Person = {
  name: 'tom',
  age: 12,
}
```

### 可选属性

当不需要完全匹配一个形状，可以用 `age?: number`

```ts
interface Person {
  name: string
  age?: number
}
let tom: Person = {
  name: 'tom',
  age: 3,
}
let jim: Person = {
  name: 'jim',
}
```

### 任意属性

当需要一个接口可以有任意属性，可以用`[propName:string]:any`
若给`[propName:string]`定义了某种类型，则确定的类型和可选属性的类型都必须是这个类型

```ts
interface Person {
  name: string
  mobile: number
  [propName: string]: any
}
let tom: Person = {
  name: 'tom',
  mobile: 111111,
  address: 'XXX',
}
```

### 只读属性

对象中一些字段只能在创建时被赋值，用`readonly`定义只读属性

```ts
interface animal {
  readonly id: number
  name: string
  age?: string
}
let dog: animal = {
  id: 6,
  name: 'tom',
}
dog.id = 2 // error
```

## 数组

- 可以用类型+方括号来表示数组
- 可以用数组泛型
- 可以用接口来表示数组，一般常用来表示类数组
- 数组的项中不允许出现其他类型
- 常用的类数组都有自己的接口定义，如`Iarguments`,`NodeList`,`HTMLCollection`等

```ts
let arr1: number[] = [1, 2, 3, 4, 5]
let arr2: Array<string> = ['1', '2', '3']
interface NumberArray {
  [index: number]: number
}
let arr3: NumberArray = [1, 2, 3, 4]
arr1.push('2') // error
function sum() {
  let args: {
    [index: number]: number
    length: number
    callee: Function
  } = arguments
}
function sum2() {
  let args: IArguments = arguments
}
```

## 函数

在`TypeScript`的类型定义中,=>用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
函数调用，输入多余或者少于要求的参数是不被允许的  
用`?`表示可选参数，可选参数后面不允许再出现必需参数了

```ts
function sum3(x: number, y: number): number {
  return x + y
}
let fool: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

interface flagFunc {
  (a: string, b: string): boolean
}
let c: flagFunc
c = function (a: string, b: string) {
  return a.length > b.length
}

function personLog(name: string = 'unknown', age?: number): string {
  return age ? name + ':' + age : name
}
```

### 剩余参数

```ts
function totalSum(title: string, ...items: number[]): string {
  let total = 0
  items.forEach(function (item) {
    total + item
  })
  return title + total
}
totalSum('Total:', 2, 3, 4, 5, 5)
```

### 重载

重载允许一个函数接受不同数量或类型的参数时，做出不同的处理  
TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面

```ts
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}
```

## 类型断言

<类型> 值
值 `as` 类型 （在 tsx 中必须用这种）
在还不确定类型时就访问其中一个类型的属性或方法

```ts
function getLength(test: string | number): number {
  const str = test as string
  if (str.length) {
    return str.length
  } else {
    return test.toString().length
  }
}
```

## 类型守卫

在不同条件分支里，智能的缩小范围

```ts
function getLength2(test: string | number): number {
  if (typeof test === 'string') {
    return test.length
  } else {
    return test.toString().length
  }
}
```

## 内置对象

`ECMAScript`标准提供的内置对象有`Boolean/Error/Date/RegExp`等

```ts
let b: Boolean = new Boolean(1)
let e: Error = new Error('Error occurred')
let d: Date = new Date()
let r: RegExp = /[a-z]/
```

`DOM`和`BOM`提供的内置对象有`Document/HTMLElement/Event/NodeList`等

```ts
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function (e: MouseEvent) {
  // Do something
})
```

TypeScript 核心库的定义文件中定义了所有浏览器环境需要用到的类型

## 类型别名

```ts
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}
```

## 交叉类型

```ts
interface IName {
  name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: 'tom', age: 12 }
```

## 字符串字面量类型

用来约束取值只能是某几个字符串中的一个

```ts
type Names = 'a' | 'o' | 'e'
function foo(e: Names) {}
foo('v') // error
```

## 元组

数组合并了相同类型的对象，而元组合并了不同类型的对象

```ts
let tom: [string, number]
tom = ['tom', 25]
tom.push('1111')
tom.push(33)
tom.push(true) //error
```

## 枚举

枚举使用 enum 关键字来定义

```ts
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days['Sun']) // 0
console.log(Days[6]) // 'Sat'
```

手动赋值

```ts
enum Days {
  Sun = 3,
  Mon = 2,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat = <any>'S',
}
console.log(Days['Sun']) // 3
console.log(Days['Tue']) // 3
console.log(Days['Sat']) // 'S'
```

## 类

### ES6 类

```js
class Animal {
  static info = 'noInfo'
  static height() {
    return '2.33'
  }
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHi() {
    return 'name:' + this.name
  }
  get shortName() {
    return '01'
  }
  set age(v) {
    console.log(v)
  }
}
class Cat extends Animal {
  constructor(name, age) {
    super(name, age)
    console.log(name)
  }
  sayHi() {
    return 'Meow,' + super.sayHi()
  }
}
let a = new Animal('Ann', 2)
let c = new Cat('Tom', 2)
c.sayHi() // Meow,name:Tom
Animal.height() // 2.33
Cat.info // noInfo
```

### TS

`public`修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是`public`的
`private`修饰的属性或方法是私有的，不能在声明它的类的外部访问
`protected`修饰的属性或方法是受保护的，它和`private`类似，区别是它在子类中也是允许被访问的

```ts
class Animal {
  public name
  private code
  protected age
  readonly sex
  public constructor(name, code, age) {
    this.name = name
    this.code = code
    this.age = age
  }
}
class Cat extends Animal {
  constructor(name, code, age) {
    super(name, code, age)
    console.log(this.age)
    console.log(this.code) // error
  }
}
let a = new Animal('Tom', 'ID001', 11)
a.sex = 0 // error
console.log(a.name)
console.log(a.code) // error
```

当构造函数修饰为`private`时，该类不允许被继承或实例化  
当构造函数修饰为`protected`时，该类只允许被继承

### 抽象类

abstract 用于定义抽象类和其中的抽象方法  
抽象类是不允许被实例化的  
抽象类中的抽象方法必须被子类实现

```ts
abstract class Animal {
  public name
  public constructor(name) {
    this.name = name
  }
  public abstract sayHi()
}
class Cat extends Animal {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`)
  }
}
let cat = new Cat('Tom')
```

### 类的类型

```ts
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi(): string {
    return `My name is ${this.name}`
  }
}
let a: Animal = new Animal('Jack')
```

### 类实现接口

有时候不同类之间可以有一些共有特性，这时候可以把特性提取成接口`interfaces`，用`implements`关键字来实现

```ts
interface Alarm {
  alert()
}
interface Light {
  lightOn()
  lightOff()
}
class Car implements Alarm, Light {
  alert() {
    console.log('Car alert')
  }
  lightOn() {
    console.log('Car light on')
  }
  lightOff() {
    console.log('Car light off')
  }
}
class Door {}
class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert')
  }
}
```

### 接口继承接口

```ts
interface Alarm {
  alert()
}
interface LightableAlarm extends Alarm {
  lightOn()
  lightOff()
}
```

### 接口继承类

```ts
class Point {
  x: number
  y: number
}
interface Point3d extends Point {
  z: number
}
let point3d: Point3d = { x: 1, y: 2, z: 3 }
```

## 泛型

泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用时再指定类型的一种特性

```ts
function createArr<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArr(3, 6)
createArr<string>(2, 'xxx')
```

定义泛型时，可以一次定义多个类型参数

```ts
function exchange<T, U>(arr: [T, U]): [U, T] {
  return [arr[1], arr[0]]
}
exchange(['1', 2])
```

由于实现不知道是哪种类型，所以不能随意的操作它的属性或方法，此时我们可以对泛型进行约束，使用`extends`约束泛型 T 必须符合接口的形状

```ts
interface Lengthwise {
  length: number
}
function printLong<T extends Lengthwise>(params: T): T {
  console.log(params.length)
  return params
}
```

多个类型参数之间可以相互约束，`T`继承`U`保证`U`上不会出现 T 中不存在的字段

```ts
function copyFields<T extends U, U>(target: T, src: U): T {
  for (let key in src) {
    target[key] = (<T>src)[key]
  }
  return target
}
let x = { a: 1, b: 2, c: 3, d: 4 }
copyFields(x, { b: 10, d: 20 })
```

### 泛型接口

```ts
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>
}
let createArray: CreateArrayFunc<any>
createArray = function <T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray(3, 'x') // ['x', 'x', 'x']
```

### 泛型类

```ts
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}
```

### 泛型参数默认类型

`TS2.3`以后，可以为泛型中的类型参数指定默认类型

```ts
function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
```

## 声明合并

```ts
interface Alarm {
  price: number
  alert(s: string): string
}
interface Alarm {
  weight: number
  alert(s: string, n: number): string
}
```
