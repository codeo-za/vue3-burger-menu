# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vue Burger Menu is a Vue 3 off-canvas sidebar menu component library with multiple CSS animation styles. Published on npm as `vue-burger-menu`. Uses Vite for build tooling and Options API throughout.

## Commands

- **Dev server:** `npm run dev` (Vite, localhost:5173)
- **Build library:** `npm run build` (outputs ES + UMD to `dist/`)
- **Preview built app:** `npm run preview`
- **Lint:** `npm run lint` (ESLint with `plugin:vue/vue3-essential` + `eslint:recommended`)

There are no tests configured.

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

**`src/components/Menu.vue`** — Base component containing all shared menu logic: open/close state, overlay, escape key handling, outside-click detection, right-side positioning, burger/cross icons, and event listeners. Manipulates DOM directly via `$refs` and inline styles.

**`src/components/Menu/*.vue`** — Animation variant wrappers. Each wraps `Menu.vue`, passes props through via `v-bind="$attrs"` with `inheritAttrs: false`, and hooks into `@openMenu`/`@closeMenu` events to apply animation-specific DOM transforms. Some variants (Push, ScaleDown, ScaleRotate, PushRotate, Reveal) use `document.querySelector('#page-wrap')` and `document.querySelector('#app')` to animate the surrounding page.

**`src/components/index.js`** — Barrel file exporting all variants as both named and default exports. This is the library entry point for the Vite build.

### Animation Variants

Working: Slide, Push, Bubble, Reveal, ScaleDown, ScaleRotate, PushRotate
Work-in-progress: FallDown, Elastic, Stack

### Build Configuration

- **`vite.config.js`**: Library mode build targeting `src/components/index.js`, outputs ES and UMD formats, externalizes `vue`
- CSS is bundled into JS (no separate CSS file extraction in library mode)
- Published files: `dist/vue-burger-menu.es.js` (ES module) and `dist/vue-burger-menu.umd.js` (UMD)

### Key Conventions

- CSS classes use `bm-` prefix (e.g., `.bm-menu`, `.bm-burger-button`, `.bm-overlay`)
- Component files use camelCase (`pushRotate.vue`, `scaleDown.vue`); exports use PascalCase (`PushRotate`, `ScaleDown`)
- Events: `@openMenu` and `@closeMenu` propagated up through wrapper → base → consumer
- All components declare `emits: ['openMenu', 'closeMenu']`
- Wrapper components use `inheritAttrs: false` to control attribute forwarding
- Animations use inline style manipulation rather than CSS classes/transitions
- Vue 3 Options API with `unmounted` lifecycle hook
