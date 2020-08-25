import {Component, EventEmitter, Input, Output, NgModule, OnInit, OnDestroy, HostListener} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LanguageService} from '../../../services/language.service';
import {WindowService} from '../../../services/window.service';
import {UserService} from '../../../services/user.service';
import {Subscription} from 'rxjs';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})

export class ExampleComponent implements OnInit, OnDestroy {
  @Input() windowItem;
  @Output() update = new EventEmitter();

  demo = 'Testing';
  locale;
  user: any;
  exp: any;
  private langSub$: Subscription;
  apiResponse: any;
  key: string;

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

  addRibbon(): void {
    this.windowService.addRibbon(this.windowItem);
    this.update.emit(true);
  }

  removeRibbon(): void {
    this.windowService.removeRibbon(this.windowItem);
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
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [ExampleComponent]
})

export class ExampleModule {
}
