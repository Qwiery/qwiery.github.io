---
title: Cypher Adapter
editLink: true
description: Qwiery Cypher adapter allows you to connect to Neo4j.
---
# Cypher (Neo4j) Adapter

::: info Support
[OpenCypher](https://opencypher.org), as an open query standard, is implemented by diverse graph databases and this adapter should work with most implementations.
:::

You can initiate the adapter like this:

```javascript
Qwiery.plugin(Cypher);
const q = new Qwiery({
    adapters: ["cypher"]
});
```
You can specify connection options using the adapter options:

```javascript
Qwiery.plugin(Cypher);
const q = new Qwiery({
    adapters: ["cypher"],
    cypher:{
        protocol: "bolt",
        host: "124.2.1.23",
        port: 7687,
        username: "neo4j",
        password: "123"
    }
});
```

The Cypher adapter implements [the full Qwiery interface](/dal/adapter-methods).
