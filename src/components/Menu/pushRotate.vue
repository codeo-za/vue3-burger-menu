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
      name: 'pushrotate',
      inheritAttrs: false,
      emits: ['openMenu', 'closeMenu'],
      components: {
        Menu: Menu
      },
      data() {
        return {
          bodyOldStyle: '',
          appOldStyle: ''
        };
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
          const appEl = document.querySelector<HTMLElement>('#app');
          if (!pageWrap || !appEl) {
            return;
          }

          if (this.$attrs.right) {
            pageWrap.style.transform = `translate3d(-${width}, 0px, 0px ) rotateY(15deg)`;
            pageWrap.style.transformOrigin = '100% 50% 0px';
          } else {
            pageWrap.style.transform = `translate3d(${width}, 0px, 0px ) rotateY(-15deg)`;
            pageWrap.style.transformOrigin = '0% 50% 0px';
          }

          pageWrap.style.transformStyle = 'preserve-3d';
          pageWrap.style.transition = 'all 0.5s ease 0s';

          this.appOldStyle = appEl.getAttribute('style') || '';
          appEl.style.perspective = '1500px';
          appEl.style.overflow = 'hidden';
        },
        pull() {
          this.closeMenu()
          const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
          const appEl = document.querySelector<HTMLElement>('#app');
          if (pageWrap) {
            pageWrap.style.transition = 'all 0.5s ease 0s';
            pageWrap.style.transform = '';
            pageWrap.style.transformStyle = '';
            pageWrap.style.transformOrigin = '';
          }
          if (appEl) {
            appEl.setAttribute('style', this.appOldStyle);
          }
          document.body.setAttribute('style', this.bodyOldStyle);
        }
      }
    });
</script>


