# Graph Databases

There are lots of graph databases out there. In fact, unlike the relational world, there is a spectrum  of flavors: multi-modal, triple stores, property graphs, SQL-ish and more.

Picking the 'right' database for your use-case is a bit a project on its own and you we can help guide you through the jungle, if you wish. [Send us a mail](mailto:info@orbifold.net) and we'll get through it.

Broadly speaking, there are a three types of graph databases:

- property graphs: Neo4j, MemGraph...
- triple stores: GraphDB, StarDog...
- all the rest: CosmosDB, SurrealDB, TypeDB...

This distinction is blurred by the fact that vendors implemented API's (query languages) which let database behave differently on an API level than how they manage data underneath. For instance, AWS Neptune allows you to query things with Cypher despite the fact that underneath it is not a property graph.

Property graphs are queried with Cypher but it has an open standard (called OpenCypher) which is implemented by various products.

Triple stores are queried with SPARQL and are part of the soc-called semantic stack or RDF world. 

The 'rest' has a wild range of query dialects: TigerGraph's GSQL, TypeDB uses TypeQL and so on.

Some graph databases are really relational databases with an additional API allowing to use traversals. Microsoft SQL Server has graph-like T-SQL constructs. PostgreSQL has Apache AGE adding a full graph API on top of a robust SQL storage.

This gives you a taste of the complexity and diversity in the graph database domain.

Qwiery does not offer a graph database, it gives you an API which uniformly speaks to diverse databases. In addition, for protyping purposes it includes a JSON in-memory graph storage. Qwiery helps you to quickly create apps on top of graph databases without forcing one or the other. If you want to use a triple store you can do so, if you prefer Cypher that's fine as well.

Qwiery does not, out of the box, support the exotic vendors (like TigerGraph or TypeDB) but it can be if you implement the necessary REST API.

Much like [ODBC](https://en.wikipedia.org/wiki/Open_Database_Connectivity) used to be an open connectivity standard, Qwiery gives you an open API that unifies data access. The advantage is that you can create an app without having to think much about how it gets stored in the backend. The disadvantage (much like ODBC) is that vendor-specific things are not directly accessible. 

 