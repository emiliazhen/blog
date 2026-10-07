---
title: 开发环境
date: 2023-07-04
sidebar: false
breadcrumb: false
icon: config
---

## 永久关闭 Win10Defender

CMD 中复制：

```powershell
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /d 1 /t REG_DWORD /f
```

关闭后若想再开启：
`Win`键+`R`，运行 `regedit` 打开注册表编辑器，定位到 `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender` 这儿，删掉 `DisableAntiSpyware`这个键值即可。

## My VSCode config

### 插件

| 插件                                 | 作用                                                    | 备注                                                |
| :----------------------------------- | :------------------------------------------------------ | :-------------------------------------------------- |
| One Dark Pro                         | 主题                                                    | -                                                   |
| Auto Close Tag                       | 自动闭合标签                                            | 不用再安装了                                        |
| Auto Complete Tag                    | 自动完成标签                                            | -                                                   |
| Auto Rename Tag                      | 自动更改标签                                            | 不用再安装了 勾选 Linked Editing                    |
| Beautify                             | 在 js/JSON/css/sass/html 格式化                         | 不用再安装了                                        |
| Better Comments                      | 更加人性化的注释                                        | -                                                   |
| Bracket Pair Colorizer               | 括号对颜色区分                                          | 不用再安装了 勾选 bracket Pair Colorization:Enabled |
| Can I use                            | 浏览器兼容性检查                                        | -                                                   |
| Code Spell Checker                   | 单词拼写检查                                            | -                                                   |
| CSS Peek                             | 悬停显示该标签的 CSS 样式属性                           | 失效                                                |
| EditorConfig for VS Code             | 用.editorconfig 文件中的设置覆盖用户工作区设置          | -                                                   |
| ESLint                               | 在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具 | -                                                   |
| Easy less                            | 解析 less 文件                                          | -                                                   |
| filesize                             | 显示文件的详细信息                                      | -                                                   |
| File Peek                            | 根据路劲字符串快速定位到文件                            | -                                                   |
| Guides                               | 高亮缩进基准线                                          | 不用再安装了 选 true/active : Guides:bracket Pairs  |
| Git Blame                            | 在状态栏显示当行的 Git 信息                             | -                                                   |
| HTML CSS Support                     | CSS 提示                                                | -                                                   |
| HTML Snippets                        | HTML 片段                                               | 不再维护                                            |
| jQuery Code Snippets                 | JQ 代码片段                                             | -                                                   |
| Live Server                          | 为静态页面动态页面实时重新加载                          | -                                                   |
| open in browser                      | 在浏览器打开                                            | -                                                   |
| output Colorizer                     | 彩色输出信息                                            | -                                                   |
| Path Autocomplete                    | 路径自动完成                                            | 不用再安装了                                        |
| Path Intellisense                    | 路径自动完成                                            | -                                                   |
| Preview on Web Server                | 在服务器上预览                                          | -                                                   |
| Sublime Text Keymap                  | Sublime 快捷键                                          | -                                                   |
| Vetur                                | Vue 工具                                                | -                                                   |
| JavaScript (ES6) code snippets       | ES6 代码段                                              | -                                                   |
| Prettier - Code formater             | 代码格式化                                              | -                                                   |
| Flutter                              | flutter 环境                                            | -                                                   |
| Awesome Flutter Snippets             | 快速生成常用的 Flutter 代码片段                         | -                                                   |
| Markdown Preview Enhanced            | markdown 实时预览和生成其他格式                         | -                                                   |
| Shader languages support for VS Code | glsl 文件语法高亮                                       | -                                                   |
| Material Icon Theme                  | 文件图标风格                                            | -                                                   |

setting.json

```json
{
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme",
  "files.autoSave": "off",
  "files.autoGuessEncoding": true,
  "emmet.includeLanguages": {
    // jsx的提示
    "javascript": "javascriptreact",
    "vue-html": "html",
    "vue": "html",
    "wxml": "html"
  },
  "vetur.experimental.templateInterpolationService": false,
  "editor.tabSize": 2,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.fontSize": 14,
  "editor.fontLigatures": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.accessibilitySupport": "off",
  "editor.linkedEditing": true,
  "editor.guides.bracketPairs": "active",
  "editor.fontFamily": "JetBrainsMono Nerd Font",
  "editor.tokenColorCustomizations": {
    "comments": {
      // "fontStyle": "bold",
      "foreground": "#638d76"
    }
  },
  "prettier.printWidth": 180,
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.bracketSameLine": true,
  "prettier.arrowParens": "always",
  "prettier.requirePragma": false,
  "prettier.insertPragma": false,
  "prettier.htmlWhitespaceSensitivity": "ignore",
  "terminal.integrated.fontFamily": "JetBrainsMono Nerd Font",
  "markdown-preview-enhanced.previewTheme": "vue.css",
  "markdown-preview-enhanced.codeBlockTheme": "vue.css",
  "markdown-preview-enhanced.printBackground": true,
  "markdown-preview-enhanced.enableScriptExecution": true,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[dart]": {
    "editor.defaultFormatter": "Dart-Code.dart-code",
    "editor.tabSize": 2,
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "editor.rulers": [500],
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": false,
    "editor.suggestSelection": "first",
    "editor.tabCompletion": "onlySnippets",
    "editor.wordBasedSuggestions": false,
    "editor.wordWrapColumn": 100000
  },
  "scss.format.enable": false,
  "dart.flutterSdkPath": "D:\\flutter",
  "better-comments.tags": [
    {
      "tag": "!",
      "color": "#FF2D00",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "?",
      "color": "#3498DB",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "//",
      "color": "#474747",
      "strikethrough": true,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "todo",
      "color": "#FF8C00",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "*",
      "color": "#98C379",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    }
  ]
}
```

## 虚拟机配置

- 安装`phpStudy.exe`
- 浏览器访问`localhost`测试是否安装完成
- "其他选项菜单"-->`php`扩展及设置-->参数值设置-->`date.timezone`-->`PRC`
- "其他选项菜单" --> "打开配置文件"-->"`httpd.conf`" --> `470`行"`vhosts.conf`"删除`#`号注释
- "其他选项菜单" --> "站点域名管理" -->更改域名和对应的目录 -->"添加" -->"保存设置并生成配置文件"
- "其他选项菜单" --> "打开 hosts 文件" --> `127.0.0.1  www.   .com`
- "其他选项菜单" --> "打开配置文件" --> "`vhosts.conf`" -->插入一下内容

```
Options indexes FollowSymLinks ExecCGI
DirectoryIndex index.html index.php
```

## 安装 LESS

安装`Node`

1. 打开`cmd`
2. 输入`node -v` 检查是否安装`node.js`
3. 输入`nmp -v` 检查`nmp`是否安装
4. 输入`npm install less -g` 在线全局安装
5. 输入`lessc -v` 检查`less`是否安装
   安装的目录在`c:\users\Think\AppData\Roaming\npm\lessc`
6. 使用

- 新建后缀名为`.less`的文件，在`VSCode`或`WS`中打开，`VsCode`需扩展`Easy less`
- 命令行方法
  - 输入 `cd  "less.less的路径"`
  - 输入`dir /W  win10`输入 `dir ../src`
  - 输入 `lessc less.less less.css`

## 安装 Cmder

安装`Node`

1. 把`Cmder`加到环境变量
2. `win+r`输入`cmder`运行
3. 输入`Cmder.exe /REGISTER ALL`
4. 右键`cmder here`
5. 防中文乱码，在设置中`Startup`->`Environment`中加入一行`chcp utf8`

## Win7 右键增加打开 powershell 选项

1. 打开`regedit`
2. 在`{HKEY_CLASSES_ROOT\Directory\Background\shell\cmd\command}`
3. 在`cmd`同级新建`powershell`，然后在`powershell`下建立`command`子文件夹
4. 在该`command`的`REG_SZ`的值输入

```powershell
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -NoExit Set-Location "%V"
```

5. 如果不小心误操作删除了`cmd`的键值，那么可以用下面的键值恢复，`cmd`的`REG_SZ`键值为

```powershell
cmd.exe /s /k pushd "%V"
```

6. 关闭注册表，`shift`+右键出现的菜单中可以看到`powershell`，在属性中更改颜色比例`R1 G36 L86`

## Sublime Text3 主题设置

1. 首选项`Package Control`，`Upgrade All`
2. `install theme lanzhou; theme agila;MarkdownEditing`
3. 首选项-插件设置-`MarkdownEditing` - `default`

```json
{
  "color_scheme": "Packages/Boxy Theme/schemes/Boxy Monokai.tmTheme", // 修改风格的主题,我这里是sublime的boxy主题自带的,默认有这几种主题
  // "color_scheme": "Packages/MarkdownEditing/MarkdownEditor.tmTheme",
  // "color_scheme": "Packages/MarkdownEditing/MarkdownEditor-Dark.tmTheme",
  // "color_scheme": "Packages/MarkdownEditing/MarkdownEditor-Yellow.tmTheme",
  "highlight_line": true, // 高亮正在编辑的行
  "line_numbers": true, // 显示行号
  "tab_size": 4, // tab宽度
  "translate_tabs_to_spaces": true, // tab转换为空格
  "trim_trailing_white_space_on_save": true, // 保存时去掉行尾空格
  "word_wrap": true, // 自动换行
  "wrap_width": "auto", // 换行的宽度,默认80会造成左侧大量留白
  "mde.keep_centered": true
}
```

## windows.Terminal

1. 管理员身份下 `set-ExecutionPolicy RemoteSigned`
2. 安装`JetBrains Mono-regular`字体
3. 配置里选择以`json`编辑

```json
{
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
    "copyOnSelect": false,
    "copyFormatting": false,
    "profiles":
    {
        "defaults":
        {
            // Put settings here that you want to apply to all profiles.
            "startingDirectory": ".",
            "font": {
              "face": "JetBrainsMono Nerd Font Mono",// "Cascadia Code"
              "size": 12
            },
            "useAcrylic": true,
            "opacity": 90,
            "colorScheme": "OneDark",
            "backgroundImageOpacity": 0.3,
            "backgroundImageStretchMode": "fill"
        },
    },
    "schemes": [{
        "name": "OneDark",
        "black": "#1e2127",
        "red": "#e06c75",
        "green": "#98c379",
        "yellow": "#d19a66",
        "blue": "#61afef",
        "purple": "#c678dd",
        "cyan": "#56b6c2",
        "white": "#abb2bf",
        "brightBlack": "#5c6370",
        "brightRed": "#e06c75",
        "brightGreen": "#98c379",
        "brightYellow": "#d19a66",
        "brightBlue": "#61afef",
        "brightPurple": "#c678dd",
        "brightCyan": "#56b6c2",
        "brightWhite": "#ffffff",
        "background": "#1e2127",
        "foreground": "#abb2bf"
    }],

        "list": [
      {
        // 键标记
        "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
        "name": "PowerShell Core 7",
        // 行为
        "closeOnExit": true,
        "commandline": "D:\\PowerShell\\7\\pwsh.exe -nologo",
        "hidden": false,
        "historySize": 9001,
        "snapOnInput": true,
        "startingDirectory": ".",
        // 外观
        "cursorColor": "#FFFFFF",
        "cursorShape": "bar",
        "padding": "5, 5, 20, 25",
        "useAcrylic": false
      },
            ….
    ]

    "actions":
    [
        // Copy and paste are bound to Ctrl+Shift+C and Ctrl+Shift+V in your defaults.json.
        // These two lines additionally bind them to Ctrl+C and Ctrl+V.
        // To learn more about selection, visit https://aka.ms/terminal-selection
        { "command": {"action": "copy", "singleLine": false }, "keys": "ctrl+c" },
        { "command": "paste", "keys": "ctrl+v" },
        // Press Ctrl+Shift+F to open the search box
        { "command": "find", "keys": "ctrl+shift+f" },
        // Press Alt+Shift+D to open a new pane.
        // - "split": "auto" makes this pane open in the direction that provides the most surface area.
        // - "splitMode": "duplicate" makes the new pane use the focused pane's profile.
        // To learn more about panes, visit https://aka.ms/terminal-panes
        { "command": { "action": "splitPane", "split": "auto", "splitMode": "duplicate" }, "keys": "alt+shift+d" },
        // Creat new pane
        { "command": { "action": "splitPane", "split": "vertical"}, "keys": "ctrl+shift+plus"},
        { "command": { "action": "splitPane", "split": "horizontal"}, "keys": "ctrl+shift+-" },
        { "command": { "action": "splitPane", "split": "auto" }, "keys": "ctrl+shift+|" },
        { "command": "closeTab", "keys": "ctrl+w" }
    ]
}
```

4. 安装样式插件`on-my-posh`

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://ohmyposh.dev/install.ps1'))
```

5. 启动编辑`powerShell`配置文件引擎

```powershell
notepad $Profile
# 若是找不到 `$Profile，执行以下指令来新增
New-Item -Path $PROFILE -Type File -Force
```

6. 使用主题
   查看[主题](https://ohmyposh.dev/docs/themes)

```powershell
oh-my-posh init pwsh | Invoke-Expression
## 使用主题
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\xxxx主题名xxxx.omp.json" | Invoke-Expression
```

7. 添加右键菜单 新建`xx.reg`文件

```powershell
Windows Registry Editor Version 5.00
[HKEY_CLASSES_ROOT\Directory\Background\shell\wt]
@="Windows Terminal Here"
"Icon"="wt_32.ico 的路径，要使用 \\ 做路径分隔"
[HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command]
@="C:\\Users\\你的用户名\\AppData\\Local\\Microsoft\\WindowsApps\\wt.exe"
```
