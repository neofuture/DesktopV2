import {Component, Input, NgModule, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../../../application.module';
import {ContactManagerService} from '../../../../../services/contact-manager.service';
import {WindowService} from '../../../../../services/window.service';
import {LanguageService} from '../../../../../services/language.service';

@Component({
  selector: 'app-notes-history',
  templateUrl: './notes-history.component.html',
  styleUrls: ['./notes-history.component.css']
})
export class NotesHistoryComponent implements OnInit {
  private recordSub$: any;
  private record: any;
  recordId: any;
  test = false;
  locale;
  status = 'done';
  private languageSub$: any;
  @Input() parentComponent;

  constructor(
    private contactManagerService: ContactManagerService,
    private windowService: WindowService,
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.recordSub$ = this.contactManagerService.record.subscribe(record => {
      this.record = record.record;
      this.recordId = record.id;
      this.getRecords();
    });

    this.languageSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.contactManager.notesHistory;
    });
  }

  getRecords(): void {
    this.status = 'getting records';
    setTimeout(() => {
      this.status = 'done';
    }, 1000);
  }

  addHistory(event): void {
    event.stopPropagation();

    const windowConfig = {
      icon: 'icon-clock',
      iconLarge: 'icon-clock',
      width: 600,
      height: 300,
      component: 'system/contact-manager/modules/notes-history/add-history',
      title: 'addHistory',
      parentComponent: this,
      parentParentComponent: this.parentComponent,
      singleInstance: 'history' + this.recordId
    };
    this.windowService.newWindow(windowConfig);
  }

  addSupportTicket(event): void {
    event.stopPropagation();

    const windowConfig = {
      icon: 'icon-ticket',
      iconLarge: 'icon-ticket',
      width: 600,
      height: 300,
      component: 'system/contact-manager/modules/notes-history/add-history',
      title: 'addSupportTicket',
      parentComponent: this,
      parentParentComponent: this.parentComponent,
      singleInstance: 'support' + this.recordId
    };
    this.windowService.newWindow(windowConfig);
  }
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule,
  ],
  exports: [
    NotesHistoryComponent
  ],
  declarations: [NotesHistoryComponent]
})

export class NotesHistoryModule {
}
