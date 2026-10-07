---
title: FastApi
date: 2026-09-15
category: Python
order: 11
icon: python
---

## 环境准备

创建一个虚拟环境并安装FastAPI，虚拟环境能够隔离项目依赖

```bash
python -m venv fastapi-env
# 激活虚拟环境（Windows）
fastapi-env\Scripts\activate

# 激活虚拟环境（Mac/Linux）
source fastapi-env/bin/activate

# 安装FastAPI和Uvicorn（ASGI服务器）
pip install fastapi uvicorn
```

## 开始

```python
from fastapi import FastAPI

# 创建一个FastAPI实例
app = FastAPI()

# 定义一个路由
@app.get("/")
def read_root():
    return {"message": "Hello World"}

# 定义一个带参数的路由
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}
```

运行

```bash
uvicorn main:app --reload
```

自动文档
/docs 交互式API文档  
/redoc 更侧重于阅读的文档

## 请求体和响应模型

在构建真实API时，我们通常需要处理请求体（Request Body）和定义响应模型。
FastAPI使用Pydantic进行数据验证，使用response_model参数指定响应模型

FastAPI会自动：

- 验证请求体是否符合Item模型
- 将响应转换为ItemResponse模型
- 在文档中显示请求和响应的JSON Schema

```python
from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI()
# 定义请求体模型
class Item(BaseModel):
    name: str = Field(default='物品1',min_length=2,max_length=10,description='名称')
    description: str = None
    price: float
    tax: float = None

# 定义响应模型
class ItemResponse(BaseModel):
    id: int
    name: str
    price: float
    tax_included_price: float = None

@app.post("/items/", response_model=ItemResponse)
def create_item(item: Item, item_id: int):
    # 计算含税价格
    tax_included_price = item.price
    if item.tax:
        tax_included_price += item.price * item.tax / 100

    # 返回响应
    return {
        "id": item_id,
        "name": item.name,
        "price": item.price,
        "tax_included_price": tax_included_price
    }
```

## 响应类型

FastApi默认处理为JSON响应类型

### HTML响应类型

```python
from fastapi.responses import HTMLResponse
@app.get('/html',response_class=HTMLResponse)
def get_html():
    """
    获取HTML
    """
    return "<h1>Hello !</h1>"
```

### 文件响应类型

```python
from fastapi.responses import FileResponse

@app.get('/file')
def get_file():
    """
    获取文件
    """
    path = './temp.txt'
    return FileResponse(path)
```

## 查询参数和路径参数

- Query用于定义查询参数的验证和元数据
- Path用于定义路径参数的验证和元数据
- Optional[str]表示参数可以是字符串或None
- 文档字符串会显示在自动生成的文档中

```python
from fastapi import FastAPI, Query, Path
from typing import Optional

app = FastAPI()

@app.get("/items/")
def read_items(
    q: Optional[str] = Query(
        None,
        min_length=3,
        max_length=50,
        regex="^[a-zA-Z ]*$",
        description="Search query string"
    ),
    skip: int = 0,
    limit: int = 10
):
    """
    获取物品列表，可以通过查询参数过滤
    """
    return {"q": q, "skip": skip, "limit": limit}

@app.get("/items/{item_id}")
def read_item(
    item_id: int = Path(..., ge=1, description="The ID of the item"),
    q: Optional[str] = None
):
    """
    获取特定ID的物品
    """
    return {"item_id": item_id, "q": q}
```

## 依赖注入系统

依赖注入系统允许你声明依赖，FastAPI会自动处理它们。
依赖注入的用途非常广泛：

- 数据库连接管理
- 认证和授权
- 参数验证和处理
- 共享业务逻辑

依赖项： 可重复使用的组件（函数/类），负责提供某种功能或数据。

```python
from fastapi import FastAPI, Query,Depends

def common_page_parameters(page_num: int = Query(1,ge=1),page_size: int = Query(10,ge=1)):
    """
    通用分页参数
    """
    return {"page_num": page_num, "page_size": page_size}

@app.get('/news/news_list')
def get_news_list(commons = Depends(common_page_parameters)):
    return commons
```

## 异步支持

```python
from fastapi import FastAPI
import asyncio

app = FastAPI()
@app.get("/async")

async def read_async():
    # 异步函数
    await asyncio.sleep(1)  # 模拟异步操作
    return {"message": "Hello Async World"}
```

当处理I/O密集型操作（如数据库查询、API调用等）时，异步函数可以显著提高性能。你的服务器可以在等待I/O完成时处理其他请求，而不是被阻塞。

## 错误处理

```python
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse

app = FastAPI()

# 自定义异常类
class UnicornException(Exception):
    def __init__(self, name: str):
        self.name = name

# 注册异常处理器
@app.exception_handler(UnicornException)
async def unicorn_exception_handler(request: Request, exc: UnicornException):
    return JSONResponse(
        status_code=418,
        content={"message": f"Oops! {exc.name} is not a unicorn!"},
    )

@app.get("/unicorns/{name}")

async def read_unicorn(name: str):
    if name == "yolo":
        raise UnicornException(name=name)
    return {"unicorn_name": name}

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    if item_id == 42:
        raise HTTPException(
            status_code=404,
            detail="Item not found",
            headers={"X-Error": "Item 42 is classified"}
        )
    return {"item_id": item_id}
```

- 定义了一个自定义异常类UnicornException
- 注册了一个异常处理器来捕获该异常
- 使用内置的HTTPException来返回HTTP错误

## 中间件

中间件允许你在请求处理前后执行代码。这对于日志记录、CORS、认证等非常有用。
定义的异步函数有两个参数，一个是请求，一个是传递请求的函数名。
多个中间件执行顺序是自下而上

```python
from fastapi import FastAPI, Request
import time

@app.middleware('http')
async def middleware1(request: Request, call_next):
    print('middleware1 start')
    response = await call_next(request)
    print('middleware1 end')
    return response

@app.middleware('http')
async def middleware2(request: Request, call_next):
    print('middleware2 start')
    response = await call_next(request)
    print('middleware2 end')
    return response

@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    """
    计算处理请求所需的时间，并在响应头中添加这个信息
    """
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response
```

FastAPI也内置了一些常用中间件，例如CORS中间件：

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```
