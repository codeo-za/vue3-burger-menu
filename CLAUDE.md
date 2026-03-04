# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vue Burger Menu is a Vue 3 off-canvas sidebar menu component library with multiple CSS animation styles. Published on npm as `vue-burger-menu`. Uses Vite 7 for build tooling and Options API throughout.

## Commands

- **Dev server:** `npm run dev` (Vite, localhost:5173)
- **Build library:** `npm run build` (outputs ES + UMD to `dist/`)
- **Preview built app:** `npm run preview`
- **Lint:** `npm run lint` (ESLint with `plugin:vue/vue3-essential` + `eslint:recommended`)
- **Test:** `npm run test` (Vitest, runs all `*.spec.js` files)
- **Test (watch):** `npm run test:watch` (Vitest in watch mode)

## Project Structure

```
├── index.html                     # Demo app HTML shell (mounts into <div id="app">)
├── vite.config.js                 # Vite config: library build, Vue plugin, test config
├── package.json                   # npm package config (publishes dist/ only)
├── .eslintrc.cjs                  # ESLint config (vue3-essential + eslint:recommended)
├── src/
│   ├── main.js                    # Demo app entry: createApp(App).mount('#app')
│   ├── App.vue                    # Demo app: menu switcher UI with left/right toggle
│   ├── assets/
│   │   └── logo.png
│   └── components/
│       ├── Menu.vue               # Base menu component (all shared logic)
│       ├── index.js               # Library entry: barrel file with named + default exports
│       ├── Menu/                  # Animation variant wrappers
│       │   ├── slide.vue
│       │   ├── push.vue
│       │   ├── bubble.vue
│       │   ├── reveal.vue
│       │   ├── scaleDown.vue
│       │   ├── scaleRotate.vue
│       │   ├── pushRotate.vue
│       │   ├── fallDown.vue       # WIP
│       │   ├── elastic.vue        # WIP (passthrough stub)
│       │   └── stack.vue          # WIP (passthrough stub)
│       └── __tests__/
│           ├── Menu.spec.js       # Base component tests (19 tests)
│           └── variants.spec.js   # Variant wrapper tests (46 tests)
└── dist/                          # Build output (committed)
    ├── vue-burger-menu.es.js      # ES module bundle
    └── vue-burger-menu.umd.js     # UMD bundle
```

## Architecture

### Component Hierarchy

All menu variants follow a wrapper-delegates-to-base pattern:

```
Animation Variant (e.g., Slide, Push, ScaleRotate)
  └── Menu.vue (base component)
        ├── Burger button (hamburger icon)
        ├── Side navigation panel (slot for user content)
        └── Cross button (close icon)
```

**`src/components/Menu.vue`** — Base component containing all shared menu logic: open/close state, overlay, escape key handling, outside-click detection, right-side positioning, burger/cross icons, and event listeners. Manipulates DOM directly via `$refs` and inline styles. Registers a click listener on `document` in `created()` and a keyup listener in `mounted()`.

**`src/components/Menu/*.vue`** — Animation variant wrappers. Each wraps `Menu.vue`, passes props through via `v-bind="$attrs"` with `inheritAttrs: false`, and hooks into `@openMenu`/`@closeMenu` events to apply animation-specific DOM transforms. Some variants (Push, ScaleDown, ScaleRotate, PushRotate, Reveal) use `document.querySelector('#page-wrap')` and `document.querySelector('#app')` to animate the surrounding page.

**`src/components/index.js`** — Barrel file exporting all variants as both named and default exports. This is the library entry point for the Vite build.

### Demo App

**`index.html`** → **`src/main.js`** → **`src/App.vue`**

The demo app provides a menu switcher UI. App.vue uses Vue 3 fragments (no wrapper `<div>`) so the `<div id="app">` from `index.html` is the sole `#app` element — this is critical for 3D animation variants that set `perspective` on `#app`. App.vue uses a `menuComponents` map of `markRaw()`-wrapped component objects with a `currentMenuComponent` computed property and `:key="currentMenu"` to force full re-creation on menu type switch. The `<main id="page-wrap">` element is the target for page-transform animations. Styles use Less.

### Animation Variants

Working: Slide, Push, Bubble, Reveal, ScaleDown, ScaleRotate, PushRotate
Work-in-progress: FallDown, Elastic, Stack

| Variant | DOM targets | Transform on open |
|---|---|---|
| Slide | (none) | Passthrough — Menu.vue slides open via width |
| Push | `#page-wrap`, `body` | `translate3d(width, 0, 0)` on page-wrap |
| Reveal | `#page-wrap`, `body` | `translate3d(width, 0, 0)` + `position: relative` on page-wrap |
| ScaleDown | `#page-wrap`, `#app`, `body` | `translate3d(width, 0, -600px)` + `perspective: 1500px` on #app |
| ScaleRotate | `#page-wrap`, `#app`, `body` | `translate3d(width, 0, -600px) rotateY(-20deg)` + perspective |
| PushRotate | `#page-wrap`, `#app`, `body` | `translate3d(width, 0, 0) rotateY(-15deg)` + transformOrigin + perspective |
| Bubble | `.bm-menu` (via `$refs`) | `borderRadius` animation with 300ms setTimeout phase |

### Build Configuration

- **`vite.config.js`**: Library mode build targeting `src/components/index.js`, outputs ES and UMD formats, externalizes `vue`
- CSS is injected into the DOM at runtime via `vite-plugin-css-injected-by-js` (matches the old Vue CLI `css.extract: false` behavior — consumers just import JS, no separate CSS import needed)
- `resolve.extensions` includes `.vue` — Vite does not resolve `.vue` extensions by default (unlike webpack/Vue CLI), so this is required for the extensionless imports throughout the codebase
- Rollup output uses `exports: 'named'` to avoid UMD consumer issues with mixed named/default exports
- Published files: `dist/vue-burger-menu.es.js` (ES module) and `dist/vue-burger-menu.umd.js` (UMD)
- `public/favicon.ico` gets copied into `dist/` by Vite on build — this is harmless and excluded by the `files` array in `package.json`

### Dependencies

**Runtime:** `vue ^3.4.0`

**Dev:** `vite ^7.3.1`, `@vitejs/plugin-vue ^6.0.0`, `vite-plugin-css-injected-by-js ^4.0.1`, `eslint ^8.56.0`, `eslint-plugin-vue ^9.20.0`, `less ^4.2.0`, `vitest ^4.0.18`, `@vue/test-utils ^2.4.6`, `jsdom ^28.1.0`

### Test Setup

- **Stack:** Vitest 4 + `@vue/test-utils` 2 + jsdom — configured via the `test` block in `vite.config.js` (reuses the Vue plugin and resolve config automatically)
- **Files:** `src/components/__tests__/Menu.spec.js` (base component, 19 tests) and `src/components/__tests__/variants.spec.js` (all 7 working variants, 46 tests)
- **`attachTo: document.body`** is required when mounting — Menu.vue registers event listeners on `document` in `created()` and `mounted()`, so the component must be in the real DOM for clicks, Escape key, and outside-click tests to work
- **`flushPromises()`** needed after every interaction — Menu.vue uses `$nextTick` to apply width changes, so assertions against `style.width` fail without flushing
- **Mock DOM elements for variant transforms** — variants that manipulate `#page-wrap` and `#app` (Push, Reveal, ScaleDown, ScaleRotate, PushRotate) need these elements created in `beforeEach` and removed in `afterEach`
- **Bubble's `setTimeout`** — uses `vi.useFakeTimers()` + `vi.advanceTimersByTime(300)` to test the two-phase border-radius animation
- **jsdom trims trailing spaces in CSS values** — e.g. the source sets `translate3d(100px, 0px, -600px ) ` (trailing space) but jsdom normalizes it to `translate3d(100px, 0px, -600px )`. Test expectations must match the trimmed form
- **Cleanup in `afterEach`:** unmount wrapper, reset `document.body.className` (clears `bm-overlay`), remove mock DOM elements

### Key Conventions

- CSS classes use `bm-` prefix (e.g., `.bm-menu`, `.bm-burger-button`, `.bm-overlay`)
- Component files use camelCase (`pushRotate.vue`, `scaleDown.vue`); exports use PascalCase (`PushRotate`, `ScaleDown`)
- Events: `@openMenu` and `@closeMenu` propagated up through wrapper → base → consumer
- All components declare `emits: ['openMenu', 'closeMenu']`
- Wrapper components use `inheritAttrs: false` to control attribute forwarding
- Animations use inline style manipulation rather than CSS classes/transitions
- Vue 3 Options API with `unmounted` lifecycle hook

### Vue 2 → Vue 3 Migration Pitfalls (resolved)

These issues were encountered and fixed during the migration. Documented here to prevent regressions.

**Mount behavior change — no wrapper `<div id="app">` in template:**
Vue 2's `$mount('#app')` replaced the mount element; Vue 3's `mount('#app')` renders inside it. Having `<div id="app">` in App.vue's template created a nested duplicate, breaking `document.querySelector('#app')` for 3D animations (perspective on the outer div couldn't reach grandchild `#page-wrap` through the intermediate div's default `transform-style: flat`). Fix: App.vue uses Vue 3 fragments (no wrapper div) so the mount container from `index.html` is the sole `#app`.

**Dynamic components — use component objects, not strings:**
`<component :is="someString">` can fail to reliably re-resolve locally registered components in Vue 3. App.vue uses a `menuComponents` map of `markRaw()`-wrapped component imports and a `currentMenuComponent` computed property that returns the object directly. The `:key="currentMenu"` forces full re-creation on switch.

**`$refs` unavailable during `immediate: true` watchers:**
Menu.vue's `right` watcher with `immediate: true` fired during `created` (before `mounted`), where `$refs` are undefined. The null-check guard silently returned, so right-side positioning was never applied on fresh mount. Fix: positioning logic extracted into `applyPosition()` method called from both `mounted()` (initial) and the `right` watcher (runtime changes, without `immediate`).

**`$refs` in `unmounted` hook:**
Vue 3's `unmounted` runs after DOM removal. `$refs` can be null if mount failed or the component tree was torn down mid-render. Menu.vue's `unmounted` hook has null guards around all `$refs` access to prevent `TypeError` from aborting the parent's re-render cycle.

### Vite 5 → 7 Upgrade Notes

The project was upgraded from Vite 5.4.21 directly to Vite 7.3.1 (skipping Vite 6), along with `@vitejs/plugin-vue` 5 → 6. Key findings:

- **No `vite.config.js` changes required** — `__dirname` continues to work because Vite 7 bundles the config file (now with Rolldown instead of esbuild) before executing it. Library mode, plugin config, and rollup options are all compatible.
- **No `"type": "module"` needed in `package.json`** — Vite 7 is ESM-only internally but does not require the consuming project to set this field.
- **`vite-plugin-css-injected-by-js`** — Compatible as-is; its peer dep `>2.0.0-0` covers Vite 7.
- **Node.js requirement** — Vite 7 requires Node.js `>=20.19.0`.
- **CJS deprecation warning eliminated** — Vite 5 logged a CJS deprecation warning on every invocation; Vite 7 (ESM-only) does not.

### Known Issues

- `fallDown.vue` has `name: 'falldown'` but was originally named `'elastic'` (pre-existing copy-paste bug from the Vue 2 codebase — corrected during Vue 3 migration)
- FallDown, Elastic, and Stack variants are marked work-in-progress and have minimal or incomplete animation logic
- Several variant components manipulate `document.querySelector('#page-wrap')` and `document.querySelector('#app')` directly, coupling them to the demo app's DOM structure
