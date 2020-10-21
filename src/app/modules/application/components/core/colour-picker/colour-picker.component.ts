import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css']
})
export class ColourPickerComponent implements OnInit {
  @ViewChild('canvasHue', {read: ElementRef}) canvasHue: ElementRef;
  @ViewChild('canvasLightness', {read: ElementRef}) canvasLightness: ElementRef;
  @ViewChild('canvasSaturation', {read: ElementRef}) canvasSaturation: ElementRef;
  @Input() colour;
  @Input() label;
  @Output() colourChange = new EventEmitter();

  lightness = 216;
  hue = 0;
  saturation = 0;
  private start: number;
  private picker = false;
  private picked = null;
  red: any;
  green: any;
  blue: any;
  private target: any;

  @HostListener('document:mousemove', ['$event']) onMouseMove(event): void {
    if (this.picker) {
      this.movePicker(event);
    }
  }

  @HostListener('document:mouseup') onMouseUp(): void {
    this.picker = false;
    this.picked = null;
    document.body.classList.remove('blockSelect');
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.setGradient(this.colour[0], this.colour[1], this.colour[2]);
    });
  }

  setGradient(r, g, b): void {

    [this.red, this.green, this.blue] = [r, g, b];

    const hsl = this.rgbToHsl(r, g, b);
    this.hue = hsl[0] * 256;
    this.saturation = hsl[1] * 256;
    this.lightness = hsl[2] * 256;

    const ctxLightness = this.canvasLightness.nativeElement.getContext('2d');
    const grdLightness = ctxLightness.createLinearGradient(0, 0, 256, 1);

    grdLightness.addColorStop(0, 'rgb(0, 0, 0)');
    grdLightness.addColorStop(1, 'rgb(255, 255, 255)');

    ctxLightness.fillStyle = grdLightness;
    ctxLightness.fillRect(0, 0, 256, 30);

    [this.red, this.green, this.blue] = this.hslToRgb(this.hue / 256, this.saturation / 256, this.lightness / 256);
    const [r1, g1, b1] = this.hslToRgb(this.hue / 256, 1, 0.5);
    const [r2, g2, b2] = this.hslToRgb(0, 0, this.lightness / 256);
    this.setSaturation(r1, g1, b1, r2, g2, b2);

    this.setHue();
    this.colourChange.emit([this.red, this.green, this.blue]);
  }

  setHue(): void {
    const ctxHue = this.canvasHue.nativeElement.getContext('2d');
    const grdHue = ctxHue.createLinearGradient(0, 0, 256, 1);

    const stopPoints = [0, 0.17, 0.33, 0.50, 0.67, 0.83, 1];
    // tslint:disable-next-line:forin
    for (const point in stopPoints) {
      const [r, g, b] = this.hslToRgb(stopPoints[point], 1, this.lightness / 256);
      grdHue.addColorStop(stopPoints[point], 'rgb(' + r + ', ' + g + ', ' + b + ')');
    }

    ctxHue.fillStyle = grdHue;
    ctxHue.fillRect(0, 0, 256, 30);
  }

  setSaturation(r, g, b, r2, g2, b2): void {
    const ctxSaturation = this.canvasSaturation.nativeElement.getContext('2d');
    const grdSaturation = ctxSaturation.createLinearGradient(0, 0, 256, 1);

    grdSaturation.addColorStop(0, 'rgb(' + r2 + ', ' + g2 + ', ' + b2 + ')');
    grdSaturation.addColorStop(1, 'rgb(' + r + ', ' + g + ', ' + b + ')');

    ctxSaturation.fillStyle = grdSaturation;
    ctxSaturation.fillRect(0, 0, 256, 30);
  }


  setStart(event, item): void {
    this.picked = item;
    this.start = event.pageX - event.offsetX;
    this.picker = true;
    this.target = event.target;
    this[this.picked] = this[this.picked] = ((event.pageX - this.start) / this.target.offsetWidth) * 256;
    document.body.classList.add('blockSelect');

    [this.red, this.green, this.blue] = this.hslToRgb(this.hue / 256, this.saturation / 256, this.lightness / 256);
    const [r, g, b] = this.hslToRgb(this.hue / 256, 1, 0.5);
    const [r2, g2, b2] = this.hslToRgb(0, 0, this.lightness / 256);
    this.setSaturation(r, g, b, r2, g2, b2);
    this.setHue();

    this.colourChange.emit([this.red, this.green, this.blue]);
  }

  movePicker(event): void {

    this[this.picked] = ((event.pageX - this.start) / this.target.offsetWidth) * 256;
    if (this[this.picked] < 0) {
      this[this.picked] = 0;
    }
    if (this[this.picked] > 256) {
      this[this.picked] = 256;
    }


    [this.red, this.green, this.blue] = this.hslToRgb(this.hue / 256, this.saturation / 256, this.lightness / 256);
    const [r, g, b] = this.hslToRgb(this.hue / 256, 1, 0.5);
    const [r2, g2, b2] = this.hslToRgb(0, 0, this.lightness / 256);
    this.setSaturation(r, g, b, r2, g2, b2);
    this.setHue();

    this.colourChange.emit([this.red, this.green, this.blue]);
  }

  rgbToHsl(r, g, b): any {
    r /= 255, g /= 255, b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h;
    let s;
    const l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return [h, s, l];
  }

  hslToRgb(h, s, l): any {
    let r;
    let g;
    let b;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = this.hue2rgb(p, q, h + 1 / 3);
      g = this.hue2rgb(p, q, h);
      b = this.hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  hue2rgb(p, q, t): any {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }

}
