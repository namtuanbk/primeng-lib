import { NgModule, Directive, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
export class Ripple {
    constructor(el, zone, config) {
        this.el = el;
        this.zone = zone;
        this.config = config;
    }
    ngAfterViewInit() {
        if (this.config && this.config.ripple) {
            this.zone.runOutsideAngular(() => {
                this.create();
                this.mouseDownListener = this.onMouseDown.bind(this);
                this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
            });
        }
    }
    onMouseDown(event) {
        let ink = this.getInk();
        if (!ink || getComputedStyle(ink, null).display === 'none') {
            return;
        }
        DomHandler.removeClass(ink, 'p-ink-active');
        if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
            let d = Math.max(DomHandler.getOuterWidth(this.el.nativeElement), DomHandler.getOuterHeight(this.el.nativeElement));
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }
        let offset = DomHandler.getOffset(this.el.nativeElement);
        let x = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(ink) / 2;
        let y = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(ink) / 2;
        ink.style.top = y + 'px';
        ink.style.left = x + 'px';
        DomHandler.addClass(ink, 'p-ink-active');
    }
    getInk() {
        for (let i = 0; i < this.el.nativeElement.children.length; i++) {
            if (this.el.nativeElement.children[i].className.indexOf('p-ink') !== -1) {
                return this.el.nativeElement.children[i];
            }
        }
        return null;
    }
    resetInk() {
        let ink = this.getInk();
        if (ink) {
            DomHandler.removeClass(ink, 'p-ink-active');
        }
    }
    onAnimationEnd(event) {
        DomHandler.removeClass(event.currentTarget, 'p-ink-active');
    }
    create() {
        let ink = document.createElement('span');
        ink.className = 'p-ink';
        this.el.nativeElement.appendChild(ink);
        this.animationListener = this.onAnimationEnd.bind(this);
        ink.addEventListener('animationend', this.animationListener);
    }
    remove() {
        let ink = this.getInk();
        if (ink) {
            this.el.nativeElement.removeEventListener('mousedown', this.mouseDownListener);
            ink.removeEventListener('animationend', this.animationListener);
            DomHandler.removeElement(ink);
        }
    }
    ngOnDestroy() {
        if (this.config && this.config.ripple) {
            this.remove();
        }
    }
}
Ripple.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: Ripple, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.PrimeNGConfig, optional: true }], target: i0.????FactoryTarget.Directive });
Ripple.??dir = i0.????ngDeclareDirective({ minVersion: "14.0.0", version: "14.0.7", type: Ripple, selector: "[pRipple]", host: { classAttribute: "p-ripple p-element" }, ngImport: i0 });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: Ripple, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pRipple]',
                    host: {
                        'class': 'p-ripple p-element'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.PrimeNGConfig, decorators: [{
                    type: Optional
                }] }]; } });
export class RippleModule {
}
RippleModule.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: RippleModule, deps: [], target: i0.????FactoryTarget.NgModule });
RippleModule.??mod = i0.????ngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.7", ngImport: i0, type: RippleModule, declarations: [Ripple], imports: [CommonModule], exports: [Ripple] });
RippleModule.??inj = i0.????ngDeclareInjector({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: RippleModule, imports: [CommonModule] });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: RippleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [Ripple],
                    declarations: [Ripple]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3JpcHBsZS9yaXBwbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQWdELFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBU3pDLE1BQU0sT0FBTyxNQUFNO0lBRWYsWUFBbUIsRUFBYyxFQUFTLElBQVksRUFBcUIsTUFBcUI7UUFBN0UsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVE7UUFBcUIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFJLENBQUM7SUFNckcsZUFBZTtRQUNYLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVkLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2hGLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWlCO1FBQ3pCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxP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ZW1lbnRSZWYsIE5nWm9uZSwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBQcmltZU5HQ29uZmlnIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twUmlwcGxlXScsXG4gICAgaG9zdDoge1xuICAgICAgICAnY2xhc3MnOiAncC1yaXBwbGUgcC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgUmlwcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHpvbmU6IE5nWm9uZSwgQE9wdGlvbmFsKCkgcHVibGljIGNvbmZpZzogUHJpbWVOR0NvbmZpZykgeyB9XG5cbiAgICBhbmltYXRpb25MaXN0ZW5lcjogYW55O1xuXG4gICAgbW91c2VEb3duTGlzdGVuZXI6IGFueTtcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnJpcHBsZSkge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25MaXN0ZW5lciA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25MaXN0ZW5lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGxldCBpbmsgPSB0aGlzLmdldEluaygpO1xuICAgICAgICBpZiAoIWluayB8fCBnZXRDb21wdXRlZFN0eWxlKGluaywgbnVsbCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKGluaywgJ3AtaW5rLWFjdGl2ZScpO1xuICAgICAgICBpZiAoIURvbUhhbmRsZXIuZ2V0SGVpZ2h0KGluaykgJiYgIURvbUhhbmRsZXIuZ2V0V2lkdGgoaW5rKSkge1xuICAgICAgICAgICAgbGV0IGQgPSBNYXRoLm1heChEb21IYW5kbGVyLmdldE91dGVyV2lkdGgodGhpcy5lbC5uYXRpdmVFbGVtZW50KSwgRG9tSGFuZGxlci5nZXRPdXRlckhlaWdodCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgICAgIGluay5zdHlsZS5oZWlnaHQgPSBkICsgJ3B4JztcbiAgICAgICAgICAgIGluay5zdHlsZS53aWR0aCA9IGQgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IERvbUhhbmRsZXIuZ2V0T2Zmc2V0KHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIGxldCB4ID0gZXZlbnQucGFnZVggLSBvZmZzZXQubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIC0gRG9tSGFuZGxlci5nZXRXaWR0aChpbmspIC8gMjtcbiAgICAgICAgbGV0IHkgPSBldmVudC5wYWdlWSAtIG9mZnNldC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgLSBEb21IYW5kbGVyLmdldEhlaWdodChpbmspIC8gMjtcblxuICAgICAgICBpbmsuc3R5bGUudG9wID0geSArICdweCc7XG4gICAgICAgIGluay5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3MoaW5rLCAncC1pbmstYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgZ2V0SW5rKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc05hbWUuaW5kZXhPZigncC1pbmsnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJlc2V0SW5rKCkge1xuICAgICAgICBsZXQgaW5rID0gdGhpcy5nZXRJbmsoKTtcbiAgICAgICAgaWYgKGluaykge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyhpbmssICdwLWluay1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQW5pbWF0aW9uRW5kKGV2ZW50KSB7XG4gICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MoZXZlbnQuY3VycmVudFRhcmdldCwgJ3AtaW5rLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgbGV0IGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaW5rLmNsYXNzTmFtZSA9ICdwLWluayc7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChpbmspO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdGVuZXIgPSB0aGlzLm9uQW5pbWF0aW9uRW5kLmJpbmQodGhpcyk7XG4gICAgICAgIGluay5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCB0aGlzLmFuaW1hdGlvbkxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGxldCBpbmsgPSB0aGlzLmdldEluaygpO1xuICAgICAgICBpZiAoaW5rKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25MaXN0ZW5lcik7XG4gICAgICAgICAgICBpbmsucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgdGhpcy5hbmltYXRpb25MaXN0ZW5lcik7XG4gICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUVsZW1lbnQoaW5rKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucmlwcGxlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtSaXBwbGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1JpcHBsZV1cbn0pXG5leHBvcnQgY2xhc3MgUmlwcGxlTW9kdWxlIHsgfVxuIl19