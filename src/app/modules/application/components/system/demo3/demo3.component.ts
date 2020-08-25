import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {WindowService} from '../../../services/window.service';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
  @Input() windowItem;
  @Output() update = new EventEmitter();
  constructor(
    private windowService: WindowService
  ) { }

  ngOnInit(): void {
    this.windowService.setLoaded(this.windowItem.uuid);
  }

}

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [Demo3Component]
})

export class Demo3Module {
}
