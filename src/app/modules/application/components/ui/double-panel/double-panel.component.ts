import {AfterContentInit, Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-double-panel',
  templateUrl: './double-panel.component.html',
  styleUrls: ['./double-panel.component.css']
})
export class DoublePanelComponent implements OnInit, AfterContentInit, OnChanges {
  @Input() size;
  @Input() maxSize;
  @Input() background;
  @Input() windowHeight;
  @Input() windowWidth;

  @ViewChild('pane', {read: ElementRef, static: false}) pane: ElementRef;
  @ViewChild('panel1', {read: ElementRef, static: false}) panel1: ElementRef;
  @ViewChild('sep', {read: ElementRef, static: false}) sep: ElementRef;
  @ViewChild('panel2', {read: ElementRef, static: false}) panel2: ElementRef;

  down = false;
  private yPos: number;
  private topHeight: number;
  private bottomHeight: number;
  private panelSize: number;
  private oldTopHeight: number;

  @HostListener('document:mousemove', ['$event']) onMouseMove(event): void {
    if (this.down) {
      const yPos = event.pageY - this.yPos;
      this.size = this.topHeight + yPos + 6;
      if (this.maxSize) {
        if (this.size > this.maxSize) {
          this.size = this.maxSize;
        }
      }
      if (this.size > this.panelSize - 12) {
        this.size = this.panelSize - 12;
      }
      this.panel1.nativeElement.style.height = this.size + 'px';
      this.panel2.nativeElement.style.height = 'calc(100% - 12px - ' + this.size + 'px)';

    }
  }

  @HostListener('document:mouseup', ['$event']) onMouseUp(event): void {
    this.down = false;
    document.body.classList.remove('blockSelect');
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeSize(changes);
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.panelSize = this.pane.nativeElement.offsetHeight;

      this.sep.nativeElement.style.width = '100%';
      this.sep.nativeElement.style.height = '12px';
      this.panel1.nativeElement.style.width = '100%';
      this.panel2.nativeElement.style.width = '100%';
      this.panel1.nativeElement.style.height = this.size + 'px';
      this.panel2.nativeElement.style.height = 'calc(100% - 12px - ' + this.size + 'px)';

    });
  }

  changeSize(stuff): void {
    if (this.panel1) {
      this.panelSize = this.pane.nativeElement.offsetHeight;

      if (this.size === null && this.maxSize === null) {
        this.size = this.panelSize / 2 - 6;
      } else {
        if (this.size > this.panelSize - 12) {
          this.size = this.panelSize - 12;
        }
      }

      this.sep.nativeElement.style.width = '100%';
      this.sep.nativeElement.style.height = '12px';
      this.panel1.nativeElement.style.width = '100%';
      this.panel2.nativeElement.style.width = '100%';
      this.panel1.nativeElement.style.height = this.size + 'px';
      this.panel2.nativeElement.style.height = 'calc(100% - 12px - ' + this.size + 'px)';

    }
  }

  mouseDown(event: MouseEvent): void {
    this.down = true;
    this.yPos = event.pageY;
    this.topHeight = this.panel1.nativeElement.offsetHeight;
    this.bottomHeight = this.panel2.nativeElement.offsetHeight;
    document.body.classList.add('blockSelect');
  }

  toggleSize(): void {
    if (this.size > 0) {
      this.oldTopHeight = this.size;
      this.size = 0;
    } else {
      this.size = this.oldTopHeight;
    }
    this.changeSize('');
  }
}
