import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    const array: string[] = value.split('');
    array.reverse();
    const s = array.join('');
    console.log(s);
    return s;
  }

}
