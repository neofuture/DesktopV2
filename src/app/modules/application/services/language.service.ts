import { Injectable } from '@angular/core';
import {blank} from '../config/blank';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  userUuid = '917820b5-536b-4f0d-be7f-ad7194a4a72d';

  private objectSource = new BehaviorSubject(blank);
  language = this.objectSource.asObservable();

  constructor() {
    this.setLanguage(localStorage.getItem(this.userUuid) || 'langEn');
  }

  setLanguage(lang): void {
    this.loadLanguage(lang).then(result => {
      this.objectSource.next(result);
    });

    localStorage.setItem(this.userUuid, lang);
  }

  async loadLanguage(lang): Promise<any> {
    const language = await import('../config/locales/' + lang);
    return language[lang];
  }
}
