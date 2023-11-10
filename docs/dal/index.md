# Overview

Qwiery has a data API which allows you to use diverse backend stores as a graph database. 

What does this solve?

- it allows you to **quickly prototype** apps without having to spin up a real graph database (like Neo4j or TigerGraph)
- you can ship an app (proof of concept, MVP...) **without an external dependency**
- you can use a **lightweight yet robust SQL solution**, like SQLite, for relational and graph data
- you can **switch between a local store (for development) and a real graph** (for production).
- you optionally plug diverse gears in function of your needs, e.g. schema checking or guards

What is it not?

- the Qwiery API comes with lots of methods to make things easy but it's not Cypher, SPARQL or Gremlin. Data access is in the first place based on method calls and not queries.
- it's not an object-graph mapper (OGM) although you do have OGM aspects which can be useful
- it doesn't in any way replace the need for something like Neo4j if you have a serious amount of data or high performance needs (indexing and all that)
- something you can use in the browser. A lot of code does work in the browser but the proverbial 20% likely kills the joy.

Note that this data access layer is very simple to extend. If you do need advanced queries you can add a custom method wrapping such a query and happily continue with the other basic methods (e.g. fetching nodes based on their id).


With Qwiery, you can:

- Model and **manage complex relationships** between data.
- Enforce consistency using **an optional schema (aka ontology)** via plugins.
- Change how your graph data is **stored by changing adapters**.
- Chain plugins and adapters to **assemble your business logic**.

 Qwiery is **open source**, which means you have the freedom to use, modify, and distribute the software as you see fit. You can also contribute to the development of the database by submitting bug reports, feature requests, or code changes.

 Plugins and adapters are **easy to develop and to hook up**. The code is plain JavaScript and can be used in the browser or with NodeJs.

[Getting Started](/dal/getting-started)
