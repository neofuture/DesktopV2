import {Component, Input, NgModule, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../../../application.module';
import {ContactManagerService} from '../../../../../services/contact-manager.service';
import {WindowService} from '../../../../../services/window.service';
import {LanguageService} from '../../../../../services/language.service';
import {NoteModule} from './note/note.component';
import {TooltipModule} from 'ng2-tooltip-directive';

@Component({
  selector: 'app-notes-history',
  templateUrl: './notes-history.component.html',
  styleUrls: ['./notes-history.component.css']
})
export class NotesHistoryComponent implements OnInit {
  private recordSub$: any;
  recordType: any;

  test = false;
  locale;
  status = 'done';
  private languageSub$: any;
  @Input() parentComponent;
  @Input() tab;
  @Input() inline;
  @Input() recordId;
  @Input() record;
  scrollTop = 0;

  constructor(
    private contactManagerService: ContactManagerService,
    private windowService: WindowService,
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    if (this.inline){
      this.recordSub$ = this.contactManagerService.record.subscribe(data => {
        this.record = data.record;
        this.recordId = data.record.id;
        this.recordType = data.record.recordType;
        this.getRecords();
      });
    } else {
      console.log('getting records for', this.recordId);
      console.log('getting records for', this.record);
    }


    this.languageSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.contactManager.notesAndHistoryTab;
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
      data: {record: this.record},
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
      data: {record: this.record},
      parentComponent: this,
      parentParentComponent: this.parentComponent,
      singleInstance: 'support' + this.recordId
    };
    this.windowService.newWindow(windowConfig);
  }

  setScroll(event: Event): void {
    // @ts-ignore
    this.scrollTop = event.target.scrollTop;
  }

  popout(): void {

    let icon = '';
    let title = '';
    if (this.tab === 'notes') {
      icon = 'icon-notesHistory';
      title = 'notesHistory';
    }

    if (this.tab === 'tickets') {
      icon = 'icon-ticket';
      title = 'supportTickets';
    }

    const windowConfig = {
      icon,
      iconLarge: 'icon',
      width: 950,
      height: 650,
      minimumHeight: 434,
      minimumWidth: 350,
      component: 'system/contact-manager/modules/notes-history/notes-popout',
      title,
      centered: true,
      extendedTitle: this.record.company || this.record.forename + ', ' + this.record.surname,
      parentComponent: this,
      data: {tab: this.tab, record: this.record},
      parentParentComponent: this.parentComponent,
      singleInstance: 'notesHistory' + this.recordId
    };
    this.windowService.newWindow(windowConfig);
  }
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule,
    NoteModule,
    TooltipModule,
  ],
  exports: [
    NotesHistoryComponent
  ],
  declarations: [NotesHistoryComponent]
})

export class NotesHistoryModule {
}
