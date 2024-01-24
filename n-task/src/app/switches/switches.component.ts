import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrl: './switches.component.scss',
})
export class SwitchesComponent {
  @Output() switch = new EventEmitter<string>();

  public switchChange(event: Event) {
    const target = event.target as HTMLButtonElement;
    this.switch.emit(target.value);
  }
}
