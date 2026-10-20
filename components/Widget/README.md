Sea-glass tiles that show one number or status at a glance, like home-screen widgets, laid out as a bento grid. Classes: `.sg-tile` with a hue class and `.widget`, `.widget-label`, `.widget-value`, `.widget-sub`; `.ring-track` and `.ring-value` for an SVG progress ring.

**You provide:** one label, one value (a number, time or ring) and one line of context. For a ring, set `stroke-dasharray` to the filled length and the circumference (226.2 for r=36).

**Use it for:** dashboards and app home screens.

**Do**
- Mix tile sizes in a bento grid: one wide or tall tile for the number that matters most.
- Give each kind of data its own hue and keep it everywhere that data appears.
- Use real, specific numbers: "7 h 40 m", "1,284".

**Don't**
- Line up three equal tiles in a row.
- Put more than one number in a tile.
