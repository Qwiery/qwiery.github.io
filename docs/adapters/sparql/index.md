# Sparql Adapter


You can initiate the adapter like this:

```javascript
Qwiery.plugin(Sparql);
const q = new Qwiery({
    adapters: ["sparql"]
});
```

The Sparql adapter implements [the full Qwiery interface](/dal/adapter-methods).