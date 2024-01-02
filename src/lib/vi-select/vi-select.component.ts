import { Component, ElementRef, Input, ViewChild } from '@angular/core';

export interface VivOptionGroup {
  name: string
  options: VivOption[]
}

export interface VivOption {
  value: string,
  label: string,
  audioSource?: string
}

@Component({
  selector: 'vi-select',
  templateUrl: './vi-select.component.html',
  styleUrls: ['./vi-select.component.scss']
})
export class ViSelectComponent {
  @Input() label: string = ""

  @Input() options: VivOptionGroup[] = []
  selectedOption?: VivOption
  @Input() value?: string
  @Input() disabled = false

  @ViewChild("audioPlayer") audioPlayer!: ElementRef<HTMLAudioElement>

  showOptions = false

  toggle(e: any) {
    e.preventDefault()
    if (this.disabled) return

    this.showOptions = !this.showOptions
    console.log("Toggled!")
  }

  selectOption(o: VivOption) {
    this.value = o.value
    this.selectedOption = o
    this.showOptions = !this.showOptions
  }

  playPreview(o: VivOption) {
    if (!o.audioSource) return
    const audio = this.audioPlayer.nativeElement
    audio.src = o.audioSource
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  }
}
