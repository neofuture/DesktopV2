import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent implements OnInit {
  @Input() name = '';
  @Input() class = '';
  @Input() checked = false;
  @Output() value = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  setChecked($event: Event): void {
    // @ts-ignore
    this.value.emit($event.target.checked);
  }
}
