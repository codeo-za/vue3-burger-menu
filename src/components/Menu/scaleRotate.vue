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
  name: 'scalerotate',
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
  const width = (attrs.width as string | undefined) ? attrs.width + 'px' : '100px';

  bodyOldStyle.value = document.body.getAttribute('style') || '';
  document.body.style.overflowX = 'hidden';

  const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
  const appEl = document.querySelector<HTMLElement>('#app');
  if (!pageWrap || !appEl) {
    return;
  }

  if (attrs.right) {
    pageWrap.style.transform = `translate3d(-${width}, 0px, -600px ) rotateY(20deg)`;
  } else {
    pageWrap.style.transform = `translate3d(${width}, 0px, -600px ) rotateY(-20deg)`;
  }

  pageWrap.style.transformStyle = 'preserve-3d';
  pageWrap.style.transition = 'all 0.5s ease 0s';
  pageWrap.style.overflow = 'hidden';

  appOldStyle.value = appEl.getAttribute('style') || '';
  appEl.style.perspective = '1500px';
  appEl.style.overflow = 'hidden';
  appEl.style.height = '100%';
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
    pageWrap.style.overflow = 'auto';
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