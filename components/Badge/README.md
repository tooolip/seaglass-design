Small sea-glass status badges and toggleable filter chips. Classes: `.badge` with `.badge-success`, `.badge-warning`, `.badge-danger`, `.badge-info` or any hue class; `.chip`, pressed (seafoam) with `aria-pressed="true"`.

**You provide:** a short word for every badge (the dot alone never carries meaning); a `button` with `aria-pressed` for each filter chip.

**Use it for:** project status, tags, filters above a list or grid.

**Do**
- Keep badge text to one or two words.
- Use a hue badge (lavender, amber) for tags that are not statuses.

**Don't**
- Use status badges for decoration.
- Use chips to trigger actions; use Button.
