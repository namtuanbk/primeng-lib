import { NgModule, Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ProgressSpinner {
    constructor() {
        this.strokeWidth = "2";
        this.fill = "none";
        this.animationDuration = "2s";
    }
}
ProgressSpinner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ProgressSpinner, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressSpinner.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.7", type: ProgressSpinner, selector: "p-progressSpinner", inputs: { style: "style", styleClass: "styleClass", strokeWidth: "strokeWidth", fill: "fill", animationDuration: "animationDuration" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <div class="p-progress-spinner" [ngStyle]="style" [ngClass]="styleClass"  role="alert" aria-busy="true">
            <svg class="p-progress-spinner-svg" viewBox="25 25 50 50" [style.animation-duration]="animationDuration">
                <circle class="p-progress-spinner-circle" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10"/>
            </svg>
        </div>
    `, isInline: true, styles: [".p-progress-spinner{position:relative;margin:0 auto;width:100px;height:100px;display:inline-block}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;inset:0;margin:auto}.p-progress-spinner-circle{stroke-dasharray:89,200;stroke-dashoffset:0;stroke:#d62d20;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke-linecap:round}@keyframes p-progress-spinner-rotate{to{transform:rotate(360deg)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{to,0%{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ProgressSpinner, decorators: [{
            type: Component,
            args: [{ selector: 'p-progressSpinner', template: `
        <div class="p-progress-spinner" [ngStyle]="style" [ngClass]="styleClass"  role="alert" aria-busy="true">
            <svg class="p-progress-spinner-svg" viewBox="25 25 50 50" [style.animation-duration]="animationDuration">
                <circle class="p-progress-spinner-circle" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10"/>
            </svg>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        'class': 'p-element'
                    }, styles: [".p-progress-spinner{position:relative;margin:0 auto;width:100px;height:100px;display:inline-block}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;inset:0;margin:auto}.p-progress-spinner-circle{stroke-dasharray:89,200;stroke-dashoffset:0;stroke:#d62d20;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke-linecap:round}@keyframes p-progress-spinner-rotate{to{transform:rotate(360deg)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{to,0%{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}\n"] }]
        }], propDecorators: { style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], strokeWidth: [{
                type: Input
            }], fill: [{
                type: Input
            }], animationDuration: [{
                type: Input
            }] } });
export class ProgressSpinnerModule {
}
ProgressSpinnerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ProgressSpinnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressSpinnerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.7", ngImport: i0, type: ProgressSpinnerModule, declarations: [ProgressSpinner], imports: [CommonModule], exports: [ProgressSpinner] });
ProgressSpinnerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ProgressSpinnerModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ProgressSpinnerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [ProgressSpinner],
                    declarations: [ProgressSpinner]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NzcGlubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3Byb2dyZXNzc3Bpbm5lci9wcm9ncmVzc3NwaW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBa0I3QyxNQUFNLE9BQU8sZUFBZTtJQWhCNUI7UUFzQmEsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFFMUIsU0FBSSxHQUFXLE1BQU0sQ0FBQztRQUV0QixzQkFBaUIsR0FBVyxJQUFJLENBQUM7S0FFN0M7OzRHQVpZLGVBQWU7Z0dBQWYsZUFBZSx3T0FkZDs7Ozs7O0tBTVQ7MkZBUVEsZUFBZTtrQkFoQjNCLFNBQVM7K0JBQ0ksbUJBQW1CLFlBQ25COzs7Ozs7S0FNVCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxRQUUvQjt3QkFDRixPQUFPLEVBQUUsV0FBVztxQkFDdkI7OEJBSVEsS0FBSztzQkFBYixLQUFLO2dCQUVHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBRUcsV0FBVztzQkFBbkIsS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsaUJBQWlCO3NCQUF6QixLQUFLOztBQVNWLE1BQU0sT0FBTyxxQkFBcUI7O2tIQUFyQixxQkFBcUI7bUhBQXJCLHFCQUFxQixpQkFuQnJCLGVBQWUsYUFlZCxZQUFZLGFBZmIsZUFBZTttSEFtQmYscUJBQXFCLFlBSnBCLFlBQVk7MkZBSWIscUJBQXFCO2tCQUxqQyxRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMxQixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsSW5wdXQsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtcHJvZ3Jlc3NTcGlubmVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicC1wcm9ncmVzcy1zcGlubmVyXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbbmdDbGFzc109XCJzdHlsZUNsYXNzXCIgIHJvbGU9XCJhbGVydFwiIGFyaWEtYnVzeT1cInRydWVcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJwLXByb2dyZXNzLXNwaW5uZXItc3ZnXCIgdmlld0JveD1cIjI1IDI1IDUwIDUwXCIgW3N0eWxlLmFuaW1hdGlvbi1kdXJhdGlvbl09XCJhbmltYXRpb25EdXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJwLXByb2dyZXNzLXNwaW5uZXItY2lyY2xlXCIgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMjBcIiBbYXR0ci5maWxsXT1cImZpbGxcIiBbYXR0ci5zdHJva2Utd2lkdGhdPVwic3Ryb2tlV2lkdGhcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzc3NwaW5uZXIuY3NzJ10sXG4gICAgaG9zdDoge1xuICAgICAgICAnY2xhc3MnOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTcGlubmVyIHtcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzdHJva2VXaWR0aDogc3RyaW5nID0gXCIyXCI7XG5cbiAgICBASW5wdXQoKSBmaWxsOiBzdHJpbmcgPSBcIm5vbmVcIjtcblxuICAgIEBJbnB1dCgpIGFuaW1hdGlvbkR1cmF0aW9uOiBzdHJpbmcgPSBcIjJzXCI7XG5cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbUHJvZ3Jlc3NTcGlubmVyXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtQcm9ncmVzc1NwaW5uZXJdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU3Bpbm5lck1vZHVsZSB7IH1cbiJdfQ==