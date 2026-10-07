---
title: Java
date: 2024-03-27
category: Java
order: 1
icon: java
---

## 初识

### 介绍

- `Java`是美国 `sun公司`在`1995`年推出的一门计算机`高级编程语言`
- `Java` 早期称为`Oak(橡树)`，后期改名为`Java`
- `Java之父`：詹姆斯·高斯林(`James Gosling`)
- `2009`年 `sun公司`被`Oracle公司`收购

### 为什么 JAVA

- 最流行的编程语言之一，在国内使用广泛
- 可移植性、安全可靠、性能较好
- 开发社区最完善，功能最丰富

### 能做什么

- 桌面应用开发，如`IDEA`
- 服务器系统，如应用的后台
- 企业级应用开发，如微服务、大型互联网应用
- 大数据开发，如`hadpoop`
- 移动应用开发，如`android`
- 游戏开发，如`mineCraft`

### 技术体系

- `Java SE`: 标准版，`Java`技术的核心和基础
- `Java EE`：企业版，企业级应用开发的一套方案
- `Java ME`：小型版，针对移动设备应用的解决方案

### JDK

`Java`的语言产品是`JDK（Java Development Kit ：Java开发者工具包)`，必须安装`JDK`才能使用`Java`语言

#### 安装

[下载](https://www.oracle.com/java/technologies/downloads/) ，LTS 版本: 8/11/17
以前的老版本 JDK 安装不会自动配置 Path 环境，需自己手动配置

- 新建系统环境变量`JAVA_HOME`，值为 jdk 所在位置
- Path 中新增`%JAVA_HOME%\bin`
- 新建系统环境变量`CLASSPATH`，值为`.;%Java_Home%\bin;%Java_Home%\lib\dt.jar;%Java_Home%\lib\tools.jar`

#### JDK 组成

- JVM： Java 虚拟机, 真正运行 Java 程序的地方
- 核心类库：Java 自己写好的程序，给程序员自己的程序调用的
- JRE（Java Runtime Environment）: Java 的运行环境。
- JDK（Java Development Kit）: Java 开发工具包（包括上面所有）

```
JVM     核心类库         开发工具Java\Javac\..
└───JRE───┘                       │
└───────────────JDK───────────────┘
```

### Java 开发步骤

- 编写代码

```java
// HelloWorld.java
public class HelloWorld{
   public static void main (String[] args){
    System.out.println("Hello World !")
   }
}
```

- 使用`javac`编译成`HelloWorld.class`

```powershell
javac HelloWorld.java
```

- 使用`java`执行

```
java HelloWorld
```

> [!tip]  
> 从`JDK 11`开始支持`java HelloWorld`直接运行源代码文件

### Java 跨平台原理

```
                                            ┌─────────────────────┐
                                      ┌────►│ Windows版 JVM虚拟机  │
                                      │     └─────────────────────┘
┌────────┐             ┌──────────┐   │     ┌─────────────────────┐
│java程序 ├─javac编译──►│ class文件 ├───┼────►│ Linux版 JVM虚拟机    │
└────────┘             └──────────┘   │     └─────────────────────┘
                                      │     ┌─────────────────────┐
                                      └────►│ MacOS版 JVM虚拟机    │
                                            └─────────────────────┘
```

### IDEA 管理 Java 程序的结构

```
 ┌──────────────────────────────────────────────────────────┐
 │                  购物网站Project                          │
 │  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐   │
 │  │  首页Module  │    │ 购物车Module │    │  订单Module │   │
 │  │ ┌─────────┐ │    │ ┌─────────┐ │    │ ┌─────────┐ │   │
 │  │ │package1 │ │    │ │package1 │ │    │ │package1 │ │   │
 │  │ │class1   │ │    │ │class1   │ │    │ │class1   │ │   │
 │  │ │class2   │ │    │ │class2   │ │    │ │class2   │ │   │
 │  │ │ ..      │ │    │ │   ..    │ │    │ │   ..    │ │   │
 │  │ └─────────┘ │    │ └─────────┘ │    │ └─────────┘ │   │
 │  │ ┌─────────┐ │    │ ┌─────────┐ │    │ ┌─────────┐ │   │
 │  │ │package1 │ │    │ │package1 │ │    │ │package1 │ │   │
 │  │ │class1   │ │    │ │class1   │ │    │ │class1   │ │   │
 │  │ │class2   │ │    │ │class2   │ │    │ │class2   │ │   │
 │  │ │ ..      │ │    │ │   ..    │ │    │ │   ..    │ │   │
 │  │ └─────────┘ │    │ └─────────┘ │    │ └─────────┘ │   │
 │  │    ...      │    │   ...       │    │    ....     │   │
 │  └─────────────┘    └─────────────┘    └─────────────┘   │
 └──────────────────────────────────────────────────────────┘

```

① 创建工程

- `New`-`Porject`-`Empty Project`
- 指定工程所在的目录和工程名称 `demoProject`

② 创建模块

- `New`-`Module`-`Java`-`Next`
- 设置模块名 `hellow-app`

③ 创建包

- 模块右键-`New`-`Package`
- 为包取名字，域名倒写 `com.emiliazhen.hello`

④ 创建类

- 包右键-`New`-`Java Class`
- 写类名，别带后缀 `Hello World`

⑤ 编写代码、启动
`.java文件`右键-`Run 'HelloWorld.main()'`

> [!tip]  
> `IDEA`中的`java`程序是自动编译和执行的，编译后的`class`文件在工程目录下的`out`文件夹里
