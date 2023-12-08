# Web API

All of the data used by the app is fetched from a REST Http service and you can also use this service independently of the client. The relevant code sits in `server/api/graph` and what is being served can be defined in the `graphDB.ts` file.

## Data access configuration

All of the services sit in separate files and this is part of the Nuxt mechanics. For instance, the edge deletion API method corresponds to the `edge.delete.ts` file:

```typescript
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    return await GraphDB.deleteEdge(body.id);
});
```
The actual code deleting an edge is done inside Qwiery and is defined in the `graphDB.ts` file:

```typescript
console.log("Qwiery backend with JSON adapter enabled.");

const q = new Qwiery({
    adapters: ["json"],
    json: {
        autoSave: true,
        interval: 5000,
    },
});

export { q as GraphDB };
```
The configuration above will use an in-memory JSON graph and save the state every 5 seconds.

If you prefer to use an SQL database, you can change this to:

```typescript
console.log("Qwiery backend with SQLite adapter enabled.");
import Sqlite from "~/utils/qwiery-sqlite/lib/index.js";
Qwiery.plugin(Sqlite);
let filePath = path.join(process.cwd(), "data.sqlite");
console.log("Data path >>", filePath);
const q = new Qwiery({
	adapters: ["sqlite"],
	sqlite: {
		dialect: "sqlite",
		storage: filePath,
	},
});
```
There is a food database in the root of the solution called `data.sqlite` (around 40MB) which has information about recipes and ingredients. You can open this database with any SQLite client.
Qwiery uses two graph tables (nodes and edges) inside this relational database and transparently behaves as if it was a graph database.

## Customization

You can alter any of the API methods and mix 'n match different stores. You can also add additional API methods with just a few lines of code. 

For enterprise customers, we have standalone implementations using **Express, C# and Java**.

## API Client (aka proxy)

In the `utils/GraphAPI.ts` you can find an abstract class called `GraphAPIBase` and a default implementation going to the aforementioned web services.
Here as well, you can redirect calls to a web service outside this Nuxt implementation, use a service independent of the Qwiery plugin mechanism and more.
The Qwiery client application does not force you in any way, it tries to make the development as open and easy as possible.
