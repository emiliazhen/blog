import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as l}from"./app-fd217ae5.js";const e={},o=l(`<h2 id="设置镜像" tabindex="-1"><a class="header-anchor" href="#设置镜像" aria-hidden="true">#</a> 设置镜像</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">yarn config set registry https:</span><span style="color:#56B6C2;">//mirrors.huaweicloud.com/</span><span style="color:#ABB2BF;">repository</span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;">npm</span><span style="color:#56B6C2;">/</span></span>
<span class="line"><span style="color:#ABB2BF;">yarn config set disturl https:</span><span style="color:#56B6C2;">//mirrors.huaweicloud.com/</span><span style="color:#ABB2BF;">nodejs</span><span style="color:#56B6C2;">/</span></span>
<span class="line"><span style="color:#ABB2BF;">yarn config set electron_mirror https:</span><span style="color:#56B6C2;">//mirrors.huaweicloud.com/</span><span style="color:#ABB2BF;">electron</span><span style="color:#56B6C2;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">npm config set registry https:</span><span style="color:#56B6C2;">//</span><span style="color:#ABB2BF;">registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#ABB2BF;">npm config set disturl https:</span><span style="color:#56B6C2;">//</span><span style="color:#ABB2BF;">npm.taobao.org</span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;">dist</span></span>
<span class="line"><span style="color:#ABB2BF;">npm config set electron_mirror https:</span><span style="color:#56B6C2;">//</span><span style="color:#ABB2BF;">npm.taobao.org</span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;">mirrors</span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;">electron</span><span style="color:#56B6C2;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置代理" tabindex="-1"><a class="header-anchor" href="#设置代理" aria-hidden="true">#</a> 设置代理</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">npm config set proxy</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">http:</span><span style="color:#56B6C2;">//</span><span style="color:#D19A66;">127.0</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0.1</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">1080</span></span>
<span class="line"><span style="color:#ABB2BF;">npm config set registry</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">http:</span><span style="color:#56B6C2;">//</span><span style="color:#ABB2BF;">registry.npmjs.org</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>关于 https 上面设置使用了 http 开头的源，因此不需要设置 https_proxy 否则需要</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">npm config set https</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">proxy http:</span><span style="color:#56B6C2;">//</span><span style="color:#ABB2BF;">server:port</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>取消</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">npm config delete proxy</span></span>
<span class="line"><span style="color:#ABB2BF;">npm config delete https</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">proxy</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清缓存" tabindex="-1"><a class="header-anchor" href="#清缓存" aria-hidden="true">#</a> 清缓存</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">npm cache verify</span></span>
<span class="line"><span style="color:#ABB2BF;">npm cache </span><span style="color:#C678DD;">clean</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">--</span><span style="color:#ABB2BF;">force</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> husky</h2><p>在<code>package.json</code>中插入，在每次 <code>gitCommit</code> 前会执行命令</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;husky&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;hooks&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;pre-commit&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;npm run test:nowatch &amp;&amp; npm run lint&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地测试-npm-包" tabindex="-1"><a class="header-anchor" href="#本地测试-npm-包" aria-hidden="true">#</a> 本地测试 npm 包</h2><ol><li>在项目<code>npm link</code> 生成短链接</li><li>在测试项目<code>npm link 短连接</code></li></ol><h2 id="发包到-npm" tabindex="-1"><a class="header-anchor" href="#发包到-npm" aria-hidden="true">#</a> 发包到 npm</h2><ol><li>配置 package.json</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;name&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;emm-design&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;version&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;0.1.2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;description&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;React components library&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;author&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Emilia Zhen&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;private&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;main&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;dist/index.js&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;module&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;dist/index.js&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;types&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;dist/index.d.ts&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;license&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;MIT&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;keywords&quot;</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;Component&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;UI&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;React&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;homepage&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;https://emiliazhen.github.io/doc-emm-design&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;repository&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;type&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;git&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;url&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;https://github.com/emiliazhen/doc-emm-design&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;files&quot;</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;dist&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>将非必依赖移至开发依赖，限制版本</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;peerDependencies&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;react&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;&gt;=16.8.0&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;react-dom&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;&gt;=16.8.0&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>添加命令</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#98C379;">&quot;clean&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;rimraf ./dist&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;">&quot;build&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;npm run clean &amp;&amp; npm run build-ts &amp;&amp; npm run build-css&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;">&quot;test:nowatch&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;cross-env CI=true react-scripts test&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;">&quot;prepublishOnly&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;npm run test:nowatch &amp;&amp; npm run lint &amp;&amp; npm run build&quot;</span></span>
<span class="line"><span style="color:#98C379;">&quot;build-ts&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;tsc -p tsconfig.build.json&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;">&quot;build-css&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;node-sass ./src/styles/index.scss ./dist/index.css&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>npm 源切至未镜像，验证当前 npm 账号后 publish</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">npm whoami</span></span>
<span class="line"><span style="color:#ABB2BF;">npm publish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,24),p=[o];function t(r,c){return n(),a("div",null,p)}const d=s(e,[["render",t],["__file","npm.html.vue"]]);export{d as default};
