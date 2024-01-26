import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,b as s,d as n,e as t,a as e}from"./app-fd217ae5.js";const p={},d=e('<h2 id="虚拟机常用命令" tabindex="-1"><a class="header-anchor" href="#虚拟机常用命令" aria-hidden="true">#</a> 虚拟机常用命令</h2><p><code>ll</code> <code>ls</code> 查询同目录下的文件 <code>su root</code> 切换为 root 用户 <code>:q!</code> 退出 <code>chmod 777 [dirname/filename]</code> 改变档案权限 <code>ifconfig </code>获取 IP 地址 若<code>ifconfig</code>返回<code>Not found (CentOS) https://www.cnblogs.com/dunitian/p/4974761.html</code></p><p>文档各权限分数：<code>r:4 x:2 e:1 owner/group/others</code></p><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2>',4),r=s("code",null,"Centos7",-1),b={href:"https://www.cnblogs.com/yufeng218/p/8370670.html",target:"_blank",rel:"noopener noreferrer"},v=e(`<ol><li><code>Docker</code>要求<code>CentOS</code>系统的内核版本高于<code>3.10</code>，先验证<code>CentOS</code>版本是否支持<code>Docker</code></li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">uname </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">r</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用<code>root</code>权限登录 <code>su</code> ，确保<code>yun</code>包更新到最新</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">yum update</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>卸载旧版本(如果安装过旧版本)</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">yum remove docker docker</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">common docker</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">selinux docker</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">engine</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>安装需要的软件包，<code>yum-util</code>提供<code>yum-config-manager</code>功能，另外两个是<code>devicemapper</code>驱动依赖的</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">yum install </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">y yum</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">utils device</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">mapper</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">persistent</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">data lvm2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>设置<code>yum</code>源</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">yum yum</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">config</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">manager </span><span style="color:#56B6C2;">--add-repo</span><span style="color:#ABB2BF;"> https:</span><span style="color:#56B6C2;">//download.docker.com/</span><span style="color:#ABB2BF;">linux</span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;">centos</span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;">docker</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">ce.repo</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>可以查看所有仓库中所有<code>docker</code>版本，并选择特定版本安装</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">yum list docker</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">ce </span><span style="color:#56B6C2;">--</span><span style="color:#ABB2BF;">showduplicates | sort </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">r</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>安装<code>docker</code></li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">yum install docker</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">ce</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#由于repo中默认只开启stable仓库，故这里安装的是最新稳定版17.12.0</span></span>
<span class="line"><span style="color:#ABB2BF;">yum install &lt;FQPN&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 例如：sudo yum install docker-ce-17.12.0.ce</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>启动并加入开机启动</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">systemctl start docker</span></span>
<span class="line"><span style="color:#ABB2BF;">systemctl enable docker</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>验证安装是否成功(有 clent 和 service 两步分表示 docker 安装启动都成功了)</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">docker version</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">[root@localhost emiliazhen]# docker version</span></span>
<span class="line"><span style="color:#abb2bf;">Client:</span></span>
<span class="line"><span style="color:#abb2bf;"> Version:           18.06.1-ce</span></span>
<span class="line"><span style="color:#abb2bf;"> API version:       1.38</span></span>
<span class="line"><span style="color:#abb2bf;"> Go version:        go1.10.3</span></span>
<span class="line"><span style="color:#abb2bf;"> Git commit:        e68fc7a</span></span>
<span class="line"><span style="color:#abb2bf;"> Built:             Tue Aug 21 17:23:03 2018</span></span>
<span class="line"><span style="color:#abb2bf;"> OS/Arch:           linux/amd64</span></span>
<span class="line"><span style="color:#abb2bf;"> Experimental:      false</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Server:</span></span>
<span class="line"><span style="color:#abb2bf;"> Engine:</span></span>
<span class="line"><span style="color:#abb2bf;">  Version:          18.06.1-ce</span></span>
<span class="line"><span style="color:#abb2bf;">  API version:      1.38 (minimum version 1.12)</span></span>
<span class="line"><span style="color:#abb2bf;">  Go version:       go1.10.3</span></span>
<span class="line"><span style="color:#abb2bf;">  Git commit:       e68fc7a</span></span>
<span class="line"><span style="color:#abb2bf;">  Built:            Tue Aug 21 17:25:29 2018</span></span>
<span class="line"><span style="color:#abb2bf;">  OS/Arch:          linux/amd64</span></span>
<span class="line"><span style="color:#abb2bf;">  Experimental:     false</span></span>
<span class="line"><span style="color:#abb2bf;">[root@localhost emiliazhen]#</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-docker-问题" tabindex="-1"><a class="header-anchor" href="#安装-docker-问题" aria-hidden="true">#</a> 安装 docker 问题</h3><p>因为之前装过旧版本<code>docker</code>在安装时报错如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">ansaction check error:</span></span>
<span class="line"><span style="color:#abb2bf;">  file /usr/bin/docker from install of docker-ce-17.12.0.ce-1.el7.centos.x86_64 conflicts with file from package docker-common-2:1.12.6-68.gitec8512b.el7.centos.x86_64</span></span>
<span class="line"><span style="color:#abb2bf;">  file /usr/bin/docker-containerd from install of docker-ce-17.12.0.ce-1.el7.centos.x86_64 conflicts with file from package docker-common-2:1.12.6-68.gitec8512b.el7.centos.x86_64</span></span>
<span class="line"><span style="color:#abb2bf;">  file /usr/bin/docker-containerd-shim from install of docker-ce-17.12.0.ce-1.el7.centos.x86_64 conflicts with file from package docker-common-2:1.12.6-68.gitec8512b.el7.centos.x86_64</span></span>
<span class="line"><span style="color:#abb2bf;">  file /usr/bin/dockerd from install of docker-ce-17.12.0.ce-1.el7.centos.x86_64 conflicts with file from package docker-common-2:1.12.6-68.gitec8512b.el7.centos.x86_64</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>卸载旧版本的包</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">yum erase docker</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">common</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">1.12</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">6</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">68.</span><span style="color:#ABB2BF;">gitec8512b.el7.centos.x86_64</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>再次安装<code>Docker</code></li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">yum install docker</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">ce</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;"> </th><th style="text-align:left;"> </th></tr></thead><tbody><tr><td style="text-align:left;">docker rmi [image id]</td><td style="text-align:left;">删除镜像</td></tr><tr><td style="text-align:left;">docker rm [container id]</td><td style="text-align:left;">删除一个处于终止状态的容器</td></tr><tr><td style="text-align:left;">docker images</td><td style="text-align:left;">列出镜像</td></tr><tr><td style="text-align:left;">docker ps</td><td style="text-align:left;">列出容器</td></tr><tr><td style="text-align:left;">docker ps -a</td><td style="text-align:left;">列出所有容器</td></tr><tr><td style="text-align:left;">docker run -d -p 80:80 [imagesname]:[tag]</td><td style="text-align:left;">运行镜像 -d 后台运行 -p 端口 8080:8099 本地主机的 8080 被映射到了容器的 8099 端口</td></tr><tr><td style="text-align:left;">docker build -t [imagename]:[tag] .</td><td style="text-align:left;">制作镜像</td></tr><tr><td style="text-align:left;">docker start [container id]</td><td style="text-align:left;">将一个已经终止的容器启动运行</td></tr><tr><td style="text-align:left;">docker stop [container id]</td><td style="text-align:left;">终止容器</td></tr><tr><td style="text-align:left;">docker restart</td><td style="text-align:left;">将一个运行态的容器终止，然后再重新启动</td></tr></tbody></table><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><ol><li>项目打包生成</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">npm run build</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>在虚拟机上新建一个文件夹，并将打包好的文件放入 <code>app</code> 文件夹中<code>/www</code></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">├─ stationUI</span></span>
<span class="line"><span style="color:#abb2bf;">└─ storeUI</span></span>
<span class="line"><span style="color:#abb2bf;">    └─ dev</span></span>
<span class="line"><span style="color:#abb2bf;">        ├─ Dockerfile</span></span>
<span class="line"><span style="color:#abb2bf;">        ├─ nginx.conf</span></span>
<span class="line"><span style="color:#abb2bf;">        └─ app</span></span>
<span class="line"><span style="color:#abb2bf;">            ├─ index.html</span></span>
<span class="line"><span style="color:#abb2bf;">            └─ static</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在<code>app</code>文件夹同目录新建<code>Dockerfile</code>文件，并编辑</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">FROM nginx</span></span>
<span class="line"><span style="color:#abb2bf;">MAINTAINER  MY Name &lt;myname@whruobei.com&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">#把当前打包工程的html复制到虚拟地址</span></span>
<span class="line"><span style="color:#abb2bf;">ADD ./app /usr/share/nginx/html</span></span>
<span class="line"><span style="color:#abb2bf;">#使用自定义nginx.conf配置端口和监听</span></span>
<span class="line"><span style="color:#abb2bf;">COPY nginx.conf /etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#abb2bf;">RUN /bin/bash -c &#39;echo init ok!!!&#39;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在 app 文件夹同目录新建<code>nginx.conf</code>文件，并编辑</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">worker_processes auto;</span></span>
<span class="line"><span style="color:#abb2bf;">#pid /usr/local/nginx/logs/nginx.pid;</span></span>
<span class="line"><span style="color:#abb2bf;">#error_log /usr/local/nginx/logs/error.log crit;</span></span>
<span class="line"><span style="color:#abb2bf;">worker_rlimit_nofile 1000000;</span></span>
<span class="line"><span style="color:#abb2bf;">events {</span></span>
<span class="line"><span style="color:#abb2bf;">worker_connections 65536;</span></span>
<span class="line"><span style="color:#abb2bf;">multi_accept on;</span></span>
<span class="line"><span style="color:#abb2bf;">use epoll;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">http {</span></span>
<span class="line"><span style="color:#abb2bf;">include mime.types;</span></span>
<span class="line"><span style="color:#abb2bf;">default_type application/octet-stream;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">sendfile on;</span></span>
<span class="line"><span style="color:#abb2bf;">tcp_nopush on;</span></span>
<span class="line"><span style="color:#abb2bf;">tcp_nodelay on;</span></span>
<span class="line"><span style="color:#abb2bf;">server_tokens off;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">keepalive_timeout 10;</span></span>
<span class="line"><span style="color:#abb2bf;">client_header_timeout 10;</span></span>
<span class="line"><span style="color:#abb2bf;">client_body_timeout 10;</span></span>
<span class="line"><span style="color:#abb2bf;">reset_timedout_connection on;</span></span>
<span class="line"><span style="color:#abb2bf;">send_timeout 10;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">limit_conn_zone $binary_remote_addr zone=addr:5m;</span></span>
<span class="line"><span style="color:#abb2bf;">limit_conn addr 100;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">gzip on;</span></span>
<span class="line"><span style="color:#abb2bf;">gzip_disable &quot;msie6&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">gzip_static on;</span></span>
<span class="line"><span style="color:#abb2bf;">gzip_proxied any;</span></span>
<span class="line"><span style="color:#abb2bf;">gzip_min_length 1000;</span></span>
<span class="line"><span style="color:#abb2bf;">gzip_comp_level 4;</span></span>
<span class="line"><span style="color:#abb2bf;">gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">open_file_cache max=100000 inactive=20s;</span></span>
<span class="line"><span style="color:#abb2bf;">open_file_cache_valid 30s;</span></span>
<span class="line"><span style="color:#abb2bf;">open_file_cache_min_uses 2;</span></span>
<span class="line"><span style="color:#abb2bf;">open_file_cache_errors on;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"># include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span style="color:#abb2bf;"># include /etc/nginx/sites-enabled/*;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">server {</span></span>
<span class="line"><span style="color:#abb2bf;">listen 80;</span></span>
<span class="line"><span style="color:#abb2bf;"># 接口服务的IP地址</span></span>
<span class="line"><span style="color:#abb2bf;">server_name localhost;</span></span>
<span class="line"><span style="color:#abb2bf;">charset utf-8;</span></span>
<span class="line"><span style="color:#abb2bf;">access_log off;</span></span>
<span class="line"><span style="color:#abb2bf;"># ElecManageSystem-应用文件夹名称 app-index.html页面所在文件夹</span></span>
<span class="line"><span style="color:#abb2bf;">root /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#abb2bf;">location / {</span></span>
<span class="line"><span style="color:#abb2bf;">index index.html index.htm;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span style="color:#abb2bf;">location = /50x.html {</span></span>
<span class="line"><span style="color:#abb2bf;">root html;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>在虚拟机进入到已新建的文件夹目录，并执行制作镜像命令</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">docker build </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">t lcbstore:dev .</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>在返回<code>Successfully</code>后，先使用<code>docker images</code>查看镜像</li><li>运行镜像 <code>docker run -d -p 80:80 lcbstore:dev</code> 然后就可以在虚拟机<code>localhost:80</code>或在桌面浏览器 <code>主机IP:端口号</code>访问了</li></ol><h2 id="docker-cloud" tabindex="-1"><a class="header-anchor" href="#docker-cloud" aria-hidden="true">#</a> Docker cloud</h2><p>将本地的提交到网络提供给其他人<code>pull</code> 在 hub.cloud.com 上注册账号并新建存储仓库 <code>yourID:cloudname</code></p><table><thead><tr><th style="text-align:left;"> </th><th style="text-align:left;"> </th></tr></thead><tbody><tr><td style="text-align:left;">docker login</td><td style="text-align:left;">登录 docker</td></tr><tr><td style="text-align:left;">docker build yourID/cloudname:tag .</td><td style="text-align:left;">打镜像</td></tr><tr><td style="text-align:left;">docker tag [image id] yourID/cloudname:tag</td><td style="text-align:left;">将本地镜像标记为对应格式</td></tr><tr><td style="text-align:left;">docker push yourID/cloudname:tag</td><td style="text-align:left;">推镜像到仓库</td></tr><tr><td style="text-align:left;">docker pull yourID/cloudname:tag</td><td style="text-align:left;">拉取镜像</td></tr><tr><td style="text-align:left;">若其他用户无法拉取，需要先在<code>hub.docker上Collaborators</code>里<code>add user</code></td><td style="text-align:left;"></td></tr></tbody></table><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><p><code>Nginx</code>是一个使用 c 语言开发的高性能的<code>http</code>服务器、反向代理服务器及电子邮件(<code>IMAP/POP3</code>)代理服务器</p><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><ul><li><code>http</code>服务器：可以做网页静态服务器</li><li>虚拟主机：可以实现在一台服务器虚拟出多个网站。不同端口/不同域名</li><li>反向代理，负载均衡：当网站的访问量达到一定程度后，单台服务器不能满足用户的请求时，需要用多台服务器集群可以使用<code>nginx</code>做反向代理。并且多台服务器可以平均分担负载，不会因为某台服务器负载高宕机而某台服务器闲置的情况</li></ul>`,46);function u(m,y){const a=i("ExternalLinkIcon");return o(),c("div",null,[d,s("p",null,[r,n("上"),s("a",b,[n("安装 docker"),t(a)])]),v])}const g=l(p,[["render",u],["__file","docker.html.vue"]]);export{g as default};
