import { NgModule, Directive, Component, EventEmitter, Output, Input, ChangeDetectionStrategy, ViewEncapsulation, ContentChildren, Inject, PLATFORM_ID } from '@angular/core';
import { DomHandler } from 'primeng/dom';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { PrimeTemplate } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/ripple";
export class ButtonDirective {
    constructor(el, platformId) {
        this.el = el;
        this.platformId = platformId;
        this.iconPos = 'left';
        this.loadingIcon = "pi pi-spinner pi-spin";
        this._loading = false;
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this._initialStyleClass = this.el.nativeElement.className;
            DomHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());
            if (this.icon || this.loading) {
                this.createIconEl();
            }
            let labelElement = document.createElement("span");
            if (this.icon && !this.label) {
                labelElement.setAttribute('aria-hidden', 'true');
            }
            labelElement.className = 'p-button-label';
            if (this.label)
                labelElement.appendChild(document.createTextNode(this.label));
            else
                labelElement.innerHTML = '&nbsp;';
            this.el.nativeElement.appendChild(labelElement);
            this.initialized = true;
        }
    }
    getStyleClass() {
        let styleClass = 'p-button p-component';
        if (this.icon && !this.label) {
            styleClass = styleClass + ' p-button-icon-only';
        }
        if (this.loading) {
            styleClass = styleClass + ' p-disabled p-button-loading';
            if (!this.icon && this.label)
                styleClass = styleClass + ' p-button-loading-label-only';
        }
        return styleClass;
    }
    setStyleClass() {
        let styleClass = this.getStyleClass();
        this.el.nativeElement.className = styleClass + ' ' + this._initialStyleClass;
    }
    createIconEl() {
        let iconElement = document.createElement("span");
        iconElement.className = 'p-button-icon';
        iconElement.setAttribute("aria-hidden", "true");
        let iconPosClass = this.label ? 'p-button-icon-' + this.iconPos : null;
        if (iconPosClass) {
            DomHandler.addClass(iconElement, iconPosClass);
        }
        let iconClass = this.getIconClass();
        if (iconClass) {
            DomHandler.addMultipleClasses(iconElement, iconClass);
        }
        let labelEl = DomHandler.findSingle(this.el.nativeElement, '.p-button-label');
        if (labelEl)
            this.el.nativeElement.insertBefore(iconElement, labelEl);
        else
            this.el.nativeElement.appendChild(iconElement);
    }
    getIconClass() {
        return this.loading ? 'p-button-loading-icon ' + this.loadingIcon : this._icon;
    }
    setIconClass() {
        let iconElement = DomHandler.findSingle(this.el.nativeElement, '.p-button-icon');
        if (iconElement) {
            if (this.iconPos)
                iconElement.className = 'p-button-icon p-button-icon-' + this.iconPos + ' ' + this.getIconClass();
            else
                iconElement.className = 'p-button-icon ' + this.getIconClass();
        }
        else {
            this.createIconEl();
        }
    }
    removeIconElement() {
        let iconElement = DomHandler.findSingle(this.el.nativeElement, '.p-button-icon');
        this.el.nativeElement.removeChild(iconElement);
    }
    get label() {
        return this._label;
    }
    set label(val) {
        this._label = val;
        if (this.initialized) {
            DomHandler.findSingle(this.el.nativeElement, '.p-button-label').textContent = this._label || '&nbsp;';
            if (this.loading || this.icon) {
                this.setIconClass();
            }
            this.setStyleClass();
        }
    }
    get icon() {
        return this._icon;
    }
    set icon(val) {
        this._icon = val;
        if (this.initialized) {
            this.setIconClass();
            this.setStyleClass();
        }
    }
    get loading() {
        return this._loading;
    }
    set loading(val) {
        this._loading = val;
        if (this.initialized) {
            if (this.loading || this.icon)
                this.setIconClass();
            else
                this.removeIconElement();
            this.setStyleClass();
        }
    }
    ngOnDestroy() {
        this.initialized = false;
    }
}
ButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ButtonDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
ButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.7", type: ButtonDirective, selector: "[pButton]", inputs: { iconPos: "iconPos", loadingIcon: "loadingIcon", label: "label", icon: "icon", loading: "loading" }, host: { classAttribute: "p-element" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pButton]',
                    host: {
                        'class': 'p-element'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { iconPos: [{
                type: Input
            }], loadingIcon: [{
                type: Input
            }], label: [{
                type: Input
            }], icon: [{
                type: Input
            }], loading: [{
                type: Input
            }] } });
export class Button {
    constructor() {
        this.type = "button";
        this.iconPos = 'left';
        this.loading = false;
        this.loadingIcon = "pi pi-spinner pi-spin";
        this.onClick = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    badgeStyleClass() {
        return {
            'p-badge p-component': true,
            'p-badge-no-gutter': this.badge && String(this.badge).length === 1
        };
    }
}
Button.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: Button, deps: [], target: i0.ɵɵFactoryTarget.Component });
Button.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.7", type: Button, selector: "p-button", inputs: { type: "type", iconPos: "iconPos", icon: "icon", badge: "badge", label: "label", disabled: "disabled", loading: "loading", loadingIcon: "loadingIcon", style: "style", styleClass: "styleClass", badgeClass: "badgeClass", ariaLabel: "ariaLabel" }, outputs: { onClick: "onClick", onFocus: "onFocus", onBlur: "onBlur" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <button [attr.type]="type" [attr.aria-label]="ariaLabel" [class]="styleClass" [ngStyle]="style" [disabled]="disabled || loading"
            [ngClass]="{'p-button p-component':true,
                        'p-button-icon-only': (icon && !label),
                        'p-button-vertical': (iconPos === 'top' || iconPos === 'bottom') && label,
                        'p-disabled': this.disabled || this.loading,
                        'p-button-loading': this.loading,
                        'p-button-loading-label-only': this.loading && !this.icon && this.label}"
                        (click)="onClick.emit($event)" (focus)="onFocus.emit($event)" (blur)="onBlur.emit($event)" pRipple>
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            <span [ngClass]="{'p-button-icon': true,
                        'p-button-icon-left': iconPos === 'left' && label,
                        'p-button-icon-right': iconPos === 'right' && label,
                        'p-button-icon-top': iconPos === 'top' && label,
                        'p-button-icon-bottom': iconPos === 'bottom' && label}"
                        [class]="loading ? 'p-button-loading-icon ' + loadingIcon : icon" *ngIf="!contentTemplate && (icon||loading)" [attr.aria-hidden]="true"></span>
            <span class="p-button-label" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate">{{label||'&nbsp;'}}</span>
            <span [ngClass]="badgeStyleClass()" [class]="badgeClass" *ngIf="!contentTemplate && badge">{{badge}}</span>
        </button>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.Ripple, selector: "[pRipple]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: Button, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-button',
                    template: `
        <button [attr.type]="type" [attr.aria-label]="ariaLabel" [class]="styleClass" [ngStyle]="style" [disabled]="disabled || loading"
            [ngClass]="{'p-button p-component':true,
                        'p-button-icon-only': (icon && !label),
                        'p-button-vertical': (iconPos === 'top' || iconPos === 'bottom') && label,
                        'p-disabled': this.disabled || this.loading,
                        'p-button-loading': this.loading,
                        'p-button-loading-label-only': this.loading && !this.icon && this.label}"
                        (click)="onClick.emit($event)" (focus)="onFocus.emit($event)" (blur)="onBlur.emit($event)" pRipple>
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            <span [ngClass]="{'p-button-icon': true,
                        'p-button-icon-left': iconPos === 'left' && label,
                        'p-button-icon-right': iconPos === 'right' && label,
                        'p-button-icon-top': iconPos === 'top' && label,
                        'p-button-icon-bottom': iconPos === 'bottom' && label}"
                        [class]="loading ? 'p-button-loading-icon ' + loadingIcon : icon" *ngIf="!contentTemplate && (icon||loading)" [attr.aria-hidden]="true"></span>
            <span class="p-button-label" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate">{{label||'&nbsp;'}}</span>
            <span [ngClass]="badgeStyleClass()" [class]="badgeClass" *ngIf="!contentTemplate && badge">{{badge}}</span>
        </button>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        'class': 'p-element'
                    }
                }]
        }], propDecorators: { type: [{
                type: Input
            }], iconPos: [{
                type: Input
            }], icon: [{
                type: Input
            }], badge: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], loading: [{
                type: Input
            }], loadingIcon: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], badgeClass: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }], onClick: [{
                type: Output
            }], onFocus: [{
                type: Output
            }], onBlur: [{
                type: Output
            }] } });
export class ButtonModule {
}
ButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.7", ngImport: i0, type: ButtonModule, declarations: [ButtonDirective, Button], imports: [CommonModule, RippleModule], exports: [ButtonDirective, Button] });
ButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ButtonModule, imports: [CommonModule, RippleModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RippleModule],
                    exports: [ButtonDirective, Button],
                    declarations: [ButtonDirective, Button]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBaUIsTUFBTSxFQUFhLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQTRDLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOVAsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFRNUMsTUFBTSxPQUFPLGVBQWU7SUFnQnhCLFlBQW1CLEVBQWMsRUFBK0IsVUFBZTtRQUE1RCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQStCLGVBQVUsR0FBVixVQUFVLENBQUs7UUFkdEUsWUFBTyxHQUF3QyxNQUFNLENBQUM7UUFFdEQsZ0JBQVcsR0FBVyx1QkFBdUIsQ0FBQztRQU1oRCxhQUFRLEdBQVksS0FBSyxDQUFDO0lBTWtELENBQUM7SUFFcEYsZUFBZTtRQUNYLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDMUQsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBRTNFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJ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QyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNGLE9BQU8sRUFBRSxXQUFXO3FCQUN2QjtpQkFDSjs4QkFHWSxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsT0FBTztzQkFBZixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLO2dCQUVHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUcsT0FBTztzQkFBZixLQUFLO2dCQUVHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLO2dCQUVHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBRUcsVUFBVTtzQkFBbEIsS0FBSztnQkFFRyxTQUFTO3NCQUFqQixLQUFLO2dCQUkwQixTQUFTO3NCQUF4QyxlQUFlO3VCQUFDLGFBQWE7Z0JBRXBCLE9BQU87c0JBQWhCLE1BQU07Z0JBRUcsT0FBTztzQkFBaEIsTUFBTTtnQkFFRyxNQUFNO3NCQUFmLE1BQU07O0FBNkJYLE1BQU0sT0FBTyxZQUFZOzt5R0FBWixZQUFZOzBHQUFaLFlBQVksaUJBN1BaLGVBQWUsRUE4TGYsTUFBTSxhQTJETCxZQUFZLEVBQUUsWUFBWSxhQXpQM0IsZUFBZSxFQThMZixNQUFNOzBHQStETixZQUFZLFlBSlgsWUFBWSxFQUFFLFlBQVk7MkZBSTNCLFlBQVk7a0JBTHhCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztvQkFDckMsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQztvQkFDbEMsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQztpQkFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgRGlyZWN0aXZlLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBPbkRlc3Ryb3ksIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIENvbnRlbnRDaGlsZHJlbiwgQWZ0ZXJDb250ZW50SW5pdCwgVGVtcGxhdGVSZWYsIFF1ZXJ5TGlzdCwgSW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmlwcGxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9yaXBwbGUnO1xuaW1wb3J0IHsgUHJpbWVUZW1wbGF0ZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcEJ1dHRvbl0nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ2NsYXNzJzogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBpY29uUG9zOiAnbGVmdCcgfCAncmlnaHQnIHwgJ3RvcCcgfCAnYm90dG9tJyA9ICdsZWZ0JztcblxuICAgIEBJbnB1dCgpIGxvYWRpbmdJY29uOiBzdHJpbmcgPSBcInBpIHBpLXNwaW5uZXIgcGktc3BpblwiO1xuXG4gICAgcHVibGljIF9sYWJlbDogc3RyaW5nO1xuXG4gICAgcHVibGljIF9pY29uOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgX2xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBpbml0aWFsaXplZDogYm9vbGVhbjtcblxuICAgIHB1YmxpYyBfaW5pdGlhbFN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICAgICAgdGhpcy5faW5pdGlhbFN0eWxlQ2xhc3MgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lO1xuICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRNdWx0aXBsZUNsYXNzZXModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmdldFN0eWxlQ2xhc3MoKSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmljb24gfHwgdGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJY29uRWwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaWNvbiAmJiAhdGhpcy5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsRWxlbWVudC5jbGFzc05hbWUgPSAncC1idXR0b24tbGFiZWwnO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICBsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5sYWJlbCkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGxhYmVsRWxlbWVudC5pbm5lckhUTUwgPSAnJm5ic3A7JztcblxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN0eWxlQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHN0eWxlQ2xhc3MgPSAncC1idXR0b24gcC1jb21wb25lbnQnO1xuICAgICAgICBpZiAodGhpcy5pY29uICYmICF0aGlzLmxhYmVsKSB7XG4gICAgICAgICAgICBzdHlsZUNsYXNzID0gc3R5bGVDbGFzcyArICcgcC1idXR0b24taWNvbi1vbmx5JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHN0eWxlQ2xhc3MgPSBzdHlsZUNsYXNzICsgJyBwLWRpc2FibGVkIHAtYnV0dG9uLWxvYWRpbmcnO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmljb24gJiYgdGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICBzdHlsZUNsYXNzID0gc3R5bGVDbGFzcyArICcgcC1idXR0b24tbG9hZGluZy1sYWJlbC1vbmx5JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHlsZUNsYXNzO1xuICAgIH1cblxuICAgIHNldFN0eWxlQ2xhc3MoKSB7XG4gICAgICAgIGxldCBzdHlsZUNsYXNzID0gdGhpcy5nZXRTdHlsZUNsYXNzKCk7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSBzdHlsZUNsYXNzICsgJyAnICsgdGhpcy5faW5pdGlhbFN0eWxlQ2xhc3M7XG4gICAgfVxuXG4gICAgY3JlYXRlSWNvbkVsKCkge1xuICAgICAgICBsZXQgaWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgaWNvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ3AtYnV0dG9uLWljb24nO1xuICAgICAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgICAgIGxldCBpY29uUG9zQ2xhc3MgPSB0aGlzLmxhYmVsID8gJ3AtYnV0dG9uLWljb24tJyArIHRoaXMuaWNvblBvcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKGljb25Qb3NDbGFzcykge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyhpY29uRWxlbWVudCwgaWNvblBvc0NsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpY29uQ2xhc3MgPSB0aGlzLmdldEljb25DbGFzcygpO1xuXG4gICAgICAgIGlmIChpY29uQ2xhc3MpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkTXVsdGlwbGVDbGFzc2VzKGljb25FbGVtZW50LCBpY29uQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxhYmVsRWwgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLnAtYnV0dG9uLWxhYmVsJylcblxuICAgICAgICBpZiAobGFiZWxFbClcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbnNlcnRCZWZvcmUoaWNvbkVsZW1lbnQsIGxhYmVsRWwpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpXG4gICAgfVxuXG4gICAgZ2V0SWNvbkNsYXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nID8gJ3AtYnV0dG9uLWxvYWRpbmctaWNvbiAnICsgdGhpcy5sb2FkaW5nSWNvbiA6IHRoaXMuX2ljb247XG4gICAgfVxuXG4gICAgc2V0SWNvbkNsYXNzKCkge1xuICAgICAgICBsZXQgaWNvbkVsZW1lbnQgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLnAtYnV0dG9uLWljb24nKTtcbiAgICAgICAgaWYgKGljb25FbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pY29uUG9zKVxuICAgICAgICAgICAgICAgIGljb25FbGVtZW50LmNsYXNzTmFtZSA9ICdwLWJ1dHRvbi1pY29uIHAtYnV0dG9uLWljb24tJyArIHRoaXMuaWNvblBvcyArICcgJyArIHRoaXMuZ2V0SWNvbkNsYXNzKCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgaWNvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ3AtYnV0dG9uLWljb24gJyArIHRoaXMuZ2V0SWNvbkNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUljb25FbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlSWNvbkVsZW1lbnQoKSB7XG4gICAgICAgIGxldCBpY29uRWxlbWVudCA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICcucC1idXR0b24taWNvbicpO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQoaWNvbkVsZW1lbnQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgfVxuXG4gICAgc2V0IGxhYmVsKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsID0gdmFsO1xuXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLnAtYnV0dG9uLWxhYmVsJykudGV4dENvbnRlbnQgPSB0aGlzLl9sYWJlbCB8fCAnJm5ic3A7JztcblxuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZyB8fCB0aGlzLmljb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEljb25DbGFzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdHlsZUNsYXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgaWNvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgICB9XG5cbiAgICBzZXQgaWNvbih2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9pY29uID0gdmFsO1xuXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEljb25DbGFzcygpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdHlsZUNsYXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gICAgfVxuXG4gICAgc2V0IGxvYWRpbmcodmFsOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSB2YWw7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmcgfHwgdGhpcy5pY29uKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SWNvbkNsYXNzKCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJY29uRWxlbWVudCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0eWxlQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YnV0dG9uIFthdHRyLnR5cGVdPVwidHlwZVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBsb2FkaW5nXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncC1idXR0b24gcC1jb21wb25lbnQnOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAncC1idXR0b24taWNvbi1vbmx5JzogKGljb24gJiYgIWxhYmVsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwLWJ1dHRvbi12ZXJ0aWNhbCc6IChpY29uUG9zID09PSAndG9wJyB8fCBpY29uUG9zID09PSAnYm90dG9tJykgJiYgbGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAncC1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3AtYnV0dG9uLWxvYWRpbmcnOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAncC1idXR0b24tbG9hZGluZy1sYWJlbC1vbmx5JzogdGhpcy5sb2FkaW5nICYmICF0aGlzLmljb24gJiYgdGhpcy5sYWJlbH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCIgKGZvY3VzKT1cIm9uRm9jdXMuZW1pdCgkZXZlbnQpXCIgKGJsdXIpPVwib25CbHVyLmVtaXQoJGV2ZW50KVwiIHBSaXBwbGU+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3AtYnV0dG9uLWljb24nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3AtYnV0dG9uLWljb24tbGVmdCc6IGljb25Qb3MgPT09ICdsZWZ0JyAmJiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwLWJ1dHRvbi1pY29uLXJpZ2h0JzogaWNvblBvcyA9PT0gJ3JpZ2h0JyAmJiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwLWJ1dHRvbi1pY29uLXRvcCc6IGljb25Qb3MgPT09ICd0b3AnICYmIGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3AtYnV0dG9uLWljb24tYm90dG9tJzogaWNvblBvcyA9PT0gJ2JvdHRvbScgJiYgbGFiZWx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJsb2FkaW5nID8gJ3AtYnV0dG9uLWxvYWRpbmctaWNvbiAnICsgbG9hZGluZ0ljb24gOiBpY29uXCIgKm5nSWY9XCIhY29udGVudFRlbXBsYXRlICYmIChpY29ufHxsb2FkaW5nKVwiIFthdHRyLmFyaWEtaGlkZGVuXT1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtYnV0dG9uLWxhYmVsXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwiaWNvbiAmJiAhbGFiZWxcIiAqbmdJZj1cIiFjb250ZW50VGVtcGxhdGVcIj57e2xhYmVsfHwnJm5ic3A7J319PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwiYmFkZ2VTdHlsZUNsYXNzKClcIiBbY2xhc3NdPVwiYmFkZ2VDbGFzc1wiICpuZ0lmPVwiIWNvbnRlbnRUZW1wbGF0ZSAmJiBiYWRnZVwiPnt7YmFkZ2V9fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ2NsYXNzJzogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gXCJidXR0b25cIjtcblxuICAgIEBJbnB1dCgpIGljb25Qb3M6IHN0cmluZyA9ICdsZWZ0JztcblxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGJhZGdlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBsb2FkaW5nSWNvbjogc3RyaW5nID0gXCJwaSBwaS1zcGlubmVyIHBpLXNwaW5cIjtcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBiYWRnZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAgIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8YW55PjtcblxuICAgIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29udGVudCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiYWRnZVN0eWxlQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAncC1iYWRnZSBwLWNvbXBvbmVudCc6IHRydWUsXG4gICAgICAgICAgICAncC1iYWRnZS1uby1ndXR0ZXInOiB0aGlzLmJhZGdlICYmIFN0cmluZyh0aGlzLmJhZGdlKS5sZW5ndGggPT09IDFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSaXBwbGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtCdXR0b25EaXJlY3RpdmUsIEJ1dHRvbl0sXG4gICAgZGVjbGFyYXRpb25zOiBbQnV0dG9uRGlyZWN0aXZlLCBCdXR0b25dXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbk1vZHVsZSB7IH1cbiJdfQ==