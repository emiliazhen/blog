---
title: vue3
date: 2019-12-11
category:
  - vue
  - vue3
icon: vue
---

## ref 语法

`ref`是一个函数，接收一个参数，返回一个响应对象，在未来可以检测到改变并作出对应的响应

```js
import { ref } from "vue"
setup() {
  const count = ref(0)
  const double = computed(() => {
    return count.value * 2
  })
  const increase = () => {
    count.value++
  }
  return {
    count,
    increase,
    double
  }
}
```

## reactive 函数

```vue
<template>
  <h1>{{ count }}</h1>
  <h2>{{ double }}</h2>
  <button @click="increase">+1</button>
</template>

<script lang="ts">
import { computed, reactive, toRefs } from 'vue'
interface dataInterface {
  count: number
  increase: () => void
  double: number
}
export default {
  name: 'App',
  setup() {
    const data: dataInterface = reactive({
      count: 0,
      increase: () => (data.count = data.count + 1),
      double: computed(() => data.count * 2),
    })
    const refData = toRefs(data)
    return {
      ...refData,
    }
  },
}
</script>
```

## 生命周期

不需要`beforeCreate`和`created`，直接在`setup`中  
`beforeDistory`和`distoryed`更名`onBeforeUnmount`和`onUnmount`

```js
import { onMounted, onUpdated, onRenderTriggered} from 'vue'
  setup(){
    onMounted(() => console.log('mounted'))
    onUpdated(() => console.log('updata'))
    onRenderTriggered(e => console.log(e))
}
```

## watch

`watch`多个值，第一个参数传入数组，返回也是多个值的数据

```js
watch([data, time], (nV, oV) => {
  console.log(nV, oV)
  document.title = 'Title' + data.count + time
})
```

使用`getter`的写法`watch reactive`对象中的一项

```js
watch(
  () => data.count,
  (nV, oV) => {
    console.log(nV, oV)
    document.title = 'Title' + data.count
  }
)
```

## hooks

### 鼠标追踪器

```js
import { ref, onMounted, onUnmounted } from 'vue'
function useMouseTracker() {
  const x = ref(0)
  const y = ref(0)
  const updatePosition = (e: MouseEvent) => {
    x.value = e.clientX
    y.value = e.clientY
  }
  onMounted(() => {
    document.addEventListener('click', updatePosition)
  })
  onUnmounted(() => {
    document.removeEventListener('click', updatePosition)
  })
  return [x, y]
}
export default useMouseTracker
// ---
import useMouseTracker from './hooks/useMouseTracker'
const [x, y] = useMouseTracker()
```

### urlLoader

```js
import { ref } from 'vue'
import axios from 'axios'
function useUrlLoader<T>(url: string) {
  const result = (ref < T) | (null > null)
  const loading = ref(true)
  const error = ref(null)
  axios
    .get(url)
    .then((rawData) => {
      loading.value = false
      result.value = rawData.data
    })
    .catch((e) => (error.value = e))
  return {
    result,
    loading,
    error,
  }
}
export default useUrlLoader
// ---
import useUrlLoader from './hooks/useUrlLoader'
interface dogResInterface {
  message: string;
  status: string;
}
const { result, loading } = useUrlLoader < dogResInterface > 'https://xx'
watch(result, (nV, oV) => {
  if (result.value) {
    console.log(result.value.message)
  }
})
```

## teleport 瞬间移动

```vue
<!-- --- components/modal -->
<template>
  <teleport to="#modal">
    <div id="center" v-if="visible">
      <h5>
        <slot>This is Modal !</slot>
      </h5>
      <button @click="closeBtn">Close</button>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  emits: {
    'close-modal': null,
  },
  setup(props, context) {
    const closeBtn = () => {
      context.emit('close-modal')
    }
    return {
      closeBtn,
    }
  },
})
</script>
<!--  --- -->
<div id="app"></div>
<div id="modal"></div>
<!--  --- -->
<modal :visible="modalVisible" @closeModal="closeModal">What.</modal>
```

## supense 异步请求

```vue
<!-- components/asyncShow -->
<template>
  <h1>{{ result }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve({
          result: 42,
        })
      }, 3000)
    })
  },
})
</script>
<!-- --- -->
<template>
  <suspense>
    <template #default>
      <async-show></async-show>
    </template>
    <template #fallback>
      <h5>Loading...</h5>
    </template>
  </suspense>
</template>
```

## 全局 Api 修改

```js
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// 这时app就是一个App的实例，现在再设置任何的配置是在不同的app实例上面的，不会像vue2一样发生任何的冲突。
app.config.isCustomElement = (tag) => tag.startsWith('app-')
app.use(/* ... */)
app.mixin(/* ... */)
app.component(/* ... */)
app.directive(/* ... */)
app.config.globalProperties.customProperty = () => {}
// 当配置结束以后，再把 App 使用 mount方法挂载到固定的DOM的节点上
app.mount(App, '#app')
```

## inputForm 组件

支持`v-model`，使用`$emit('update:modelValue',v)`  
使用`$attrs`支持默认属性

```vue
<template>
  <div class="validate-input-container pb-3">
    <input class="form-control" :class="{ 'is-invalid': inputRef.error }" :value="inputRef.val" @blur="validateInput" v-bind="$attrs" @input="updateValue" />
    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
interface RuleInterface {
  type: 'required' | 'email';
  message: string;
}
export type RulesProp = RuleInterface[]
export default defineComponent({
  inheritAttrs: false,
  props: {
    rules: {
      type: Array as PropType<RulesProp>
    },
    modelValue: {
      type: String
    }
  },
  setup (props, ctx) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const validateInput = () => {
      if (props.rules) {
        inputRef.error = props.rules.some(r => {
          let isError = false
          switch (r.type) {
            case 'required':
              isError = inputRef.val.trim() === ''
              break
            case 'email':
              isError = !//.test(inputRef.val)
              break
            default:
              break
          }
          inputRef.message = r.message
          return isError
        })
      }
    }
    const updateValue = (e: KeyboardEvent) => {
      const v = (e.target as HTMLInputElement).value
      inputRef.val = v
      ctx.emit('update:modelValue', v)
    }
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>
<!-- --- -->
<validate-input :rules="emailRules" type="email" placeholder="请输入邮箱" v-model="emailValue"></validate-input>
```

## mitt

在`vue2`中可通过`ref`来调用组件的方法，或通过`entbus`完成组件通信，在`vue3`中删除了`$on,$off,$emit`，使用第三方库`mitt`

```js
// --- components/form
import { defineComponent, onUnmounted } from 'vue'
import mitt, { Emitter } from 'mitt'
export const emitter: Emitter = mitt()
type ValidateFunc = () => boolean
export default defineComponent({
  emits: ['form-submit'],
  setup(props, ctx) {
    let funArr: ValidateFunc[] = []
    const callback = (func?: ValidateFunc) => {
      func && funArr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funArr = []
    })
    const submitForm = () => {
      const result = funArr.map((v: ValidateFunc) => v()).every((r) => r)
      ctx.emit('form-submit', result)
    }
    return {
      submitForm,
    }
  },
})
// --- components/input
onMounted(() => {
  emitter.emit('form-item-created', validateInput)
})
```

## 路由

```js
import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import fetch from '@/utils/fetch'
import home from '@/views/home.vue'
import login from '@/views/login.vue'
import signUp from '@/views/signUp.vue'
import columnDetail from '@/views/columnDetail.vue'
import createPost from '@/views/createPost.vue'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        redirectAlreadyLogin: true,
      },
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp,
    },
    {
      path: '/columnDetail/:id',
      name: 'columnDetail',
      component: columnDetail,
    },
    {
      path: '/createPost',
      name: 'createPost',
      component: createPost,
      meta: {
        requiredLogin: true,
      },
    },
  ],
})
router.beforeEach((to, from, next) => {
  const { user, token } = store.state
  const { requiredLogin, redirectAlreadyLogin } = to.meta
  if (!user.isLogin) {
    if (token) {
      fetch.defaults.headers.common.Authorization = `Bearer ${token}`
      store
        .dispatch('fetchUserInfo')
        .then(() => {
          if (redirectAlreadyLogin) {
            next('/')
          } else {
            next()
          }
        })
        .catch(() => {
          store.commit('logout')
          next('login')
        })
    } else {
      if (requiredLogin) {
        next('login')
      } else {
        next()
      }
    }
  } else {
    if (redirectAlreadyLogin) {
      next('/')
    } else {
      next()
    }
  }
})
export default router
```

使用

```js
import { useRouter } from 'vue-router'
const router = useRouter()
router.push('/')
```

## 状态管理

### vuex

#### 定义 store

```js
import axios from 'axios'
import { createStore } from 'vuex'
import { API_COLUMN_GETS, API_USER_LOGIN, API_USER_CURRENT } from '@/api'
interface UserProps {
  isLogin: boolean;
  nickName?: string;
  _id?: string;
  column?: string;
}
interface ListProps<P> {
  [id: string]: P;
}
export interface PostProps {
  _id?: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: ImageProps | string;
  createdAt?: string;
  column: string;
  author?: string | UserProps;
  isHTML?: boolean;
}
export interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
  fitUrl?: string;
}
export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}
interface GlobalDataProps {
  token: string;
  user: UserProps;
  posts: [];
  // columns: {
  //   data: ListProps<ColumnProps>;
  // };
  columns: [];
  isLoading: boolean;
}
const store =
  createStore <
  GlobalDataProps >
  {
    state: {
      token: localStorage.getItem('token') || '',
      user: {
        isLogin: false,
      },
      posts: [],
      columns: [],
      isLoading: false,
    },
    mutations: {
      login(state, token) {
        state.token = token
        localStorage.setItem('token', token)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
      },
      logout(state) {
        state.token = ''
        state.user = {
          isLogin: false,
        }
        localStorage.removeItem('token')
        delete axios.defaults.headers.common.Authorization
      },
      setUserInfo(state, data) {
        state.user = { isLogin: true, ...data }
      },
      fetchColumns(state, data) {
        state.columns = data.list
      },
      setLoading(state, status: boolean) {
        state.isLoading = status
      },
    },
    actions: {
      fetchColumns(
        context,
        data = {
          currentPage: 1,
          pageSize: 6,
        }
      ) {
        API_COLUMN_GETS(data).then((res) => {
          context.commit('fetchColumns', res.data.data)
        })
      },
      async login({ commit }, data) {
        const res = await API_USER_LOGIN(data)
        if (res.status === 200) {
          commit('login', res.data.data.token)
        }
        return res
      },
      fetchUserInfo({ commit }) {
        API_USER_CURRENT().then((res) => {
          if (res.status === 200) {
            commit('setUserInfo', res.data.data)
          }
        })
      },
      loginAndFetchUserInfo({ dispatch }, data) {
        return dispatch('login', data).then(() => {
          return dispatch('fetchUserInfo')
        })
      },
    },
  }
export default store
```

#### 使用

```js
import { useStore } from 'vuex'
const store = useStore()
store.dispatch('loginAndFetchUserInfo', {
  email: emailValue.value,
  password: passwordValue.value,
})
```

#### 分模块

1. store/index.ts

```js
import { createStore } from 'vuex'
import auth from './auth'
import table from './table'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, table },
})
```

2. 建立 module

```js
export const state = {
  user: JSON.parse(sessionStorage.getItem('user')),
}
export const actions = {}
export const mutations = {
  setUser(state, payload) {
    sessionStorage.setItem('user', JSON.stringify(payload))
    state.user = payload
  },
}
export const getters = {
  isAuthenticated: (state) => !!state.user || !!sessionStorage.getItem('user'),
}
export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
}
```

3. 使用

```js
const store = useStore()
const handleSetProfile = () => {
  const form = {
    username: 'jess103372',
    displayName: 'Jessica',
  }
  store.commit('auth/setUser', form)
}
const states = reactive({
  username: computed(() => store.state.auth.user.username),
})
```

### Provide/inject

跨组件读写，和`vuex`不同的是跨组件的范围仅限于`provide`注册那一层的子组件  
`props`组件传参只能传一层，但`provide`可以下面几层读取

- 爷组件

```js
import { provide } from 'vue'
provide('name', 'James')
```

- 孙组件

```vue
<template>
  <p>The name is {{ name }}</p>
</template>
<script>
import { inject } from 'vue'

setup(){
  const name = inject('name')
  return { name }
}
</script>
```

要修改值，可以传入修改的方法，然后在其他地方禁止对值的直接操作

```js
import { provide, reactive, readonly } from 'vue'

const states = reactive({
  name: 'James',
  old: 75,
  //...
})
const handleAfterBirthday = () => {
  states.old = states.old + 1
}
provide('grandpaStates', readonly(states))
provide('grandpaDispatch', { handleAfterBirthday })
```

子组件取出来可以加`reactive`和`computed`确保收到的值可以深层监听

```vue
<template>
  {{ states.old }}歲了
  <button @click="handleAfterBirthday">慶生結束</button>
</template>
<script>
import { inject, reactive, computed } from 'vue'

const grandpaStates = inject('grandpaStates')
const { handleAfterBirthday } = inject('grandpaDispatch')
const states = reactive({
  old: computed(() => grandpaStates.old),
})
return { states, handleAfterBirthday }
</script>
```

### 组件 v-model

在`2.x`中在组件上使用`v-model`相当于绑定`value` `prop`并触发`input`事件

```vue
<child-component v-model="pageTitle" />
<!-- 是以下的简写: -->
<child-component :value="pageTitle" @input="pageTitle = $event" />
```

若想更改`prop`或事件名称，则需要在组件中添加`model`项

```vue
<script>
export default {
  model: {
    prop: 'title',
    event: 'change',
  },
  props: {
    // 这将允许 `value` 属性用于其他用途
    value: String,
    // 使用 `title` 代替 `value` 作为 model 的 prop
    title: {
      type: String,
      default: 'Default title',
    },
  },
}
</script>
<!-- 简写: -->
<child-component :title="pageTitle" @change="pageTitle = $event" />
```

使用`v-bind.sync`对某一个`prop`进行双向绑定

```vue
<script>
this.$emit('update:title', newValue)
</script>
<child-component :title="pageTitle" @update:title="pageTitle = $event" />
<!-- 简写: -->
<child-component :title.sync="pageTitle" />
```

在`3.x`中，自定义组件上 v-model 相当于传递了`modelvalue` `prop`并接受抛出的`update:modelValue`事件

```vue
<child-component v-model="pageTitle" />
<!-- 是以下的简写: -->
<child-component :modelValue="pageTitle" @update:modelValue="pageTitle = $event" />
```

可以为`v-model`传递一个参数，一作为组件内`model`选项的替代

```vue
<child-component v-model:title="pageTitle" />
<!-- 是以下的简写: -->
<child-component :title="pageTitle" @update:title="pageTitle = $event" />
```

### Pinia

1. /src/store/index.ts

```js
import { defineStore, createPinia } from 'pinia'
export const store = createPinia()
export const useLoadingStore = defineStore({
  id: 'loading',
  state: () => ({
    is_loading: false,
    tb_loading: false,
    full_loading: false,
  }),
  getters: {},
  actions: {
    set_btn_loading(data: boolean) {
      this.is_loading = data
    },
    set_tb_loading(data: boolean) {
      this.tb_loading = data
    },
    set_full_loading(data: boolean) {
      this.full_loading = data
    },
  },
})
```

2. main.ts

```js
import { store } from '@/store'
app.use(store)
```

3. 使用

```js
import { defineComponent, onMounted, ref } from 'vue'
import { useLoadingStore } from '@/store/index'

export default defineComponent({
  setup() {
    const loadingStore = useLoadingStore()
    loadingStore.set_btn_loading(!loadingStore.is_loading)
    return {
      loadingStore,
    }
  },
})
```
