import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,a as e}from"./app-fd217ae5.js";const l={},o=e(`<h2 id="全局-path-环境变量" tabindex="-1"><a class="header-anchor" href="#全局-path-环境变量" aria-hidden="true">#</a> 全局 Path 环境变量</h2><p>我的电脑-属性-系统属性-高级-环境变量-Path；设置路径将该位置暴露到全局</p><h2 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h2><p><code>Node</code>中<code>javascript</code>也有一个<code>ECMAScript</code>核心，<code>Node</code>中没有浏览器的概念，所有<code>BOM</code>和<code>DOM</code>在<code>Node</code>中不需要。<br><code>Node</code>中的<code>JS</code>组成部分<code>ECMAScrip</code>t 核心+全局成员+模块系统成员</p><ul><li>全局成员 <code>console.log</code> <code>setTimeout</code> <code>setInterval</code></li><li>模块系统成员 <code>Node</code>中的一些核心模块，提供了一些后端的编程能力</li></ul><h3 id="node-js-环境中执行-js-代码的两种方式" tabindex="-1"><a class="header-anchor" href="#node-js-环境中执行-js-代码的两种方式" aria-hidden="true">#</a> Node.js 环境中执行 JS 代码的两种方式</h3><ul><li><code>REPL</code>环境 打开任意终端，然后输入<code>node</code>并回车 就会进入到<code>REPL</code>环境中 离开<code>REPL</code>环境：<code>ctrl+c</code>两次 R:<code>Read</code> 读取，输入完毕代码后只要回车 Node 环境就会读取用户输入的代码 E:<code>Evaluate</code> 解析执行，把 Read 进来的代码调用类似于 Eval 的函数去解析执行 P:<code>Print</code> 输出，把解析执行的结果输出给用户 L:<code>Loop</code> 循环，输出完毕后进入下一次的 REP 循环</li><li><code>Node</code>命令执行 js 文件 <code>node ./要执行的js文件路径</code><br><code>cls</code>清屏 <code>Nodemon</code></li></ul><h3 id="node-版本管理" tabindex="-1"><a class="header-anchor" href="#node-版本管理" aria-hidden="true">#</a> node 版本管理</h3><p>暂时只用过<code>fnm</code>，使用<code>rust</code>编写，可跨平台。<br> 下面介绍<code>fnm</code>在<code>window</code>下使用</p><ul><li>安装</li></ul><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">choco install fnm</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置文件</li></ul><p>在<code>powershell</code>输入命令<code>$PROFILE</code>打印出配置地址后，打开对应文件，加入下面这行并保存</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">fnm env </span><span style="color:#56B6C2;">--use-on-</span><span style="color:#ABB2BF;">cd | </span><span style="color:#56B6C2;">Out-String</span><span style="color:#ABB2BF;"> | </span><span style="color:#56B6C2;">Invoke-Expression</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 查看版本</span></span>
<span class="line"><span style="color:#ABB2BF;">fnm </span><span style="color:#56B6C2;">--</span><span style="color:#ABB2BF;">version</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 安装最新长期稳定版</span></span>
<span class="line"><span style="color:#ABB2BF;">fnm install </span><span style="color:#56B6C2;">--</span><span style="color:#ABB2BF;">lts</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 安装指定版本</span></span>
<span class="line"><span style="color:#ABB2BF;">fnm install </span><span style="color:#D19A66;">14.18</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 已安装列表</span></span>
<span class="line"><span style="color:#ABB2BF;">fnm ls</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 切换默认版本</span></span>
<span class="line"><span style="color:#ABB2BF;">fnm </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">14.18</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span></span>
<span class="line"><span style="color:#ABB2BF;">node </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">v</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 卸载node版本</span></span>
<span class="line"><span style="color:#ABB2BF;">fnm uninstall </span><span style="color:#D19A66;">12.17</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>npm</code>全局包建议每次都装到最新版本下，使用时切换到该版本使用。</p></blockquote><h2 id="node-js-api" tabindex="-1"><a class="header-anchor" href="#node-js-api" aria-hidden="true">#</a> Node.js API</h2><h3 id="fs-模块" tabindex="-1"><a class="header-anchor" href="#fs-模块" aria-hidden="true">#</a> fs 模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fs</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;fs&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">fs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">readFile</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">pathStr</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;utf-8&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#61AFEF;">callback</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">dataStr</span><span style="color:#ABB2BF;">)) </span><span style="color:#7F848E;font-style:italic;">// 文件读取</span></span>
<span class="line"><span style="color:#E5C07B;">fs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">writeFile</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">pathStr</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;content&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#61AFEF;">callback</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">)) </span><span style="color:#7F848E;font-style:italic;">// 文件写入</span></span>
<span class="line"><span style="color:#E5C07B;">fs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">copyFile</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">copyPath</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">copyToPath</span><span style="color:#ABB2BF;">, </span><span style="color:#61AFEF;">callback</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">)) </span><span style="color:#7F848E;font-style:italic;">// 复制</span></span>
<span class="line"><span style="color:#E5C07B;">fs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">appendFile</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">pathStr</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;content&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#61AFEF;">callback</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">)) </span><span style="color:#7F848E;font-style:italic;">// 追加内容</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fs-模块中路径" tabindex="-1"><a class="header-anchor" href="#fs-模块中路径" aria-hidden="true">#</a> fs 模块中路径</h4><p><code>__dirname;</code>当前文件所在的目录<code>name</code>;当前文件的完整路径</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;path&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">__dirnane</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;./demo/d1.js&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// 来解决;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="path-模块" tabindex="-1"><a class="header-anchor" href="#path-模块" aria-hidden="true">#</a> path 模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">([…</span><span style="color:#E06C75;">paths</span><span style="color:#ABB2BF;">]);</span><span style="color:#7F848E;font-style:italic;">// 用平台特定的分隔符将path片段连接到一起生成规范化路径</span></span>
<span class="line"><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">sep</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// 提供了平台特定的路径片段分隔符  &#39;b\\\\a/c&#39;.split(path.sep);  //[&#39;b&#39;,&#39;a&#39;,&#39;c&#39;]</span></span>
<span class="line"><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">basename</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">[,</span><span style="color:#E06C75;">ext</span><span style="color:#ABB2BF;">]);  </span><span style="color:#7F848E;font-style:italic;">// 返回path的最后一部分</span></span>
<span class="line"><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">dirname</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">)  </span><span style="color:#7F848E;font-style:italic;">// 返回路径的目录名</span></span>
<span class="line"><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">extname</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">)  </span><span style="color:#7F848E;font-style:italic;">// 返回文件的后缀名</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> commonjs</h3><p>commonjs 是为了实现 javascript 的模块化而制定的一套规范</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">require</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// 模块引用      const m1= require(&#39;./m/m1.js&#39;);const m2 =require(&#39;./m/m2.js&#39;)</span></span>
<span class="line"><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// 模块定义     在m1.js和m2.js中暴露  module.exports.a = a;</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// 模块标识     console.log(m1,m2)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node.js 中没有<code>window</code>全局对象，替代的是<code>global</code>对象</p><h3 id="模块分类" tabindex="-1"><a class="header-anchor" href="#模块分类" aria-hidden="true">#</a> 模块分类</h3><table><thead><tr><th style="text-align:left;"> </th><th style="text-align:left;"> </th></tr></thead><tbody><tr><td style="text-align:left;">核心模块：由 Node 官方提供的好用模块</td><td style="text-align:left;">require(&#39;核心模块标识符&#39;)</td></tr><tr><td style="text-align:left;">第三方模块：非官方提供的模块</td><td style="text-align:left;">① 在 npm 官网上下载指定的第三方模块 ② 使用 require(&#39;第三方模块的名称标识符&#39;)来导入模块 ③ 根据第三方模块文档使用</td></tr><tr><td style="text-align:left;">用户自定义模块：程序员自己写的 JS 文件</td><td style="text-align:left;">requeire(&#39;路径标识符&#39;)</td></tr></tbody></table><h2 id="packages" tabindex="-1"><a class="header-anchor" href="#packages" aria-hidden="true">#</a> Packages</h2><p>方便分发推广基于 CommonJS 规范实现的应用程序或类库，可以看作是模块、代码和其他资源组合起来形成的独立作用域 包都要以一个单独的目录存在，<code>package.json</code>必须在包的顶层目录下，必须符合<code>JSON</code>格式，并且必须有<code>name</code>、<code>version</code>、<code>main</code>(入口文件)三个属性</p><h2 id="设置淘宝镜像" tabindex="-1"><a class="header-anchor" href="#设置淘宝镜像" aria-hidden="true">#</a> 设置淘宝镜像</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">npm config set registry https:</span><span style="color:#56B6C2;">//</span><span style="color:#ABB2BF;">registry.npm.taobao.org</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="全局安装和卸载-npm-包" tabindex="-1"><a class="header-anchor" href="#全局安装和卸载-npm-包" aria-hidden="true">#</a> 全局安装和卸载 NPM 包</h2><p>node package manager 安装</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">npm install i5ting_toc </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">g</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 用i5ting_toc将md文档转为html</span></span>
<span class="line"><span style="color:#ABB2BF;">i5ting_toc </span><span style="color:#ABB2BF;">-f</span><span style="color:#ABB2BF;"> .</span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;">xx.md </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">o</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>卸载</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">npm uninstall i5ting_toc </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">g</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装和卸载本地包" tabindex="-1"><a class="header-anchor" href="#安装和卸载本地包" aria-hidden="true">#</a> 安装和卸载本地包</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 先初始化配置文件</span></span>
<span class="line"><span style="color:#ABB2BF;">npm init </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">y</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 安装指定的包本地安装包 缩写-S</span></span>
<span class="line"><span style="color:#ABB2BF;">npm i jquery </span><span style="color:#56B6C2;">--</span><span style="color:#ABB2BF;">save</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>package-lock.json</code>文件里记录了曾经装过的包的下载地址，方便下次直接下载包</p><table><thead><tr><th style="text-align:left;"> </th><th style="text-align:left;"> </th><th style="text-align:left;"> </th></tr></thead><tbody><tr><td style="text-align:left;">--save&amp;&amp;&amp;--production</td><td style="text-align:left;">上线</td><td style="text-align:left;">依赖于 dependencies，表示项目上线部署时候需要的依赖项</td></tr><tr><td style="text-align:left;">--save-dev 缩写-D</td><td style="text-align:left;">测试开发</td><td style="text-align:left;">依赖于 devDependencies，表示项目在开发阶段需要的依赖项</td></tr></tbody></table><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">## 快速装包会检查package.json文件中所有依赖项</span></span>
<span class="line"><span style="color:#ABB2BF;">npm i</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">##只安装dependencies节点下记录的包</span></span>
<span class="line"><span style="color:#ABB2BF;">npm i </span><span style="color:#56B6C2;">--</span><span style="color:#ABB2BF;">prodiction</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决-npm-下载慢的问题" tabindex="-1"><a class="header-anchor" href="#解决-npm-下载慢的问题" aria-hidden="true">#</a> 解决 npm 下载慢的问题</h2><p><code>nrm</code> 里面记录了好多下载<code>npm</code>包的服务器地址</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 查看所有可用的服务器列表</span></span>
<span class="line"><span style="color:#ABB2BF;">nrm ls</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 切换下载包时候的服务器地址</span></span>
<span class="line"><span style="color:#ABB2BF;">nrm use 服务器名称</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-web-服务器" tabindex="-1"><a class="header-anchor" href="#创建-web-服务器" aria-hidden="true">#</a> 创建 web 服务器</h2><ol><li>导入 <code>http</code> 核心模块</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">http</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;http&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建服务器</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">server</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">http</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createServer</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>给服务器绑定事件 每次请求完毕必须调用 <code>res</code> 的 <code>end</code> 方法来结束本次响应</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">server</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;request&#39;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;font-style:italic;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;..&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>监听服务器 <code>request</code> 事件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">server</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">listen</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3000</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;127.0.0.1&#39;</span><span style="color:#ABB2BF;">,()</span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;">{..});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取请求方式和地址" tabindex="-1"><a class="header-anchor" href="#获取请求方式和地址" aria-hidden="true">#</a> 获取请求方式和地址</h3><p><code>req.method.toLowerCase</code> <code>req.url</code></p><h3 id="解决响应返回中文乱码" tabindex="-1"><a class="header-anchor" href="#解决响应返回中文乱码" aria-hidden="true">#</a> 解决响应返回中文乱码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">writeHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">200</span><span style="color:#ABB2BF;">, { </span><span style="color:#98C379;">&#39;Content-Type&#39;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;text/javascript,charset=utf-8&#39;</span><span style="color:#ABB2BF;"> })</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Content-Type&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;text/javascript,charset=utf-8&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>res.end()</code>中只能传<code>str</code>和<code>二进制</code>，可以引入<code>fs模块</code>，读取对应的文件将二进制页面返回到<code>res.end()</code>中</p>`,64),p=[o];function c(t,r){return a(),n("div",null,p)}const B=s(l,[["render",c],["__file","api.html.vue"]]);export{B as default};
