<template>
    <div>
        <Menu v-bind="$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
            <slot></slot>
        </Menu>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Menu from '../Menu.vue';
    export default defineComponent({
      name: 'stack',
      inheritAttrs: false,
      emits: ['openMenu', 'closeMenu'],
      components: {
        Menu: Menu
      },
      methods : {
          openMenu () {
              this.$emit("openMenu")
          },
          closeMenu () {
              this.$emit("closeMenu")
          }
      }
    });
</script>
