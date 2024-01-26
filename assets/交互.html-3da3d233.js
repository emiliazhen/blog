const s=JSON.parse('{"key":"v-c1425adc","path":"/canvas/cesium/%E4%BA%A4%E4%BA%92.html","title":"canvas","lang":"zh-CN","frontmatter":{"title":"canvas","date":"2022-01-15T00:00:00.000Z","category":"canvas"},"headers":[{"level":2,"title":"视角","slug":"视角","link":"#视角","children":[]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[]},{"level":2,"title":"添加自带三维模型建筑","slug":"添加自带三维模型建筑","link":"#添加自带三维模型建筑","children":[]}],"git":{},"readingTime":{"minutes":0.55,"words":164},"filePathRelative":"canvas/cesium/交互.md","localizedDate":"2022年1月15日","excerpt":"<h2> 视角</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">// setView瞬间到达指定位置，视角 flyTo动态飞往</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">// 天安门position</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">var</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">position</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">Cesium</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E5C07B\\">Cartesian3</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">fromDegrees</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">116.397428</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #D19A66\\">39.90923</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #D19A66\\">100</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E5C07B\\">viewer</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E5C07B\\">camera</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">flyTo</span><span style=\\"color: #ABB2BF\\">({</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #7F848E; font-style: italic\\">// 指定相机位置</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #E06C75\\">destination</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #E06C75\\">position</span><span style=\\"color: #ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #7F848E; font-style: italic\\">// 设置相机视角</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #E06C75\\">orientation</span><span style=\\"color: #ABB2BF\\">: {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #7F848E; font-style: italic\\">// 相机朝向</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E06C75\\">heading</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #E5C07B\\">Cesium</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E5C07B\\">Math</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">toRadians</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">),</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #7F848E; font-style: italic\\">// 相机俯仰角 -90向下</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E06C75\\">path</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #E5C07B\\">Cesium</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E5C07B\\">Math</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">toRadians</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #D19A66\\">90</span><span style=\\"color: #ABB2BF\\">),</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #7F848E; font-style: italic\\">// 相机翻滚角度</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E06C75\\">roll</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  },</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">})</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{s as data};
