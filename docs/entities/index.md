# Entities

This npm package contains the (data) entities used across Qwiery. In particular, the message-passing mechanism of [Qwiery Dashboards](/dashboards/index.md) uses these entities to communicate.

The package can be found [here](https://www.npmjs.com/package/@orbifold/entities)
and installed via

```bash
npm install @orbifold/entities
```

The GitHub repo is [here](https://github.com/Qwiery/qwiery-entities).

Using these entities is straightforward and their power reside in the fact that they are used for drag-drop, for rendering, for communication and for storage. They are the backbone of Qwiery.
The crucial property is the `typeName` defining the serialization type:

```javascript

const ms = MessageFactory.fromAny({
    typeName: 'MarkdownMessage',
    text: 'Hello'
});
```

The `NotebookCell` is a special entity related to the rendering system and is used for terminal rendering, dashboards and literate programming.

