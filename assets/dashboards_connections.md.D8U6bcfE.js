import{_ as e,c as o,o as t,V as n}from"./chunks/framework.JXV4IW5g.js";const _=JSON.parse('{"title":"Connections","description":"","frontmatter":{},"headers":[],"relativePath":"dashboards/connections.md","filePath":"dashboards/connections.md"}'),a={name:"dashboards/connections.md"},c=n('<h1 id="connections" tabindex="-1">Connections <a class="header-anchor" href="#connections" aria-label="Permalink to &quot;Connections&quot;">​</a></h1><p>Ths panel lists the dashboard connections. Every widget can use a different connection and this is where you can add, edit, and remove connections.</p><p>Out of the box we supply the list of freely available <a href="https://neo4j.com/labs/" target="_blank" rel="noreferrer">Neo4j Labs</a> databases. These are read-only and are meant to be used for testing and learning purposes.</p><h2 id="adding-a-connection" tabindex="-1">Adding a connection <a class="header-anchor" href="#adding-a-connection" aria-label="Permalink to &quot;Adding a connection&quot;">​</a></h2><p>Click the <code>Add</code> button to add a new connection. You will be prompted for the following information:</p><ul><li>name: only used for display purposes</li><li>host: the host of the database, typically <code>localhost</code> or an IP address</li><li>port: the port of the database, typically <code>7687</code> for Neo4j</li><li>username: the username to connect to the database, typically <code>neo4j</code> for Neo4j</li><li>password: the password to connect to the database</li><li>database: the name of the database to connect to, typically <code>neo4j</code> for Neo4j</li><li>protocol: the protocol to use, typically <code>bolt</code> for Neo4j</li></ul><p>You can test the connection via the button in the lower-right.</p><p>If you delete a connection, all widgets using that connection will display the error &#39;<strong>Error: Connection &#39;<em>the name of the database</em>&#39; not found&#39;</strong></p>',8),s=[c];function i(d,r,l,h,p,f){return t(),o("div",null,s)}const b=e(a,[["render",i]]);export{_ as __pageData,b as default};