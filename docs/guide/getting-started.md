# Getting Started

Qwiery jumpstarts your graph-driven development by providing:

- a web application (Nuxt, Next, Angular...) with graph editing, schema visualization and more
- an HTTP (REST) service focused on graph CRUD (create, read, update, delete)
- a flexible graph data abstraction layer with implementations for SQL, OpenCypher, JSON...

Out of the box, you can simply clone the repo, npm install and run:

```bash
git clone https://github.com/Qwiery/qwiery-nuxt.git
cd qwiery-nuxt
npm i
npm start
```
**No need to install a graph database**, Qwiery comes with a JSON (in-memory and/or file based) implementation. This is great for prototyping apps, generate visualization ideas and more. With one line of code you can switch to SQL (yes, graphs in RDBMS) or another backend (Neo4j, MongoDB etc.). 

**No need to buy or install a graph visualization package.** The default setup is based on the Cytoscape graph library and is sufficient for basic editing and simple graph visualizations.

If you need more juice on the visualization level, we have also branches on top of [yFiles](https://www.yworks.com/products/yfiles-for-html) and [Ogma](http://linkurious.com/ogma/). Provided you have a valid license, these frameworks will articulate advanced graph visualizations and go far beyond what the basic Cytoscape version does. 

If you need more business logic or middleware, the code is well-documented and carefully crafted:

- extend the Qwiery data layer with [plugins](/dal/plugins) and [adapters](/dal/adapters)
- an overview of the [architecture](/guide/architecture)
- [how to deploy](/guide/deployment)
- [styling and branding](/clients/nuxt/styling)



::: info Support
This is open source software (MIT license) and comes with [good-intentions support](/oss). 
For custom feature, enterprise versions, guidance and bespoke development, see the [enterprise page](/enterprise)
:::
 

