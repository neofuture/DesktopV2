import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SystemService} from './services/system.service';
import {LanguageService} from './services/language.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {
  private appState: any;
  private langSub$: any;
  private locale: any;
  constructor(
    private route: ActivatedRoute,
    private systemService: SystemService,
    private router: Router,
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.systemService.appState.subscribe(data => {
      this.appState = data;
    });
    this.route.queryParams.subscribe(params => {
      const request = {};
      let c = 0;
      for (const item in params) {
        if (params.hasOwnProperty(item)) {
          request[item] = params[item];
          this.systemService.setApp(request);
          c++;
        }
      }

      if (c > 0) {
        this.router.navigate(['/']);
      }

    });

    this.langSub$ = this.languageService.language.subscribe(locale => {
      document.title = locale.product + ' - ' + locale.company;
    });
  }

}
