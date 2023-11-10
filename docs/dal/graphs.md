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

but it does not allow to add a payload to the nodes or edges. For this purpose you need **the pseudo-cypher format**:

```js
Graph.fromPseudoCypher("(u:Person{name:'Anna'})-[r:Knows]->(v{id:33})")
```

This will pick up the labels and the payload of nodes and edges. This is not a full Cypher implementation in the sense
that traversals and querying are not parsed. The format is meant to be used for data creation, not for data extraction.

## Graph generators

There are lots of graph generators and predefined graphs to work with:

- the famous karate club
- the Watts-Strogatz generator
- the Erdos-Renyi generator

and much more. Simply use

```js
Graph.create("small world")
Graph.create("women")
Graph.create("karate")
Graph.create("Erdos", {nodeCount: 120})
```

and more. There are diverse name variations for the graph or generator and each one has its own set of parameters.

## Trees and forests

A tree with a root

```js
const tree = new Tree("root");
```

can be turned into a forest

```js
const forest = tree.toForest();
```

and you can add children with

```js
tree.root.appendChild("child");
```

You will also find depth-first and breadth-first algorithms to traverse the trees and forest.


