import { Component, Input } from '@angular/core';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  @Input() public books: Book[] = [];
}
