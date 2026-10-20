A strong frosted dialog centered over a dimming scrim. Classes: `.scrim`, `.glass.glass-strong.modal`, `.modal-title`, `.modal-body`, `.modal-actions`.

**You provide:** a native `dialog` or `role="dialog"` with `aria-modal="true"` and `aria-labelledby`; focus moved in on open and returned on close; Escape to close. `.scrim` is `position: fixed` by default.

**Use it for:** confirming destructive or important actions, and short focused tasks.

**Do**
- Title it as the question: "Delete this project?"
- Name the result on the confirm button: "Delete project".
- Put the safe choice first and the action last.

**Don't**
- Put long forms or scrolling content in a modal; use a page.
