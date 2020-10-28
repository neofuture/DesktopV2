import {Component, EventEmitter, Input, NgModule, OnDestroy, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../application.module';
import {UserLoginComponent} from '../user/user-login/user-login.component';
import {WindowService} from '../../../services/window.service';
import {LanguageService} from '../../../services/language.service';
import {Subscription} from 'rxjs';
import {TooltipModule} from 'ng2-tooltip-directive';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit, OnDestroy {
  @Input() windowItem;
  @Output() update = new EventEmitter();

  locale;
  company: string;
  product: string;
  private remaining: any;
  private timer: NodeJS.Timeout;
  private langSub$: Subscription;
  showRemaining: number;

  constructor(
    private windowService: WindowService,
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.system.splash;
      this.company = locale.company;
      this.product = locale.product;
    });

    this.windowService.setLoaded(this.windowItem.uuid);

    if (this.windowItem.autoClose) {
      this.remaining = this.windowItem.autoClose;
      this.timer = setInterval(() => {
        this.remaining -= 100;
        this.showRemaining = Math.ceil(this.remaining / 1000);
      }, 100);
    }

  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
    this.langSub$.unsubscribe();
  }

  closeWindow(): void {
    this.windowService.closeWindow(this.windowItem.uuid);
  }

}

@NgModule({
    imports: [
        CommonModule,
        ApplicationModule,
        TooltipModule
    ],
  exports: [],
  declarations: [
    SplashComponent
  ]
})

export class SplashModule {
}
