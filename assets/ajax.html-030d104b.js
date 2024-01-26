import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as l}from"./app-fd217ae5.js";const p={},o=l(`<h2 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h2><p><code>Asynchronous Jacascript And XML</code>，就是使用<code>JS</code>代码获取服务器数据，实现异步请求，局部刷新</p><p>在<code>JS</code>中事件<code>Ajax</code>主要的类就是<code>XMLHttpRequest</code>，它的使用一般有 <code>4</code> 个步骤</p><ol><li>创建 X<code>MLHttpRequest</code>对象</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">XMLHttpRequest</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">xhr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">XMLHttpRequest</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">xhr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ActiveXObject</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Microsoft.XMLHTTP&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>准备发送网络请求</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//参数1:请求方式 参数2:请求的地址 参数3:true异步 false同步</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">open</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;post&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;./check_register.php&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>开始发送网络请求</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">param</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;username=&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//设置请求头</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setRequestHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;content-type&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;application/x-www-form-urlencoded&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//发送  若是get请求,则无需设置请求头,send参数为null,传的值在open的url中</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">send</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">param</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>指定回调函数</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//当xhr.readystate改变的时候触发  4代表数据已经解析完成 200代表响应成功</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onreadystatechange</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">readyState</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">status</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">200</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//当xhr.responseXML 获取xml格式</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">result</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">responseText</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">info</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;info&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">result</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">info</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">innerText</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;该账户已被注册&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">info</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">innerText</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;可注册&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="同步和异步" tabindex="-1"><a class="header-anchor" href="#同步和异步" aria-hidden="true">#</a> 同步和异步</h2><p><code>js</code>是单线程加事件队列的<br><code>ajax</code>异步原理：在<code>send()</code>时请求浏览器进行网络数据的请求，浏览器得到数据后更改<code>xhr</code>中的<code>radyState</code>的值触发事件队列中的方法执行。</p><h2 id="数据格式" tabindex="-1"><a class="header-anchor" href="#数据格式" aria-hidden="true">#</a> 数据格式</h2><ul><li><code>xml</code>数据格式，将数据以标签的方式进行组装，必须以<code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</code>开头。</li><li><code>Json</code>数据格式，类似于<code>js</code>中的对象方式，<code>key</code>必须加双引号， <ul><li><code>JSON.parse();</code>字符串型的<code>json</code>数据转换为对象</li><li><code>JSON.stringify();</code>转换为<code>string</code>;</li></ul></li></ul><h2 id="ajax-方法" tabindex="-1"><a class="header-anchor" href="#ajax-方法" aria-hidden="true">#</a> <code>$.ajax()</code>方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">$</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">ajax</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;./check_register.php&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;POST&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">async</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">dataType</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;text&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">//xml json text html script jsonp</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">username</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">$</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">val</span><span style="color:#ABB2BF;">() },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">success</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//如果dataType是json,success方法中的data是对象类型</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">logo</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">//如果dataType是text,success方法中data是string类型</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> Jsonp</h2><p><code>ajax</code>请求数据必须遵循同源策略，<code>ajax</code>不能跨域(域名/协议/端口不能不同)<br> 解决<code>ajax</code>跨域的方式：<code>jsonp</code>,<code>cros</code>等<br><code>Jsonp</code>原理：</p><ol><li>静态<code>script</code>标签的<code>src</code>属性进行跨域请求，但是发出去的请求是异步请求</li><li>动态创建<code>script</code>标签，通过标签的<code>src</code>属性发送请求。在当前页面定义一个函数，在服务器端返回函数调用。这个返回的函数调用就是<code>Jsonp</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">$</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">ajax</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;https://suggest.taobao.com/sug&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">q</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">dataType</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;jsonp&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">//跨域请求数据必须设置为jsonp,底层执行的是动 态创建script标签</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">success</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板引擎" tabindex="-1"><a class="header-anchor" href="#模板引擎" aria-hidden="true">#</a> 模板引擎</h2><p>将数据和模板结合起来生成<code>html</code>片段。模板引擎需要两个组成部分：模板和数据，通过数据将模板指定的标签动态生成，方便维护</p><ol><li>引入 <code>JS</code> 文件</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;./template.js&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>定义模板</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- 模板的type=text/html 给模板配一个ID --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;text/html&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;resultTemplate&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>将数据和模板结合起来生成 <code>html</code> 片段</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">template</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;resultTemplate&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#stageDiv&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">html</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>将 html 片段渲染到界面中</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;text/html&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;resultTemplate&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">ul</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    {{each result as value i}}</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;结果{{i+1}}&lt;/</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;:{{value[0]}}&lt;/</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    {{/each}}</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">ul</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">$</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">$</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#keyword&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">keyup</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">$</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">ajax</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;https://suggest.taobao.com/sug&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">q</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">$</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">val</span><span style="color:#ABB2BF;">() },</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">dataType</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;jsonp&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">success</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">template</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;resultTemplate&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#61AFEF;">$</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#stageDiv&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">html</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">      })</span></span>
<span class="line"><span style="color:#ABB2BF;">    })</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">{{value}} # 得到数据中的值</span></span>
<span class="line"><span style="color:#abb2bf;">{{each result as value I }}{{/each}} #循环操作</span></span>
<span class="line"><span style="color:#abb2bf;">{{#value}} #转义，将 \`value\` 为代码的字符串，转成 \`html\`</span></span>
<span class="line"><span style="color:#abb2bf;">{{if xxx}}{{/if}}</span></span>
<span class="line"><span style="color:#abb2bf;">#返回的值为数组，each 一个接受这个数据的新数组</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态生成的元素绑定事件需要事件代理 <code>.on(&#39;click&#39;,&#39;a&#39;.function(){});</code></p>`,34),e=[o];function c(t,r){return n(),a("div",null,e)}const y=s(p,[["render",c],["__file","ajax.html.vue"]]);export{y as default};