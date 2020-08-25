import {Component, Input, OnInit} from '@angular/core';
import {LanguageService} from '../../../../../../services/language.service';
import {RibbonService} from '../../../../../../services/ribbon.service';

@Component({
  selector: 'app-ribbon-button',
  templateUrl: './ribbon-button.component.html',
  styleUrls: ['./ribbon-button.component.css']
})
export class RibbonButtonComponent implements OnInit {
  @Input() button;
  @Input() ribbonSize;
  @Input() direction;
  locale;

  constructor(
    private languageService: LanguageService,
    private ribbonService: RibbonService
  ) { }

  ngOnInit(): void {
    this.languageService.language.subscribe(locale => {
      this.locale = locale.desktop.ribbon;
    });
  }

  ribbonAction(event): void {
    this.ribbonService.delegateAction(event, this.button);
  }
}
