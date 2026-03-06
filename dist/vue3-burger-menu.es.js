(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode("html{height:100%}.bm-burger-button{position:absolute;width:36px;height:30px;left:36px;top:36px;cursor:pointer}.bm-burger-button.hidden{display:none}.bm-burger-bars{background-color:#373a47}.line-style{position:absolute;height:20%;left:0;right:0}.cross-style{position:absolute;top:12px;right:2px;cursor:pointer}.bm-cross{background:#bdc3c7}.bm-cross-button{height:36px;width:36px;padding-left:16px;padding-top:8px;margin-top:-8px;margin-right:8px}.bm-cross-button.hidden{display:none}.bm-menu{height:100%;width:0;position:fixed;z-index:1000;top:0;left:0;background-color:#3f3f41;overflow-x:hidden;padding-top:60px;transition:.5s}.bm-overlay{background:#0000004d}.bm-item-list{color:#b8b7ad;margin-left:10%;font-size:20px}.bm-item-list>*{display:flex;text-decoration:none;padding:.7em}.bm-item-list>*>span{margin-left:10px;font-weight:700;color:#fff}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as m, openBlock as c, createElementBlock as d, createElementVNode as M, renderSlot as f, normalizeClass as S, Fragment as O, renderList as E, normalizeStyle as A, createVNode as h, mergeProps as b, withCtx as v, useAttrs as $, useTemplateRef as B, ref as g, onBeforeUnmount as _, onMounted as k, nextTick as q } from "vue";
const C = m({
  name: "menubar",
  emits: ["openMenu", "closeMenu"],
  data() {
    return {
      isSideBarOpen: !1
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: !1
    },
    right: {
      type: Boolean,
      required: !1
    },
    width: {
      type: String,
      required: !1,
      default: "300"
    },
    disableEsc: {
      type: Boolean,
      required: !1
    },
    noOverlay: {
      type: Boolean,
      required: !1
    },
    burgerIcon: {
      type: Boolean,
      required: !1,
      default: !0
    },
    crossIcon: {
      type: Boolean,
      required: !1,
      default: !0
    },
    disableOutsideClick: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  methods: {
    openMenu(s) {
      return s && (s.stopPropagation(), s.preventDefault()), this.isSideBarOpen || (this.$emit("openMenu"), this.isSideBarOpen = !0, this.noOverlay || document.body.classList.add("bm-overlay"), this.right && (this.$refs.sideNav.style.left = "auto", this.$refs.sideNav.style.right = "0px"), this.$nextTick(() => {
        this.$refs.sideNav.style.width = this.width ? this.width + "px" : "300px";
      })), !1;
    },
    closeMenu(s) {
      return s && (s.stopPropagation(), s.preventDefault()), this.isSideBarOpen && (this.$emit("closeMenu"), this.isSideBarOpen = !1, document.body.classList.remove("bm-overlay"), this.$refs.sideNav.style.width = "0px"), !1;
    },
    closeMenuOnEsc(s) {
      (s.key === "Escape" || s.keyCode === 27) && this.closeMenu();
    },
    documentClick(s) {
      const n = this.$refs.bmBurgerButton, o = s.target;
      n && o && n !== o && !n.contains(o) && o.className !== "bm-menu" && this.isSideBarOpen && !this.disableOutsideClick && this.closeMenu();
    },
    applyPosition() {
      const s = this.$refs.bmBurgerButton, n = this.$refs.sideNav, o = this.$refs.bmCrossButton;
      !s || !n || !o || (this.right ? (n.style.left = "auto", n.style.right = "0px", s.style.left = "auto", s.style.right = "36px", o.style.right = "250px") : s.hasAttribute("style") && (s.removeAttribute("style"), n.style.right = "auto", o.style.right = "0px"));
    }
  },
  mounted() {
    this.disableEsc || document.addEventListener("keyup", this.closeMenuOnEsc);
    const s = this.$refs.bmBurgerButton;
    s.addEventListener("touchstart", this.openMenu), s.addEventListener("click", this.openMenu);
    const n = this.$refs.bmCrossButton;
    n.addEventListener("click", this.closeMenu), n.addEventListener("touchstart", this.closeMenu), this.applyPosition();
  },
  created() {
    document.addEventListener("click", this.documentClick);
  },
  unmounted() {
    document.body.classList.remove("bm-overlay"), document.removeEventListener("keyup", this.closeMenuOnEsc), document.removeEventListener("click", this.documentClick);
    const s = this.$refs.bmBurgerButton;
    s && (s.removeEventListener("touchstart", this.openMenu), s.removeEventListener("click", this.openMenu));
    const n = this.$refs.bmCrossButton;
    n && (n.removeEventListener("click", this.closeMenu), n.removeEventListener("touchstart", this.closeMenu));
  },
  watch: {
    isOpen: {
      deep: !0,
      immediate: !0,
      handler(s, n) {
        this.$nextTick(() => {
          !n && s && this.openMenu(), n && !s && this.closeMenu();
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
}), L = (s, n) => {
  const o = s.__vccOpts || s;
  for (const [i, r] of n)
    o[i] = r;
  return o;
}, R = {
  ref: "sideNav",
  class: "bm-menu"
}, N = { class: "bm-item-list" };
function W(s, n, o, i, r, u) {
  return c(), d("div", null, [
    M("div", R, [
      M("nav", N, [
        f(s.$slots, "default")
      ]),
      M("span", {
        ref: "bmCrossButton",
        class: S(["bm-cross-button cross-style", { hidden: !s.crossIcon }])
      }, [...n[1] || (n[1] = [
        M("span", {
          class: "bm-cross",
          style: { position: "absolute", width: "3px", height: "14px", transform: "rotate(-45deg)" }
        }, null, -1),
        M("span", {
          class: "bm-cross",
          style: { position: "absolute", width: "3px", height: "14px", transform: "rotate(45deg)" }
        }, null, -1)
      ])], 2)
    ], 512),
    M("div", {
      ref: "bmBurgerButton",
      class: S(["bm-burger-button", { hidden: !s.burgerIcon }]),
      onClick: n[0] || (n[0] = (...p) => s.openMenu && s.openMenu(...p))
    }, [
      (c(), d(O, null, E(3, (p, l) => M("span", {
        class: "bm-burger-bars line-style",
        style: A({ top: 20 * (l * 2) + "%" }),
        key: l
      }, null, 4)), 64))
    ], 2)
  ]);
}
const y = /* @__PURE__ */ L(C, [["render", W]]), P = /* @__PURE__ */ m({
  name: "slide",
  inheritAttrs: !1,
  __name: "slide",
  emits: ["openMenu", "closeMenu"],
  setup(s, { emit: n }) {
    const o = n;
    return (i, r) => (c(), d("div", null, [
      h(y, b(i.$attrs, {
        onOpenMenu: r[0] || (r[0] = (u) => o("openMenu")),
        onCloseMenu: r[1] || (r[1] = (u) => o("closeMenu"))
      }), {
        default: v(() => [
          f(i.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]));
  }
}), T = /* @__PURE__ */ m({
  name: "bubble",
  inheritAttrs: !1,
  __name: "bubble",
  emits: ["openMenu", "closeMenu"],
  setup(s, { emit: n }) {
    const o = n, i = $(), r = B("sideNav");
    function u() {
      const e = r.value?.$el?.querySelector(".bm-menu");
      e && (e.style.borderRadius = "150% / 70%", i.right ? (e.style.borderTopRightRadius = "0px 900px", e.style.borderBottomRightRadius = "0px") : (e.style.borderTopLeftRadius = "0px 900px", e.style.borderBottomLeftRadius = "0px"), setTimeout(function() {
        e.style.transitionTimingFunction = "cubic-bezier(.29, 1.01, 1, -0.68)", e.style.borderRadius = "0px";
      }, 300)), o("openMenu");
    }
    function p() {
      const e = r.value?.$el?.querySelector(".bm-menu");
      e && (e.style.transitionTimingFunction = ""), o("closeMenu");
    }
    return (l, e) => (c(), d("div", null, [
      h(y, b({
        ref_key: "sideNav",
        ref: r
      }, l.$attrs, {
        onOpenMenu: u,
        onCloseMenu: p
      }), {
        default: v(() => [
          f(l.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]));
  }
}), D = /* @__PURE__ */ m({
  name: "reveal",
  inheritAttrs: !1,
  __name: "reveal",
  emits: ["openMenu", "closeMenu"],
  setup(s, { emit: n }) {
    const o = n, i = $(), r = g("");
    function u() {
      o("openMenu");
      const l = i.width ? i.width + "px" : "300px";
      r.value = document.body.getAttribute("style") || "", document.body.style.overflowX = "hidden";
      const e = document.querySelector("#page-wrap");
      e && (i.right ? e.style.transform = `translate3d(-${l}, 0px, 0px )` : e.style.transform = `translate3d(${l}, 0px, 0px )`, e.style.position = "relative", e.style.transition = "all 0.5s ease 0s");
    }
    function p() {
      o("closeMenu");
      const l = document.querySelector("#page-wrap");
      l && (l.style.transition = "all 0.5s ease 0s", l.style.transform = "", l.style.position = ""), document.body.setAttribute("style", r.value);
    }
    return _(() => {
      p();
    }), (l, e) => (c(), d("div", null, [
      h(y, b(l.$attrs, {
        onOpenMenu: u,
        onCloseMenu: p
      }), {
        default: v(() => [
          f(l.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]));
  }
}), X = /* @__PURE__ */ m({
  name: "push",
  inheritAttrs: !1,
  __name: "push",
  emits: ["openMenu", "closeMenu"],
  setup(s, { emit: n }) {
    const o = n, i = $(), r = g("");
    function u() {
      o("openMenu");
      const l = i.width ? i.width + "px" : "300px";
      r.value = document.body.getAttribute("style") || "", document.body.style.overflowX = "hidden";
      const e = document.querySelector("#page-wrap");
      e && (i.right ? e.style.transform = `translate3d(-${l}, 0px, 0px )` : e.style.transform = `translate3d(${l}, 0px, 0px )`, e.style.transition = "all 0.5s ease 0s");
    }
    function p() {
      o("closeMenu");
      const l = document.querySelector("#page-wrap");
      l && (l.style.transition = "all 0.5s ease 0s", l.style.transform = ""), document.body.setAttribute("style", r.value);
    }
    return _(() => {
      p();
    }), (l, e) => (c(), d("div", null, [
      h(y, b(l.$attrs, {
        onOpenMenu: u,
        onCloseMenu: p
      }), {
        default: v(() => [
          f(l.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]));
  }
}), F = /* @__PURE__ */ m({
  name: "elastic",
  inheritAttrs: !1,
  __name: "elastic",
  emits: ["openMenu", "closeMenu"],
  setup(s, { emit: n }) {
    const o = n;
    return (i, r) => (c(), d("div", null, [
      h(y, b(i.$attrs, {
        onOpenMenu: r[0] || (r[0] = (u) => o("openMenu")),
        onCloseMenu: r[1] || (r[1] = (u) => o("closeMenu"))
      }), {
        default: v(() => [
          f(i.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]));
  }
}), Y = /* @__PURE__ */ m({
  name: "falldown",
  inheritAttrs: !1,
  __name: "fallDown",
  emits: ["openMenu", "closeMenu"],
  setup(s, { emit: n }) {
    const o = n, i = $(), r = B("sideNav"), u = g("");
    function p() {
      return r.value?.$el?.querySelector(".bm-menu") ?? null;
    }
    function l() {
      o("openMenu");
      const t = i.width ? i.width + "px" : "300px", a = p();
      if (!a)
        return;
      a.style.overflowY = "hidden", u.value = document.body.getAttribute("style") || "", document.body.style.overflowX = "hidden", a.style.transition = "0.5s";
      const w = document.querySelector("#page-wrap");
      w && (i.right ? w.style.transform = `translate3d(-${t}, 0px, 0px )` : w.style.transform = `translate3d(${t}, 0px, 0px )`, w.style.transition = "all 0.5s ease 0s", q(() => {
        const x = p();
        x && (x.style.height = "100%");
      }));
    }
    function e() {
      o("closeMenu");
      const t = document.querySelector("#page-wrap");
      t && (t.style.transition = "all 0.5s ease 0s", t.style.transform = ""), document.body.setAttribute("style", u.value);
      const a = p();
      a && (a.style.height = "0px");
    }
    return k(() => {
      const t = p();
      t && (t.style.height = "0px");
    }), _(() => {
      const t = document.querySelector("#page-wrap");
      t && (t.style.transform = "", t.style.transition = ""), document.body.setAttribute("style", u.value);
      const a = p();
      a && (a.style.height = "0px");
    }), (t, a) => (c(), d("div", null, [
      h(y, b({
        ref_key: "sideNav",
        ref: r
      }, t.$attrs, {
        onOpenMenu: l,
        onCloseMenu: e
      }), {
        default: v(() => [
          f(t.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]));
  }
}), I = /* @__PURE__ */ m({
  name: "pushrotate",
  inheritAttrs: !1,
  __name: "pushRotate",
  emits: ["openMenu", "closeMenu"],
  setup(s, { emit: n }) {
    const o = n, i = $(), r = g(""), u = g("");
    function p() {
      o("openMenu");
      const e = i.width ? i.width + "px" : "300px";
      r.value = document.body.getAttribute("style") || "", document.body.style.overflowX = "hidden";
      const t = document.querySelector("#page-wrap"), a = document.querySelector("#app");
      !t || !a || (i.right ? (t.style.transform = `translate3d(-${e}, 0px, 0px ) rotateY(15deg)`, t.style.transformOrigin = "100% 50% 0px") : (t.style.transform = `translate3d(${e}, 0px, 0px ) rotateY(-15deg)`, t.style.transformOrigin = "0% 50% 0px"), t.style.transformStyle = "preserve-3d", t.style.transition = "all 0.5s ease 0s", u.value = a.getAttribute("style") || "", a.style.perspective = "1500px", a.style.overflow = "hidden");
    }
    function l() {
      o("closeMenu");
      const e = document.querySelector("#page-wrap"), t = document.querySelector("#app");
      e && (e.style.transition = "all 0.5s ease 0s", e.style.transform = "", e.style.transformStyle = "", e.style.transformOrigin = ""), t && t.setAttribute("style", u.value), document.body.setAttribute("style", r.value);
    }
    return _(() => {
      l();
    }), (e, t) => (c(), d("div", null, [
      h(y, b(e.$attrs, {
        onOpenMenu: p,
        onCloseMenu: l
      }), {
        default: v(() => [
          f(e.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]));
  }
}), z = /* @__PURE__ */ m({
  name: "stack",
  inheritAttrs: !1,
  __name: "stack",
  emits: ["openMenu", "closeMenu"],
  setup(s, { emit: n }) {
    const o = n;
    return (i, r) => (c(), d("div", null, [
      h(y, b(i.$attrs, {
        onOpenMenu: r[0] || (r[0] = (u) => o("openMenu")),
        onCloseMenu: r[1] || (r[1] = (u) => o("closeMenu"))
      }), {
        default: v(() => [
          f(i.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]));
  }
}), U = /* @__PURE__ */ m({
  name: "scalerotate",
  inheritAttrs: !1,
  __name: "scaleRotate",
  emits: ["openMenu", "closeMenu"],
  setup(s, { emit: n }) {
    const o = n, i = $(), r = g(""), u = g("");
    function p() {
      o("openMenu");
      const e = i.width ? i.width + "px" : "100px";
      r.value = document.body.getAttribute("style") || "", document.body.style.overflowX = "hidden";
      const t = document.querySelector("#page-wrap"), a = document.querySelector("#app");
      !t || !a || (i.right ? t.style.transform = `translate3d(-${e}, 0px, -600px ) rotateY(20deg)` : t.style.transform = `translate3d(${e}, 0px, -600px ) rotateY(-20deg)`, t.style.transformStyle = "preserve-3d", t.style.transition = "all 0.5s ease 0s", t.style.overflow = "hidden", u.value = a.getAttribute("style") || "", a.style.perspective = "1500px", a.style.overflow = "hidden", a.style.height = "100%");
    }
    function l() {
      o("closeMenu");
      const e = document.querySelector("#page-wrap"), t = document.querySelector("#app");
      e && (e.style.transition = "all 0.5s ease 0s", e.style.transform = "", e.style.transformStyle = "", e.style.transformOrigin = "", e.style.overflow = "auto"), t && t.setAttribute("style", u.value), document.body.setAttribute("style", r.value);
    }
    return _(() => {
      l();
    }), (e, t) => (c(), d("div", null, [
      h(y, b(e.$attrs, {
        onOpenMenu: p,
        onCloseMenu: l
      }), {
        default: v(() => [
          f(e.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]));
  }
}), j = /* @__PURE__ */ m({
  name: "scaledown",
  inheritAttrs: !1,
  __name: "scaleDown",
  emits: ["openMenu", "closeMenu"],
  setup(s, { emit: n }) {
    const o = n, i = $(), r = g(""), u = g("");
    function p() {
      o("openMenu");
      const e = i.width ? i.width + "px" : "100px";
      r.value = document.body.getAttribute("style") || "", document.body.style.overflowX = "hidden";
      const t = document.querySelector("#page-wrap"), a = document.querySelector("#app");
      !t || !a || (i.right ? t.style.transform = `translate3d(-${e}, 0px, -600px ) ` : t.style.transform = `translate3d(${e}, 0px, -600px ) `, t.style.transformStyle = "preserve-3d", t.style.transition = "all 0.5s ease 0s", t.style.overflow = "hidden", u.value = a.getAttribute("style") || "", a.style.perspective = "1500px", a.style.overflow = "hidden", a.style.height = "100%");
    }
    function l() {
      o("closeMenu");
      const e = document.querySelector("#page-wrap"), t = document.querySelector("#app");
      e && (e.style.transition = "all 0.5s ease 0s", e.style.transform = "", e.style.transformStyle = "", e.style.transformOrigin = "", e.style.overflow = "auto"), t && t.setAttribute("style", u.value), document.body.setAttribute("style", r.value);
    }
    return _(() => {
      l();
    }), (e, t) => (c(), d("div", null, [
      h(y, b(e.$attrs, {
        onOpenMenu: p,
        onCloseMenu: l
      }), {
        default: v(() => [
          f(e.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]));
  }
}), H = {
  Menu: y,
  Slide: P,
  Bubble: T,
  Reveal: D,
  Push: X,
  PushRotate: I,
  ScaleDown: j,
  ScaleRotate: U,
  Stack: z,
  FallDown: Y,
  Elastic: F
};
export {
  T as Bubble,
  F as Elastic,
  Y as FallDown,
  y as Menu,
  X as Push,
  I as PushRotate,
  D as Reveal,
  j as ScaleDown,
  U as ScaleRotate,
  P as Slide,
  z as Stack,
  H as default
};
