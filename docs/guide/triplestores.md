# Triple Stores

A triple store, also known as a RDF ([Resource Description Framework](https://en.wikipedia.org/wiki/Resource_Description_Framework)) store, is a type of database that is optimized for storing and retrieving triples, a data structure consisting of subject-predicate-object. It organizes graph-data is a different way than property graphs leading to a different query language (SPQRQL) and a different type of schema and toolchain.

Property graphs and triples are very different but unless you use specific functionality they can be used on an API level in a similar fashion. Qwiery allows you to use a triple store as a graph backend via the [SPARQL Adapter](/adapters/sparql/).

:::warning Beware
Qwiery uses the common denominator of Sparql and Cypher, allowing you to use both types of databases in an agnostic way. If you wish to use specific functions you need to access the store directly and not via the Qwiery plugin system.
:::

