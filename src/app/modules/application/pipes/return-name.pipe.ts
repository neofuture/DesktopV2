import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'returnName'
})
export class ReturnNamePipe implements PipeTransform {

  transform(value: unknown, data): string {
    for (const item of data) {
      if (item.id === value) {
        return item.name.toString();
      }
    }
    return '';
  }

}
