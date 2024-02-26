import{_ as s,c as i,o as a,V as h}from"./chunks/framework.Cami899w.js";const o=JSON.parse('{"title":"Helpers","description":"","frontmatter":{},"headers":[],"relativePath":"helpers.md","filePath":"helpers.md"}'),n={name:"helpers.md"},t=h(`<h1 id="helpers" tabindex="-1">Helpers <a class="header-anchor" href="#helpers" aria-label="Permalink to &quot;Helpers&quot;">​</a></h1><h2 id="num" tabindex="-1"><code>num</code> <a class="header-anchor" href="#num" aria-label="Permalink to &quot;\`num\`&quot;">​</a></h2><p>Creates a new <a href="./interfaces.html#numeric"><code>O21\\LaravelWallet\\Numeric</code></a> instance from a value.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> num</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Numeric</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $value)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Numeric</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 8.1+</span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> num</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Numeric</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $value, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $scale </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Numeric</span></span></code></pre></div><h2 id="tx" tabindex="-1"><code>tx</code> <a class="header-anchor" href="#tx" aria-label="Permalink to &quot;\`tx\`&quot;">​</a></h2><p>Resolves a <a href="./interfaces.html#transaction-creator">O21\\LaravelWallet\\Contracts\\TransactionCreator</a> instance and sets the amount and currency if specified.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Numeric</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $amount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ?string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $currency </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TransactionCreator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="deposit" tabindex="-1"><code>deposit</code> <a class="header-anchor" href="#deposit" aria-label="Permalink to &quot;\`deposit\`&quot;">​</a></h2><p>Call the <code>tx</code> function and sets the <code>deposit</code> processor.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deposit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Numeric</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $amount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ?string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $currency </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TransactionCreator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="charge" tabindex="-1"><code>charge</code> <a class="header-anchor" href="#charge" aria-label="Permalink to &quot;\`charge\`&quot;">​</a></h2><p>Call the <code>tx</code> function and sets the <code>charge</code> processor.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Numeric</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $amount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ?string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $currency </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TransactionCreator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="transfer" tabindex="-1"><code>transfer</code> <a class="header-anchor" href="#transfer" aria-label="Permalink to &quot;\`transfer\`&quot;">​</a></h2><p>Call the <code>tx</code> function and sets the <code>transfer</code> processor.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> transfer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Numeric</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $amount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ?string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $currency </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TransactionCreator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,16),l=[t];function k(p,e,r,d,E,g){return a(),i("div",null,l)}const y=s(n,[["render",k]]);export{o as __pageData,y as default};
