import { Component, Input } from '@angular/core';
import { Content } from '../shared/content.model';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss',
})
export class OutputComponent {
  @Input() data: Array<Content> = []
}
