# Qwiery Utils

The **Qwiery Utils package** [source](https://github.com/Qwiery/qwiery/tree/main/packages/qwiery-utils) contains a
cornucopia of utility functions which are used across Qwiery but also have on their owm great value.

The following (static) classes are available:

- [Utils](#utils)
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
import { Utils } from "@orbifold/utils";
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

Part of [the Qwiery Utils package](https://github.com/Qwiery/qwiery-utils), the `Colors` class provides a set of color-related utilities.

Install with:

```bash
npm install @orbifold/utils
```
and import in your module with:

```js
import {Colors} from "@orbifold/utils";
```



### NamedColor

This is a dictionary of the classic predefined (Web) CSS colors and returns the hex value for a given name.

```js
Colors.NamedColor["red"]; // #FF0000
Colors.NamedColor["papayawhip"]; // #FFEFD5
```

### randomKnownColor

Returns a random color name from the NamedColor set.

```js
Colors.randomKnownColor(); // e.g. 'papayawhip'
```

You can turn this into a hex value by passing `true` as the first argument.

```js
Colors.randomKnownColor(true); // e.g. '#FFEFD5'
```

#### Parameters

* `hexValue`   (optional, default `false`)

Returns **string**;

### randomKnownColors

Returns an array of random colors from the NamedColor set.

```js
Colors.randomKnownColors(3); // e.g. ['papayawhip', 'red', 'blue']
```

You can turn this into an array of hex values by passing `true` as the first argument.

```js
Colors.randomKnownColors(3, true); // e.g. ['#FFEFD5', '#FF0000', '#0000FF']
```

#### Parameters

* `count`   (optional, default `10`) How many colors to return.
* `hexValue`   (optional, default `false`) Whether to return hex values.

Returns **string[]**;

### getKnownColorFromHex

Returns the name of the given hex value if it matches a named color.

```js
Colors.getKnownColorFromHex("#FF0000"); // red
Colors.getKnownColorFromHex("#FFEFD5"); // papayawhip
```

#### Parameters

* `hex` **string** {string} An hex color.

Returns **string | null**

### hex2rgb

Converts the hex color to rgb (as a 3-array).

```js
Colors.hex2rgb("#FF0000"); // [255, 0, 0]
```

#### Parameters

* `hex`  {string} A hex color.

Returns **number[] | null**

### rgb2hex

Converts the given RGB to a hex color.

```js
Colors.rgb2hex(255, 0, 0); // #FF0000
```

#### Parameters

* `args` **number[]** A 3-array representing RGB.

Returns **string**

### rgb2hsl

Converts an RGB color value to HSL. Conversion formula adapted from [this reference](http://en.wikipedia.org/wiki/HSL\_color\_space).
Assumes r, g, and b are contained in the set \[0, 255] and
returns h, s, and l in the set \[0, 1].

```js
Colors.rgb2hsl(255, 0, 0); // [0, 1, 0.5]
```

#### Parameters

* `args` **...number**

### hsl2rgb

Converts an HSL color value to RGB. Conversion formula adapted from [this reference](http://en.wikipedia.org/wiki/HSL\_color\_space).
Assumes h, s, and l are contained in the set \[0, 1] and
returns r, g, and b in the set \[0, 255].

#### Parameters

* `args` **...any**


## Crypto{#crypto}

