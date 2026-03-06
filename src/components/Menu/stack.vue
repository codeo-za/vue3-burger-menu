<template>
    <div>
        <Menu v-bind="$attrs" @openMenu="emit('openMenu')" @closeMenu="emit('closeMenu')">
            <slot></slot>
        </Menu>
    </div>
</template>

<script setup lang="ts">
import Menu from '../Menu.vue';

defineOptions({
  name: 'stack',
  inheritAttrs: false
});

const emit = defineEmits<{
  openMenu: [];
  closeMenu: [];
}>();
</script>