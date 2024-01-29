import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioOption } from '../shared/radio-option-enum';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrl: './radios.component.scss',
})
export class RadiosComponent {
  @Input() option: RadioOption;
  @Output() optionChange = new EventEmitter<RadioOption>();

  public radioOption = RadioOption;

  onRadioChange() {
    this.optionChange.emit(this.option);
  }
}
