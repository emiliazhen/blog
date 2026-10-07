---
title: canvas
date: 2022-01-12
category:
  - canvas
  - cesium.js
icon: cesium
---

## 开始

登录 cesium 官网注册，并拿到 token

```js
// Token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOixxxxxxx'
// 设置默认看到中国
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
  // 西经
  89.5,
  // 南维
  20.4,
  // 东经
  110.4,
  // 南维
  61.2
)
var viewer = new Cesium.Viewer('cesiumContainer', {
  // 地形
  // terrainProvider: Cesium.createWorldTerrain({
  //   // 地形法相
  //   requestVertexNormals: true,
  //   // 水纹
  //   requestWaterMask: true,
  // }),
  // 播放动画
  animation: false,
  // Home按钮
  homeButton: false,
  // 查询按钮
  geocoder: false,
  // 时间轴
  timeline: false,
  // 全屏
  fullscreenButton: false,
  // 场景2D/3D选择
  sceneModePicker: false,
  // 图层选择器
  baseLayerPicker: false,
  // 帮助按钮
  navigationHelpButton: false,
  imageryProvider: new Cesium.UrlTemplateImageryProvider({
    url: '/maps/terrain/{z}/{x}/{y}.jpg',
    fileExtension: 'jpg',
  }),
  infoBox: false,
  // 天空盒
  skyBox: new Cesium.SkyBox({
    sources: {
      positiveX: '/texture/px.png',
      positiveY: '/texture/ny.png',
      positiveZ: '/texture/pz.png',
      negativeX: '/texture/nx.png',
      negativeY: '/texture/py.png',
      negativeZ: '/texture/nz.png',
    },
  }),
})
// 地图叠加
var roadImageLayers = viewer.imageryLayers
var roadLayer = roadImageLayers.addImageryProvider(
  new Cesium.UrlTemplateImageryProvider({
    url: '/maps/road/{z}/{x}/{y}.jpg',
    fileExtension: 'jpg',
  })
)
roadLayer.alpha = 0.3
// 隐藏LOGO
viewer._cesiumWidget._creditContainer.style.display = 'none'
viewer.scene.debugShowFramesPerSecond = true
```

## 常用坐标转换

- 屏幕坐标-二维的笛卡尔坐标系 Cartesian2 类型
- 地理坐标系-WGS-84 坐标系 Cartographic 类型 经度/纬度/高度
- 笛卡尔空间直角坐标系 Cartesian3 类型

### 常用坐标转换 API

| 方法                                                                       | 说明                                                               |
| :------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| Cesium.Cartographic.fromCartesian(cartesian, ellipsoid, result)            | 笛卡尔转弧度(可以拿到高程)                                         |
| Cesium.Cartographic.fromDegrees(longitude, latitude, height, result)       | 经纬度转弧度(度单位)                                               |
| Cesium.CesiumMath.toDegrees(radians)                                       | 弧度转度                                                           |
| Cesium.CesiumMath.toRadians(degrees)                                       | 度转弧度                                                           |
| Cesium.Cartographic.fromRadians(longitude, latitude, height, result)       | 经纬度转弧度(弧度单位)                                             |
| Cesium.Cartographic.toCartesian(cartographic, ellipsoid, result)           | 弧度转笛卡尔                                                       |
| var pick1= scene.globe.pick(viewer.camera.getPickRay(pt1), scene)          | 其中 pt1 为一个二维屏幕坐标 平面坐标转三维坐标(其实都是笛卡尔坐标) |
| var geoPt1= scene.globe.ellipsoid.cartesianToCartographic(pick1)           | 其中 pick1 是一个 Cesium.Cartesian3 对象 笛卡尔三维坐标转地理坐标  |
| var point1=[geoPt1.longitude / Math.PI 180,geoPt1.latitude / Math.PI 180]; | 其中 geoPt1 是一个地理坐标 地理坐标转经纬度                        |
| var cartographic = Cesium.Cartographic.fromDegree(point)                   | point 是经纬度值 经纬度转地理坐标(弧度)                            |
| var coord_wgs84 = Cesium.Cartographic.fromDegrees(lng, lat, alt);          | 单位：度，度，米 经纬度转地理坐标                                  |
| var cartesian = Cesium.Cartesian3.fromDegree(point)                        | 经纬度转笛卡尔坐标                                                 |

### 笛卡尔坐标系 API

| 方法                                                                          | 说明                                                     |
| :---------------------------------------------------------------------------- | :------------------------------------------------------- |
| Cesium.Cartesian3.abs(cartesian, result)                                      | 计算绝对值                                               |
| Cesium.Cartesian3.add(left, right, result)                                    | 计算两个笛卡尔的分量和                                   |
| Cesium.Cartesian3.angleBetween(left, right)                                   | 计算角度(弧度制)                                         |
| Cesium.Cartesian3.cross(left, right, result)                                  | 计算叉积                                                 |
| Cesium.Cartesian3.distance(left, right)                                       | 计算两点距离                                             |
| Cesium.Cartesian3.distanceSquared(left, right)                                | 计算两点平方距离                                         |
| Cesium.Cartesian3.divideByScalar(cartesian, scalar, result)                   | 计算标量除法                                             |
| Cesium.Cartesian3.divideComponents(left, right, result)                       | 计算两点除法                                             |
| Cesium.Cartesian3.dot(left, right)                                            | 计算点乘                                                 |
| Cesium.Cartesian3.equals(left, right)                                         | 比较两点是否相等                                         |
| Cesium.Cartesian3.fromArray(array, startingIndex, result)                     | 从数组中提取 3 个数构建笛卡尔坐标                        |
| Cesium.Cartesian3.fromDegrees(longitude, latitude, height, ellipsoid, result) | 将将纬度转换为笛卡尔坐标(单位是度 °)                     |
| Cesium.Cartesian3.fromDegreesArray(coordinates, ellipsoid, result)            | 返回给定经度和纬度值数组（以度为单位）的笛卡尔位置数组。 |
| Cesium.Cartesian3.fromDegreesArrayHeights(coordinates, ellipsoid, result)     | 返回给定经度,纬度和高度的笛卡尔位置数组                  |
| Cesium.Cartesian3.fromElements(x, y, z, result)                               | 创建一个新的笛卡尔坐标                                   |
| Cesium.Cartesian3.fromRadians(longitude, latitude, height, ellipsoid, result) | 返回笛卡尔坐标以弧度制的经纬度                           |
| Cesium.Cartesian3.fromRadiansArray(coordinates, ellipsoid, result)            | 返回笛卡尔坐标以弧度制的经纬度数组                       |
| Cesium.Cartesian3.fromRadiansArrayHeights(coordinates, ellipsoid, result)     | 返回笛卡尔坐标以弧度制的经纬度高度数组                   |
| Cesium.Cartesian3.fromSpherical(spherical, result)                            | 将提供的球面转换为笛卡尔系                               |
| Cesium.Cartesian3.lerp(start, end, t, result)                                 | 使用提供的笛卡尔数来计算 t 处的线性插值或外推。          |
| Cesium.Cartesian3.magnitude(cartesian)                                        | 计算笛卡尔长度                                           |
| Cesium.Cartesian3.magnitudeSquared(cartesian)                                 | 计算提供的笛卡尔平方量级                                 |
| Cesium.Cartesian3.maximumByComponent(first, second, result)                   | 比较两个笛卡尔并计算包含所提供笛卡尔最大成分的笛卡尔。   |
| Cesium.Cartesian3.maximumComponent(cartesian)                                 | 计算所提供笛卡尔坐标系的最大分量的值                     |
| Cesium.Cartesian3.midpoint(left, right, result)                               | 计算右笛卡尔和左笛卡尔之间的中点                         |
| Cesium.Cartesian3.minimumByComponent(first, second, result)                   | 比较两个笛卡尔并计算包含所提供笛卡尔的最小分量的笛卡尔   |
| Cesium.Cartesian3.minimumComponent(cartesian)                                 | 计算所提供笛卡尔坐标系的最小分量的值                     |
| Cesium.Cartesian3.mostOrthogonalAxis(cartesian, result)                       | 返回与提供的笛卡尔坐标最正交的轴                         |
| Cesium.Cartesian3.multiplyByScalar(cartesian, scalar, result)                 | 将提供的笛卡尔分量乘以提供的标量                         |
| Cesium.Cartesian3.multiplyComponents(left, right, result)                     | 计算两个笛卡尔的分量积                                   |
| Cesium.Cartesian3.normalize(cartesian, result)                                | 计算所提供笛卡尔的规范化形式                             |
| Cesium.Cartesian3.pack(value, array, startingIndex)                           | 将提供的实例存储到提供的数组中                           |
| Cesium.Cartesian3.projectVector(a, b, result)                                 | 将向量 a 投影到向量 b 上                                 |
| Cesium.Cartesian3.subtract(left, right, result)                               | 计算两个笛卡尔分量差                                     |
| Cesium.Cartesian3.unpack(array, startingIndex, result)                        | 从压缩的数组中检索实例                                   |
| Cesium.Cartesian3.unpackArray(array, result)                                  | 将笛卡尔分量数组解包为笛卡尔数组                         |
