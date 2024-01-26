import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as l}from"./app-fd217ae5.js";const e={},p=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;"> ┌─────────────────────────────────────────┐  ┌─────┐</span></span>
<span class="line"><span style="color:#abb2bf;"> │         User Interface                  │  │  D  │</span></span>
<span class="line"><span style="color:#abb2bf;"> └────────────────┬────────────────────┬───┘  │  a  │</span></span>
<span class="line"><span style="color:#abb2bf;">                  │                    │      │  t  │</span></span>
<span class="line"><span style="color:#abb2bf;">                  │                    │      │  a  │</span></span>
<span class="line"><span style="color:#abb2bf;"> ┌────────────────▼────────────────┐   │      │     │</span></span>
<span class="line"><span style="color:#abb2bf;"> │  Browser engine                 ├───┼─────►│  P  │</span></span>
<span class="line"><span style="color:#abb2bf;"> └────────────────┬────────────────┘   │      │  e  │</span></span>
<span class="line"><span style="color:#abb2bf;">                  │                    │      │  r  │</span></span>
<span class="line"><span style="color:#abb2bf;"> ┌────────────────▼────────────────┐   │      │  s  │</span></span>
<span class="line"><span style="color:#abb2bf;"> │ Rendering engine                │   │      │  i  │</span></span>
<span class="line"><span style="color:#abb2bf;"> └────┬──────────────┬──────────┬──┘   │      │  s  │</span></span>
<span class="line"><span style="color:#abb2bf;">      │              │          │      │      │  t  │</span></span>
<span class="line"><span style="color:#abb2bf;">      │              │          │      │      │  e  │</span></span>
<span class="line"><span style="color:#abb2bf;"> ┌────▼─────┐ ┌──────▼─────┐  ┌─▼──────▼──┐   │  n  │</span></span>
<span class="line"><span style="color:#abb2bf;"> │Networking│ │ JavaScript │  │UI Backend │   │  c  │</span></span>
<span class="line"><span style="color:#abb2bf;"> │          │ │ Interpreter│  │           │   │  e  │</span></span>
<span class="line"><span style="color:#abb2bf;"> └──────────┘ └────────────┘  └───────────┘   └─────┘</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;"> </th><th style="text-align:left;"> </th></tr></thead><tbody><tr><td style="text-align:left;">User Interface</td><td style="text-align:left;">用户界面，我们所看到的浏览器</td></tr><tr><td style="text-align:left;">Browser engine</td><td style="text-align:left;">浏览器引擎，用来查询和操作渲染引擎</td></tr><tr><td style="text-align:left;">* Rendering engine</td><td style="text-align:left;">用来显示请求的内容，负责解析<code>HTML</code>、<code>CSS</code>，并把解析的内容显示出来</td></tr><tr><td style="text-align:left;">Networking</td><td style="text-align:left;">网络，负责发送网络请求</td></tr><tr><td style="text-align:left;">* JavaScript Interpreter(解析者)</td><td style="text-align:left;"><code>JavaScript</code>解析器，负责执行<code>JavaScript</code>的代码</td></tr><tr><td style="text-align:left;">UI Backend</td><td style="text-align:left;">UI 后端，用来绘制类似组合框和弹出窗口</td></tr><tr><td style="text-align:left;">Data Persistence(持久化)</td><td style="text-align:left;">数据持久化，数据存储 <code>cookie</code>、<code>HTML5</code>中的<code>sessionStorage</code></td></tr></tbody></table><h2 id="js-的特点" tabindex="-1"><a class="header-anchor" href="#js-的特点" aria-hidden="true">#</a> JS 的特点</h2><p>js 就是解释执行的弱类型动态语言 java 就是编译执行的强类型静态语言</p><table><thead><tr><th style="text-align:left;"> </th><th style="text-align:left;"> </th></tr></thead><tbody><tr><td style="text-align:left;">解释型</td><td style="text-align:left;">解释一行执行一行，编译过程在执行时进行</td></tr><tr><td style="text-align:left;">弱类型</td><td style="text-align:left;">在变量声明时不需要指定数据类型</td></tr><tr><td style="text-align:left;">动态</td><td style="text-align:left;">在代码执行过程中可以给对象动态添加属性</td></tr></tbody></table><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><p>现实世界中的任何具体的事或者物都可以抽象为程序中的对象 对象就是一个无序属性的集合，也就是一个容器</p><h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h3><p><code>instanceof</code>关键字 判断对象是否是通过该构造函数创建的 <code>stu1 instanceof Student</code>; 构造函数不是在声明时决定的，而是在调用时决定的，只有用<code>new</code>关键字调用的函数才是构造函数</p><p>静态成员和实例成员 成员：属性和方法 给构造函数添加属性，就是静态成员，静态成员在内存中是唯一的 给对象添加成员，就是实例成员（对象成员）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Student</span><span style="color:#ABB2BF;">() {}</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">stu</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Student</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#E5C07B;">stu</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;小明&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">//stu.name就是实例成员</span></span>
<span class="line"><span style="color:#E5C07B;">Student</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">sex</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;男&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">//Student.sex就是静态成员</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 实例成员使用方式： console.log(stu.name);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 静态成员使用方式： console.log(Student.sex);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> 原型</h3><p>面向对象的三大特征： <code>继承</code> <code>封装</code> <code>抽象</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Student</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">name</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">age</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">name</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">age</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sayHi</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;我是&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E5C07B;">student</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">//静态成员，在内存中唯一，prototype就是一个对象，可以往对象中添加属性或方法</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">stu1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Student</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;小明&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">18</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">stu1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sayHi</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">stu2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Student</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;小红&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">18</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">stu2</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sayHi</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码，创建多个对象，<code>sayHi</code>方法重复，<code>sayHi</code>方法内容本质上是一样的，但是浪费资源 原型的作用：解决了多次创建对象，重复声明方法的问题</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Student</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">name</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">age</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">name</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">age</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E5C07B;">Student</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sayHi</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;我是&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">stu1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Student</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;小明&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">18</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">stu1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sayHi</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">stu2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Student</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;小红&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">18</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">stu2</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sayHi</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之所以对象可以访问构造函数的<code>prototype</code>中的成员，是因为所有的对象都有一个<code>__proto__</code>属性，该属性指向了当前对象构造函数的<code>prototype</code>属性</p><h4 id="bind-方法" tabindex="-1"><a class="header-anchor" href="#bind-方法" aria-hidden="true">#</a> bind 方法</h4><p>ES5 之后出现的新方法 属于函数的一个方法，返回值是一个新的函数，函数的功能和原先函数一模一样，唯一的区别就是 this 指向 bind 方法中的参数-对象 调用该方法可以改变函数中 this 的指向，返回的新函数需要手动调用，bind 方法不会自动调用新创建的函数 复制一个函数，改变函数中的 this 指向</p><ul><li>参数 1：设置函数内部 this 的指向</li><li>参数 2-n：对应函数的参数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">() </span><span style="color:#7F848E;font-style:italic;">//window</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;zs&#39;</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">newFn</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fn</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">bind</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">//不会执行fn函数，也不会执行返回的新函数</span></span>
<span class="line"><span style="color:#61AFEF;">newFn</span><span style="color:#ABB2BF;">() </span><span style="color:#7F848E;font-style:italic;">//obj</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="call-方法" tabindex="-1"><a class="header-anchor" href="#call-方法" aria-hidden="true">#</a> call 方法</h4><p>call()方法调用一个函数，其具有一个指定的 this 值</p><ul><li>参数 1：将函数内部的<code>this</code>指向的对象</li><li>参数 2-参数 n ：调用函数传入的实参</li><li>返回值：call 的返回值就是函数的返回值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">fun</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">thisArg</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">arg1</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">arg2</span><span style="color:#ABB2BF;">…);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="callee-方法" tabindex="-1"><a class="header-anchor" href="#callee-方法" aria-hidden="true">#</a> callee 方法</h4><p>返回正被执行的 function 对象，也就是所指定的<code>function</code>对象正文<br><code>arguments.length</code>实参长度，<code>arguments.callee.length</code>是形参长度</p><h4 id="apply-方法" tabindex="-1"><a class="header-anchor" href="#apply-方法" aria-hidden="true">#</a> apply 方法</h4><h3 id="对象的属性查找规则" tabindex="-1"><a class="header-anchor" href="#对象的属性查找规则" aria-hidden="true">#</a> 对象的属性查找规则</h3><h4 id="获取属性" tabindex="-1"><a class="header-anchor" href="#获取属性" aria-hidden="true">#</a> 获取属性：</h4><p>对象自身有该属性的时候，会优先使用自身属性 如果自身没有该属性，会找原型对象中是否有该属性，原型对象中有就使用，没有继续找原型对象的原型对象是否有该属性，不断重复此过程，直至 Object 的原型对象找到为止</p><h4 id="设置属性" tabindex="-1"><a class="header-anchor" href="#设置属性" aria-hidden="true">#</a> 设置属性：</h4><p>设置在谁身上，属性就在谁身上，例如：给 stu 对象设置 test 属性，不会设置到原型上，即使原型上有 test 属性，也只会设置给 stu 对象自身</p><h2 id="自调用函数" tabindex="-1"><a class="header-anchor" href="#自调用函数" aria-hidden="true">#</a> 自调用函数</h2><p>避免污染全局作用域</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">;(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">window</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">undefined</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span></span>
<span class="line"><span style="color:#ABB2BF;">})(</span><span style="color:#E06C75;">window</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>传入 window 对象，将来代码压缩的时候，可以把 function(window)压缩成 function(w);<br> 传入 undefined，把 undefined 作为函数的参数，因为在老版本的浏览器中 undefined 可以被重新赋值，防止 undefined 被重新赋值<br> 代码规范中建议在自调用函数之前加上分号，避免自调用函数语法错误</p></blockquote><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="函数声明与函数表达式" tabindex="-1"><a class="header-anchor" href="#函数声明与函数表达式" aria-hidden="true">#</a> 函数声明与函数表达式</h3><p>函数声明</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">() {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>函数表达式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h4><ul><li>函数声明必须有名字</li><li>函数声明会函数提升，在预解析阶段就已创建，声明前后都可以调用</li><li>函数表达式类似于变量赋值</li><li>函数表达式可以没有名字，例如匿名函数</li><li>函数表达式没有变量提升，在执行阶段创建，必须在表达式执行之后才可以调用</li></ul><blockquote><p>函数也是对象 所有函数都是 Function 的实例</p></blockquote><h3 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数" aria-hidden="true">#</a> 回调函数</h3><p>将一个函数作为参数，放在另一个函数中调用，就是回调函数</p><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3><p>函数内部声明了一个函数，里面的函数用到了外面函数作用域中的成员，导致外面函数作用域中的成员无法释放，将成员放置在闭包空间中</p><ul><li>含义：在一个作用域中可以访问另一个作用域的变量</li><li>特点：延展了函数的作用域范围</li><li>问题：本该被释放的内存没有被释放 ---&gt; 内存泄漏</li></ul><h3 id="定时器的工作原理" tabindex="-1"><a class="header-anchor" href="#定时器的工作原理" aria-hidden="true">#</a> 定时器的工作原理</h3><p>JS 是一门单线程的语言，同一时间只能执行一项任务</p><table><thead><tr><th style="text-align:left;"> </th><th style="text-align:left;"> </th><th style="text-align:left;"> </th></tr></thead><tbody><tr><td style="text-align:left;">执行栈</td><td style="text-align:left;">由上到下执行的代码</td><td style="text-align:left;">先进后出</td></tr><tr><td style="text-align:left;">任务队列</td><td style="text-align:left;">定时器的任务</td><td style="text-align:left;">先进先出</td></tr><tr><td style="text-align:left;"><code>setTimeout</code> 或 <code>setInterval</code> 这写代码会将任务函数发布到任务队列中，依次执行</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">在程序执行时，优先执行执行栈的代码，执行栈中所有代码全部执行完毕后才会执行任务队列的代码，即使任务队列延迟只有<code>0</code>毫秒</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3><p>函数自身调用自身的一种编程方式，一定要定义好结束条件，否则会出现最大堆栈调用溢出（堆栈溢出异常）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setTimeout</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">  }, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用定时器来无限调用，就不会形成栈内存溢出 因为堆栈的特性是先进后出，意味着最新执行的函数如果不释放，最低下的函数永远无法释放</p><h2 id="对象的拷贝" tabindex="-1"><a class="header-anchor" href="#对象的拷贝" aria-hidden="true">#</a> 对象的拷贝</h2><table><thead><tr><th style="text-align:left;"> </th><th style="text-align:left;"> </th></tr></thead><tbody><tr><td style="text-align:left;">浅拷贝</td><td style="text-align:left;">将对象中第一层的属性拷贝，如果对象中的属性有引用数据类型，那第二层的属性不会被拷贝，只是将该属性的地址拷贝，会导致两个对象引用同一个数据</td></tr><tr><td style="text-align:left;">深拷贝</td><td style="text-align:left;">拷贝对象属性时进行判断，如果是引用数据类型，就继续调用拷贝方法进行递归拷贝，如果是基本数据类型，直接拷贝</td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">deepCopy</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">o1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">o2</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">o1</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">o1</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">instanceof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// 如果key是数组类型 Array？  []</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">o2</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> []</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">deepCopy</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">o1</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">], </span><span style="color:#E06C75;">o2</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">])</span></span>
<span class="line"><span style="color:#ABB2BF;">    } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">o1</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">instanceof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 如果key是复杂类型 Object？ {}</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">o2</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {}</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">deepCopy</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">o1</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">], </span><span style="color:#E06C75;">o2</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">])</span></span>
<span class="line"><span style="color:#ABB2BF;">    } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 如果key这个属性 是基本类型</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">o2</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">o1</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61),o=[p];function t(c,r){return n(),a("div",null,o)}const d=s(e,[["render",t],["__file","js高级.html.vue"]]);export{d as default};
