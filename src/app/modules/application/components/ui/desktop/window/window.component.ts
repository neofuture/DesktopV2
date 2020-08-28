import {
  AfterViewInit,
  Compiler,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {WindowService} from '../../../../services/window.service';
import {LanguageService} from '../../../../services/language.service';
import {DesktopService} from '../../../../services/desktop.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import {PanelService} from '../../../../services/panel.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit, AfterViewInit, OnDestroy {

  objectValues = Object.values;

  @Input() windowItem;
  @Input() desktopDimensions;

  @ViewChild('viewContainer', {read: ViewContainerRef}) viewContainer: ViewContainerRef;
  @ViewChild('componentContainer', {read: ElementRef}) componentContainer: ElementRef;
  resizeDirection: any;
  resizeWindowItem: any = null;
  dragWindowItem: any = null;
  iconCount: number;

  windowList = {};
  panelList = {};

  locale: any;
  padding = 6;
  showMenu = false;
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
  private view: any;

  constructor(
    private languageService: LanguageService,
    private windowService: WindowService,
    private compiler: Compiler,
    private desktopService: DesktopService,
    private panelService: PanelService,
    element: ElementRef
  ) {
    this.view = element.nativeElement;
  }

  private areaSource = new BehaviorSubject({});

  ngOnInit(): void {

    this.windowItem.area = this.areaSource.asObservable();


    this.windowList = this.windowService.windowList;
    this.panelList = this.panelService.panelList;
    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.desktop.window;
    });
    this.countIcons();

    if (this.windowItem.systemWindow) {
      this.desktopDimensions.width = window.innerWidth;
      this.desktopDimensions.height = window.innerHeight;
    }

    if (this.windowItem.dockPosition !== null) {
      this.dockLeft = this.windowItem.dockPosition.left || 0;
      this.dockTop = this.windowItem.dockPosition.top || 0;
      this.dockWidth = this.windowItem.dockPosition.width || 90;
      this.dockHeight = this.windowItem.dockPosition.height || 90;
    }

  }

  ngAfterViewInit(): void {
    this.loadComponent();
    this.setComponentSize();
  }

  ngOnDestroy(): void {
    this.langSub$.unsubscribe();
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event): void {
    if (this.resizeWindowItem !== null) {
      this.resizeGo(event);
    }
    if (this.dragWindowItem !== null) {
      this.moveGo(event);
    }
  }

  @HostListener('document:mouseup') onMouseUp(): void {
    if (this.resizeWindowItem !== null) {
      this.resizeStop();
    }
    if (this.dragWindowItem !== null) {
      this.moveStop();
    }
  }

  @HostListener('document:touchmove', ['$event']) onTouchMove(event): void {
    if (this.resizeWindowItem !== null) {
      this.resizeGo(event);
    }
    if (this.dragWindowItem !== null) {
      this.moveGo(event);
    }
  }

  @HostListener('document:touchend') onTouchEnd(): void {
    if (this.resizeWindowItem !== null) {
      this.resizeStop();
    }
    if (this.dragWindowItem !== null) {
      this.moveStop();
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEventDown(event): void {
    if (this.windowItem.active) {

      const focusable = this.view
        .querySelector('.container')
        .querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');

      if (event.code === 'Tab') {
        let c = 0;
        for (const item in focusable) {
          if (focusable[item] === document.activeElement) {
            if (event.shiftKey) {
              c = parseInt(item, 10) - 1;
            } else {
              c = parseInt(item, 10) + 1;
            }
          }
        }
        if (c > focusable.length - 1) {
          c = 0;
        }
        if (c < 0) {
          c = focusable.length - 1;
        }
        focusable[c].focus();
      }
    }
  }

  camelCase(myString): string {
    return myString.replace(/-([a-z])/g, (g) => {
      return g[1].toUpperCase();
    });
  }

  loadComponent(): void {
    const componentName = this.basename(this.windowItem.component);
    const compModule = this.camelCase(componentName.charAt(0).toUpperCase() + componentName.slice(1) + 'Module');
    const compComponent = this.camelCase(componentName.charAt(0).toUpperCase() + componentName.slice(1) + 'Component');

    import('../../../../components/' + this.windowItem.component + '/' + componentName + '.component').then(component => {
      const ngModuleFactory = this.compiler.compileModuleSync(component[compModule]);
      const ngModule = ngModuleFactory.create(this.viewContainer.injector);
      const factory = ngModule.componentFactoryResolver.resolveComponentFactory(component[compComponent]);
      const componentRef = this.viewContainer.createComponent(factory);

      // @ts-ignore
      componentRef.instance.windowItem = this.windowItem;
      // @ts-ignore
      componentRef.instance.update.subscribe(() => {
        this.setComponentSize();
      });
    });
  }

  basename(path): string {
    return path.split('/').reverse()[0];
  }

  countIcons(): void {
    this.iconCount = 0;

    if (this.windowItem.resizable) {
      this.iconCount++;
    }

    if (this.windowItem.panel) {
      this.iconCount++;
    }

    if (!this.windowItem.centered && !this.windowItem.state.isMaximised && !this.windowItem.dock && !this.windowItem.panel) {
      this.iconCount++;
    }

    if (this.windowItem.closable) {
      this.iconCount++;
    }

    if (!this.windowItem.panel) {
      this.iconCount++; // minimise
    }

    if (!this.windowItem.hasControls) {
      this.iconCount = 0;
    }
  }

  resize(): void {
    const elm = this.componentContainer.nativeElement;

    this.windowItem.componentWidth = elm.offsetWidth;
    this.windowItem.componentHeight = elm.offsetHeight;

    let ratio;
    if (this.windowItem.ribbonHasPriority) {
      ratio = ((this.windowItem.componentWidth / this.windowItem.componentHeight) > 1);
    } else {
      ratio = !((this.windowItem.componentWidth / this.windowItem.componentHeight) > 1);
    }

    let footerHeight = 0;
    let ribbonHeight = 0;
    let ribbonWidth = 0;

    if (elm.querySelector('.footer')) {
      footerHeight = elm.querySelector('.footer').offsetHeight;
    }

    if (elm.querySelector('.ribbon')) {
      const ribbon = elm.querySelector('.ribbon');
      ribbonHeight = ribbon.offsetHeight;
      ribbonWidth = ribbon.offsetWidth;
    }

    if (this.windowItem.ribbonFixedPosition) {
      ratio = this.windowItem.ribbonFixedPosition === 'top';
    }
    this.areaSource.next({
      ratio,
      width: ratio ? this.windowItem.componentWidth : this.windowItem.componentWidth - ribbonWidth,
      height: ratio ? this.windowItem.componentHeight - ribbonHeight - footerHeight : this.windowItem.componentHeight - footerHeight,
    });
  }

  setComponentSize(): void {
    const interval = setInterval(() => {
      this.resize();
    }, 10);
    setTimeout(() => {
      clearInterval(interval);
    }, 510);

  }

  resizeCursorSet(event): void {
    if (!event.target.classList.contains('windowItem') || this.windowItem.resizable === false) {
      return;
    }

    if (
      this.resizeWindowItem === null
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
    if (event.target.classList.contains('windowItem')) {
      this.resizeWindowItem = this.windowItem;

      this.resizeWindowItem.entities.xPosition = event.x || event.pageX;
      this.resizeWindowItem.entities.yPosition = event.y || event.pageY;

      this.resizeWindowItem.entities.left = parseInt(this.resizeWindowItem.left, 10);
      this.resizeWindowItem.entities.top = parseInt(this.resizeWindowItem.top, 10);
      this.resizeWindowItem.entities.width = parseInt(this.resizeWindowItem.width, 10);
      this.resizeWindowItem.entities.height = parseInt(this.resizeWindowItem.height, 10);
    }
  }

  resizeGo(event): void {
    if (this.resizeWindowItem !== null) {
      document.body.classList.add('blockSelect');

      this.setActive(event);

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

      if (this.resizeWindowItem.centered) {
        this.resizeWindowItem.centered = false;
      }

      let dx = x - this.resizeWindowItem.entities.xPosition;
      let dy = y - this.resizeWindowItem.entities.yPosition;

      if (west) {
        dx = -dx;
      }
      if (north) {
        dy = -dy;
      }

      let w = this.resizeWindowItem.entities.width + dx;
      let h = this.resizeWindowItem.entities.height + dy;
      if (w <= this.resizeWindowItem.minimumWidth) {
        w = this.resizeWindowItem.minimumWidth;
        dx = w - this.resizeWindowItem.entities.width;
      }
      if (h <= this.resizeWindowItem.minimumHeight) {
        h = this.resizeWindowItem.minimumHeight;
        dy = h - this.resizeWindowItem.entities.height;
      }

      if (north || east || south || west) {
        this.resizeWindowItem.noTransition = true;
      }

      if (east || west) {
        this.resizeWindowItem.width = w;
      }
      if (north || south) {
        this.resizeWindowItem.height = h;
      }

      if (west) {
        this.resizeWindowItem.left = (this.resizeWindowItem.entities.left - dx);
      }
      if (north) {
        this.resizeWindowItem.top = (this.resizeWindowItem.entities.top - dy);
      }
    }

    document.body.style.cursor = this.resizeDirection + '-resize';

    if (this.resizeDirection === 'n' || this.resizeDirection === 's') {
      document.body.style.cursor = 'ns-resize';
    }

    if (this.resizeDirection === 'e' || this.resizeDirection === 'w') {
      document.body.style.cursor = 'ew-resize';
    }

    this.countIcons();
    this.setComponentSize();
  }

  resizeStop(): void {

    // this.transitionEnd(this.resizeWindowItem);
    if (this.resizeWindowItem !== null) {
      delete this.resizeWindowItem.noTransition;
      this.resizeWindowItem.entities = {};
      this.resizeWindowItem = null;
    }
    document.body.style.cursor = '';
    this.countIcons();
    document.body.classList.remove('blockSelect');
    this.setComponentSize();
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
    if (this.windowItem.state.isMaximised || event.target.nodeName === 'BUTTON') {
      return false;
    }

    this.dragWindowItem = this.windowItem;

    const x = event.pageX - 7;
    const y = event.pageY - 9;

    this.startX = x;
    this.startY = y;

    let element = event.target;
    while (!element.classList.contains('titleBarMove')) {
      element = element.parentNode;
    }
    this.element = element;

    this.dragWindowItem.entities.xOffset = this.getTranslate(element.parentNode.parentNode)[0] - x;
    this.dragWindowItem.entities.yOffset = this.getTranslate(element.parentNode.parentNode)[1] - y;
    this.setActive(event);
  }

  moveGo(event): void {
    if (this.dragWindowItem !== null) {
      this.dragWindowItem.noTransition = true;

      if (this.dragWindowItem.dock) {

        const xPos = event.pageX - 7;
        const yPos = event.pageY - 9;


        if (Math.abs(this.startX - xPos) > 20 || Math.abs(this.startY - yPos) > 20) {
          const style = window.getComputedStyle(this.element.parentNode.parentNode);
          this.dragWindowItem.entities.xOffset = parseInt(style.left, 10) - 7 - xPos;
          this.dragWindowItem.entities.yOffset = parseInt(style.top, 10) - 9 - yPos;
          this.dragWindowItem.height = parseInt(style.height, 10);
          this.dragWindowItem.width = parseInt(style.width, 10);
          this.windowService.dragWindow = this.dragWindowItem;

          this.unDockWindow();
        }
      }

      if (this.dragWindowItem.panel) {
        const xPos = event.pageX - 7;
        const yPos = event.pageY - 9;

        if (Math.abs(this.startX - xPos) > 20 || Math.abs(this.startY - yPos) > 20) {
          const style = window.getComputedStyle(this.element.parentNode.parentNode);
          const hostPos = this.element.getBoundingClientRect();
          this.windowItem.left = hostPos.x;
          this.windowItem.top = hostPos.y;
          this.dragWindowItem.entities.xOffset = parseInt(hostPos.x, 10) - 7 - xPos;
          this.dragWindowItem.entities.yOffset = parseInt(hostPos.y, 10) - 9 - 135 - yPos;
          this.dragWindowItem.height = parseInt(style.height, 10);
          this.dragWindowItem.width = parseInt(style.width, 10);
          this.dragWindowItem.noTransition = false;
          this.windowService.dragWindow = this.dragWindowItem;

          delete this.windowItem.panel;
        }
      }

      if (!this.dragWindowItem.dock && !this.dragWindowItem.panel) {
        this.windowService.dragWindow = this.dragWindowItem;
      }

      document.body.classList.add('blockSelect');
      document.body.style.cursor = 'move';
      this.setActive(event);
      this.dragWindowItem.centered = false;

      const x = event.pageX;
      const y = event.pageY;

      let xOff = (x + this.dragWindowItem.entities.xOffset);
      let yOff = (y + this.dragWindowItem.entities.yOffset);
      if (yOff <= 3) {
        yOff = 3;
      }

      if (yOff > this.desktopDimensions.height - 75) {
        yOff = this.desktopDimensions.height - 75;
      }

      if (xOff + this.dragWindowItem.width - 60 < 0) {
        xOff = 0 - this.dragWindowItem.width + 60;
      }

      if (xOff + 35 > this.desktopDimensions.width) {
        xOff = this.desktopDimensions.width - 35;
      }

      this.dragWindowItem.left = parseInt(xOff, 10);
      this.dragWindowItem.top = parseInt(yOff, 10);
    }
    this.countIcons();
  }

  moveStop(): void {
    if (this.dragWindowItem !== null) {
      delete this.dragWindowItem.noTransition;
      this.dragWindowItem.entities = {};
      this.dragWindowItem = null;
      this.windowService.dragWindow = null;
      if (this.windowService.dragPanel && !this.windowItem.panel) {
        this.windowItem.panel = this.windowService.dragPanel;
        this.windowItem.sortBy = Math.round(Date.now() / 1000);
      }
      this.windowService.dragWindow = null;
    }
    this.countIcons();
    document.body.classList.remove('blockSelect');
    this.resizeCursorRestore();
  }

  maximiseWindow(): void {
    if (this.windowItem.resizable) {
      this.windowItem.state.isMaximised = !this.windowItem.state.isMaximised;
    }
    this.countIcons();
    this.setComponentSize();
    this.showMenu = false;
  }

  centreWindow(): void {
    this.windowItem.centered = true;
    let top = this.desktopDimensions.height / 2 - this.windowItem.height / 2;
    if (top < 0) {
      top = 0;
    }
    let left = this.desktopDimensions.width / 2 - this.windowItem.width / 2;
    if (left < 0) {
      left = 0;
    }
    this.windowItem.top = top;
    this.windowItem.left = left;

    this.countIcons();
  }

  closeWindow(event): void {
    event.stopPropagation();
    this.windowService.closeWindow(this.windowItem.uuid);
    this.showMenu = false;
  }

  minimiseWindow(event): void {
    event.stopPropagation();
    this.windowItem.active = false;
    this.windowItem.state.isMinimised = true;
    this.showMenu = false;
  }

  setActive(event): void {
    if (!this.windowItem.active) {
      this.windowService.setActive(event, this.windowItem.uuid);
    }
  }

  dockWindow(pos: string): void {
    if (this.windowItem.dock) {
      if (this.windowItem.dock === pos) {
        delete this.windowItem.dock;
      } else {
        this.windowItem.dock = pos;
      }
    } else {
      this.windowItem.dock = pos;
    }
    this.showMenu = false;
    this.setComponentSize();
  }

  unDockWindow(): void {
    delete this.windowItem.dock;
    delete this.windowItem.dockPosition;
    this.showMenu = false;
    this.setComponentSize();
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
    this.windowItem.dock = 'custom';
    this.windowItem.dockPosition = {
      top: this.dockTop,
      left: this.dockLeft,
      width: this.dockWidth,
      height: this.dockHeight
    };
    setTimeout(() => {
      this.setComponentSize();
    });
    this.showMenu = false;
  }

  dockInPanel(uuid: any): void {
    this.windowService.dockInPanel(this.windowItem, uuid);
  }

  removeFromPanel(): void {
    this.windowService.removeFromPanel(this.windowItem);
  }
}
