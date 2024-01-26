import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as l}from"./app-fd217ae5.js";const p={},o=l(`<h2 id="三维模型" tabindex="-1"><a class="header-anchor" href="#三维模型" aria-hidden="true">#</a> 三维模型</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 飞机3D模型</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">plane</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">viewer</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">entities</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;plane&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">position</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Cartesian3</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">fromDegrees</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">101.397428</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">39.90923</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">100000</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">model</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">uri</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/models/CesiumAir/Cesium_Air.gltf&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 模型最小像素</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">minimumPixelSize</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">128</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 最大的模型像素</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">maximumScale</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">20000</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//是否显示动画</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">runAnimations</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//是否保持最后一针的动画</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">clampAnimations</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 轮廓</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">silhouetteSize</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 轮廓颜色</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">silhouetteColor</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Color</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">WHITE</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 相机距离模型多远显示</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 200000),</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#E5C07B;">viewer</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">trackedEntity</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">plane</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签、点、广告牌" tabindex="-1"><a class="header-anchor" href="#标签、点、广告牌" aria-hidden="true">#</a> 标签、点、广告牌</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 创建一个标签</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">tianAnMenId</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">tianAnMenPoint</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">viewer</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">entities</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">position</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Cartesian3</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">fromDegrees</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">116.397428</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">39.90923</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 点</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">point</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">pixelSize</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">color</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Color</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">RED</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">outlineColor</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Color</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">WHITE</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">outlineWidth</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 标签</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">label</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;天安门&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">font</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;24px sans-serif&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">fillColor</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Color</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">WHITE</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">outlineColor</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Color</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">BLACK</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">outlineWidth</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// FULL填充文字 OUTLINE描边 FILL_AND_OUTLINE填充加描边</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">LabelStyle</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">FILL_AND_OUTLINE</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 文字偏移量</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">pixelOffset</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Cartesian2</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">24</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">horizontalOrigin</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">HorizontalOrigin</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">CENTER</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">verticalOrigin</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">VerticalOrigin</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">BOTTOM</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 广告牌</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">billboard</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">image</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/images/tian_an_men.png&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">40</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">40</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">pixelOffset</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Cartesian2</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">65</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">15</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">horizontalOrigin</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">HorizontalOrigin</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">CENTER</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">verticalOrigin</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">VerticalOrigin</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">BOTTOM</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#E06C75;">tianAnMenId</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">tianAnMenPoint</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">id</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线" tabindex="-1"><a class="header-anchor" href="#线" aria-hidden="true">#</a> 线</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">orangeOutlined</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">viewer</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">entities</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Orange line with black outline at height and following the surface&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">polyline</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">positions</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Cartesian3</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">fromDegreesArrayHeights</span><span style="color:#ABB2BF;">([</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">75</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">39</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">250000</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">125</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">39</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">250000</span><span style="color:#ABB2BF;">]),</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">material</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">PolylineOutlineMaterialProperty</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">color</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Color</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">ORANGE</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">outlineWidth</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">outlineColor</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Color</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">BLACK</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    }),</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">purpleArrow</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">viewer</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">entities</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Purple straight arrow at height&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">polyline</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">positions</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Cartesian3</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">fromDegreesArrayHeights</span><span style="color:#ABB2BF;">([</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">75</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">43</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">500000</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">125</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">43</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">500000</span><span style="color:#ABB2BF;">]),</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">arcType</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">ArcType</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">NONE</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">material</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">PolylineArrowMaterialProperty</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Color</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">PURPLE</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">dashedLine</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">viewer</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">entities</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Blue dashed line&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">polyline</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">positions</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Cartesian3</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">fromDegreesArrayHeights</span><span style="color:#ABB2BF;">([</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">75</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">45</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">500000</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">125</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">45</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">500000</span><span style="color:#ABB2BF;">]),</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">material</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">PolylineDashMaterialProperty</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">color</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Cesium</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Color</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">CYAN</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    }),</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),e=[o];function B(c,r){return n(),a("div",null,e)}const y=s(p,[["render",B],["__file","实体.html.vue"]]);export{y as default};
