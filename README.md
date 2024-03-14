# @anio-js-foundation/create-modifier-function

Create a function that accepts modifiers.

```js
import createModifierFunction from "@anio-js-foundation/create-modifier-function"

const fn = createModifierFunction(function(modifier, ...args) {
	console.log("i got called with modifiers", modifier, "and args", args)
}, ["black", "bold", "underline"])

// i got called with modifiers [] and args [ 1 ]
fn(1)
// i got called with modifiers [ 'black', 'bold' ] and args [ 1, 2, 3 ]
fn.black.bold(1, 2, 3)
// i got called with modifiers [ 'black' ] and args [ 1 ]
fn.black(1)
```
