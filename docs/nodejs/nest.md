---
title: nest
date: 2023-05-21
category: nodejs
icon: nest
---

`Nest (NestJS)` 是一个用于构建高效、可扩展的 `Node.js` 服务器端应用程序的开发框架

- 原生支持 `TypeScript` 的框架
- 可以基于 `Express` 也可以选择 `fastify`

## 项目创建

### 安装全局包

```powershell
npm i -g @nestjs/cli
```

### 创建项目

```powershell
nest new project-name
```

### 项目结构

```
src
├── app.controller.spec.ts  // 针对控制器的单元测试
├── app.controller.ts       // 单个路由的基本控制器(Controller)
├── app.module.ts           // 应用程序的根模块(Module)
├── app.service.ts          // 具有单一方法的基本服务(Service)
├── main.ts                 // 应用程序的入口文件，它使用核心函数 NestFactory 来创建 Nest 应用程序的实例。
```

#### 入口文件

内容比较简单， 使用`Nest.js`的工厂函数`NestFactory`来创建了一个`AppModule`实例，启动了 `HTTP` 侦听器，以侦听`main.ts` 中所定义的端口。

#### Module

根模块提供了用来启动应用的引导机制，可以包含很多功能模块。
`.mudule`文件需要使用一个`@Module()`装饰器的类，装饰器可以理解成一个封装好的函数，其实是一个语法糖。`@Module()` 装饰器接收四个属性：

- providers：`Nest.js`注入器实例化的提供者（服务提供者），处理具体的业务逻辑，各个模块之间可以共享（注入器的概念后面依赖注入部分会讲解）；
- controllers：处理`http`请求，包括路由控制，向客户端返回响应，将具体业务逻辑委托给`providers`处理；
- imports：导入模块的列表，如果需要使用其他模块的服务，需要通过这里导入；
- exports：导出服务的列表，供其他模块导入使用。如果希望当前模块下的服务可以被其他模块共享，需要在这里配置导出；

#### Controller

使用`@Controller`装饰器来定义控制器, `@Get`是请求方法的装饰器，对`getHello`方法进行修饰， 表示这个方法会被`GET`请求调用。

#### Service

使用`@Injectable`修饰后的 `AppService`, 在`AppModule`中注册之后，在`app.controller.ts`中使用，我们就不需要使用`new AppService()`去实例化，直接引入过来就可以用

## 路由装饰器

### @Controller

如每一个要成为控制器的类，都需要借助`@Controller`装饰器的装饰，该装饰器可以传入一个路径参数，作为访问这个控制器的主路径

```ts
// 主路径为 app
@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}
  ....
}
// 需访问 localhost:3000/app
```

### HTTP 方法处理装饰器

`@Get`、`@Post`、`@Put`等众多用于`HTTP`方法处理装饰器，经过它们装饰的方法，可以对相应的`HTTP`请求进行响应。同时它们可以接受一个字符串或一个字符串数组作为参数，这里的字符串可以是固定的路径，也可以是通配符。

```ts
// 主路径为 app
@Controller("system")
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 1. 固定路径：
  // 可以匹配到 get请求，http://localhost:3000/system/list
  @Get("list")
  getList(): string {...}

  // 可以匹配到 post请求，http://localhost:3000/system/list
  @Post("list")
  createList():string{...}

  // 2.通配符路径(?+* 三种通配符 )
  // 可以匹配到 get请求, http://localhost:3000/system/user_xxx
  @Get("user_*")
  getUser(){return "getUser"}

  // 3.带参数路径
  // 可以匹配到put请求，http://localhost:3000/system/list/xxxx
  @Put("list/:id")
  updateList(){ return "update"}
}
```

> [!tip]  
> 修改文件实时监听可使用已配置好的指令`npm run start:dev`

### 全局路由前缀

除了上面这些装饰器可以设置路由外， 我们还可以设置全局路由前缀， 比如给所以路由都加上/api 前缀。此时需要修改`main.ts`

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api') // 设置全局路由前缀
  await app.listen(9080)
}
bootstrap()
// 访问需 localhost:3000/api/xxx
```

## 编写代码

### nest 命令

```powershell
# nest g [文件类型] [文件名] [文件目录]
# 创建模块
nset g mo system
# 创建控制器
nest g co system
```

> [!warning]  
> 创建顺序应为先创建`Module`后，再创建`Controller`和`Service`，这样创建出来的文件在`Module`中会自动注册

## 配置接口文档

① 安装

```powershell
npm install @nestjs/swagger swagger-ui-express -S
```

② 在`main.js`中设置

```ts
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()
  ....
  // 设置swagger文档
  const config = new DocumentBuilder()
    .setTitle('管理后台')
    .setDescription('管理后台接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(9080);
}
bootstrap();
```

设置完毕可以在`localhost:3000/docs`里查看生成的文档

### 接口标签

我们可以根据`Controller`来分类， 只要添加`@ApiTags`就可以

```ts
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@ApiTags("文章")
@Controller('post')
export class PostsController {...}
```

### 接口说明

进一步优化文档， 给每一个接口添加说明文字， 让使用的人直观的看到每个接口的含义，不要让使用的人去猜。同样在`Controller`中， 在每一个路由的前面使用`@ApiOperation`装饰器：

```ts
import { ApiTags,ApiOperation } from '@nestjs/swagger';
export class PostsController {

  @ApiOperation({ summary: '创建文章' })
  @Post()
  async create(@Body() post) {....}

  @ApiOperation({ summary: '获取文章列表' })
  @Get()
  async findAll(@Query() query): Promise<PostsRo> {...}
  ....
}
```

### 接口传参

`Swagger`的优势之一就是，只要注解到位，可以精确展示每个字段的意义，我们想要对每个传入的参数进行说明  
在`xxx`目录下创建`xxx.dto.ts`文件
::: code-group

```ts [xxx.dto.ts]
export class CreatePostDto {
  readonly title: string
  readonly author: string
  readonly content: string
  readonly cover_url: string
  readonly type: number
}
```

```ts [xxx.controller.ts]
import { CreatePostDto } from './dto/create-post.dto';

@ApiOperation({ summary: '创建文章' })
@Post()
async create(@Body() post:CreatePostDto) {...}
```

:::

## 数据验证

`Nest.js`自带了三个开箱即用的管道：`ValidationPipe`、`ParseIntPipe`和`ParseUUIDPipe`, 其中`ValidationPipe` 配合`class-validator`就可以完美的实现我们想要的效果（对参数类型进行验证，验证失败抛出异常）。
管道验证操作通常用在 dto 这种传输层的文件中,用作验证操作
① 安装

```powershell
npm install class-validator class-transformer -S
```

② 在`xxx.dto.ts`中添加验证，完善错误信息

```ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreatePostDto {
  @ApiProperty({ description: '文章标题' })
  @IsNotEmpty({ message: '文章标题必填' })
  readonly title: string

  @IsNotEmpty({ message: '缺少作者信息' })
  @ApiProperty({ description: '作者' })
  readonly author: string

  @ApiPropertyOptional({ description: '内容' })
  readonly content: string

  @ApiPropertyOptional({ description: '文章封面' })
  readonly cover_url: string

  @IsNumber()
  @ApiProperty({ description: '文章类型' })
  readonly type: number
}
```

③ 最后在`main.ts`中全局注册管道`ValidationPipe`

```ts
app.useGlobalPipes(new ValidationPipe())
```
