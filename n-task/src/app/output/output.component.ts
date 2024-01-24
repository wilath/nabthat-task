import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss',
})
export class OutputComponent {
  @Input() data: string[] = ['a','b'];
}
