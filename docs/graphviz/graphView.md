# Graph View API

This interface is implemented by the various graph visualization wrappers. It's the common denominator and in most cases sufficient for standard graph apps. Of course, each package has its own scope and if you wish to fully exploit one you will need to go beyond this interface. 

For example, the yFiles package has a wealth of graph layout algorithms far beyond what Cytoscape has to offer. This interface allows you go run some of the yFiles layouts with appropriate defaults but you should see this only as a jump-start. 


***

General principle:

*   the actual implementation uses underneath different types of node or edge structure
*   nodes/edges go in and out as plain objects, DO NOT return vendor specific objects
*   a nodes/edges have an id
*   in addition, an edge has sourceId/targetId
*   all the rest is optional (labels, name, position...)

***

## addNode

Adds a new node to the graph.

Type: function (n: IQwieryNode): string

### Parameters

*   `n`  {IEntityNode} The raw data defining the node.

Returns **string** The id of the node.

## addEdge

Adds a new edge to the graph.

Type: function (edge: IQwieryEdge): string

### Parameters

*   `edge`  {IEntityEdge} The raw data defining the edge.

Returns **string** The id of the edge.

## loadGraph

Load the given graph in the viewer.

Type: function (g: (GraphLike | any), replace: boolean): void

### Parameters

*   `g`  {GraphLike} A (JSON) graph.
*   `replace`  {boolean} Whether it should replace the current view or increment it.

## clear

Clear the view (remove all nodes and edges).

Type: function (): void

## setStyle

Apply the given style.

Type: function (styleName: string): void

### Parameters

*   `styleName`  {string} The style name.

## layout

Apply the layout with the name and options.

Type: function (layoutName: string, options: any): void

### Parameters

*   `layoutName`  {string} The name of the layout.
*   `options`  {any} Options specific to the layout.

## center

Pan the graph to the centre of a collection.

Type: function (fit: boolean): void

### Parameters

*   `fit`  {boolean} Resize to fit the canvas.

## fit

Fit the graph in the canvas.

Type: function (padding: number): void

### Parameters

*   `padding`  {number} The margin around the graph (in pixels).

## zoom

Zoom into the diagram.

Type: function (amount: number): number

### Parameters

*   `amount`  {number} A value >1 magnifies while &leq;1 zooms out. If nothing is given the current value is returned.

## removeNode

Removes the node with the given id.

Type: function (id: (string | any)): void

### Parameters

*   `id`  {string|any} A node or the id of a node.

## getNodes

Returns the nodes of the graph or the ones satisfying the given predicate.

Type: function (filter: Function): Array&lt;any&gt;&gt;

### Parameters

*   `filter`  {Function} Optional node predicate.

## removeIsolatedNodes

Removes the nodes with degree zero.

Type: function (): void

## edgeCreation

Enables or disables the interactive edge creation.

Type: function (enabled: boolean): void

### Parameters

*   `enabled`  {boolean} Whether it should be enabled.

## nodeCreation

Enables or disables the interactive node creation.

Type: function (enabled: boolean): void

### Parameters

*   `enabled`  {boolean} Whether it should be enabled.

## centerNode

Centers the given node.

Type: function (node: any): void

### Parameters

*   `node`  {any} A node.

## selectedNodes

Returns the selected nodes.

Type: function (): Array&lt;any&gt;&gt;

## getPosition

Returns the position of the pointer on canvas.

Type: function (): \{x:number, y:number\}

## removeSelection

Removes whatever is selected.

Type: function (): void

## getNode

returns the node with the specified id.

Type: function (id: string): any

### Parameters

*   `id`  {string} An identifier.

## setNodeProperties

Sets multiple properties in one go.
