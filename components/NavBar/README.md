A floating frosted pill for site and app navigation; the current page is a frost pebble. Classes: `.glass.navbar`, `.navbar-brand`, `.navbar-links`.

**You provide:** a `nav` with an `aria-label`; links with `aria-current="page"` on the current one; at most one Button. For a sticky bar, set `position: sticky; top: max(16px, env(safe-area-inset-top))`.

**Use it for:** the top of the personal site and app shells.

**Do**
- Keep to three to five links.
- Set the brand in the sans at weight 700 until a logo exists.

**Don't**
- Run the bar edge to edge; it floats with a gutter around it.
