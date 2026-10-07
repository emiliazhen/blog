---
title: storybook
date: 2022-03-11
category: nodejs
icon: storybook
---

## Vite

```powershell
npx sb init --builder storybook-builder-vite
```

package.json

```json
  "devDependencies": {
    "@babel/core": "^7.17.8",
    "@storybook/addon-actions": "^6.4.20",
    "@storybook/addon-essentials": "^6.4.20",
    "@storybook/addon-links": "^6.4.20",
    "@storybook/vue": "^6.4.20",
    "babel-loader": "^8.2.4",
    "sass": "^1.48.0",
    "storybook-builder-vite": "^0.1.23",
    "vite": "^2.7.2",
    "vite-plugin-vue2": "^1.9.2",
    "vue-loader": "^15.9.8"
  }
```

## vue/cli

```powershell
npx -p @storybook/cli sb init
```

package.json

```json
  "devDependencies": {
    "@babel/core": "^7.17.8",
    "@storybook/addon-actions": "^6.4.20",
    "@storybook/addon-essentials": "^6.4.20",
    "@storybook/addon-links": "^6.4.20",
    "@storybook/vue": "^6.4.20",
    "@vue/cli-plugin-babel": "~4.5.17",
    "@vue/cli-service": "~4.5.17",
    "babel-loader": "^8.2.4",
    "file-loader": "^6.2.0",
    "url-loader": "^4.1.1",
    "vue-loader": "^15.9.8",
    "vue-template-compiler": "^2.6.11"
  },
```

.storybook/main.js

```js
module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue',
}
```

.storybook/manager.js

```js
import { addons } from '@storybook/addons'
addons.setConfig({
  previewTabs: {
    // 'storybook/docs/panel': {
    //     index: -1,
    //     title: 'Dox'
    // },
    // 'canvas': {
    //   hidden: true,
    // },
  },
})
```

.storybook/preview.js

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueKonva from 'vue-konva'
import '../stories/assets/style/normalize.css'
import '../stories/assets/style/common.css'
Vue.use(VueKonva)
Vue.use(ElementUI, {
  size: 'mini',
})
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true, // 展开所有参数信息
  },
}
```

stories/shapes.stories.js

````js
import shapes from './shapes';
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { shapes },
  template: '<shapes @onDropStart="onDropStart" @onDropEnd="onDropEnd" @onClickItem="onClickItem" @onClickPort="onClickPort" @onItemDragEnd="onItemDragEnd"/>',
});
export const shapesInit = Template.bind({});
shapesInit.storyName = 'Init 初始化'
export default {}
stories/shapes.stories.mdx
\```mdx
  import { Meta, Story} from '@storybook/addon-docs'
  import { shapesInit } from './shapes.stories.js';
  import shapes from './shapes';
  # 形状
  定义好每个图元的基础形状后在Home页实例化，将点击和拖拽方法传给图元，最后添加到图层后调用定义好的动画方法。

  ## Example

  <Story
    decorators={[
      () => ({
        template: '<div id="custom-root" style="background: red;"><story /></div>',
      })
    ]}
    story={shapesInit} />

  ### 定义形状/属性/动画

  图元形状类继承于`Konva.Group`，定义好每个小几何后组合到Group里；
  创建接线柱，默认隐藏，鼠标移入时才显示；

  \```js
  // 公共形状，继承于Konva的组，用组方便整体拖拽和属性绑定
  class hr2dShape extends Konva.Group {
    constructor(x,y){
      super()
      this.x(x) // x位置
      this.y(y) // y位置
      this.draggable(true) // 图元拖拽
    }
    titleArea = new Konva.Text({ // 标题文字区域
      x: 0,
      y: -12,
      text: '',
      fontSize: FontSize,
      fill: ColorText
    })
    changeScale(v){ // 更改缩放确定后方法
      this.scale({x:v,y:v})
    }
    changeTitle(title){ // 更改标题后方法
      this.titleArea.text(title)
    }
  }
  \```

  ### 图元实例化
  给左边添加图元面板下所有项添加draggable属性，绑定拖拽开始事件

  \```html
  <ul>
    <li v-for="v in shapeList" :key="v.id">
      <div draggable @dragstart="dragStart(v.id)">
        <p>{{v.name}}</p>
        <img :src="imgListRender(v.img)" alt="">
      </div>
    </li>
  </ul>
  \```

  在开始拖拽时，记录下当前拖拽的id

  \```js
  // 拖拽开始
  dragStart(i){
    this.dragIndex = i
  },
  \```

  释放时判断类型，并实例化图元，将在页面写好的点击图元方法、点击接线柱方法、元素拖拽方法传给每个图元

  \```js
  // 释放
  drop(e){
    e.preventDefault()
    if(this.dragIndex === -1){
      return
    }
    const {x:diffX,y: diffY} = this.$refs.stageWrap.getBoundingClientRect() // 获取画布距离左上顶点的坐标
    const layer = this.$refs.layer.getNode() // 获取图层
    const {x,y} =  toRealPosition(e.x - diffX, e.y - diffY)
    if(this.dragIndex === 1){ // 主泵
      const reactor = new ReactorShape(x, y) // 实例化
      layer.add(reactor)
      reactor.runAnim() // 动画
    }  else if(this.dragIndex === 12){ // 管道节
      this.curPipeBendX = x // 当前点X
      this.curPipeBendY = y // 当前点Y
      this.pipeBendTypeVisible = true // 管道节选择弹窗显示
    }
    this.dragIndex = -1 // 重置
  }
  \```

  <Meta
    title="Example/Shapes 形状"
    component={shapes}
  />

````
