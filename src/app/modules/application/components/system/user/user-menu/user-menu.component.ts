import {Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LanguageService} from '../../../../services/language.service';
import {UserService} from '../../../../services/user.service';
import {WindowService} from '../../../../services/window.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  @ViewChild('input', {read: ElementRef}) input: ElementRef;
  @Input() type;

  locale;
  selector: boolean;
  private focused: boolean;
  square: boolean;
  user: any;

  constructor(
    private languageService: LanguageService,
    private userService: UserService,
    private windowService: WindowService,
  ) {
  }

  ngOnInit(): void {
    this.languageService.language.subscribe(locale => {
      this.locale = locale.system.userMenu;
    });
    this.userService.user.subscribe(token => {
      this.user = token;
    });
  }

  openSelector(): void {
    this.selector = true;
    this.input.nativeElement.focus();
  }

  blurCloseSelector(): void {
    setTimeout(() => {
      this.selector = false;
    }, 300);
  }

  focusSelector(): void {
    if (this.focused === true) {
      this.focused = false;
      return;
    }
    setTimeout(() => {
      this.input.nativeElement.focus();
      this.focused = true;
    }, 200);

  }

  action(): void {

  }

  logout(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.userService.logout();

  }

  profile(event): void {
    event.preventDefault();
    event.stopPropagation();
    const windowConfig = {
      width: 600,
      height: 400,
      component: 'system/example',
      hasStatusBar: true,
      title: 'profile',
      icon: 'icon-user',
      singleInstance: 'profile'
    };
    this.windowService.newWindow(windowConfig);
  }
}
