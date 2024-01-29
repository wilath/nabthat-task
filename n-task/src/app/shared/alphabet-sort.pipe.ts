import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.model';

@Pipe({
  name: 'alphabetSort',
})
export class AlphabetSortPipe implements PipeTransform {


    transform(items: Book[] | null ): Book[] | null   {
      if (!items) {
        return null;
      }

      return items.sort((a, b) => {
        const valueA = a.description.toUpperCase();
        const valueB = b.description.toUpperCase();

        if (valueA < valueB) {
          return -1;
        } else if (valueA > valueB) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }

