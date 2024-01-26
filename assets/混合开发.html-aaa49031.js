import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,a}from"./app-fd217ae5.js";const l={},i=a(`<h2 id="flutter-与-android-混合开发" tabindex="-1"><a class="header-anchor" href="#flutter-与-android-混合开发" aria-hidden="true">#</a> flutter 与 Android 混合开发</h2><p>在原生项目的上一级，创建<code>flutter</code>模块</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">flutter create </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">t module flutter_module</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Java</code>代码中调用<code>Flutter Module</code></p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">flutter.createView</span></span>
<span class="line"><span style="color:#ABB2BF;">FlutterFragment</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flutter-与-ios-混合开发" tabindex="-1"><a class="header-anchor" href="#flutter-与-ios-混合开发" aria-hidden="true">#</a> Flutter 与 iOS 混合开发</h2><p><code>OC</code>代码中调用<code>Flutter</code>代码</p><ul><li>方式 1：<code>FlutterViewController</code></li><li>方式 2: <code>FlutterEngin</code> 混合开发中开启热重载</li></ul><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">flutter attach </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">d &lt;deviceId&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="flutter-与-ios-混合开发中调用-dart-代码" tabindex="-1"><a class="header-anchor" href="#flutter-与-ios-混合开发中调用-dart-代码" aria-hidden="true">#</a> Flutter 与 iOS 混合开发中调用 Dart 代码</h2><ol><li>关闭模拟器正在运行的<code>App</code></li><li>在<code>AndroidStudio</code>中通过图形化工具执行<code>Flutter Attach</code></li><li>在<code>Dart</code>代码中打断点</li><li>在模拟器中启动之前关闭的<code>App</code></li></ol><h2 id="flutter-与-native-通信" tabindex="-1"><a class="header-anchor" href="#flutter-与-native-通信" aria-hidden="true">#</a> Flutter 与 Native 通信</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># BasicMessageChannel</span></span>
<span class="line"><span style="color:#ABB2BF;">        持续的双向通信，Flutter可以给Native发消息并且接收消息，Native也可以给Flutter发消息并且接收消息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># MethodChannel</span></span>
<span class="line"><span style="color:#ABB2BF;">        Flutter调用Native的方法，比如Flutter调用Native的相机，实现拍照功能</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># EventChannel</span></span>
<span class="line"><span style="color:#ABB2BF;">        非持续性的双向通信，例如Flutter中监听Native中手机电量、网络状态的变化</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Flutter</code>中消息的传递完全是异步的</p><h2 id="flutter-与-ios-通信" tabindex="-1"><a class="header-anchor" href="#flutter-与-ios-通信" aria-hidden="true">#</a> Flutter 与 iOS 通信</h2><p>BasicMessageChannel</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># iOS端</span></span>
<span class="line"><span style="color:#ABB2BF;">sendMessageHandler</span></span>
<span class="line"><span style="color:#ABB2BF;">接收Flutter端发来的消息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">sendMessage</span></span>
<span class="line"><span style="color:#ABB2BF;">发送消息给Flutter端</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Flutter端</span></span>
<span class="line"><span style="color:#ABB2BF;">sendMessageHandler</span></span>
<span class="line"><span style="color:#ABB2BF;">接收Native端发来的消息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">Future&lt;T&gt; send</span></span>
<span class="line"><span style="color:#ABB2BF;">传递数据给Native端，可以通过Future获取到Native端返回的结果</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MethodChannel</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># iOS端</span></span>
<span class="line"><span style="color:#ABB2BF;">setMethodCallHandler</span></span>
<span class="line"><span style="color:#ABB2BF;">接收处理Flutter传递过来的函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Flutter端</span></span>
<span class="line"><span style="color:#ABB2BF;">Future&lt;T&gt; invokeMethod</span></span>
<span class="line"><span style="color:#ABB2BF;">Flutter调用Native的方法</span></span>
<span class="line"><span style="color:#ABB2BF;">EventChannel</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># iOS端</span></span>
<span class="line"><span style="color:#ABB2BF;">setStreamHandler</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Flutter端</span></span>
<span class="line"><span style="color:#ABB2BF;">Stream&lt;dynamic&gt; receiveBroadcastStream([</span><span style="color:#C678DD;">dynamic</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">arguments</span><span style="color:#ABB2BF;">])</span></span>
<span class="line"><span style="color:#ABB2BF;">dynamic arguments 监听事件时向Native传递的数据</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),t=[i];function r(d,c){return e(),n("div",null,t)}const u=s(l,[["render",r],["__file","混合开发.html.vue"]]);export{u as default};
