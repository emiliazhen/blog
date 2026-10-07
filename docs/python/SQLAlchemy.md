---
title: SQLAlchemy
date: 2026-09-24
category: Python
order: 12
icon: python
---

## ORM

ORM（Object-RelationalMapping对象关系映射）是一种编程技术，用于在面向对象编程语言和关系型数据库之间建立映射。
它允许开发者通过对象的方式与数据库进行交互，而无需直接编写复杂的SQL语句。

- 减少重复的 SQL代码
- 代码更简洁易读
- 自动处理数据库连接和事务
- 自动防止 SQL 注入攻击

## 使用流程

### 安装

1. 安装VC_redist.x64,安装MySql Server 9.7 LTS 并配置好服务。

```
Next -> accept并Next -> Custom并Next -> 自定义安装路径 -> Next -> Install -> run Configurator 并 Finish
Next -> 设置数据文件夹 -> Next -> 设置Root的密码 -> Next Next Next
```

2. 安装sqlalchemy[asyncio]和aiomysql。

```bash
pip install sqlalchemy[asyncio] aiomysql
```

### 建库建表

#### 创建数据库引擎

使用create_async_engine创建异步引擎

```python
from datetime import datetime
from sqlalchemy import DateTime, func, String, Float
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

ASYNC_DATABASE_URL = "mysql+aiomysql://root:1234@localhost:3306/fastapi_test?charset=utf8"

async_engine = create_async_engine(
  ASYNC_DATABASE_URL,
  echo = True, # 可选，输出SQL日志
  pool_size = 10, # 设置连接池中保持的持久连接数
  max_overflow = 20 # 设置连接池允许创建的额外连接数
)

# 基类
class Base(DeclarativeBase):
  create_time: Mapped[datetime] = mapped_column(DateTime, insert_default=func.now(),default=func.now, comment="创建时间")
  update_time: Mapped[datetime] = mapped_column(DateTime, insert_default=func.now(), default=func.now, onupdate=func.now(), comment="修改时间")

class Book(Base):
  __tablename__ = "book"
  id: Mapped[int] = mapped_column(primary_key=True, comment="书籍id")
  bookname: Mapped[str] = mapped_column(String(255), comment="书名")
  author: Mapped[str] = mapped_column(String(255), comment="作者")
  price: Mapped[float] = mapped_column(Float, comment="价格")
  publisher: Mapped[str] = mapped_column(String(255), comment="出版社")

# 建表
async def create_tables():
  async with async_engine.begin() as conn:
    await conn.run_sync(Base.metadata.create_all)  # Base 模型类的元数据创建

@app.on_event("startup")
async def startup_event():
  await create_tables()
```

### 路由中使用ORM

```python
from fastapi import FastAPI,Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import create_async_engine,async_sessionmaker, AsyncSession

# 依赖注入：创建依赖项获取数据库会话 + Depends 注入路由处理函数
AsyncSessionLocal = async_sessionmaker(
  bind =async_engine,  # 绑定数据库引擎
  class_= AsyncSession,  # 指定会话类
  expire_on_commit=False  # 提交后会话不过期，不会重新查询数据库
)

# 依赖项
async def get_database():
  async with AsyncSessionLocal() as session:
    try:
      yield session  # 返回数据库会话给路由处理函数
      await session.commit()  # 提交事务
    except Exception:
      await session.rollback()  # 有异常，回滚
      raise
    finally:
      await session.close()  # 关闭会话

@app.get("/book/books")
async def get_book_list(db: AsyncSession = Depends(get_database)):
  """
  查询图书
  """
  result = await db.execute(select(Book))
  book = result.scalars().all()
  return book
```

### 操作表

#### 查询

核心语句 await db.execute(select(模型类))，返回一个ORM对象。

```python
# 获取所有数据
scalars().all()

# 获取单条数据
scalars().first()
get(模型类,主键值)
```

例：

```python
@app.get("/book/books")
async def get_book_list(db: AsyncSession = Depends(get_database)):
    """
    查询所有图书
    """
    result = await db.execute(select(Book))
    book = result.scalars().all()
    return book

@app.get("/book/books/{book_id}")
async def get_book_by_id(book_id: int, db: AsyncSession = Depends(get_database)):
    """
    通过ID查询图书
    """
    book = await db.get(Book, book_id)
    return book
```

#### 查询条件

比较判断 == > >= < <= 等

```python
@app.get("/book/books/expensive_books")
async def get_expensive_list(db: AsyncSession = Depends(get_database)):
    """
    通过ID查询图书，价格大于等于200
    """
    result = await db.execute(select(Book).where(Book.price >= 200.0))
    books = result.scalars().all()
    return books
```

模糊查询 like()，%匹配0个或多个字符，\_匹配一个字符

```python
@app.get("/book/books/book_by_cao")
async def get_book_by_cao(db: AsyncSession = Depends(get_database)):
    """
    查询作者为曹开头的图书
    """
    result = await db.execute(select(Book).where(Book.author.like("曹%")))
    books = result.scalars().all()
    return books
```

与或非查询 & | ~

```python
@app.get("/book/books/book_by_cao_expensive")
async def get_book_by_cao_expensive(db: AsyncSession = Depends(get_database)):
    """
    查询作者为曹某并价格大于100图书
    """
    result = await db.execute(
        select(Book).where((Book.author.like("曹_")) & (Book.price > 100))
    )
    books = result.scalars().all()
    return books
```

包含查询 in\_()

```python
@app.get("/book/books/hot_books")
async def get_hot_books(db: AsyncSession = Depends(get_database)):
    """
    热门图书
    """
    hot_id_list = [1, 3, 5, 7]
    result = await db.execute(select(Book).where((Book.id.in_(hot_id_list))))
    books = result.scalars().all()
    return books
```

聚合查询 select( func.方法名(模型类.属性) )

```python
@app.get("/book/books/count")
async def get_count(db: AsyncSession = Depends(get_database)):
    # result = await db.execute(select(func.count(Book.id)))
    # result = await db.execute(select(func.max(Book.price)))
    # result = await db.execute(select(func.sum(Book.price)))
    result = await db.execute(select(func.avg(Book.price)))
    num = result.scalar()  # 用来提取一个数值 → 标量值
    return num
```

分页查询

```python
@app.get("/book/get_book_list")
async def get_book_list(
    page: int = 1, page_size: int = 3, db: AsyncSession = Depends(get_database)
):
    # （页码 - 1） * 每页数量
    skip = (page - 1) * page_size

    # offset 跳过的记录数  ； limit 每页的记录数
    stmt = select(Book).offset(skip).limit(page_size)
    result = await db.execute(stmt)
    books = result.scalars().all()
    return books
```

#### 新增

```python
from pydantic import BaseModel

# 用户输入 → 参数 → 请求体
class BookBase(BaseModel):
    id: int
    bookname: str
    author: str
    price: float
    publisher: str


@app.post("/book/add_book")
async def add_book(book: BookBase, db: AsyncSession = Depends(get_database)):
    # ORM对象 → add → commit
    book_obj = Book(**book.__dict__)
    db.add(book_obj)
    await db.commit()
    return book

```

#### 更新

```python
class BookUpdate(BaseModel):
    bookname: str
    author: str
    price: float
    publisher: str


@app.put("/book/update_book/{book_id}")
async def update_book(
    book_id: int, data: BookUpdate, db: AsyncSession = Depends(get_database)
):
    # 1. 查找图书
    db_book = await db.get(Book, book_id)

    # 如果未找到 抛出异常
    if db_book is None:
        raise HTTPException(status_code=404, detail="查无此书")

    # 2. 找到了则修改：重新赋值
    db_book.bookname = data.bookname
    db_book.author = data.author
    db_book.price = data.price
    db_book.publisher = data.publisher

    # 3. 提交到数据库
    await db.commit()
    return db_book
```

#### 删除

```python
@app.delete("/book/delete_book/{book_id}")
async def delete_book(book_id: int, db: AsyncSession = Depends(get_database)):
    # 先查再删 提交
    db_book = await db.get(Book, book_id)

    if db_book is None:
        raise HTTPException(
            status_code=404,
            detail="查无此书"
        )

    await db.delete(db_book)
    await db.commit()
    return {"msg": "删除图书成功"}
```
