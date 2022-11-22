import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  // Pipes work like this: you put something, you return something out
  //   transform(value: any, ...args: any[]) {
  //     if (value.length > 10) {
  //       return value.substr(0, 10) + ' ...';
  //     } else {
  //       return value;
  //     }
  //   }

  // second argument in the pipe
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.substr(0, limit) + ' ...';
    } else {
      return value;
    }
  }
}
