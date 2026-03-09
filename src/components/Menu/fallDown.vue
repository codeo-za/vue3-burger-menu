<template>
    <div>
        <Menu ref="sideNav" v-bind="$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
            <slot></slot>
        </Menu>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick, useAttrs, useTemplateRef, onMounted, onBeforeUnmount } from 'vue';
import Menu from '../Menu.vue';

defineOptions({
  name: 'falldown',
  inheritAttrs: false
});

const emit = defineEmits<{
  openMenu: [];
  closeMenu: [];
}>();

const attrs = useAttrs();
const sideNav = useTemplateRef<InstanceType<typeof Menu>>('sideNav');
const bodyOldStyle = ref('');

function getBmMenu(): HTMLElement | null {
  const menuEl = sideNav.value?.$el as HTMLElement | undefined;
  return menuEl?.querySelector<HTMLElement>('.bm-menu') ?? null;
}

function openMenu() {
  emit('openMenu');
  const width = (attrs.width as string | undefined) ? attrs.width + 'px' : '300px';
  const bmMenu = getBmMenu();
  if (!bmMenu) {
    return;
  }
  bmMenu.style.overflowY = 'hidden';
  bodyOldStyle.value = document.body.getAttribute('style') || '';
  document.body.style.overflowX = 'hidden';
  bmMenu.style.transition = '0.5s';

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

  nextTick(() => {
    const menu = getBmMenu();
    if (menu) {
      menu.style.height = '100%';
    }
  });
}

function closeMenu() {
  emit('closeMenu');
  const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
  if (pageWrap) {
    pageWrap.style.transition = 'all 0.5s ease 0s';
    pageWrap.style.transform = '';
  }
  document.body.setAttribute('style', bodyOldStyle.value);
  const bmMenu = getBmMenu();
  if (bmMenu) {
    bmMenu.style.height = '0px';
  }
}

onMounted(() => {
  const bmMenu = getBmMenu();
  if (bmMenu) {
    bmMenu.style.height = '0px';
  }
});

onBeforeUnmount(() => {
  const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
  if (pageWrap) {
    pageWrap.style.transform = '';
    pageWrap.style.transition = '';
  }
  document.body.setAttribute('style', bodyOldStyle.value);
  const bmMenu = getBmMenu();
  if (bmMenu) {
    bmMenu.style.height = '0px';
  }
});
</script>