---
title: 绘制api
date: 2019-05-29
category: canvas
icon: palette
---

## 绘制线条

```js
//设置画布的起始点
context.moveTo(x, y)
//从当前位置绘制直线到x,y坐标
context.lineTo(x, y)
//开始一条路径，或重置当前的路径,并切断和上一个图形的路径联系
context.beginPath()
```

## 绘制文字

```js
//在指定位置和宽度内绘制文字
context.fillText(text, x, y, maxWidth) //最大宽度
//设置字体名称和形状
context.font = '字体属性' //bold 32px sans-serif
//设置文本内容水平对齐方式
context.textAlign = '水平方位值' //center|left|right
//设置文本内容垂直对齐方式
context.textBaseline = '垂直方位值' //top|middle|bottom
```

## 绘制内容保存为图片

```js
context.toDataURL(type, encoderOptions) //image/png图片格式,0到1区间图片质量
```

## 绘制矩形圆形

```js
//绘制矩形的路径
context.rect(x, y, width, height)
//绘制无填充的矩形
context.strokeRect(x, y, width, height)
//绘制填充的矩形
context.fillRect(x, y, width, height)
//清空指定矩形内像素
context.clearRect(x, y, width, height)
//在指定位置绘制一个圆形
context.arc(x, y, r, sAngle, eAngle, clockwise)
```

## 绘制图片

```js
//在画布上绘制固定坐标的图像
context.drawImage(img, x, y)
//在画布上绘制不仅固定坐标，且规定图像的宽度和高度图像
context.drawImage(img, x, y, width, height)
//在画布上剪切图像，并在画布上绘制被剪切的部分
context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
```
