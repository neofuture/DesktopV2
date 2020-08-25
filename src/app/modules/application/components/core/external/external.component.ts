import {Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-external',
  template: '',
  styles: ['']
})

export class ExternalComponent implements OnInit {

  constructor(
    private zone: NgZone,
  ) {
    window.angular = {
      zone: this.zone,
      test: (str) => this.test(str),
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
}
