---
title: zepto
date: 2015-06-08
category: webApp
order: 2
icon: mobile
---

## zepto 实现轮播图

```js
/*使用zepto实现轮播图*/
$(function () {
  /*1.添加首尾两张图片*/
  /*2.重新设置图片盒子和宽度和图片的宽度*/
  /*3.开启定时器，实现自动轮播*/
  /*4.添加移动端的滑动事件，实现手动轮播*/
  /*5.添加过渡效果结束之后的监听*/
  /*获取轮播图元素*/
  var banner = $('.jd_banner')
  var bannerWidth = banner.width()
  console.log(bannerWidth)
  /*获取图片盒子*/
  var imgBox = banner.find('ul:first-of-type')
  /*获取点标记*/
  var indicators = banner.find('ul:eq(1)').find('li')
  /*获取首尾两张图片*/
  var first = imgBox.find('li:first-of-type')
  var last = imgBox.find('li:last-of-type')
  /*将两张图片添加到首尾位置 first.clone():将first复制一份*/
  imgBox.append(first.clone())
  last.clone().insertBefore(first)
  /*设置图片盒子的宽度*/
  var lis = imgBox.find('li')
  var count = lis.length
  imgBox.width(count * bannerWidth)
  /*设置li标签的宽度*/
  lis.each(function (index, value) {
    $(lis[index]).width(bannerWidth)
  })
  /*设置默认偏移*/
  imgBox.css('left', -bannerWidth)
  /*定义图片索引*/
  var index = 1
  /*图片轮播的动画效果*/
  var imgAnimation = function () {
    imgBox.animate({ left: -index * bannerWidth }, 200, 'ease-in-out', function () {
      //动画执行完毕之后的回调
      /*判断当前索引位置是否是最后一张或者第一张*/
      if (index == count - 1) {
        //最后张
        index = 1
        /*让它瞬间偏移到索引1的位置--非过渡*/
        imgBox.css('left', -index * bannerWidth)
      } else if (index == 0) {
        index = count - 2
        imgBox.css('left', -index * bannerWidth)
      }
      /*设置点标记*/
      indicators
        .removeClass('active')
        .eq(index - 1)
        .addClass('active')
    })
  }
  /*开启定时器*/
  var timerId = setInterval(function () {
    index++
    /*开启过渡*/
    /*设置定位*/
    /*在zepto中直接使用animate函数来实现
     * 1.需要添加动画效果的样式--对象
     * 2.动画的耗时
     * 3.动画的速度函数 animation-timing-function
     * 4.当前动画执行完毕之后的回调*/
    imgAnimation()
  }, 2000)
  /*添加滑动事件*/
  /*左滑动*/
  /*在谷歌浏览器的模拟器中，无法正确的触发swipe相关事件，但是可以触发tap事件*/
  imgBox.on('swipeLeft', function () {
    clearInterval(timerId)
    index++
    imgAnimation()
  })
  /*右滑动*/
  imgBox.on('swipeRight', function () {
    clearInterval(timerId)
    index--
    imgAnimation()
  })
})
/*使用zepto实现轮播图*/
$(function () {
  /*1.添加首尾两张图片*/
  /*2.重新设置图片盒子和宽度和图片的宽度*/
  /*3.开启定时器，实现自动轮播*/
  /*4.添加移动端的滑动事件，实现手动轮播*/
  /*5.添加过渡效果结束之后的监听*/
  /*获取轮播图元素*/
  var banner = $('.jd_banner')
  var bannerWidth = banner.width()
  console.log(bannerWidth)
  /*获取图片盒子*/
  var imgBox = banner.find('ul:first-of-type')
  /*获取点标记*/
  var indicators = banner.find('ul:eq(1)').find('li')
  /*获取首尾两张图片*/
  var first = imgBox.find('li:first-of-type')
  var last = imgBox.find('li:last-of-type')
  /*将两张图片添加到首尾位置 first.clone():将first复制一份*/
  imgBox.append(first.clone())
  last.clone().insertBefore(first)
  /*设置图片盒子的宽度*/
  var lis = imgBox.find('li')
  var count = lis.length
  imgBox.width(count * bannerWidth)
  /*设置li标签的宽度*/
  lis.each(function (index, value) {
    $(lis[index]).width(bannerWidth)
  })
  /*设置默认偏移*/
  imgBox.css('left', -bannerWidth)
  /*定义图片索引*/
  var index = 1
  /*图片轮播的动画效果*/
  var imgAnimation = function () {
    imgBox.animate({ left: -index * bannerWidth }, 200, 'ease-in-out', function () {
      //动画执行完毕之后的回调
      /*判断当前索引位置是否是最后一张或者第一张*/
      if (index == count - 1) {
        //最后张
        index = 1
        /*让它瞬间偏移到索引1的位置--非过渡*/
        imgBox.css('left', -index * bannerWidth)
      } else if (index == 0) {
        index = count - 2
        imgBox.css('left', -index * bannerWidth)
      }
      /*设置点标记*/
      indicators
        .removeClass('active')
        .eq(index - 1)
        .addClass('active')
    })
  }
  /*开启定时器*/
  var timerId = setInterval(function () {
    index++
    /*开启过渡*/
    /*设置定位*/
    /*在zepto中直接使用animate函数来实现
     * 1.需要添加动画效果的样式--对象
     * 2.动画的耗时
     * 3.动画的速度函数 animation-timing-function
     * 4.当前动画执行完毕之后的回调*/
    imgAnimation()
  }, 2000)
  /*添加滑动事件*/
  /*左滑动*/
  /*在谷歌浏览器的模拟器中，无法正确的触发swipe相关事件，但是可以触发tap事件*/
  imgBox.on('swipeLeft', function () {
    clearInterval(timerId)
    index++
    imgAnimation()
  })
  /*右滑动*/
  imgBox.on('swipeRight', function () {
    clearInterval(timerId)
    index--
    imgAnimation()
  })
})
```

zepto 是集成模块的

- `shif`t 按住 按右键`powerShell`
- 检测 `node -v `
- 输入目录 `cd 加路径` 注意盘符一致
- 检测目录是否正确 `dir /w` 有文件说明成功
- 找到`make`文件 编辑里面找到`target.build` 将需要的 js 添入到其中
- 编辑 `npm run-script dist`
- 在`dist`文件中即为合成后的 Js
