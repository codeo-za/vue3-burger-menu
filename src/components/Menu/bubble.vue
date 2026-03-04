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
      name: 'bubble',
      inheritAttrs: false,
      emits: ['openMenu', 'closeMenu'],
      components: {
        Menu: Menu
      },
      methods : {
          openMenu () {
              const menuEl = (this.$refs.sideNav as InstanceType<typeof Menu>).$el as HTMLElement;
              const set = menuEl.querySelector<HTMLElement>('.bm-menu');
              if (set) {
                set.style.borderRadius='150% / 70%';
                if(this.$attrs.right){
                  set.style.borderTopRightRadius = '0px 900px';
                  set.style.borderBottomRightRadius='0px';
                }
                else{
                  set.style.borderTopLeftRadius = '0px 900px';
                  set.style.borderBottomLeftRadius='0px';
                }
                set.style.transitionTimingFunction='easy-in';

                setTimeout(function(){
                    set.style.transitionTimingFunction='cubic-bezier(.29, 1.01, 1, -0.68)';
                    set.style.borderRadius='0px'
                    }, 300);
              }
              this.$emit("openMenu");
          },
          closeMenu () {
            const menuEl = (this.$refs.sideNav as InstanceType<typeof Menu>).$el as HTMLElement;
            const set = menuEl.querySelector<HTMLElement>('.bm-menu');
            if (set) {
              set.style.transitionTimingFunction = '';
            }
            this.$emit("closeMenu")
          }
      }
    });
</script>
