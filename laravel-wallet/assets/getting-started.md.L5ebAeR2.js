import{_ as t,c as a,o as e,U as i}from"./chunks/framework.CYGC3Emh.js";const u=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started.md","filePath":"getting-started.md"}'),s={name:"getting-started.md"},n=i('<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><table><thead><tr><th>Package</th><th>Version</th></tr></thead><tbody><tr><td>PHP (with BCMath ext)</td><td>^8.1|^8.2</td></tr><tr><td>Laravel</td><td>^10.0</td></tr></tbody></table><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>First, install the package via the Composer package manager:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> require</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 021</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/laravel-wallet</span></span></code></pre></div><p>After installing the package, you will need to publish the migrations and config:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vendor:publish</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --provider=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;O21\\LaravelWallet\\ServiceProvider&quot;</span></span></code></pre></div><p>After publishing, you can find the migrations in the <code>database/migrations</code> folder and the config in the <code>config/wallet.php</code> file.</p><p>Then run the migrations:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span></span></code></pre></div>',11),h=[n];function l(r,d,p,o,c,g){return e(),a("div",null,h)}const b=t(s,[["render",l]]);export{u as __pageData,b as default};
