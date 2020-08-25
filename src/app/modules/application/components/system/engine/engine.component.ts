import {Component, EventEmitter, Input, NgModule, OnDestroy, OnInit, Output} from '@angular/core';
import {LanguageService} from '../../../services/language.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ExampleComponent} from '../example/example.component';
import {WindowService} from '../../../services/window.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit, OnDestroy {
  @Input() windowItem;
  @Output() update = new EventEmitter();

  locale;
  bleh = 'working';
  private langSub$: Subscription;

  constructor(
    private  windowService: WindowService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.system.engine;
    });

    setTimeout(() => {
      this.windowService.setLoaded(this.windowItem.uuid);
    }, 2000);
  }


  ngOnDestroy(): void {
    this.langSub$.unsubscribe();
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
  declarations: [EngineComponent]
})

export class EngineModule {}
