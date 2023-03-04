# Qwiery Utils

The **Qwiery Utils package** [source](https://github.com/Qwiery/qwiery/tree/main/packages/qwiery-utils) contains a
cornucopia of utility functions which are used across Qwiery but also have on their owm great value.

The following (static) classes are available:

- [Utils](#utils) ([source](https://github.com/Qwiery/qwiery/blob/main/packages/qwiery-utils/lib/utils.js))
- [Dates](#dates)
- [DateString](#datestring)
- [Durations](#durations)
- [Predecessors](#predecessors)
- [Predecessor](#predecessor)
- [Strings](#strings)
- [Time](#time)
- [Colors](#colors)
- [Crypto](#crypto)

## Utils{#utils}

```js
const {Utils} = require("qwiery-utils");
```

### amountToMoneyFormat

Returns a money format or an empty string if the conversion failed.
If no currency is specified, USD will be used as a default.

```js
Utils.amountToMoneyFormat(12, "EUR") // €12.00
Utils.amountToMoneyFormat(10) // US$10.00
```
The full list of currency codes can be found in various places, see e.g. [this ISO-4217](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=currency-codes).

### boolToYesNo 

Turns the given input into "Yes" or "No". It also accepts things like 'yep', 'nah', 'nope' and so on.

```js
Utils.boolToYesNo(true); // Yes
Utils.boolToYesNo(false); // No
Utils.boolToYesNo("nope"); // No
Utils.boolToYesNo("duh"); // Yes
```
### camelTypeToTitle

Turns a camel-cased string into a title.

```js
Utils.camelTypeToTitle("itWorks"); // It Works
Utils.camelTypeToTitle("thisTime"); // This Time
```
## Date{#date}

## DateString{#datestrings}

## Durations{#durations}

## Predecessors{#predecessors}

## Strings{#strings}

## Time{#time}

## Colors{#colors}

## Crypto{#crypto}

