function createModifierFunction(
	fn, modifiers, modifier_list
) {
	// this effectively makes a copy of the function
	const wrapped_fn = (...args) => fn(modifier_list, ...args)

	for (const modifier of modifiers) {
		Object.defineProperty(wrapped_fn, modifier, {
			get() {
				let new_modifiers = [...modifier_list]

				if (!new_modifiers.includes(modifier)) {
					new_modifiers.push(modifier)
				}

				return createModifierFunction(
					fn, modifiers, new_modifiers
				)
			}
		})
	}

	return wrapped_fn
}

export default function(fn_impl, modifiers) {
	return createModifierFunction(fn_impl, modifiers, [])
}
