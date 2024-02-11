import{_ as e,c as o,o as t,V as a}from"./chunks/framework.Ca-bdDpS.js";const b=JSON.parse('{"title":"Connections","description":"","frontmatter":{},"headers":[],"relativePath":"dashboards/connections.md","filePath":"dashboards/connections.md"}'),n={name:"dashboards/connections.md"},r=a('<h1 id="connections" tabindex="-1">Connections <a class="header-anchor" href="#connections" aria-label="Permalink to &quot;Connections&quot;">​</a></h1><p>Ths panel lists the dashboard connections. Every widget can use a different connection and this is where you can add, edit, and remove connections.</p><p>Out of the box we supply the list of freely available <a href="https://neo4j.com/labs/" target="_blank" rel="noreferrer">Neo4j Labs</a> databases. These are read-only and are meant to be used for testing and learning purposes:</p><ul><li><a href="https://github.com/neo4j-graph-examples/movies" target="_blank" rel="noreferrer">Movies</a></li><li><a href="https://github.com/neo4j-graph-examples/northwind" target="_blank" rel="noreferrer">Northwind</a></li><li><a href="https://github.com/neo4j-graph-examples/recommendations" target="_blank" rel="noreferrer">Recommendations</a></li><li><a href="https://github.com/neo4j-graph-examples/fincen" target="_blank" rel="noreferrer">Fincen</a></li><li><a href="https://github.com/neo4j-graph-examples/twitter-v2" target="_blank" rel="noreferrer">Twitter</a></li><li><a href="https://github.com/neo4j-graph-examples/stackoverflow" target="_blank" rel="noreferrer">Stackoverflow</a></li><li><a href="https://github.com/neo4j-examples/game-of-thrones" target="_blank" rel="noreferrer">Game of Thrones</a></li><li>NeoFlix</li><li>Wordnet</li><li>Slack</li></ul><p>All of these databases can be queries and explored via this <a href="https://demo.neo4jlabs.com:7473/browser/" target="_blank" rel="noreferrer">Neo4j Browser</a>.</p><h2 id="adding-a-connection" tabindex="-1">Adding a connection <a class="header-anchor" href="#adding-a-connection" aria-label="Permalink to &quot;Adding a connection&quot;">​</a></h2><p>Click the <code>Add</code> button to add a new connection. You will be prompted for the following information:</p><ul><li>name: only used for display purposes</li><li>host: the host of the database, typically <code>localhost</code> or an IP address</li><li>port: the port of the database, typically <code>7687</code> for Neo4j</li><li>username: the username to connect to the database, typically <code>neo4j</code> for Neo4j</li><li>password: the password to connect to the database</li><li>database: the name of the database to connect to, typically <code>neo4j</code> for Neo4j</li><li>protocol: the protocol to use, typically <code>bolt</code> for Neo4j</li></ul><p>You can test the connection via the button in the lower-right.</p><p>If you delete a connection, all widgets using that connection will display the error &#39;<strong>Error: Connection &#39;<em>the name of the database</em>&#39; not found&#39;</strong></p>',10),i=[r];function l(s,c,d,h,p,f){return t(),o("div",null,i)}const u=e(n,[["render",l]]);export{b as __pageData,u as default};
