import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../../../services/language.service';
import {SystemService} from '../../../../../services/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  locale;
  selectedMenu = 0;
  menuItems = [
    {
      label: 'menu1',
      value: 1,
      subValue: 1,
    }, {
      label: 'menu2',
      value: 2,
      subValue: 4
    }, {
      label: 'menu3',
      value: 3,
      subValue: null
    }, {
      label: 'menu4',
      value: 4,
      subValue: null
    },
  ];
  private runState: {};


  constructor(
    private languageService: LanguageService,
    private systemService: SystemService
  ) {
  }

  ngOnInit(): void {
    this.systemService.runState.subscribe(data => {
      this.runState = data;
    });

    this.languageService.language.subscribe(locale => {
      this.locale = locale.desktop.menu;
    });

    setTimeout(() => {
      this.selectMenu(1, null);
    });
  }

  selectMenu(id, subId): void {
    if (this.selectedMenu === id) {
      return;
    }
    this.selectedMenu = id;
    this.systemService.set({mode: id});
    if (subId) {
      this.systemService.set({planMode: subId});
    }
  }
}
