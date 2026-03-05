<template>
    <div>
        <Menu v-bind="$attrs" @openMenu="push" @closeMenu="pull">
            <slot></slot>
        </Menu>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Menu from '../Menu.vue';
    export default defineComponent({
      name: 'push',
      inheritAttrs: false,
      emits: ['openMenu', 'closeMenu'],
      data() {
        return {
          bodyOldStyle: ''
        };
      },
      components: {
        Menu: Menu
      },
      beforeUnmount() {
        this.pull();
      },
      methods: {
        openMenu () {
            this.$emit("openMenu")
        },
        closeMenu () {
            this.$emit("closeMenu")
        },
        push() {
          this.openMenu()
          const width = (this.$attrs.width as string | undefined) ? this.$attrs.width + 'px' : '300px';

          this.bodyOldStyle = document.body.getAttribute('style') || '';
          document.body.style.overflowX = 'hidden';

          const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
          if (!pageWrap) {
            return;
          }

          if (this.$attrs.right) {
            pageWrap.style.transform = `translate3d(-${width}, 0px, 0px )`;
          } else {
            pageWrap.style.transform = `translate3d(${width}, 0px, 0px )`;
          }

          pageWrap.style.transition = 'all 0.5s ease 0s';
        },
        pull() {
          this.closeMenu()
          const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
          if (pageWrap) {
            pageWrap.style.transition = 'all 0.5s ease 0s';
            pageWrap.style.transform = '';
          }
          document.body.setAttribute('style', this.bodyOldStyle);
        }
      }
    });
</script>


