import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeUuid = 'b06e9acc-29ca-4b1d-8209-300d406f70bd';
  themeObject = new BehaviorSubject(localStorage.getItem(this.themeUuid) === 'true' ? true : false);
  theme = this.themeObject.asObservable();

  constructor() {
  }

  setTheme(theme: boolean): boolean {
    this.themeObject.next(theme);
    window.localStorage.setItem(this.themeUuid, String(theme));
    return theme;
  }

  setDarkMode(): void {
    document.body.classList.add('dark');
  }

  setLightMode(): void {
    document.body.classList.remove('dark');
  }
}
