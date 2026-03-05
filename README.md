# vue3-burger-menu [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![npm](https://img.shields.io/npm/v/vue-burger-menu.svg?maxAge=3600)](https://www.npmjs.com/package/vue-burger-menu)

An off-canvas sidebar Vue 3 component with a collection of effects and styles using CSS transitions and SVG path animations.

> **Note:** This is the Vue 3 version.

## Demo & examples

Live demo - https://vue-burger-menu.netlify.com/

To build the examples locally, run:

```
npm i
npm run dev
```

Then open [`localhost:5173`](http://localhost:5173) in a browser

## Installation

```
npm install vue3-burger-menu --save
```

```
yarn add vue3-burger-menu
```

### Requirements

- Vue 3.4+
- Node.js 20.19+

## Usage

Items should be passed as child elements of the components

```javascript
import { Slide } from 'vue3-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
    components: {
        Slide // Register your component
    }
}
```

In your template

```html
<template>
    <Slide>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
</template>
```

### Animations

The example above imported `Slide` which renders a menu that slides in on the page when the burger icon is clicked. To use a different animation you can substitute `Slide` with any of the following:

* Slide
* ScaleDown
* ScaleRotate
* Reveal
* Push
* PushRotate
* Bubble

ATTENTION - the below animations are work-in-progress:

* FallDown
* Stack
* Elastic

### Properties

Some animations apply 3D CSS transforms to surrounding page elements. These animations require specific element IDs in your DOM:

* **`#page-wrap`** - an element wrapping the rest of the content on your page, placed as a sibling after the menu component
* **`#app`** - an element containing everything, including the menu component and `#page-wrap`

**Important:** `#page-wrap` must be a **direct child** of `#app` for 3D perspective animations to work correctly. Do not add extra wrapper divs between them.

If you use Vue 3's `createApp(App).mount('#app')`, the mount container already provides `#app`. Your App component should use [fragments](https://vuejs.org/guide/extras/web-components.html) (no root wrapper div) so that the menu and `#page-wrap` render directly inside the mount container:

```html
<!-- index.html -->
<div id="app"></div>

<!-- App.vue template (no wrapper div — uses Vue 3 fragments) -->
<template>
    <Slide>
      <a href="#">Home</a>
    </Slide>
    <main id="page-wrap">
      <!-- your page content -->
    </main>
</template>
```

Check this table to see which animations require these elements:

| Animation | `#page-wrap` | `#app` |
| --- | :---: | :---: |
| `Slide` | | |
| `Bubble` | | |
| `Push` | &#x2713; | |
| `Reveal` | &#x2713; | |
| `PushRotate` | &#x2713; | &#x2713; |
| `ScaleDown` | &#x2713; | &#x2713; |
| `ScaleRotate` | &#x2713; | &#x2713; |

### Position

The menu opens from left by default. To have it open from the right, use the `right` prop. It's just a boolean so you don't need to specify a value.

```html
<Slide right/>
```

### Width

You can specify the width of the menu with the `width` prop. The default is `300px`

```html
<Slide width="400">
```

### Open state

You can control whether the sidebar is open or closed with the `isOpen` prop. This is useful if you need to close the menu after a user clicks on an item in it, for example, or if you want to open the menu from some other button in addition to the standard burger icon. The default value is `false`

```html
// To render the menu open

<Slide isOpen>
```
### Menu events

If you want to get a notification when the menu opens or closes you can use the `openMenu` and `closeMenu` events. This way you can update your application state when the menu opens or closes.

```html
// To bind the open and close events

<Slide
  @openMenu="handleOpenMenu"
  @closeMenu="handleCloseMenu"
>
```
### Close on Outside Click

You can turn off the menu closing when an outside click is triggered with `disableOutsideClick`.

```html
<Slide disableOutsideClick>
```

### Close on Escape

By default, the menu will close when the Escape key is pressed. To disable this behavior, you can pass the `disableEsc` prop. This is useful in cases where you want the menu to be open all the time, for example if you're implementing a responsive menu that behaves differently depending on the browser width.

```html
<Slide disableEsc />
```

### Overlay

You can turn off the default overlay with `noOverlay`.

```html
<Slide noOverlay />
```

### Burger Icon and Cross Icon

You can disable both icons by passing `burgerIcon` and `crossIcon` as `false`. This can be useful if you want to keep the menu open and don't want the user to close the menu.

```html
<Slide :burgerIcon="false" :crossIcon="false"/>
```

### Styling

Visual styles (color, font etc) need to be supplied with the help of CSS.

#### CSS
The component has the following helper classes:

```CSS
.bm-burger-button {
  position: absolute;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #373a47;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #bdc3c7;
}
.bm-cross-button {
  height: 36px;
  width: 36px;
  padding-left: 16px;
  padding-top: 8px;
  margin-top: -8px;
  margin-right: 8px;
}
.bm-menu {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgb(63, 63, 65);
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
```

## Development

```
npm install
npm run dev          # start dev server
npm run test         # run tests
npm run test:watch   # run tests in watch mode
npm run typecheck    # type-check with vue-tsc
npm run lint         # lint source files
npm run build        # type-check + build library to dist/
```

## Browser Support

Chrome and Firefox have full support, but Safari and IE have strange behavior for some of the menus.

## Author

&#169; [Mohit Bajoria](https://mbj36.xyz)

## License

[MIT](https://github.com/mbj36/vue-burger-menu/blob/master/LICENSE)

