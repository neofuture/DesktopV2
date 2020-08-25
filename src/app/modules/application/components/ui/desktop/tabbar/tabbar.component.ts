import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WindowService} from '../../../../services/window.service';
import {TabbarService} from '../../../../services/tabbar.service';
import {LanguageService} from '../../../../services/language.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit, OnDestroy {

  @Input() desktopDimensions;

  windowList: any;
  objectValues = Object.values;
  autoHide: any;
  locale;
  private langSub$: Subscription;
  private tabSub$: Subscription;

  constructor(
    private windowService: WindowService,
    private tabBarService: TabbarService,
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.desktop.tabBar;
    });

    this.tabSub$ = this.tabBarService.autoHideList.subscribe(data => {
      this.autoHide = data;
    });
    this.windowList = this.windowService.windowList;
  }

  ngOnDestroy(): void {
    this.langSub$.unsubscribe();
    this.tabSub$.unsubscribe();
  }

  updateAutoHide(event): void {
    this.tabBarService.updateAutoHide(event);
  }
}
