import {Component, OnInit} from '@angular/core';
import {RibbonService} from '../../../../../services/ribbon.service';
import {SystemService} from '../../../../../services/system.service';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit {

  objectValues = Object.values;
  private runState;

  constructor(
    private ribbonService: RibbonService,
    private systemService: SystemService
  ) {
  }

  ribbonButtonList;

  ngOnInit(): void {
    this.ribbonButtonList = this.ribbonService.ribbonItems;

    this.systemService.runState.subscribe(data => {
      this.runState = data;
      this.ribbonService.setRibbon(this.runState.mode);
    });
  }

}
