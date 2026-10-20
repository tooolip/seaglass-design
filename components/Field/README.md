Frost-pebble text inputs, search, selects and textareas, plus the prompt bar: a hue pebble that holds an input and round actions. Classes: `.field-group`, `.field-label`, `.field`, `.field-help`, `.field-error`, `.field-wrap` (`.is-select` for selects), `.prompt` with a hue class, `.prompt-btn` (`.is-solid` for the main action).

**You provide:** a visible `label` tied with `for`/`id`; `aria-invalid="true"` and `aria-describedby` pointing at the `.field-error` when validation fails. For the prompt bar, an `aria-label` on the input and on each icon button.

**Use it for:** forms, search, settings; the prompt bar for a single, central input such as asking, searching or composing.

**Do**
- Keep labels above the field, in sentence case.
- Write errors that say how to fix the problem.
- Use one prompt bar per view, in `aqua` or `cobalt`.

**Don't**
- Use placeholder text as the only label on a form field.
- Tint ordinary form fields; they stay frost.
