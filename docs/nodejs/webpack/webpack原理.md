---
title: webpack原理
date: 2019-11-18
category:
  - nodejs
  - webpack
icon: webpack
---

## 打包 bundle 文件

内部就是实现了一个`__webpack_require__`函数，递归导入依赖关系

1. 新建项目，新建 bin 目录

```powershell
#!/usr/bin/env node
const path = require('path')
const config = require(path.resolve('webpack.config.js'))
const Compiler = require('../lib/compiler')
new Compiler(config).start()
```

2. `package.json`中配置 bin 脚本

```json
"bin": {
    "m-pack": "./bin/m-pack.js"
  },
```

3. 通过`npm link`链接到全局包中，供本地测试使用
4. lib 中新建`complier.js`

```js
const path = require('path')
const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
const ejs = require('ejs')
class Compiler {
  constructor(config) {
    this.config = config
    this.entry = config.entry
    this.root = process.cwd()
    this.modules = {}
  }
  getSource(path) {
    return fs.readFileSync(path, 'utf-8')
  }
  depAnalyse(modulePath) {
    let source = this.getSource(modulePath)
    let dependencies = []
    let ast = parser.parse(source)
    traverse(ast, {
      CallExpression(p) {
        if (p.node.callee.name === 'require') {
          p.node.callee.name = '__webpack_require__'
          p.node.arguments[0].value = ('./' + path.join('src', p.node.arguments[0].value)).replace(/\\+/g, '/')
          dependencies.push(p.node.arguments[0].value)
        }
      },
    })
    let sourceCode = generator(ast).code
    this.modules['./' + path.relative(this.root, modulePath).replace(/\\+/g, '/')] = sourceCode
    dependencies.forEach((dep) => this.depAnalyse(path.resolve(this.root, dep)))
  }
  emitFile() {
    let template = this.getSource(path.join(__dirname, '../template/output.ejs'))
    let result = ejs.render(template, {
      entry: this.entry,
      modules: this.modules,
    })
    let outputPath = path.join(this.config.output.path, this.config.output.filename)
    fs.writeFileSync(outputPath, result)
  }
  start() {
    this.depAnalyse(path.resolve(this.root, this.entry))
    this.emitFile()
  }
}
module.exports = Compiler
```
