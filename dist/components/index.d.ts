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
    Slide: import("vue").DefineComponent<{}, {}, {}, {}, {
        openMenu(): void;
        closeMenu(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("openMenu" | "closeMenu")[], "openMenu" | "closeMenu", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onOpenMenu?: ((...args: any[]) => any) | undefined;
        onCloseMenu?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Bubble: import("vue").DefineComponent<{}, {}, {}, {}, {
        openMenu(): void;
        closeMenu(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("openMenu" | "closeMenu")[], "openMenu" | "closeMenu", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onOpenMenu?: ((...args: any[]) => any) | undefined;
        onCloseMenu?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Reveal: import("vue").DefineComponent<{}, {}, {
        bodyOldStyle: string;
    }, {}, {
        openMenu(): void;
        closeMenu(): void;
        push(): void;
        pull(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("openMenu" | "closeMenu")[], "openMenu" | "closeMenu", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onOpenMenu?: ((...args: any[]) => any) | undefined;
        onCloseMenu?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Push: import("vue").DefineComponent<{}, {}, {
        bodyOldStyle: string;
    }, {}, {
        openMenu(): void;
        closeMenu(): void;
        push(): void;
        pull(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("openMenu" | "closeMenu")[], "openMenu" | "closeMenu", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onOpenMenu?: ((...args: any[]) => any) | undefined;
        onCloseMenu?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    PushRotate: import("vue").DefineComponent<{}, {}, {
        bodyOldStyle: string;
        appOldStyle: string;
    }, {}, {
        openMenu(): void;
        closeMenu(): void;
        push(): void;
        pull(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("openMenu" | "closeMenu")[], "openMenu" | "closeMenu", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onOpenMenu?: ((...args: any[]) => any) | undefined;
        onCloseMenu?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ScaleDown: import("vue").DefineComponent<{}, {}, {
        bodyOldStyle: string;
        appOldStyle: string;
    }, {}, {
        openMenu(): void;
        closeMenu(): void;
        push(): void;
        pull(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("openMenu" | "closeMenu")[], "openMenu" | "closeMenu", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onOpenMenu?: ((...args: any[]) => any) | undefined;
        onCloseMenu?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ScaleRotate: import("vue").DefineComponent<{}, {}, {
        bodyOldStyle: string;
        appOldStyle: string;
    }, {}, {
        openMenu(): void;
        closeMenu(): void;
        push(): void;
        pull(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("openMenu" | "closeMenu")[], "openMenu" | "closeMenu", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onOpenMenu?: ((...args: any[]) => any) | undefined;
        onCloseMenu?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Stack: import("vue").DefineComponent<{}, {}, {}, {}, {
        openMenu(): void;
        closeMenu(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("openMenu" | "closeMenu")[], "openMenu" | "closeMenu", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onOpenMenu?: ((...args: any[]) => any) | undefined;
        onCloseMenu?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    FallDown: import("vue").DefineComponent<{}, {}, {
        bodyOldStyle: string;
    }, {}, {
        getBmMenu(): HTMLElement | null;
        openMenu(): void;
        closeMenu(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("openMenu" | "closeMenu")[], "openMenu" | "closeMenu", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onOpenMenu?: ((...args: any[]) => any) | undefined;
        onCloseMenu?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Elastic: import("vue").DefineComponent<{}, {}, {}, {}, {
        openMenu(): void;
        closeMenu(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("openMenu" | "closeMenu")[], "openMenu" | "closeMenu", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onOpenMenu?: ((...args: any[]) => any) | undefined;
        onCloseMenu?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
};
export default _default;
