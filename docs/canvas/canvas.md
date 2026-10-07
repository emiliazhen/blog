---
title: canvas
date: 2019-05-24
category: canvas
icon: palette
---

`canvas`是`HTML5`提供的一种元素  
`canvas`是一个矩形区域，我们可以用 `JS`在上面绘画，控制其每一像素  
`canvas`拥有多种绘制路径、矩形、原型、字符以及添加图像的方法  
`cansvas`用`width`和`height`属性指定画布内容的宽高，单位只能是像素

## Context 对象

`canvas`的上下文、绘制环境
`CanvasElement.getContext('2d')`获取 2D 绘图上下文；`webgl`-`3D`模式

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 600
```

| 数学          | 对应写法                             |
| :------------ | :----------------------------------- |
| sin(θ)        | Math.sin(θ `*` Math.PI `/` 180)      |
| cos(θ)        | Math.cos(θ `*` Math.PI `/` 180)      |
| tan(θ)        | Math.tan(θ `*` Math.PI `/` 180)      |
| arcsin(a`/`c) | Math.asin(y`/`c) `*` 180 `/` Math.PI |
| arccos(a`/`c) | Math.acos(x`/`c) `*` 180 `/` Math.PI |
| arctan(a`/`c) | Math.atan(y`/`x) `*` 180 `/` Math.PI |

`arctan`在轴的第一第三区域都为负角度,换用`atan2(y,x)`来计算

新建`utils.js`

```js
let Utils = {}
// 获取鼠标在元素上的坐标
Utils.getOffset = (ele) => {
  let mouse = { x: 0, y: 0 }
  ele.addEventListener('mousemove', (e) => {
    let { x, y } = Utils.eventWrapper(e)
    mouse.x = x
    mouse.y = y
  })
  return mouse
}
// 坐标系转换
Utils.eventWrapper = (e) => {
  const { pageX, pageY, target } = e
  const { left, top } = target.getBoundingClientRect()
  return {
    x: pageX - left,
    y: pageY - top,
  }
}
// 角度转弧度
Utils.toRad = (angle) => (angle * Math.PI) / 180
// 弧度转角度
Utils.toAngle = (rad) => (rad * 180) / Math.PI
```

箭头跟随鼠标转动

```js
class Arrow {
  constructor(props) {
    this.x = 0
    this.y = 0
    this.w = 60
    this.h = 30
    this.rotation = 0
    this.fillStyle = 'rgb(57,119,224)'
    this.strokeStyle = 'rgba(0,0,0,0)'
    Object.assign(this, props)
    return this
  }
  createPath(ctx) {
    const { w, h } = this
    ctx.beginPath()
    ctx.moveTo(-w / 2, -h / 2)
    ctx.lineTo(w / 10, -h / 2)
    ctx.lineTo(w / 10, -h)
    ctx.lineTo(w / 2, 0)
    ctx.lineTo(w / 10, h)
    ctx.lineTo(w / 10, h / 2)
    ctx.lineTo(-w / 2, h / 2)
    ctx.closePath()
    return this
  }
  render(ctx) {
    ctx.save()
    ctx.fillStyle = this.fillStyle
    ctx.strokeStyle = this.strokeStyle
    ctx.translate(this.x, this.y)
    ctx.rotate(this.rotation)
    this.createPath(ctx)
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    return this
  }
}

const arrow = new Arrow({
  x: w / 2,
  y: h / 2,
  w: 180,
  h: 60,
}).render(ctx)

canvas.onmousemove = function () {
  const dx = mouse.x - arrow.x
  const dy = mouse.y - arrow.y
  arrow.rotation = Math.atan2(dy, dx)
  ctx.clearRect(0, 0, w, h)
  arrow.render(ctx)
}
```

平滑运动
`Math.sin`的值为`1`到`-1`

```js
const ball = new Ball({
  x: w / 2,
  y: h / 2,
  r: 50,
}).render(ctx)
let angle = 0
const swing = 160
;(function move() {
  window.requestAnimationFrame(move)
  ctx.clearRect(0, 0, w, h)
  ball.x = w / 2 + Math.sin(angle) * swing
  angle += 0.05
  angle %= Math.PI * 2
  ball.render(ctx)
})()
```

圆极坐标 `x=r*cosθ y=r*sinθ`
椭圆极坐标 `x=a*cosθ y=b*sinθ`
