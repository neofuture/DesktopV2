import {Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LanguageService} from '../../../services/language.service';
import {DesktopService} from '../../../services/desktop.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  @ViewChild('input', {read: ElementRef}) input: ElementRef;
  @Input() type;

  locale;
  objectKeys = Object.keys;
  selector: boolean;
  private focused: boolean;

  constructor(
    private languageService: LanguageService,
    private desktopService: DesktopService
  ) {
  }

  ngOnInit(): void {
    this.languageService.language.subscribe(locale => {
      this.locale = locale.components.languageSelector;
    });
  }

  selectLanguage(event, lang: string): void {
    event.stopPropagation();
    this.languageService.setLanguage(lang);
    this.input.nativeElement.blur();
    this.focused = false;
  }

  openSelector(): void {
    this.selector = true;
    this.input.nativeElement.focus();
  }

  blurCloseSelector(): void {
    setTimeout(() => {
      this.selector = false;
    }, 100);
  }

  focusSelector(): void {
    if (this.focused === true) {
      this.focused = false;
      return;
    }
    setTimeout(() => {
      this.input.nativeElement.focus();
      this.focused = true;
    }, 100);

  }
}
