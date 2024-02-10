import{_ as s,c as a,o as i,V as t}from"./chunks/framework.JXV4IW5g.js";const y=JSON.parse('{"title":"Json Adapter","description":"","frontmatter":{"title":"Json Adapter","editLink":true},"headers":[],"relativePath":"adapters/json/index.md","filePath":"adapters/json/index.md"}'),e={name:"adapters/json/index.md"},n=t(`<h1 id="json-adapter" tabindex="-1">Json Adapter <a class="header-anchor" href="#json-adapter" aria-label="Permalink to &quot;Json Adapter&quot;">​</a></h1><p>Qwiery uses the Json adapter by default and you don&#39;t need to configure anything to make it happen. This means that you can create an app without having to install a graph database.</p><p>This in-memory JSON adapter does not persist anything and if you wish to do so you need the following setup:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> q</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Qwiery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    adapters: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    json: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        autoSave: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        interval: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>The Cypher adapter implements <a href="/dal/adapter-methods">the full Qwiery interface</a>.</p>`,5),p=[n];function h(l,r,d,o,k,c){return i(),a("div",null,p)}const g=s(e,[["render",h]]);export{y as __pageData,g as default};