import {AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PanelService} from '../../../../services/panel.service';
import {LanguageService} from '../../../../services/language.service';
import {Subscription} from 'rxjs';
import {WindowService} from '../../../../services/window.service';
import {DesktopService} from '../../../../services/desktop.service';
import {DialogService} from '../../../../services/dialog.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() panelItem;
  @Input() desktopDimensions;
  @ViewChild('componentArea', {read: ElementRef}) componentArea: ElementRef;

  objectValues = Object.values;

  windowList = {};

  resizeDirection: any;
  resizePanelItem: any = null;
  dragPanelItem: any = null;

  panelList = {};
  locale: any;
  padding = 6;
  dockLeft = 0;
  dockTop = 0;
  dockWidth = 90;
  dockHeight = 90;
  maxLeft = 90;
  maxWidth = 90;
  maxTop = 90;
  maxHeight = 90;
  private startX: number;
  private startY: number;
  private element: any;
  private langSub$: Subscription;
  showMenu: boolean;
  private desktopSub$: Subscription;
  dimensions;
  windowLocale;
  hovered: boolean;

  constructor(
    private desktopService: DesktopService,
    private panelService: PanelService,
    private languageService: LanguageService,
    public windowService: WindowService,
    private dialogService: DialogService
  ) {
  }

  ngOnInit(): void {
    this.windowList = this.windowService.windowList;
    this.panelList = this.panelService.panelList;
    this.desktopSub$ = this.desktopService.dimensions.subscribe(data => {
      this.dimensions = data;
    });

    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.desktop.panel;
      this.windowLocale = locale.desktop.window;
    });

    if (this.panelItem.dockPosition !== null) {
      this.dockLeft = this.panelItem.dockPosition.left || 0;
      this.dockTop = this.panelItem.dockPosition.top || 0;
      this.dockWidth = this.panelItem.dockPosition.width || 90;
      this.dockHeight = this.panelItem.dockPosition.height || 90;
    }
  }

  ngOnDestroy(): void {
    this.langSub$.unsubscribe();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.componentArea.nativeElement.scrollTop = this.panelItem.scrollTop;
    });
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event): void {
    if (this.resizePanelItem !== null) {
      this.resizeGo(event);
    }
    if (this.dragPanelItem !== null) {
      this.moveGo(event);
    }
  }

  @HostListener('document:mouseup') onMouseUp(): void {
    if (this.resizePanelItem !== null) {
      this.resizeStop();
    }
    if (this.dragPanelItem !== null) {
      this.moveStop();
    }
  }

  @HostListener('document:touchmove', ['$event']) onTouchMove(event): void {
    if (this.resizePanelItem !== null) {
      this.resizeGo(event);
    }
    if (this.dragPanelItem !== null) {
      this.moveGo(event);
    }
  }

  @HostListener('document:touchend') onTouchEnd(): void {
    if (this.resizePanelItem !== null) {
      this.resizeStop();
    }
    if (this.dragPanelItem !== null) {
      this.moveStop();
    }
  }

  sort(object): any {
    return Object.keys(object)
      .sort((a, b) => object[a].sortBy - object[b].sortBy)
      .map(k => object[k]);
  }

  resizeCursorSet(event): void {
    if (!event.target.classList.contains('panelItem') || this.panelItem.resizable === false) {
      return;
    }

    if (
      this.resizePanelItem === null
    ) {
      const xOff = event.offsetX;
      const yOff = event.offsetY;
      const resizeCornerSize = 15;
      this.resizeDirection = '';

      if (yOff <= resizeCornerSize) {
        this.resizeDirection += 'n';
      } else {
        if (yOff >= event.target.offsetHeight - resizeCornerSize) {
          this.resizeDirection += 's';
        }
      }

      if (xOff <= resizeCornerSize) {
        this.resizeDirection += 'w';
      } else {
        if (xOff >= event.target.offsetWidth - resizeCornerSize) {
          this.resizeDirection += 'e';
        }
      }
      document.body.style.cursor = this.resizeDirection + '-resize';

      if (this.resizeDirection === 'n' || this.resizeDirection === 's') {
        document.body.style.cursor = 'ns-resize';
      }

      if (this.resizeDirection === 'e' || this.resizeDirection === 'w') {
        document.body.style.cursor = 'ew-resize';
      }

    } else {
      this.resizeCursorRestore();
    }
  }

  resizeCursorRestore(): void {
    document.body.style.cursor = '';
  }

  resizeTouchStart(event): void {
    const xOff = event.layerX;
    const yOff = event.layerY;

    const resizeCornerSize = 15;
    this.resizeDirection = '';

    if (yOff <= resizeCornerSize) {
      this.resizeDirection += 'n';
    } else {
      if (yOff >= event.target.offsetHeight - resizeCornerSize) {
        this.resizeDirection += 's';
      }
    }

    if (xOff <= resizeCornerSize) {
      this.resizeDirection += 'w';
    } else {
      if (xOff >= event.target.offsetWidth - resizeCornerSize) {
        this.resizeDirection += 'e';
      }
    }
    this.resizeStart(event);
  }

  resizeStart(event): void {
    if (event.target.classList.contains('panelItem')) {
      this.resizePanelItem = this.panelItem;

      this.resizePanelItem.entities.xPosition = event.x || event.pageX;
      this.resizePanelItem.entities.yPosition = event.y || event.pageY;

      this.resizePanelItem.entities.left = parseInt(this.resizePanelItem.left, 10);
      this.resizePanelItem.entities.top = parseInt(this.resizePanelItem.top, 10);
      this.resizePanelItem.entities.width = parseInt(this.resizePanelItem.width, 10);
      this.resizePanelItem.entities.height = parseInt(this.resizePanelItem.height, 10);
    }
  }

  resizeGo(event): void {
    if (this.resizePanelItem !== null) {
      document.body.classList.add('blockSelect');

      let north = false;
      let south = false;
      let east = false;
      let west = false;
      if (this.resizeDirection.charAt(0) === 'n') {
        north = true;
      }
      if (this.resizeDirection.charAt(0) === 's') {
        south = true;
      }
      if (this.resizeDirection.charAt(0) === 'e' || this.resizeDirection.charAt(1) === 'e') {
        east = true;
      }
      if (this.resizeDirection.charAt(0) === 'w' || this.resizeDirection.charAt(1) === 'w') {
        west = true;
      }

      let x = event.pageX;
      let y = event.pageY;

      // if (x <= 5) {
      //   x = 5;
      // }

      if (x >= this.desktopDimensions.width - 4) {
        x = this.desktopDimensions.width - 4;
      }

      if (y <= this.desktopDimensions.top + (2 - this.padding)) {
        y = this.desktopDimensions.top + (2 - this.padding);
      }

      if (y >= this.desktopDimensions.height + this.desktopDimensions.top - (this.padding - 2)) {
        y = this.desktopDimensions.height + this.desktopDimensions.top - (this.padding - 2);
      }

      if (this.resizePanelItem.centered) {
        this.resizePanelItem.centered = false;
      }

      let dx = x - this.resizePanelItem.entities.xPosition;
      let dy = y - this.resizePanelItem.entities.yPosition;

      if (west) {
        dx = -dx;
      }
      if (north) {
        dy = -dy;
      }

      let w = this.resizePanelItem.entities.width + dx;
      let h = this.resizePanelItem.entities.height + dy;
      if (w <= this.resizePanelItem.minimumWidth) {
        w = this.resizePanelItem.minimumWidth;
        dx = w - this.resizePanelItem.entities.width;
      }
      if (h <= this.resizePanelItem.minimumHeight) {
        h = this.resizePanelItem.minimumHeight;
        dy = h - this.resizePanelItem.entities.height;
      }

      if (north || east || south || west) {
        this.resizePanelItem.noTransition = true;
      }

      if (east || west) {
        this.resizePanelItem.width = w;
      }
      if (north || south) {
        this.resizePanelItem.height = h;
      }

      if (west) {
        this.resizePanelItem.left = (this.resizePanelItem.entities.left - dx);
      }
      if (north) {
        this.resizePanelItem.top = (this.resizePanelItem.entities.top - dy);
      }
    }

    document.body.style.cursor = this.resizeDirection + '-resize';

    if (this.resizeDirection === 'n' || this.resizeDirection === 's') {
      document.body.style.cursor = 'ns-resize';
    }

    if (this.resizeDirection === 'e' || this.resizeDirection === 'w') {
      document.body.style.cursor = 'ew-resize';
    }

  }

  resizeStop(): void {

    // this.transitionEnd(this.resizePanelItem);
    if (this.resizePanelItem !== null) {
      delete this.resizePanelItem.noTransition;
      this.resizePanelItem.entities = {};
      this.resizePanelItem = null;
    }
    document.body.style.cursor = '';
    document.body.classList.remove('blockSelect');
  }


  getTranslate(item): any {
    const transArr = [];

    if (!window.getComputedStyle) {
      return;
    }
    const style = window.getComputedStyle(item);
    // @ts-ignore
    const transform = style.transform || style.webkitTransform || style.mozTransform || style.msTransform;
    let mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
      return parseFloat(mat[1].split(', ')[13]);
    }

    mat = transform.match(/^matrix\((.+)\)$/);
    mat ? transArr.push(parseInt(mat[1].split(', ')[4], 10)) : transArr.push(0);
    mat ? transArr.push(parseInt(mat[1].split(', ')[5], 10)) : transArr.push(0);

    return transArr;
  }

  moveStart(event): boolean {
    if (event.target.nodeName === 'BUTTON') {
      return false;
    }

    this.dragPanelItem = this.panelItem;

    const x = event.pageX - 7;
    const y = event.pageY - 9;

    this.startX = x;
    this.startY = y;

    let element = event.target;
    while (!element.classList.contains('titleBarMove')) {
      element = element.parentNode;
    }
    this.element = element;
    this.dragPanelItem.entities.xOffset = this.getTranslate(element.parentNode.parentNode)[0] - x;
    this.dragPanelItem.entities.yOffset = this.getTranslate(element.parentNode.parentNode)[1] - y;
    this.dragPanelItem.noTransition = true;
  }

  moveGo(event): void {
    if (this.dragPanelItem !== null) {

      if (this.dragPanelItem.dock) {

        const xPos = event.pageX - 7;
        const yPos = event.pageY - 9;


        if (Math.abs(this.startX - xPos) > 20 || Math.abs(this.startY - yPos) > 20) {

          const style = window.getComputedStyle(this.element.parentNode.parentNode);
          this.dragPanelItem.entities.xOffset = parseInt(style.left, 10) - 7 - xPos;
          this.dragPanelItem.entities.yOffset = parseInt(style.top, 10) - 9 - yPos;
          this.dragPanelItem.height = parseInt(style.height, 10);
          this.dragPanelItem.width = parseInt(style.width, 10);
          this.dragPanelItem.noTransition = true;

          this.unDockPanel();
        }

      }

      document.body.classList.add('blockSelect');
      document.body.style.cursor = 'move';
      this.dragPanelItem.centered = false;

      const x = event.pageX;
      const y = event.pageY;

      let xOff = (x + this.dragPanelItem.entities.xOffset);
      let yOff = (y + this.dragPanelItem.entities.yOffset);
      if (yOff <= 3) {
        yOff = 3;
      }

      if (yOff > this.desktopDimensions.height - 75) {
        yOff = this.desktopDimensions.height - 75;
      }

      if (xOff + this.dragPanelItem.width - 60 < 0) {
        xOff = 0 - this.dragPanelItem.width + 60;
      }

      if (xOff + 35 > this.desktopDimensions.width) {
        xOff = this.desktopDimensions.width - 35;
      }

      this.dragPanelItem.left = parseInt(xOff, 10);
      this.dragPanelItem.top = parseInt(yOff, 10);
    }
  }

  moveStop(): void {
    if (this.dragPanelItem !== null) {
      delete this.dragPanelItem.noTransition;
      this.dragPanelItem.entities = {};
      this.dragPanelItem = null;
    }
    document.body.classList.remove('blockSelect');
    this.resizeCursorRestore();
  }


  closePanel(event: MouseEvent): void {
    event.stopPropagation();
    const windows = this.windowService.findWindowByPanelId(this.panelItem.uuid);
    if (windows.length > 0) {
      const dialogConfig = {
        title: 'closePanel',
        body: 'doYouWantToCloseTheWindows',
        buttons: [
          {
            label: 'cancel',
            action: 'cancel'
          },
          {
            label: 'closeWindows',
            class: 'info',
            action: 'cancel',
            callBack: this.closePanelAction,
            service: [this.panelService, this.windowService],
            args: [this.windowList, event, true, this.panelItem]
          },
          {
            label: 'keepWindows',
            class: 'success',
            action: 'cancel',
            callBack: this.closePanelAction,
            service: [this.panelService, this.windowService],
            args: [this.windowList, event, false, this.panelItem]
          }
        ]
      };
      this.dialogService.newDialog(dialogConfig);
    } else {
      this.closePanelAction([this.panelService, this.windowService], [this.windowList, event, false, this.panelItem]);
    }
  }

  closePanelAction(service, args): void {
    if (args[2] === true) {
      service[1].closeByPanelId(args[3].uuid);
    } else {
      service[1].removeFromPanelById(args[3].uuid);
    }
    service[0].closePanel(args[3].uuid);
  }

  dockWindow(pos: string): void {
    if (this.panelItem.dock) {
      if (this.panelItem.dock === pos) {
        delete this.panelItem.dock;
      } else {
        this.panelItem.dock = pos;
      }
    } else {
      this.panelItem.dock = pos;
    }
    this.showMenu = false;
  }

  unDockPanel(): void {
    delete this.panelItem.dock;
    delete this.panelItem.dockPosition;
    this.showMenu = false;
  }

  setLeft(): void {
    this.maxWidth = 100 - this.dockLeft;
    if (this.maxWidth < this.dockWidth) {
      this.dockWidth = this.maxWidth;
    }
  }

  setWidth(): void {
    this.maxLeft = 100 - this.dockWidth;
    if (this.maxLeft < this.dockLeft) {
      this.dockLeft = this.maxLeft;
    }
  }


  setTop(): void {
    this.maxHeight = 100 - this.dockTop;
    if (this.maxHeight < this.dockHeight) {
      this.dockHeight = this.maxHeight;
    }
  }

  setHeight(): void {
    this.maxTop = 100 - this.dockHeight;
    if (this.maxTop < this.dockTop) {
      this.dockTop = this.maxTop;
    }
  }

  setDockPosition(): void {
    this.panelItem.dock = 'custom';
    this.panelItem.dockPosition = {
      top: this.dockTop,
      left: this.dockLeft,
      width: this.dockWidth,
      height: this.dockHeight
    };

    this.showMenu = false;
  }

  setActive(event, windowItem: any): void {
    this.windowService.setActive(event, windowItem.uuid);
    // const elm = document.getElementById(windowItem.uuid);
    //
    // clearInterval(this.scrolltimer);
    // const top = elm.offsetTop;
    // setTimeout(() => {
    //   if (elm.parentElement.parentElement.scrollTop > top) {
    //     elm.parentElement.parentElement.scrollTop = top;
    //   } else {
    //     elm.parentElement.parentElement.scrollTop = top;
    //   }
    // }, 100);

  }

  mouseOver(event: MouseEvent): void {
    if (this.windowService.dragWindow) {
      if (this.windowService.dragWindow.dockInPanel) {
        this.hovered = true;
      }
    }

    this.windowService.dragPanel = this.panelItem.uuid;
  }

  mouseOut(event: MouseEvent): void {
    this.hovered = false;
    this.windowService.dragPanel = null;
  }

  setScroll(event: Event): void {
    // @ts-ignore
    this.panelItem.scrollTop = event.target.scrollTop;
  }
}
