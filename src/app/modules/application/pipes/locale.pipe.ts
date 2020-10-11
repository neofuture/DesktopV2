import {Pipe, PipeTransform} from '@angular/core';
import {LanguageService} from '../services/language.service';

@Pipe({
  name: 'locale',
  pure: false
})
export class LocalePipe implements PipeTransform {
  private langSub: any;
  locale: any;


  constructor(
    private languageService: LanguageService,
  ) {
  }

  transform(tag: string, component): unknown {
    this.langSub = this.languageService.language.subscribe((data) => {
      // @ts-ignore
      this.locale = data[component];
    });

    if (typeof this.locale[tag] !== 'undefined') {
      return this.locale[tag];
    }
    return tag;
  }

}
