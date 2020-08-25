import {Component, Input, OnInit} from '@angular/core';
import {WindowService} from '../../../../../services/window.service';
import {LanguageService} from '../../../../../services/language.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() windowItem;
  @Input() desktopDimensions;

  private windowList;
  iconCount: number;
  locale;

  square: boolean;

  constructor(
    private languageService: LanguageService,
    private windowService: WindowService,
  ) {
  }

  ngOnInit(): void {
    this.languageService.language.subscribe(locale => {
      this.locale = locale.desktop.window;
    });

    this.windowList = this.windowService.windowList;
    this.countIcons();
    this.calculateTabWidth();
  }

  calculateTabWidth(): number {
    let tabCount = 0;
    let panelTabs = 0;
    // tslint:disable-next-line:forin
    for (const item in this.windowList) {
      if (this.windowList[item].hasTab && !this.windowList[item].panel && this.windowList[item].visible){
        tabCount++;
      }
      if (this.windowList[item].panel){
        panelTabs++;
      }

    }
    // const tabs = Object.keys(this.windowList).length;
    return ((this.desktopDimensions.width - (panelTabs * 40) - 6) / tabCount) - 8;
  }

  countIcons(): void {
    this.iconCount = 0;

    // if (this.windowItem.resizable) {
    //   this.iconCount++;
    // }
  }

  setActive(event): void {
    this.windowService.setActive(event, this.windowItem.uuid);
  }

  maximiseWindow(): void {
    if (this.windowItem.resizable) {
      this.windowItem.state.isMaximised = !this.windowItem.state.isMaximised;
    }
  }

}
