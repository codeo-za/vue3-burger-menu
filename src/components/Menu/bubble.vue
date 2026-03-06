<template>
    <div>
        <Menu ref="sideNav" v-bind="$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
            <slot></slot>
        </Menu>
    </div>
</template>

<script setup lang="ts">
import { useAttrs, useTemplateRef } from 'vue';
import Menu from '../Menu.vue';

defineOptions({
  name: 'bubble',
  inheritAttrs: false
});

const emit = defineEmits<{
  openMenu: [];
  closeMenu: [];
}>();

const attrs = useAttrs();
const sideNav = useTemplateRef<InstanceType<typeof Menu>>('sideNav');

function openMenu() {
  const menuEl = sideNav.value?.$el as HTMLElement | undefined;
  const set = menuEl?.querySelector<HTMLElement>('.bm-menu');
  if (set) {
    set.style.borderRadius = '150% / 70%';
    if (attrs.right) {
      set.style.borderTopRightRadius = '0px 900px';
      set.style.borderBottomRightRadius = '0px';
    } else {
      set.style.borderTopLeftRadius = '0px 900px';
      set.style.borderBottomLeftRadius = '0px';
    }

    setTimeout(function() {
      set.style.transitionTimingFunction = 'cubic-bezier(.29, 1.01, 1, -0.68)';
      set.style.borderRadius = '0px';
    }, 300);
  }
  emit('openMenu');
}

function closeMenu() {
  const menuEl = sideNav.value?.$el as HTMLElement | undefined;
  const set = menuEl?.querySelector<HTMLElement>('.bm-menu');
  if (set) {
    set.style.transitionTimingFunction = '';
  }
  emit('closeMenu');
}
</script>