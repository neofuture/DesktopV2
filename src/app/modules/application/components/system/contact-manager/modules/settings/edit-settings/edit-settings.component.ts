import {Component, ElementRef, EventEmitter, HostListener, Input, NgModule, OnInit, Output, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../../../../application.module';
import {WindowService} from '../../../../../../services/window.service';
import {ContactManagerService} from '../../../../../../services/contact-manager.service';
import {LanguageService} from '../../../../../../services/language.service';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import {DialogService} from '../../../../../../services/dialog.service';
import {TooltipModule} from 'ng2-tooltip-directive';

@Component({
  selector: 'app-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.css']
})

export class EditSettingsComponent implements OnInit {
  @Input() windowItem;
  @Output() update = new EventEmitter();

  types: any;
  categories1: any;
  categories2: any;
  status: any;
  groups: any;
  private languageSub$: any;
  locale: any;
  active = 'categories';

  constructor(
    private windowService: WindowService,
    private contactManagerService: ContactManagerService,
    private languageService: LanguageService,
    private dialogService: DialogService
  ) {
  }

  ngOnInit(): void {
    this.languageSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.contactManager.settings;
    });

    this.getSettings();
    this.windowService.setLoaded(this.windowItem.uuid);
  }

  getSettings(): void {
    this.contactManagerService.getSettings().subscribe(data => {
      this.types = data.types;
      this.categories1 = data.categories1;
      this.categories2 = data.categories2;
      this.groups = data.groups;
      this.status = data.status;
    });
  }

  refreshParent(): void {
    this.windowItem.parentComponent.init();
  }

  toggleReadOnly(): void {
    this.windowItem.parentComponent.readOnly = !this.windowItem.parentComponent.readOnly;
    this.windowItem.parentComponent.setRibbonBar();
  }

  drop(event, items, object): void {
    moveItemInArray(items, event.previousIndex, event.currentIndex);

    const order = [];
    // tslint:disable-next-line:forin
    for (const item in items){
      order.push(items[item].id);
    }
    this.contactManagerService.setObjectOrder(order, object).subscribe(data => {
      if (data.status === 'ok') {
        this.getSettings();
        this.refreshParent();
      }
    });
  }

  edit(event: MouseEvent, item, label): void {
    event.stopPropagation();

    const windowConfig = {
      icon: 'icon-editCategories',
      iconLarge: 'icon-editCategories',
      width: 500,
      minimumWidth: 500,
      height: (label === 'Category' ? 355 : 130),
      minimumHeight: (label === 'Category' ? 355 : 130),
      component: 'system/contact-manager/modules/settings/edit-item',
      title: 'edit' + label + 'Item',
      data: {item, label},
      parentComponent: this,
      singleInstance: 'contactManagerEditSettingsItem' + JSON.stringify(item),
      hasFooter: true
    };
    this.windowService.newWindow(windowConfig);

  }

  delete(event: MouseEvent, item, object): void {
    event.stopPropagation();


    const dialogConfig = {
      title: 'deleteRecord',
      body: 'areYouSureYouWishToDeleteThisRecord',
      buttons: [
        {
          label: 'cancel',
          class: 'p-button-secondary',
          action: 'cancel'
        },
        {
          label: 'delete',
          class: 'danger',
          action: 'cancel',
          callBack: this.deleteRecord,
          args: [this, item, object]
        }
      ]
    };
    this.dialogService.newDialog(dialogConfig);
  }

  deleteRecord(service, component): void {
    component[0].contactManagerService.deleteObject(component[1], component[2]).subscribe(data => {
      if (data.status === 'ok'){
        component[0].getSettings();
        component[0].refreshParent();
      }
    });
  }

  addNewRecord(event: MouseEvent, label, typeId): void {
    event.stopPropagation();

    const windowConfig = {
      icon: 'icon-editCategories',
      iconLarge: 'icon-editCategories',
      width: 500,
      minimumWidth: 500,
      height: (label === 'Category' ? 360 : 130),
      minimumHeight: (label === 'Category' ? 360 : 130),
      component: 'system/contact-manager/modules/settings/edit-item',
      title: 'add' + label + 'Item',
      data: {label, item: {typeId, name: '', colours: [[234, 254, 234], [224, 237, 255], [44, 44, 44]]}},
      parentComponent: this,
      hasFooter: true
    };
    this.windowService.newWindow(windowConfig);
  }

  setDefault(id, type):void {
    this.contactManagerService.setDefault(id, type).subscribe(data => {
      console.log(data);
    });
  }
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule,
    DragDropModule,
    TooltipModule,
  ],
  exports: [
    EditSettingsComponent
  ],
  declarations: [EditSettingsComponent]
})

export class EditSettingsModule {
}
