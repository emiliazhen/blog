---
title: Git
date: 2019-09-16
sidebar: false
breadcrumb: false
icon: git
---

## 初始化 Git 仓储

在项目中右键`git bash`输入`git init`

## 配置

```powershell
git config --global user.name "xxx"
git config --global user.email "xxx@xxx.com"
git config --global --unset user.name 删除
```

## 代理

```powershell
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy http://127.0.0.1:1080

git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 把代码存储到`.git`仓储中

1. 把文件放在工作区 暂存区

```powershell
git add ./x.xx  # 把文件放到仓库门口
git add * ;  git add ./  # 所有放到仓库门口
```

2. 把仓库门口的放到房间里去 版本库

```powershell
git commit -m "说明"  说明本次上传的内容
```

一次性把修改的内容放到房间里去

```powershell
git commit --all -m "说明"
```

## 查看当前状态，有没有被放到仓储中去

```powershell
git status
```

## 忽略文件

忽略文件不会被提交到仓储中去
`.gitignore` 创建`.gitignore`编辑该文件

```
/.idea
/.gitgnore 一行写一个路径
/js  忽略js目录里的所有文件
/js/*.js  忽略js目录里的所有js文件
```

## 查看日志

```powershell
git log # 查看历史提交的日志
git log --oneline # 查看简洁日志
git log -3 # 查看最近3条
git reflog # 查看所有分支的所有操作记录带索引
```

## 回退到指定的版本

```powershell
git reset --hard Head~0    # --hard覆盖 Head~0指向索引为0的版本
git reset --hard ce2ed3
```

## 本地仓库强强制覆盖远端

```powershell
git config --local --list # 查看本地仓库配置
git remote remove origin # 如果有本地与远程关联，保留(多仓库关联)/不保留，看实际需要; 此处我选择不保留，即单仓库关联
git remote add origin XXX.git # 添加本地仓库与远程仓库关联
git add .
git commit -m "覆盖远程仓库"
# 强制推送到远程仓库，且覆盖远程代码库
git push -f --set-upstream origin master:master
```

## 分支

默认主分支`master`

```powershell
git branch dev # 创建一个dev分支，在刚创建时dev分支里的东西和master里的一样
git checkout dev # 切换到指定的分支dev
git checkout -b dev origin/dev # 切换到远端dev分支 如果没有则新建
git branch -a # 查看所有分支
git branch -r # 查看远端分支
git branch # 查看当前分支
git branch -d dev # 删除分支dev
git merge dev # 合并分支内容，把当前分支与指定的分支dev合并
```

合并时如果有冲突需要手动去处理，处理后还需要再提交一次

```powershell
λ git branch -r
  origin/HEAD -> origin/master
  origin/beatles_dev
  origin/test
λ git fetch origin beatles_test
λ git checkout -b beatles_test origin/beatles_test
λ git pull origin beatles_test
λ git push origin beatles_test
```

```powershell
git push origin --delete xxx # 删除远端xx分支
```

## 传到`GitHub`

```powershell
git push https://..  master  # 把当前分支的内容上传到远程的master分支上
git pull https://.. master # 会把远程分支数据得到，本地需要初始化
git clone https://..  # 会得到远程仓储相同的数据，如果多次执行会覆盖本地内容
```

## `svn`

```powershell
svn checkout ==> git clone
svn commit ==> git push
svn update ==>git pull
```

## `SSH`

右键`Git Bash Here`
生成`ssh`密钥(必须先配置) `$ ssh-keygen -t rsa -C "esc100@vip.qq.com"` 连续按 3 次回车
在`C`盘用户名下的`.ssh`文件中打开`id_rsa.pub`，复制里面的内容
在个人用户设置里 SSH 公钥里粘贴该内容

```powershell
$ git clone https://… # 在页面中用SSH复制链接 输入yse
git add ./
```

## 中文乱码解决

```powershell
git config --global core.quotepath false # 显示status编码
git config --global gui.encoding utf-8 # 图形界面编码
git config --global i18n.commit.encoding utf-8 # 提交信息编码
git config --global i18n.logoutencoding utf-8 # 输出log编码
export LESSCHARSET=utf-8 # git-log默认使用less分页，所需要bash对less命令进行utf-8编码
```

`git update-git-for-windows`

## 个人 Commit 使用 Git 约定

| emoji           | code                          | commit                |
| :-------------- | :---------------------------- | :-------------------- |
| 🎉 (庆祝)       | `:tada:`                      | 初次提交              |
| 🚧 (施工)       | `:construction:`              | 工作进行中            |
| 👷 (工人)       | `:construction_worker:`       | 添加 CI 构建系统      |
| 🎨 (调色板)     | `:art:`                       | 改进代码结构/代码格式 |
| 💄 (口红)       | `:lipstick:`                  | 更新 UI 和样式文件    |
| ⚡️ (闪电)      | `:zap:`                       | 提升性能              |
| 🔥 (火焰)       | `:fire:`                      | 移除代码或文件        |
| ✨ (火花)       | `:sparkles:`                  | 引入新功能            |
| ✅ (白色复选框) | `:white_check_mark:`          | 增加测试              |
| 📈 (上升趋势图) | `:chart_with_upwards_trend:`  | 添加分析或跟踪代码    |
| 🐛 (bug)        | `:bug:`                       | 修复 bug              |
| 🚑 (急救车)     | `:ambulance:`                 | 重要补丁              |
| 📝 (铅笔)       | `:pencil:`                    | 撰写文档              |
| ✏️ (铅笔)       | `:pencil2:`                   | 修复 typo             |
| 🔒 (锁)         | `:lock:`                      | 修复安全问题          |
| 🍎 (苹果)       | `:apple:`                     | 修复 macOS 下的问题   |
| 🐧 (企鹅)       | `:penguin:`                   | 修复 Linux 下的问题   |
| 🏁 (旗帜)       | `:checked_flag:`              | 修复 Windows 下的问题 |
| 🚨 (警车灯)     | `:rotating_light:`            | 移除 linter 警告      |
| 💚 (绿心)       | `:green_heart:`               | 修复 CI 构建问题      |
| 🔨 (锤子)       | `:hammer:`                    | 重大重构              |
| ⬇️ (下降箭头)   | `:arrow_down:`                | 降级依赖              |
| ⬆️ (上升箭头)   | `:arrow_up:`                  | 升级依赖              |
| ➖ (减号)       | `:heavy_minus_sign:`          | 减少一个依赖          |
| ➕ (加号)       | `:heavy_plus_sign:`           | 增加一个依赖          |
| 🔧 (扳手)       | `:wrench:`                    | 修改配置文件          |
| 📦 (包)         | `:package:`                   | 包修改 Package.json   |
| 🌐 (地球)       | `:globe_with_meridians:`      | 国际化与本地化        |
| 👽 (外星人)     | `:alien:`                     | 翻译                  |
| 🔀 (交叉)       | `:twisted_rightwards_arrows:` | 合并分支              |
| ⏪ (回退)       | `:rewind:`                    | 还原更改              |
| 🔖 (书签)       | `:bookmark:`                  | 发行/版本标签         |
| 🚀 (火箭)       | `:rocket:`                    | 部署功能              |
| 🐳 (鲸鱼)       | `:whale:`                     | Docker 相关工作       |
