import {Component, EventEmitter, Input, NgModule, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {WindowService} from '../../../services/window.service';
import {LanguageService} from '../../../services/language.service';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../application.module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  @Input() windowItem;
  @Output() update = new EventEmitter();

  locale;
  company: string;
  product: string;
  private langSub$: Subscription;
  showRemaining: number;

  constructor(
    private windowService: WindowService,
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.system.about;
      this.company = locale.company;
      this.product = locale.product;
    });

    this.windowService.setLoaded(this.windowItem.uuid);

  }

  ngOnDestroy(): void {
    this.langSub$.unsubscribe();
  }

  closeWindow(): void {
    this.windowService.closeWindow(this.windowItem.uuid);
  }

}

@NgModule({
  imports: [
    CommonModule,
    ApplicationModule
  ],
  exports: [],
  declarations: [
    AboutComponent
  ]
})

export class AboutModule {
}

