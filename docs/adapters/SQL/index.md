# SQL Adapter

The SQL adapter allows you to use a relational database as a graph database. 

To enable this you need to configure Qwiery as follows:

```javascript
import Sqlite from "~/utils/qwiery-sql/lib/index.js";
Qwiery.plugin(Sqlite);
const filePath = "~/somewhere"

const q = new Qwiery({
    adapters: ["sql"],
    sql: {
        dialect: "sqlite",
        storage: filePath,
    },
});
```
## How does it work?

The Qwiery SQL adapter creates/uses two table (called nodes and edges) and the graph mechanics sits in the SQL queries. The [Sequelize](https://sequelize.org) package is used to streamline things and allows to execute queries with a MongoDB-like syntax (aka projections). **This means that pretty much any SQL database will work.** There are no vendor-specific SQL queries and the heavy lifting is done inside Sequelize.

Of course, you can add domain specific elements things via custom queries. For instance, many apps in the oil and gas industry use [Witsml](https://www.energistics.org/) and it's straightforward to create graph visualizations even if the underlying database is relational.

For more details, please [contact us](/enterprise).

## Pro and Con

The main advantage of using a RDBMS for your graphs is not to have to install or buy an additional system component (say, Neo4j). For basic graph needs, this works great. The SQLite variant, in particular, is a robust solution if you wish to go beyond the JSON graph store without spending tons of money.

The main disadvantage is the fact that graph traversals (depth-first visits, shortest paths and all that) are inherently slow. Storing graphs in a relational system is easy, querying them can be a pain.

Additional considerations:

- some databases have built-in support for graphs (e.g. Microsoft SQL Server) and the generic SQL layer in Qwiery does not make use of vendor-specific SQL constructs. We do have code for this, [contact us](/enterprise) if you wish to know more.
- there are databases with their own graph layer, see for instance [the Apache AGE project for PostGreSQL](https://age.apache.org).
- some vendors mix the SQL language with graph constructs, see for instance [SurrealDB](https://surrealdb.com)
- the multi-modal databases combine graphs, documents, key-values and more. Examples are [Microsoft CosmosDB](https://azure.microsoft.com/en-us/products/cosmos-db), [ArcadeDB](https://arcadedb.com) and many more
- obviously, indexing and constraints are not focused on graphs but you can benefit from BLOB fields and mix the best of both worlds
