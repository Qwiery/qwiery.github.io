# Vision &amp; Roadmap

Q1 2024

Qwiery is a collection of packages and components that together form a platform for building graph-driven applications. The vision is to provide a comprehensive, easy-to-use and powerful set of tools that allow consulting projects to be delivered faster. Especially if based on property graph stores like Neo4j and graph visualization packages like yFiles and Ogma.
The platform is designed to be modular, scalable and flexible. It is open source (MIT) and can be used in a variety of scenarios, from small personal projects to large enterprise applications.

[Orbifold Consulting](https://orbifold.net) has been actively developing all sorts of graph apps in the past 20 years and Qwiery is a consolidation of all that experience. We have been using it in a variety of projects, across all industries and countries.

The **graph database** landscape has never been more diverse and dynamic. The Qwiery platform is designed to be agnostic and can work with any graph database. However, the primary focus is on Neo4j, which is the most mature and feature-rich graph database available today. We have developed apps for TigerGraph, MemGraph, AnzoGraph, GraphDB and many more. We also have created graph apps based on relational stores (SQL Server, PostGres...) and you can find this reflected in [the Qwiery data access layer](/dal/index) which allows one to connect to graph and non-graph stores. Of course, in trying to make data access as uniform as possible one has to compromise. This means that Qwiery is great for prototyping and MVPs but if you do wish to get the best of a particular graph store you  need to write a dedicated access layer.

Regarding **graph visualization**, we have been using [yFiles](https://www.yworks.com/products/yfiles), [Ogma](https://doc.linkurious.com/ogma/latest/), [Cytoscape](http://js.cytoscape.org), [GoJs](https://gojs.net)... for many, many years. Orbifold is the only company delivering enterprise consulting and guidance with expertise in all these packages. yFiles and Ogma are the most powerful and flexible packages and Qwiery is designed to work with them. We do understand, however, that not every project has the budget and the need for these high-end packages. Therefore, you will find in our toolbox packages for Cytoscape, d3js and more.

The JavaScript eco-system is a jungle and we have been navigating it for a long time. Although we have developed apps with Angular, React, Svelte and whatnot, we have chosen to use Vue/Nuxt for Qwiery. It's not a choice based on popularity but on a personal preference. When it comes to web development, our advice is to pick something in which you feel productive and with a rich community. There are lots of packages we have created independent of client development: the [Utils](https://github.com/Qwiery/qwiery-utils), [Entities](https://github.com/Qwiery/qwiery-entities), [Graph](https://github.com/Qwiery/qwiery-graphs)... are all packages you can use front and back and with any framework.

The **Qwiery dashboards** are the result of many years of experience in delivering data visualization apps. We have been using Tableau, PowerBI, Qlik, Looker... and we have developed our own dashboards. The Qwiery dashboards are designed to be easy to use, fast and flexible. Technically speaking, the UI powering the widgets is similar to powering notebooks (literate programming) and terminal components. In the near future we will release **Qwiery Notebooks** and this will create an experience similar to Jupyter. 

The reason why we decided to include **client-side Python** is to make POC's possible without developing full-fledged backends. Sure, having a FastAPI or Flask service is often what you need but wanted something one can develop and distribute without having to go through docker and cloud deployments. Pyodide as client Python has its limitations and quirks but it usually proves the ideas and feasibility of a particular product. That said, we do have Python, C# and NodeJs backends you can connect to the Qwiery platform, but they have to mature a bit more before finding their way to Github.

On a completely different level, there is in every project the need for data wrangling and ETL. We have a ton of Airflow scripts and this will eventually be packaged into reusables. The ad-hoc Python imports are more difficult to generalize, but maybe we will find of way to make to available as well.

At this point (we are early 2024) our main focus is on the dashboard and notebooks. The following features and ideas are work in progress:

- dragdrop of CSV and Excel files to create dashboards
- creating dashboards on the fly, e.g. by analyzing the content of a given URL (say Wikipedia)
- allowing to connect to SPARQL endpoints
- branding and customization so you can expose dashboards to your clients
- dragdrop widgets with a particular focus on graph visualization (centrality measures)
- document (pdf, Word) export of dashboards
- JavaScript widgets
- documentation of how to embed dashboards
- examples of dashboards with SQL backends, MemGraph, streaming graphs, RDF stores...

[Let us know your thoughts and ideas](https://graphsandnetworks.com/contact), we are always eager to learn and improve.
 
