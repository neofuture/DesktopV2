import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  KeyValueChanges,
  KeyValueDiffer,
  KeyValueDiffers,
  NgModule,
  OnInit,
  Output
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {WindowService} from '../../../services/window.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit, DoCheck {
  @Input() windowItem;
  @Output() update = new EventEmitter();

  private memoryDiffer: KeyValueDiffer<string, any>;
  memory: any;

  constructor(
    private windowService: WindowService,
    private differs: KeyValueDiffers
  ) {
  }

  ngOnInit(): void {
    this.memory = this.windowItem.memory;
    this.memoryDiffer = this.differs.find(this.memory).create();
    this.windowService.setLoaded(this.windowItem.uuid);

    console.log(this.windowItem.parentComponent);
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

  setMemory(): void {
    this.memory.field = 'TESTING';
  }

  updateParentComponent(val): void {
    this.windowItem.parentComponent.test = val;
  }
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [Demo1Component]
})

export class Demo1Module {
}
