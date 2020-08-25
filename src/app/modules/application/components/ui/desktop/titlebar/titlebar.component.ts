import {Component, OnDestroy, OnInit} from '@angular/core';
import {LanguageService} from '../../../../services/language.service';
import {RibbonService} from '../../../../services/ribbon.service';
import {Subscription} from 'rxjs';
import {DesktopService} from '../../../../services/desktop.service';
import {WindowService} from '../../../../services/window.service';
import {FileService} from '../../../../services/file.service';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit, OnDestroy {
  locale;
  company: string;
  product: string;
  private ribbonSub$: any;
  private langSub$: Subscription;
  ribbonSize: string;

  constructor(
    private languageService: LanguageService,
    private ribbonService: RibbonService,
    private desktopService: DesktopService,
    private windowService: WindowService,
    private fileService: FileService
  ) {
  }

  ngOnInit(): void {
    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.system.userLogin;
      this.company = locale.company;
      this.product = locale.product;
    });

    this.ribbonSub$ = this.ribbonService.ribbonSize.subscribe(size => {
      this.ribbonSize = size;
    });
  }

  ngOnDestroy(): void {
    this.langSub$.unsubscribe();
    this.ribbonSub$.unsubscribe();
  }

  toggleRibbon(): void {
    this.ribbonService.setRibbonToggle();
    setTimeout(() => {
      this.desktopService.setSize();
    }, 310);
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

  loadDesktop(event: Event): void {
    this.fileService.loadDesktop(event);
  }
}
