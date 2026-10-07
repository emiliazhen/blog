---
title: docker
date: 2018-09-28
category: linux
order: 2
icon: linux
---

## 虚拟机常用命令

`ll` `ls` 查询同目录下的文件
`su root` 切换为 root 用户
`:q!` 退出
`chmod 777 [dirname/filename]` 改变档案权限
`ifconfig `获取 IP 地址 若`ifconfig`返回`Not found (CentOS) https://www.cnblogs.com/dunitian/p/4974761.html`

文档各权限分数：`r:4 x:2 e:1 owner/group/others`

## Docker

`Centos7`上[安装 docker](https://www.cnblogs.com/yufeng218/p/8370670.html)

1. `Docker`要求`CentOS`系统的内核版本高于`3.10`，先验证`CentOS`版本是否支持`Docker`

```powershell
uname -r
```

2. 使用`root`权限登录 `su` ，确保`yun`包更新到最新

```powershell
yum update
```

3. 卸载旧版本(如果安装过旧版本)

```powershell
yum remove docker docker-common docker-selinux docker-engine
```

4. 安装需要的软件包，`yum-util`提供`yum-config-manager`功能，另外两个是`devicemapper`驱动依赖的

```powershell
yum install -y yum-utils device-mapper-persistent-data lvm2
```

5. 设置`yum`源

```powershell
yum yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

6. 可以查看所有仓库中所有`docker`版本，并选择特定版本安装

```powershell
yum list docker-ce --showduplicates | sort -r
```

7. 安装`docker`

```powershell
yum install docker-ce
#由于repo中默认只开启stable仓库，故这里安装的是最新稳定版17.12.0
yum install <FQPN>
# 例如：sudo yum install docker-ce-17.12.0.ce
```

8. 启动并加入开机启动

```powershell
systemctl start docker
systemctl enable docker
```

9. 验证安装是否成功(有 clent 和 service 两步分表示 docker 安装启动都成功了)

```powershell
docker version
```

```
[root@localhost emiliazhen]# docker version
Client:
 Version:           18.06.1-ce
 API version:       1.38
 Go version:        go1.10.3
 Git commit:        e68fc7a
 Built:             Tue Aug 21 17:23:03 2018
 OS/Arch:           linux/amd64
 Experimental:      false

Server:
 Engine:
  Version:          18.06.1-ce
  API version:      1.38 (minimum version 1.12)
  Go version:       go1.10.3
  Git commit:       e68fc7a
  Built:            Tue Aug 21 17:25:29 2018
  OS/Arch:          linux/amd64
  Experimental:     false
[root@localhost emiliazhen]#
```

### 安装 docker 问题

因为之前装过旧版本`docker`在安装时报错如下

```
ansaction check error:
  file /usr/bin/docker from install of docker-ce-17.12.0.ce-1.el7.centos.x86_64 conflicts with file from package docker-common-2:1.12.6-68.gitec8512b.el7.centos.x86_64
  file /usr/bin/docker-containerd from install of docker-ce-17.12.0.ce-1.el7.centos.x86_64 conflicts with file from package docker-common-2:1.12.6-68.gitec8512b.el7.centos.x86_64
  file /usr/bin/docker-containerd-shim from install of docker-ce-17.12.0.ce-1.el7.centos.x86_64 conflicts with file from package docker-common-2:1.12.6-68.gitec8512b.el7.centos.x86_64
  file /usr/bin/dockerd from install of docker-ce-17.12.0.ce-1.el7.centos.x86_64 conflicts with file from package docker-common-2:1.12.6-68.gitec8512b.el7.centos.x86_64
```

1. 卸载旧版本的包

```powershell
yum erase docker-common-2:1.12.6-68.gitec8512b.el7.centos.x86_64
```

2. 再次安装`Docker`

```powershell
yum install docker-ce
```

| 命令                                      | 说明                                                                              |
| :---------------------------------------- | :-------------------------------------------------------------------------------- |
| docker rmi [image id]                     | 删除镜像                                                                          |
| docker rm [container id]                  | 删除一个处于终止状态的容器                                                        |
| docker images                             | 列出镜像                                                                          |
| docker ps                                 | 列出容器                                                                          |
| docker ps -a                              | 列出所有容器                                                                      |
| docker run -d -p 80:80 [imagesname]:[tag] | 运行镜像 -d 后台运行 -p 端口 8080:8099 本地主机的 8080 被映射到了容器的 8099 端口 |
| docker build -t [imagename]:[tag] .       | 制作镜像                                                                          |
| docker start [container id]               | 将一个已经终止的容器启动运行                                                      |
| docker stop [container id]                | 终止容器                                                                          |
| docker restart                            | 将一个运行态的容器终止，然后再重新启动                                            |

## 部署

1. 项目打包生成

```powershell
npm run build
```

2. 在虚拟机上新建一个文件夹，并将打包好的文件放入 `app` 文件夹中`/www`

```
├─ stationUI
└─ storeUI
    └─ dev
        ├─ Dockerfile
        ├─ nginx.conf
        └─ app
            ├─ index.html
            └─ static
```

3. 在`app`文件夹同目录新建`Dockerfile`文件，并编辑

```
FROM nginx
MAINTAINER  MY Name <myname@whruobei.com>
#把当前打包工程的html复制到虚拟地址
ADD ./app /usr/share/nginx/html
#使用自定义nginx.conf配置端口和监听
COPY nginx.conf /etc/nginx/nginx.conf
RUN /bin/bash -c 'echo init ok!!!'
```

4. 在 app 文件夹同目录新建`nginx.conf`文件，并编辑

```
worker_processes auto;
#pid /usr/local/nginx/logs/nginx.pid;
#error_log /usr/local/nginx/logs/error.log crit;
worker_rlimit_nofile 1000000;
events {
worker_connections 65536;
multi_accept on;
use epoll;
}

http {
include mime.types;
default_type application/octet-stream;

sendfile on;
tcp_nopush on;
tcp_nodelay on;
server_tokens off;

keepalive_timeout 10;
client_header_timeout 10;
client_body_timeout 10;
reset_timedout_connection on;
send_timeout 10;

limit_conn_zone $binary_remote_addr zone=addr:5m;
limit_conn addr 100;

gzip on;
gzip_disable "msie6"
gzip_static on;
gzip_proxied any;
gzip_min_length 1000;
gzip_comp_level 4;
gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;

open_file_cache max=100000 inactive=20s;
open_file_cache_valid 30s;
open_file_cache_min_uses 2;
open_file_cache_errors on;

# include /etc/nginx/conf.d/*.conf;
# include /etc/nginx/sites-enabled/*;

server {
listen 80;
# 接口服务的IP地址
server_name localhost;
charset utf-8;
access_log off;
# ElecManageSystem-应用文件夹名称 app-index.html页面所在文件夹
root /usr/share/nginx/html;
location / {
index index.html index.htm;
}

error_page 500 502 503 504 /50x.html;
location = /50x.html {
root html;
}
}
}
```

5. 在虚拟机进入到已新建的文件夹目录，并执行制作镜像命令

```powershell
docker build -t lcbstore:dev .
```

6. 在返回`Successfully`后，先使用`docker images`查看镜像
7. 运行镜像 `docker run -d -p 80:80 lcbstore:dev` 然后就可以在虚拟机`localhost:80`或在桌面浏览器 `主机IP:端口号`访问了

## Docker cloud

将本地的提交到网络提供给其他人`pull`
在 hub.cloud.com 上注册账号并新建存储仓库 `yourID:cloudname`
|命令 | 说明|
| :----- | :------ |
|docker login |登录 docker|
|docker build yourID/cloudname:tag . |打镜像|
|docker tag [image id] yourID/cloudname:tag |将本地镜像标记为对应格式|
|docker push yourID/cloudname:tag |推镜像到仓库|
|docker pull yourID/cloudname:tag |拉取镜像|
若其他用户无法拉取，需要先在`hub.docker上Collaborators`里`add user`

## Nginx

`Nginx`是一个使用 c 语言开发的高性能的`http`服务器、反向代理服务器及电子邮件(`IMAP/POP3`)代理服务器

### 应用场景

- `http`服务器：可以做网页静态服务器
- 虚拟主机：可以实现在一台服务器虚拟出多个网站。不同端口/不同域名
- 反向代理，负载均衡：当网站的访问量达到一定程度后，单台服务器不能满足用户的请求时，需要用多台服务器集群可以使用`nginx`做反向代理。并且多台服务器可以平均分担负载，不会因为某台服务器负载高宕机而某台服务器闲置的情况
