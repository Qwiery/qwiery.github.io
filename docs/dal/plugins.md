# Plugins

Plugins extend the core API and the storage pipeline. A plugin affecting the storage logic is called an adapter and is a special type of plugin.

The [Semantic](https://qwiery.github.io/plugins/Semantic/) plugin, for example, does not change the storage logic but does extend the API. You enable it like this
```js
const Semantic = require("qwiery-semantic");
const Qwiery = require("qwiery");

Qwiery.plugin(Semantic);
const q = new Qwiery();
```
and from here on you have a semantic (aka RDF or triple-store) methods, for instance `createTriple`:

```js
await q.createTriple("subject", "predicate", "object");
```
This plugin uses the internal storage API and can further downstream be pushed via an adapter in a backend database (OpenCypher, SQL, whatnot).

An adapter can be registered with the `plugin` method or via the `adapter` method. It does not extend the API but will transfer the data in such a way that it 'fits' the underlying storage.

The [SQL Adapter](https://qwiery.github.io/adapters/SQL/) for example will transparently convert graphs into something fitting a relational database. Note that not every features is necessarily supported by every adapter. The SQL adapter is the common denominator and, for instance, if you want to use [the graph specific functionality in MS SQL](https://learn.microsoft.com/en-us/sql/relational-databases/graphs/sql-graph-overview?view=sql-server-ver16) you will need to write a forked version. 

## Creating your own plugin

A plugin is, of course, in essence nothing but a mix-in. The following will, hence, work without any issues:

```js
const PeoplePlugin = {
    getPerson(personId){
        return {
            id: personId
        };
    }   
}
Qwiery.plugin(PeoplePlugin);
```
This does not integrate really with Qwiery, so if you want to access the storage methods you need to go a step further. Define a module which exports a function with a parameter 

```js
class People {
    getPerson(personId) {
        return this.getNode({id: personId})
    }
}

module.exports = function (Q) {
    const peopleApi = {
        getPerson: People.prototype.getPerson
    };
    Q.plugin(peopleApi);
};

```
Note that the `getNode` method is part of the Qwiery storage API. The way the `getPerson` is fetched is really dependent on the registered adapters. A plugin can in fact act both on the API and on the storage level. The [Schema](https://qwiery.github.io/plugins/Schema/) plugin is an example of this.

Plugins and adapters are really complementary in the sense that plugins extend the API while adapters change the existing API. It is tempting to write a plugin which tries to change the behavior of, say, `createNode` but this will not work as expected. If you want to change the logic of a method like `createNode` you need to use an adapter rather than a plugin. At the same time, if you want to add a method to the API and consume the core API this will be fine. You can also combine both in one go, the [Schema](https://qwiery.github.io/plugins/Schema/) plugin does this, as can be seen in the following:

```js
module.exports = (Q) => {
	// the adapter guards the incoming data
	Q.adapter("schema", SchemaAdapter);
	// the api adds schema methods to Qwiery
	Q.plugin(SchemaApi);
};
```
