import {Injectable} from '@angular/core';
import {DesktopService} from './desktop.service';
import {DialogService} from './dialog.service';
import {HelperService} from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  panelList = {};
  private desktopDimensions;

  constructor(
    private desktopService: DesktopService,
    private helperService: HelperService
  ) {
    this.desktopService.dimensions.subscribe(data => {
      this.desktopDimensions = data;
    });
  }

  newPanel(panelConfig): void {

    const width = typeof panelConfig.width === 'undefined' ? this.randomIntFromInterval(200, 300) : panelConfig.width;
    const height = typeof panelConfig.height === 'undefined' ? this.randomIntFromInterval(600, 650) : panelConfig.height;

    let top = typeof panelConfig.top === 'undefined' ? this.randomIntFromInterval(10, 100) : panelConfig.top;
    let left = typeof panelConfig.left === 'undefined' ? this.randomIntFromInterval(10, 100) : panelConfig.left;

    let uuid = this.helperService.uuidV4();

    if (typeof panelConfig.uuid !== 'undefined') {
      if (this.panelList[panelConfig.uuid]) {
        console.log('panel with uuid ' + uuid + 'already exists');
        return;
      }
      uuid = panelConfig.uuid;
    }

    let h = this.desktopDimensions.height;
    let w = this.desktopDimensions.width;
    if (panelConfig.systemWindow) {
      w = window.innerWidth;
      h = window.innerHeight;
    }

    if (panelConfig.centered) {
      top = h / 2 - height / 2;
      if (top < 0) {
        top = 0;
      }
      left = w / 2 - width / 2;
      if (left < 0) {
        left = 0;
      }
    }



    this.panelList[uuid] = {
      uuid,
      height,
      width,
      minimumHeight: 200,
      minimumWidth: 200,
      hasRibbon: panelConfig.hasRibbon || null,
      left,
      top,
      title: panelConfig.title,
      resizable: typeof panelConfig.resizable === 'undefined' ? true : panelConfig.resizable,
      entities: {},
      hasDockMenu: typeof panelConfig.hasDockMenu === 'undefined' ? true : panelConfig.hasDockMenu,
      dock: typeof panelConfig.dock === 'undefined' ? null : panelConfig.dock,
      dockPosition: typeof panelConfig.dockPosition === 'undefined' ? null : panelConfig.dockPosition,
      closable: typeof panelConfig.closable === 'undefined' ? true : panelConfig.closable,
      scrollTop: 0
    };

    setTimeout(() => {
      this.panelList[uuid].open = true;
    }, 100);
  }

  closePanel(uuid: string): void {
    if (typeof this.panelList[uuid] === 'undefined') {
      return;
    }
    this.closePanelAction(uuid);
  }

  closePanelAction(uuid: string): void {
    this.panelList[uuid].open = false;
    setTimeout(() => {
      delete this.panelList[uuid];
    }, 310);
  }

  randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  closeAllPanels(): void {
    // tslint:disable-next-line:forin
    for (const uuid in this.panelList){
      delete this.panelList[uuid];
    }
  }

  setPanelList(panels: any): void {
    this.closeAllPanels();
    // tslint:disable-next-line:forin
    for (const uuid in panels){
      this.panelList[uuid] = panels[uuid];
    }
  }
}
