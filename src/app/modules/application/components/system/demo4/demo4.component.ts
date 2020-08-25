import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {WindowService} from '../../../services/window.service';
import {ApplicationModule} from '../../../application.module';
import {VideoPlayerComponent} from '../../core/video-player/video-player.component';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component implements OnInit {
  @Input() windowItem;
  @Output() update = new EventEmitter();

  constructor(
    private windowService: WindowService
  ) {
  }

  ngOnInit(): void {
    this.windowService.setLoaded(this.windowItem.uuid);
  }

}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule
  ],
  declarations: [
    Demo4Component,
    VideoPlayerComponent
  ]
})

export class Demo4Module {
}
