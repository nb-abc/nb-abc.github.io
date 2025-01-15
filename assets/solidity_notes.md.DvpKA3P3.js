import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BV61Qrc0.js";const g=JSON.parse('{"title":"代码注释","description":"","frontmatter":{},"headers":[],"relativePath":"solidity/notes.md","filePath":"solidity/notes.md"}'),e={name:"solidity/notes.md"},l=n(`<h1 id="代码注释" tabindex="-1">代码注释 <a class="header-anchor" href="#代码注释" aria-label="Permalink to &quot;代码注释&quot;">​</a></h1><p>支持类似 <code>Java</code>、<code>C++</code> 风格注释</p><ul><li>行注释: <code>//</code> 之后到行尾的文本</li><li>块注释: <code>/*</code> 与 <code>*/</code> 之间的代码</li></ul><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pragma</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> solidity</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ^0.8.4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这是行注释</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contract</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HelloWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    这是块注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    这是块注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    这是块注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    这是块注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    这是块注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sayHello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> pure</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> returns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> memory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="spdx-语法" tabindex="-1">SPDX 语法 <a class="header-anchor" href="#spdx-语法" aria-label="Permalink to &quot;SPDX 语法&quot;">​</a></h2><p>从 <code>Solidity 0.6.8</code> 开始，该版本及其以后版本引入了 <code>SPDX</code> 许可证，使用该许可证可以让合约代码更加透明和可读。</p><p>如果源代码未包含 <code>SPDX</code> 许可证说明，当进行编译时，编译器会发出警告信息，提醒代码编写者需要添加许可证说明。</p><p>通常在Solidity代码文件的开头添加注释</p><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// SPDX-License-Identifier: (license)</span></span></code></pre></div><p>其中(<code>license</code>)代表使用的具体许可证，比如常用的 <code>MIT</code>、<code>Apache</code> 等。</p>`,11),t=[l];function p(h,d,k,o,c,r){return a(),i("div",null,t)}const E=s(e,[["render",p]]);export{g as __pageData,E as default};
