import {Directive, Input, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input('tooltip') tooltipTitle: string;
  @Input() position: string;
  @Input() delay: number;
  tooltip: HTMLElement;
  offset = 10;
  mouseDown = false;
  timer;
  private event: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  @HostListener('document:mousedown') onDocMouseDown(): void {
    this.mouseDown = true;
  }

  @HostListener('document:mouseup') onDocMouseUp(): void {
    this.mouseDown = false;
    if (this.tooltip) {
      this.hide();
    }
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(event): void {
    if (this.mouseDown) {
      return;
    }
    if (!this.tooltip) {
      this.event = event.target;
      this.show();
    }
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event): void {
    if (this.mouseDown) {
      return;
    }

    if (this.tooltip) {
      if(this.event === event.target){
        this.hide();
      }
    }
  }

  @HostListener('mouseout', ['$event']) onMouseOut(event): void {
    if (this.mouseDown) {
      return;
    }

    if (this.tooltip) {
      if(this.event === event.target){
        this.hide();
      }
    }
  }

  @HostListener('click') onClick(): void {
    if (this.tooltip) {
      this.hide();
    }
  }

  @HostListener('mousedown') onMouseDown(): void {
    if (this.tooltip) {
      this.hide();
    }
  }

  show(): void {
    this.create();
    this.setPosition();
    this.renderer.addClass(this.tooltip, 'tooltip-show');
  }

  hide(): void {
    if (!this.tooltip) {
      return;
    }
    this.renderer.removeClass(this.tooltip, 'tooltip-show');
    window.setTimeout(() => {
      if (this.tooltip) {
        this.renderer.removeChild(document.body, this.tooltip);
        this.tooltip = null;
      }
    }, this.delay);
    clearInterval(this.timer);
  }

  create(): void {
    if (!this.delay) {
      this.delay = 300;
    }

    if (!this.position) {
      this.position = 'top';
    }
    this.tooltip = this.renderer.createElement('span');
    this.tooltip.innerHTML = this.tooltipTitle;

    this.renderer.appendChild(document.body, this.tooltip);

    this.renderer.addClass(this.tooltip, 'tooltip');
    this.renderer.addClass(this.tooltip, `tooltip-${this.position}`);

    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);

    this.timer = setInterval(() => {
      if (getComputedStyle(this.el.nativeElement).getPropertyValue('align-content') === '') {
        this.hide();
      }
    }, 250);

  }

  setPosition(): void {
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltip.getBoundingClientRect();
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top;
    let left;

    if (this.position === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.position === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.position === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.position === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }
}
