import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../../../../application.module';
import {WindowService} from '../../../../../../services/window.service';

@Component({
  selector: 'app-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.css']
})
export class EditSettingsComponent implements OnInit {
  @Input() windowItem;
  @Output() update = new EventEmitter();
  constructor(
    private windowService: WindowService
  ) { }

  ngOnInit(): void {
    this.windowService.setLoaded(this.windowItem.uuid);
  }

  updateParentComponent(val): void {
    this.windowItem.parentComponent.test = val;
  }
}


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule,
  ],
  exports: [
    EditSettingsComponent
  ],
  declarations: [EditSettingsComponent]
})

export class EditSettingsModule {
}
