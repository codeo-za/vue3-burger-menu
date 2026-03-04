<template>
    <div>
        <Menu ref="sideNav" v-bind="$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
            <slot></slot>
        </Menu>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Menu from '../Menu.vue';
    export default defineComponent({
      name: 'falldown',
      inheritAttrs: false,
      emits: ['openMenu', 'closeMenu'],
      components: {
        Menu: Menu
      },
      data() {
        return {
          bodyOldStyle: ''
        };
      },
      beforeUnmount() {
        const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
        if (pageWrap) {
          pageWrap.style.transform = '';
          pageWrap.style.transition = '';
        }
        document.body.setAttribute('style', this.bodyOldStyle);
        const bmMenu = this.getBmMenu();
        if (bmMenu) bmMenu.style.height = '0px';
      },
      methods : {
          getBmMenu(): HTMLElement | null {
            const menuEl = (this.$refs.sideNav as InstanceType<typeof Menu>).$el as HTMLElement;
            return menuEl.querySelector<HTMLElement>('.bm-menu');
          },
          openMenu () {
            this.$emit("openMenu")
            const width = (this.$attrs.width as string | undefined) ? this.$attrs.width + 'px' : '300px';
            const bmMenu = this.getBmMenu();
            if (!bmMenu) return;
            bmMenu.style.overflowY = 'hidden';
            this.bodyOldStyle = document.body.getAttribute('style') || '';
            document.body.style.overflowX = 'hidden';
            bmMenu.style.transition='0.5s';

          const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
          if (!pageWrap) return;

          if (this.$attrs.right) {
            pageWrap.style.transform = `translate3d(-${width}, 0px, 0px )`;
          } else {
            pageWrap.style.transform = `translate3d(${width}, 0px, 0px )`;
          }

          pageWrap.style.transition = 'all 0.5s ease 0s';

            this.$nextTick(() => {
              const menu = this.getBmMenu();
              if (menu) menu.style.height='100%';
              });

          },
          closeMenu () {
            this.$emit("closeMenu")
            const pageWrap = document.querySelector<HTMLElement>('#page-wrap');
            if (pageWrap) {
              pageWrap.style.transition = 'all 0.5s ease 0s';
              pageWrap.style.transform = '';
            }
            document.body.setAttribute('style', this.bodyOldStyle);
            const bmMenu = this.getBmMenu();
            if (bmMenu) bmMenu.style.height='0px';

          }
      },
      mounted () {
        const bmMenu = this.getBmMenu();
        if (bmMenu) bmMenu.style.height='0px';
      }
    });
</script>
