import {Component, NgZone, OnInit} from '@angular/core';
import {DesktopService} from '../../../services/desktop.service';

@Component({
  selector: 'app-external',
  template: '',
  styles: ['']
})

export class ExternalComponent implements OnInit {

  constructor(
    private zone: NgZone,
    private desktopService: DesktopService
  ) {
    window.angular = {
      zone: this.zone,
      test: (str) => this.test(str),
      showLoading: () => this.showLoading(),
      hideLoading: () => this.hideLoading(),
      component: this,
    };
  }

  ngOnInit(): void {
  }

  test(str): string {
    console.log('From JS', str);
    app.outboundCall('hi from ET');
    return str;
  }

  showLoading(): void {
    this.desktopService.showLoading();
  }

  hideLoading(): void {
    this.desktopService.hideLoading();
  }
}
