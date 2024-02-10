# FAQ

## What is Qwiery?

Qwiery is a collection of packages that help you build graph-drive apps.

## What is a graph-driven app?

A graph-driven app is an application that is based on a graph data model. The graph data model is a powerful way to represent and query data. It is a natural way to model many types of data and is particularly well-suited for data that is interconnected.

## Where does the name 'Qwiery' come from?

It refers to the word 'query' and is a play on the word 'query' and 'wiry' (as in 'lean and strong').

## Why Vue/Nuxt and not React/Next or Angular?

One has to make a choice when embarking on a project. It's a personal preference and does not imply any qualitative distinction or rejection of other frameworks. There will be React/Next forks in the future and many packages (the utils, the graph library, all of the Qwiery data access layer) are, in fact, independent of the UI frameworks. These are standard npm packages and can be used with any client (or backend) JavaScript/TypeScript context.

## Why yFiles and Ogma? Why not D3 or Vis.js?

Actually, Qwiery is not bound to any graph visualization library. The graph visualization is a separate package and can be swapped out. The reason for choosing yFiles and Ogma is that they are very powerful and have a great feature set. They are also well-documented and have a great support community.

We do have integrations with Cytoscape, d3 and Vis.js, but if you want an enterprise solution, yFiles and Ogma are the way to go.

We have partnered with both yFiles and Linkurious in the past decade and have delivered tons of projects with these libraries. We are a reseller of yFiles and Linkurious and have a great relationship with these teams.


## Why TypeScript?

TypeScript is a superset of JavaScript and adds static typing to the language. It is a very powerful tool to write better code and to catch bugs early. It is also a great way to document the code and to make it more readable. TypeScript is a first-class citizen in the JavaScript world and is supported by all major frameworks and tools. 

## Can Qwiery be used in a browser?

Yes, most of the Qwiery packages can. The data abstraction layer (aka DAL) is, however, meant to be used with NodeJs because of its dependency on the file system and/or connectivity to data stores. 

## Can Qwiery be used in a commercial project?

All of the Qwiery packages are MIT licensed and can be used in any project, commercial or not. Users of software using an MIT License are permitted to use, copy, modify, merge publish, distribute, sublicense and sell copies of the software. 
You do need to include the license in your project.

Do not abuse or misuse the Qwiery brand and logo. Do not use the Qwiery brand or logo in a way that suggests any type of association or partnership with Qwiery. Do not use the Qwiery brand or logo in a way that is harmful, deceptive, obscene or otherwise objectionable to the average person. Do not alter the Qwiery brand or logo in any way. Do not register a domain name containing the Qwiery brand or logo or any confusingly similar words or marks.

Same goes for the name 'Orbifold' or 'Orbifold Consulting'.

## Can I contribute?

Yes, please do. The project is [[open source](https://github.com/Qwiery/)] and contributions are welcome. 

## Can I use Qwiery in my own project?

Yes, you can. The Qwiery packages are all MIT licensed and can be used in any project, commercial or not.

## What is the roadmap?

The roadmap is a living document and can be found [here](vision.md).

## What about NeoDash?

[NeoDash](https://neodash-gallery.graphapp.io) is a great product but it's tightly bound to Neo4j. With Qwiery Dashboards we want to be open to other graph databases (MemGraph KuzuDB, ArcadeDB and others) and to other (not necessarily graph) data sources. The Qwiery Dashboards also boast high-end graph visualization libraries (yFiles and Ogma). Finally, React (on which NeoDash is based) is a highly popular but horrible framework. Qwiery is based on Vue/Nuxt and this gives an additional alternative to the community.

## What about Tableau or Apache Superset or ...?

Qwiery Dashboards are not meant to be a replacement for these products. There is, however, a need for graph-based reporting and visualization. All of the commercial BI tools are focused on relational data (for good reasons) and the Qwiery Dashboards are a solution if you with to prototype graph visualizations. We made sure that it's easy to extend, so you can use it as a stepping stone or as a mockup for a fully fledged BI solution.

## Contact info?

You can find all the info you need [here](https://graphsandnetworks.com/contact).

## What is the relation between Qwiery and Orbifold?

Qwiery is a product of Orbifold Consulting. Orbifold Consulting is a company that specializes in graph-driven applications and graph visualization. It has been around since 2005 and has delivered many projects in the graph space, across all industries. The Qwiery packages is a consolidations of tools that we have developed over the years.

## I only need some graph visualization, can I use Qwiery?

Qwiery allows you to integrate any graph visualization package, for instance in our Qwiery Dashboards. It is not a replacement for the many wonderful open and closed source graph visualization libraries.

If you need basic graph visualization, take a look at [Cytoscape](http://js.cytoscape.org/), [vis.js](https://visjs.org) or [this](https://github.com/vasturiano/force-graph). If you are serious about graph visualization, take a look at [yFiles](https://www.yworks.com/products/yfiles) or [Ogma](https://doc.linkurious.com/ogma/latest/). You can [contact us](https://graphsandnetworks.com/contact) for guidance, as well.
