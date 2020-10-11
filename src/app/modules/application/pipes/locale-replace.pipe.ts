import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'localeReplace'
})
export class LocaleReplacePipe implements PipeTransform {

  transform(value: string, find, replace): unknown {
    // tslint:disable-next-line:forin
    for (const item in find) {
      value = value.replace(find[item], replace[item]);
    }
    return value;
  }

}
