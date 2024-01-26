import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as l}from"./app-fd217ae5.js";const e={},p=l(`<h2 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">npx sb init </span><span style="color:#56B6C2;">--</span><span style="color:#ABB2BF;">builder storybook</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">builder</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">vite</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>package.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;devDependencies&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@babel/core&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^7.17.8&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@storybook/addon-actions&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^6.4.20&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@storybook/addon-essentials&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^6.4.20&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@storybook/addon-links&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^6.4.20&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@storybook/vue&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^6.4.20&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;babel-loader&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^8.2.4&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;sass&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^1.48.0&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;storybook-builder-vite&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^0.1.23&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vite&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^2.7.2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vite-plugin-vue2&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^1.9.2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vue-loader&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^15.9.8&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a> vue/cli</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">npx </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">p </span><span style="color:#E06C75;">@storybook</span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;">cli sb init</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>package.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;devDependencies&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@babel/core&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^7.17.8&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@storybook/addon-actions&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^6.4.20&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@storybook/addon-essentials&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^6.4.20&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@storybook/addon-links&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^6.4.20&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@storybook/vue&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^6.4.20&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@vue/cli-plugin-babel&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;~4.5.17&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@vue/cli-service&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;~4.5.17&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;babel-loader&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^8.2.4&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;file-loader&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^6.2.0&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;url-loader&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^4.1.1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vue-loader&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^15.9.8&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vue-template-compiler&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;^2.6.11&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.storybook/main.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">stories</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&#39;../stories/**/*.stories.mdx&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// &quot;../stories/**/*.stories.@(js|jsx|ts|tsx)&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">addons</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;@storybook/addon-links&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;@storybook/addon-essentials&#39;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">framework</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;@storybook/vue&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.storybook/manager.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">addons</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;@storybook/addons&#39;</span></span>
<span class="line"><span style="color:#E5C07B;">addons</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setConfig</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">previewTabs</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// &#39;storybook/docs/panel&#39;: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//     index: -1,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//     title: &#39;Dox&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// &#39;canvas&#39;: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//   hidden: true,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.storybook/preview.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">Vue</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">ElementUI</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;element-ui&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;element-ui/lib/theme-chalk/index.css&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">VueKonva</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-konva&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;../stories/assets/style/normalize.css&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;../stories/assets/style/common.css&#39;</span></span>
<span class="line"><span style="color:#E5C07B;">Vue</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">VueKonva</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">Vue</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ElementUI</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">size</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;mini&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">parameters</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">actions</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">argTypesRegex</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;^on[A-Z].*&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">controls</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">matchers</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">color</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;"> /(background</span><span style="color:#ABB2BF;">|</span><span style="color:#E06C75;">color)</span><span style="color:#C678DD;">$</span><span style="color:#E06C75;">/</span><span style="color:#C678DD;">i</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">date</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;"> /Date</span><span style="color:#C678DD;">$</span><span style="color:#E06C75;">/</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">expanded</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// 展开所有参数信息</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>stories/shapes.stories.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">shapes</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;./shapes&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Template</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">args</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;font-style:italic;">argTypes</span><span style="color:#ABB2BF;"> }) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> ({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">keys</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">argTypes</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">components</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">shapes</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&lt;shapes @onDropStart=&quot;onDropStart&quot; @onDropEnd=&quot;onDropEnd&quot; @onClickItem=&quot;onClickItem&quot; @onClickPort=&quot;onClickPort&quot; @onItemDragEnd=&quot;onItemDragEnd&quot;/&gt;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">shapesInit</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Template</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">bind</span><span style="color:#ABB2BF;">({});</span></span>
<span class="line"><span style="color:#E5C07B;">shapesInit</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">storyName</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;Init 初始化&#39;</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {}</span></span>
<span class="line"><span style="color:#E06C75;">stories</span><span style="color:#56B6C2;">/</span><span style="color:#E5C07B;">shapes</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">stories</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">mdx</span></span>
<span class="line"><span style="color:#ABB2BF;">\\</span><span style="color:#98C379;">\`\`\`mdx</span></span>
<span class="line"><span style="color:#98C379;">  import { Meta, Story} from &#39;@storybook/addon-docs&#39;</span></span>
<span class="line"><span style="color:#98C379;">  import { shapesInit } from &#39;./shapes.stories.js&#39;;</span></span>
<span class="line"><span style="color:#98C379;">  import shapes from &#39;./shapes&#39;;</span></span>
<span class="line"><span style="color:#98C379;">  # 形状</span></span>
<span class="line"><span style="color:#98C379;">  定义好每个图元的基础形状后在Home页实例化，将点击和拖拽方法传给图元，最后添加到图层后调用定义好的动画方法。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">  ## Example</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">  &lt;Story</span></span>
<span class="line"><span style="color:#98C379;">    decorators={[</span></span>
<span class="line"><span style="color:#98C379;">      () =&gt; ({</span></span>
<span class="line"><span style="color:#98C379;">        template: &#39;&lt;div id=&quot;custom-root&quot; style=&quot;background: red;&quot;&gt;&lt;story /&gt;&lt;/div&gt;&#39;,</span></span>
<span class="line"><span style="color:#98C379;">      })</span></span>
<span class="line"><span style="color:#98C379;">    ]}</span></span>
<span class="line"><span style="color:#98C379;">    story={shapesInit} /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">  ### 定义形状/属性/动画</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">  图元形状类继承于\`</span><span style="color:#E5C07B;">Konva</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Group</span><span style="color:#98C379;">\`，定义好每个小几何后组合到Group里；</span></span>
<span class="line"><span style="color:#98C379;">  创建接线柱，默认隐藏，鼠标移入时才显示；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">  </span><span style="color:#56B6C2;">\\\`</span><span style="color:#98C379;">\`\`js</span></span>
<span class="line"><span style="color:#98C379;">  // 公共形状，继承于Konva的组，用组方便整体拖拽和属性绑定</span></span>
<span class="line"><span style="color:#98C379;">  class hr2dShape extends Konva.Group {</span></span>
<span class="line"><span style="color:#98C379;">    constructor(x,y){</span></span>
<span class="line"><span style="color:#98C379;">      super()</span></span>
<span class="line"><span style="color:#98C379;">      this.x(x) // x位置</span></span>
<span class="line"><span style="color:#98C379;">      this.y(y) // y位置</span></span>
<span class="line"><span style="color:#98C379;">      this.draggable(true) // 图元拖拽</span></span>
<span class="line"><span style="color:#98C379;">    }</span></span>
<span class="line"><span style="color:#98C379;">    titleArea = new Konva.Text({ // 标题文字区域</span></span>
<span class="line"><span style="color:#98C379;">      x: 0,</span></span>
<span class="line"><span style="color:#98C379;">      y: -12,</span></span>
<span class="line"><span style="color:#98C379;">      text: &#39;&#39;,</span></span>
<span class="line"><span style="color:#98C379;">      fontSize: FontSize,</span></span>
<span class="line"><span style="color:#98C379;">      fill: ColorText</span></span>
<span class="line"><span style="color:#98C379;">    })</span></span>
<span class="line"><span style="color:#98C379;">    changeScale(v){ // 更改缩放确定后方法</span></span>
<span class="line"><span style="color:#98C379;">      this.scale({x:v,y:v})</span></span>
<span class="line"><span style="color:#98C379;">    }</span></span>
<span class="line"><span style="color:#98C379;">    changeTitle(title){ // 更改标题后方法</span></span>
<span class="line"><span style="color:#98C379;">      this.titleArea.text(title)</span></span>
<span class="line"><span style="color:#98C379;">    }</span></span>
<span class="line"><span style="color:#98C379;">  }</span></span>
<span class="line"><span style="color:#98C379;">  </span><span style="color:#56B6C2;">\\\`</span><span style="color:#98C379;">\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">  ### 图元实例化</span></span>
<span class="line"><span style="color:#98C379;">  给左边添加图元面板下所有项添加draggable属性，绑定拖拽开始事件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">  </span><span style="color:#56B6C2;">\\\`</span><span style="color:#98C379;">\`\`html</span></span>
<span class="line"><span style="color:#98C379;">  &lt;ul&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li v-for=&quot;v in shapeList&quot; :key=&quot;v.id&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">      &lt;div draggable @dragstart=&quot;dragStart(v.id)&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">        &lt;p&gt;{{v.name}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#98C379;">        &lt;img :src=&quot;imgListRender(v.img)&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#98C379;">  </span><span style="color:#56B6C2;">\\\`</span><span style="color:#98C379;">\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">  在开始拖拽时，记录下当前拖拽的id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">  </span><span style="color:#56B6C2;">\\\`</span><span style="color:#98C379;">\`\`js</span></span>
<span class="line"><span style="color:#98C379;">  // 拖拽开始</span></span>
<span class="line"><span style="color:#98C379;">  dragStart(i){</span></span>
<span class="line"><span style="color:#98C379;">    this.dragIndex = i</span></span>
<span class="line"><span style="color:#98C379;">  },</span></span>
<span class="line"><span style="color:#98C379;">  </span><span style="color:#56B6C2;">\\\`</span><span style="color:#98C379;">\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">  释放时判断类型，并实例化图元，将在页面写好的点击图元方法、点击接线柱方法、元素拖拽方法传给每个图元</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">  </span><span style="color:#56B6C2;">\\\`</span><span style="color:#98C379;">\`\`js</span></span>
<span class="line"><span style="color:#98C379;">  // 释放</span></span>
<span class="line"><span style="color:#98C379;">  drop(e){</span></span>
<span class="line"><span style="color:#98C379;">    e.preventDefault()</span></span>
<span class="line"><span style="color:#98C379;">    if(this.dragIndex === -1){</span></span>
<span class="line"><span style="color:#98C379;">      return</span></span>
<span class="line"><span style="color:#98C379;">    }</span></span>
<span class="line"><span style="color:#98C379;">    const {x:diffX,y: diffY} = this.$refs.stageWrap.getBoundingClientRect() // 获取画布距离左上顶点的坐标</span></span>
<span class="line"><span style="color:#98C379;">    const layer = this.$refs.layer.getNode() // 获取图层</span></span>
<span class="line"><span style="color:#98C379;">    const {x,y} =  toRealPosition(e.x - diffX, e.y - diffY)</span></span>
<span class="line"><span style="color:#98C379;">    if(this.dragIndex === 1){ // 主泵</span></span>
<span class="line"><span style="color:#98C379;">      const reactor = new ReactorShape(x, y) // 实例化</span></span>
<span class="line"><span style="color:#98C379;">      layer.add(reactor)</span></span>
<span class="line"><span style="color:#98C379;">      reactor.runAnim() // 动画</span></span>
<span class="line"><span style="color:#98C379;">    }  else if(this.dragIndex === 12){ // 管道节</span></span>
<span class="line"><span style="color:#98C379;">      this.curPipeBendX = x // 当前点X</span></span>
<span class="line"><span style="color:#98C379;">      this.curPipeBendY = y // 当前点Y</span></span>
<span class="line"><span style="color:#98C379;">      this.pipeBendTypeVisible = true // 管道节选择弹窗显示</span></span>
<span class="line"><span style="color:#98C379;">    }</span></span>
<span class="line"><span style="color:#98C379;">    this.dragIndex = -1 // 重置</span></span>
<span class="line"><span style="color:#98C379;">  }</span></span>
<span class="line"><span style="color:#98C379;">  </span><span style="color:#56B6C2;">\\\`</span><span style="color:#98C379;">\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">  &lt;Meta</span></span>
<span class="line"><span style="color:#98C379;">    title=&quot;Example/Shapes 形状&quot;</span></span>
<span class="line"><span style="color:#98C379;">    component={shapes}</span></span>
<span class="line"><span style="color:#98C379;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[p];function i(c,r){return n(),a("div",null,o)}const d=s(e,[["render",i],["__file","storybook.html.vue"]]);export{d as default};
