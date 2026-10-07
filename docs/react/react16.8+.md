---
title: react16.8+
date: 2018-03-21
category: react
order: 3
icon: react
---

## useRef

```jsx
import React, { useState, useEffect, useRef } from 'react'
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const inputRef = useRef < HTMLInputElement > null
  useEffect(() => {
    document.title = `点击了${like}次`
  }, [like])
  useEffect(() => {
    if (didMountRef.current) {
      console.log('did mounted')
    } else {
      didMountRef.current = true
    }
  })
  const btnClick = () => {
    setLike(like + 1)
    likeRef.current = likeRef.current + 1
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }
  const consoleLike = () => {
    setTimeout(() => {
      console.log(like, 'like')
      console.log(likeRef)
    }, 2000)
  }
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={consoleLike}>console</button>
      <button onClick={btnClick}>👍 +{like}</button>
    </>
  )
}
export default LikeButton
```

## react-router

### 版本< v6

```js
import { HashRouter, Route, Link } from 'react-router-dom'
```

`HashRouter`是一个路由根容器，一个应用程序中，一般只需要唯一的一个`HashRouter`容器即可，将来所有的`Route`和`Link`都要在`HashRouter`中进行；`HashRouter`中只能有唯一的一个子元素  
`Link`用于设置跳转路径`<Link to='/home'>首页<Link>`  
`Rout`e 用于设置路由规则以及路由占位`<Route path='/home' component={Home }></Route>`路由匹配是进行模糊匹配的，可以通过`Route`身上的`exact`属性来表示当前的`Route`是进行精确匹配的  
Redirect `<Redirect from="/" to="/home"></Redirect>`

### switch

匹配到第一个规则后不会再往下执行其他路由匹配规则

```jsx
<Switch>
  <Route path="/movie/detail/:id" component={MovieDetail} exact></Route>
  <Route path="/movie/:type/:id" component={MovieList} exact></Route>
</Switch>
```

| 路由          | 说明                                                                     |
| :------------ | :----------------------------------------------------------------------- |
| HashRouter    | 地址栏带#，同一地址可以不同标签页打开多个页面                            |
| browserRouter | 地址跟正常地址一样，但是同一地址不能打开多个页面，需要使用服务端渲染解决 |

### 使用 v6

`BrowserRouter` `HashRouter` `NativeRouter`来包裹整个应用，通常是`App`组件

- `<Routes>`和`<Route>`要配合使用，必须`<Routes>`包裹`<Route>`
- `<Route>`相当于一个`if`语句，如果其路径与当前`URL`匹配则呈现对应的组件
- `<Route caseSensitive>` 匹配时区分大小写
- `<Route>`可以签到使用，可使用 useRoutes()配置路由表，但需要通过`<Outlet>`组件来渲染其子路由
- `<Link to="/mine" replace>` 替换路由
- `<Link to="detail">` 跳转当前路由嵌套下子路由
- `<NavLink to="about" class={({isActive)) => isActive ? 'base active' : 'base'}>` 高亮是默认类名`active`
- `<Navigate to="/" replace={true}>` 只要组件被渲染就会修改路径更换视图

```jsx
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
```

#### 路由规则

```jsx
<Routes>
  <Route path="login" element={<LoginPage />} />
  <Route path="/" element={<Layout />}>
    <Route index path="home" element={<HomePage />} />
    <Route path="mine" element={<MinePage />} />
  </Route>
</Routes>
```

或使用路由表

```jsx
export default [
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '/',
    // element: <Navigate to='/home' />,
    element: <Layout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: 'mine',
        element: <MinePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

function App() {
  const routerElement = useRoutes(routers)
  return <div className={style.App}>{routerElement}</div>
}

const Layout: React.FC = () => {
  return (
    <Content>
      <Outlet />
    </Content>
  )
}
```

#### useParams

```jsx
// {
//   path: 'mine/:id',
//   element: <MinePage />,
// },

import { useParams } from 'react-router-dom'
const MinePage: React.FC = () => {
  const { id, type } = useParams()
  return (
    <div>
      {id},{type}
    </div>
  )
}
```

#### useSearchParams

```jsx
// /mine?id=1&&type=2

import { useSearchParams } from 'react-router-dom'
const MinePage: React.FC = () => {
  const [search, setSearch] = useSearchParams()
  return (
    <div>
      {search.get('id')},{search.get('type')}
    </div>
  )
}
```

#### 传 state

```jsx
;<div>
  <Link to="mine" state={{ name: 'xx', age: 18, id: 9 }}>
    TO Mine
  </Link>
</div>

import { useLocation } from 'react-router-dom'

const MinePage: React.FC = () => {
  const {
    state: { id, age, name },
  } = useLocation()
  return (
    <div>
      {id},{age},{name}
    </div>
  )
}
```

#### 编程式路由导航

```jsx
import { useNavigate } from 'react-router-dom'
const GlobalHeader: React.FC = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  const goForward = () => {
    navigate(-1)
  }
  return (
    <div>
      <Button onClick={goBack}> back </Button>
      <Button onClick={goForward}> forward </Button>
    </div>
  )
}
```

#### 其他 Hooks

`useInRouterContext` 返回`Boolean`，值为当前组件是否在路由器包裹  
`useNavigationType` 返回当前的导航类型 `pop`/`push`/`replace`，`POP`指在浏览器中直接打开了这个路由组件（刷新页面）  
`useOutlet` 呈现当前组件中渲染的嵌套组件，嵌套路由还未挂载时返回`null`  
`useResolvedPath` 参数传入路径，解析该路径中的`path`/`serch`/`hash`值

## 生命周期

组件的生命周期是指组件被创建到挂载到页面中运行起来，再到组件不用时卸载的过程。只有类组件才有生命周期（类组件 实例化，函数组件 不需要实例化）

### 挂载阶段

| 钩子函数          | 触发时机                                                                 | 作用                                                 |
| :---------------- | :----------------------------------------------------------------------- | :--------------------------------------------------- |
| constructor       | 创建组件时，最先执行，初始化时只执行一次                                 | 初始化 stater;创建 ref；用 Bind 解决 this 指向问题等 |
| render            | 每次组件渲染都会触发 渲染 UI(不能在里面调用 setState)                    |
| componentDidMount | 组件挂载（完成 DOM 渲染）后执行，初始化时执行一次 发送网络请求；DOM 操作 |

### 更新阶段

| 钩子函数           | 触发时机                   | 作用                                                         |
| :----------------- | :------------------------- | :----------------------------------------------------------- |
| render             | 每次组件渲染都会触发       | 渲染 UI(与挂载阶段是同一个 render)                           |
| componentDidUpdate | 组件更新后（DOM 操作完毕） | DOM 操作，可以获取到更新后的 DOM 内容，不要直接调用 setState |

### 卸载阶段

| 钩子函数             | 触发时机                 | 作用                               |
| :------------------- | :----------------------- | :--------------------------------- |
| componentWillUnmount | 组件卸载（从页面中消失） | 执行清理工作（比如：清理定时器等） |

`componentWillReaciveProps(nextProps)`当组件接收的属性值发生变化会被触发；`nextProps`为最新属性值
`shouldComponentUpdate(nextProps,nextState){return true}`当组件的`props`或者`state`中的数据发生变化时会被触发，返回`true`才会继续执行后续生命周期;当`return true`时会重新执行`render`函数；`nextProps`，`nextState`接收组件最新的属性值和状态值
`componentDidUpdate(prevProps,prevState)`当`render`函数已经重新被执行会触发此函数

## 使用 css 模块化

行内样式需要使用对象进行描述，以前中划线连接变成驼峰命名法

```jsx
return (
  <div style={{ border: '1px solid gray', margin: '10px 0', padding: '0 10px' }}>
    <p>姓名：{props.name}</p>
    <p>年龄：{props.age}</p>
  </div>
)
```

可以在`webpack.config.js`中为`css-loader`启用模块化，后面加上参数`modules`表示启用模块化`css`

```js
{ test: /\.css$/, use: ['style-loader', 'css-loader?modules&localIdentName=[name]_[local]-[hash-5]'] },
```

在组件中引入`css`并使用样式

```jsx
import React from 'react'
import itemStyle from './HelloItem.css'
export default function HelloItem(props) {
  return (
    <div className={itemStyle.box}>
      <p>姓名：{props.name}</p>
      <p>年龄：{props.age}</p>
    </div>
  )
}
```

模块化内部的全局样式

```css
.box {
  border: 1px solid gray;
}
:global(.title) {
  color: skyblue;
}
```

## hooks

`React`体系里组件分为类组件和函数组件  
经过多年的实战，函数组件是一个更加匹配`React`的设计理念`UI=f(data)`，也更有利于逻辑拆分与重用的组件表达形式，而先前的函数组件是不可以有自己的状态的，为了能让函数可以拥有自己的状态，所以从`React v16.8`开始，`Hooks`应运而生  
有了`hooks`之后，为了兼容老版本，`class`类组件并没有被移除，两者都可以使用  
有了`hooks`之后，不能再把函数成无状态组件了，因为`hooks`为函数组件提供了状态  
`hooks`只能在函数组件中使用

### 解决了

1. 组件的逻辑复用
   在`hooks`出现之前，`react`先后尝试了`mixins`混入、`HOC`高阶组件、`render-props`等模式，但是都有各自的问题，比如`mixin`的数据来源不清晰，高阶组件的嵌套问题等
2. `class`组件自身的问题
   `class`组件大而全，提供了很多东西，有不可忽视的学习成本，比如各种生命周期、`this`指向问题等

### useState

为函数组件提供状态

```jsx
import React, { useState, useEffect } from 'react'
const LikeButton: React.FC = () => {
  useEffect(() => {
    document.title = `点击了${like}次`
  }, [like])
  const [like, setLike] = useState(0)
  return <button onClick={() => setLike(like + 1)}>👍 +{like}</button>
}
export default LikeButton
```

组件第一次渲染：从头开始执行该组件中的代码逻辑；调用`useState`，将传入的参数作为状态初始值；渲染组件，此时获取到的状态值为`0`  
组件第二次渲染：点击按钮调用`setLike`修改状态，因为状态发生改变，所以该组件会重新渲染；组件重新渲染时会再次执行该组件中的代码逻辑；再次调用`useState`，此时`React`内部会拿到最新的状态值，而非初始值；再次渲染组件，此时获取到的状态值为`1`  
`useState`的初始值只会在组件第一次渲染时生效  
修改状态时，一定要使用新的状态替换旧的状态，不能直接修改旧的状态，尤其是引用类型  
`useState`不能嵌套在`if`/`for`/`其他函数`中，`react`按照`hooks`的调用顺序识别每一个`hook`

### useEffect

为`react`函数组件提供副作用处理

1. 不添加依赖项
   组件首次渲染执行一次，不管哪个状态更改引起组件更新时都会重新执行

```js
useEffect(() => {
  console.log('副作用执行了')
})
```

2. 添加空数组
   组件只在首次渲染时执行一次

```js
useEffect(() => {
  console.log('副作用执行了')
}, [])
```

3. 添加特定依赖项
   副作用函数在首次渲染时执行，在依赖项发生变化时重新执行

```jsx
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('zs')
  useEffect(() => {
    console.log('副作用执行了')
  }, [count])
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1)
        }}>
        {count}
      </button>
      <button
        onClick={() => {
          setName('cp')
        }}>
        {name}
      </button>
    </>
  )
}
```

### 清理副作用

可以在函数末尾`return`一个新的函数，在新函数中编写清理逻辑  
组件卸载时自动执行；组件更新时，下一个`useEffect`副作用函数执行之前自动执行

```jsx
const App = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      // 用来清理副作用的事情
      clearInterval(timerId)
    }
  }, [count])
  return <div>{count}</div>
}
```

### 自定义 Hook

```jsx
import { useState, useEffect } from 'react'
const useMousePosition = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
    document.addEventListener('click', updateMouse)
    return () => {
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  return position
}
export default useMousePosition
```

### Hooks 进阶

`useState`回调函数参数  
如果初始`state`需要通过计算才能获得，则可以传入一个函数，在函数中计算并返回初始的`state`，此函数只在初始渲染时被调用

```jsx
function Counter(props) {
  const [count, setCount] = useState(() => {
    return props.count
  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}
```

`useEffect`发送网络请求

```jsx
useEffect(() => {
  async function fetchData() {
    const res = await axios.get('http://xxxx.net/v1/channels')
    console.log(res)
  }
}, [])
```

### useRef

在函数组件中获取真实的`dom`元素对象或者是组件对象

```jsx
import { useEffect, useRef } from 'react'
function App() {
  const h1Ref = useRef(null)
  useEffect(() => {
    console.log(h1Ref)
  }, [])
  return (
    <div>
      <h1 ref={h1Ref}>this is h1</h1>
    </div>
  )
}
```

获取类组件实例，函数组件没有实例

```jsx
class Foo extends React.Component {
  sayHi = () => {
    console.log('say hi');
  };
  render() {
    return <div>Foo</div>;
  }
}
export default Foo;
// app.jsx
import { useEffect, useRef } from 'react';
import Foo from './Foo';
function App() {
  const h1Foo = useRef(null);
  useEffect(() => {
    console.log(h1Foo);
  }, []);
  return (
    <div>
      {' '}
      <Foo ref={h1Foo} />
    </div>
  );
}
export default App;
```

### useContext

```jsx
import { createContext, useContext } from 'react'
// 创建Context对象
const Context = createContext()
function Foo() {
  return (
    <div>
      Foo <Bar />
    </div>
  )
}
function Bar() {
  // 底层组件通过useContext函数获取数据
  const name = useContext(Context)
  return <div>Bar {name}</div>
}
function App() {
  return (
    // 顶层组件通过Provider 提供数据
    <Context.Provider value={'this is name'}>
      <div>
        <Foo />
      </div>
    </Context.Provider>
  )
}
export default App
```

## Mobx

`MobX` 通过 `makeObservable` 方法来构造响应式对象，传入的对象属性会通过 `Proxy` 代理，与 `Vue` 类似，在 `6.0` 版本之前使用的是 `Object.defineProperty API`

```powershell
npm i mobx  mobx-react-lite
```

### react 使用

1. 定义模块 1

```jsx
import { makeAutoObservable } from 'mobx'
class TaskStore {
  taskList = []
  constructor() {
    makeAutoObservable(this)
  }
  addTask() {
    this.taskList.push('vue', 'react')
  }
}
const task = new TaskStore()
export default task
```

2. 定义模块 2

```jsx
import { makeAutoObservable } from 'mobx'
class CounterStore {
  count = 0
  list = [1, 2, 3, 4, 5, 6]
  constructor() {
    makeAutoObservable(this)
  }
  addCount = () => {
    this.count++
  }
  changeList = () => {
    this.list.push(7, 8, 9)
  }
  get filterList() {
    return this.list.filter((item) => item > 4)
  }
}
const counter = new CounterStore()
export default counter
```

3. 组合模块统一导出

```jsx
import React from 'react'
import counter from './counterStore'
import task from './taskStore'
class RootStore {
  constructor() {
    this.counterStore = counter
    this.taskStore = task
  }
}
const rootStore = new RootStore()
// context机制的数据查找链  Provider如果找不到 就找createContext方法执行时传入的参数
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)
export { useStore }
```

4. 使用

```jsx
import { observer } from 'mobx-react-lite'
// 导入方法
import { useStore } from './store'
function App() {
  // 得到store
  const store = useStore()
  return (
    <div className="App">
      <button onClick={() => store.counterStore.addCount()}>{store.counterStore.count}</button>
    </div>
  )
}
// 包裹组件让视图响应数据变化
export default observer(App)
```

监听对象变更

```jsx
const store = makeAutoObservable({
  count: 0,
  setCount(count) {
    this.count = count
  },
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  },
})
// store 发生修改立即调用 effect
autorun(() => {
  $count.innerText = `${store.count}`
})
// 第一个方法的返回值修改后才会调用后面的 effect
reaction(
  // 表示 store.count 修改后才会调用
  () => store.count,
  // 第一个参数为当前值，第二个参数为修改前的值
  // 有点类似与 Vue 中的 watch
  (value, prevValue) => {
    console.log('diff', value - prevValue)
  }
)
// 第一个方法的返回值为真，立即调用后面的 effect
when(
  () => store.count > 10,
  () => {
    console.log(store.count)
  }
)(
  // when 方法还能返回一个 promise
  async function () {
    await when(() => store.count > 10)
    console.log('store.count > 10')
  }
)()
```
