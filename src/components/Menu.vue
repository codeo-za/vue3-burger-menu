<template>
    <div>
        <div ref="sideNav" class="bm-menu">
            <nav class="bm-item-list">
                <slot></slot>
            </nav>
            <span ref="bmCrossButton" class="bm-cross-button cross-style" :class="{ hidden: !crossIcon }">
                <span class="bm-cross" :style="{ position: 'absolute', width: '3px', height: '14px', transform: 'rotate(-45deg)'}"></span>
                <span class="bm-cross" :style="{ position: 'absolute', width: '3px', height: '14px', transform: 'rotate(45deg)'}"></span>
            </span>
        </div>

        <div ref="bmBurgerButton" class="bm-burger-button" @click="openMenu" :class="{ hidden: !burgerIcon }">
            <span class="bm-burger-bars line-style" :style="{top:20 * (index * 2) + '%'}" v-for="(x, index) in 3" :key="index"></span>
        </div>

    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
      name: 'menubar',
      emits: ['openMenu', 'closeMenu'],
      data() {
        return {
          isSideBarOpen: false
        };
      },
      props: {
        isOpen: {
          type: Boolean,
          required: false
        },
        right: {
          type: Boolean,
          required: false
        },
        width: {
          type: String,
          required: false,
          default: '300'
        },
        disableEsc: {
          type: Boolean,
          required: false
        },
        noOverlay: {
          type: Boolean,
          required: false
        },
        burgerIcon: {
          type: Boolean,
          required: false,
          default: true
        },
        crossIcon: {
          type: Boolean,
          required: false,
          default: true
        },
        disableOutsideClick: {
          type: Boolean,
          required: false,
          default: false
        }
      },
      methods: {
        openMenu(e?: Event) {
          if (e){
            e.stopPropagation();
            e.preventDefault();
          }

          if (this.isSideBarOpen){
            return false;
          }

          this.$emit('openMenu');
          this.isSideBarOpen = true;

          if (!this.noOverlay) {
            document.body.classList.add('bm-overlay');
          }
          if (this.right) {
            (this.$refs.sideNav as HTMLElement).style.left = 'auto';
            (this.$refs.sideNav as HTMLElement).style.right = '0px';
          }
          this.$nextTick(() => {
            (this.$refs.sideNav as HTMLElement).style.width = this.width
              ? this.width + 'px'
              : '300px';
          });
          return false;
        },

        closeMenu(e?: Event) {
          if (e){
            e.stopPropagation();
            e.preventDefault();
          }
          if (!this.isSideBarOpen){
            return false;
          }

          this.$emit('closeMenu');
          this.isSideBarOpen = false;
          document.body.classList.remove('bm-overlay');
          (this.$refs.sideNav as HTMLElement).style.width = '0px';
          return false;
        },

        closeMenuOnEsc(e: KeyboardEvent) {
          if (e.key === 'Escape' || e.keyCode === 27) {
            this.closeMenu();
          }
        },
        documentClick(e: MouseEvent) {
          const element = this.$refs.bmBurgerButton as HTMLElement | undefined;
          const target = e.target as HTMLElement | null;

          if (
            element &&
            target &&
            element !== target &&
            !element.contains(target) &&
            target.className !== 'bm-menu' &&
            this.isSideBarOpen &&
            !this.disableOutsideClick
          ) {
            this.closeMenu();
          }
        },
        applyPosition() {
          const burgerButton = this.$refs.bmBurgerButton as HTMLElement | undefined;
          const burgerMenu = this.$refs.sideNav as HTMLElement | undefined;
          const crossButton = this.$refs.bmCrossButton as HTMLElement | undefined;
          if (!burgerButton || !burgerMenu || !crossButton) {
            return;
          }
          if (this.right) {
            burgerMenu.style.left = 'auto';
            burgerMenu.style.right = '0px';
            burgerButton.style.left = 'auto';
            burgerButton.style.right = '36px';
            crossButton.style.right = '250px';
          } else {
            if (burgerButton.hasAttribute('style')) {
              burgerButton.removeAttribute('style');
              burgerMenu.style.right = 'auto';
              crossButton.style.right = '0px';
            }
          }
        }
      },
      mounted() {
        if (!this.disableEsc) {
          document.addEventListener('keyup', this.closeMenuOnEsc);
        }

        const burgerButton = this.$refs.bmBurgerButton as HTMLElement;
        burgerButton.addEventListener('touchstart', this.openMenu);
        burgerButton.addEventListener('click', this.openMenu);

        const crossButton = this.$refs.bmCrossButton as HTMLElement;
        crossButton.addEventListener('click', this.closeMenu);
        crossButton.addEventListener('touchstart', this.closeMenu);

        this.applyPosition();
      },
      created() {
        document.addEventListener('click', this.documentClick);
      },
      unmounted() {
        document.body.classList.remove('bm-overlay');
        document.removeEventListener('keyup', this.closeMenuOnEsc);
        document.removeEventListener('click', this.documentClick);

        const burgerButton = this.$refs.bmBurgerButton as HTMLElement | undefined;
        if (burgerButton) {
          burgerButton.removeEventListener('touchstart', this.openMenu);
          burgerButton.removeEventListener('click', this.openMenu);
        }

        const crossButton = this.$refs.bmCrossButton as HTMLElement | undefined;
        if (crossButton) {
          crossButton.removeEventListener('click', this.closeMenu);
          crossButton.removeEventListener('touchstart', this.closeMenu);
        }
      },
      watch: {
        isOpen: {
          deep: true,
          immediate: true,
          handler(newValue: boolean, oldValue: boolean) {
            this.$nextTick(() => {
              if (!oldValue && newValue) {
                this.openMenu();
              }
              if (oldValue && !newValue) {
                this.closeMenu();
              }
            });
          }
        },
        right: {
          handler() {
            this.$nextTick(() => {
              this.applyPosition();
            });
          }
        }
      }
    });
</script>

<style>
    html {
      height: 100%;
    }
    .bm-burger-button {
      position: absolute;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-button.hidden {
      display: none;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 36px;
      width: 36px;
      padding-left: 16px;
      padding-top: 8px;
      margin-top: -8px;
      margin-right: 8px;
    }
    .bm-cross-button.hidden {
      display: none;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
</style>

