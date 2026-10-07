---
title: dart
date: 2019-03-15
category: flutter
order: 2
icon: dart
---

- 所有东西都是对象，每一个对象是类的实例，无论是数字、字符串、类还是函数
- 强类型语言，但也只是`var`声明，因为`Dart`会推断变量类型
- 支持通用类型，比如`List<Map<String,String>>`也可以写成`List<Map<String,dynamic>>`
- 运行从`main`函数开始，支持绑定到类或者对象函数
- 没有空开，私有关键字，但是可以通过对象里下划线开头去定义一个变量，为私有变量

支持数据类型

- number
- string
- boolean
- list
- map
- rune
- symbol

```dart
int i = 1;
double d = 1.1;
double e = 1.42e5;
/// 方法abs() ceil() floor()
/// String -> int
var one = int.parse('1');
assert(one == 1);
/// String -> double
var onePointOne = double.parse('1.1');
assert(onePointOne == 1.1);
/// int -> String
String oneAsString = 1.toString();
assert(oneAsString == '1');
/// double -> String
String piAsString = 3.14159.toStringAsFixed(2);
assert(piAsString == '3.14');
var s = 'string interpolation';
///创建多行字符串的方法:使用带有单引号或双引号的三重引号:
var s2 = """This is also a
multi-line string.""";
print('当前文字为$s2');
print('当前文字为${s2.toUpperCase}');
/// raw字符串（前缀为r） 避免转义作用
print(r"换行符：\n"); /// 换行符: \n
///只有两个对象具有bool类型：布尔字面量true和false，它们都是编译时常量
bool isLogin = false;
var hasMore = true;
///在Dart中，数组是列表对象
var list = [1, 2, 3];
///创建一个编译时常量列表，要在列表字面量之前添加const
List<int> constantList = const [1, 2, 3];
/// constantList[1] = 1; // Uncommenting this causes an error.
/// Map 在Dart中不是映射，而是对象
Map gifts = {
/// Key: Value
'first': 'partridge',
'second': 'turtledoves',
'fifth': 'golden rings'
};
Map gifts = Map();
gifts['first'] = 'partridge';
gifts['second'] = 'turtledoves';
gifts['fifth'] = 'golden rings';
gifts.remove('first')
```

## 变量和常量

对象不限于单一类型(没有明确的类型)，使用`Object`或`dynamic`关键字

```dart
Object name = 'zs'
dynamic name = 'ls'
```

使用`final`或`const`修饰的变量，变量类型可以省略，并无法再去修改其值

```dart
const name = 'ww'
```

常量如果是类级别的 使用`static const`

```dart
static const speed = 100;
```

## 运算符

### `?.`

`?.` 像 `.` 一样，但最左边的操控数可以为空

```dart
Object?.member
```

### ..级联符号

允许你在同一个对象上进行一系列操作

```dart
String s = (new StringBuffer()
    ..write('test1')
  ..write('test2'))
.toString();
```

### `??`

三目运算符的一种形式

```dart
/// 如果exp1非空则返回其值，否则返回exp2
exp1 ?? exp2
```

### `~/`

除法取商

```dart
15 ~/ 7 /// 2
```

%取模

```dart
15%7 /// 1
```

## `as` `is` 和 `is!`

- `as`判断属于某种类型
- `is`如果对象具有指定类型 则为`true`
- `is!` 如果对象具有指定类型 则为`false`

```dart
class Test {
static int funs = 5;
Test() {
print('构造函数 Test');
}
static fun() {
print('Test fun函数');
}
}
class Test2 extends Test {
Test2() {
print('构造函数 Test2');
}
void fun() {
print('Test2 fun函数');
}
}
void main(){
print(test2 is Test); // true
print(test is! Test2); // true
(test2 as Test2).fun(); // Test2 fun函数
// 相当于
// if (test2 is Test) {
// test2.fun();
// }
```

## 函数

- 可选参数

```dart
void foo({bool bold,bool hidden}){..}
```

- 可选的位置参数
  在`[]`中包装一组函数参数，标记为可选 的位置参数

```dart
String say(String from,String msg,[String device]){...}
```

- 默认参数值

```dart
void foo({bool bold = false, bool hidden = false}){...}
```

## 类

为避免最左操作数为空时出现异常，使用`?.`代替`.`来使用 `p?.y =4`
获取对象类型

```dart
xxx.runtimeType
```

工厂构造函数，使用`factory`关键字，该构造函数并不总是创建类的新实例

### 枚举类型

使用`enum`关键字声明一个枚举类型

```dart
enum Color{red,green,blue}
```

枚举中的每个值都有一个索引`getter`，它返回`enum`声明中值从`0`开始的位置

```dart
assert(Color.red.index == 0);
```

要获取枚举中所有值的列表，使用`enum`的`values`常量

```dart
List<Color> colors = Color.values;
assert(colors[2] == Color.blue);
```

### 子类超类

使用`extends`来创建一个子类，并`super`来引用超类

```dart
class Television {
  void turnOn() {
    _illuminateDisplay();
    _activateIrSensor();
  }
  // ···
}
class SmartTelevision extends Television {
  void turnOn() {
    super.turnOn();
    _bootNetworkInterface();
    _initializeMemory();
    _upgradeApps();
  }
  // ···
}
```

子类可以覆盖实例方法，`getter`,`setter`，可以使用`@override`标注想要覆盖的成员

```dart
class SmartTelevision extends Television {
  @override
  void turnOn() {...}
  // ···
}
```

`Mixins`可以多个类的层级中重复的使用类的代码，要使用`mixin`使用`with`关键字后面跟上一个或者多个`mixin`名字

```dart
class Maestro extends Person
  with Musical, Aggressive, Demented {
     Maestro(String maestroName) {
        name = maestroName;
        canConduct = true;
     }
}
```

要实现`mixin`，创建一个类继承`Object`并且声明没有构造函数。除非你想要你的`mixin`当做一个标准类可以使用，要不使用`mixin`关键字来代替`class`

```dart
mixin Musical {
bool canPlayPiano = false;
bool canCompose = false;
bool canConduct = false;
void entertainMe() {
if (canPlayPiano) {
print('Playing piano');
} else if (canConduct) {
print('Waving hands');
} else {
print('Humming to self');
}
}
}
```

### 静态变量

对于类范围的状态和常量是有用的，静态变量直到他们被使用的时候才会初始化

```dart
class Queue {
static const initialCapacity = 16;
// ···
}
```

静态方法，不能操作一个实例变量，并且不能够访问`this`。可以使用静态方法当做编译期常量

## 泛型

泛型通常是类型安全锁必须的，他们对于写出严谨高质量的代码是很有用的

## 库

`import`和`library`指令可以创建模块化和可共享的代码库。使用 import 来指定如何在另一个库的范围中使用来自一个库的命名空间

### 懒加载库

延迟加载(也称为懒加载)允许应用程序在需要时按需加载库，减少应用程序的初始启动时间，加载很少使用的功能如可选屏幕和对话框
要延时加载库必须首先使用`deferred as`进行导入

```dart
import 'package:...' deferred as xxx;
```

当需要库时，使用库的标识符调用`loadLibrary()`

```dart
Future greet() async {
await hello.loadLibrary();
hello.printGreeting()
}
```

在导入文件中，递延库的常量不是常量。不能在导入文件中使用来自延迟库的类型。`Dart`隐式的将`loadLibrary()`插入到定义使用`deferred`作为名称空间的名称空间中，函数的作用是返回一个`Future`

## 异步

`async`和`await`关键字支持异步编程，允许编写类似于同步代码的异步代码

```dart
Future checkVersion() async {
try {
version = await lookupVersion();
 } catch (e) {
}
}
```

可以在异步函数中多次使用`await`  
在`await`表达式中，表达式的值通常是一个`Future`对象，如果不是那么这个值将被自动包装成`Future`。`Future`对象指示返回结果移动是一个对象。表达式的值就是被返回的对象。`await`表达式会让程序执行挂起，直到返回的对象可用

## DateTime

```dart
DateTime.now();
var berlinWallFell = DateTime.utc(1989,11,9);
var moonLanding = DateTime.parse('1969-07-20 20:18:04z');
berlinWallFell.year;
berlinWallFell.month;
berlinWallFell.day;
berlinWallFell.weekday;
berlinWallFell.add(Duration(days:10,hours:5);
var diff = berlinWallFell.difference(moonLanding);
diff.inDays; //7416
diff.inHours; //177987
diff.inMinutes; //10679261
moonLanding.isAfter(berlinWallFell);
moonLanding.isBefore(berlinWallFell);
berlinWallFell.compareTo(berlinWallFell); // 0相等 -1不相等
berlinWallFell.subtract(Duration(hours: 3, minutes: 41, seconds: 56));
moonLanding.toLocal(); // => 1969-07-20 21:18:04.000
moonLanding.toUtc(); // => 1969-07-20 20:18:04.000Z
moonLanding.timeZoneName; // => UTC
```

## 语句

- `if else;` 不同于`js`,条件必须使用`boolean`值
- `for;` `dart`中闭包`for`循环捕获了索引值避免了在`JS`中类似的陷进
- `forEach`
- `for..in`
- `while`
- `do..while`
- `switch..case`

## throw 'XXX' 抛出异常

`try..catch`  
为确保一些代码可以无论异常是否抛出而运行可以`try..finally`

```dart
try {
breedMoreLlamas();
} catch (e) {
print('Error: $e'); // Handle the exception first.
} finally {
cleanLlamaStalls(); // Then clean up.
}
```

## List

```dart
List testList = List(3) //固定长度的List
testList.length //返回长度
testList.isEmpty //返回是否为空
testList.isNotEmpty //返回是否有元素
testList.first //获取第一个元素
testList.last //获取最后一个元素
testList.sort((a,b) => a.toString().length.compareTo(b.toString().length))
testList.reversed //返回List倒序排列的Iterable不改变原List
testList.clear() //清空数组
testList.add('111') //添加元素
testList.addAll(testList2) //添加全部元素
testList.insert(2,'value') //向指定位置添加元素
testList.insertAll(3,['v','a','l']) //向指定位置添加
testList.remove('value') //删除指定元素
testList.removeLast() //删除最后一个元素
testList.removeAt(3) //删除指定位置元素
testList.removeRange(0,5) //删除指定区域元素
testList.removeWhere((item)=> item.toString().length == 3) //将满足条件的全部删除
testList.setRange(0,2,tmpList,1) //设置元素，tmpList个数不够会报错，个数大于需要替换的个数可以设置第四个参数表示跳过前面的几个元素开始取值，默认为0
testList.replaceRange(3,10,tmpList) //替换元素
testList.fillRange(3,5,item) //使用一个值item替换指定位置的全部值
testList.setAll(2,tmpList)
testList.sublist(0,3) //截取
testList.retainWhere((item) => item.v > 3) //将满足条件的元素保留下来，不满足的删除
testList.indexOf('aaaa',5) //查看元素出现的位置，没有找到返回-1，第二个参数可以指定查找范围
testList.lastIndexOf('bbbb',7) //查看元素最后出现的位置，第二个参数为最后一个元素到指定位置的范围
testList.indexWhere((e) => bool) //返回第一个满足条件的元素index
testList.firstWhere((e)=> bool) //返回第一个满足条件的元素
testList.lastWhere((e)=> bool) //从后往前找，返回第一个满足条件的元素
testList.lastIndexWhere((e) => bool) //从后向前找第一个满足条件的元素index
testList.any((item) => item.v == 3) //遍历查询有没有满足条件的数据，有返true，无返false
testList.every((item) => item.v == 3) //遍历查询是否所有都满足这个条件
List<String> testStringList = testList.cast<String>() //查看list中的数据类型是不是都是指定的数据类型，如果发现List中存在不为指定泛型的数据类型就会报错
testList.contains('aaa') //查看是否存在指定元素
testList.forEach((e) =>{}) //遍历每个元素，此时不能add或remove否则报错，可以修改元素
for in
testList.map() //遍历每个元素并做处理返回一个新的Iterable
testList.take(2) //从0开始取2个元素并返回
testList.takeWhere((e) => e>2) //从0开始取，直至第一个不符合函数的元素，将前面的元素都返回
testList.where((e) => bool); //根据指定参数函数筛选每个元素，符合条件的元素组成一个新的Iterable
testList.singleWhere((e) => bool, orElse:()=>{}) // 找到唯一满足条件的元素，如果没有满足的或有多个满足的元素就返回orElse的返回值
testList.fold(2,(a,e)=>(a*e)) //2*(1*2*3) 指定一个参数函数规则，对每个元素做操作并返回结果
testList.reduce((a,b)=>a+b) //1+2+3 用指定方法对元素做连续操作并返回结果
```

## Timer()

延时处理，`参数1`是时间值，`参数2`是回调函数
