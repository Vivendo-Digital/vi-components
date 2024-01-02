import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export interface VivOptionGroup {
    name: string;
    options: VivOption[];
}
export interface VivOption {
    value: string;
    label: string;
    audioSource?: string;
}
export declare class ViSelectComponent {
    label: string;
    options: VivOptionGroup[];
    selectedOption?: VivOption;
    value?: string;
    disabled: boolean;
    audioPlayer: ElementRef<HTMLAudioElement>;
    showOptions: boolean;
    toggle(e: any): void;
    selectOption(o: VivOption): void;
    playPreview(o: VivOption): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ViSelectComponent, "vi-select", never, { "label": { "alias": "label"; "required": false; }; "options": { "alias": "options"; "required": false; }; "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
