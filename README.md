# Personal Design System

The live, browsable version is the private Claude artifact at https://github.com/tooolip/seaglass-design. Tokens live in `tokens.json`, component styles in `components/bundle.css`, font files in `fonts/`.

Tinted sea glass, worn smooth. Controls are chunky pebbles of colored glass with soft shadows beneath them, on a pale, grainy shore. The palette is sampled from real sea glass, not chosen from a UI default. Light is the default theme; dark is the option. Use it for web apps, the personal site, and decks and docs.

## Content fundamentals

- Write plainly and warmly. Short sentences, active voice, no exclamation marks, no emoji.
- Name things by what a person recognizes: "Notifications", not "Webhook config".
- Buttons name the outcome: "Publish portfolio", "Start a project", "Email me". Never "Submit", "Learn more" or "Get started". A toast confirms in the past tense: "Saved".
- Use real, specific numbers ("7 h 40 m", "1,284", "since 2019"), never round placeholders. No invented testimonials, ratings or counts.
- Errors say what happened and what to do: "Upload failed. Check your connection." No "Oops", no apologies.
- No em dashes and no hype words (seamless, elevate, unleash, next-gen). Use a full stop.
- Headlines, buttons and labels are sentence case. Only `label` eyebrows are set in capitals. No italics for emphasis; step up one weight instead.

## Visual foundations

**Color**
- The page is flat `ground` with a film grain: the `.shore` class. No gradients anywhere, linear, radial or mesh; depth comes from texture, layering and tinted shadows.
- Neutrals stay cool, tinted toward green-gray. Do not mix in warm grays; amber is the only warm note, and only as a hue.
- Text is `ink`; secondary text is `ink-muted`; disabled text is `ink-disabled`.
- Seven sea-glass hues: `frost`, `seafoam`, `aqua`, `cobalt`, `amber`, `lavender` and the rare `coral`. Each has three tokens: `<hue>-glass` (the body), `<hue>-rim` (the deeper edge, also the solid fill for charts and art) and `<hue>-ink` (text and icons on that glass).
- Text on a hue's glass is always that hue's `-ink`, never black or white.
- One accent: `seafoam`, the color sea glass is known for. It marks primary actions, pressed chips and selection; its solid form, `accent` with `on-accent`, fills switches, checkboxes and progress. `frost` is the default for secondary controls. `coral` is only for errors and destructive actions.
- The other hues (`aqua`, `cobalt`, `amber`, `lavender`) label categories: an app section, a kind of data, a tag. They never compete with the accent for attention.
- Status colors: `success` (seafoam), `warning` (amber), `danger` (coral), `info` (aqua). Always pair them with a word or icon.

**Sea glass**
- A pebble is translucent tinted glass, built like the source file: flat layers of white at 25%, the hue's vivid `<hue>-pigment` at about a third, and white at 13% on top, over a frosted backdrop blur. Whatever sits behind shows through.
- Light and depth come from the shadow stack: a soft white glow inside the top, a faint tint of the pigment just under the top edge, a fainter white glow rising from the bottom, a pale glow of the hue beneath, and a crisp slab shadow straight below that gives the glass its thickness. Badges and chips get a thinner slab; tiles a thicker one.
- Every pebble carries duo noise: 2px white flecks at 30% and black flecks at 10%.
- Text on a pebble is its hue's `-ink`. `<hue>-glass` is the same glass made opaque, for the cover, art and anywhere translucency cannot work; `<hue>-rim` is the deeper solid for charts, switches and checkboxes.
- Tune the look with the variables in the bundle: `--sg-pigment-mix`, `--sg-white-base`, `--sg-white-top`, `--sg-slab`, `--sg-frost-blur` and `--grain-opacity`. Dark theme has its own values.
- Edges stay smooth: the noise is clipped to the shape, and outlines are never roughened or distorted. (The source file's Texture effect, which roughens edges, is left out on purpose.)
- Translucency needs something behind it. Over a flat `ground` pebbles read as pale glass; over images, photos or other pebbles they show what is beneath.
- Pebbles are pill-shaped (`radius-pill`) unless they are tiles (`.sg-tile`, `radius-lg`).
- A selected option inside a pebble is a lighter inner pill, not a different hue.
- Pressing a pebble swaps `pebble` for `pebble-pressed` and nudges it down 1px. Hover lifts it 1px.
- Besides `frost` and the accent, use at most one or two category hues per view. A row of every hue looks like confetti.
- Shadows fall one way: straight down. Never add a shadow from a second light source.

**Frosted panels**
- Cards, lists, the nav bar, toasts and modals are clear frosted glass: `frost-fill`, a 1px `frost-edge`, `panel` shadow and a backdrop blur. Use `.glass`, and add `.glass-strong` for modals and toasts.
- Panels hold pebbles; pebbles never hold panels.
- Use a panel only where elevation means something (a menu, a modal, a group of settings). Elsewhere, separate content with spacing alone; if everything is a card, nothing is.

**Type**
- One family: Nunito, a rounded sans. Headlines use `display-xl` and `display-lg` at weight 700 with slightly tight tracking; intros use `lead`. Nothing goes above bold (700), and no light weights at body sizes.
- Interface text uses `title`, `heading`, `body`, `body-sm`, `control` (inside buttons, tabs, chips) and `label`.
- Metadata, timestamps and code use `caption-mono`.
- Font files: `fonts/Nunito-Variable-latin.woff2` (one variable file, weights 200–1000) and `fonts/DMMono-Regular-latin.woff2`. Both are Latin subsets under the SIL Open Font License. For other scripts, load the full families from Google Fonts.
- Every size comes from the scale: 12, 14, 16, 20, 28, 44 and 64px, each with its own line height. No one-off sizes.
- Headings use `text-wrap: balance` and paragraphs `text-wrap: pretty` (the bundle sets both), so no word hangs alone on a last line. Never insert manual line breaks.
- Keep running text near 65 characters wide.

**Shape and space**
- Corners: `radius-pill` for every control, `radius-lg` for cards and tiles, `radius-xl` for modals, `radius-md` and `radius-sm` for nested parts, `radius-xs` for checkboxes. Nested corners step down so they stay concentric.
- Concentric radii: when a shape sits inside another with less than 32px between them, the inner radius is the outer radius minus the gap.
- Controls are chunky: 48px buttons, 52px fields, 60px prompt bars.

**Layout**
- No row of three equal cards. Use a bento grid of mixed sizes, a list, or alternating image and text. Groups need not come in threes.
- Do not center everything. Align copy to a left edge and anchor images to an edge.
- In a grid of cards, align titles, values and buttons across the row: fixed header heights, `min-height` on descriptions, `margin-top: auto` on actions.
- Full-screen sections use `min-height: 100dvh`, never `100vh`. Keep z-index values small; a 9999 means the stacking context is wrong.

**Motion**
- Soft and quick. `--dur-fast` (160ms) for presses, `--dur` (240ms) for most transitions, `--dur-slow` (360ms) for modals, all with `--ease-soft`. No bounce.
- Reveal on scroll with `IntersectionObserver`, never a scroll listener. Anything that moves on its own for more than five seconds gets a pause button.

**States**
- Every interactive element has hover, active, focus and disabled states; actions have a loading state (`aria-busy="true"` on a button); every list, grid and search has an empty state (the EmptyState component); every form and fetch has an error state.

**Accessibility**
- Every `-ink` meets 4.5:1 on its glass and rim, and on `ground` and `surface`, in both themes. `ink` and `ink-muted` meet 4.5:1 on `ground` and `surface`.
- Focus is a 2px `focus-ring` outline with a 2px offset, at least 3:1 on every glass.
- Frosted panels fall back to solid `surface` under `prefers-reduced-transparency` or without `backdrop-filter`.
- Touch targets are at least 44px; `.btn-sm` (38px) is for dense desktop toolbars only.
- Page landmarks are siblings: `header`, `main`, `footer`. Never nest `header` inside `main`.
- `prefers-reduced-motion` turns off transitions and slows the loading spinner.

**Decks, docs and exports**
- Use the Slide component: a shore background, solid `surface` panels and pebbles as accents. Avoid frosted panels in exports.

## Components

All components are CSS classes in `components/bundle.css` over native HTML. `components/bundle.js` only lists them.

- **Surfaces:** Glass (pebbles, hues and frosted panels), Widget
- **Actions:** Button, SegmentedControl, Toggle
- **Inputs:** Field (with the prompt bar)
- **Feedback:** Badge, Toast, Modal, EmptyState
- **Navigation:** NavBar, ListGroup
- **Decks:** Slide

## Iconography

- 20px outline icons with the `.icon` class: a 2px stroke, rounded caps and joins, colored by `currentColor` so they take the ink of the glass they sit on. No emoji as icons.
- No icon set has been chosen yet; the previews draw simple glyphs inline. Avoid Lucide, Feather and Material defaults, which every generated interface uses. Phosphor in its regular weight matches the rounded 2px stroke and is less common.
- Pick literal icons over clichés: a lock for security, a warning triangle for warnings. No rockets for launch or shields for safety.
- No logo exists yet. Set the name in `display-lg` until a mark exists.
