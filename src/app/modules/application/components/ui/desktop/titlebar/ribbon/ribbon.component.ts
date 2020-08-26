import {Component, Input, OnInit} from '@angular/core';
import {RibbonService} from '../../../../../services/ribbon.service';
import {SystemService} from '../../../../../services/system.service';
import {DesktopService} from '../../../../../services/desktop.service';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../../../services/language.service';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit {
  @Input() ident;
  @Input() size;
  @Input() hasToggle;
  @Input() direction;
  @Input() component;

  objectValues = Object.values;
  private runState;
  ribbonSize: string;
  private ribbonSub$: Subscription;
  locale;

  constructor(
    private ribbonService: RibbonService,
    private systemService: SystemService,
    private desktopService: DesktopService,
    private languageService: LanguageService
  ) {
  }

  ribbonButtonList;

  ngOnInit(): void {

    this.ribbonButtonList = this.ribbonService.ribbonItems;

    this.languageService.language.subscribe(locale => {
      this.locale = locale.desktop.ribbon;
    });

    this.systemService.runState.subscribe(data => {
      this.runState = data;
      this.ribbonService.setRibbon(this.runState.mode);
    });

    if (this.hasToggle) {
      this.ribbonSub$ = this.ribbonService.ribbonSize.subscribe(size => {
        this.ribbonSize = size;
        if (this.ribbonSize === null) {
          setTimeout(() => {
            if (this.size === 'large') {
              this.ribbonService.setLargeRibbon();
            } else {
              this.ribbonService.setSmallRibbon();
            }
          });
        }
      });
    } else {
      this.ribbonSize = this.size;
      console.log('SIZE' + this.ribbonSize);
    }

  }

  toggleRibbon(): void {
    if (!this.hasToggle) {
      return;
    }
    this.ribbonService.setRibbonToggle();
    setTimeout(() => {
      this.desktopService.setSize();
    }, 310);
  }


}
