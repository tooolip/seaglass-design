# Seaglass Design

A sea-glass design system for web interfaces, documents, and presentations. Translucent colored controls sit on a pale, textured background, with rounded type and soft shadows. Light and dark themes share the same tokens.

## What's included

- `tokens.json`: color, typography, spacing, shape, and other design tokens.
- `components/bundle.css`: component styles, glass effects, texture, and motion.
- `components/`: HTML previews and usage notes for individual components.
- `fonts/`: Latin-subset Nunito and DM Mono font files.
- [Design guide](docs/design-guide.md): detailed rules for layout, content, accessibility, and visual treatment.

The components use native HTML and CSS classes. No JavaScript framework or build step is required. `components/bundle.js` is a component manifest, not a runtime component library.

## Use the styles

Copy the bundle into your project, load your theme variables from `tokens.json`, and link the styles from your page:

```html
<link rel="stylesheet" href="components/bundle.css">

<main class="shore">
  <button class="btn btn-primary">Save changes</button>
  <button class="btn">Preview</button>
</main>
```

The CSS bundle provides the glass recipe and component styles. Load or translate the values in `tokens.json` into your application's theme; the token file is not a stylesheet. The bundle imports Google Fonts by default. For self-hosted fonts, replace that import with your own `@font-face` rules using `fonts/`.

Set `data-theme="dark"` on a containing element to use the dark variants. Test contrast, focus visibility, and reduced-motion behavior in the final page, especially when placing translucent controls over images.

## Browse the components

| Group | Components |
| --- | --- |
| Surfaces | Glass, Widget |
| Actions | Button, SegmentedControl, Toggle |
| Inputs | Field |
| Feedback | Badge, Toast, Modal, EmptyState |
| Navigation | NavBar, ListGroup |
| Presentations | Slide |

For example, see [Button usage](components/Button/README.md), [Glass usage](components/Glass/README.md), and [Field usage](components/Field/README.md). Preview HTML files are source examples; when embedding one in a standalone page, include the bundle and theme tokens as well.

## Design principles

Use seafoam for the primary action, frost for secondary controls, and coral for errors or destructive actions. Separate content with spacing and reserve elevated panels for groups that need them. Keep text plain, labels specific, and every interaction usable with a keyboard.

The full [design guide](docs/design-guide.md) covers the palette, type scale, spacing, glass layers, component states, motion, and export treatment. The design system is still evolving; the previews are reference implementations.
