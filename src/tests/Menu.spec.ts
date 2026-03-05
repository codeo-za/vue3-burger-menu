import { describe, it, expect, afterEach, vi } from 'vitest';
import { mount, flushPromises, type VueWrapper } from '@vue/test-utils';
import Menu from '../components/Menu.vue';

describe('Menu.vue', () => {
  let wrapper: VueWrapper | null;

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
      wrapper = null;
    }
    document.body.className = '';
  });

  function mountMenu(props = {}, slots = {}) {
    wrapper = mount(Menu, {
      props,
      slots,
      attachTo: document.body,
    });
    return wrapper;
  }

  describe('rendering', () => {
    it('renders closed by default with burger button visible', () => {
      mountMenu();
      const sideNav = wrapper!.find('.bm-menu');
      expect(sideNav.exists())
          .toBe(true);
      expect(sideNav.element.style.width)
          .toBe('');

      const burger = wrapper!.find('.bm-burger-button');
      expect(burger.exists())
          .toBe(true);
      expect(burger.classes())
          .not.toContain('hidden');
    });

    it('renders slot content', () => {
      mountMenu({}, { default: '<a href="#">Link</a>' });
      expect(wrapper!.find('.bm-item-list a')
          .exists()).toBe(true);
    });
  });

  describe('open via burger click', () => {
    it('opens menu and emits openMenu when burger is clicked', async () => {
      mountMenu();
      const burger = wrapper!.find('.bm-burger-button');
      await burger.trigger('click');
      await flushPromises();

      expect(wrapper!.find('.bm-menu').element.style.width)
          .toBe('300px');
      expect(wrapper!.emitted('openMenu'))
          .toHaveLength(1);
    });
  });

  describe('close via cross click', () => {
    it('closes menu and emits closeMenu when cross is clicked', async () => {
      mountMenu();
      // Open first
      await wrapper!.find('.bm-burger-button')
          .trigger('click');
      await flushPromises();

      // Close via cross button
      await wrapper!.find('.bm-cross-button')
          .trigger('click');
      await flushPromises();

      expect(wrapper!.find('.bm-menu').element.style.width)
          .toBe('0px');
      expect(wrapper!.emitted('closeMenu'))
          .toHaveLength(1);
    });
  });

  describe('isOpen prop', () => {
    it('opens menu when isOpen is set to true', async () => {
      mountMenu({ isOpen: false });
      await wrapper!.setProps({ isOpen: true });
      await flushPromises();

      expect(wrapper!.find('.bm-menu').element.style.width)
          .toBe('300px');
      expect(wrapper!.emitted('openMenu'))
          .toHaveLength(1);
    });

    it('closes menu when isOpen is set to false', async () => {
      mountMenu({ isOpen: true });
      await flushPromises();

      await wrapper!.setProps({ isOpen: false });
      await flushPromises();

      expect(wrapper!.find('.bm-menu').element.style.width)
          .toBe('0px');
      expect(wrapper!.emitted('closeMenu'))
          .toHaveLength(1);
    });
  });

  describe('width prop', () => {
    it('applies custom width when menu opens', async () => {
      mountMenu({ width: '400' });
      await wrapper!.find('.bm-burger-button')
          .trigger('click');
      await flushPromises();

      expect(wrapper!.find('.bm-menu').element.style.width)
          .toBe('400px');
    });
  });

  describe('right prop', () => {
    it('applies right positioning on mount', () => {
      mountMenu({ right: true });
      const burger = wrapper!.find('.bm-burger-button');
      expect(burger.element.style.right)
          .toBe('36px');
      expect(burger.element.style.left)
          .toBe('auto');

      const menu = wrapper!.find('.bm-menu');
      expect(menu.element.style.left)
          .toBe('auto');
      expect(menu.element.style.right)
          .toBe('0px');
    });

    it('switches from left to right positioning when right prop changes', async () => {
      mountMenu({ right: false });
      const burger = wrapper!.find('.bm-burger-button');
      const menu = wrapper!.find('.bm-menu');

      // Initially left-positioned (default styles from CSS)
      expect(burger.element.style.right)
          .toBe('');
      expect(menu.element.style.right)
          .toBe('');

      // Switch to right
      await wrapper!.setProps({ right: true });
      await flushPromises();

      expect(burger.element.style.left)
          .toBe('auto');
      expect(burger.element.style.right)
          .toBe('36px');
      expect(menu.element.style.left)
          .toBe('auto');
      expect(menu.element.style.right)
          .toBe('0px');

      // Switch back to left
      await wrapper!.setProps({ right: false });
      await flushPromises();

      expect(burger.element.hasAttribute('style'))
          .toBe(false);
      expect(menu.element.style.right)
          .toBe('auto');
    });

    it('positions menu on the right when opened with right prop', async () => {
      mountMenu({ right: true });
      await wrapper!.find('.bm-burger-button')
          .trigger('click');
      await flushPromises();

      const menu = wrapper!.find('.bm-menu');
      expect(menu.element.style.right)
          .toBe('0px');
      expect(menu.element.style.left)
          .toBe('auto');
      expect(menu.element.style.width)
          .toBe('300px');
    });
  });

  describe('disableEsc prop', () => {
    it('does NOT close menu on Escape when disableEsc is true', async () => {
      mountMenu({ disableEsc: true });
      await wrapper!.find('.bm-burger-button')
          .trigger('click');
      await flushPromises();

      document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }));
      await flushPromises();

      // Menu should still be open
      expect(wrapper!.find('.bm-menu').element.style.width)
          .toBe('300px');
      expect(wrapper!.emitted('closeMenu'))
          .toBeUndefined();
    });
  });

  describe('Escape key', () => {
    it('closes an open menu when Escape is pressed', async () => {
      mountMenu();
      await wrapper!.find('.bm-burger-button')
          .trigger('click');
      await flushPromises();

      document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }));
      await flushPromises();

      expect(wrapper!.find('.bm-menu').element.style.width)
          .toBe('0px');
      expect(wrapper!.emitted('closeMenu'))
          .toHaveLength(1);
    });
  });

  describe('outside click', () => {
    it('closes menu when clicking outside', async () => {
      mountMenu();
      await wrapper!.find('.bm-burger-button')
          .trigger('click');
      await flushPromises();

      // Click on document body (outside menu)
      document.body.click();
      await flushPromises();

      expect(wrapper!.find('.bm-menu').element.style.width)
          .toBe('0px');
      expect(wrapper!.emitted('closeMenu'))
          .toHaveLength(1);
    });
  });

  describe('disableOutsideClick prop', () => {
    it('does NOT close menu on outside click when disableOutsideClick is true', async () => {
      mountMenu({ disableOutsideClick: true });
      await wrapper!.find('.bm-burger-button')
          .trigger('click');
      await flushPromises();

      document.body.click();
      await flushPromises();

      // Menu should still be open
      expect(wrapper!.find('.bm-menu').element.style.width)
          .toBe('300px');
      expect(wrapper!.emitted('closeMenu'))
          .toBeUndefined();
    });
  });

  describe('noOverlay prop', () => {
    it('does not add bm-overlay class to body when noOverlay is true', async () => {
      mountMenu({ noOverlay: true });
      await wrapper!.find('.bm-burger-button')
          .trigger('click');
      await flushPromises();

      expect(document.body.className)
          .not.toContain('bm-overlay');
    });

    it('adds bm-overlay class to body when noOverlay is not set', async () => {
      mountMenu();
      await wrapper!.find('.bm-burger-button')
          .trigger('click');
      await flushPromises();

      expect(document.body.className)
          .toContain('bm-overlay');
    });

    it('removes bm-overlay class from body when menu closes', async () => {
      mountMenu();
      await wrapper!.find('.bm-burger-button')
          .trigger('click');
      await flushPromises();
      expect(document.body.className)
          .toContain('bm-overlay');

      await wrapper!.find('.bm-cross-button')
          .trigger('click');
      await flushPromises();
      expect(document.body.className)
          .not.toContain('bm-overlay');
    });
  });

  describe('burgerIcon prop', () => {
    it('hides burger button when burgerIcon is false', () => {
      mountMenu({ burgerIcon: false });
      expect(wrapper!.find('.bm-burger-button').classes())
          .toContain('hidden');
    });
  });

  describe('crossIcon prop', () => {
    it('hides cross button when crossIcon is false', () => {
      mountMenu({ crossIcon: false });
      expect(wrapper!.find('.bm-cross-button').classes())
          .toContain('hidden');
    });
  });

  describe('double-open guard', () => {
    it('does not re-emit openMenu when already open', async () => {
      mountMenu();
      await wrapper!.find('.bm-burger-button')
          .trigger('click');
      await flushPromises();

      // Try opening again by calling the method directly
      wrapper!.vm.openMenu();
      await flushPromises();

      expect(wrapper!.emitted('openMenu'))
          .toHaveLength(1);
    });
  });

  describe('double-close guard', () => {
    it('does not re-emit closeMenu when already closed', async () => {
      mountMenu();
      // Try closing without opening
      wrapper!.vm.closeMenu();
      await flushPromises();

      expect(wrapper!.emitted('closeMenu'))
          .toBeUndefined();
    });
  });

  describe('cleanup on unmount', () => {
    it('removes bm-overlay class from body when unmounted while open', async () => {
      mountMenu();
      await wrapper!.find('.bm-burger-button')
          .trigger('click');
      await flushPromises();
      expect(document.body.className)
          .toContain('bm-overlay');

      wrapper!.unmount();
      wrapper = null;

      expect(document.body.className)
          .not.toContain('bm-overlay');
    });

    it('removes the correct event listeners from document', async () => {
      const removeSpy = vi.spyOn(document, 'removeEventListener');
      mountMenu();
      const { closeMenuOnEsc, documentClick } = wrapper!.vm;
      wrapper!.unmount();

      const removeCalls = removeSpy.mock.calls.map(call => [call[0], call[1]]);
      expect(removeCalls)
          .toContainEqual(['keyup', closeMenuOnEsc]);
      expect(removeCalls)
          .toContainEqual(['click', documentClick]);

      removeSpy.mockRestore();
      wrapper = null; // prevent double-unmount in afterEach
    });
  });
});
