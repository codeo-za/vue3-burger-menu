import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount, flushPromises, type VueWrapper } from '@vue/test-utils'
import type { Component } from 'vue'
import { Slide, Push, Bubble, Reveal, ScaleDown, ScaleRotate, PushRotate } from '../components/index'

// All working variants
const allVariants = {
  Slide,
  Push,
  Bubble,
  Reveal,
  ScaleDown,
  ScaleRotate,
  PushRotate,
}

describe('Variant wrappers', () => {
  let wrapper: VueWrapper | null
  let pageWrap: HTMLDivElement
  let appDiv: HTMLDivElement

  beforeEach(() => {
    // Create mock DOM elements for variants that query #page-wrap and #app
    pageWrap = document.createElement('div')
    pageWrap.id = 'page-wrap'
    document.body.appendChild(pageWrap)

    appDiv = document.createElement('div')
    appDiv.id = 'app'
    document.body.appendChild(appDiv)
  })

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
      wrapper = null
    }
    document.body.className = ''
    document.body.removeAttribute('style')
    pageWrap?.remove()
    appDiv?.remove()
  })

  function mountVariant(Component: Component, props = {}, slots = {}) {
    wrapper = mount(Component, {
      props,
      slots,
      attachTo: document.body,
    })
    return wrapper
  }

  async function openMenu() {
    await wrapper!.find('.bm-burger-button').trigger('click')
    await flushPromises()
  }

  async function closeMenu() {
    await wrapper!.find('.bm-cross-button').trigger('click')
    await flushPromises()
  }

  describe('slot forwarding', () => {
    for (const [name, Component] of Object.entries(allVariants)) {
      it(`${name} renders slot content inside the menu`, () => {
        mountVariant(Component, {}, { default: '<span class="test-item">Hello</span>' })
        expect(wrapper!.find('.bm-item-list .test-item').exists()).toBe(true)
      })
    }
  })

  describe('attrs forwarding', () => {
    for (const [name, Component] of Object.entries(allVariants)) {
      it(`${name} passes width prop through to Menu`, async () => {
        mountVariant(Component, { width: '400' })
        await openMenu()
        expect(wrapper!.find('.bm-menu').element.style.width).toBe('400px')
      })
    }
  })

  describe('event propagation', () => {
    for (const [name, Component] of Object.entries(allVariants)) {
      it(`${name} emits openMenu exactly once when menu opens`, async () => {
        mountVariant(Component)
        await openMenu()
        expect(wrapper!.emitted('openMenu')).toHaveLength(1)
      })

      it(`${name} emits closeMenu exactly once when menu closes`, async () => {
        mountVariant(Component)
        await openMenu()
        await closeMenu()
        expect(wrapper!.emitted('closeMenu')).toHaveLength(1)
      })
    }
  })

  describe('Push DOM transforms', () => {
    it('applies translate3d to #page-wrap on open', async () => {
      mountVariant(Push)
      await openMenu()
      expect(pageWrap.style.transform).toBe('translate3d(300px, 0px, 0px )')
      expect(pageWrap.style.transition).toBe('all 0.5s ease 0s')
    })

    it('applies negative translate3d when right prop is set', async () => {
      mountVariant(Push, { right: true })
      await openMenu()
      expect(pageWrap.style.transform).toBe('translate3d(-300px, 0px, 0px )')
    })

    it('sets overflow-x hidden on body during open', async () => {
      mountVariant(Push)
      await openMenu()
      expect(document.body.style.overflowX).toBe('hidden')
    })

    it('resets #page-wrap transform and restores body style on close', async () => {
      mountVariant(Push)
      await openMenu()
      await closeMenu()
      expect(pageWrap.style.transform).toBe('')
      expect(document.body.style.overflowX).not.toBe('hidden')
    })

    it('uses custom width in transform', async () => {
      mountVariant(Push, { width: '250' })
      await openMenu()
      expect(pageWrap.style.transform).toBe('translate3d(250px, 0px, 0px )')
    })
  })

  describe('Reveal DOM transforms', () => {
    it('applies translate3d and position relative to #page-wrap on open', async () => {
      mountVariant(Reveal)
      await openMenu()
      expect(pageWrap.style.transform).toBe('translate3d(300px, 0px, 0px )')
      expect(pageWrap.style.position).toBe('relative')
    })

    it('resets position, transform, and body style on close', async () => {
      mountVariant(Reveal)
      await openMenu()
      await closeMenu()
      expect(pageWrap.style.transform).toBe('')
      expect(pageWrap.style.position).toBe('')
      expect(document.body.style.overflowX).not.toBe('hidden')
    })
  })

  describe('ScaleDown DOM transforms', () => {
    it('applies 3D transform with Z offset to #page-wrap and perspective to #app', async () => {
      mountVariant(ScaleDown)
      await openMenu()
      expect(pageWrap.style.transform).toBe('translate3d(100px, 0px, -600px )')
      expect(pageWrap.style.transformStyle).toBe('preserve-3d')
      expect(pageWrap.style.overflow).toBe('hidden')
      expect(appDiv.style.perspective).toBe('1500px')
      expect(appDiv.style.overflow).toBe('hidden')
      expect(appDiv.style.height).toBe('100%')
    })

    it('resets all transforms, #app style, and body style on close', async () => {
      mountVariant(ScaleDown)
      await openMenu()
      await closeMenu()
      expect(pageWrap.style.transform).toBe('')
      expect(pageWrap.style.transformStyle).toBe('')
      expect(pageWrap.style.overflow).toBe('auto')
      expect(appDiv.style.perspective).toBe('')
      expect(appDiv.style.overflow).toBe('')
      expect(appDiv.style.height).toBe('')
      expect(document.body.style.overflowX).not.toBe('hidden')
    })
  })

  describe('ScaleRotate DOM transforms', () => {
    it('applies 3D transform with rotation to #page-wrap', async () => {
      mountVariant(ScaleRotate)
      await openMenu()
      expect(pageWrap.style.transform).toBe('translate3d(100px, 0px, -600px ) rotateY(-20deg)')
      expect(pageWrap.style.transformStyle).toBe('preserve-3d')
      expect(pageWrap.style.overflow).toBe('hidden')
      expect(appDiv.style.perspective).toBe('1500px')
      expect(appDiv.style.overflow).toBe('hidden')
      expect(appDiv.style.height).toBe('100%')
    })

    it('applies opposite rotation when right prop is set', async () => {
      mountVariant(ScaleRotate, { right: true })
      await openMenu()
      expect(pageWrap.style.transform).toBe('translate3d(-100px, 0px, -600px ) rotateY(20deg)')
    })

    it('resets all transforms, #app style, and body style on close', async () => {
      mountVariant(ScaleRotate)
      await openMenu()
      await closeMenu()
      expect(pageWrap.style.transform).toBe('')
      expect(pageWrap.style.transformStyle).toBe('')
      expect(pageWrap.style.transformOrigin).toBe('')
      expect(pageWrap.style.overflow).toBe('auto')
      expect(appDiv.style.perspective).toBe('')
      expect(appDiv.style.overflow).toBe('')
      expect(document.body.style.overflowX).not.toBe('hidden')
    })
  })

  describe('PushRotate DOM transforms', () => {
    it('applies rotation with transform origin to #page-wrap', async () => {
      mountVariant(PushRotate)
      await openMenu()
      expect(pageWrap.style.transform).toBe('translate3d(300px, 0px, 0px ) rotateY(-15deg)')
      expect(pageWrap.style.transformOrigin).toBe('0% 50% 0px')
      expect(pageWrap.style.transformStyle).toBe('preserve-3d')
      expect(appDiv.style.perspective).toBe('1500px')
      expect(appDiv.style.overflow).toBe('hidden')
    })

    it('applies opposite rotation and origin when right prop is set', async () => {
      mountVariant(PushRotate, { right: true })
      await openMenu()
      expect(pageWrap.style.transform).toBe('translate3d(-300px, 0px, 0px ) rotateY(15deg)')
      expect(pageWrap.style.transformOrigin).toBe('100% 50% 0px')
    })

    it('resets all transforms, #app style, and body style on close', async () => {
      mountVariant(PushRotate)
      await openMenu()
      await closeMenu()
      expect(pageWrap.style.transform).toBe('')
      expect(pageWrap.style.transformStyle).toBe('')
      expect(pageWrap.style.transformOrigin).toBe('')
      expect(appDiv.style.perspective).toBe('')
      expect(appDiv.style.overflow).toBe('')
      expect(document.body.style.overflowX).not.toBe('hidden')
    })
  })

  describe('cleanup on unmount while open', () => {
    const domVariants = { Push, Reveal, ScaleDown, ScaleRotate, PushRotate }

    for (const [name, Component] of Object.entries(domVariants)) {
      it(`${name} resets #page-wrap transform when unmounted while open`, async () => {
        mountVariant(Component)
        await openMenu()
        expect(pageWrap.style.transform).not.toBe('')

        wrapper!.unmount()
        wrapper = null

        expect(pageWrap.style.transform).toBe('')
      })

      it(`${name} restores body style when unmounted while open`, async () => {
        mountVariant(Component)
        await openMenu()
        expect(document.body.style.overflowX).toBe('hidden')

        wrapper!.unmount()
        wrapper = null

        expect(document.body.style.overflowX).not.toBe('hidden')
      })
    }
  })

  describe('Bubble animation', () => {
    it('applies borderRadius to .bm-menu on open', async () => {
      mountVariant(Bubble)
      await openMenu()
      const bmMenu = wrapper!.find('.bm-menu').element
      expect(bmMenu.style.borderRadius).toBe('150% / 70%')
    })

    it('clears borderRadius after timeout', async () => {
      vi.useFakeTimers()
      mountVariant(Bubble)
      await openMenu()

      vi.advanceTimersByTime(300)
      await flushPromises()

      const bmMenu = wrapper!.find('.bm-menu').element
      expect(bmMenu.style.borderRadius).toBe('0px')

      vi.useRealTimers()
    })

    it('resets transitionTimingFunction on close', async () => {
      mountVariant(Bubble)
      await openMenu()
      await closeMenu()
      const bmMenu = wrapper!.find('.bm-menu').element
      expect(bmMenu.style.transitionTimingFunction).toBe('')
    })
  })
})
