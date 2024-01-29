import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrl: './switches.component.scss',
})
export class SwitchesComponent {
  @Output() appendButtonClick = new EventEmitter<void>();
  @Output() changeButtonClick = new EventEmitter<void>();

  public onAppendButtonClick() {
    this.appendButtonClick.emit();
  }

  public onChangeButtonClick() {
    this.changeButtonClick.emit();
  }
}
