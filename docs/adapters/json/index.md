---
title: Json Adapter
editLink: true
---

# Json Adapter

Qwiery uses the Json adapter by default and you don't need to configure anything to make it happen. This means that you can create an app without having to install a graph database.

This in-memory JSON adapter does not persist anything and if you wish to do so you need the following setup:

```javascript
const q = new Qwiery({
    adapters: ["json"],
    json: {
        autoSave: true,
        interval: 5000,
    },
});
```


The Cypher adapter implements [the full Qwiery interface](/dal/adapter-methods).