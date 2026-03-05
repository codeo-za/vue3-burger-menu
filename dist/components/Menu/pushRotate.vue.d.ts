declare const _default: import("vue").DefineComponent<{}, {}, {
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
export default _default;
