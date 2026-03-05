(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode("html{height:100%}.bm-burger-button{position:absolute;width:36px;height:30px;left:36px;top:36px;cursor:pointer}.bm-burger-button.hidden{display:none}.bm-burger-bars{background-color:#373a47}.line-style{position:absolute;height:20%;left:0;right:0}.cross-style{position:absolute;top:12px;right:2px;cursor:pointer}.bm-cross{background:#bdc3c7}.bm-cross-button{height:36px;width:36px;padding-left:16px;padding-top:8px;margin-top:-8px;margin-right:8px}.bm-cross-button.hidden{display:none}.bm-menu{height:100%;width:0;position:fixed;z-index:1000;top:0;left:0;background-color:#3f3f41;overflow-x:hidden;padding-top:60px;transition:.5s}.bm-overlay{background:#0000004d}.bm-item-list{color:#b8b7ad;margin-left:10%;font-size:20px}.bm-item-list>*{display:flex;text-decoration:none;padding:.7em}.bm-item-list>*>span{margin-left:10px;font-weight:700;color:#fff}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as u, openBlock as l, createElementBlock as i, createElementVNode as M, renderSlot as a, normalizeClass as b, Fragment as g, renderList as v, normalizeStyle as O, resolveComponent as h, createVNode as m, mergeProps as y, withCtx as f } from "vue";
const S = u({
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
    openMenu(e) {
      return e && (e.stopPropagation(), e.preventDefault()), this.isSideBarOpen || (this.$emit("openMenu"), this.isSideBarOpen = !0, this.noOverlay || document.body.classList.add("bm-overlay"), this.right && (this.$refs.sideNav.style.left = "auto", this.$refs.sideNav.style.right = "0px"), this.$nextTick(() => {
        this.$refs.sideNav.style.width = this.width ? this.width + "px" : "300px";
      })), !1;
    },
    closeMenu(e) {
      return e && (e.stopPropagation(), e.preventDefault()), this.isSideBarOpen && (this.$emit("closeMenu"), this.isSideBarOpen = !1, document.body.classList.remove("bm-overlay"), this.$refs.sideNav.style.width = "0px"), !1;
    },
    closeMenuOnEsc(e) {
      (e.key === "Escape" || e.keyCode === 27) && this.closeMenu();
    },
    documentClick(e) {
      const t = this.$refs.bmBurgerButton, s = e.target;
      t && s && t !== s && !t.contains(s) && s.className !== "bm-menu" && this.isSideBarOpen && !this.disableOutsideClick && this.closeMenu();
    },
    applyPosition() {
      const e = this.$refs.bmBurgerButton, t = this.$refs.sideNav, s = this.$refs.bmCrossButton;
      !e || !t || !s || (this.right ? (t.style.left = "auto", t.style.right = "0px", e.style.left = "auto", e.style.right = "36px", s.style.right = "250px") : e.hasAttribute("style") && (e.removeAttribute("style"), t.style.right = "auto", s.style.right = "0px"));
    }
  },
  mounted() {
    this.disableEsc || document.addEventListener("keyup", this.closeMenuOnEsc);
    const e = this.$refs.bmBurgerButton;
    e.addEventListener("touchstart", this.openMenu), e.addEventListener("click", this.openMenu);
    const t = this.$refs.bmCrossButton;
    t.addEventListener("click", this.closeMenu), t.addEventListener("touchstart", this.closeMenu), this.applyPosition();
  },
  created() {
    document.addEventListener("click", this.documentClick);
  },
  unmounted() {
    document.body.classList.remove("bm-overlay"), document.removeEventListener("keyup", this.closeMenuOnEsc), document.removeEventListener("click", this.documentClick);
    const e = this.$refs.bmBurgerButton;
    e && (e.removeEventListener("touchstart", this.openMenu), e.removeEventListener("click", this.openMenu));
    const t = this.$refs.bmCrossButton;
    t && (t.removeEventListener("click", this.closeMenu), t.removeEventListener("touchstart", this.closeMenu));
  },
  watch: {
    isOpen: {
      deep: !0,
      immediate: !0,
      handler(e, t) {
        this.$nextTick(() => {
          !t && e && this.openMenu(), t && !e && this.closeMenu();
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
}), p = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [o, r] of t)
    s[o] = r;
  return s;
}, w = {
  ref: "sideNav",
  class: "bm-menu"
}, _ = { class: "bm-item-list" };
function B(e, t, s, o, r, c) {
  return l(), i("div", null, [
    M("div", w, [
      M("nav", _, [
        a(e.$slots, "default")
      ]),
      M("span", {
        ref: "bmCrossButton",
        class: b(["bm-cross-button cross-style", { hidden: !e.crossIcon }])
      }, [...t[1] || (t[1] = [
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
      class: b(["bm-burger-button", { hidden: !e.burgerIcon }]),
      onClick: t[0] || (t[0] = (...n) => e.openMenu && e.openMenu(...n))
    }, [
      (l(), i(g, null, v(3, (n, $) => M("span", {
        class: "bm-burger-bars line-style",
        style: O({ top: 20 * ($ * 2) + "%" }),
        key: $
      }, null, 4)), 64))
    ], 2)
  ]);
}
const d = /* @__PURE__ */ p(S, [["render", B]]), x = u({
  name: "slide",
  inheritAttrs: !1,
  emits: ["openMenu", "closeMenu"],
  components: {
    Menu: d
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    closeMenu() {
      this.$emit("closeMenu");
    }
  }
});
function C(e, t, s, o, r, c) {
  const n = h("Menu");
  return l(), i("div", null, [
    m(n, y(e.$attrs, {
      onOpenMenu: e.openMenu,
      onCloseMenu: e.closeMenu
    }), {
      default: f(() => [
        a(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["onOpenMenu", "onCloseMenu"])
  ]);
}
const E = /* @__PURE__ */ p(x, [["render", C]]), A = u({
  name: "bubble",
  inheritAttrs: !1,
  emits: ["openMenu", "closeMenu"],
  components: {
    Menu: d
  },
  methods: {
    openMenu() {
      const t = this.$refs.sideNav.$el.querySelector(".bm-menu");
      t && (t.style.borderRadius = "150% / 70%", this.$attrs.right ? (t.style.borderTopRightRadius = "0px 900px", t.style.borderBottomRightRadius = "0px") : (t.style.borderTopLeftRadius = "0px 900px", t.style.borderBottomLeftRadius = "0px"), setTimeout(function() {
        t.style.transitionTimingFunction = "cubic-bezier(.29, 1.01, 1, -0.68)", t.style.borderRadius = "0px";
      }, 300)), this.$emit("openMenu");
    },
    closeMenu() {
      const t = this.$refs.sideNav.$el.querySelector(".bm-menu");
      t && (t.style.transitionTimingFunction = ""), this.$emit("closeMenu");
    }
  }
});
function q(e, t, s, o, r, c) {
  const n = h("Menu");
  return l(), i("div", null, [
    m(n, y({ ref: "sideNav" }, e.$attrs, {
      onOpenMenu: e.openMenu,
      onCloseMenu: e.closeMenu
    }), {
      default: f(() => [
        a(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["onOpenMenu", "onCloseMenu"])
  ]);
}
const k = /* @__PURE__ */ p(A, [["render", q]]), L = u({
  name: "reveal",
  inheritAttrs: !1,
  emits: ["openMenu", "closeMenu"],
  data() {
    return {
      bodyOldStyle: ""
    };
  },
  components: {
    Menu: d
  },
  beforeUnmount() {
    this.pull();
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    closeMenu() {
      this.$emit("closeMenu");
    },
    push() {
      this.openMenu();
      const e = this.$attrs.width ? this.$attrs.width + "px" : "300px";
      this.bodyOldStyle = document.body.getAttribute("style") || "", document.body.style.overflowX = "hidden";
      const t = document.querySelector("#page-wrap");
      t && (this.$attrs.right ? t.style.transform = `translate3d(-${e}, 0px, 0px )` : t.style.transform = `translate3d(${e}, 0px, 0px )`, t.style.position = "relative", t.style.transition = "all 0.5s ease 0s");
    },
    pull() {
      this.closeMenu();
      const e = document.querySelector("#page-wrap");
      e && (e.style.transition = "all 0.5s ease 0s", e.style.transform = "", e.style.position = ""), document.body.setAttribute("style", this.bodyOldStyle);
    }
  }
});
function N(e, t, s, o, r, c) {
  const n = h("Menu");
  return l(), i("div", null, [
    m(n, y(e.$attrs, {
      onOpenMenu: e.push,
      onCloseMenu: e.pull
    }), {
      default: f(() => [
        a(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["onOpenMenu", "onCloseMenu"])
  ]);
}
const W = /* @__PURE__ */ p(L, [["render", N]]), R = u({
  name: "push",
  inheritAttrs: !1,
  emits: ["openMenu", "closeMenu"],
  data() {
    return {
      bodyOldStyle: ""
    };
  },
  components: {
    Menu: d
  },
  beforeUnmount() {
    this.pull();
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    closeMenu() {
      this.$emit("closeMenu");
    },
    push() {
      this.openMenu();
      const e = this.$attrs.width ? this.$attrs.width + "px" : "300px";
      this.bodyOldStyle = document.body.getAttribute("style") || "", document.body.style.overflowX = "hidden";
      const t = document.querySelector("#page-wrap");
      t && (this.$attrs.right ? t.style.transform = `translate3d(-${e}, 0px, 0px )` : t.style.transform = `translate3d(${e}, 0px, 0px )`, t.style.transition = "all 0.5s ease 0s");
    },
    pull() {
      this.closeMenu();
      const e = document.querySelector("#page-wrap");
      e && (e.style.transition = "all 0.5s ease 0s", e.style.transform = ""), document.body.setAttribute("style", this.bodyOldStyle);
    }
  }
});
function T(e, t, s, o, r, c) {
  const n = h("Menu");
  return l(), i("div", null, [
    m(n, y(e.$attrs, {
      onOpenMenu: e.push,
      onCloseMenu: e.pull
    }), {
      default: f(() => [
        a(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["onOpenMenu", "onCloseMenu"])
  ]);
}
const P = /* @__PURE__ */ p(R, [["render", T]]), U = u({
  name: "elastic",
  inheritAttrs: !1,
  emits: ["openMenu", "closeMenu"],
  components: {
    Menu: d
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    closeMenu() {
      this.$emit("closeMenu");
    }
  }
});
function X(e, t, s, o, r, c) {
  const n = h("Menu");
  return l(), i("div", null, [
    m(n, y(e.$attrs, {
      onOpenMenu: e.openMenu,
      onCloseMenu: e.closeMenu
    }), {
      default: f(() => [
        a(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["onOpenMenu", "onCloseMenu"])
  ]);
}
const Y = /* @__PURE__ */ p(U, [["render", X]]), D = u({
  name: "falldown",
  inheritAttrs: !1,
  emits: ["openMenu", "closeMenu"],
  components: {
    Menu: d
  },
  data() {
    return {
      bodyOldStyle: ""
    };
  },
  beforeUnmount() {
    const e = document.querySelector("#page-wrap");
    e && (e.style.transform = "", e.style.transition = ""), document.body.setAttribute("style", this.bodyOldStyle);
    const t = this.getBmMenu();
    t && (t.style.height = "0px");
  },
  methods: {
    getBmMenu() {
      return this.$refs.sideNav.$el.querySelector(".bm-menu");
    },
    openMenu() {
      this.$emit("openMenu");
      const e = this.$attrs.width ? this.$attrs.width + "px" : "300px", t = this.getBmMenu();
      if (!t)
        return;
      t.style.overflowY = "hidden", this.bodyOldStyle = document.body.getAttribute("style") || "", document.body.style.overflowX = "hidden", t.style.transition = "0.5s";
      const s = document.querySelector("#page-wrap");
      s && (this.$attrs.right ? s.style.transform = `translate3d(-${e}, 0px, 0px )` : s.style.transform = `translate3d(${e}, 0px, 0px )`, s.style.transition = "all 0.5s ease 0s", this.$nextTick(() => {
        const o = this.getBmMenu();
        o && (o.style.height = "100%");
      }));
    },
    closeMenu() {
      this.$emit("closeMenu");
      const e = document.querySelector("#page-wrap");
      e && (e.style.transition = "all 0.5s ease 0s", e.style.transform = ""), document.body.setAttribute("style", this.bodyOldStyle);
      const t = this.getBmMenu();
      t && (t.style.height = "0px");
    }
  },
  mounted() {
    const e = this.getBmMenu();
    e && (e.style.height = "0px");
  }
});
function F(e, t, s, o, r, c) {
  const n = h("Menu");
  return l(), i("div", null, [
    m(n, y({ ref: "sideNav" }, e.$attrs, {
      onOpenMenu: e.openMenu,
      onCloseMenu: e.closeMenu
    }), {
      default: f(() => [
        a(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["onOpenMenu", "onCloseMenu"])
  ]);
}
const I = /* @__PURE__ */ p(D, [["render", F]]), z = u({
  name: "pushrotate",
  inheritAttrs: !1,
  emits: ["openMenu", "closeMenu"],
  components: {
    Menu: d
  },
  data() {
    return {
      bodyOldStyle: "",
      appOldStyle: ""
    };
  },
  beforeUnmount() {
    this.pull();
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    closeMenu() {
      this.$emit("closeMenu");
    },
    push() {
      this.openMenu();
      const e = this.$attrs.width ? this.$attrs.width + "px" : "300px";
      this.bodyOldStyle = document.body.getAttribute("style") || "", document.body.style.overflowX = "hidden";
      const t = document.querySelector("#page-wrap"), s = document.querySelector("#app");
      !t || !s || (this.$attrs.right ? (t.style.transform = `translate3d(-${e}, 0px, 0px ) rotateY(15deg)`, t.style.transformOrigin = "100% 50% 0px") : (t.style.transform = `translate3d(${e}, 0px, 0px ) rotateY(-15deg)`, t.style.transformOrigin = "0% 50% 0px"), t.style.transformStyle = "preserve-3d", t.style.transition = "all 0.5s ease 0s", this.appOldStyle = s.getAttribute("style") || "", s.style.perspective = "1500px", s.style.overflow = "hidden");
    },
    pull() {
      this.closeMenu();
      const e = document.querySelector("#page-wrap"), t = document.querySelector("#app");
      e && (e.style.transition = "all 0.5s ease 0s", e.style.transform = "", e.style.transformStyle = "", e.style.transformOrigin = ""), t && t.setAttribute("style", this.appOldStyle), document.body.setAttribute("style", this.bodyOldStyle);
    }
  }
});
function j(e, t, s, o, r, c) {
  const n = h("Menu");
  return l(), i("div", null, [
    m(n, y(e.$attrs, {
      onOpenMenu: e.push,
      onCloseMenu: e.pull
    }), {
      default: f(() => [
        a(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["onOpenMenu", "onCloseMenu"])
  ]);
}
const G = /* @__PURE__ */ p(z, [["render", j]]), H = u({
  name: "stack",
  inheritAttrs: !1,
  emits: ["openMenu", "closeMenu"],
  components: {
    Menu: d
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    closeMenu() {
      this.$emit("closeMenu");
    }
  }
});
function J(e, t, s, o, r, c) {
  const n = h("Menu");
  return l(), i("div", null, [
    m(n, y(e.$attrs, {
      onOpenMenu: e.openMenu,
      onCloseMenu: e.closeMenu
    }), {
      default: f(() => [
        a(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["onOpenMenu", "onCloseMenu"])
  ]);
}
const K = /* @__PURE__ */ p(H, [["render", J]]), Q = u({
  name: "scalerotate",
  inheritAttrs: !1,
  emits: ["openMenu", "closeMenu"],
  components: {
    Menu: d
  },
  data() {
    return {
      bodyOldStyle: "",
      appOldStyle: ""
    };
  },
  beforeUnmount() {
    this.pull();
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    closeMenu() {
      this.$emit("closeMenu");
    },
    push() {
      this.openMenu();
      const e = this.$attrs.width ? this.$attrs.width + "px" : "100px";
      this.bodyOldStyle = document.body.getAttribute("style") || "", document.body.style.overflowX = "hidden";
      const t = document.querySelector("#page-wrap"), s = document.querySelector("#app");
      !t || !s || (this.$attrs.right ? t.style.transform = `translate3d(-${e}, 0px, -600px ) rotateY(20deg)` : t.style.transform = `translate3d(${e}, 0px, -600px ) rotateY(-20deg)`, t.style.transformStyle = "preserve-3d", t.style.transition = "all 0.5s ease 0s", t.style.overflow = "hidden", this.appOldStyle = s.getAttribute("style") || "", s.style.perspective = "1500px", s.style.overflow = "hidden", s.style.height = "100%");
    },
    pull() {
      this.closeMenu();
      const e = document.querySelector("#page-wrap"), t = document.querySelector("#app");
      e && (e.style.transition = "all 0.5s ease 0s", e.style.transform = "", e.style.transformStyle = "", e.style.transformOrigin = "", e.style.overflow = "auto"), t && t.setAttribute("style", this.appOldStyle), document.body.setAttribute("style", this.bodyOldStyle);
    }
  }
});
function V(e, t, s, o, r, c) {
  const n = h("Menu");
  return l(), i("div", null, [
    m(n, y(e.$attrs, {
      onOpenMenu: e.push,
      onCloseMenu: e.pull
    }), {
      default: f(() => [
        a(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["onOpenMenu", "onCloseMenu"])
  ]);
}
const Z = /* @__PURE__ */ p(Q, [["render", V]]), ee = u({
  name: "scaledown",
  inheritAttrs: !1,
  emits: ["openMenu", "closeMenu"],
  components: {
    Menu: d
  },
  data() {
    return {
      bodyOldStyle: "",
      appOldStyle: ""
    };
  },
  beforeUnmount() {
    this.pull();
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    closeMenu() {
      this.$emit("closeMenu");
    },
    push() {
      this.openMenu();
      const e = this.$attrs.width ? this.$attrs.width + "px" : "100px";
      this.bodyOldStyle = document.body.getAttribute("style") || "", document.body.style.overflowX = "hidden";
      const t = document.querySelector("#page-wrap"), s = document.querySelector("#app");
      !t || !s || (this.$attrs.right ? t.style.transform = `translate3d(-${e}, 0px, -600px ) ` : t.style.transform = `translate3d(${e}, 0px, -600px ) `, t.style.transformStyle = "preserve-3d", t.style.transition = "all 0.5s ease 0s", t.style.overflow = "hidden", this.appOldStyle = s.getAttribute("style") || "", s.style.perspective = "1500px", s.style.overflow = "hidden", s.style.height = "100%");
    },
    pull() {
      this.closeMenu();
      const e = document.querySelector("#page-wrap"), t = document.querySelector("#app");
      e && (e.style.transition = "all 0.5s ease 0s", e.style.transform = "", e.style.transformStyle = "", e.style.transformOrigin = "", e.style.overflow = "auto"), t && t.setAttribute("style", this.appOldStyle), document.body.setAttribute("style", this.bodyOldStyle);
    }
  }
});
function te(e, t, s, o, r, c) {
  const n = h("Menu");
  return l(), i("div", null, [
    m(n, y(e.$attrs, {
      onOpenMenu: e.push,
      onCloseMenu: e.pull
    }), {
      default: f(() => [
        a(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["onOpenMenu", "onCloseMenu"])
  ]);
}
const se = /* @__PURE__ */ p(ee, [["render", te]]), oe = {
  Menu: d,
  Slide: E,
  Bubble: k,
  Reveal: W,
  Push: P,
  PushRotate: G,
  ScaleDown: se,
  ScaleRotate: Z,
  Stack: K,
  FallDown: I,
  Elastic: Y
};
export {
  k as Bubble,
  Y as Elastic,
  I as FallDown,
  d as Menu,
  P as Push,
  G as PushRotate,
  W as Reveal,
  se as ScaleDown,
  Z as ScaleRotate,
  E as Slide,
  K as Stack,
  oe as default
};
