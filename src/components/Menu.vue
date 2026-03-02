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

<script>
    export default {
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
          type: [String],
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
        onStateChange: {
          type: Function,
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
        openMenu(e) {
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
            document.body.className += 'bm-overlay';
          }
          if (this.right) {
            this.$refs.sideNav.style.left = 'auto';
            this.$refs.sideNav.style.right = '0px';
          }
          this.$nextTick(() => {
            this.$refs.sideNav.style.width = this.width
              ? this.width + 'px'
              : '300px';
          });
          return false;
        },

        closeMenu(e) {
          if (e){
            e.stopPropagation();
            e.preventDefault();
          }
          if (!this.isSideBarOpen){
            return false;
          }

          this.$emit('closeMenu');
          this.isSideBarOpen = false;
          document.body.className = document.body.className.replace(
            'bm-overlay',
            ''
          );
          this.$refs.sideNav.style.width = '0px';
          return false;
        },

        closeMenuOnEsc(e) {
          e = e || window.event;
          if (e.key === 'Escape' || e.keyCode === 27) {
            this.closeMenu();
          }
        },
        documentClick(e) {
          let element = this.$refs.bmBurgerButton;
          let target = null;
          if (e && e.target) {
            target = e.target;
          }

          if (
            element &&
            element !== target &&
            !element.contains(target) &&
            e.target.className !== 'bm-menu' &&
            this.isSideBarOpen &&
            !this.disableOutsideClick
          ) {
            this.closeMenu();
          }
        }
      },
      mounted() {
        if (!this.disableEsc) {
          document.addEventListener('keyup', this.closeMenuOnEsc);
        }

        const burgerButton = this.$refs.bmBurgerButton;
        burgerButton.addEventListener('touchstart', this.openMenu);
        burgerButton.addEventListener('click', this.openMenu);

        const crossButton = this.$refs.bmCrossButton;
        crossButton.addEventListener('click', this.closeMenu);
        crossButton.addEventListener('touchstart', this.closeMenu);

      },
      created: function() {
        document.addEventListener('click', this.documentClick);
      },
      unmounted: function() {
        document.removeEventListener('keyup', this.closeMenuOnEsc);
        document.removeEventListener('click', this.documentClick);

        const burgerButton = this.$refs.bmBurgerButton;
        if (burgerButton) {
          burgerButton.removeEventListener('touchstart', this.openMenu);
          burgerButton.removeEventListener('click', this.openMenu);
        }

        const crossButton = this.$refs.bmCrossButton;
        if (crossButton) {
          crossButton.removeEventListener('click', this.closeMenu);
          crossButton.removeEventListener('touchstart', this.closeMenu);
        }
      },
      watch: {
        isOpen: {
          deep: true,
          immediate: true,
          handler(newValue, oldValue) {
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
          deep: true,
          immediate: true,
          handler(oldValue, newValue) {
            var burgerButton = this.$refs.bmBurgerButton;
            var burgerMenu = this.$refs.sideNav;
            var crossButton = this.$refs.bmCrossButton;
            if (!burgerButton || !burgerMenu || !crossButton) {
              // component is not fully-formed
              return;
            }
            if (oldValue) {
              this.$nextTick(() => {
                burgerMenu.style.left = 'auto';
                burgerMenu.style.right = '0px';

                burgerButton.style.left = 'auto';
                burgerButton.style.right = '36px';

                crossButton.style.right = '250px';
              });
            }
            if (newValue) {
              if (
                burgerButton.hasAttribute('style')
              ) {
                burgerButton.removeAttribute('style');
                burgerMenu.style.right = 'auto';
                crossButton.style.right='0px';
              }
            }
          }
        }
      }
    };
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

