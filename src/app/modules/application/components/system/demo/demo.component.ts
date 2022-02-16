import {Component, EventEmitter, Injector, Input, NgModule, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {WindowService} from '../../../services/window.service';
import {PanelService} from '../../../services/panel.service';
import {DialogService} from '../../../services/dialog.service';
import {DesktopService} from '../../../services/desktop.service';
import {ToastService} from '../../../services/toast.service';
import {LanguageService} from '../../../services/language.service';
import {Subscription} from 'rxjs';
import {HelperService} from '../../../services/helper.service';
import {SystemService} from '../../../services/system.service';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(
    private windowService: WindowService,
    public panelService: PanelService,
    private dialogService: DialogService,
    private desktopService: DesktopService,
    private toastService: ToastService,
    private languageService: LanguageService,
    private helperService: HelperService,
    private systemService: SystemService,
    private apiService: ApiService
  ) {
  }

  @Input() windowItem;
  @Output() update = new EventEmitter();
  private langSub$: Subscription;
  private company: string;
  private product: string;
  runState: any;
  appState: any;
  test = false;
  statusBarText = 'Dynamic Status Bar';

  ngOnInit(): void {

    this.systemService.runState.subscribe(data => {
      this.runState = data;
    });

    this.systemService.appState.subscribe(data => {
      this.appState = data;
    });

    this.windowService.setLoaded(this.windowItem.uuid);
    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.company = locale.company;
      this.product = locale.product;
    });
  }


  plannerWindow(): void {
    const windowConfig = {
      icon: 'icon-user',
      iconLarge: 'icon-user',
      width: 600,
      height: 400,
      component: 'system/example',
      hasStatusBar: false,
      hasTitleBar: false,
      title: 'planner',
      uuid: 'b86dd2f9-1043-4cbf-944b-425b7e5de7a2',
      dockInPanel: false
    };
    this.windowService.newWindow(windowConfig);
  }

  newPanelLeft(): void {
    const panelConfig = {
      title: 'Panel'
    };
    this.panelService.newPanel(panelConfig);
  }

  newPanelRight(): void {
    const panelConfig = {
      title: 'Panel',
      dock: 'custom',
      dockPosition: {
        top: 0,
        left: 75,
        width: 25,
        height: 100
      }
    };
    this.panelService.newPanel(panelConfig);
  }

  newWindowDockLeft(): void {
    const windowConfig = {
      alwaysOnBottom: false,
      alwaysOnTop: false,
      width: 600,
      height: 400,
      component: 'system/example',
      centered: true,
      closable: false,
      title: 'newWindow',
      dock: 'custom',
      dockPosition: {
        top: 0,
        left: 0,
        width: 40,
        height: 100
      }
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

  about(): void {
    const windowConfig = {
      width: 500,
      height: 500,
      centered: true,
      component: 'system/about',
      singleInstance: 'system/about',
      title: 'about',
      extendedTitle: this.product,
      systemWindow: true
    };

    this.windowService.newWindow(windowConfig);
  }

  newWindow(alwaysOnTop, alwaysOnBottom, delay = 0): void {
    const windowConfig = {
      icon: 'icon-cog',
      alwaysOnBottom,
      alwaysOnTop,
      width: 600,
      height: 400,
      component: 'system/example',
      hasStatusBar: true,
      hasRibbon: true,
      hasFooter: true,
      title: 'newWindow',
      ribbonHasPriority: true
    };
    this.windowService.newWindow(windowConfig);
  }

  newWindowDoubleRibbon(alwaysOnTop, alwaysOnBottom, delay = 0): void {
    const windowConfig = {
      icon: 'icon-cog',
      alwaysOnBottom,
      alwaysOnTop,
      width: 600,
      height: 400,
      component: 'system/example',
      hasStatusBar: true,
      hasRibbon: true,
      hasFooter: true,
      title: 'newWindow',
      ribbonDouble: true
    };
    this.windowService.newWindow(windowConfig);
  }

  newWindowRibbonTop(alwaysOnTop, alwaysOnBottom, delay = 0): void {
    const windowConfig = {
      icon: 'icon-cog',
      alwaysOnBottom,
      alwaysOnTop,
      width: 600,
      height: 400,
      component: 'system/example',
      hasStatusBar: true,
      hasRibbon: true,
      hasFooter: true,
      title: 'newWindow',
      ribbonFixedPosition: 'top'
    };
    this.windowService.newWindow(windowConfig);
  }

  newWindowRibbonLeft(alwaysOnTop, alwaysOnBottom, delay = 0): void {
    const windowConfig = {
      icon: 'icon-cog',
      alwaysOnBottom,
      alwaysOnTop,
      width: 600,
      height: 400,
      component: 'system/example',
      hasStatusBar: true,
      hasRibbon: true,
      hasFooter: true,
      title: 'newWindow',
      ribbonFixedPosition: 'left'
    };
    this.windowService.newWindow(windowConfig);
  }

  newWindowNoControls(alwaysOnTop, alwaysOnBottom, delay = 0): void {
    const windowConfig = {
      icon: 'icon-dashboard',
      alwaysOnBottom,
      alwaysOnTop,
      width: 600,
      height: 400,
      component: 'system/engine',
      hasStatusBar: false,
      hasControls: false,
      title: 'newWindow'
    };
    this.windowService.newWindow(windowConfig);
  }

  newWindowNoBar(alwaysOnTop, alwaysOnBottom, delay = 0): void {
    const windowConfig = {
      icon: 'icon-user',
      alwaysOnBottom,
      alwaysOnTop,
      width: 600,
      height: 400,
      component: 'system/engine',
      hasStatusBar: false,
      hasTitleBar: false,
      title: 'newWindow',
      dockInPanel: false
    };
    this.windowService.newWindow(windowConfig);
  }

  newWindowNoBarRibbon(): void {
    const windowConfig = {
      icon: 'icon-user',
      width: 600,
      height: 400,
      component: 'system/example',
      hasStatusBar: false,
      hasTitleBar: false,
      title: 'newWindow',
      hasRibbon: true,
      hasFooter: true
    };
    this.windowService.newWindow(windowConfig);
  }

  newWindow3d(): void {
    const windowConfig = {
      icon: 'icon-alarm',
      alwaysOnBottom: false,
      alwaysOnTop: false,
      width: 600,
      height: 400,
      component: 'system/engine',
      centered: true,
      closable: false,
      singleInstance: 'system/engine',
      title: 'newWindow'
    };
    this.windowService.newWindow(windowConfig);
  }

  noFeatures(): void {
    const windowConfig = {
      icon: 'icon-catalogue',
      hasTitleBar: false,
      width: 600,
      height: 400,
      resizable: false,
      component: 'system/engine',
      hasControls: false,
      title: 'newWindow'
    };

    this.windowService.newWindow(windowConfig);
  }

  autoClose(autoClose: number): void {
    const windowConfig = {
      hasTitleBar: false,
      width: 600,
      height: 400,
      resizable: false,
      component: 'system/engine',
      autoClose,
      hasControls: false,
      title: 'newWindow'
    };

    this.windowService.newWindow(windowConfig);
  }

  noTab(): void {
    const windowConfig = {
      hasTab: false,
      width: 600,
      height: 400,
      component: 'system/example',
      title: 'newWindow'
    };

    this.windowService.newWindow(windowConfig);
  }

  demo1(): void {
    const windowConfig = {
      icon: 'icon-alarm',
      iconLarge: 'icon-alarm',
      width: 600,
      height: 400,
      component: 'system/demo1',
      title: 'demo1',
      parentComponent: this
    };
    this.windowService.newWindow(windowConfig);
  }

  demo2(): void {
    const windowConfig = {
      icon: 'icon-catalogues',
      iconLarge: 'icon-catalogues_over',
      width: 600,
      height: 400,
      component: 'system/demo2',
      title: 'demo2'
    };
    this.windowService.newWindow(windowConfig);
  }

  demo3(): void {
    const windowConfig = {
      icon: 'icon-contacts',
      iconLarge: 'icon-contacts_over',
      width: 1000,
      height: 800,
      left: 30,
      top: 30,
      component: 'system/demo3',
      title: 'demo3',
      hasStatusBar: true,
      hasRibbon: true,
      ribbonHasPriority: true
    };
    this.windowService.newWindow(windowConfig);
  }

  demo4(): void {
    const windowConfig = {
      icon: 'icon-cog',
      iconLarge: 'icon-cog_over',
      width: 960,
      height: 570,
      component: 'system/demo4',
      title: 'demo4'
    };
    this.windowService.newWindow(windowConfig);
  }

  demo1InPanel(): void {
    const windowConfig = {
      icon: 'icon-alarm',
      iconLarge: 'icon-alarm',
      width: 400,
      height: 200,
      component: 'system/demo1',
      title: 'demo1',
      panel: '10acbeb6-0bff-41bd-8b49-57e4718c0f95'
    };
    this.windowService.newWindow(windowConfig);
  }

  demo2InPanel(): void {
    const windowConfig = {
      icon: 'icon-catalogues',
      iconLarge: 'icon-catalogues_over',
      width: 400,
      height: 200,
      component: 'system/demo2',
      title: 'demo2',
      panel: '10acbeb6-0bff-41bd-8b49-57e4718c0f95'
    };
    this.windowService.newWindow(windowConfig);
  }

  demo3InPanel(): void {
    const windowConfig = {
      icon: 'icon-contacts',
      iconLarge: 'icon-contacts_over',
      width: 400,
      height: 200,
      component: 'system/demo3',
      title: 'demo3',
      panel: '10acbeb6-0bff-41bd-8b49-57e4718c0f95'
    };
    this.windowService.newWindow(windowConfig);
  }

  demo4InPanel(): void {
    const windowConfig = {
      icon: 'icon-cog',
      iconLarge: 'icon-cog_over',
      width: 960,
      height: 570,
      component: 'system/demo4',
      title: 'demo4',
      panel: '10acbeb6-0bff-41bd-8b49-57e4718c0f95'
    };
    this.windowService.newWindow(windowConfig);
  }

  demo1Hide(): void {
    const windowConfig = {
      lockToMode: true,
      icon: 'icon-alarm',
      width: 400,
      height: 200,
      component: 'system/demo1',
      title: 'demo1'
    };
    this.windowService.newWindow(windowConfig);
  }

  demo1Delete(): void {
    const windowConfig = {
      lockToMode: true,
      deleteOnModeChange: true,
      icon: 'icon-alarm',
      width: 400,
      height: 200,
      component: 'system/demo1',
      title: 'demo1'
    };
    this.windowService.newWindow(windowConfig);
  }

  newToast(type): void {
    const toastConfig = {
      title: 'Demo Toast',
      body: 'This is a test toast',
      autoClose: 5000,
      type
    };
    this.toastService.newToast(toastConfig);
  }

  newToastSticky(type): void {
    const toastConfig = {
      title: 'Demo Toast',
      body: 'This is a test toast',
      type
    };
    this.toastService.newToast(toastConfig);
  }

  newDialog(): void {
    const dialogConfig = {
      title: 'Dialog Title',
      body: 'Body Content - Are you sure you want to do that action ?',
      buttons: [
        {
          label: 'cancel',
          class: 'p-button-secondary',
          action: 'cancel',
          callBack: this.alertDialog,
          args: {return: ['demo', 'demo2', 'demo3'], demo: 'testing'}
        },
        {
          label: 'ok',
          class: 'p-button-info',
          action: 'cancel',
          callBack: this.alertDialog,
          args: 'demo'
        },
        {
          label: 'ok',
          class: 'p-button-warning',
          action: 'cancel',
          callBack: this.alertDialog,
          args: 'demo'
        },
        {
          label: 'ok',
          class: 'p-button-danger',
          action: 'cancel',
          callBack: this.alertDialog,
          args: 'demo focused',
          focus: true
        },
        {
          label: 'ok',
          class: 'p-button-success',
          action: 'cancel',
          callBack: this.alertDialog,
          args: 'demo'
        }
      ]
    };
    this.dialogService.newDialog(dialogConfig);
  }

  newDialogForm(): void {
    const dialogConfig = {
      title: 'Dialog Title',
      body: 'Body Content - Are you sure you want to do that action ?',
      fields: [
        {
          name: 'panelName',
          label: 'panelName',
          value: this.helperService.createRandomWord(6),
          type: 'text'
        },
        {
          name: 'left',
          label: 'left',
          value: '75',
          type: 'number'
        },
        {
          name: 'width',
          label: 'width',
          value: '25',
          type: 'number'
        },

      ],
      buttons: [
        {
          label: 'cancel',
          action: 'cancel',
          class: 'p-button-secondary',
          callBack: this.alertDialog,
          args: {return: ['demo', 'demo2', 'demo3'], demo: 'testing'}
        },
        {
          label: 'ok',
          class: 'p-button-info',
          action: 'cancel',
          callBack: this.alertDialog,
          args: 'demo'
        },
        {
          label: 'ok',
          class: 'p-button-danger',
          action: 'cancel',
          callBack: this.alertDialog,
          args: 'demo'
        },
        {
          label: 'ok',
          class: 'error',
          action: 'p-button-danger',
          callBack: this.alertDialog,
          args: 'demo focused',
          focus: true
        },
        {
          label: 'ok',
          class: 'p-button-success',
          action: 'cancel',
          callBack: this.alertDialog,
          args: 'demo'
        }
      ]
    };
    this.dialogService.newDialog(dialogConfig);
  }

  alertDialog(service, str): void {
    console.log(str);
  }

  newPanelUuid(): void {
    const panelConfig = {
      uuid: '10acbeb6-0bff-41bd-8b49-57e4718c0f95',
      title: 'system',
      hasRibbon: true,
      dock: 'custom',
      closable: false,
      dockPosition: {
        top: 0,
        left: 75,
        width: 25,
        height: 100
      }
    };
    this.panelService.newPanel(panelConfig);
  }

  newPanel(): void {
    const dialogConfig = {
      title: 'newPanel',
      body: 'pleaseSpecifyYourPanelName',
      fields: [
        {
          name: 'panelName',
          label: 'panelName',
          value: this.helperService.createRandomWord(6),
          type: 'text'
        },
        {
          name: 'left',
          label: 'left',
          value: '75',
          type: 'number'
        },
        {
          name: 'width',
          label: 'width',
          value: '25',
          type: 'number'
        },

      ],
      buttons: [
        {
          label: 'cancel',
          action: 'cancel',
          class: 'p-button-secondary'
        },
        {
          label: 'createPanel',
          class: 'p-button-success',
          action: 'cancel',
          callBack: this.newPanelAction,
          service: this.panelService
        }
      ]
    };
    this.dialogService.newDialog(dialogConfig);
  }

  newPanelNoClose(): void {
    const dialogConfig = {
      title: 'newPanel',
      body: 'pleaseSpecifyYourPanelName',
      closable: false,
      fields: [
        {
          name: 'panelName',
          label: 'panelName',
          value: this.helperService.createRandomWord(6),
          type: 'text'
        },
        {
          name: 'left',
          label: 'left',
          value: '75',
          type: 'number'
        },
        {
          name: 'width',
          label: 'width',
          value: '25',
          type: 'number'
        },

      ],
      buttons: [
        {
          label: 'cancel',
          action: 'cancel',
          class: 'p-button-secondary'
        },
        {
          label: 'createPanel',
          class: 'p-button-success',
          action: 'cancel',
          callBack: this.newPanelAction,
          service: this.panelService,
          args: {closable: false}
        }
      ]
    };
    this.dialogService.newDialog(dialogConfig);
  }

  newPanelAction(service, args): void {

    const panelConfig = {
      title: args.panelName,
      hasRibbon: true,
      dock: 'custom',
      closable: args.closable,
      dockPosition: {
        top: 0,
        left: args.left,
        width: args.width,
        height: 100
      }
    };
    service.newPanel(panelConfig);
  }

  setItem(object): void {
    this.systemService.set(object);
  }


  deleteItem(key): void {
    this.systemService.delete(key);
  }

  setItemApp(object): void {
    this.systemService.setApp(object);
  }

  deleteItemApp(key): void {
    this.systemService.deleteApp(key);
  }

  addStatusBar(): void {
    this.windowService.addStatusBar(this.windowItem);
    this.windowService.setStatus(this.windowItem, this.statusBarText);
    this.update.emit('');
  }

  removeStatusBar(): void {
    this.windowService.removeStatusBar(this.windowItem);
    this.update.emit('');
  }

  addFooter(): void {
    this.windowService.addFooter(this.windowItem);
    this.update.emit('');
  }

  removeFooter(): void {
    this.windowService.removeFooter(this.windowItem);
    this.update.emit('');
  }

  closeWindow(): void {
    this.windowService.closeWindow(this.windowItem.uuid);
  }

  stressTest(): void {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        this.demo1();
      }, 100 * i);
    }
  }

  apiError(url): void {
    this.apiService.call(url, 'get', {}).subscribe(
      result => {
        /* we got an error */
        if (typeof result.error === 'string') {
          if (result.status === 400) {
            const toastConfig = {
              title: result.error,
              body: result.statusText,
              type: 'error'
            };
            this.toastService.newToast(toastConfig);
          }

          if (result.status === 404) {
            const toastConfig = {
              title: result.error,
              body: result.statusText,
              type: 'info'
            };
            this.toastService.newToast(toastConfig);
          }
        } else {
          const toastConfig = {
            title: result.status,
            body: result.response,
            type: 'success'
          };
          this.toastService.newToast(toastConfig);
        }
      }
    );
  }
}


@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [DemoComponent]
})

export class DemoModule {
}
