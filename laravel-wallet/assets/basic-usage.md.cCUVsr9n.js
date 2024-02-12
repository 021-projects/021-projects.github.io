import{_ as s,c as a,o as i,U as e}from"./chunks/framework.CYGC3Emh.js";const E=JSON.parse('{"title":"Basic Usage","description":"","frontmatter":{},"headers":[],"relativePath":"basic-usage.md","filePath":"basic-usage.md"}'),n={name:"basic-usage.md"},t=e(`<h1 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h1><h2 id="balances" tabindex="-1">Balances <a class="header-anchor" href="#balances" aria-label="Permalink to &quot;Balances&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>To ensure the integrity of balance data, all modifications must be performed via transactions. Direct adjustments to balance values are not persistent and will be overwritten upon the execution of any subsequent transaction.</p></div><p>Models that implement the <a href="./interfaces.html#payable"><code>Payable</code></a> interface are capable of maintaining individual balances, alongside the transactions associated with them.</p><h5 id="integrating-balances-into-model" tabindex="-1">Integrating balances into model <a class="header-anchor" href="#integrating-balances-into-model" aria-label="Permalink to &quot;Integrating balances into model&quot;">​</a></h5><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> App\\Models</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Illuminate\\Database\\Eloquent\\Model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> O21\\LaravelWallet\\Contracts\\Payable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> O21\\LaravelWallet\\Models\\Concerns\\HasBalance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Payable</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HasBalance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="conducting-transactions" tabindex="-1">Conducting Transactions <a class="header-anchor" href="#conducting-transactions" aria-label="Permalink to &quot;Conducting Transactions&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>A transaction represents a monetary transfer from a sender to a recipient. Transactions can only be created if the sender has adequate funds, except when the <code>overcharge</code> mode is activated, allowing for transactions beyond the available balance.</p></div><h3 id="overcharge-mode" tabindex="-1">Overcharge Mode <a class="header-anchor" href="#overcharge-mode" aria-label="Permalink to &quot;Overcharge Mode&quot;">​</a></h3><p>When the <code>overcharge</code> mode is enabled, transactions can be conducted even without the sender or if the sender has insufficient funds. Use it if you want to allow negative balances or creating a deposit.</p><h5 id="performing-a-transfer" tabindex="-1">Performing a Transfer <a class="header-anchor" href="#performing-a-transfer" aria-label="Permalink to &quot;Performing a Transfer&quot;">​</a></h5><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transfer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;USD&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($sender)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($recipient)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">commit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h5 id="making-a-deposit" tabindex="-1">Making a Deposit <a class="header-anchor" href="#making-a-deposit" aria-label="Permalink to &quot;Making a Deposit&quot;">​</a></h5><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deposit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;USD&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($recipient)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">overcharge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">commit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h5 id="charge" tabindex="-1">Charge <a class="header-anchor" href="#charge" aria-label="Permalink to &quot;Charge&quot;">​</a></h5><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">charge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;USD&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($sender)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">commit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>`,16),h=[t];function l(p,r,k,d,o,c){return i(),a("div",null,h)}const y=s(n,[["render",l]]);export{E as __pageData,y as default};
