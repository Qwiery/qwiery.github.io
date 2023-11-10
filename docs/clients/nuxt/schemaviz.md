# Schema Visualization


![schema](/schemaviz.png)

Most graph databases don't enforce a schema and they infer one on the basis of the data. Only some products like TigerGraph require one to design a schema prior to adding data (as is the case in all relational DB's).

If you wish to render a schema it should as simple as calling a DB method (like `CALL db.schema()` in the case of Neo4j) and turning the returned info into a Qwiery `Graph` instance.

If you use the built-in Qwiery data access you can use the `inferSchemaGraph` method which will also infer the schema. In the case of a SQLite, for instance, this will scan all labels and all edge types and assemble a schema graph correspondingly.
This also works with the `JsonGraphStore` and other implementations.

Of course, if you don't have any labels on nodes or edges this will result in an empty schema.


