import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BV61Qrc0.js";const g=JSON.parse('{"title":"不可变量","description":"","frontmatter":{},"headers":[],"relativePath":"solidity/immutable.md","filePath":"solidity/immutable.md"}'),t={name:"solidity/immutable.md"},p=n(`<h1 id="不可变量" tabindex="-1">不可变量 <a class="header-anchor" href="#不可变量" aria-label="Permalink to &quot;不可变量&quot;">​</a></h1><p><code>Solidity</code> 是一种智能合约编程语言，具有不可变量的概念。</p><p>在 <code>Solidity</code> 中有两种类型的不可变量：常量和不可变状态变量。常量是在编译时确定的只读变量，并且只能是值类型（如整数、字符串、地址等）。</p><p>不可变状态变量是在合约发布时确定的变量，它们的值在部署合约后不能被修改。下面将分别解释这两种不可变量。</p><h2 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h2><p>常量可以通过关键字 <code>constant</code> 或 <code>immutable</code> 定义。</p><p>两者的不同之处在于，<code>constant</code>定义的常量在 <code>Solidity 0.5.0</code> 版本后已经废弃，建议使用<code>immutable</code> 代替。</p><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pragma</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> solidity</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ^0.8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contract</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyContract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    uint256</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> constant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MY_CONSTANT </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 12345</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 或者使用不推荐的语法：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // uint256 constant public MY_CONSTANT_2 = 23456;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> pure</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> returns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uint256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MY_CONSTANT;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在上述代码中，我们定义了一个名为 <code>MY_CONSTANT</code> 的常量，它的值为 <code>12345</code> ，类型是 <code>uint256</code>。</p><p>在本例中，我们还提供了一个名为 <code>getValue()</code> 的公共函数，该函数返回这个常量的值，因为它是一个只读变量，所以我们将这个函数定义为 <code>pure</code> 类型。</p><h2 id="不可变状态变量" tabindex="-1">不可变状态变量 <a class="header-anchor" href="#不可变状态变量" aria-label="Permalink to &quot;不可变状态变量&quot;">​</a></h2><p>不可变状态变量是在合约发布时确定的，它的值不能被改变。</p><p>我们可以使用关键字 <code>immutable</code> 定义它们，这些变量必须在声明时或在构造函数中被初始化。</p><p>与常量不同，不可变状态变量可以是值类型或引用类型（如结构体）。</p><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pragma</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> solidity</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ^0.8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contract</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyContract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 不可变状态变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    immutable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Person </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MY_PERSON </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getPersonName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> view</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> returns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> memory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MY_PERSON.name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getPersonAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> view</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> returns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MY_PERSON.age;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在上述代码中，我们定义了一个结构体 <code>Person</code>，它有两个属性：<code>name</code> 和 <code>age</code>。</p><p>接下来，我们定义了一个不可变状态变量 <code>MY_PERSON</code> ，它的类型是 <code>Person</code> ，并在声明时初始化。</p><p>我们还提供了两个函数 <code>getPersonName()</code> 和 <code>getPersonAge()</code> ，它们分别返回 <code>MY_PERSON</code> 的 <code>name</code> 和 <code>age</code>属性。</p><p>通过使用不可变变量，我们可以确保某些值在合约发布后不会被修改，这有助于确保智能合约的安全性。</p>`,19),l=[p];function e(h,k,d,r,E,c){return a(),i("div",null,l)}const y=s(t,[["render",e]]);export{g as __pageData,y as default};
