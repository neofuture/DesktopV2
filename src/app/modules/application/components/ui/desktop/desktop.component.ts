import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DesktopService} from '../../../services/desktop.service';
import {LanguageService} from '../../../services/language.service';
import {WindowService} from '../../../services/window.service';
import {UserService} from '../../../services/user.service';
import {ToastService} from '../../../services/toast.service';
import {DialogService} from '../../../services/dialog.service';
import {Subscription} from 'rxjs';
import {RibbonService} from '../../../services/ribbon.service';
import {PanelService} from '../../../services/panel.service';
import {TabbarService} from '../../../services/tabbar.service';
import {SystemService} from '../../../services/system.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit, AfterViewInit, OnDestroy {


  windowList = {};
  panelList = {};
  toastList = {};
  dialogList = {};

  @ViewChild('desktop') desktop: ElementRef;

  objectValues = Object.values;
  locale;

  dimensions: any;
  user = null;
  company: string;
  product: string;
  private ribbonSub$: Subscription;
  private desktopSub$: Subscription;
  private langSub$: Subscription;
  private tabSub$: Subscription;

  ribbonSize: string;
  autoHide: boolean;
  runState: any;
  appState: any;
  loading: any;

  @HostListener('window:resize')
  onResize(): void {
    this.resize();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEventDown(event): void {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      this.systemService.set({multiSelect: true});
    }
    if (event.code === 'Tab') {
      event.preventDefault();
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEventUp(event): void {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      this.systemService.set({multiSelect: false});
    }
  }

  constructor(
    private desktopService: DesktopService,
    private languageService: LanguageService,
    private windowService: WindowService,
    private panelService: PanelService,
    private userService: UserService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private ribbonService: RibbonService,
    private tabBarService: TabbarService,
    private systemService: SystemService
  ) {
  }

  ngOnInit(): void {
    this.loading = this.desktopService.loading;
    this.systemService.runState.subscribe(data => {
      this.runState = data;
    });

    this.systemService.appState.subscribe(data => {
      this.appState = data;
    });

    this.splash();
    this.desktopSub$ = this.desktopService.dimensions.subscribe(data => {
      this.dimensions = data;
    });

    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.desktop;
      this.company = locale.company;
      this.product = locale.product;
    });

    this.windowList = this.windowService.windowList;
    this.panelList = this.panelService.panelList;
    this.toastList = this.toastService.toastList;
    this.dialogList = this.dialogService.dialogList;


    // settings
    this.ribbonSub$ = this.ribbonService.ribbonSize.subscribe(size => {
      this.ribbonSize = size;
    });
    this.tabSub$ = this.tabBarService.autoHideList.subscribe(data => {
      this.autoHide = data;
    });

    setTimeout(() => {
      this.loadDesktop();
    }, 1000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.desktopService.desktopElement = this.desktop;
      this.desktopService.setSize();
    }, 310);

  }

  ngOnDestroy(): void {
    this.ribbonSub$.unsubscribe();
    this.desktopSub$.unsubscribe();
    this.langSub$.unsubscribe();
  }

  animation(): void {

  }

  loadDesktop(): void {
    this.userService.user.subscribe(token => {
      this.user = token;

      setTimeout(() => {
        this.resize();
        if (token === null) {
          this.loginWindow();
        }
      }, 310);
    });
  }

  private resize(): void {
    this.desktopService.setSize();
    this.windowService.setSize();
  }

  loginWindow(): void {
    const windowConfig = {
      width: 300,
      height: 300,
      resizable: false,
      hasControls: false,
      hasTab: false,
      centered: true,
      component: 'system/user/user-login',
      hasDockMenu: false,
      singleInstance: 'system/user/user-login',
      hasLanguageSelector: true,
      title: 'login',
      icon: 'icon-login',
      alwaysActive: true,
      systemWindow: true
    };

    this.windowService.newWindow(windowConfig);
  }

  splash(): void {
    const windowConfig = {
      width: 500,
      height: 500,
      centered: true,
      resizable: false,
      hasControls: false,
      hasTab: false,
      component: 'system/splash',
      hasDockMenu: false,
      singleInstance: 'system/splash',
      title: 'splash',
      hasTitleBar: false,
      autoClose: 10000,
      alwaysOnTop: true,
      alwaysActive: true,
      systemWindow: true
    };

    this.windowService.newWindow(windowConfig);
  }

}
