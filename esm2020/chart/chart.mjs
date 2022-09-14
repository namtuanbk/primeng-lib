import { NgModule, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Chart from 'chart.js/auto';
import * as i0 from "@angular/core";
export class UIChart {
    constructor(el, platformId) {
        this.el = el;
        this.platformId = platformId;
        this.plugins = [];
        this.responsive = true;
        this.onDataSelect = new EventEmitter();
        this._options = {};
    }
    get data() {
        return this._data;
    }
    set data(val) {
        this._data = val;
        this.reinit();
    }
    get options() {
        return this._options;
    }
    set options(val) {
        this._options = val;
        this.reinit();
    }
    ngAfterViewInit() {
        this.initChart();
        this.initialized = true;
    }
    onCanvasClick(event) {
        if (this.chart) {
            const element = this.chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
            const dataset = this.chart.getElementsAtEventForMode(event, 'dataset', { intersect: true }, false);
            if (element && element[0] && dataset) {
                this.onDataSelect.emit({ originalEvent: event, element: element[0], dataset: dataset });
            }
        }
    }
    initChart() {
        let opts = this.options || {};
        opts.responsive = this.responsive;
        // allows chart to resize in responsive mode
        if (opts.responsive && (this.height || this.width)) {
            opts.maintainAspectRatio = false;
        }
        if (isPlatformBrowser(this.platformId)) {
            this.chart = new Chart(this.el.nativeElement.children[0].children[0], {
                type: this.type,
                data: this.data,
                options: this.options,
                plugins: this.plugins
            });
        }
    }
    getCanvas() {
        return this.el.nativeElement.children[0].children[0];
    }
    getBase64Image() {
        return this.chart.toBase64Image();
    }
    generateLegend() {
        if (this.chart) {
            return this.chart.generateLegend();
        }
    }
    refresh() {
        if (this.chart) {
            this.chart.update();
        }
    }
    reinit() {
        if (this.chart) {
            this.chart.destroy();
            this.initChart();
        }
    }
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.initialized = false;
            this.chart = null;
        }
    }
}
UIChart.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: UIChart, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Component });
UIChart.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.7", type: UIChart, selector: "p-chart", inputs: { type: "type", plugins: "plugins", width: "width", height: "height", responsive: "responsive", data: "data", options: "options" }, outputs: { onDataSelect: "onDataSelect" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <div style="position:relative" [style.width]="responsive && !width ? null : width" [style.height]="responsive && !height ? null : height">
            <canvas [attr.width]="responsive && !width ? null : width" [attr.height]="responsive && !height ? null : height" (click)="onCanvasClick($event)"></canvas>
        </div>
    `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: UIChart, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-chart',
                    template: `
        <div style="position:relative" [style.width]="responsive && !width ? null : width" [style.height]="responsive && !height ? null : height">
            <canvas [attr.width]="responsive && !width ? null : width" [attr.height]="responsive && !height ? null : height" (click)="onCanvasClick($event)"></canvas>
        </div>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        'class': 'p-element'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { type: [{
                type: Input
            }], plugins: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], responsive: [{
                type: Input
            }], onDataSelect: [{
                type: Output
            }], data: [{
                type: Input
            }], options: [{
                type: Input
            }] } });
export class ChartModule {
}
ChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.7", ngImport: i0, type: ChartModule, declarations: [UIChart], imports: [CommonModule], exports: [UIChart] });
ChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ChartModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ChartModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [UIChart],
                    declarations: [UIChart]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvY2hhcnQvY2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQXdDLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEwsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sS0FBSyxNQUFNLGVBQWUsQ0FBQzs7QUFlbEMsTUFBTSxPQUFPLE9BQU87SUFzQmhCLFlBQW1CLEVBQWMsRUFBK0IsVUFBZTtRQUE1RCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQStCLGVBQVUsR0FBVixVQUFVLENBQUs7UUFsQnRFLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFNcEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBTS9ELGFBQVEsR0FBUSxFQUFFLENBQUM7SUFJZ0UsQ0FBQztJQUVwRixJQUFhLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEdBQVE7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQWEsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLEdBQVE7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxlQUFlO1FB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Qzs7b0dBOUdRLE9BQU8sNENBc0IyQixXQUFXO3dGQXRCN0MsT0FBTyw2UUFYTjs7OztLQUlUOzJGQU9RLE9BQU87a0JBYm5CLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRTs7OztLQUlUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNGLE9BQU8sRUFBRSxXQUFXO3FCQUN2QjtpQkFDSjs7MEJBdUJ1QyxNQUFNOzJCQUFDLFdBQVc7NENBcEI3QyxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsT0FBTztzQkFBZixLQUFLO2dCQUVHLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7Z0JBRUcsVUFBVTtzQkFBbEIsS0FBSztnQkFFSSxZQUFZO3NCQUFyQixNQUFNO2dCQVlNLElBQUk7c0JBQWhCLEtBQUs7Z0JBU08sT0FBTztzQkFBbkIsS0FBSzs7QUFxRlYsTUFBTSxPQUFPLFdBQVc7O3dHQUFYLFdBQVc7eUdBQVgsV0FBVyxpQkF0SFgsT0FBTyxhQWtITixZQUFZLGFBbEhiLE9BQU87eUdBc0hQLFdBQVcsWUFKVixZQUFZOzJGQUliLFdBQVc7a0JBTHZCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ2xCLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQztpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBJbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWNoYXJ0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmVcIiBbc3R5bGUud2lkdGhdPVwicmVzcG9uc2l2ZSAmJiAhd2lkdGggPyBudWxsIDogd2lkdGhcIiBbc3R5bGUuaGVpZ2h0XT1cInJlc3BvbnNpdmUgJiYgIWhlaWdodCA/IG51bGwgOiBoZWlnaHRcIj5cbiAgICAgICAgICAgIDxjYW52YXMgW2F0dHIud2lkdGhdPVwicmVzcG9uc2l2ZSAmJiAhd2lkdGggPyBudWxsIDogd2lkdGhcIiBbYXR0ci5oZWlnaHRdPVwicmVzcG9uc2l2ZSAmJiAhaGVpZ2h0ID8gbnVsbCA6IGhlaWdodFwiIChjbGljayk9XCJvbkNhbnZhc0NsaWNrKCRldmVudClcIj48L2NhbnZhcz5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ2NsYXNzJzogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFVJQ2hhcnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcGx1Z2luczogYW55W10gPSBbXTtcblxuICAgIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHJlc3BvbnNpdmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQE91dHB1dCgpIG9uRGF0YVNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBpbml0aWFsaXplZDogYm9vbGVhbjtcblxuICAgIF9kYXRhOiBhbnk7XG5cbiAgICBfb3B0aW9uczogYW55ID0ge307XG5cbiAgICBjaGFydDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkgeyB9XG5cbiAgICBASW5wdXQoKSBnZXQgZGF0YSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG5cbiAgICBzZXQgZGF0YSh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICB0aGlzLnJlaW5pdCgpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBvcHRpb25zKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgIH1cblxuICAgIHNldCBvcHRpb25zKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB2YWw7XG4gICAgICAgIHRoaXMucmVpbml0KCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmluaXRDaGFydCgpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIG9uQ2FudmFzQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNoYXJ0LmdldEVsZW1lbnRzQXRFdmVudEZvck1vZGUoZXZlbnQsICduZWFyZXN0JywgeyBpbnRlcnNlY3Q6IHRydWUgfSwgZmFsc2UpO1xuICAgICAgICAgICAgY29uc3QgZGF0YXNldCA9IHRoaXMuY2hhcnQuZ2V0RWxlbWVudHNBdEV2ZW50Rm9yTW9kZShldmVudCwgJ2RhdGFzZXQnLCB7IGludGVyc2VjdDogdHJ1ZSB9LCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnRbMF0gJiYgZGF0YXNldCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EYXRhU2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgZWxlbWVudDogZWxlbWVudFswXSwgZGF0YXNldDogZGF0YXNldCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRDaGFydCgpIHtcbiAgICAgICAgbGV0IG9wdHMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgICAgIG9wdHMucmVzcG9uc2l2ZSA9IHRoaXMucmVzcG9uc2l2ZTtcblxuICAgICAgICAvLyBhbGxvd3MgY2hhcnQgdG8gcmVzaXplIGluIHJlc3BvbnNpdmUgbW9kZVxuICAgICAgICBpZiAob3B0cy5yZXNwb25zaXZlICYmICh0aGlzLmhlaWdodCB8fCB0aGlzLndpZHRoKSkge1xuICAgICAgICAgICAgb3B0cy5tYWludGFpbkFzcGVjdFJhdGlvID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgcGx1Z2luczogdGhpcy5wbHVnaW5zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENhbnZhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXTtcbiAgICB9XG5cbiAgICBnZXRCYXNlNjRJbWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcnQudG9CYXNlNjRJbWFnZSgpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTGVnZW5kKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhcnQuZ2VuZXJhdGVMZWdlbmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVpbml0KCkge1xuICAgICAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmluaXRDaGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtVSUNoYXJ0XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtVSUNoYXJ0XVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydE1vZHVsZSB7IH1cbiJdfQ==