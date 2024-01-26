import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as o,a as c}from"./app-fd217ae5.js";const i={},a=c('<h2 id="浏览器内核" tabindex="-1"><a class="header-anchor" href="#浏览器内核" aria-hidden="true">#</a> 浏览器内核</h2><ul><li>IE:<code>trident </code></li><li>Firefox:<code>gecko</code></li><li>Safari:<code>Webkit</code></li><li>Opera:<code>Presto</code> -&gt;<code>Blink</code></li><li>Chrome:<code>Blink</code>(基于<code>webikt</code>,<code>Google</code>与<code>Opera Software</code>共同开发)</li></ul><h2 id="每个html文件开头doctype" tabindex="-1"><a class="header-anchor" href="#每个html文件开头doctype" aria-hidden="true">#</a> 每个<code>HTML</code>文件开头<code>Doctype</code></h2><p>此标签告诉浏览器按照何种规范解析页面，使用哪种<code>HTML</code>或<code>XHTML</code></p><h2 id="quirks-与-standards" tabindex="-1"><a class="header-anchor" href="#quirks-与-standards" aria-hidden="true">#</a> Quirks 与 Standards</h2><ul><li><code>Quirks</code>怪异模式，盒模型宽度高度包含了<code>padding</code>和<code>border</code>，给行内元素宽高会生效，<code>margin:0 auto</code>设置水平居中会失效</li><li><code>Standards</code>标准模式，从<code>IE6</code>开始引入了<code>Standards</code>，对<code>CSS</code>提供更好的支持。</li><li>写<code>DTD(Document Type Definition)</code>意味着这个页面将采用对<code>CSS</code>支持更好的布局，如果没有则是怪异模式</li></ul><h2 id="div-css-布局较-table-布局优势" tabindex="-1"><a class="header-anchor" href="#div-css-布局较-table-布局优势" aria-hidden="true">#</a> div+css 布局较 table 布局优势</h2><ul><li>改版的时候更方便，只要改<code>CSS</code>;</li><li>页面加载速度更快、结构化清晰、页面显示简洁；</li><li>表现与结构相分离；易于 SEO 搜索引擎更友好，排名更容易靠前</li></ul><h2 id="img-的-alt-与-title" tabindex="-1"><a class="header-anchor" href="#img-的-alt-与-title" aria-hidden="true">#</a> img 的 alt 与 title</h2><p><code>alt</code>为不能显示的图像起到替换文字的文字作用，<code>title</code>鼠标经过显示文字提示</p><h2 id="渐进增强-和-优雅降级" tabindex="-1"><a class="header-anchor" href="#渐进增强-和-优雅降级" aria-hidden="true">#</a> 渐进增强 和 优雅降级</h2><ul><li>渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验</li><li>优雅降级：一开始就构建完整的功能，然后再针对低版浏览器进行兼容</li></ul><h2 id="利用多个域名来存储网站资源会更有效" tabindex="-1"><a class="header-anchor" href="#利用多个域名来存储网站资源会更有效" aria-hidden="true">#</a> 利用多个域名来存储网站资源会更有效</h2><ul><li><code>CDN</code>缓存更方便；</li><li>突破浏览器并发限制；</li><li>节约<code>cookie</code>带宽；</li><li>节约主域名的连接数，优化页面响应速度</li></ul><h2 id="网页标准和标准定制机构重要性" tabindex="-1"><a class="header-anchor" href="#网页标准和标准定制机构重要性" aria-hidden="true">#</a> 网页标准和标准定制机构重要性</h2><p>网页标准和标准定制机构都是为了能让<code>web</code>发展更&#39;健康&#39;，开发者遵循统一的标准，降低开发难度，开发成本，<code>SEO</code>也会更好做，也不会因为滥用导致各种<code>BUG</code>、安全问题，最终提高网站易用性</p><h2 id="cookies-sessionstorage-loacalstorage-区别" tabindex="-1"><a class="header-anchor" href="#cookies-sessionstorage-loacalstorage-区别" aria-hidden="true">#</a> cookies | sessionStorage | loacalStorage 区别</h2><p><code>sessionStorage</code>用于本地存储一个会话中的数据，这些数据只有在同一个会话页面才能访问并且当会话结束后数据也会随之销毁；<br> 而<code>loacalStorage</code>用于持久化本地存储，除非主动删除数据，否则数据是永远不会过期的。<br><code>Cookie</code>的作用是与服务器进行交互，作为<code>HTTP</code>规范的一部分而存在，<code>Storage</code>仅仅是为了本地存储数据而生；拥有<code>setItem</code>,<code>getItem</code>,<code>removeItem</code>,<code>clear</code>等方法，不像<code>cookie</code>需要前端开发者自己封装<code>setCookie</code>,<code>getCookie</code>；C<code>ookie</code>的大小是受限的，并且每次请求一个新页面<code>Cookie</code>都会被发送过去，无形中浪费了带宽，另外<code>Cookie</code>还需要指定作用域，不可以跨域调用</p><h2 id="src-href-区别" tabindex="-1"><a class="header-anchor" href="#src-href-区别" aria-hidden="true">#</a> src | href 区别</h2><p><code>src</code>用于替换当前元素，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求<code>src</code>资源时会将其指向的资源下载并应用到文档内；<code>&lt;script src=&quot;xx.js&quot;&gt;&lt;/script&gt;</code>当浏览器解析到该元素时会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也是如此，类似将所指向资源嵌入标签内，这也是为什么将<code>js</code>脚本放在底部而不是头部。<br><code>href</code>指向网络资源所在位置，建立和当前元素(锚点)或当前文档(链接)之间的链接，如果在文档中添加<code>&lt;link href=&quot;xxx.css&quot; rel=&quot;stylesheet&quot;/&gt;</code>那么浏览器会识别为<code>css</code>文件，就会并行下载资源并且不会停止对当前文档的处理，这也是为什么建议使用<code>link</code>方式来加载<code>css</code>，而不是使用<code>@import</code>方式</p><h2 id="网页制作会用到的图片格式" tabindex="-1"><a class="header-anchor" href="#网页制作会用到的图片格式" aria-hidden="true">#</a> 网页制作会用到的图片格式</h2><ul><li>png-8</li><li>png-24</li><li>jpeg</li><li>gif</li><li>svg</li><li>Webp <code>webp</code>是谷歌开发的一种旨在加快图片加载速度的图片格式，图片压缩体积大约只有<code>JPEG</code>的<code>2/3</code>，并能节省大量的服务器带宽资源和数据空间</li></ul><h2 id="微格式" tabindex="-1"><a class="header-anchor" href="#微格式" aria-hidden="true">#</a> 微格式</h2><p>是一种让机器可读的语义化<code>XHTML</code>词汇集合，是结构化数据的开放标准，是为特殊应用而制定的特殊格式。让网站内容在搜索引擎结果界面可以显示额外的提示</p><h2 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h2><p>在<code>css/js</code>代码上线之后开发人员经常会优化性能，从用户刷新网页开始，一次<code>JS</code>请求一般情况下有哪些地方会有缓存处理:</p><ul><li><code>dns</code>缓存</li><li><code>cdn</code>缓存</li><li>浏览器缓存</li><li>服务器缓存</li></ul><h2 id="一个页面上有大量的图片-加载很慢-有哪些方法优化" tabindex="-1"><a class="header-anchor" href="#一个页面上有大量的图片-加载很慢-有哪些方法优化" aria-hidden="true">#</a> 一个页面上有大量的图片，加载很慢，有哪些方法优化</h2><ul><li>图片懒加载，在页面上的为可视区域添加一个滚动条事件，判断图片位置与浏览器顶端距离与页面的距离，如果前者小于后者优先加载。</li><li>如果为幻灯片、相册等，可以使用图片预加载技术，将当前展示图片的前一张和后一张优先加载。如果图片为<code>css</code>图片，可以使用<code>CSSsprite</code>,<code>SVGsprite</code>,<code>Iconfont</code>,<code>Base64</code>等技术。</li><li>如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩特别厉害的缩略图，以提高用户体验。</li><li>如果图片展示区域小于图片的真实大小，则因在服务器端根据业务需要先进行图片压缩，图片压缩后大小与展示一致</li></ul><h2 id="html-结构语义化" tabindex="-1"><a class="header-anchor" href="#html-结构语义化" aria-hidden="true">#</a> HTML 结构语义化</h2><ul><li>为了在没有<code>css</code>代码时也能呈现很好的内容结构、代码结构；</li><li>提高用户体验，比如<code>title</code>,<code>alt</code>用于解释名词和图片信息；</li><li>利于<code>SEO</code>，语义化能和搜索引擎建立良好的联系，有利于爬虫抓取更多信息；</li><li>方便其他设备解析，以语义的方式来渲染网页；</li><li>便于团队开发和维护，语义化更具可读性，如果遵循 W3C 标准的团队都遵循这个标准可以减少差异化，利于规范化</li></ul><h2 id="以前端角度出发做好-seo-需要考虑什么" tabindex="-1"><a class="header-anchor" href="#以前端角度出发做好-seo-需要考虑什么" aria-hidden="true">#</a> 以前端角度出发做好 SEO 需要考虑什么</h2><ul><li>了解搜索引擎如何抓取网页和如何索引网页；</li><li><code>Meta</code>标签优化，主题<code>title</code>,网站免俗<code>Description</code>和关键词<code>keywords</code>，还有一些其他隐藏文字如作者<code>Author</code>，目录<code>Category</code>，编码语种<code>Language</code>等；</li><li>如何选取关键词并在网页中防止关键词，确定主关键词一般在<code>5</code>个左右，然后针对这些关键词进行优化，包括关键词密度、相关度、突出性等等；</li><li>了解主要的搜索引擎，不同的搜索引擎对页面的抓取和索引、排序的规则都不一样；主要的互联网目录，目录是人工编辑的，主要收录网站主页；</li><li>按点击付费的搜索引擎；</li><li>搜索引擎登录，网站做完后要让别人找到你最简单的办法就是将网站提交到搜索引擎；</li><li>链接交换和链接广泛度；</li><li>合理的标签使用</li></ul><h2 id="对-dom-设置-css-样式" tabindex="-1"><a class="header-anchor" href="#对-dom-设置-css-样式" aria-hidden="true">#</a> 对 DOM 设置 CSS 样式</h2><ul><li>外部样式表，引入外部 css 文件；</li><li>内部样式表，将 css 代码放在<code>&lt;head&gt;</code>标签内部；</li><li>内联样式，将 css 样式直接定义在 HTML 元素内部</li></ul><h2 id="css都有哪些选择器" tabindex="-1"><a class="header-anchor" href="#css都有哪些选择器" aria-hidden="true">#</a> <code>CSS</code>都有哪些选择器</h2><ul><li>派生选择器(用<code>GTML</code>标签申明)</li><li><code>ID</code>选择器(用<code>DOM</code>的<code>ID</code>申明)</li><li>类选择器(用一个样式类名申明)</li><li>属性选择器(用<code>DOM</code>的属性申明，属于<code>CSS2</code>，<code>IE6</code>不支持，不常用)</li></ul><p>除了前<code>3</code>中基本选择器还有一些扩展选择器：后代选择器(利用空格间隔)、群组选择器(利用逗号间隔)<br> 行内，ID 选择器，类选择器，派生选择器</p><h2 id="css-中可以通过哪些属性定义使得一个-dom-元素不显示在浏览器可视范围内" tabindex="-1"><a class="header-anchor" href="#css-中可以通过哪些属性定义使得一个-dom-元素不显示在浏览器可视范围内" aria-hidden="true">#</a> CSS 中可以通过哪些属性定义使得一个 DOM 元素不显示在浏览器可视范围内</h2><ul><li>设置<code>display</code>属性为<code>none</code>；</li><li>设置<code>visibility</code>属性为<code>hidden</code>；</li><li>设置宽高为<code>0</code>；</li><li>设置<code>opacity</code>为<code>0</code>；</li><li>设置<code>z-index</code>位置在<code>-1000em</code></li></ul><h2 id="超链接访问过后-hover-样式就不出现的问题是什么" tabindex="-1"><a class="header-anchor" href="#超链接访问过后-hover-样式就不出现的问题是什么" aria-hidden="true">#</a> 超链接访问过后 hover 样式就不出现的问题是什么</h2><p>被点击访问过的超链接样式不再具备<code>hover</code>和<code>active</code>了，解决方法是改变<code>CSS</code>属性的排列顺序<code>LVHA</code>:<code>link</code>,<code>visited</code>,<code>hover</code>,<code>active</code></p><h2 id="什么是-css-hack" tabindex="-1"><a class="header-anchor" href="#什么是-css-hack" aria-hidden="true">#</a> 什么是 css hack</h2><p>针对不同的浏览器写不同的<code>css code</code>的过程，就是<code>css hack</code></p><h2 id="行内元素和块级元素的具体区别" tabindex="-1"><a class="header-anchor" href="#行内元素和块级元素的具体区别" aria-hidden="true">#</a> 行内元素和块级元素的具体区别</h2><ul><li>块级元素特性：独占一行，宽高内边距外边距可以控制 <code>div</code> <code>p</code> <code>h1-h6</code> <code>from</code> <code>ul</code></li><li>行内元素：和相邻的行内元素在同一行，宽高靠里面内容撑起，宽高不可以设置 <code>a</code> <code>b</code> <code>i</code> <code>br</code> <code>span</code> <code>input</code> <code>select</code></li></ul><h2 id="外边距重叠" tabindex="-1"><a class="header-anchor" href="#外边距重叠" aria-hidden="true">#</a> 外边距重叠</h2><p>外边距重叠就是<code>margin-collapse</code>，在<code>CSS</code>当中，相邻的两个盒子(可能是兄弟关系也可能是祖先关系)的外边距可以结合成一个单独的外边距。这种合并外边距的方式被称为折叠，并且所结合成的外边距称为折叠外边距</p><h2 id="rgba-和opacity的透明效果的不同" tabindex="-1"><a class="header-anchor" href="#rgba-和opacity的透明效果的不同" aria-hidden="true">#</a> <code>rgba()</code>和<code>opacity</code>的透明效果的不同</h2><p><code>opactiy</code>作用于元素以及元素内的所有内同的透明度，<code>rgba()</code>只作用于元素的颜色或背景色</p><h2 id="css中可以让文字在垂直和水平方向上重叠的两个属性" tabindex="-1"><a class="header-anchor" href="#css中可以让文字在垂直和水平方向上重叠的两个属性" aria-hidden="true">#</a> <code>css</code>中可以让文字在垂直和水平方向上重叠的两个属性</h2><p>垂直方向:<code>line-height</code>，水平方向<code>letter-sapcing</code>。<code>letter-spacing</code>还可以用于消除<code>inline-block</code>元素间换行符空格间隙问题</p><h2 id="垂直居中一个元素" tabindex="-1"><a class="header-anchor" href="#垂直居中一个元素" aria-hidden="true">#</a> 垂直居中一个元素</h2><ul><li>已知宽高的元素 <code>50%</code>，<code>transform</code>;</li><li>未知宽高的元素 <code>left,right,top,bottom</code>:<code>0</code></li></ul><h2 id="px和em的区别" tabindex="-1"><a class="header-anchor" href="#px和em的区别" aria-hidden="true">#</a> <code>px</code>和<code>em</code>的区别</h2><ul><li><code>px</code>的值是固定的指定是多少就是多少，计算比较容易</li><li><code>em</code>的值不是固定的，并且<code>em</code>会继承父级元素的字体大小</li></ul><h2 id="reset的css文件" tabindex="-1"><a class="header-anchor" href="#reset的css文件" aria-hidden="true">#</a> <code>reset</code>的<code>css</code>文件</h2><ul><li>不同浏览器对一些元素有不同的默认样式，需要用重置样式文件来处理。<code>normalize</code>相比<code>reset</code>没有重置所有的样式风格，提供了一套合理的默认样式、</li><li>既能让众多浏览器达到一致和合理，但又不扰乱其他的东西</li></ul><h2 id="sass-和-less" tabindex="-1"><a class="header-anchor" href="#sass-和-less" aria-hidden="true">#</a> sass 和 less</h2><ul><li>都是<code>css</code>预处理器，是<code>css</code>上的一种抽象层，<code>less</code>是一种动态样式语言，将<code>css</code>富裕了动态语言的特性，如变量、继承、运算、函数。</li><li>结构清晰，便于扩展；</li><li>可以方便的屏蔽浏览器私有语法诧异；</li><li>可以轻松实现多重继承；</li><li>完全兼容 CSS 代码</li></ul><h2 id="display-none和visbility-hidden的区别" tabindex="-1"><a class="header-anchor" href="#display-none和visbility-hidden的区别" aria-hidden="true">#</a> <code>display:none</code>和<code>visbility:hidden</code>的区别</h2><p><code>display</code>隐藏对应的元素但不挤占该元素原来的空间，visibility 隐藏病占原来空间</p><h2 id="css中link和-import的区别" tabindex="-1"><a class="header-anchor" href="#css中link和-import的区别" aria-hidden="true">#</a> <code>CSS</code>中<code>link</code>和<code>@import</code>的区别</h2><ul><li><code>link</code>属于<code>html</code>标签，而<code>@import</code>是<code>css</code>中提供的</li><li>在页面加载的时候，<code>link</code>会同时被加载，而<code>@import</code>引用的<code>css</code>会在页面加载完成后才会加载引用的<code>css</code>，</li><li><code>@import</code>只有在<code>ie5</code>以上才可被识别，而<code>link</code>是<code>html</code>标签，不存在浏览器兼容问题</li><li><code>link</code>引入样式的权重大于<code>@import</code>的引用</li></ul><h2 id="简单介绍盒模型" tabindex="-1"><a class="header-anchor" href="#简单介绍盒模型" aria-hidden="true">#</a> 简单介绍盒模型</h2><p><code>css</code>的盒子模型有两种：<code>IE</code>盒子模型、标准的<code>W3C</code>盒子模型</p><ul><li>盒模型：内容、内边距、外边距、边框</li><li><code>IE</code>盒模型宽高为内容、内边距和边框，标准 W3C 盒模型为内容宽高</li></ul><h2 id="bfc是什么" tabindex="-1"><a class="header-anchor" href="#bfc是什么" aria-hidden="true">#</a> <code>BFC</code>是什么</h2><p><code>BFC</code>块级格式化上下文，一个创建了新的<code>BFC</code>的盒子是独立布局的，盒子内元素的布局不会影响盒子外面的元素。在同一个<code>BFC</code>中的两个相邻的盒子在垂直方向发生<code>margin</code>重叠的问题。<code>BFC</code>是指浏览器中创建了一个独立的渲染区域，该区域内所有元素的布局不会影响到区域外元素的布局，这个渲染区域只对块级元素起作用</p><h2 id="html和xhmtl区别" tabindex="-1"><a class="header-anchor" href="#html和xhmtl区别" aria-hidden="true">#</a> <code>HTML</code>和<code>XHMTL</code>区别</h2><ul><li><code>XHTML</code>元素必须被正确的嵌套</li><li><code>XHTML</code>元素必须被关闭</li><li>标签名必须用小写字母</li><li><code>XHTML</code>文档必须拥有根元素</li></ul><h2 id="html常见兼容性问题" tabindex="-1"><a class="header-anchor" href="#html常见兼容性问题" aria-hidden="true">#</a> <code>Html</code>常见兼容性问题</h2><ul><li>双边距，<code>float</code>引起的，使用 d<code>isplay:inline ``-3px</code></li><li>超链接<code>hover</code>点击后失效 使用正确的书写顺序<code>lvha</code></li><li><code>IE</code> <code>z-index</code>问题，给父级添加<code>position:relative</code></li><li><code>Png</code>透明，需要使用<code>JS</code>代码</li><li><code>min-height</code>最小高度</li><li><code>select</code>在<code>IE6</code>下遮盖，使用<code>iframe</code>嵌套</li><li>无法定义<code>1px</code>左右的宽度容器，<code>IE6</code>默认行高造成的，使用<code>over:hidden,zoom:0.08 line-height:1px;</code></li><li><code>IE5-8</code>不支持<code>opacity，opacity:0.4;filter:alpha(opacity=60) /*for IE5-7*/ -ms-filter:&quot;progid:DXImageTransform.Microsoft.Alpha(Opacity=60)&quot;</code></li></ul><h2 id="对web标准以及w3c的理解与认识" tabindex="-1"><a class="header-anchor" href="#对web标准以及w3c的理解与认识" aria-hidden="true">#</a> 对<code>WEB</code>标准以及<code>W3C</code>的理解与认识</h2><p>标签闭合、标签小写、不乱嵌套、提高搜索机器人搜索几率、使用外链<code>CSS</code>和<code>JS</code>脚本、结构行为表现的分离、文件下载与页面速度更快、内容能被更多的用户所访问、内容能被更广泛的设备所反问、更少的代码和组件，容易维护、改版方便，不需要变动页面内容、提供打印版本而不需要复制内容、提高网站易用性</p><h2 id="浏览器渲染机制、重绘、重排" tabindex="-1"><a class="header-anchor" href="#浏览器渲染机制、重绘、重排" aria-hidden="true">#</a> 浏览器渲染机制、重绘、重排</h2><h3 id="网页生成过程" tabindex="-1"><a class="header-anchor" href="#网页生成过程" aria-hidden="true">#</a> 网页生成过程：</h3><ol><li><code>HTML</code>被<code>HTML</code>解析器解析成<code>DOM</code> 树</li><li><code>css</code>则被<code>css</code>解析器解析成<code>CSSOM</code> 树</li><li>结合<code>DOM</code>树和<code>CSSOM</code>树，生成一棵渲染树(<code>Render Tree</code>)</li><li>生成布局（<code>flow</code>），即将所有渲染树的所有节点进行平面合成</li><li>将布局绘制（<code>paint</code>）在屏幕上</li></ol><h3 id="重排-也称回流" tabindex="-1"><a class="header-anchor" href="#重排-也称回流" aria-hidden="true">#</a> 重排(也称回流):</h3><p>当<code>DOM</code>的变化影响了元素的几何信息(<code>DOM</code>对象的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。触发：</p><ol><li>添加或者删除可见的<code>DOM</code>元素</li><li>元素尺寸改变——边距、填充、边框、宽度和高度</li></ol><h3 id="重绘" tabindex="-1"><a class="header-anchor" href="#重绘" aria-hidden="true">#</a> 重绘：</h3><p>当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。<br> 触发：改变元素的<code>color</code>、<code>background</code>、<code>box-shadow</code>等属性</p><h3 id="重排优化建议" tabindex="-1"><a class="header-anchor" href="#重排优化建议" aria-hidden="true">#</a> 重排优化建议：</h3><ol><li>分离读写操作</li><li>样式集中修改</li><li>缓存需要修改的 DOM 元素</li><li>尽量只修改<code>position：absolute</code>或<code>fixed</code>元素，对其他元素影响不大</li><li>动画开始<code>GPU</code>加速，<code>translate</code>使用<code>3D</code>变化</li></ol><p><code>transform</code> 不重绘，不回流<br> 是因为<code>transform</code>属于合成属性，对合成属性进行<code>transition/animate</code>动画时，将会创建一个合成层。这使得动画元素在一个独立的层中进行渲染。当元素的内容没有发生改变，就没有必要进行重绘。浏览器会通过重新复合来创建动画帧。</p><h2 id="dom、bom-对象" tabindex="-1"><a class="header-anchor" href="#dom、bom-对象" aria-hidden="true">#</a> DOM、BOM 对象</h2><ul><li><p><code>BOM（Browser Object Model）</code>是指浏览器对象模型，可以对浏览器窗口进行访问和操作。使用 <code>BOM</code>，开发者可以移动窗口、改变状态栏中的文本以及执行其他与页面内容不直接相关的动作。 使 <code>JavaScript</code> 有能力与浏览器&quot;对话&quot;。</p></li><li><p><code>DOM （Document Object Model）</code>是指文档对象模型，通过它，可以访问<code>HTML</code>文档的所有元素。</p></li><li><p><code>DOM</code> 是 <code>W3C</code>（万维网联盟）的标准。<code>DOM</code> 定义了访问 <code>HTML</code> 和 <code>XML</code> 文档的标准：</p></li><li><p>&quot;<code>W3C</code> 文档对象模型（DOM）是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。&quot;</p></li><li><p><code>W3C</code> <code>DOM</code> 标准被分为 <code>3 </code>个不同的部分：</p><ul><li><code>核心DOM</code> - 针对任何结构化文档的标准模型</li><li><code>XML DOM</code> - 针对 XML 文档的标准模型</li><li><code>HTML DOM</code> - 针对 HTML 文档的标准模型</li></ul></li></ul><h2 id="什么是-xml-dom" tabindex="-1"><a class="header-anchor" href="#什么是-xml-dom" aria-hidden="true">#</a> 什么是 <code>XML DOM</code>？</h2><p><code>XML DOM</code> 定义了所有 <code>XML</code> 元素的对象和属性，以及访问它们的方法。</p><h2 id="什么是-html-dom" tabindex="-1"><a class="header-anchor" href="#什么是-html-dom" aria-hidden="true">#</a> 什么是 <code>HTML DOM</code>？</h2><p><code>HTML DOM</code> 定义了所有 <code>HTML</code> 元素的对象和属性，以及访问它们的方法。</p>',92),l=[a];function r(h,s){return d(),o("div",null,l)}const u=e(i,[["render",r],["__file","html.html.vue"]]);export{u as default};
