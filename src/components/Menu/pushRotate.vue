<template>
    <div>
        <Menu v-bind="$attrs" @openMenu="push" @closeMenu="pull">
            <slot></slot>
        </Menu>
    </div>
</template>

<script setup lang="ts">
import { ref, useAttrs, onBeforeUnmount } from 'vue';
import Menu from '../Menu.vue';

defineOptions({
  name: 'pushrotate',
  inheritAttrs: false
});

const emit = defineEmits<{
  openMenu: [];
  closeMenu: [];
}>();

const attrs = useAttrs();
const bodyOldStyle = ref('');
const appOldStyle = ref('');

function push() {
  emit('openMenu');
  const width = (attrs.width as string | undefined) ? attrs.width + 'px' : '300px';

  bodyOldStyle.value = document.body.getAttribute('style') || '';
  document.body.style.overflowX = 'hidden';

  const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
  const appEl = document.querySelector<HTMLElement>('#app');
  if (!pageWrap || !appEl) {
    return;
  }

  if (attrs.right) {
    pageWrap.style.transform = `translate3d(-${width}, 0px, 0px ) rotateY(15deg)`;
    pageWrap.style.transformOrigin = '100% 50% 0px';
  } else {
    pageWrap.style.transform = `translate3d(${width}, 0px, 0px ) rotateY(-15deg)`;
    pageWrap.style.transformOrigin = '0% 50% 0px';
  }

  pageWrap.style.transformStyle = 'preserve-3d';
  pageWrap.style.transition = 'all 0.5s ease 0s';

  appOldStyle.value = appEl.getAttribute('style') || '';
  appEl.style.perspective = '1500px';
  appEl.style.overflow = 'hidden';
}

function pull() {
  emit('closeMenu');
  const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
  const appEl = document.querySelector<HTMLElement>('#app');
  if (pageWrap) {
    pageWrap.style.transition = 'all 0.5s ease 0s';
    pageWrap.style.transform = '';
    pageWrap.style.transformStyle = '';
    pageWrap.style.transformOrigin = '';
  }
  if (appEl) {
    appEl.setAttribute('style', appOldStyle.value);
  }
  document.body.setAttribute('style', bodyOldStyle.value);
}

onBeforeUnmount(() => {
  pull();
});
</script>