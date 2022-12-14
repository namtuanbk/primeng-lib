import { ChangeDetectorRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "primeng/tooltip";
export declare class BasePanelMenuItem {
    private ref;
    constructor(ref: ChangeDetectorRef);
    handleClick(event: any, item: any): void;
}
export declare class PanelMenuSub extends BasePanelMenuItem {
    item: MenuItem;
    expanded: boolean;
    parentExpanded: boolean;
    transitionOptions: string;
    root: boolean;
    constructor(ref: ChangeDetectorRef);
    onItemKeyDown(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelMenuSub, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PanelMenuSub, "p-panelMenuSub", never, { "item": "item"; "expanded": "expanded"; "parentExpanded": "parentExpanded"; "transitionOptions": "transitionOptions"; "root": "root"; }, {}, never, never, false>;
}
export declare class PanelMenu extends BasePanelMenuItem {
    model: MenuItem[];
    style: any;
    styleClass: string;
    multiple: boolean;
    transitionOptions: string;
    animating: boolean;
    constructor(ref: ChangeDetectorRef);
    collapseAll(): void;
    handleClick(event: any, item: any): void;
    onToggleDone(): void;
    onItemKeyDown(event: any): void;
    visible(item: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PanelMenu, "p-panelMenu", never, { "model": "model"; "style": "style"; "styleClass": "styleClass"; "multiple": "multiple"; "transitionOptions": "transitionOptions"; }, {}, never, never, false>;
}
export declare class PanelMenuModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelMenuModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PanelMenuModule, [typeof PanelMenu, typeof PanelMenuSub], [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.TooltipModule], [typeof PanelMenu, typeof i2.RouterModule, typeof i3.TooltipModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PanelMenuModule>;
}
