import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as l}from"./app-fd217ae5.js";const p={},o=l(`<p><code>canvas</code>是<code>HTML5</code>提供的一种元素<br><code>canvas</code>是一个矩形区域，我们可以用 <code>JS</code>在上面绘画，控制其每一像素<br><code>canvas</code>拥有多种绘制路径、矩形、原型、字符以及添加图像的方法<br><code>cansvas</code>用<code>width</code>和<code>height</code>属性指定画布内容的宽高，单位只能是像素</p><h2 id="context-对象" tabindex="-1"><a class="header-anchor" href="#context-对象" aria-hidden="true">#</a> Context 对象</h2><p><code>canvas</code>的上下文、绘制环境 <code>CanvasElement.getContext(&#39;2d&#39;)</code>获取 2D 绘图上下文；<code>webgl</code>-<code>3D</code>模式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">canvas</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;canvas&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">canvas</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getContext</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;2d&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">canvas</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">width</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">800</span></span>
<span class="line"><span style="color:#E5C07B;">canvas</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">600</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;"> </th><th style="text-align:left;"> </th></tr></thead><tbody><tr><td style="text-align:left;">sin(θ)</td><td style="text-align:left;">Math.sin(θ <code>*</code> Math.PI <code>/</code> 180)</td></tr><tr><td style="text-align:left;">cos(θ)</td><td style="text-align:left;">Math.cos(θ <code>*</code> Math.PI <code>/</code> 180)</td></tr><tr><td style="text-align:left;">tan(θ)</td><td style="text-align:left;">Math.tan(θ <code>*</code> Math.PI <code>/</code> 180)</td></tr><tr><td style="text-align:left;">arcsin(a<code>/</code>c)</td><td style="text-align:left;">Math.asin(y<code>/</code>c) <code>*</code> 180 <code>/</code> Math.PI</td></tr><tr><td style="text-align:left;">arccos(a<code>/</code>c)</td><td style="text-align:left;">Math.acos(x<code>/</code>c) <code>*</code> 180 <code>/</code> Math.PI</td></tr><tr><td style="text-align:left;">arctan(a<code>/</code>c)</td><td style="text-align:left;">Math.atan(y<code>/</code>x) <code>*</code> 180 <code>/</code> Math.PI</td></tr></tbody></table><p><code>arctan</code>在轴的第一第三区域都为负角度,换用<code>atan2(y,x)</code>来计算</p><p>新建<code>utils.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">Utils</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 获取鼠标在元素上的坐标</span></span>
<span class="line"><span style="color:#E5C07B;">Utils</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getOffset</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">ele</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">mouse</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">y</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ele</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addEventListener</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;mousemove&#39;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">y</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Utils</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">eventWrapper</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">e</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">mouse</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">x</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">mouse</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">y</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">y</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">mouse</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 坐标系转换</span></span>
<span class="line"><span style="color:#E5C07B;">Utils</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">eventWrapper</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">pageX</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">pageY</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">target</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">e</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">left</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">top</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">target</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getBoundingClientRect</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">pageX</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">left</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">y</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">pageY</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">top</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 角度转弧度</span></span>
<span class="line"><span style="color:#E5C07B;">Utils</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toRad</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">angle</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">angle</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Math</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">PI</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">180</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 弧度转角度</span></span>
<span class="line"><span style="color:#E5C07B;">Utils</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toAngle</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">rad</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">rad</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">180</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Math</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">PI</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头跟随鼠标转动</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Arrow</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">constructor</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">props</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">y</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">60</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">h</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">30</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">rotation</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">fillStyle</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;rgb(57,119,224)&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">strokeStyle</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;rgba(0,0,0,0)&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">assign</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">createPath</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">w</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">h</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">beginPath</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">moveTo</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">h</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">lineTo</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">h</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">lineTo</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">h</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">lineTo</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">lineTo</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">h</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">lineTo</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">h</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">lineTo</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">h</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">closePath</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">save</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">fillStyle</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">fillStyle</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">strokeStyle</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">strokeStyle</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">translate</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">y</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">rotate</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">rotation</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createPath</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ctx</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">fill</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stroke</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">restore</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arrow</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Arrow</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">y</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">h</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">180</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">h</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">60</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">}).</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ctx</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">canvas</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onmousemove</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">dx</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">mouse</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arrow</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">x</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">dy</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">mouse</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">y</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arrow</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">y</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">arrow</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">rotation</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Math</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">atan2</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">dy</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">dx</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">clearRect</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">h</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">arrow</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ctx</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>平滑运动 <code>Math.sin</code>的值为<code>1</code>到<code>-1</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ball</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Ball</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">y</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">h</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">50</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">}).</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ctx</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">angle</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">swing</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">160</span></span>
<span class="line"><span style="color:#ABB2BF;">;(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">move</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">requestAnimationFrame</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">move</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">clearRect</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">h</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ball</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">w</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Math</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sin</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">angle</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">swing</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">angle</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0.05</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">angle</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">%=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Math</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">PI</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ball</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ctx</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">})()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>圆极坐标 <code>x=r*cosθ y=r*sinθ</code> 椭圆极坐标 <code>x=a*cosθ y=b*sinθ</code></p>`,13),e=[o];function B(c,t){return n(),a("div",null,e)}const i=s(p,[["render",B],["__file","canvas.html.vue"]]);export{i as default};