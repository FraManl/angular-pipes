import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // force pipe to be recalculated even in filter mode, at every change
  // pipe gets recalculated everytime data changes
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): unknown {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
