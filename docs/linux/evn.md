---
title: env
date: 2018-09-28
category: linux
order: 3
icon: linux
---

## 手动分步安装

1. 启动 WSL 和虚拟机

```sh
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

2. 重启计算机
3. 下载并安装 WSL2 Linux 内核更新包
4. 设置 WSL2 为默认版本

```sh
wsl --set-default-version 2
```

5. 离线安装

```sh
wsl --import Ubuntu D:\WSL\Ubuntu D:\Ubuntu.tar --version 2
```

## 启动

```sh
wsl -d Ubuntu
```

## 创建账户

```sh
adduser zhen
usermod -aG sudo zhen
```

设置默认用户

```sh
# switch user
su zhen
nano /etc/wsl.conf
# 修改完毕保存并退出
wsl --shutdown
```

## 筛选

```sh
echo 'error: file not found' > 1.txt
echo 'error: auth not allowed' >> 1.txt
cat 1.txt

grep 'error' 1.txt

grep -n 'error' 1.txt
```

## 统计

```sh
# word count  -l行数 -c字节数 -w单词数 -m字符数
wc 2.txt
wc -lcw 2.txt
```

## 反引号

```sh
echo 'pwd'
# pwd
echo `pwd`
# /home/xx
```

## tail

```sh
# 默认输出后十行
tail 3.txt
# 输出后3行
tail -3 3.txt
# 持续追踪后3行
tail -f3 3.txt
```

## VI命令

visual interface, m是高亮模式

```sh
vim 1.txt
# 输入i开始插入   u撤销 ctrl+R反撤销
# 按ESC退出输入模式
# 输入:底线命令模式 write quit 写入退出:wq

# 修改ip地址
vim /etc/sysconfig/network-scripts/ifcfg-ens33
```

## 网络

```sh
ifconfig

ping -c 3 www.baidu.com
# 根据URL联网下载资源
wget https://xxx.com/xxx.jpeg
# 模拟浏览器发起请求
curl https://xxx.com/

# 查看网络端口信息  all network port
netstat -anp
netstat -anp | grep 3306
netstat -anp | grep mysql
```

## 进程

```sh
# 查看进程信息
ps -ef
ps -ef | grep ssh

kill -9 [pid]
```

## 上传和下载

```sh
sz
```

## 压缩和解压

```sh
# 压缩 z:gzip协议 c:创建 V:显示过程 f:文件
tar -zcvf xxx.tar.gz  1.txt 2.txt 3.txt

tar -xvf xxx.tar
tar -zxvf xxx.tar.gz -c /xx/xx/
```
