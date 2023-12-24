import{_ as e,o,c as t,R as a}from"./chunks/framework.X8BlTTRm.js";const y=JSON.parse('{"title":"Graphs","description":"","frontmatter":{},"headers":[],"relativePath":"guide/graphs.md","filePath":"guide/graphs.md"}'),d={name:"guide/graphs.md"},s=a('<h1 id="graphs" tabindex="-1">Graphs <a class="header-anchor" href="#graphs" aria-label="Permalink to &quot;Graphs&quot;">​</a></h1><p>Graphs can be embodied in various ways and, especially, on the client side there is no golden standard. On the backend, a graph can be stored in totally different way than how it appears on an API or client level. For instance, AWS Neptune has a Cypher API but the underlying storage is a triple store. In addition, the graph taxonomy can be diverse: is it <code>source</code> or <code>sourceId</code>, is it <code>edge</code> or <code>relationship</code>, <code>type</code> or <code>label</code>?</p><p>Qwiery has various utility classes to help you with the conversion from and to the diverse formats. Of course, a particular choice had to be made and within Qwiery (both the clients and the backend packages) we have the following structures (convention):</p><ul><li>a <code>node</code> has at least and <code>id</code>. This is a string property and is the minimum to ensure one can define edges between nodes</li><li>an <code>edge</code> has at least a <code>sourceId</code> and a <code>targetId</code>. These are string properties pointing to existing nodes</li><li>a <code>graph</code> has a <code>nodes</code> and <code>edges</code> property (both arrays). It has some optional properties such as <code>name</code> and <code>description</code> and <code>id</code>. The <code>id</code> is a string property and is used to identify the graph. The <code>name</code> and <code>description</code> are optional and are used for reporting purposes. The <code>nodes</code> and <code>edges</code> are arrays of nodes and edges respectively.</li></ul><p>If you need to convert a Qwiery node to a Cytoscape node, you can use <code>CytoUtils.toCyNode</code> and similarly for other vendors (Ogma, yFiles...).</p><p>On the backend, if you use the Qwiery data access layer (DAL) the following applies:</p><ul><li>nodes and edges do not have a complex structure. That is, a property cannot be an object on its own. This follows the Neo4j convention, unlike MongoDB where objects can have complex (sub) structures.</li><li>nodes and edges can have one or more labels and this sits in the <code>labels</code> property. Unlike Neo4j where the label on a relationship is called <code>type</code>, we call it a <code>label</code> on both nodes and edges. Note that some graph databases do not support multiple labels on relationships (e.g. Neo4j can have multiple labels on nodes but only one on an edge). So, the Qwiery API allows you to define multiple labels on edges but it&#39;s up to the adapter to handle things if not supported.</li><li>the <code>name</code> property is used by default for visualization and reporting purposes. Some vendors prefer <code>text</code>, <code>content</code> or something else. Here again, use the utility classes to convert to the vendor&#39;s preferred property.</li></ul><p>When (de)serializing graph elements the property <code>typeName</code> is used to store the type. In a semantic context, the default type is a <code>Thing</code> to denote an arbitrary object or dictionary.</p>',8),n=[s];function r(i,c,l,p,h,u){return o(),t("div",null,n)}const m=e(d,[["render",r]]);export{y as __pageData,m as default};
