import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrl: './radios.component.scss'
})
export class RadiosComponent {
  @Output() radio = new EventEmitter<string>();

  public onRadioChange(event: Event){
    const target = event.target as HTMLInputElement
    this.radio.emit(target.value)
  }
}
