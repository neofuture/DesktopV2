import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../../../application.module';
import {WindowService} from '../../../../../services/window.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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
    CommonModule,
    ApplicationModule,
  ],
  declarations: [SearchComponent]
})

export class SearchModule {
}
