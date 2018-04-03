import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FlterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'flter',
})
export class FlterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], searchText: string): any[] {
      if (!items) return [];
      if (!searchText || searchText === "") return items;
      searchText = searchText.toLowerCase();
      return items.filter(item => {
          return item.name.toLowerCase().includes(searchText);
      });
  }
}

 