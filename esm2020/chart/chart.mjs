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
        if (isPlatformBrowser(this.platformId)) {
            this.initChart();
            this.initialized = true;
        }
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
        this.chart = new Chart(this.el.nativeElement.children[0].children[0], {
            type: this.type,
            data: this.data,
            options: this.options,
            plugins: this.plugins
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvY2hhcnQvY2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQXdDLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEwsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sS0FBSyxNQUFNLGVBQWUsQ0FBQzs7QUFlbEMsTUFBTSxPQUFPLE9BQU87SUFzQmhCLFlBQW1CLEVBQWMsRUFBK0IsVUFBZTtRQUE1RCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQStCLGVBQVUsR0FBVixVQUFVLENBQUs7UUFsQnRFLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFNcEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBTS9ELGFBQVEsR0FBUSxFQUFFLENBQUM7SUFJZ0UsQ0FBQztJQUVwRixJQUFhLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEdBQVE7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQWEsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLEdBQVE7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxlQUFlO1FB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R0E5R1EsT0FBTyw0Q0FzQjJCLFdBQVc7d0ZBdEI3QyxPQUFPLDZRQVhOOzs7O0tBSVQ7MkZBT1EsT0FBTztrQkFibkIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFOzs7O0tBSVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0YsT0FBTyxFQUFFLFdBQVc7cUJBQ3ZCO2lCQUNKOzswQkF1QnVDLE1BQU07MkJBQUMsV0FBVzs0Q0FwQjdDLElBQUk7c0JBQVosS0FBSztnQkFFRyxPQUFPO3NCQUFmLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLO2dCQUVHLE1BQU07c0JBQWQsS0FBSztnQkFFRyxVQUFVO3NCQUFsQixLQUFLO2dCQUVJLFlBQVk7c0JBQXJCLE1BQU07Z0JBWU0sSUFBSTtzQkFBaEIsS0FBSztnQkFTTyxPQUFPO3NCQUFuQixLQUFLOztBQXFGVixNQUFNLE9BQU8sV0FBVzs7d0dBQVgsV0FBVzt5R0FBWCxXQUFXLGlCQXRIWCxPQUFPLGFBa0hOLFlBQVksYUFsSGIsT0FBTzt5R0FzSFAsV0FBVyxZQUpWLFlBQVk7MkZBSWIsV0FBVztrQkFMdkIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDbEIsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIEluamVjdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtY2hhcnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZVwiIFtzdHlsZS53aWR0aF09XCJyZXNwb25zaXZlICYmICF3aWR0aCA/IG51bGwgOiB3aWR0aFwiIFtzdHlsZS5oZWlnaHRdPVwicmVzcG9uc2l2ZSAmJiAhaGVpZ2h0ID8gbnVsbCA6IGhlaWdodFwiPlxuICAgICAgICAgICAgPGNhbnZhcyBbYXR0ci53aWR0aF09XCJyZXNwb25zaXZlICYmICF3aWR0aCA/IG51bGwgOiB3aWR0aFwiIFthdHRyLmhlaWdodF09XCJyZXNwb25zaXZlICYmICFoZWlnaHQgPyBudWxsIDogaGVpZ2h0XCIgKGNsaWNrKT1cIm9uQ2FudmFzQ2xpY2soJGV2ZW50KVwiPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgaG9zdDoge1xuICAgICAgICAnY2xhc3MnOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgVUlDaGFydCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBwbHVnaW5zOiBhbnlbXSA9IFtdO1xuXG4gICAgQElucHV0KCkgd2lkdGg6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBAT3V0cHV0KCkgb25EYXRhU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGluaXRpYWxpemVkOiBib29sZWFuO1xuXG4gICAgX2RhdGE6IGFueTtcblxuICAgIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICAgIGNoYXJ0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7IH1cblxuICAgIEBJbnB1dCgpIGdldCBkYXRhKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHNldCBkYXRhKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gICAgICAgIHRoaXMucmVpbml0KCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IG9wdGlvbnMoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuXG4gICAgc2V0IG9wdGlvbnModmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHZhbDtcbiAgICAgICAgdGhpcy5yZWluaXQoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRDaGFydCgpO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNhbnZhc0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jaGFydC5nZXRFbGVtZW50c0F0RXZlbnRGb3JNb2RlKGV2ZW50LCAnbmVhcmVzdCcsIHsgaW50ZXJzZWN0OiB0cnVlIH0sIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFzZXQgPSB0aGlzLmNoYXJ0LmdldEVsZW1lbnRzQXRFdmVudEZvck1vZGUoZXZlbnQsICdkYXRhc2V0JywgeyBpbnRlcnNlY3Q6IHRydWUgfSwgZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50WzBdICYmIGRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGF0YVNlbGVjdC5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIGVsZW1lbnQ6IGVsZW1lbnRbMF0sIGRhdGFzZXQ6IGRhdGFzZXQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0Q2hhcnQoKSB7XG4gICAgICAgIGxldCBvcHRzID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgICAgICBvcHRzLnJlc3BvbnNpdmUgPSB0aGlzLnJlc3BvbnNpdmU7XG5cbiAgICAgICAgLy8gYWxsb3dzIGNoYXJ0IHRvIHJlc2l6ZSBpbiByZXNwb25zaXZlIG1vZGVcbiAgICAgICAgaWYgKG9wdHMucmVzcG9uc2l2ZSAmJiAodGhpcy5oZWlnaHQgfHwgdGhpcy53aWR0aCkpIHtcbiAgICAgICAgICAgIG9wdHMubWFpbnRhaW5Bc3BlY3RSYXRpbyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0sIHtcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIHBsdWdpbnM6IHRoaXMucGx1Z2luc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDYW52YXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgZ2V0QmFzZTY0SW1hZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJ0LnRvQmFzZTY0SW1hZ2UoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUxlZ2VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXJ0LmdlbmVyYXRlTGVnZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWZyZXNoKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5pbml0Q2hhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbVUlDaGFydF0sXG4gICAgZGVjbGFyYXRpb25zOiBbVUlDaGFydF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRNb2R1bGUgeyB9XG4iXX0=