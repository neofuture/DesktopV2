import {
  Component, DoCheck,
  EventEmitter,
  Input,
  KeyValueChanges,
  KeyValueDiffer,
  KeyValueDiffers,
  NgModule,
  OnInit,
  Output
} from '@angular/core';
import {WindowService} from '../../../services/window.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit, DoCheck {
  @Input() windowItem;
  @Output() update = new EventEmitter();

  private memoryDiffer: KeyValueDiffer<string, any>;
  memory: any;

  componentArea: any;
  private windowAreaSub$: Subscription;
  statusBarText = 'Dynamic Status Bar';

  constructor(
    private windowService: WindowService,
    private differs: KeyValueDiffers
  ) { }

  ngOnInit(): void {
    this.memory = this.windowItem.memory;
    this.memoryDiffer = this.differs.find(this.memory).create();
    this.windowService.setLoaded(this.windowItem.uuid);

    this.windowAreaSub$ = this.windowItem.area.subscribe(
      data => {
        this.componentArea = this.windowService.checkResize(this.resizeEvent, data, null);
      });
  }

  ngDoCheck(): void {
    const changes = this.memoryDiffer.diff(this.memory);
    if (changes) {
      this.memoryChanged(changes);
    }
  }

  memoryChanged(changes: KeyValueChanges<string, any>): void {
    this.windowItem.memory = this.memory;
  }

  resizeEvent(): void {
  }

  addStatusBar(): void {
    this.windowService.addStatusBar(this.windowItem);
    this.windowService.setStatus(this.windowItem, this.statusBarText);
    this.update.emit('');
  }

  removeStatusBar(): void {
    this.windowService.removeStatusBar(this.windowItem);
    this.update.emit('');
  }

  addFooter(): void {
    this.windowService.addFooter(this.windowItem);
    this.update.emit('');
  }

  removeFooter(): void {
    this.windowService.removeFooter(this.windowItem);
    this.update.emit('');
  }

  closeWindow(): void {
    this.windowService.closeWindow(this.windowItem.uuid);
  }
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [PlannerComponent]
})

export class PlannerModule {
}
