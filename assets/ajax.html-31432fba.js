import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,a as l}from"./app-fd217ae5.js";const e={},o=l(`<h2 id="ajax是什么-如何创建一个ajax" tabindex="-1"><a class="header-anchor" href="#ajax是什么-如何创建一个ajax" aria-hidden="true">#</a> <code>Ajax</code>是什么，如何创建一个<code>Ajax</code></h2><p>使用<code>ajax</code>原生方式发送请求主要通过<code>XMLHttpRequest</code>、<code>ActiveXObject(IE浏览器)</code>对象实现异步通信效果</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">xhr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">null</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">XMLHttpRequest</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">xhr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">XMLHttpRequest</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">xhr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ActiveXObject</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Microsoft.XMLHTTP&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">open</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;方式&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;地址&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;标志位&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setRequestHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onreadystatechange</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {}</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">send</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-常见的状态码有哪些" tabindex="-1"><a class="header-anchor" href="#http-常见的状态码有哪些" aria-hidden="true">#</a> http 常见的状态码有哪些</h2><ul><li>200-请求成功</li><li>301-资源(网页等)被永久转移到其他 URL</li><li>404-请求的资源(网页等)不存在</li><li>500-内部服务器错误</li></ul><h2 id="ajax-的请求步骤" tabindex="-1"><a class="header-anchor" href="#ajax-的请求步骤" aria-hidden="true">#</a> ajax 的请求步骤</h2><p>get 请求：</p><ol><li>创建<code>xml</code></li><li>准备发送</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">open</span><span style="color:#ABB2BF;">（</span><span style="color:#98C379;">&quot;get&quot;</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&quot;地址?...&quot;</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">）</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>执行发送</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">send</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>执行回调函数</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onreadystatechange</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>post 请求：</p><ol><li>创建<code>xml</code></li><li>准备发送</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">open</span><span style="color:#ABB2BF;">（</span><span style="color:#98C379;">&quot;post&quot;</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&quot;地址&quot;</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">）</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>设置请求头（不需要去记忆固定写法）</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setRequestHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Content-Type&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;application/x-www-form-urlencoded&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>执行发送</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">send</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">param</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>执行回调函数</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onreadystatechange</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="理解xss-csrf-ddos攻击原理以及避免方式" tabindex="-1"><a class="header-anchor" href="#理解xss-csrf-ddos攻击原理以及避免方式" aria-hidden="true">#</a> 理解<code>xss</code>，<code>csrf</code>，<code>ddos</code>攻击原理以及避免方式</h2><ul><li><code>XSS（Cross-Site Scripting，跨站脚本攻击）</code>是一种代码注入攻击。攻击者在目标网站上注入恶意代码，当被攻击者登陆网站时就会执行这些恶意代码，这些脚本可以读取 <code>cookie</code>，<code>session tokens</code>，或者其它敏感的网站信息，对用户进行钓鱼欺诈，甚至发起蠕虫攻击等。</li><li><code>CSRF（Cross-site request forgery）</code>跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。</li><li><code>DDoS（Distributed Denial of Service）</code>又叫分布式拒绝服务，其原理就是利用大量的请求造成资源过载，导致服务不可用。</li></ul><h3 id="xss避免方式" tabindex="-1"><a class="header-anchor" href="#xss避免方式" aria-hidden="true">#</a> <code>XSS</code>避免方式：</h3><ol><li><code>url</code>参数使用<code>encodeURIComponent</code>方法转义</li><li>尽量不是有<code>InnerHtml</code>插入<code>HTML</code>内容</li><li>使用特殊符号、标签转义符。</li></ol><h3 id="csrf避免方式" tabindex="-1"><a class="header-anchor" href="#csrf避免方式" aria-hidden="true">#</a> <code>CSRF</code>避免方式：</h3><ol><li>添加验证码</li><li>使用<code>token</code></li></ol><ul><li>服务端给用户生成一个<code>token</code>，加密后传递给用户</li><li>用户在提交请求时，需要携带这个<code>token</code></li><li>服务端验证<code>token</code>是否正确</li></ul><h3 id="ddos避免方式" tabindex="-1"><a class="header-anchor" href="#ddos避免方式" aria-hidden="true">#</a> <code>DDos</code>避免方式：</h3><ol><li>限制单 IP 请求频率。</li><li>防火墙等防护设置禁止 ICMP 包等</li><li>检查特权端口的开放</li></ol>`,31),p=[o];function c(r,i){return a(),n("div",null,p)}const B=s(e,[["render",c],["__file","ajax.html.vue"]]);export{B as default};
