import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LanguageService} from '../../../../services/language.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit, OnDestroy {
  locale;
  company: string;
  product: string;
  private ribbonSub$: any;
  private langSub$: Subscription;
  ribbonSize: string;
  @Input() component: any;

  constructor(
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.system.userLogin;
      this.company = locale.company;
      this.product = locale.product;
    });
  }

  ngOnDestroy(): void {
    this.langSub$.unsubscribe();
    this.ribbonSub$.unsubscribe();
  }
}
