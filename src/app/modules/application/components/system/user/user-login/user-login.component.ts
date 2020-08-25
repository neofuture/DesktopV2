import {Component, EventEmitter, Input, Output, NgModule, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LanguageService} from '../../../../services/language.service';
import {WindowService} from '../../../../services/window.service';
import {ApplicationModule} from '../../../../application.module';
import {UserService} from '../../../../services/user.service';
import {ToastService} from '../../../../services/toast.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  @Input() windowItem;
  @Output() update = new EventEmitter();
  @ViewChild('loginButton') loginButton: ElementRef;

  locale;
  username = 'carlfearby@me.com';
  password = 'password';
  company = '';
  product = '';
  private user: any;

  loggingIn = false;

  constructor(
    private languageService: LanguageService,
    private windowService: WindowService,
    private userService: UserService,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.languageService.language.subscribe(locale => {
      this.locale = locale.system.userLogin;
      this.company = locale.company;
      this.product = locale.product;
    });

    this.windowService.setLoaded(this.windowItem.uuid);
    this.userService.user.subscribe(token => {
      this.user = token;
      if (this.user !== null) {
        this.closeWindow();
      }
    });
  }

  closeWindow(): void {
    this.windowService.closeWindow(this.windowItem.uuid);
  }

  login(): void {
    const request = {
      username: this.username,
      password: this.password
    };
    this.loggingIn = true;
    this.userService.login(request).subscribe((status) => {
      if (status.status === '200 ok') {
        this.userService.setToken(status.token);
        const toastConfig = {
          title: 'success',
          body: 'loginSuccessful',
          autoClose: 2000,
          type: 'success'
        };
        this.toastService.newToast(toastConfig);
      } else {
        this.loggingIn = false;
        const toastConfig = {
          title: 'error',
          body: 'loginFailed',
          autoClose: 2000,
          type: 'error'
        };
        this.toastService.newToast(toastConfig);
      }
    });
  }
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule
  ],
  exports: [],
  declarations: [
    UserLoginComponent
  ]
})

export class UserLoginModule {
}
