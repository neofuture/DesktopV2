import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {WindowService} from '../../../services/window.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  @Input() windowItem;
  @Output() update = new EventEmitter();
  field;

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
  declarations: [Demo2Component]
})

export class Demo2Module {
}
