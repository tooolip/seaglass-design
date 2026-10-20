A pebble of radio options where the selected one is a lighter inner pill. Markup: `.segmented` (frost by default, or any hue class) with `role="radiogroup"` and an `aria-label`, holding `label > input[type=radio] + span` items; an `.icon` inside a span is optional.

**You provide:** a shared `name`, one `checked` radio, and short labels.

**Use it for:** switching views or sections in place, like a tab bar.

**Do**
- Keep to two to five options of similar length.
- Use a hue (lavender, aqua) for a section's main tab bar and frost for settings.

**Don't**
- Use it for navigation between pages; use NavBar.
