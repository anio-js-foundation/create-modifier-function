import createModifierFunction from "./src/index.mjs"

const fn = createModifierFunction("myFn", function(modifier, ...args) {
	console.log("i got called with modifiers", modifier, "and args", args)
}, ["black", "bold", "underline"])

// i got called with modifiers [] and args [ 1 ]
fn(1)
// i got called with modifiers [ 'black', 'bold' ] and args [ 1, 2, 3 ]
fn.black.bold(1, 2, 3)
