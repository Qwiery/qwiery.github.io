# Connections

Ths panel lists the dashboard connections. Every widget can use a different connection and this is where you can add, edit, and remove connections.

Out of the box we supply the list of freely available [Neo4j Labs](https://neo4j.com/labs/) databases. These are read-only and are meant to be used for testing and learning purposes:

- [Movies](https://github.com/neo4j-graph-examples/movies) 
- [Northwind](https://github.com/neo4j-graph-examples/northwind)
- [Recommendations](https://github.com/neo4j-graph-examples/recommendations)
- [Fincen](https://github.com/neo4j-graph-examples/fincen)
- [Twitter](https://github.com/neo4j-graph-examples/twitter-v2)
- [Stackoverflow](https://github.com/neo4j-graph-examples/stackoverflow)
- [Game of Thrones](https://github.com/neo4j-examples/game-of-thrones)
- NeoFlix
- Wordnet
- Slack

All of these databases can be queries and explored via this [Neo4j Browser](https://demo.neo4jlabs.com:7473/browser/).

## Adding a connection

Click the `Add` button to add a new connection. You will be prompted for the following information:

- name: only used for display purposes
- host: the host of the database, typically `localhost` or an IP address
- port: the port of the database, typically `7687` for Neo4j
- username: the username to connect to the database, typically `neo4j` for Neo4j
- password: the password to connect to the database
- database: the name of the database to connect to, typically `neo4j` for Neo4j
- protocol: the protocol to use, typically `bolt` for Neo4j

You can test the connection via the button in the lower-right.

If you delete a connection, all widgets using that connection will display the error '**Error: Connection '_the name of the database_' not found'**

## MemGraph

Memgraph is a high-performance, in-memory graph database that is fully compatible with the Cypher query language. You can download Memgraph from [here](https://memgraph.com/download).

To connect to (a local) MemGraph, you will need to provide the following information:

- name: only used for display purposes
- host: localhost
- port: 7687
- protocol: bolt

The remaining fields are not necessary. You can test the connection via the button in the lower-left.

## Kuzu

Kuzu is an in-memory graph database that is fully compatible with the Cypher query language. You can download Kuzu from [here](https://kuzudb.com).

Currently Kuzu does not support the bolt protocol and as an in-process database, **Kuzu does not have a server component**. As such, there is not an easy way to connect to this graph database.

We do offer a backend service (Python, NodeJs or .Net) allowing to connect to Kuzu indirectly. Please [contact us](https://graphsandnetworks.com/contact) for more information.

## ArcadeDB

ArcadeDB is a multi-model graph database that is fully compatible with the Cypher query language. You can download ArcadeDB from [here](https://arcadedb.com).

However, ArcadeDB [does not support Neo4j’s Bolt protocol](https://docs.arcadedb.com/#Open-Cypher) and this means you can’t use the integrated Neo4J driver with ArcadeDB server.

