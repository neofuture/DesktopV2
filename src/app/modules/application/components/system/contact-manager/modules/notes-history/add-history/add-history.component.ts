import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../../../../application.module';
import {WindowService} from '../../../../../../services/window.service';

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

  constructor(
    private windowService: WindowService
  ) {
  }

  ngOnInit(): void {
    if(this.windowItem.data.record) {
      this.record = this.windowItem.data.record;
      this.recordId = this.windowItem.data.record.id;
      setTimeout(() => {
        this.windowService.setExtendedTitle(this.windowItem, this.record.company || this.record.forename + ', ' + this.record.surname);
      });
    }
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
