import{_ as a,c as s,o as e,V as t}from"./chunks/framework.B7Rr2-nA.js";const m=JSON.parse('{"title":"Commands","description":"","frontmatter":{},"headers":[],"relativePath":"commands.md","filePath":"commands.md"}'),i={name:"commands.md"},n=t('<h1 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h1><h2 id="rebuild-balances" tabindex="-1">Rebuild Balances <a class="header-anchor" href="#rebuild-balances" aria-label="Permalink to &quot;Rebuild Balances&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan wallet:rebuild-balances</span></span></code></pre></div><h2 id="rebuild-transaction-balance-states" tabindex="-1">Rebuild Transaction Balance States <a class="header-anchor" href="#rebuild-transaction-balance-states" aria-label="Permalink to &quot;Rebuild Transaction Balance States&quot;">​</a></h2><p>Can be used to regenerate the balance states of all transactions.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan wallet:rebuild-tx-balance-states</span></span></code></pre></div><h2 id="generate-a-transaction-processor" tabindex="-1">Generate a Transaction Processor <a class="header-anchor" href="#generate-a-transaction-processor" aria-label="Permalink to &quot;Generate a Transaction Processor&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan make:tx-processor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div>',8),l=[n];function o(r,h,c,d,p,k){return e(),s("div",null,l)}const u=a(i,[["render",o]]);export{m as __pageData,u as default};
