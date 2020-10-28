import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../../../../application.module';
import {WindowService} from '../../../../../../services/window.service';
import {NotesHistoryModule} from '../notes-history.component';

@Component({
  selector: 'app-notes-popout',
  templateUrl: './notes-popout.component.html',
  styleUrls: ['./notes-popout.component.css']
})
export class NotesPopoutComponent implements OnInit {
  @Input() windowItem;
  @Output() update = new EventEmitter();
  tab: any;
  record: any;
  recordId: any;

  constructor(
    private windowService: WindowService
  ) { }

  ngOnInit(): void {
    this.windowService.setLoaded(this.windowItem.uuid);
    this.tab = this.windowItem.data.tab;
    this.record = this.windowItem.data.record;
    this.recordId = this.windowItem.data.record.id;
  }

}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule,
    NotesHistoryModule
  ],
  exports: [
    NotesPopoutComponent
  ],
  declarations: [NotesPopoutComponent]
})

export class NotesPopoutModule {
}
