A short frosted pill that confirms what just happened, led by a sea-glass status icon. Classes: `.glass.glass-strong.toast`, `.toast-icon` with `.pebble` and a hue (`sg-seafoam` success, `sg-aqua` info, `sg-amber` warning, `sg-coral` error).

**You provide:** the message in the past tense, `role="status"` (or `role="alert"` for errors), an icon, and at most one ghost action like Undo. Place it bottom center, clear of the safe-area inset, and hide it after about 4 seconds unless it holds an action.

**Don't**
- Stack more than two toasts.
- Use a toast for something the person must act on; use a Modal or an inline error.
