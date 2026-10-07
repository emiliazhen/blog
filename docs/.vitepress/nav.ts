import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: '博客', link: '/', activeMatch: '^/$' },
  { text: '分类', link: '/category/', activeMatch: '^/category/' },
  { text: '个人档案', link: '/portfolio' },
  {
    text: '前端基础',
    activeMatch: '^/(html|css|js|webApi)/',
    items: [
      {
        text: 'HTML',
        items: [
          { text: 'html', link: '/html/html' },
          { text: 'html5', link: '/html/html5' },
          { text: 'easing.js', link: '/html/easing' },
          { text: 'fullpage.js', link: '/html/fullpage' },
        ],
      },
      {
        text: 'CSS',
        items: [
          { text: 'css', link: '/css/css' },
          { text: '排版', link: '/css/排版' },
          { text: '变形', link: '/css/变形' },
          { text: '图标', link: '/css/图标' },
          { text: '动画', link: '/css/动画' },
        ],
      },
      {
        text: 'JS',
        items: [
          { text: 'js', link: '/js/js' },
          { text: '语句', link: '/js/语句' },
          { text: '数组', link: '/js/数组' },
          { text: '函数和作用域', link: '/js/函数和作用域' },
          { text: '对象', link: '/js/对象' },
          { text: '正则表达式', link: '/js/正则表达式' },
          { text: 'es6', link: '/js/es6' },
          { text: 'jquery', link: '/js/jquery' },
          { text: 'ajax', link: '/js/ajax' },
          { text: 'js高级', link: '/js/js高级' },
          { text: 'typescript', link: '/js/typescript/typescript' },
          { text: 'typescript声明文件', link: '/js/typescript/typescript声明文件' },
        ],
      },
      {
        text: 'WebAPI',
        items: [
          { text: 'DOM', link: '/webApi/dom' },
          { text: 'BOM', link: '/webApi/bom' },
        ],
      },
    ],
  },
  {
    text: 'JS库',
    activeMatch: '^/(nodejs|canvas|vue|react)/',
    items: [
      {
        text: 'Node',
        items: [
          { text: 'api', link: '/nodejs/api' },
          { text: 'express', link: '/nodejs/express' },
          { text: 'nest', link: '/nodejs/nest' },
          { text: 'npm', link: '/nodejs/npm' },
          { text: 'webpack', link: '/nodejs/webpack/webpack' },
          { text: 'webpack高级配置', link: '/nodejs/webpack/webpack高级配置' },
          { text: 'webpack优化', link: '/nodejs/webpack/webpack优化' },
          { text: 'webpack原理', link: '/nodejs/webpack/webpack原理' },
          { text: 'jest', link: '/nodejs/jest' },
          { text: 'vite', link: '/nodejs/vite' },
          { text: 'storybook', link: '/nodejs/storybook' },
        ],
      },
      {
        text: 'Canvas',
        items: [
          { text: 'canvas', link: '/canvas/canvas' },
          { text: '绘制api', link: '/canvas/绘制api' },
          { text: 'webGL', link: '/canvas/webGL' },
          { text: 'three.js', link: '/canvas/threejs/threejs' },
          { text: '基本元素场景', link: '/canvas/threejs/基本元素场景' },
          { text: '基本元素几何体', link: '/canvas/threejs/基本元素几何体' },
          { text: '基本元素材质', link: '/canvas/threejs/基本元素材质' },
          { text: '基本元素光照', link: '/canvas/threejs/基本元素光照' },
          { text: '基本元素相机', link: '/canvas/threejs/基本元素相机' },
          { text: 'cesium.js', link: '/canvas/cesium/cesium' },
          { text: '实体', link: '/canvas/cesium/实体' },
          { text: '交互', link: '/canvas/cesium/交互' },
        ],
      },
      {
        text: 'Vue',
        items: [
          { text: '开始', link: '/vue/vue2/开始' },
          { text: '组件', link: '/vue/vue2/组件' },
          { text: '配置', link: '/vue/vue2/配置' },
          { text: '路由', link: '/vue/vue2/路由' },
          { text: '状态管理', link: '/vue/vue2/状态管理' },
          { text: 'vue3', link: '/vue/vue3' },
          { text: 'nuxt', link: '/vue/nuxt' },
        ],
      },
      {
        text: 'React',
        items: [
          { text: '开始', link: '/react/开始' },
          { text: 'reactNative', link: '/react/reactNative' },
          { text: 'react16.8+', link: '/react/react16.8+' },
        ],
      },
    ],
  },
  {
    text: '移动端',
    activeMatch: '^/(webApp|electron|wechat|flutter)/',
    items: [
      {
        text: 'Web 移动端',
        items: [
          { text: 'web移动端', link: '/webApp/web移动端' },
          { text: 'zepto', link: '/webApp/zepto' },
          { text: 'bootstrap', link: '/webApp/bootstrap' },
          { text: 'mui', link: '/webApp/mui' },
          { text: 'h5打包', link: '/webApp/h5打包' },
        ],
      },
      {
        text: 'Electron',
        items: [
          { text: '通信', link: '/electron/通信' },
          { text: '打包', link: '/electron/打包' },
        ],
      },
      {
        text: 'WeChat',
        items: [
          { text: '公众号', link: '/wechat/公众号' },
          { text: '小程序', link: '/wechat/小程序' },
          { text: '云开发', link: '/wechat/云开发' },
        ],
      },
      {
        text: 'Flutter',
        items: [
          { text: '环境', link: '/flutter/环境' },
          { text: 'dart', link: '/flutter/dart' },
          { text: '小部件', link: '/flutter/小部件' },
          { text: '组件', link: '/flutter/组件' },
          { text: '路由', link: '/flutter/路由' },
          { text: '存储', link: '/flutter/存储' },
          { text: '混合开发', link: '/flutter/混合开发' },
          { text: '打包', link: '/flutter/打包' },
        ],
      },
    ],
  },
  {
    text: '服务端',
    activeMatch: '^/(php|java|python|linux)/',
    items: [
      {
        text: 'PHP',
        items: [
          { text: 'php', link: '/php/php' },
          { text: '数据库', link: '/php/数据库' },
          { text: '请求', link: '/php/请求' },
        ],
      },
      {
        text: 'Java',
        items: [
          { text: 'Java', link: '/java/java' },
          { text: '数据类型', link: '/java/数据类型' },
          { text: '流程控制', link: '/java/流程控制' },
          { text: '数组', link: '/java/数组' },
          { text: '方法', link: '/java/方法' },
        ],
      },
      {
        text: 'Python',
        items: [
          { text: '基础', link: '/python/基础' },
          { text: '函数', link: '/python/函数' },
          { text: '迭代器', link: '/python/迭代器' },
          { text: '模块', link: '/python/模块' },
          { text: '文件读写', link: '/python/文件读写' },
          { text: '文件目录操作', link: '/python/文件目录操作' },
          { text: '错误与异常处理', link: '/python/错误与异常处理' },
          { text: '面向对象', link: '/python/面向对象' },
          { text: '命名空间和作用域', link: '/python/命名空间和作用域' },
          { text: '日期与时间', link: '/python/日期与时间' },
          { text: 'FastApi', link: '/python/FastApi' },
          { text: 'SQLAlchemy', link: '/python/SQLAlchemy' },
        ],
      },
      {
        text: 'Linux',
        items: [
          { text: '开始', link: '/linux/开始' },
          { text: 'docker', link: '/linux/docker' },
          { text: 'env', link: '/linux/evn' },
        ],
      },
    ],
  },
  {
    text: '环境',
    activeMatch: '^/(config|consolidate|bugs)',
    items: [
      { text: '开发环境', link: '/config/config' },
      { text: 'markdown', link: '/config/md' },
      { text: 'git', link: '/config/git' },
      { text: '巩固', link: '/consolidate/html' },
      { text: '错题集', link: '/bugs' },
    ],
  },
  {
    text: 'Demo源码',
    items: [
      {
        text: 'Three.js',
        items: [
          { text: 'Three学习', link: 'https://github.com/emiliazhen/three_study' },
          { text: '智慧城市', link: 'https://github.com/emiliazhen/three_smart_city' },
          { text: '智慧园区', link: 'https://github.com/emiliazhen/three_smart_park' },
        ],
      },
      {
        text: 'Flutter',
        items: [
          { text: '即时通讯', link: 'https://github.com/emiliazhen/flutter_chat_with_express_mock' },
          { text: '仿某程', link: 'https://github.com/emiliazhen/flutter_ctrip_app' },
          { text: '酒商城', link: 'https://github.com/emiliazhen/flutter_shop' },
          { text: '雷达图', link: 'https://github.com/emiliazhen/flutter_radar_map' },
        ],
      },
      {
        text: 'Vue',
        items: [{ text: '仿某乎', link: 'https://github.com/emiliazhen/vue3_zheye' }],
      },
    ],
  },
]

export default nav
