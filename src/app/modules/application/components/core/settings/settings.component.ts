import {Component, OnDestroy, OnInit} from '@angular/core';
import {RibbonService} from '../../../services/ribbon.service';
import {TabbarService} from '../../../services/tabbar.service';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../services/language.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {
  private ribbonSub$: Subscription;
  private tabSub$: Subscription;
  private langSub$: Subscription;

  ribbonSize: string;
  autoHide: boolean;
  locale: any;

  constructor(
    private ribbonService: RibbonService,
    private tabBarService: TabbarService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.components.settings;
    });

    this.ribbonSub$ = this.ribbonService.ribbonSize.subscribe(size => {
      this.ribbonSize = size;
    });
    this.tabSub$ = this.tabBarService.autoHideList.subscribe(data => {
      this.autoHide = data;
    });
  }

  ngOnDestroy(): void {
    this.ribbonSub$.unsubscribe();
    this.tabSub$.unsubscribe();
    this.langSub$.unsubscribe();
  }

  updateRibbonSize(event: any): void {
    if (event === 'large') {
      this.ribbonService.setLargeRibbon();
    } else {
      this.ribbonService.setSmallRibbon();
    }
  }

  updateAutoHide(event: any): void {
    this.tabBarService.updateAutoHide(event);
  }
}