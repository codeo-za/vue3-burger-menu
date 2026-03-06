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
  name: 'push',
  inheritAttrs: false
});

const emit = defineEmits<{
  openMenu: [];
  closeMenu: [];
}>();

const attrs = useAttrs();
const bodyOldStyle = ref('');

function push() {
  emit('openMenu');
  const width = (attrs.width as string | undefined) ? attrs.width + 'px' : '300px';

  bodyOldStyle.value = document.body.getAttribute('style') || '';
  document.body.style.overflowX = 'hidden';

  const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
  if (!pageWrap) {
    return;
  }

  if (attrs.right) {
    pageWrap.style.transform = `translate3d(-${width}, 0px, 0px )`;
  } else {
    pageWrap.style.transform = `translate3d(${width}, 0px, 0px )`;
  }

  pageWrap.style.transition = 'all 0.5s ease 0s';
}

function pull() {
  emit('closeMenu');
  const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
  if (pageWrap) {
    pageWrap.style.transition = 'all 0.5s ease 0s';
    pageWrap.style.transform = '';
  }
  document.body.setAttribute('style', bodyOldStyle.value);
}

onBeforeUnmount(() => {
  pull();
});
</script>