import Slide from './Menu/slide.vue';
import Bubble from './Menu/bubble.vue';
import Reveal from './Menu/reveal.vue';
import Push from './Menu/push.vue';
import Elastic from './Menu/elastic.vue';
import FallDown from './Menu/fallDown.vue';
import PushRotate from './Menu/pushRotate.vue';
import Stack from './Menu/stack.vue';
import ScaleRotate from './Menu/scaleRotate.vue';
import ScaleDown from './Menu/scaleDown.vue';
import Menu from './Menu.vue';
export { Menu, Slide, Bubble, Reveal, Push, Elastic, FallDown, PushRotate, Stack, ScaleRotate, ScaleDown };
declare const _default: {
    Menu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        isOpen: {
            type: BooleanConstructor;
            required: false;
        };
        right: {
            type: BooleanConstructor;
            required: false;
        };
        width: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        disableEsc: {
            type: BooleanConstructor;
            required: false;
        };
        noOverlay: {
            type: BooleanConstructor;
            required: false;
        };
        burgerIcon: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        crossIcon: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        disableOutsideClick: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>, {}, {
        isSideBarOpen: boolean;
    }, {}, {
        openMenu(e?: Event): false;
        closeMenu(e?: Event): false;
        closeMenuOnEsc(e: KeyboardEvent): void;
        documentClick(e: MouseEvent): void;
        applyPosition(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("openMenu" | "closeMenu")[], "openMenu" | "closeMenu", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        isOpen: {
            type: BooleanConstructor;
            required: false;
        };
        right: {
            type: BooleanConstructor;
            required: false;
        };
        width: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        disableEsc: {
            type: BooleanConstructor;
            required: false;
        };
        noOverlay: {
            type: BooleanConstructor;
            required: false;
        };
        burgerIcon: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        crossIcon: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        disableOutsideClick: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & Readonly<{
        onOpenMenu?: ((...args: any[]) => any) | undefined;
        onCloseMenu?: ((...args: any[]) => any) | undefined;
    }>, {
        isOpen: boolean;
        right: boolean;
        width: string;
        disableEsc: boolean;
        noOverlay: boolean;
        burgerIcon: boolean;
        crossIcon: boolean;
        disableOutsideClick: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Slide: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            openMenu: () => any;
            closeMenu: () => any;
        }, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{
        onOpenMenu?: (() => any) | undefined;
        onCloseMenu?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        openMenu: () => any;
        closeMenu: () => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    Bubble: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            openMenu: () => any;
            closeMenu: () => any;
        }, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{
        onOpenMenu?: (() => any) | undefined;
        onCloseMenu?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        openMenu: () => any;
        closeMenu: () => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    Reveal: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            openMenu: () => any;
            closeMenu: () => any;
        }, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{
        onOpenMenu?: (() => any) | undefined;
        onCloseMenu?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        openMenu: () => any;
        closeMenu: () => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    Push: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            openMenu: () => any;
            closeMenu: () => any;
        }, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{
        onOpenMenu?: (() => any) | undefined;
        onCloseMenu?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        openMenu: () => any;
        closeMenu: () => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    PushRotate: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            openMenu: () => any;
            closeMenu: () => any;
        }, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{
        onOpenMenu?: (() => any) | undefined;
        onCloseMenu?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        openMenu: () => any;
        closeMenu: () => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    ScaleDown: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            openMenu: () => any;
            closeMenu: () => any;
        }, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{
        onOpenMenu?: (() => any) | undefined;
        onCloseMenu?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        openMenu: () => any;
        closeMenu: () => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    ScaleRotate: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            openMenu: () => any;
            closeMenu: () => any;
        }, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{
        onOpenMenu?: (() => any) | undefined;
        onCloseMenu?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        openMenu: () => any;
        closeMenu: () => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    Stack: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            openMenu: () => any;
            closeMenu: () => any;
        }, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{
        onOpenMenu?: (() => any) | undefined;
        onCloseMenu?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        openMenu: () => any;
        closeMenu: () => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    FallDown: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            openMenu: () => any;
            closeMenu: () => any;
        }, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{
        onOpenMenu?: (() => any) | undefined;
        onCloseMenu?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        openMenu: () => any;
        closeMenu: () => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    Elastic: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            openMenu: () => any;
            closeMenu: () => any;
        }, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{
            onOpenMenu?: (() => any) | undefined;
            onCloseMenu?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{
        onOpenMenu?: (() => any) | undefined;
        onCloseMenu?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        openMenu: () => any;
        closeMenu: () => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
};
export default _default;
