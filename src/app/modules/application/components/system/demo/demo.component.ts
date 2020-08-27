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
import {ButtonModule} from 'primeng';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Input() windowItem;
  @Output() update = new EventEmitter();
  private langSub$: Subscription;
  private company: string;
  private product: string;

  constructor(
    private windowService: WindowService,
    public panelService: PanelService,
    private dialogService: DialogService,
    private desktopService: DesktopService,
    private toastService: ToastService,
    private languageService: LanguageService,
    private helperService: HelperService,
    private systemService: SystemService
  ) {
  }

  ngOnInit(): void {
    this.windowService.setLoaded(this.windowItem.uuid);
    this.langSub$ = this.languageService.language.subscribe(locale => {
      // this.locale = locale.desktop;
      this.company = locale.company;
      this.product = locale.product;
    });
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
      title: 'newWindow'
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
      width: 400,
      height: 200,
      component: 'system/demo1',
      title: 'demo1'
    };
    this.windowService.newWindow(windowConfig);
  }

  demo2(): void {
    const windowConfig = {
      icon: 'icon-catalogues',
      iconLarge: 'icon-catalogues_over',
      width: 400,
      height: 200,
      component: 'system/demo2',
      title: 'demo2'
    };
    this.windowService.newWindow(windowConfig);
  }

  demo3(): void {
    const windowConfig = {
      icon: 'icon-contacts',
      iconLarge: 'icon-contacts_over',
      width: 400,
      height: 200,
      component: 'system/demo3',
      title: 'demo3'
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

    console.log(args);

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
}


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ButtonModule
  ],
  declarations: [DemoComponent]
})

export class DemoModule {
}
