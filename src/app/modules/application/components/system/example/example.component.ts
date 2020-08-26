import {Component, EventEmitter, Input, Output, NgModule, OnInit, OnDestroy, HostListener, DoCheck} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LanguageService} from '../../../services/language.service';
import {WindowService} from '../../../services/window.service';
import {UserService} from '../../../services/user.service';
import {Subscription} from 'rxjs';
import {ApiService} from '../../../services/api.service';
import {ApplicationModule} from '../../../application.module';
import {ButtonModule} from 'primeng';
import {RippleModule} from 'primeng/ripple';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})

export class ExampleComponent implements OnInit, OnDestroy, DoCheck {
  @Input() windowItem;
  @Output() update = new EventEmitter();

  demo = 'Testing';
  locale;
  user: any;
  exp: any;
  private langSub$: Subscription;
  apiResponse: any;
  key: string;
  ratio: boolean;
  area: { width: any; height: any };
  component: any;
  testFunctionValue: any;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEventDown(event): void {
    if (this.windowItem.active) {
      this.key = event.code;
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEventUp(event): void {
    if (this.windowItem.active) {
      this.key = null;
    }
  }

  constructor(
    private languageService: LanguageService,
    private windowService: WindowService,
    private userService: UserService,
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
    this.component = this;
    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.system.example;
    });

    this.windowService.setLoaded(this.windowItem.uuid);
    this.windowItem.hasLocalRibbon = true;
    this.windowItem.hasLocalFooter = true;

    this.userService.user.subscribe(token => {
      this.user = token;
      this.exp = new Date(0);
      this.exp.setUTCSeconds(this.user.exp);
    });

    this.callApi();
  }

  ngDoCheck(): void {
    this.ratio = !((this.windowItem.componentWidth / this.windowItem.componentHeight) > 1);

    if (this.windowItem.hasLocalRibbon) {
      this.area = {
        width: (this.ratio) ? this.windowItem.componentWidth : this.windowItem.componentWidth - 52,
        height: ((this.ratio) ? this.windowItem.componentHeight - 50 : this.windowItem.componentHeight) - (this.windowItem.hasLocalFooter ? 50 : 0),
      };
    } else {
      this.area = {
        width: this.windowItem.componentWidth,
        height: this.windowItem.componentHeight - (this.windowItem.hasLocalFooter ? 50 : 0)
      };
    }

  }

  ngOnDestroy(): void {
    this.langSub$.unsubscribe();
  }

  callApi(): void {
    const requestBody = {
      example: 'This is an example API call'
    };

    this.apiService.call('example/test', 'post', requestBody).subscribe(result => {
      this.apiResponse = result;
    });
  }

  closeWindow(): void {
    this.windowService.closeWindow(this.windowItem.uuid);
  }

  addLocalRibbon(): void {
    this.windowService.addLocalRibbon(this.windowItem);
    this.update.emit(true);
  }

  removeLocalRibbon(): void {
    this.windowService.removeLocalRibbon(this.windowItem);
    this.update.emit(true);
  }

  addLocalFooter(): void {
    this.windowService.addLocalFooter(this.windowItem);
    this.update.emit(true);
  }

  removeLocalFooter(): void {
    this.windowService.removeLocalFooter(this.windowItem);
    this.update.emit(true);
  }

  addStatusBar(): void {
    this.windowService.addStatusBar(this.windowItem);
    this.update.emit(true);
  }

  removeStatusBar(): void {
    this.windowService.removeStatusBar(this.windowItem);
    this.update.emit(true);
  }

  logout(): void {
    this.userService.logout();
  }

  setUnSaved(saved: boolean): void {
    this.windowService.setUnSaved(this.windowItem.uuid, saved);
  }

  setAlwaysActive(alwaysActive: boolean): void {
    this.windowService.setAlwaysActive(this.windowItem.uuid, alwaysActive);
  }

  testFunction(button): void {
    this.testFunctionValue = button;
  }
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule,
    ButtonModule
  ],
  declarations: [ExampleComponent]
})

export class ExampleModule {
}
