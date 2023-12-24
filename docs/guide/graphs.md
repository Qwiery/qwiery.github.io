# Graphs

Graphs can be embodied in various ways and, especially, on the client side there is no golden standard. On the backend, a graph can be stored in totally different way than how it appears on an API or client level. For instance, AWS Neptune has a Cypher API but the underlying storage is a triple store. In addition, the graph taxonomy can be diverse: is it `source` or `sourceId`, is it `edge` or `relationship`, `type` or `label`?

Qwiery has various utility classes to help you with the conversion from and to the diverse formats. Of course, a particular choice had to be made and within Qwiery (both the clients and the backend packages) we have the following structures (convention):

- a `node` has at least and `id`. This is a string property and is the minimum to ensure one can define edges between nodes
- an `edge` has at least a `sourceId` and a `targetId`. These are string properties pointing to existing nodes
- a `graph` has a `nodes` and `edges` property (both arrays). It has some optional properties such as `name` and `description` and `id`. The `id` is a string property and is used to identify the graph. The `name` and `description` are optional and are used for reporting purposes. The `nodes` and `edges` are arrays of nodes and edges respectively.

If you need to convert a Qwiery node to a Cytoscape node, you can use `CytoUtils.toCyNode` and similarly for other vendors (Ogma, yFiles...).

On the backend, if you use the Qwiery data access layer (DAL) the following applies:

- nodes and edges do not have a complex structure. That is, a property cannot be an object on its own. This follows the Neo4j convention, unlike MongoDB where objects can have complex (sub) structures.
- nodes and edges can have one or more labels and this sits in the `labels` property. Unlike Neo4j where the label on a relationship is called `type`, we call it a `label` on both nodes and edges. Note that some graph databases do not support multiple labels on relationships (e.g. Neo4j can have multiple labels on nodes but only one on an edge). So, the Qwiery API allows you to define multiple labels on edges but it's up to the adapter to handle things if not supported.
- the `name` property is used by default for visualization and reporting purposes. Some vendors prefer `text`, `content` or something else. Here again, use the utility classes to convert to the vendor's preferred property.
 
When (de)serializing graph elements the property `typeName` is used to store the type. In a semantic context, the default type is a `Thing` to denote an arbitrary object or dictionary.
