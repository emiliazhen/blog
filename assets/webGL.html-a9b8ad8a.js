import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c,a as d}from"./app-fd217ae5.js";const t={},_=d("<p>着色器是使用 <code>OpenGL ES Shading Language</code> 语言编写的程序，负责记录像素点的位置和颜色，并由顶点着色器和片段着色器组成，通过用<code>GLSL</code> 编写这些着色器，并将代码文本传递给<code>WebGL</code>执行时编译，另外，顶点着色器和片段着色器的集合我们通常称之为着色器程序。</p><p>​ 顶点着色器的功能是将输入顶点从原始坐标系转换到<code>WebGL</code>使用的缩放空间坐标系，每个轴的坐标范围从<code>-1.0</code>到<code>1.0</code>，顶点着色器对顶点坐标进行必要的转换后，保存在名称为<code>gl_Position</code>的特殊变量中备用。</p><p>​ 片段着色器在顶点着色器处理完图形的顶点后，会被要绘制的每个图形的每个像素点调用一次，它的功能是确定像素的颜色值，并保存在名称为<code>gl_FragColor</code>的特殊变量中，该颜色值将最终绘制到图形像素的对应位置中。</p>",3),n=[_];function a(r,s){return o(),c("div",null,n)}const p=e(t,[["render",a],["__file","webGL.html.vue"]]);export{p as default};