const s=JSON.parse(`{"key":"v-eacce7c2","path":"/react/react16.8_.html","title":"react16.8+","lang":"zh-CN","frontmatter":{"title":"react16.8+","date":"2018-03-21T00:00:00.000Z","category":"react","order":3,"icon":"react"},"headers":[{"level":2,"title":"useRef","slug":"useref","link":"#useref","children":[]},{"level":2,"title":"react-router","slug":"react-router","link":"#react-router","children":[{"level":3,"title":"版本< v6","slug":"版本-v6","link":"#版本-v6","children":[]},{"level":3,"title":"switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"使用 v6","slug":"使用-v6","link":"#使用-v6","children":[]}]},{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[{"level":3,"title":"挂载阶段","slug":"挂载阶段","link":"#挂载阶段","children":[]},{"level":3,"title":"更新阶段","slug":"更新阶段","link":"#更新阶段","children":[]},{"level":3,"title":"卸载阶段","slug":"卸载阶段","link":"#卸载阶段","children":[]}]},{"level":2,"title":"使用 css 模块化","slug":"使用-css-模块化","link":"#使用-css-模块化","children":[]},{"level":2,"title":"hooks","slug":"hooks","link":"#hooks","children":[{"level":3,"title":"解决了","slug":"解决了","link":"#解决了","children":[]},{"level":3,"title":"useState","slug":"usestate","link":"#usestate","children":[]},{"level":3,"title":"useEffect","slug":"useeffect","link":"#useeffect","children":[]},{"level":3,"title":"清理副作用","slug":"清理副作用","link":"#清理副作用","children":[]},{"level":3,"title":"自定义 Hook","slug":"自定义-hook","link":"#自定义-hook","children":[]},{"level":3,"title":"Hooks 进阶","slug":"hooks-进阶","link":"#hooks-进阶","children":[]},{"level":3,"title":"useRef","slug":"useref-1","link":"#useref-1","children":[]},{"level":3,"title":"useContext","slug":"usecontext","link":"#usecontext","children":[]}]},{"level":2,"title":"Mobx","slug":"mobx","link":"#mobx","children":[{"level":3,"title":"react 使用","slug":"react-使用","link":"#react-使用","children":[]}]}],"git":{},"readingTime":{"minutes":10.02,"words":3006},"filePathRelative":"react/react16.8+.md","localizedDate":"2018年3月21日","excerpt":"<h2> useRef</h2>\\n<div class=\\"language-jsx line-numbers-mode\\" data-ext=\\"jsx\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #C678DD\\">import</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">React</span><span style=\\"color: #ABB2BF\\">, { </span><span style=\\"color: #E06C75\\">useState</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E06C75\\">useEffect</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E06C75\\">useRef</span><span style=\\"color: #ABB2BF\\"> } </span><span style=\\"color: #C678DD\\">from</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'react'</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">LikeButton</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #E5C07B\\">React</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E5C07B\\">FC</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> () </span><span style=\\"color: #C678DD\\">=&gt;</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> [</span><span style=\\"color: #E5C07B\\">like</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E5C07B\\">setLike</span><span style=\\"color: #ABB2BF\\">] </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">useState</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">likeRef</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">useRef</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">didMountRef</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">useRef</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">false</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">inputRef</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">useRef</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">HTMLInputElement</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&gt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">null</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #61AFEF\\">useEffect</span><span style=\\"color: #ABB2BF\\">(() </span><span style=\\"color: #C678DD\\">=&gt;</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E5C07B\\">document</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">title</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\`点击了</span><span style=\\"color: #C678DD\\">\${</span><span style=\\"color: #E06C75\\">like</span><span style=\\"color: #C678DD\\">}</span><span style=\\"color: #98C379\\">次\`</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  }, [</span><span style=\\"color: #E06C75\\">like</span><span style=\\"color: #ABB2BF\\">])</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #61AFEF\\">useEffect</span><span style=\\"color: #ABB2BF\\">(() </span><span style=\\"color: #C678DD\\">=&gt;</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E5C07B\\">didMountRef</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">current</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #E5C07B\\">console</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">log</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #98C379\\">'did mounted'</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    } </span><span style=\\"color: #C678DD\\">else</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #E5C07B\\">didMountRef</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">current</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">true</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  })</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">btnClick</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> () </span><span style=\\"color: #C678DD\\">=&gt;</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #61AFEF\\">setLike</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">like</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">+</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E5C07B\\">likeRef</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">current</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">likeRef</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">current</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">+</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E06C75\\">inputRef</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&amp;&amp;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">inputRef</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">current</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #E5C07B\\">inputRef</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E5C07B\\">current</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">focus</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">consoleLike</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> () </span><span style=\\"color: #C678DD\\">=&gt;</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #61AFEF\\">setTimeout</span><span style=\\"color: #ABB2BF\\">(() </span><span style=\\"color: #C678DD\\">=&gt;</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #E5C07B\\">console</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">log</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">like</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #98C379\\">'like'</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #E5C07B\\">console</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">log</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">likeRef</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }, </span><span style=\\"color: #D19A66\\">2000</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> (</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    &lt;&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      &lt;</span><span style=\\"color: #E06C75\\">input</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66; font-style: italic\\">type</span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #98C379\\">\\"text\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66; font-style: italic\\">ref</span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #C678DD\\">{</span><span style=\\"color: #E06C75\\">inputRef</span><span style=\\"color: #C678DD\\">}</span><span style=\\"color: #ABB2BF\\"> /&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      &lt;</span><span style=\\"color: #E06C75\\">button</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66; font-style: italic\\">onClick</span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #C678DD\\">{</span><span style=\\"color: #E06C75\\">consoleLike</span><span style=\\"color: #C678DD\\">}</span><span style=\\"color: #ABB2BF\\">&gt;console&lt;/</span><span style=\\"color: #E06C75\\">button</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      &lt;</span><span style=\\"color: #E06C75\\">button</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66; font-style: italic\\">onClick</span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #C678DD\\">{</span><span style=\\"color: #E06C75\\">btnClick</span><span style=\\"color: #C678DD\\">}</span><span style=\\"color: #ABB2BF\\">&gt;👍 +</span><span style=\\"color: #C678DD\\">{</span><span style=\\"color: #E06C75\\">like</span><span style=\\"color: #C678DD\\">}</span><span style=\\"color: #ABB2BF\\">&lt;/</span><span style=\\"color: #E06C75\\">button</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    &lt;/&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  )</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">export</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">default</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">LikeButton</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{s as data};
