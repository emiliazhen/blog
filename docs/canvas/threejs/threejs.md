---
title: three.js
date: 2022-07-05
category:
  - canvas
  - three.js
icon: geometry
---

## 特点

`Three.js`作为`WebGL`框架中的佼佼者，由于它的易用性和扩展性，使得它能够满足大部分的开发需求。  
`Three.js`掩盖了`3D`渲染的细节：`Three.js`将`WebGL`原生`API`的细节抽象化，将`3D`场景拆解为网格、材质和光源(即它内置了图形编程常用的一些对象种类)。

- 面向对象：开发者可以使用上层的`JavaScript`对象，而不是仅仅调用`JavaScript`函数。
- 功能非常丰富：`Three.js`除了封装了`WebGL`原始`API`之外，`Three.js`还包含了许多实用的内置对象，可以方便地应用于游戏开发、动画制作、幻灯片制作、髙分辨率模型和一些特殊的视觉效果制作。
- 速度很快：`Three.js`采用了`3D`图形最佳实践来保证在不失可用性的前提下，保持极高的性能。
- 支持交互：`WebGL`本身并不提供拾取（`picking`)功能（即是否知道鼠标正处于某个物体上）。而`Three.js`则固化了拾取支持，这就使得你可以轻松为你的应用添加交互功能。
- 包含数学库：`Three.js`拥有一个强大易用的数学库，你可以在其中进行矩阵、投影和矢量运算。
- 内置文件格式支持：你可以使用流行的 3D 建模软件导出文本格式的文件，然后使用`Three.js`加载；也可以使用`Three.js`自己的`JSON`格式或二进制格式。
- 扩展性很强：为`Three.js`添加新的特性或进行自定义优化是很容易的事情。如果你需要某个特殊的数据结构，那么只需要封装到`Three.js`即可。

## 缺点

官网文档非常粗糙，对于新手极度不友好。  
国内的相关资源匮乏。
`Three.js`所有的资料都是以英文格式存在，对国内的朋友来说又提高了门槛。
`Three.js`不是游戏引擎，一些游戏相关的功能没有封装在里面，如果需要相关的功能需要进行二次开发。

## 与`Babylon.js`对比

`Babylon.JS`是最好的`JavaScript3D`游戏引擎，它能创建专业级三维游戏。主要以游戏开发和易用性为主。与`Three.js`之间的对比：

- `Three.js`比较全面，而`Babylon.js`专注于游戏方面。
- `Babylon.js`提供了对碰撞检测、场景重力、面向游戏的照相机，`Three.js`本身不自带，需要依靠引入插件实现。
- 对于`WebGL`的封装，双方做的各有千秋，`Three.js`浅一些，好处是易于扩展，易于向更底层学习；`Babylon.js`深一些，好处是易用扩展难度大一些。
- `Three.js`的发展是依靠社区推动，出来的比较早，发展比较成熟，`Babylon.js`是由微软公司在`2013`推出，文档和社区都比较健全，国内还不怎么火。

[在线编辑器](https://threejs.org/editor/)

使用`Three.js`显示创建的内容，我们必须需要的三大件是：渲染器，相机和场景。相机获取到场景内显示的内容，然后再通过渲染器渲染到画布上面。

```html
<body onload="init()">
  <script src="https://cdn.bootcss.com/three.js/92/three.js"></script>
  <script>
    //声明一些全局变量
    var renderer, camera, scene, geometry, material, mesh
    function initRenderer() {
      renderer = new THREE.WebGLRenderer() //实例化渲染器
      renderer.setSize(window.innerWidth, window.innerHeight) //设置宽和高
      document.body.appendChild(renderer.domElement) //添加到dom
    }
    //初始化场景
    function initScene() {
      scene = new THREE.Scene() //实例化场景
    }
    //初始化相机
    function initCamera() {
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200) //实例化相机
      camera.position.set(0, 0, 15)
    }
    //创建模型
    function initMesh() {
      geometry = new THREE.BoxGeometry(2, 2, 2) //创建几何体
      material = new THREE.MeshNormalMaterial() //创建材质
      mesh = new THREE.Mesh(geometry, material) //创建网格
      scene.add(mesh) //将网格添加到场景
    }
    //运行动画
    function animate() {
      requestAnimationFrame(animate) //循环调用函数
      mesh.rotation.x += 0.01 //每帧网格模型的沿x轴旋转0.01弧度
      mesh.rotation.y += 0.02 //每帧网格模型的沿y轴旋转0.02弧度
      renderer.render(scene, camera) //渲染界面
    }
    //初始化函数，页面加载完成是调用
    function init() {
      initRenderer()
      initScene()
      initCamera()
      initMesh()
      animate()
    }
  </script>
</body>
```

`ready`和`onload`的区别： `ready`加载完`js`和`css`就执行，`onload`必须加载完图片之后。

## 创建渲染器

1. 我们实例化了一个 `THREE.WebGLRenderer`，这是一个基于 `WebGL` 渲染的渲染器，当然，`Three.js` 向下兼容，还有 `CanvasRenderer`，`CSS2DRenderer`，`CSS3DRenderer` 和 `SVGRenderer`，这四个渲染器分别基于 `canvas2D`,`CSS2D`，`CSS3D` 和 `SVG` 渲染的渲染器。由于，作为 `3D` 渲染，`WebGL` 渲染的效果最好，并且支持的功能更多，我们以后的课程也只会用到 `THREE.WebGLRenderer`，需要使用其他渲染器时，会重点提示。
2. 调用了一个设置函数 `setSize` 方法，这个是设置我们需要显示的窗口大小。案例我们是基于浏览器全屏显示，所以设置了浏览器窗口的宽和高。
3. `renderer.domElement`是在实例化渲染器时生成的一个 `canvas` 画布，渲染器渲染界面生成的内容，都将在这个画布上显示。所以，我们将这个画布添加到了 `dom` 当中，来显示渲染的内容。

## 创建相机

`Three.js` 里面有几个不同的相机，我们这里使用到的是 `THREE.PerspectiveCamera`，这个相机的效果是模拟人眼看到的效果，就是具有透视的效果，近大远小。

1. 我们实例化了一个透视相机，需要四个值分别是视野，宽高比，近裁面和远裁面。我们分别介绍一下这四个值：

- `视野`：当前相机视野的宽度，值越大，渲染出来的内容也会更多。
- `宽高比`：默认是按照画布的显示的宽高比例来设置，如果比例设置的不对，会发现渲染出来的画面有拉伸或者压缩的感觉。
- `近裁面`和`远裁面`：这个是设置相机可以看到的场景内容的范围，如果场景内的内容位置不在这两个值内的话，将不会被显示到渲染的画面中。

2. 设置了相机的位置
   `WebGL` 坐标系统作为 `3D` 坐标，在原来的 `2D` 坐标 `xy` 轴上面又多了一个 `z` 轴，大家注意 `z` 轴的方向，是坐标轴朝向我们的方向是正轴，我们眼看去的方向是是 `z` 轴的负方向。 `camera.position.set` 函数是设置当前相机的位置，函数传的三个值分别是 `x` 轴坐标，`y` 轴坐标和 `z` 轴坐标。我们只是将相机的放到了 `z `正轴坐标轴距离坐标原点的 `15` 的位置。相机默认的朝向是朝向 `0` 点坐标的，我们也可以设置相机的朝向。

## 创建场景

场景只是作为一个容器，我们将需要显示的内容都放到场景对象当中。如果我们需要将一个模型放入到场景当中，则可以使用 scene.add 方法

## 创建第一个模型

1. 我们实例化了一个 `THREE.BoxGeometry` 立方体的几何体对象，实例化的三个传值分别代表着立方体的长度，宽度和高度。我们全部设置的相同的值，将渲染出一个标准的正立方体。
2. 我们实例化了一个 `THREE.MeshNormalMaterial` 材质，这种材质的特点是，它会根据面的朝向不同，显示不同的颜色。
3. 通过 `THREE.Mesh`方法实例化创建了一个网格对象，`THREE.Mesh` 实例化需要传两个值，分别是几何体对象和材质对象，才可以实例化成功。
4. 添加

## 动画

渲染的`render`方法需要两个值，第一个值是场景对象，第二个值是相机对象。这意味着，你可以有多个相机和多个场景，可以通过渲染不同的场景和相机让画布上显示不同的画面。  
每一个实例化的网格对象都有一个`rotation`的值，通过设置这个值可以让立方体旋转起来。在每一帧里，我们让立方体沿 x 轴方向旋转 0.01 弧度，沿 y 轴旋转 0.02 弧度（1π 弧度等于 180 度角度）。

## 性能检测插件

现在`Three.js`常使用的一款插件叫`stats`。  
实例化一个`stats`对象，然后把对象内生成的`dom`添加到页面当中

```js
stats = new Stats()
document.body.appendChild(stats.dom)
```

在 requestAnimationFrame 的回调里面进行更新每次渲染的时间

```js
function animate() {
 requestAnimationFrame(animate); //循环调用函数
 ......
  stats.update(); //更新性能插件
 renderer.render( scene, camera ); //渲染界面
}
```
