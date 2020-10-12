import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../../../../application.module';
import {WindowService} from '../../../../../../services/window.service';
import {ContactManagerService} from '../../../../../../services/contact-manager.service';

@Component({
  selector: 'app-add-history',
  templateUrl: './add-history.component.html',
  styleUrls: ['./add-history.component.css']
})
export class AddHistoryComponent implements OnInit {
  @Input() windowItem;
  @Output() update = new EventEmitter();
  record;
  recordId;
  oldRecordId = 0;
  private recordSub$: any;

  constructor(
    private windowService: WindowService,
    private contactManagerService: ContactManagerService
  ) {
  }

  ngOnInit(): void {
    this.recordSub$ = this.contactManagerService.record.subscribe(record => {
      this.record = record.record;
      this.recordId = record.id;

      // close if record changed
      if (this.recordId !== this.oldRecordId && this.oldRecordId !== 0) {
        this.windowService.closeWindow(this.windowItem.uuid);
      }
      this.oldRecordId = this.recordId;
      // end

      setTimeout(() => {
        this.windowService.setExtendedTitle(this.windowItem, this.record.company || this.record.forename + ', ' + this.record.surname);
      });
    });
    this.windowService.setLoaded(this.windowItem.uuid);
  }

  updateParentComponent(val): void {
    this.windowItem.parentComponent.test = val;
    this.windowItem.parentComponent.getRecords();
  }

  updateParentParentComponent(val): void {
    this.windowItem.parentParentComponent.test = val;
  }
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule,
  ],
  exports: [
    AddHistoryComponent
  ],
  declarations: [AddHistoryComponent]
})

export class AddHistoryModule {
}
