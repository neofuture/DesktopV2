import {Component, ElementRef, EventEmitter, HostListener, Input, NgModule, OnInit, Output, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../../../../application.module';
import {WindowService} from '../../../../../../services/window.service';
import {LanguageService} from '../../../../../../services/language.service';
import {ToastService} from '../../../../../../services/toast.service';
import {ContactManagerService} from '../../../services/contact-manager.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  @Input() windowItem;
  @Output() update = new EventEmitter();
  @ViewChild('name', {read: ElementRef}) name: ElementRef;

  componentArea: any;
  private windowAreaSub$: any;
  private languageSub$: any;
  locale;
  data: any;

  @HostListener('document:keyup', ['$event'])
  checkKeys(event): void {
    if (event.code === 'Enter') {
      this.saveRecord();
    }
  }

  constructor(
    private windowService: WindowService,
    private languageService: LanguageService,
    private toastService: ToastService,
    private contactManagerService: ContactManagerService
  ) {
  }

  ngOnInit(): void {

    this.data = JSON.parse(JSON.stringify(this.windowItem.data));

    this.languageSub$ = this.languageService.language.subscribe(locale => {
      this.locale  = locale.contactManager.settings.item;
    });

    this.windowService.setLoaded(this.windowItem.uuid);
    this.windowAreaSub$ = this.windowItem.area.subscribe(data => {
      this.componentArea = this.windowService.checkResize(this.resizeEvent, data, null);
    });

    setTimeout(() => {
      this.name.nativeElement.focus();
    }, 200);
  }

  closeWindow(): void {
    this.windowService.closeWindow(this.windowItem.uuid);
  }

  resizeEvent(): void {
  }

  colourChange(event: any, which): void {
    this.data.item.colours[which] = event;
  }

  saveRecord(): void {

    this.data.item.name = this.data.item.name.replace(/^\s+|\s+$/gm, '');

    if (this.data.item.name.length < 3) {
      const toastConfig = {
        title: 'error',
        body: this.locale.fieldTooShort.replace('[FIELD]', this.data.label).replace('[LENGTH]', 3),
        autoClose: 4000,
        type: 'error'
      };
      this.toastService.newToast(toastConfig);
      return;
    }
    if (this.data.item.id) {
    }
    let requestBody = {};
    if (this.data.label === 'Category') {
      requestBody = {
        colours: this.data.item.colours,
        name: this.data.item.name,
        object: this.data.label,
        typeId: this.data.item.typeId
      };
    } else {
      requestBody = {
        name: this.data.item.name,
        object: this.data.label
      };
    }

    if (this.data.item.id) {
      // @ts-ignore
      requestBody.id = this.data.item.id;
    } else {

    }

    this.contactManagerService.saveObject(requestBody).subscribe(data => {
      if (data.status === 'ok') {
        this.windowService.closeWindow(this.windowItem.uuid);
      }
      this.windowItem.parentComponent.getSettings();
      this.windowItem.parentComponent.refreshParent();

    });

  }
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule,
  ],
  exports: [
    EditItemComponent
  ],
  declarations: [EditItemComponent]
})

export class EditItemModule {
}
