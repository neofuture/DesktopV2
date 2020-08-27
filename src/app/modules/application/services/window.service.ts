import {Injectable} from '@angular/core';
import {DesktopService} from './desktop.service';
import {DialogService} from './dialog.service';
import {HelperService} from './helper.service';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {SystemService} from './system.service';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  windowList = {};
  dragWindow;
  dragPanel;
  private desktopDimensions;
  private runState: { mode: number; multiSelect: boolean };
  mode;

  constructor(
    private desktopService: DesktopService,
    private dialogService: DialogService,
    private helperService: HelperService,
    private scrollToService: ScrollToService,
    private systemService: SystemService
  ) {
    this.desktopService.dimensions.subscribe(data => {
      this.desktopDimensions = data;
    });
    this.systemService.runState.subscribe(data => {
      this.runState = data;
      this.checkModeState(this.runState.mode);
    });
  }

  setMode(): void {
    this.checkModeState(0);
    setTimeout(() => {
      this.checkModeState(this.runState.mode);
    }, 200);
  }

  checkModeState(mode): void {
    if (mode !== this.mode) {
      this.mode = mode;

      for (const key of Object.keys(this.windowList)) {
        if (typeof this.windowList[key] !== 'undefined') {
          if (this.windowList[key].closable && this.windowList[key].lockToMode !== 0) {

            if (this.windowList[key].lockToMode === mode) {
              setTimeout(() => {
                this.windowList[key].visible = true;
              });
              this.windowList[key].hidden = false;
            } else {
              this.windowList[key].visible = false;
              setTimeout(() => {
                this.windowList[key].hidden = true;
                if (this.windowList[key].deleteOnModeChange) {
                  setTimeout(() => {
                    delete this.windowList[key];
                  });
                }
              }, 200);
            }
          }
        }

      }

    }
  }

  newWindow(windowConfig): void {

    for (const key in this.windowList) {
      if (this.windowList[key].singleInstance === windowConfig.singleInstance && windowConfig.singleInstance !== null) {
        this.setActive(null, key);
        return;
      }
    }

    const width = typeof windowConfig.width === 'undefined' ? this.randomIntFromInterval(400, 800) : windowConfig.width;
    const height = typeof windowConfig.height === 'undefined' ? this.randomIntFromInterval(200, 400) : windowConfig.height;

    let top = typeof windowConfig.top === 'undefined' ? this.randomIntFromInterval(10, 300) : windowConfig.top;
    let left = typeof windowConfig.left === 'undefined' ? this.randomIntFromInterval(10, 300) : windowConfig.left;

    const uuid = this.helperService.uuidV4();
    // const icon = this.icons[this.randomIntFromInterval(0, this.icons.length - 1)];

    let h = this.desktopDimensions.height;
    let w = this.desktopDimensions.width;
    if (windowConfig.systemWindow) {
      w = window.innerWidth;
      h = window.innerHeight;
    }

    if (windowConfig.centered) {
      top = h / 2 - height / 2;
      if (top < 0) {
        top = 0;
      }
      left = w / 2 - width / 2;
      if (left < 0) {
        left = 0;
      }
    }

    this.windowList[uuid] = {
      uuid,
      lockToMode: typeof windowConfig.lockToMode === 'undefined' ? 0 : this.runState.mode,
      deleteOnModeChange: typeof windowConfig.deleteOnModeChange === 'undefined' ? false : windowConfig.deleteOnModeChange,
      hidden: false,
      visible: true,
      icon: windowConfig.icon || 'icon-oceanworks',
      iconLarge: windowConfig.iconLarge ? windowConfig.iconLarge : (windowConfig.icon || 'icon-oceanworks'),
      height,
      width,
      componentHeight: 0,
      componentWidth: 0,
      minimumHeight: typeof windowConfig.minimumHeight === 'undefined' ? 20 : windowConfig.minimumHeight,
      minimumWidth: typeof windowConfig.minimumWidth === 'undefined' ? 40 : windowConfig.minimumWidth,
      left,
      top,
      zIndex: 2,
      active: false,

      resizable: typeof windowConfig.resizable === 'undefined' ? true : windowConfig.resizable,
      closable: typeof windowConfig.closable === 'undefined' ? true : windowConfig.closable,

      centered: windowConfig.centered || false,
      title: windowConfig.title || ' - ',
      extendedTitle: windowConfig.extendedTitle || '',
      status: this.helperService.createRandomWord(this.randomIntFromInterval(3, 10)),
      entities: {},
      memory: {},
      state: {
        isMaximised: false,
        isMinimised: false
      },
      area: {
        ratio: false,
        width: 0,
        height: 0,
      },
      unsaved: false,
      hasTab: typeof windowConfig.hasTab === 'undefined' ? true : windowConfig.hasTab,
      hasDockMenu: typeof windowConfig.hasDockMenu === 'undefined' ? true : windowConfig.hasDockMenu,
      hasTitleBar: typeof windowConfig.hasTitleBar === 'undefined' ? true : windowConfig.hasTitleBar,
      hasControls: typeof windowConfig.hasControls === 'undefined' ? true : windowConfig.hasControls,
      hasStatusBar: typeof windowConfig.hasStatusBar === 'undefined' ? false : windowConfig.hasStatusBar,
      hasLanguageSelector: typeof windowConfig.hasLanguageSelector === 'undefined' ? false : windowConfig.hasLanguageSelector,
      component: windowConfig.component,
      loaded: false,
      alwaysOnTop: typeof windowConfig.alwaysOnTop === 'undefined' ? false : windowConfig.alwaysOnTop,
      alwaysOnBottom: typeof windowConfig.alwaysOnBottom === 'undefined' ? false : windowConfig.alwaysOnBottom,
      singleInstance: typeof windowConfig.singleInstance === 'undefined' ? null : windowConfig.singleInstance,
      autoClose: windowConfig.autoClose || null,
      alwaysActive: windowConfig.alwaysActive || null,
      systemWindow: windowConfig.systemWindow || null,
      dock: typeof windowConfig.dock === 'undefined' ? null : windowConfig.dock,
      dockPosition: typeof windowConfig.dockPosition === 'undefined' ? null : windowConfig.dockPosition,
      panel: typeof windowConfig.panel === 'undefined' ? null : windowConfig.panel,
      hasRibbon: typeof windowConfig.hasRibbon === 'undefined' ? false : windowConfig.hasRibbon,
      ribbonHasPriority: typeof windowConfig.ribbonHasPriority === 'undefined' ? false : windowConfig.ribbonHasPriority,
      hasFooter: typeof windowConfig.hasFooter === 'undefined' ? false : windowConfig.hasFooter
    };

    if (windowConfig.autoClose) {
      setTimeout(() => {
        this.closeWindow(uuid);
      }, windowConfig.autoClose);
    }

    setTimeout(() => {
      this.windowList[uuid].open = true;
      this.setActive(null, uuid);
    }, 100);

  }

  setLoaded(uuid): void {
    setTimeout(() => {
      this.windowList[uuid].hideLoader = true;
      setTimeout(() => {
        this.windowList[uuid].loaded = true;
        this.windowList[uuid].hideLoader = false;
      }, 310);
    });
  }

  setActive(event, uuid): void {
    let zIndex = 0;
    for (const key of Object.keys(this.windowList)) {
      if (!this.windowList[key].alwaysOnTop && !this.windowList[key].alwaysOnBottom) {
        if (this.windowList[key].zIndex > zIndex) {
          zIndex = this.windowList[key].zIndex;
        }
      }
      this.windowList[key].active = false;
    }
    if (!this.windowList[uuid].alwaysOnTop && !this.windowList[uuid].alwaysOnBottom) {
      zIndex++;
      this.windowList[uuid].zIndex = zIndex;
    }
    this.windowList[uuid].active = true;
    this.windowList[uuid].state.isMinimised = false;

    if (event !== null) {
      if (this.windowList[uuid].panel && (event.target.classList.contains('titleBarText') || event.target.classList.contains('icon'))) {
        const config: ScrollToConfigOptions = {
          container: this.windowList[uuid].panel,
          target: uuid,
          duration: 1000
        };
        this.scrollToService.scrollTo(config);
      }
    }
  }

  setUnSaved(uuid: string, saved: boolean): void {
    this.windowList[uuid].unsaved = saved;
  }

  setAlwaysActive(uuid: any, alwaysActive: boolean): void {
    this.windowList[uuid].alwaysActive = alwaysActive;
  }

  closeWindow(uuid: string): void {
    if (typeof this.windowList[uuid] === 'undefined') {
      return;
    }
    if (this.windowList[uuid].unsaved) {
      const dialogConfig = {
        title: 'closeWindow',
        body: 'youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow',
        buttons: [
          {
            label: 'cancel',
            action: 'cancel'
          },
          {
            label: 'close',
            class: 'info',
            action: 'cancel',
            focus: true,
            callBack: () => {
              this.closeWindowAction(uuid);
            }
          }
        ]
      };
      this.dialogService.newDialog(dialogConfig);
    } else {
      this.closeWindowAction(uuid);
    }

  }

  closeWindowAction(uuid: string): void {
    this.windowList[uuid].open = false;
    setTimeout(() => {
      delete this.windowList[uuid];
    }, 310);
  }

  randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  addRibbon(windowItem): void {
    windowItem.hasRibbon = true;
  }

  removeRibbon(windowItem): void {
    windowItem.hasRibbon = false;
  }

  addFooter(windowItem): void {
    windowItem.hasFooter = true;
  }

  removeFooter(windowItem): void {
    windowItem.hasFooter = false;
  }

  addStatusBar(windowItem): void {
    windowItem.hasStatusBar = true;
  }

  removeStatusBar(windowItem): void {
    windowItem.hasStatusBar = false;
  }

  setSize(): void {
    for (const windowItem of Object.keys(this.windowList)) {
      if (this.windowList[windowItem].state.isMaximised === false) {
        this.windowList[windowItem].noTransition = true;

        let height = this.desktopDimensions.height;
        let width = this.desktopDimensions.width;
        if (this.windowList[windowItem].systemWindow) {
          width = window.innerWidth;
          height = window.innerHeight;
        }

        if (this.windowList[windowItem].centered) {
          let top = height / 2 - this.windowList[windowItem].height / 2;
          if (top < 0) {
            top = 0;
          }
          let left = width / 2 - this.windowList[windowItem].width / 2;
          if (left < 0) {
            left = 0;
          }
          this.windowList[windowItem].top = top;
          this.windowList[windowItem].left = left;
        } else {
          if (this.windowList[windowItem].top > this.desktopDimensions.height - 60) {
            this.windowList[windowItem].top = this.desktopDimensions.height - 60;
          }
          if (this.windowList[windowItem].left > this.desktopDimensions.width - 75) {
            this.windowList[windowItem].left = this.desktopDimensions.width - 75;
          }
        }
        setTimeout(() => {
          if (typeof this.windowList[windowItem] !== 'undefined') {
            delete this.windowList[windowItem].noTransition;
          }

        }, 300);
      }

    }
  }

  closeAllWindows(): void {
    for (const windowItem of Object.keys(this.windowList)) {
      if (this.windowList[windowItem].singleInstance !== 'system/user/user-login') {
        this.closeWindow(windowItem);
      }
    }
  }

  closeByPanelId(uuid): void {
    for (const windowItem of Object.keys(this.windowList)) {
      if (this.windowList[windowItem].panel === uuid) {
        this.closeWindow(windowItem);
      }
    }
  }

  findWindowByPanelId(uuid): any {
    const windowsList = [];
    for (const windowItem of Object.keys(this.windowList)) {
      if (this.windowList[windowItem].panel === uuid) {
        windowsList.push(this.windowList[windowItem]);
      }
    }
    return windowsList;
  }


  removeFromPanelById(uuid): void {
    for (const windowItem of Object.keys(this.windowList)) {
      if (this.windowList[windowItem].panel === uuid) {
        delete this.windowList[windowItem].panel;
      }
    }
  }

  dockInPanel(windowItem, uuid: any): void {
    windowItem.sortBy = Math.round(Date.now() / 1000);
    windowItem.panel = uuid;
  }

  removeFromPanel(windowItem: any): void {
    delete windowItem.panel;
  }

  setWindowList(windows: any): void {
    for (const windowItem of Object.keys(this.windowList)) {
      delete this.windowList[windowItem];
    }
    // tslint:disable-next-line:forin
    for (const uuid in windows) {
      this.windowList[uuid] = windows[uuid];
    }
  }
}
