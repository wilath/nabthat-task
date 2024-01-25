import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './content.model';

@Pipe({
  name: 'alphabetSort',
})
export class AlphabetSortPipe implements PipeTransform {

 
    transform(items: Content[] | null ): Content[] | null   {
      if (!items) {
        return null;
      }
  
      return items.sort((a, b) => {
        const valueA = a.value.toUpperCase();
        const valueB = b.value.toUpperCase();
  
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

