# Graph Schema's

A graph database schema is a conceptual representation of the data stored in a graph database, including the types of relationships between data entities and the properties or attributes of those entities.

Unlike relational databases which typically use a static, predefined schema, graph databases often employ a schema-less or "schema-optional" design. In fact, this applies to most NoSQL databases. This means that while you may define a schema for your data, it's not mandatory, and it can be easily adjusted to accommodate evolving data requirements. This flexibility makes graph databases well-suited to modelling complex and interconnected data.

When using Qwiery the schema will, hence, be inferred from the data. Depending on the adapter, this means that the schema has to be harvested from all nodes and their properties (this is e.g. the case with the JSON adapter) or fetched from an internal call (e.g. Neo4j with a call to [db.schema.visualization](https://neo4j.com/docs/operations-manual/current/reference/procedures/#procedure_db_schema_visualization)).

As such, one does not design a schema for a graph database and it does typically not enforce anything. The [Qwiery schema visualization](/clients/nuxt/schemaviz) is purely informative. Some graph databases (e.g. [TigerGraph](https://tigergraph.com) and [TypDB](https://typedb.com)) do have strict schema adherence but most do not.

::: info Schema Plugin
If you do wish to have a schema protected graph you can use the [schema plugin](/plugins/schema/) which enforces a predefined schema. It effectively intercepts calls to and from the underlying storage to ensure it matches the schema.
:::

