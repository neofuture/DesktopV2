import {
  Component,
  EventEmitter,
  Input,
  Output,
  NgModule,
  OnInit,
  OnDestroy,
  KeyValueDiffer,
  KeyValueDiffers,
  KeyValueChanges, HostListener
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LanguageService} from '../../../services/language.service';
import {WindowService} from '../../../services/window.service';
import {Subscription} from 'rxjs';
import {ApplicationModule} from '../../../application.module';
import {ButtonModule} from 'primeng';
import {RibbonService} from '../../../services/ribbon.service';
import {SystemService} from '../../../services/system.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})

export class ExampleComponent implements OnInit, OnDestroy {
  @Input() windowItem;
  @Output() update = new EventEmitter();

  locale;

  private memoryDiffer: KeyValueDiffer<string, any>;
  memory: any;

  private langSub$: Subscription;
  private windowAreaSub$: Subscription;
  testFunctionValue = {};
  private runState: any;
  private settings: boolean;
  componentArea: any;


  constructor(
    private languageService: LanguageService,
    private windowService: WindowService,
    private ribbonService: RibbonService,
    private systemService: SystemService,
    private differs: KeyValueDiffers
  ) {
  }

  @HostListener('document:keyup', ['$event'])
  saveMemory(): void {
    const changes = this.memoryDiffer.diff(this.memory);
    if (changes) {
      this.windowItem.memory = this.memory;
    }
  }

  ngOnInit(): void {
    this.memory = this.windowItem.memory;
    this.memoryDiffer = this.differs.find(this.memory).create();

    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.system.example;
    });

    this.windowService.setLoaded(this.windowItem.uuid);

    this.systemService.runState.subscribe(data => {
      this.runState = data;
      this.setRibbonBar();
    });

    this.windowAreaSub$ = this.windowItem.area.subscribe(
      data => {
        this.componentArea = this.windowService.checkResize(this.resizeEvent, data);
      });

  }

  ngOnDestroy(): void {
    this.langSub$.unsubscribe();
    this.windowAreaSub$.unsubscribe();
  }

  resizeEvent(): void {
    console.log('finished resizing');
  }

  setRibbonBar(): void {
    this.ribbonService.clearRibbon(this.windowItem.uuid);
    if (this.runState.mode === 1) {
      this.ribbonService.newButton(this.windowItem.uuid, 0, {
        label: 'settings',
        icon: 'icon-cog',
        iconOver: 'icon-cog_over',
        click: 'component.testFunction1',
        args: {
          test: 'Testing',
          demo: 'Demoing'
        },
        active: this.runState.ribbonSubMode === 'edit'
      });

      this.ribbonService.newButton(this.windowItem.uuid, 0, {
        label: 'contacts',
        icon: 'icon-contacts',
        iconOver: 'icon-contacts_over',
        click: 'component.testFunction2',
        itemCount: 3,
        active: this.settings
      });

      this.ribbonService.newButton(this.windowItem.uuid, 1, {
        label: 'settings',
        icon: 'icon-ghost',
        iconOver: 'icon-ghost_over',
        click: 'component.testFunction1',
        args: {
          test: 'Testing',
          demo: 'Demoing'
        },
        active: this.runState.ribbonSubMode === 'edit'
      });
    }

    if (this.runState.mode === 2) {
      this.ribbonService.newButton(this.windowItem.uuid, 0, {
        label: 'contacts',
        icon: 'icon-contacts',
        iconOver: 'icon-contacts_over',
        click: 'settings',
        itemCount: 3
      });
    }

    this.ribbonService.newButton(this.windowItem.uuid, 0, {
      label: 'sep'
    });

    this.ribbonService.newButton(this.windowItem.uuid, 0, {
      label: 'multiSelect',
      icon: 'icon-selectAll',
      iconOver: 'icon-selectAll',
      click: 'toggleMultiSelect',
      active: this.runState.multiSelect
    });

    this.ribbonService.newButton(this.windowItem.uuid, 1, {
      label: 'multiSelect',
      icon: 'icon-ghost',
      iconOver: 'icon-ghost_over',
      click: 'toggleMultiSelect',
      float: 'right'
    });

  }

  closeWindow(): void {
    this.windowService.closeWindow(this.windowItem.uuid);
  }

  testFunction1(button): void {
    if (this.runState.ribbonSubMode !== 'edit') {
      this.testFunctionValue = button;
      this.systemService.set({ribbonSubMode: 'edit'});
    } else {
      this.testFunctionValue = {};
      this.systemService.delete('ribbonSubMode');
    }
  }

  testFunction2(button): void {
    console.log(button);
    this.settings = !this.settings;
  }

}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule,
    ButtonModule
  ],
  declarations: [ExampleComponent]
})

export class ExampleModule {
}
