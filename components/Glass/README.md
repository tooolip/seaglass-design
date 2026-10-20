Translucent sea-glass pebbles and clear frosted panels: the two surfaces every other component builds on. Classes: `.shore`, `.pebble` with a hue class (`.sg-frost`, `.sg-seafoam`, `.sg-aqua`, `.sg-cobalt`, `.sg-amber`, `.sg-lavender`, `.sg-coral`), `.sg-tile`, `.glass`, `.glass-strong`, `.glass-hover`.

**You provide:** for pebbles, a hue class and the content; text inside inherits the hue's ink. For panels, inner padding (`space-6` for cards). `.shore` is flat `ground` with a film grain; translucency shows best over images, photos or other glass.

**Use it for:** pebbles for controls, tags and tiles; panels for cards, lists, nav bars, toasts and modals.

**Do**
- Use `frost` for neutral pebbles. Seafoam is the one accent; other hues label categories and never compete for attention.
- Use a panel only where elevation means something. Elsewhere, separate with spacing alone.
- Put pebbles inside panels.
- Make a whole panel an `a` or `button` when it is clickable; it then lifts on hover.

**Don't**
- Put text in a color other than the hue's ink on a pebble.
- Roughen or distort the edges; they stay smooth.
- Put panels inside pebbles, or stack more than two frosted layers.
