# Adapter Signature

All [adapters](/dal/adapters) implement the same interface and you can find below an overview of these methods.

A **node** is a flat key-value dictionary (i.e. a JSON structure without sub-objects) with at least a unique identifier (a string).

For instance, this is a node

```javascript
const node = {
    id: "a344",
    name: "Anna",
    x: 45,
    y: 56,
    labels: ["Person"]
}
```

If you don't supply an `id` the adapter will auto-assign a UUID. If you given an id that is not a string, it will be stringified.

Some properties have special meaning although all depends on how the underlying store deals with it:

- `labels`: one or more entity types or names. This can be seen as defining a schema or taxonomy of the data
- `x`,`y`: this often refers to positions when used in a visualization
- `name`: this property is used by default when searching for nodes.

There are diverse methods and utilities in Qwiery to convert to and from such a node structure (`CytoUtils`, `OgmaUtils`, `yFilesUtils`...).

An **edge** is a key-value object with at least a unique identifier `id` as well as a `sourceId` and `targetId`.

```javascript
const edge = {
    id: "edge1",
    sourceId: "8825b01e-5666-44a8-8c06-8ede29a7b8a3",
    targetId: "e3d8cecb-fc07-4143-981e-5e6839de96f8",
    labels: ["Knows", "InheritsFrom"]
}
```

Not all adapters support multiple labels. For example, Neo4j refers to an edge label as `type` and you can have only one type on a relationship. The JSON adapter and the SQL adapter do, however, support multiple labels.

Visualization frameworks sometimes use `source` and `target` (or similar) to identify endpoints and Qwiery has utilities to deal with this. When creating nodes and edges, Qwiery tries hard to make sense of the given data.

## clear

Clears the graph.

Danger: it will remove all nodes and edges without confirmation request or warning.

### Examples

```javascript
const q = new Qwiery();
await q.clear();
```

Does not return anything.

## loadGraph

Loads a graph and completely replaces the current data.

### Parameters

*   `name`  {string} The name of the dataset. (optional, default `"food"`)

Returns **Promise&lt;void&gt;**

## getNeighborhood

Returns the parents and children of the given node id as a graph.

### Parameters

*   `id`  {string} A node id.
*   `amount`  {number} The maximum amount of nodes to return. (optional, default `10`)

### Examples

```javascript
const q = new Qwiery();
await q.randomGraph();
// this returns the parents and children of node with id "5" together with the edges
const g = await g.getNeighborhood("5")
```

Returns **Promise Graph **


## randomGraph

This method implements various graph generation algorithms like Erdos-Renyi, Watts-Strogatz and more.
The parameters depend on the selected algorithm.

### Parameters

*   `name`  {string} The name of the algorithm to use. (optional, default `"Erdos"`)
*   `args` **...any** {*[]} Parameters specific to the algorithm.

### Examples

```javascript
const q = new Qwiery();
// use the Erdos-Renyi algorithm to generate 40 nodes and 50 edges
await q.randomGraph("erdos", 40, 50)
```

Returns **Promise&lt;Graph&gt;** The generated graph.

## inferSchemaGraph

the name of the node and edges is the label (class).

*   the schema is a graph
*   the schema is inferred from the data, there is strictly speaking no schema in the database constraining the data

### Parameters

*   `cached`  {boolean} If true the cached version will be used, otherwise the schema will be recomputed and cached. (optional, default `true`)

Returns **Promise&lt;Graph&gt;**

## pathQuery

a path query is an array defining a path template

*   the result is a graph in which every node is part of the full path
*   path queries allow you to fetch data without having to write queries
*   the asterisk defines a wildcard

### Parameters

*   `path`  {string\[]}
*   `amount`  {number} The maximum amount of nodes to return. (optional, default `1000`)

### Examples

```javascript
await q.pathQuery(["*", "Knows", "*"])
await q.pathQuery(["Person", "*", "Location"])
await q.pathQuery(["Person", "*", "Location", "*", "Hotel"])
```

Returns **Promise&lt;Graph&gt;**

## searchNodes

Search of the nodes for the given term (in the specified fields).

### Parameters

*   `term`  {string} A search term.
*   `fields`  {string[]} The properties to consider in the search. (optional, default `[]`)
*   `amount`  {number} The maximum amount of nodes to return. (optional, default `100`)

### Examples

```javascript
await q.searchNodes("ato", ["name", "description"])
```

Returns **Promise&lt;any&gt;**

## searchNodesWithLabel

Search of the nodes with specified labels for the given term.

### Parameters

*   `term`  {string} A search term.
*   `fields`  {string[]} The properties to consider in the search. (optional, default `[]`)
*   `label`  {string|null} Only nodes having the specified label. (optional, default `null`)
*   `amount`  {number} Return at most the given amount. (optional, default `100`)

### Examples

```javascript
await q.searchNodesWithLabel("fos", ["firstName"], "Person", 20)
```

## getNodes

*   **See**: [Mongo Projections](https://www.mongodb.com/docs/manual/reference/operator/query/)

Returns the nodes satisfying the given predicate.

### Parameters

*   `predicate`  {function|*} A Mongo-like projection. If the adapter supports it, a function can be passed. (optional, default `{}`)
*   `amount`  {number} The maximum amount to return. (optional, default `1000`)

### Examples

```javascript
const found = await q.getNodes({age:{$gt: 20}})
```

Returns **Promise&lt;Array&lt;any&gt;&gt;**

## getNodesWithLabel

Returns the nodes with the specified labels.

### Parameters

*   `label`  {string} A label.
*   `amount`  {number} The maximum amount to return. (optional, default `1000`)

### Examples

```javascript
const found = await q.getNodesWithLabel("Company", 30);
```

Returns **Promise&lt;Array&lt;any&gt;&gt;**

## getNode

The specification can be

*   a string representing the id of the node
*   a predicate (function) if the underlying adapter supports it. This works for the JSON store, for instance, but not for the Cypher adapter.
*   a Mongo projection (the adapter will convert this to a native query constraint).

### Parameters

*   `id`  {string|function|*} The node id or a Mongo-like projection. If the adapter supports it, a function can be passed.

### Examples

```javascript
await q.getNode("bc0d7ac6-9a9a-44de-98d9-af371337482a")

// only if the adapter handles it	 *
await q.getNode((n)=>{return n.id = "a" && !n.archived})

// always works
await q.getNode({id: {$eq: 132}})
```

Returns **Promise&lt;(any | null)&gt;**

## nodeExists

Checks whether the node with the specified id exists.

### Parameters

*   `id`  {string} Id of the node.

Returns **Promise&lt;boolean&gt;**

## nodeCount

Return the amount of nodes with the specified predicate, if any given.

### Parameters

*   `predicate`  {function} An optional predicate. (optional, default `null`)

### Examples

```javascript
await q.nodeCount({x:{$lt:10}})
```

Returns **Promise&lt;number&gt;**

## createNode

Creates a new node.

### Parameters

*   `data`  {*} The payload. (optional, default `null`)
*   `id`  {string|null} The unique id of the node. (optional, default `null`)
*   `labels`  {string[]} One or more labels. (optional, default `null`)

### Examples

```javascript
let n = await q.createNode(); // something like {"id":"f3b0db00-fee8-44f6-a3d3-50a3e0d3fe26"}
n = await q.createNode("a"); // {id:"a"}
n = await q.createNode(1042); // {id:"1042"}
n = await q.createNode({name: "Carl"}); // {id:"a5a278ef-7c59-4680-8e6b-cfe58ba6701a", name: "Carl"}
n = await q.createNode({name:"Yan"}, "a", "Person"); // {id:"a", name: "Carl", labels:["Person"]}
```

Returns **any**

## createNodes

*   **See**: [createNode](#createnode)

Creates a sequence of nodes.

### Parameters

*   `seq`  {string[]|*[]} A sequence of node id's or node specs.

Returns **Promise&lt;Array&lt;any&gt;&gt;** The created nodes.

## deleteNode

*   **See**: [deleteNodes](#deletenodes)

Deletes the specified node.

Note: it's the adapter's responsibility to manage the integrity of the graph. This is automatic if you use
Neo4j but not if you implement your own adapter. All the Qwiery adapters (JSON, SQL...) do ensure integrity.

### Parameters

*   `id`  {string} The id of the node to delete.

### Examples

```javascript
await q.deleteNode("5005b86d-e350-43b1-aa6e-fb910fa19174"); // void
```

Returns **Promise&lt;void&gt;**

## deleteNodes

*   **See**: [deleteNode](#deletenode)

Flexible deletion of nodes via the given predicate.

### Parameters

*   `predicate`  {function} A predicate function.

### Examples

```javascript
await q.deleteNodes({age:{$gt: 50}});
```

Returns **Promise&lt;Array&lt;string&gt;&gt;** Returns the deleted items.

## updateNode

Updates a node.

Note:

*   this raises an error if the node does not exist. The [upsertNode](#upsertnode) does not raise an error and will create the node instead
*   the given data has to specify an id or the second param (id) has to be given in order to update something
*   you cannot change the id via an update.

### Parameters

*   `data`  {*} The payload. (optional, default `null`)
*   `id`  {string|null} The id of the node to update or create. (optional, default `null`)
*   `labels`  {string[]} The labels of the node. (optional, default `null`)

### Examples

```javascript
await q.updateNode({id: "a", name:"Kris"})
await q.updateNode({name:"Kris"}, "a")
await q.updateNode({name:"Kris"}, "a", ["A", "B"])
await q.updateNode({id:"a", name:"Kris", labels:["A", "B"]})
```

Returns **any**

## upsertNode

Upserts a node.

Note: same as [updateNode](#updatenode) but does not raise an error if the node does not exist.

### Parameters

*   `data`  {*} The payload. (optional, default `null`)
*   `id`  {string|null} The id of the node to update or create. (optional, default `null`)
*   `labels`  {string[]} The labels of the node. (optional, default `null`)

Returns **any**

## getNodeLabels

Fetches all the labels across all nodes.

Returns **Promise&lt;Array&lt;string&gt;&gt;**

## getNodeLabelProperties

Fetches all the properties of a given label.

Note: this is inferred from all the nodes with the specified label. The property is returned if at least one node with the given label has this property assigned.

### Parameters

*   `labelName`

Returns **Promise&lt;Array&lt;string&gt;&gt;**

## edgeExists

Checks whether the edge with the given id exists.

### Parameters

*   `id`  {string} The edge id.

Returns **Promise&lt;boolean&gt;**

## edgeCount

Returns the amount of edges, optionally filtered with the specified predicate.

### Parameters

*   `predicate`  {function} An optional predicate. (optional, default `null`)

Returns **Promise&lt;number&gt;**

## createEdge

Creates an edge.

### Parameters

*   `sourceId`  {string} The id of the source node.
*   `targetId`  {string|null} The id of the target node. (optional, default `null`)
*   `data`  {*} The payload. (optional, default `null`)
*   `id`  {string} The unique id of the edge. (optional, default `null`)
*   `labels`  {string[]} One or more labels. (optional, default `null`)

Returns **any**

## deleteEdge

Deletes the edge with the specified id.

### Parameters

*   `id`  {string} The edge id.

Returns **Promise&lt;void&gt;**

## updateEdge

Updates an edge.

### Parameters

*   `data`  {*} The payload.
*   `id`  {string|null} The edge id. (optional, default `null`)
*   `labels`  The labels on the edge. (optional, default `null`)

Returns **any**

## upsertEdge

Upserts an edge.

### Parameters

*   `data`  {*} The payload.
*   `id`  {string|null} The edge id. (optional, default `null`)
*   `labels`  The labels on the edge. (optional, default `null`)

Returns **any**

## getEdge

Returns the edge with the specified id.

### Parameters

*   `id`  {string|function|*} The node id or a Mongo-like projection. If the adapter supports it, a function can be passed.

Returns **any**

## getEdgesBetween

Returns the edges between the specified endpoints.

### Parameters

*   `sourceId`  {string} The source id.
*   `targetId`  {string} The target id.
*   `amount`  {number} The maximum amount to return. (optional, default `10`)

Returns **Promise&lt;Array&lt;any&gt;&gt;**

## getEdgeBetween

Returns the (first) edge between the specified endpoints.

### Parameters

*   `sourceId`  {string} The source id.
*   `targetId`  {string} The target id.

Returns **Promise&lt;Array&lt;any&gt;&gt;**

## getEdgeWithLabel

Returns the edge between the given endpoints and the specified label.

### Parameters

*   `sourceId`  {string} The source id.
*   `targetId`  {string} The target id.
*   `label`  {string} The label.

Returns **Promise&lt;any&gt;**

## getEdgesWithLabel

Returns the edges with the specific label.

### Parameters

*   `label`  {string} A label.
*   `amount`  {number} The maximum amount to return. (optional, default `1000`)

Returns **Promise&lt;Array&lt;any&gt;&gt;**

## getEdges

Returns the edges satisfying the given predicate.

### Parameters

*   `predicate`  {function|*} A Mongo-like projection. If the adapter supports it, a function can be passed.
*   `amount`  {number} The maximum amount to return. (optional, default `1000`)

Returns **Promise&lt;Array&lt;any&gt;&gt;**

## getDownstreamEdges

This is a utility method to fetch the edges to the children of the specified node.
This method should typically not be overridden by adapter implementations.

### Parameters

*   `sourceId`  {string} The source id.
*   `amount`  {number} The maximum amount to return. (optional, default `1000`)

Returns **Promise&lt;any&gt;**

## getEdgeLabels

Fetches all the labels across all edges.

Returns **Promise&lt;any&gt;**
