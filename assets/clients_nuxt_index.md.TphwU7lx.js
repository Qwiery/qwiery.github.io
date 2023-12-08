import{_ as e,o as a,c as s,R as t,a1 as i,a2 as n,a3 as o,a4 as r}from"./chunks/framework.MrHX2r25.js";const f=JSON.parse('{"title":"Nuxt Client","description":"","frontmatter":{},"headers":[],"relativePath":"clients/nuxt/index.md","filePath":"clients/nuxt/index.md"}'),l={name:"clients/nuxt/index.md"},p=t('<h1 id="nuxt-client" tabindex="-1">Nuxt Client <a class="header-anchor" href="#nuxt-client" aria-label="Permalink to &quot;Nuxt Client&quot;">​</a></h1><p>The <a href="https://nuxt.com" target="_blank" rel="noreferrer">Nuxt</a> client allows to integrate the main graph visualization libraries on the front-end and diverse graph and classic databases in the backend.</p><p>There are three versions within this repo based on three graph visualization frameworks: <strong>yFiles</strong>, <strong>Ogma</strong> and <strong>Cytoscape</strong>. You can access each via git checkout of the respective branches. The core is always the same, only the graph visualization part is implemented differently.</p><div style="display:flex;"><a href="https://www.yworks.com" target="_blank"><img src="'+i+'" style="height:90px;margin-right:20px;"></a><a href="https://linkurious.com/ogma/" target="_blank"><img src="'+n+'" style="height:90px;margin-right:20px;"></a><a href="https://js.cytoscape.org/" target="_blank"><img src="'+o+`" style="height:90px;"></a></div><p>We are also fans of <a href="https://gojs.net" target="_blank" rel="noreferrer">GoJs</a> by Northwoods but this has lower priority.</p><h2 id="required-licenses" tabindex="-1">Required Licenses <a class="header-anchor" href="#required-licenses" aria-label="Permalink to &quot;Required Licenses&quot;">​</a></h2><p>Although the code is open source, the dependencies are not (except for Cytoscape):</p><ul><li>The <strong>yFiles</strong> version requires <a href="https://www.yworks.com/products/yfiles-for-html" target="_blank" rel="noreferrer">a valid license or a trial version</a>. The code is based on yFiles for HTML v2.6.</li><li>The <strong>Ogma</strong> version requires <a href="http://linkurious.com/ogma/" target="_blank" rel="noreferrer">a valid Ogma license from Linkurious</a>.</li><li>The <strong>Cytoscape</strong> version does not require a license and can be used freely.</li></ul><p>The pro and con and which version is best for your use case is a subtle discussion (price, scope, learning curve, features...). Please contact us (links below) if you need guidance.</p><h2 id="yfiles-setup" tabindex="-1">yFiles setup <a class="header-anchor" href="#yfiles-setup" aria-label="Permalink to &quot;yFiles setup&quot;">​</a></h2><p>Checkout the yFiles branch (<code>git checkout yfiles</code>).</p><p>In order to run you need:</p><ul><li>a yFiles zip containing the demo code and npm package(s),</li><li>a valid license in the form of a JSON files or snippet.</li></ul><p>Unzip the distributable (something like <code>yFiles-for-HTML-Complete-2.6.0.2</code>) and under <code>lib-dev</code> copy the path to <code>yfiles-umd-26.0.2+dev.tgz</code>. This is the path you need to assign to the <code>yfile</code> dependency in <code>package.json</code>.</p><p>The license snippet can be either put directly in the code</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">License.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    company: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Your corp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    key: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;License key&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>or, better, put the snippet as string in a <code>.env</code> file</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>YFILES_LICENSE=\`{&quot;company&quot;:...}\`</span></span></code></pre></div><p>With this in place use the standard</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>or whatever package manager flavor you enjoy most (pnpm, yarn...).</p><h2 id="ogma-setup" tabindex="-1">Ogma setup <a class="header-anchor" href="#ogma-setup" aria-label="Permalink to &quot;Ogma setup&quot;">​</a></h2><p>Checkout the yFiles branch (<code>git checkout ogma</code>).</p><p>In order to run this version you either need a npm package or a link from Linkurious</p><ul><li>if you have distributable, assign in <code>@linkurious/ogma</code> the path to this file (typically something like <code>&quot;@linkurious/ogma&quot;: &quot;~/linkurious-ogma-4.5.0.tgz&quot;</code>),</li><li>if you have a link from Linkurious assign this to <code>@linkurious/ogma</code>, typically the link looks like <code>https://get.linkurio.us/api/get/npm/ogma/4.5.5/?secret=123456</code>.</li></ul><p>Now you can proceed as usual with</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><h2 id="cytoscape-setup" tabindex="-1">Cytoscape setup <a class="header-anchor" href="#cytoscape-setup" aria-label="Permalink to &quot;Cytoscape setup&quot;">​</a></h2><p>The <a href="http://js.cytoscape.org/" target="_blank" rel="noreferrer">Cytoscape</a> version does not require a license but is also the least sophisticate one. For enterprise development and advanced layout you should consider yFiles. If your graph visualization requirements are more towards data visualization (ie. explore data but not edit it) you should consider Ogma.</p><p>Checkout the master branch (<code>git checkout master</code>) and use</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>There is no &#39;cytoscape&#39; branch, the master branch contains the Cytoscape version.</p><p>The output will be something like</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; nuxt-app@0.1.0 dev</span></span>
<span class="line"><span>&gt; nuxt dev</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Nuxt 3.8.0 with Nitro 2.7.0                                                                                              10:25:38 AM</span></span>
<span class="line"><span>                                                                                                                         10:25:39 AM</span></span>
<span class="line"><span>  ➜ Local:    http://localhost:3000/</span></span>
<span class="line"><span>  ➜ Network:  use --host to expose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ℹ Using default Tailwind CSS file                                                                      nuxt:tailwindcss 10:25:39 AM</span></span>
<span class="line"><span>ℹ Tailwind Viewer: http://localhost:3000/_tailwind/                                                    nuxt:tailwindcss 10:25:39 AM</span></span>
<span class="line"><span>ℹ ✨ optimized dependencies changed. reloading                                                                          10:25:43 AM</span></span>
<span class="line"><span>ℹ Vite client warmed up in 3116ms                                                                                       10:25:43 AM</span></span>
<span class="line"><span>✔ Nitro built in 1704 ms                                                                                          nitro 10:25:43 AM</span></span>
<span class="line"><span>Qwiery backend with JsonGraphStore adapter enabled.</span></span>
<span class="line"><span>JsonGraphStore auto-save enabled (interval: 5000).</span></span></code></pre></div><p>Point your browser to <a href="http://localhost:3000/" target="_blank" rel="noreferrer">http://localhost:3000/</a> to explore the app. Note that by default the JsonGraphStore is used.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>all versions are made with Nuxt (&gt;=v3.8) and NodeJs &gt;=v21</li><li><a href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind</a> styling</li><li><a href="https://nuxt.com/modules/i18n" target="_blank" rel="noreferrer">internationalization ready</a></li><li>graph viewer, graph editor and schema visualization</li><li>data access based on a generic data access layer allowing in-memory JSON graphs, transparent graph database on top of any SQL database, Neo4j and more</li><li>Qwiery plugins allowing all sorts of things like schema protection, triples and more</li><li>a clone of Neo4j&#39;s Bloom</li></ul><p>🧨<a href="/dal/getting-started">Qwiery&#39;s mechanics is detailed here.</a></p><h2 id="feedback" tabindex="-1">Feedback <a class="header-anchor" href="#feedback" aria-label="Permalink to &quot;Feedback&quot;">​</a></h2><p>This template is a stepping stone and we sincerely hope it helps jump-start your own visualizations. It&#39;s neither bug-free nor complete and<br> if you find something isn&#39;t as expected you <a href="https://github.com/Qwiery/qwiery-nuxt/issues" target="_blank" rel="noreferrer">can report it</a> or contact us:</p><ul><li><a href="https://twitter.com/theorbifold" target="_blank" rel="noreferrer">Twitter</a></li><li><a href="mailto:info@orbifold.net" target="_blank" rel="noreferrer">Email</a></li><li><a href="https://GraphsAndNetworks.com" target="_blank" rel="noreferrer">Orbifold Consulting</a></li></ul><h2 id="consulting-and-custom-development" tabindex="-1">Consulting and Custom Development <a class="header-anchor" href="#consulting-and-custom-development" aria-label="Permalink to &quot;Consulting and Custom Development&quot;">​</a></h2><p><a href="https://orbifold.net" target="_blank" rel="noreferrer"><img src="`+r+'" alt=""></a> You can use any of the links above to contact us with respect to custom development and beyond. We have more than 20 years experience with everything graphs.</p><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><p><strong>MIT License</strong></p><p><em>Copyright (c) 2023 Orbifold B.V.</em></p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>',49),h=[p];function c(d,u,g,k,m,y){return a(),s("div",null,h)}const v=e(l,[["render",c]]);export{f as __pageData,v as default};
