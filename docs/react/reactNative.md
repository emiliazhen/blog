---
title: react
date: 2017-09-12
category: react
order: 2
icon: react
---

## nox 模拟器

环境变量`path`
将`android-SDK`中的`adb.exe`复制到`nox/bin`中并改名`nox_adb.exe`

```powershell
nox_adb contnect XX
```

```powershell
react-native init dddd  初始化一个名为dddd的项目
react-native run-android打包当前项目并安装到安卓设备上
ReactNativeWebpack窗口，实时编译，如果关掉了则不能再编译了则需要react-native start
```

app.js

## RN 基本组件

- View
- Text
- TextInput
- Image
- Button
- ActivityIndicator
- ScrollView
- ListView

`react-native-tab-navigator`,需要安装`Android SDK Build-tools 26.0.1`
`react-native-vector-icons`
`react-native-swiper` 在轮播图的`swiper`组件外面需要套一层`View`，并给这个`View`手动设置一个高度

## gulp

`gulp`的任务是控制执行流程，`webpack`的任务是处理复杂引用的依赖

```js
var gulp = require('gulp')
// 删除文件和目录
var del = require('del')
// 按顺序执行
var gulpSequence = require('gulp-sequence')
// 引入webpack的本地模块
var webpack = require('webpack')
// 引入wbpack的配置文件
var webpackConfig = require('./webpack.publish.config.js')
gulp.task('default', ['sequence'], function () {
  console.log('项目构建成功')
})
// 流程控制
gulp.task('sequence', gulpSequence('clean', 'webpack'))
// 删除文件和文件夹
gulp.task('clean', function (cb) {
  //del('dist);// 如果直接给dist的目录，项目启动的顺序还有清除结果会报错，所以要写的更详细一些
  del(['dist/*.js', 'dist/*.css', 'dist/images', 'dist/fonts,', 'dist/*.html']).then(function () {
    cb()
  })
})
//写一个任务，在gulp中执行webpack的构建
// gulp 负责任务流程部分的操作，webpack负责复杂模块系统的引用分离工作
gulp.task('webpack', function (cb) {
  // 执行webpack的构建任务
  webpack(webpackConfig, function (err, stats) {
    if (err) {
      console.log('构建任务失败')
    } else {
      cb()
    }
  })
})
```

## 路由

```powershell
npm i react-native-router-flux -S
```

```jsx
import {Router,Stack,Scene} from 'react-native-router-flux';
// ……
render(){
   return <Router sceneStyle={{ backgroundColor: 'white' }}>
          <Stack key="root">
          <Scene key="app" component={App} title="" hideNavBar={true} />
          <Scene key="movieList" component={MovieList} title="热映电影列表" />
          <Scene key="movieDetail" component={MovieDetail} title="电影详情" />
       </Stack>
</Router>}
```

### 跳转

```jsx
<TouchableHighlight onPress={() => Actions.movieDetail({ id: item.id })}></TouchableHighlight>
```

### flatList

```jsx
<FlatList
  data={this.state.movies}
  keyExtractor={(item, i) => i + ''}
  ItemSeparatorComponent={this.renderListLine}
  renderItem={({ item }) => this.renderItem(item)}
  onEndReachedThreshold={0.5}
  onEndReached={this.loadNextPage}
/>
```

## 调用摄像头

1. 安装

```powershell
npm i react-native-image-picker@latest -S
```

2. 运行`react-native link` 自动注册相关的组件到原生配置中
3. 打开项目中的`android/app/src/main/AndroidManifest.xml`文件，在第 8 行添加

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

4. 打开项目中`android/app/src/main/java/com/当前项目文件夹/MainActivity.java`

```java
package com.native_camera;
import com.facebook.react.ReactActivity;
// 1. 添加以下两行：
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener; // <- add this import

public class MainActivity extends ReactActivity {
    // 2. 添加如下一行：
    private PermissionListener listener; // <- add this attribute

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "native_camera";
    }
}
```

5. 在项目中添加

```js
// 第1步：
import {View, Button, Image} from 'react-native'
import ImagePicker from 'react-native-image-picker'
var photoOptions = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

// 第2步：
constructor(props) {
super(props);
    this.state = {
      imgURL: ''
    }
  }

// 第3步：
<Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200 }}></Image>
<Button title="拍照" onPress={this.cameraAction}></Button>

// 第4步：
cameraAction = () => {
ImagePicker.showImagePicker(photoOptions, (response) => {
  console.log('response' + response);
  if (response.didCancel) {
    return
  }
  this.setState({
    imgURL: response.uri
  });
})
  }
```

6.退出之前调试`app`，并重新运行`react-native run-android`进行打包部署

## 签名打包

1. 先正确配置`RN`环境
2. 在`cmd`中运行

```powershell
keytool -genkey -v -keystore my-release-key2.keystore -alias my-key-alias2 -keyalg RSA -keysize 2048 -validity 10000
```

`my-release-key.keystore`表示一会儿要生成的那个签名文件的名称
`-alias` 后面需要的东西
当运行这个命令后需要输入一系列参数，需要记下自己设置的口令密码 3. 当生成了签名之后，这个签名默认保存到了`C:/user/xxx/my-release-key2.keystore` 4. 将你的签名证书`copy`到`android/app`目录下 5. 编辑`android/gradle.properties`文件，在最后添加

```
MYAPP_RELEASE_STORE_FILE=your keystore filename
MYAPP_RELEASE_KEY_ALIAS=your keystore alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

6. 编辑`android/app/build.gradle`文件添加

```java
...
android {
    ...
    defaultConfig { ... }
    + signingConfigs {
    +    release {
    +        storeFile file(MYAPP_RELEASE_STORE_FILE)
    +        storePassword MYAPP_RELEASE_STORE_PASSWORD
    +        keyAlias MYAPP_RELEASE_KEY_ALIAS
    +        keyPassword MYAPP_RELEASE_KEY_PASSWORD
    +    }
    +}
    buildTypes {
        release {
            ...
    +        signingConfig signingConfigs.release
        }
    }
}
...
```

7. 进入项目根目录下`android`文件夹，在当前目录打开终端，输入`./gradlew assembleRelease`开始发布`APK`的`Release`版
8. 当发型完毕后，进入自己项目的`android/app/build/outputs/apk`目录中，找到`app-release.apk`这就是我们发布完毕之后的完整安装包，就可以上传到各大应用商店供用户使用
