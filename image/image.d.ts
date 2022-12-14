import { ElementRef, TemplateRef, AfterContentInit, QueryList, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AnimationEvent } from '@angular/animations';
import { SafeUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
export declare class Image implements AfterContentInit {
    private config;
    private cd;
    imageClass: string;
    imageStyle: any;
    styleClass: string;
    style: any;
    src: string | SafeUrl;
    alt: string;
    width: string;
    height: string;
    appendTo: any;
    preview: boolean;
    showTransitionOptions: string;
    hideTransitionOptions: string;
    onShow: EventEmitter<any>;
    onHide: EventEmitter<any>;
    mask: ElementRef;
    templates: QueryList<any>;
    indicatorTemplate: TemplateRef<any>;
    maskVisible: boolean;
    previewVisible: boolean;
    rotate: number;
    scale: number;
    previewClick: boolean;
    container: HTMLElement;
    wrapper: HTMLElement;
    get isZoomOutDisabled(): boolean;
    get isZoomInDisabled(): boolean;
    private zoomSettings;
    constructor(config: PrimeNGConfig, cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    onImageClick(): void;
    onMaskClick(): void;
    onPreviewImageClick(): void;
    rotateRight(): void;
    rotateLeft(): void;
    zoomIn(): void;
    zoomOut(): void;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationEnd(event: AnimationEvent): void;
    moveOnTop(): void;
    appendContainer(): void;
    imagePreviewStyle(): {
        transform: string;
    };
    containerClass(): {
        'p-image p-component': boolean;
        'p-image-preview-container': boolean;
    };
    handleToolbarClick(event: MouseEvent): void;
    closePreview(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Image, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Image, "p-image", never, { "imageClass": "imageClass"; "imageStyle": "imageStyle"; "styleClass": "styleClass"; "style": "style"; "src": "src"; "alt": "alt"; "width": "width"; "height": "height"; "appendTo": "appendTo"; "preview": "preview"; "showTransitionOptions": "showTransitionOptions"; "hideTransitionOptions": "hideTransitionOptions"; }, { "onShow": "onShow"; "onHide": "onHide"; }, ["templates"], never, false>;
}
export declare class ImageModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ImageModule, [typeof Image], [typeof i1.CommonModule], [typeof Image, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ImageModule>;
}
