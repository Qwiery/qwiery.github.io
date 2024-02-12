import{_ as a,c as s,o as i,V as t}from"./chunks/framework.Ca-bdDpS.js";const _=JSON.parse('{"title":"Sparql Adapter","description":"","frontmatter":{},"headers":[],"relativePath":"adapters/sparql/index.md","filePath":"adapters/sparql/index.md"}'),e={name:"adapters/sparql/index.md"},p=t(`<h1 id="sparql-adapter" tabindex="-1">Sparql Adapter <a class="header-anchor" href="#sparql-adapter" aria-label="Permalink to &quot;Sparql Adapter&quot;">​</a></h1><p>You can initiate the adapter like this:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Qwiery.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Sparql);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> q</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Qwiery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    adapters: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sparql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>The Sparql adapter implements <a href="/dal/adapter-methods">the full Qwiery interface</a>.</p>`,4),n=[p];function l(r,h,d,k,o,c){return i(),s("div",null,n)}const g=a(e,[["render",l]]);export{_ as __pageData,g as default};