# Connections

Ths panel lists the dashboard connections. Every widget can use a different connection and this is where you can add, edit, and remove connections.

Out of the box we supply the list of freely available [Neo4j Labs](https://neo4j.com/labs/) databases. These are read-only and are meant to be used for testing and learning purposes.

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

