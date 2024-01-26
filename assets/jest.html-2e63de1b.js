import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as l}from"./app-fd217ae5.js";const p={},o=l(`<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">jest jest.test.js </span><span style="color:#56B6C2;">--</span><span style="color:#ABB2BF;">watch</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;puls matcher&#39;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toBe</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">).</span><span style="color:#E5C07B;">not</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toBe</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;boolean matcher&#39;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toBeTruthy</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toBeFalsy</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;number matcher&#39;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toBeGreaterThan</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toBeLessThan</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;obj matcher&#39;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Jim&#39;</span><span style="color:#ABB2BF;"> }).</span><span style="color:#61AFEF;">toEqual</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Jim&#39;</span><span style="color:#ABB2BF;"> })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>button.test.tsx</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">React</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;react&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">render</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">fireEvent</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;@testing-library/react&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;">ButtonProps</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">ButtonType</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;./index&#39;</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">defaultProps</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">onClick</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">jest</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">testProps</span><span style="color:#ABB2BF;">:</span><span style="color:#E5C07B;">ButtonProps</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">className</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;my-class&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">btnType</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">ButtonType</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">Primary</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">linkProps</span><span style="color:#ABB2BF;">:</span><span style="color:#E5C07B;">ButtonProps</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">btnType</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">ButtonType</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">Link</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">to</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;http://www.baidu.com&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">disabledProps</span><span style="color:#ABB2BF;">:</span><span style="color:#E5C07B;">ButtonProps</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">disabled</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">onClick</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">jest</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#61AFEF;">describe</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;test Button component&#39;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">it</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;should render the correct default button&#39;</span><span style="color:#ABB2BF;">,() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">wrapper</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(&lt;</span><span style="color:#E5C07B;">Button</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">{</span><span style="color:#ABB2BF;">...</span><span style="color:#E06C75;">defaultProps</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">&gt;First&lt;/</span><span style="color:#E5C07B;">Button</span><span style="color:#ABB2BF;">&gt;)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">element</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">wrapper</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getByText</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;First&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">HTMLButtonElement</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">element</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toBeInTheDocument</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">element</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">tagName</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toEqual</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;BUTTON&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">element</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toHaveClass</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;btn btn-default&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">element</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">disabled</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toBeFalsy</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">fireEvent</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">click</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">element</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">defaultProps</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">onClick</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toHaveBeenCalled</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">it</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;should primary button&#39;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">wrapper</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(&lt;</span><span style="color:#E5C07B;">Button</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">{</span><span style="color:#ABB2BF;">...</span><span style="color:#E06C75;">testProps</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">&gt;Primary&lt;/</span><span style="color:#E5C07B;">Button</span><span style="color:#ABB2BF;">&gt;)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">element</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">wrapper</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getByText</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Primary&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">element</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toBeInTheDocument</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">element</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toHaveClass</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;btn btn-primary&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">it</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;should link button&#39;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">wrapper</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(&lt;</span><span style="color:#E5C07B;">Button</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">{</span><span style="color:#ABB2BF;">...</span><span style="color:#E06C75;">linkProps</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">&gt;Link&lt;/</span><span style="color:#E5C07B;">Button</span><span style="color:#ABB2BF;">&gt;)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">element</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">wrapper</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getByText</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Link&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">element</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toBeInTheDocument</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">element</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">tagName</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toEqual</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;A&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">element</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toHaveClass</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;btn btn-link&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">it</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;should disabled button&#39;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">wrapper</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(&lt;</span><span style="color:#E5C07B;">Button</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">{</span><span style="color:#ABB2BF;">...</span><span style="color:#E06C75;">disabledProps</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">&gt;Disabled&lt;/</span><span style="color:#E5C07B;">Button</span><span style="color:#ABB2BF;">&gt;)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">element</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">wrapper</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getByText</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Disabled&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">HTMLButtonElement</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">element</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toBeInTheDocument</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">element</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">disabled</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toBeTruthy</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">fireEvent</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">click</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">element</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">defaultProps</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">onClick</span><span style="color:#ABB2BF;">).</span><span style="color:#E5C07B;">not</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toHaveBeenCalled</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-- -t &#39;button&#39; </code>只测试部分组件</p>`,5),e=[o];function B(t,c){return n(),a("div",null,e)}const F=s(p,[["render",B],["__file","jest.html.vue"]]);export{F as default};