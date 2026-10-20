/* @ds-bundle: {"format":4,"namespace":"PDS","components":[{"name":"Glass"},{"name":"Widget"},{"name":"Button"},{"name":"SegmentedControl"},{"name":"Toggle"},{"name":"Field"},{"name":"Badge"},{"name":"Toast"},{"name":"Modal"},{"name":"EmptyState"},{"name":"NavBar"},{"name":"ListGroup"},{"name":"Slide"}]} */
// The components are CSS classes in bundle.css. This script only names them and their classes.
window.PDS = {
  stylesheet: "components/bundle.css",
  components: {
    Glass: ["shore", "pebble", "sg-frost", "sg-seafoam", "sg-aqua", "sg-cobalt", "sg-amber", "sg-lavender", "sg-coral", "sg-tile", "glass", "glass-strong", "glass-hover"],
    Widget: ["widget", "widget-label", "widget-value", "widget-sub", "ring-track", "ring-value"],
    Button: ["btn", "btn-primary", "btn-ghost", "btn-danger", "btn-sm", "btn-lg", "btn-icon", "aria-busy"],
    SegmentedControl: ["segmented"],
    Toggle: ["switch", "check", "toggle-row"],
    Field: ["field-group", "field-label", "field", "field-help", "field-error", "field-wrap", "is-select", "prompt", "prompt-btn", "is-solid"],
    Badge: ["badge", "badge-success", "badge-warning", "badge-danger", "badge-info", "chip"],
    Toast: ["toast", "toast-icon"],
    EmptyState: ["empty", "empty-icon", "empty-title", "empty-text"],
    Modal: ["scrim", "modal", "modal-title", "modal-body", "modal-actions"],
    NavBar: ["navbar", "navbar-brand", "navbar-links"],
    ListGroup: ["list", "list-row", "list-icon", "list-text", "list-title", "list-sub", "list-meta"],
    Slide: ["slide", "slide-inner", "slide-eyebrow", "slide-title", "slide-text", "slide-panel", "slide-footer"]
  }
};
