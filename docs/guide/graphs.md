# Graphs

Qwiery has a graph package with various algorithms and structures to make it easy to create graphs and analyze them.

There are several (easy) ways to create a graph, for example via an edge array:

```js
// tapole graph
Graph.fromEdgeArray(["1->2", "2->2"])
```

which is equivalent to:

```js
Graph.fromArrows("1->2->2")
```

These simple formats allow you to create unlabelled graphs

```js
Graph.fromArrows(["1->2->2", "2->3"])
```

but it does not allow to add a payload to the nodes or edges. For this purpose you need the pseudo-cypher format:

```js
Graph.fromPseudoCypher("(u:Person{name:'Anna'})-[r:Knows]->(v{id:33})")
```

This will pick up the labels and the payload of nodes and edges. This is not a full Cypher implementation in the sense
that traversals and querying are not parsed. The format is meant to be used for data creation, not for data extraction.


