import {Component, OnDestroy, OnInit} from '@angular/core';
import {RibbonService} from '../../../services/ribbon.service';
import {TabbarService} from '../../../services/tabbar.service';
import {Observable, Subscription} from 'rxjs';
import {LanguageService} from '../../../services/language.service';
import {WindowService} from '../../../services/window.service';
import {FileService} from '../../../services/file.service';
import {ThemeService} from '../../../services/theme.service';

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
  theme;

  constructor(
    private ribbonService: RibbonService,
    private tabBarService: TabbarService,
    private languageService: LanguageService,
    private windowService: WindowService,
    private fileService: FileService,
    private themeService: ThemeService
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

    this.themeService.theme.subscribe(
      theme => {
        this.theme = theme;
      }
    );
    console.log(typeof this.theme, this.theme);
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

  openDemo(): void {
    const windowConfig = {
      width: 900,
      height: 500,
      component: 'system/demo',
      title: 'demo'
    };

    this.windowService.newWindow(windowConfig);
  }

  saveDesktop(): void {
    this.fileService.saveDesktop();
  }

  loadDesktopFile(event: Event): void {
    this.fileService.loadDesktop(event);
  }

  checkValue(event): void {
    this.theme = this.themeService.setTheme(event);
  }
}
