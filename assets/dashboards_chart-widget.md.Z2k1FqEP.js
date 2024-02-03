import{_ as a,c as t,o as e,V as s,a8 as i,a9 as r}from"./chunks/framework.IB8xUv2s.js";const _=JSON.parse('{"title":"Chart Widget","description":"","frontmatter":{},"headers":[],"relativePath":"dashboards/chart-widget.md","filePath":"dashboards/chart-widget.md"}'),h={name:"dashboards/chart-widget.md"},o=s('<h1 id="chart-widget" tabindex="-1">Chart Widget <a class="header-anchor" href="#chart-widget" aria-label="Permalink to &quot;Chart Widget&quot;">​</a></h1><p><img src="'+i+'" alt=""><img src="'+r+'" alt=""></p><p>The chart widget allows you to visualize data in a variety of ways. The widget supports a wide range of chart types, including line, bar, pie, and scatter charts.</p><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><ul><li>add a graph widget to a dashboard</li><li>select one of the charting options as render option</li><li>select the graph database</li><li>write a (Cypher) query returning at least a &#39;y&#39; column and optionally an &#39;x&#39; column. The &#39;y&#39; column will be used as the value for the chart and the &#39;x&#39; column will be used as the label for the chart. If no &#39;x&#39; column is provided, the chart will use the row number as the label.</li></ul><div class="warning custom-block"><p class="custom-block-title">Important</p><p>The query should return at least a &#39;y&#39; column and optionally an &#39;x&#39; column.</p></div><p>If your data is not called &#39;x&#39; or &#39;y&#39; you can, of course, use an alias like so:</p><div class="language-cypher vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cypher</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MATCH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (n:Person) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y</span></span></code></pre></div><p>This would create a (histogram) chart with the age on the x-axis and the count of people with that age on the y-axis.</p><p>The charts are based on the <strong>Apexcharts</strong> library. You can find the documentation <a href="https://apexcharts.com/" target="_blank" rel="noreferrer">here</a>.</p>',10),n=[o];function l(d,c,p,u,g,k){return e(),t("div",null,n)}const m=a(h,[["render",l]]);export{_ as __pageData,m as default};
