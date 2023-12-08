# Getting started

Install Qwiery with

```
npm i @qwiery/qwiery
```

and you can immediately create graphs from here on:

```js
const Qwiery = require("qwiery");
const q = new Qwiery();
const a = await q.createNode("a");
const b = await q.createNode("b");
const edge = await q.createEdge("a","b");
console.log(a, b,edge);
```

Qwiery uses by default an in-memory storage adapter, meaning that all you do is volatile and nothing is saved anywhere. Adapters are a special type of plugin which connect to a backend. For example, if you want to transparently have the graphs in [Neo4j](https://qwiery.github.io/adapters/Neo4j/) you would use:

```js
const Qwiery = require("qwiery");
const Neo4j = require("qwiery-neo4j");

Qwiery.plugin(Neo4j);
const q = new Qwiery({
    adapters: ["neo4j"],
    neo4j: {
        host: "localhost",
        port: 7687,
        user: "neo4j",
        password: "your-password",
    },
});

const a = await q.createNode("a");
const b = await q.createNode("b");
const edge = await q.createEdge("a","b");
console.log(a, b,edge);
```
A Qwiery plugin extends the API and can be stacked. For example, if you wish to have a graph schema you can hook up the [Schema](https://qwiery.github.io/plugins/schema/) plugin by first defining a schema (aka ontology):

```js
const schema = {
    nodes: [
        {
            id: "Person",
            name: "Person",
            age: "number",
        },
        {
            id: "Job",
            name: "Job",
            title: "string",
        },
    ],
    edges: [
        {            
            name: "HasJob",
            source: "Person",
            target: "Job",
        }
    ]
}
```
A schema is just a special type of graph which constraints the allowed data (both nodes and edges). The schema above effectively says that:
- only two types of nodes are allowed
- only one type of edge is allowed from Person to Job and has label "HasJob"
- Person has an 'age' attribute and Job has 'title'

Anything else will throw an error.
To enable this in Qwiery, use:

```js
const Qwiery = require("qwiery");
const Schema = require("qwiery-schema");

Qwiery.plugin(Schema);
const q = new Qwiery();
q.setSchema(schema);
```
The `setSchema` method is defined in the plugin and extends the Qwiery API. In addition, it plugs into the storage pipeline to check whether incoming nodes and edges conform to the specified schema.

Of course, you can combine the Neo4j and Schema plugins to effectively create middleware specific to your case.


