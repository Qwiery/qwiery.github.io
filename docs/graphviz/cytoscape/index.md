---
title: Cytoscape
editLink: true
description: Basic graph visualization using Cytoscpae
---
# Cytoscape


The open source [Cytoscape.js library](https://js.cytoscape.org/) is a powerful graph visualization library that allows you to create interactive and customizable network graphs.

**Pro:**

- it provides a wide range of features and options for creating and manipulating graphs, including layout algorithms, styling options, and event handling
- you can easily visualize complex data structures and relationships in a visually appealing and intuitive way
- large community and lots of plugins
- stable and mature
- open source (MIT license).

**Con:**

- limited set of layout algorithms
- not geared toward some type of diagrams (UML, database schema, swimlanes, Sankey...)
- does not support WebGL
- limited styling options
- not enterprise support.


:::info Qwiery
Qwiery has a client branch using Cytoscape for graph visualization. It fully supports all sorts of graph visualization scenario's but if you wish to have an enterprise-level app you should consider [Ogma](/graphviz/ogma/) or [yFiles](/graphviz/yfiles/)

:::

# Elements

Cytoscape has an unusual 'graph' data structure. Instead of nodes and edges in an object, a Cytoscape graph is an array with the `group` property differentiation between nodes and eddges:

```js
const graph = [
{ group: "nodes", data: { id: "node1" }, position: { x: 10, y: 20 } },
{ group: "nodes", data: { id: "node2" }, position: { x: 30, y: 40 } },
{ group: "edges", data: { id: "edge1", source: "node1", target: "node2" } },
];
```
This is often referred to in the documentation as 'elements' or 'eles'.

:::warning Beware
The `id` is not in the root of the payload, but in the data block. Same for the `source` and `target`.
On the other hand, the `position` does sit in the root.
:::

Loading this into Cytoscape is like so:
```js
const cy = cytoscape({
  container: document.getElementById("cy")
});
cy.json({ elements: graph });
```
There is a utility class called `CytoUtils` which can help you with the conversion of Qwiery nodes, edges and graphs to Cytoscape elements. 

# Elements vs. instances

The Cytoscape data elements are serialized instances but the API can be misleading. For instance, a node element is:

```js
{ group: "nodes", data: { id: "node1" }, position: { x: 10, y: 20 } }
```
To access the `id` you use `node.id()` but to access the `position` you use `node.position()`. This is because the `id` is a property of the `data` object but the `position` is a property of the node itself. This is a bit confusing and you need to be aware of this.
