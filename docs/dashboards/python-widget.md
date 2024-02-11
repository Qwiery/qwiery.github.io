# Python

The Python widget integrates client-side Python to enable advanced analytics and visualizations in Dashboards. The Python widget is based on [Pyodide](https://pyodide.org/) library to run Python code in the browser. This means that you don't depend on any server and also increases privacy. The main disadvantage is scalability and the availability of packages. That said, if you need more we have Python, .Net and NodeJs backend services in our enterprise offering. [Contact us](https://graphsandnetworks.com/contact) for more info.

## Python packages

Pyodide comes with a large amount of packages pre-installed. You can check the list of available packages [here](https://pyodide.org/en/stable/usage/packages-in-pyodide.html). If you need a package that is not available, let us know.

The most important packages included are: numpy, pandas, scikit-learn, matplotlib, scipy, networkx and igraph.

## Qwiery package

The Python widget integrates with Qwiery via the `Q` package. This package is a thin wrapper around the Qwiery API and allows you to interact with the Qwiery backend. The `Q` package is automatically available in the Python widget, but you can also import it explicitly via

```python
import Q
```

Other packages can be imported as usual. For example, if you want to use `networkx` to create an [Erdos-Renyi graph](https://en.wikipedia.org/wiki/Erdős–Rényi_model), you can do:

```python

import networkx as nx
g=nx.erdos_renyi_graph(12,0.5)
gs ={
    "nodes": list(g.nodes()),
    "edges":list(g.edges())
}
Q.graph(gs)
```
Several things should be noted here:

- the `Q.graph` function is used to send the graph to the dashboard widget. This will result in a graph being rendered.
- the `nx.Graph` graph object is converted to a dictionary with nodes and edges. This is necessary because the graph object is not serializable and cannot be sent to the dashboard widget.
- the `graph` method of `Q` effectively tells the widget to render a graph. If you want and bar-chart, area-chart... you can use `Q.bar`, `Q.aread` and so on.

The standard packages allow you to go beyond the default Qwiery capabilities. For example, this script reads in some csv data :

```python
import csv
from js import XMLHttpRequest
from io import StringIO

req = XMLHttpRequest.new()
req.open("GET", "/drugs.csv", False)
req.send(None)


data = StringIO(req.response)
reader = csv.DictReader(data)
data_list = list(reader)

Q.grid(data_list)
```

See the playground for various (advanced) examples.

## Playground

There is [a Python playground](https://demo.qwiery.com/playground) available in the dashboard. You can use this to experiment with Python code. 

![](/playground.png)

:::warning Important

The Python widget and the Q package is an experimental feature and is actively being developed. If you have any feedback or requests, please [let us know](https://graphsandnetworks.com/contact).

:::

