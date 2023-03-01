# Adapters

An adapter converts Qwiery graphs to and from an underlying database. Out of the box, Qwiery uses an in-memory adapters and, hence, does not store anything at all. 

Adapters can be stacked and this is the reason why an adapter needs an id when registered:

```js
Q.adapter("schema", SchemaAdapter);
Q.adapter("neo4j", Neo4jAdapter);
```
If multiple adapters have been registered you need to tell Qwiery in which sequence they should operate:

```js
const Qwiery = require("qwiery");
const Neo4j = require("qwiery-neo4j");
const Schema = require("qwiery-schema");
Qwiery(Neo4j);
Qwiery(Schema);
const q = new Qwiery({
    adapters: ["schema", "neo4j"]
});
```

::: warning Important
The sequence you register the plugins does not define by default the way they are called.
:::

Adapters can also change the data before it passes it on to the next adapter. The dev example below shows you how.

## Creating your own adapter

An adapter is slightly more complex than a plugin because of the async nature of storing things and the fact that adapters can be stacked together.

The following adapter ensures that nodes have a default label. Labels are optional in Qwiery and this adapter is a way to set a default or some default logic.

```js
function DefaultNodeLabelAdapter(options, done) {
	const api = {		
		createNode(done) {
			return async ([data, id, label]) => {
				const specs = Store.getNodeSpecs(data, id, label);

				if (specs !== null) {
					if (specs.labels.length === 0) {
						specs.labels = ["Something"];
					}
					return done(null, [data, id, specs.labels]);
				}
				return done("Failed to interprete the parameters as node specs.", null);
			};
		},
	};

	process.nextTick(() => {
		// first param is an init error
		done(null, api);
	});
}
```
This function is an adapter you can register like so:
```js
	Qwiery.plugin((Q) => {
			Q.adapter("set-node-label", DefaultNodeLabelAdapter);
		});
```

There are various things to highlight here:

- the `createNode` method overrides the Qwiery method by checking whether a label has been defined and if not one is set before passing the arguments down the chain
- the `done` callback has two arguments: an error message and the parameters of the method to pass to the next adapter. In this case the given parameters are passed down with, possibly, an extra label.
- the `Store.getNodeSpecs` is a utility to assemble the parameters. The reason for this is because most Qwiery methods are overloaded and one can specify a label in multiple ways. Either via a plain object containing the labels attribute or via the explicit labels argument. So, this utility method checks things and potentially also return an error (e.g. if no parameters were given).
- the `done` method with an error in the first argument will raise an exception and the second parameter is irrelevant at this point.
- the `nextTick` is a trick to ensure that the adapter is hooked up prior to any other call. It effectively ensures that any potential `createNode` call will come after the adapter has been registered.

