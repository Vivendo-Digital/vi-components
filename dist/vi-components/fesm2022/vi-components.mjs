import * as i0 from '@angular/core';
import { Injectable, Component, Input, ViewChild, NgModule } from '@angular/core';

class ViComponentsService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViComponentsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViComponentsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViComponentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ViSelectComponent {
    constructor() {
        this.label = "";
        this.options = [];
        this.disabled = false;
        this.showOptions = false;
    }
    toggle(e) {
        e.preventDefault();
        if (this.disabled)
            return;
        this.showOptions = !this.showOptions;
        console.log("Toggled!");
    }
    selectOption(o) {
        this.value = o.value;
        this.selectedOption = o;
        this.showOptions = !this.showOptions;
    }
    playPreview(o) {
        if (!o.audioSource)
            return;
        const audio = this.audioPlayer.nativeElement;
        audio.src = o.audioSource;
        if (audio.paused) {
            audio.play();
        }
        else {
            audio.pause();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ViSelectComponent, selector: "vi-select", inputs: { label: "label", options: "options", value: "value", disabled: "disabled" }, viewQueries: [{ propertyName: "audioPlayer", first: true, predicate: ["audioPlayer"], descendants: true }], ngImport: i0, template: "<audio #audioPlayer></audio>\n<div class=\"select-container\">\n    <div class=\"label\">{{label}}</div>\n    <div (click)=\"toggle($event)\" class=\"selection\">\n        <div [style.opacity]=\"disabled ? 0.5 : 1\">{{ selectedOption ? selectedOption.label : 'Please select an option' }}</div>\n        <div [style.opacity]=\"disabled ? 0.5 : 1\" class=\"toggle\">\n            <svg [class.rotate]=\"showOptions\" class=\"toggle-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"\n                xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M5 7.5 L10 12.5 L15 7.5\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" />\n            </svg>\n        </div>\n    </div>\n    <div [class.visible]=\"!showOptions\" class=\"options\">\n        <div *ngFor=\"let g of options\">\n            <div class=\"group-header\">{{g.name}}</div>\n            <div class=\"option\" *ngFor=\"let o of g.options\">\n                <div (click)=\"playPreview(o)\" *ngIf=\"o.audioSource\" class=\"audio-preview\">\n                    <svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M10 7.5L22.5 15L10 22.5V7.5Z\" fill=\"currentColor\"/>\n                    </svg>\n                </div>\n                <div (click)=\"selectOption(o)\" class=\"option-label\">{{o.label}}</div>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".select-container{position:relative}.label{font-size:small;font-weight:400;padding-bottom:8px}.selection{border:1px solid lightgray;border-radius:16px;display:flex;align-items:center;padding:12px;cursor:pointer;margin-bottom:16px}.options{position:absolute;z-index:999;background-color:#fff;width:100%;max-height:250px;top:70px;box-shadow:0 4px 8px #0000001a;margin-top:8px;border-radius:12px;overflow-y:scroll}.options .option{padding:16px;cursor:pointer;display:flex;align-items:center}.options .group-header{display:flex;align-items:center;padding:8px 16px;background-color:#edf2f5;color:#9598a6;font-size:11px;font-weight:600;text-transform:uppercase;height:20px}.options .audio-player{display:none}.options .audio-preview{margin-left:-8px;margin-right:8px;display:flex;align-items:center}.toggle{display:flex;align-items:center;margin-left:auto}svg.toggle-icon{display:inline-block;transition:transform .2s ease;transform-origin:50% 50%}svg.toggle-icon.rotate{transform:rotate(180deg)}.visible{visibility:hidden}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vi-select', template: "<audio #audioPlayer></audio>\n<div class=\"select-container\">\n    <div class=\"label\">{{label}}</div>\n    <div (click)=\"toggle($event)\" class=\"selection\">\n        <div [style.opacity]=\"disabled ? 0.5 : 1\">{{ selectedOption ? selectedOption.label : 'Please select an option' }}</div>\n        <div [style.opacity]=\"disabled ? 0.5 : 1\" class=\"toggle\">\n            <svg [class.rotate]=\"showOptions\" class=\"toggle-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"\n                xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M5 7.5 L10 12.5 L15 7.5\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" />\n            </svg>\n        </div>\n    </div>\n    <div [class.visible]=\"!showOptions\" class=\"options\">\n        <div *ngFor=\"let g of options\">\n            <div class=\"group-header\">{{g.name}}</div>\n            <div class=\"option\" *ngFor=\"let o of g.options\">\n                <div (click)=\"playPreview(o)\" *ngIf=\"o.audioSource\" class=\"audio-preview\">\n                    <svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M10 7.5L22.5 15L10 22.5V7.5Z\" fill=\"currentColor\"/>\n                    </svg>\n                </div>\n                <div (click)=\"selectOption(o)\" class=\"option-label\">{{o.label}}</div>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".select-container{position:relative}.label{font-size:small;font-weight:400;padding-bottom:8px}.selection{border:1px solid lightgray;border-radius:16px;display:flex;align-items:center;padding:12px;cursor:pointer;margin-bottom:16px}.options{position:absolute;z-index:999;background-color:#fff;width:100%;max-height:250px;top:70px;box-shadow:0 4px 8px #0000001a;margin-top:8px;border-radius:12px;overflow-y:scroll}.options .option{padding:16px;cursor:pointer;display:flex;align-items:center}.options .group-header{display:flex;align-items:center;padding:8px 16px;background-color:#edf2f5;color:#9598a6;font-size:11px;font-weight:600;text-transform:uppercase;height:20px}.options .audio-player{display:none}.options .audio-preview{margin-left:-8px;margin-right:8px;display:flex;align-items:center}.toggle{display:flex;align-items:center;margin-left:auto}svg.toggle-icon{display:inline-block;transition:transform .2s ease;transform-origin:50% 50%}svg.toggle-icon.rotate{transform:rotate(180deg)}.visible{visibility:hidden}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], options: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], audioPlayer: [{
                type: ViewChild,
                args: ["audioPlayer"]
            }] } });

class ViComponentsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ViComponentsModule, declarations: [ViSelectComponent], exports: [ViSelectComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViComponentsModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ViSelectComponent
                    ],
                    imports: [],
                    exports: [
                        ViSelectComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vi-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ViComponentsModule, ViComponentsService, ViSelectComponent };
//# sourceMappingURL=vi-components.mjs.map
