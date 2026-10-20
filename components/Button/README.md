Chunky sea-glass pill buttons. Classes: `.btn` (frost by default), `.btn-primary` (seafoam, the one accent), `.btn-danger` (coral), `.btn-ghost`, and `.btn-sm`, `.btn-lg`, `.btn-icon` for size. Set `aria-busy="true"` while an action runs to show a spinner.

**You provide:** a `button` (or an `a` for navigation) whose label names the outcome; an `aria-label` on icon-only buttons; `aria-busy="true"` while working, with a present-tense label ("Publishing"); `disabled` or `aria-disabled="true"` when unavailable.

**Use it for:** every clickable action. One `.btn-primary` per view; plain `.btn` for secondary actions; `.btn-ghost` for cancel; `.btn-danger` only for destructive actions, ideally in a Modal.

**Do**
- Label with what happens: "Save changes", "Delete project".
- Name the outcome, not the mechanism: "Publish portfolio", not "Submit" or "Get started".
- Use the 48px default on touch screens.

**Don't**
- Put two primary buttons side by side, or tint secondary buttons; seafoam is the only accent.
- Use `.btn-sm` (38px) on touch screens.
