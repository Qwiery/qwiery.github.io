import{_ as s,c as a,o as i,V as n,af as t}from"./chunks/framework.q8uJo9B6.js";const b=JSON.parse('{"title":"Markdown","description":"","frontmatter":{},"headers":[],"relativePath":"dashboards/markdown-widget.md","filePath":"dashboards/markdown-widget.md"}'),e={name:"dashboards/markdown-widget.md"},l=n('<h1 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-label="Permalink to &quot;Markdown&quot;">​</a></h1><p><img src="'+t+`" alt=""></p><p>The markdown widget allows you to add textual elements to the dashboard using Markdown. This includes tables, mathematical formulas, emojis, and images. The markdown widget is a great way to add context to your dashboard and to explain the data that is being visualized.</p><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><ul><li>add a &#39;Markdown&#39; widget to the dashboard</li><li>write your text using Markdown</li></ul><p>The markdown widget uses the <a href="https://markdown-it.github.io" target="_blank" rel="noreferrer">markdown-it</a> library to parse the Markdown. This means that you can use the full power of Markdown, including tables, mathematical formulas, emojis, and images. The markdown widget also supports <a href="https://github.github.com/gfm/" target="_blank" rel="noreferrer">GitHub Flavored Markdown</a>.</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># h1 Heading 8-)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## h2 Heading</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### h3 Heading</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#### h4 Heading</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">##### h5 Heading</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">###### h6 Heading</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Horizontal Rules</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">___</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">***</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Mathematics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$$</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\int_\\omega\\; d\\zeta = \\infty</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$$</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Typographic replacements</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Enable typographer option to see result.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(c) (C) (r) (R) (tm) (TM) (p) (P) +-</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test.. test... test..... test?..... test!....</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">!!!!!! ???? ,,  -- ---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;Smartypants, double quotes&quot; and &#39;single quotes&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Emphasis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">**This is bold text**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">__This is bold text__</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">*This is italic text*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">_This is italic text_</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">~~Strikethrough~~</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Blockquotes</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; Blockquotes can also be nested...</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt;&gt; ...by using additional greater-than signs right next to each other...</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; &gt; &gt; ...or with spaces between arrows.</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Lists</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Unordered</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Create a list by starting a line with </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`+\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`-\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, or </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`*\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Sub-lists are made by indenting 2 spaces:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Marker character change forces new list start:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Ac tristique libero volutpat at</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Facilisis in pretium nisl aliquet</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Nulla volutpat aliquam velit</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Very easy!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Ordered</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Lorem ipsum dolor sit amet</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Consectetur adipiscing elit</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Integer molestie lorem at massa</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> You can use sequential numbers...</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...or keep all the numbers as </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`1.\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Start numbering with offset:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">57.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Code</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Inline </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`code\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Indented code</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // Some comments</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    line 1 of code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    line 2 of code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    line 3 of code</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Block code &quot;fences&quot;</span></span></code></pre></div><p>Sample text here...</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>Syntax highlighting</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\` js</span></span>
<span class="line"><span>var foo = function (bar) {</span></span>
<span class="line"><span>  return bar++;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(foo(5));</span></span></code></pre></div><h2 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h2><table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>data</td><td>path to data files to supply the data that will be passed into templates.</td></tr><tr><td>engine</td><td>engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td>ext</td><td>extension to be used for dest files.</td></tr></tbody></table><p>Right aligned columns</p><table><thead><tr><th style="text-align:right;">Option</th><th style="text-align:right;">Description</th></tr></thead><tbody><tr><td style="text-align:right;">data</td><td style="text-align:right;">path to data files to supply the data that will be passed into templates.</td></tr><tr><td style="text-align:right;">engine</td><td style="text-align:right;">engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td style="text-align:right;">ext</td><td style="text-align:right;">extension to be used for dest files.</td></tr></tbody></table><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><p><a href="http://dev.nodeca.com" target="_blank" rel="noreferrer">link text</a></p><p><a href="http://nodeca.github.io/pica/demo/" title="title text!" target="_blank" rel="noreferrer">link with title</a></p><p>Autoconverted link <a href="https://github.com/nodeca/pica" target="_blank" rel="noreferrer">https://github.com/nodeca/pica</a> (enable linkify to see)</p><h2 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-label="Permalink to &quot;Images&quot;">​</a></h2><p><img src="https://source.unsplash.com/random/300x300/?nature" alt=""></p><h3 id="emojies" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-emoji" target="_blank" rel="noreferrer">Emojies</a> <a class="header-anchor" href="#emojies" aria-label="Permalink to &quot;[Emojies](https://github.com/markdown-it/markdown-it-emoji)&quot;">​</a></h3><blockquote><p>Classic markup: 😉 😢 😆 😋</p><p>Shortcuts (emoticons): 😃 😦 😎 😉</p></blockquote><p>see <a href="https://github.com/markdown-it/markdown-it-emoji#change-output" target="_blank" rel="noreferrer">how to change output</a> with twemoji.</p><h3 id="subscript-superscript" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-sub" target="_blank" rel="noreferrer">Subscript</a> / <a href="https://github.com/markdown-it/markdown-it-sup" target="_blank" rel="noreferrer">Superscript</a> <a class="header-anchor" href="#subscript-superscript" aria-label="Permalink to &quot;[Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)&quot;">​</a></h3><ul><li>19^th^</li><li>H~2~O</li></ul><h3 id="ins" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-ins" target="_blank" rel="noreferrer">&lt;ins&gt;</a> <a class="header-anchor" href="#ins" aria-label="Permalink to &quot;[\\&lt;ins&gt;](https://github.com/markdown-it/markdown-it-ins)&quot;">​</a></h3><p>++Inserted text++</p><h3 id="mark" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-mark" target="_blank" rel="noreferrer">&lt;mark&gt;</a> <a class="header-anchor" href="#mark" aria-label="Permalink to &quot;[\\&lt;mark&gt;](https://github.com/markdown-it/markdown-it-mark)&quot;">​</a></h3><p>==Marked text==</p><h3 id="footnotes" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-footnote" target="_blank" rel="noreferrer">Footnotes</a> <a class="header-anchor" href="#footnotes" aria-label="Permalink to &quot;[Footnotes](https://github.com/markdown-it/markdown-it-footnote)&quot;">​</a></h3><p>Footnote 1 link[^first].</p><p>Footnote 2 link[^second].</p><p>Inline footnote^[Text of inline footnote] definition.</p><p>Duplicated footnote reference[^second].</p><p>[^first]: Footnote <strong>can have markup</strong></p><pre><code>and multiple paragraphs.
</code></pre><p>[^second]: Footnote text.</p><h3 id="definition-lists" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-deflist" target="_blank" rel="noreferrer">Definition lists</a> <a class="header-anchor" href="#definition-lists" aria-label="Permalink to &quot;[Definition lists](https://github.com/markdown-it/markdown-it-deflist)&quot;">​</a></h3><p>Term 1</p><p>: Definition 1 with lazy continuation.</p><p>Term 2 with <em>inline markup</em></p><p>: Definition 2</p><pre><code>    { some code, part of Definition 2 }

Third paragraph of definition 2.
</code></pre><p><em>Compact style:</em></p><p>Term 1 ~ Definition 1</p><p>Term 2 ~ Definition 2a ~ Definition 2b</p><h3 id="abbreviations" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-abbr" target="_blank" rel="noreferrer">Abbreviations</a> <a class="header-anchor" href="#abbreviations" aria-label="Permalink to &quot;[Abbreviations](https://github.com/markdown-it/markdown-it-abbr)&quot;">​</a></h3><p>This is HTML abbreviation example.</p><p>It converts &quot;HTML&quot;, but keep intact partial entries like &quot;xxxHTMLyyy&quot; and so on.</p><p>*[HTML]: Hyper Text Markup Language</p><h3 id="custom-containers" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-container" target="_blank" rel="noreferrer">Custom containers</a> <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;[Custom containers](https://github.com/markdown-it/markdown-it-container)&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">So much fun :::</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span></code></pre></div></div>`,51),p=[l];function h(r,o,k,d,c,g){return i(),a("div",null,p)}const E=s(e,[["render",h]]);export{b as __pageData,E as default};
