import {
  Component, DoCheck, ElementRef,
  EventEmitter,
  Input, KeyValueChanges, KeyValueDiffer, KeyValueDiffers,
  NgModule,
  OnInit,
  Output, ViewChild
} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {CommonModule, DatePipe} from '@angular/common';
import {WindowService} from '../../../services/window.service';
import {ApplicationModule} from '../../../application.module';
import {LanguageService} from '../../../services/language.service';
import {Demo4Module} from '../demo4/demo4.component';
import {RibbonService} from '../../../services/ribbon.service';
import {ApiService} from '../../../services/api.service';
import {ContactManagerService} from '../../../services/contact-manager.service';
import {DialogService} from '../../../services/dialog.service';
import {Subscription} from 'rxjs';
import {NotesHistoryModule} from './modules/notes-history/notes-history.component';
import {AccountsModule} from './modules/accounts/accounts.component';
import {ContactProfileModule} from './modules/contact-profile/contact-profile.component';
import {DocumentsAndFilesModule} from './modules/documents-and-files/documents-and-files.component';
import {ToastService} from '../../../services/toast.service';
import {TooltipModule} from 'ng2-tooltip-directive';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit, DoCheck {
  @Input() windowItem;
  @Output() update = new EventEmitter();
  @ViewChild('contact', {read: ElementRef, static: false}) contact: ElementRef;
  @ViewChild('searchBox', {read: ElementRef, static: false}) searchBox: ElementRef;

  objectKeys = Object.keys;
  mode = 'edit';
  locale;

  records = 0;
  thisRecord = 1;
  minRecords = 1;
  background: any;
  buttonBackground: any;
  topSize = 370;
  maxTopSize = 370;
  private recordDiffer: KeyValueDiffer<string, any>;

  record = {
    id: null,
    title: '',
    forename: '',
    surname: '',
    address: '',
    address2: '',
    town: '',
    county: '',
    postcode: '',
    country: '',
    jobTitle: '',
    department: '',
    work: '',
    fax: '',
    mobile: '',
    email: '',
    group: 0,
    category: 0,
    status: 0,
    type: 0,
    website: '',
    company: '',
    accountNumber: '',
    username: '',
    password: '',
    allowLogin: false,
    added: '',
    updated: '',
    lastLogin: '',
    addedBy: '',
    updatedBy: '',
    addedByName: '',
    updatedByName: ''
  };
  countries;
  private windowAreaSub$: any;
  componentArea: any;
  contactType = 1;
  view = 1;
  activeContactTab = 'general';
  activeCompanyTab = 'general';
  honorifics;
  lookupResults = {};
  pcSearching: boolean;

  types = {
    id: 0,
    name: 'pleaseWaitLoading'
  };
  categories = {
    id: 0,
    name: 'pleaseWaitLoading'
  };
  groups = {
    id: 0,
    name: 'pleaseWaitLoading'
  };
  status = {
    id: 0,
    name: 'pleaseWaitLoading'
  };
  defaultType = 0;
  defaultGroup = 0;
  defaultStatus = 0;
  defaultCategory = 0;
  category: any;
  switchViewOptions = [
    {id: 1, name: 'Carl Fearby', category: 2},
    {id: 2, name: 'Oceanworks', category: 4},
  ];

  // switchViewOptions = [];
  saveBuffer;
  changed: boolean;
  buffer;
  tz = new Date().toString().match(/([-\+][0-9]+)\s/)[1];
  private recordSub$: Subscription;
  private languageSub$: Subscription;
  private contactManagerSub$: Subscription;

  searchResults: any;
  searchTerm = '';
  searchHits = [];
  private debounceTimer: NodeJS.Timeout;
  searchHitIndex = -1;
  readOnly = false;
  recordType = '1';
  tab = 'notes';
  resize = 0;

  constructor(
    private windowService: WindowService,
    private languageService: LanguageService,
    private ribbonService: RibbonService,
    private apiService: ApiService,
    private contactManagerService: ContactManagerService,
    private differs: KeyValueDiffers,
    private dialogService: DialogService,
    private datePipe: DatePipe,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {

    this.recordDiffer = this.differs.find(this.record).create();

    this.languageSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.contactManager;
      this.countries = locale.countries;
      this.honorifics = locale.honorifics;

      this.recordSub$ = this.contactManagerService.record.subscribe(record => {
        this.record = record.record;
        this.buffer = {...this.record};
        this.records = record.totalRecords;
        if (this.records === 0) {
          this.thisRecord = 0;
        }
        setTimeout(() => {
          if (this.record) {
            const status =
              '<b>' + this.locale.created + '</b>: ' +
              this.datePipe.transform(this.record.added, 'shortDate', this.tz) + ' - ' +
              this.datePipe.transform(this.record.added, 'shortTime', this.tz) +
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
              '<b>' + this.locale.updated + '</b>: ' +
              this.datePipe.transform(this.record.updated, 'shortDate', this.tz) + ' - ' +
              this.datePipe.transform(this.record.updated, 'shortTime', this.tz) +
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
              '<b>' + this.locale.addedBy + '</b>: ' + this.record.addedByName +
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
              '<b>' + this.locale.updatedBy + '</b>: ' + this.record.updatedByName +
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
              '<b>' + this.locale.lastLogin + '</b>:  ' +
              (this.record.lastLogin.indexOf('1970') === -1 ?

                  this.datePipe.transform(this.record.lastLogin, 'shortDate', this.tz) + ' - ' +
                  this.datePipe.transform(this.record.lastLogin, 'shortTime', this.tz)
                  :
                  ' - '
              )
            ;

            this.windowService.setExtendedTitle(this.windowItem, this.record.company || this.record.forename + ', ' + this.record.surname);
            this.windowService.setStatus(this.windowItem, status);
          } else {
            this.windowService.setExtendedTitle(this.windowItem, null);
            this.windowService.setStatus(this.windowItem, null);
          }
        });
      });
    });

    this.contactManagerSub$ = this.contactManagerService.initData.subscribe(data => {
      this.types = data.types;
      this.categories = data.categories;
      this.groups = data.groups;
      this.status = data.status;

      for (const item in this.types) {
        if (this.types[item].defaultType === 1) {
          this.defaultType = (this.types[item].id);
        }
      }

      for (const item in this.categories) {
        if (this.categories[item].defaultOption === 1) {
          this.defaultCategory = (this.categories[item].id);
        }
      }

      for (const item in this.groups) {
        if (this.groups[item].defaultOption === 1) {
          this.defaultGroup = (this.groups[item].id);
        }
      }

      for (const item in this.status) {
        if (this.status[item].defaultOption === 1) {
          this.defaultStatus = (this.status[item].id);
        }
      }
      for (const category in this.categories) {
        if (this.categories[category].defaultOption === 1) {
          if (typeof this.category === 'undefined') {
            this.category = parseInt(this.categories[category].id, 10);
            this.setCategory();
          } else {
            this.thisRecord = 1;
            this.getRecord();
          }
        }
      }
      this.changed = false;
      setTimeout(() => {
        this.windowService.setLoaded(this.windowItem.uuid);
      }, 200);
    });

    this.windowAreaSub$ = this.windowItem.area.subscribe(data => {
      this.componentArea = this.windowService.checkResize(this.resizeEvent, data, null);
      this.setRibbonBar();
    });


    this.topSize = this.maxTopSize = 302;

  }

  ngDoCheck(): void {
    const changes = this.recordDiffer.diff(this.record);
    if (changes) {
      this.recordChanged();
    }
  }

  recordChanged(): void {
    this.changed = false;
    for (const item in this.buffer) {
      if (this.buffer[item] !== this.record[item]) {
        this.changed = true;
      }
    }
    this.setRibbonBar();
  }

  switchView(): void {
    console.log(this.view);
  }

  setCategory(): void {
    this.category = parseInt(this.category, 10);

    for (const category in this.categories) {
      if (this.categories[category].id === this.category) {
        this.contactType = this.categories[category].typeId;
        this.background = 'linear-gradient(rgb(' +
          this.categories[category].colours[0][0] + ', ' +
          this.categories[category].colours[0][1] + ', ' +
          this.categories[category].colours[0][2] +
          '), rgb(' +
          this.categories[category].colours[1][0] + ', ' +
          this.categories[category].colours[1][1] + ', ' +
          this.categories[category].colours[1][2] +
          '))';
        this.buttonBackground = 'rgb(' +
          this.categories[category].colours[0][0] + ', ' +
          this.categories[category].colours[0][1] + ', ' +
          this.categories[category].colours[0][2] +
          ')';
      }
    }
    if (this.mode === 'edit') {
      this.thisRecord = 1;
      this.getRecord();
    } else {
      this.record.category = this.category;
    }
  }

  getRecord(): void {
    this.contactManagerService.getRecord(this.category, this.thisRecord, this.recordType);
  }

  newRecord(): void {
    this.mode = 'new';
    this.setRibbonBar();
    this.windowService.setExtendedTitle(this.windowItem, this.locale.newRecord);
    this.saveBuffer = {...this.record};
    this.record = {
      id: null,
      title: '',
      forename: '',
      surname: '',
      address: '',
      address2: '',
      town: '',
      county: '',
      postcode: '',
      country: '',
      jobTitle: '',
      department: '',
      work: '',
      fax: '',
      mobile: '',
      email: '',
      group: this.defaultGroup,
      category: this.category,
      status: this.defaultStatus,
      type: this.defaultType,
      website: '',
      company: '',
      accountNumber: '',
      username: '',
      password: '',
      allowLogin: false,
      added: '',
      updated: '',
      lastLogin: '',
      addedBy: '',
      updatedBy: '',
      addedByName: '',
      updatedByName: ''
    };
    this.changed = false;
  }

  cancelAddingRecord(): void {
    this.mode = 'edit';
    this.record = {...this.saveBuffer};
    this.setRibbonBar();
    this.windowService.setExtendedTitle(this.windowItem, null);
    setTimeout(() => {
      this.recordChanged();
    });
  }

  resizeEvent(): void {
    console.log('finished resizing');
    this.resize++;
  }

  recordStart(): void {
    if (!this.changed) {
      if (this.thisRecord > 1) {
        this.thisRecord = 1;
        this.getRecord();
      }
    }
  }

  recordPrevMore(): void {
    if (!this.changed) {
      if (this.thisRecord > 1) {
        this.thisRecord -= 50;
        if (this.thisRecord < 1) {
          this.thisRecord = 1;
        }
        this.getRecord();
      }
    }
  }

  recordPrev(): void {
    if (!this.changed) {
      if (this.thisRecord > 1) {
        this.thisRecord--;
        if (this.thisRecord < 1) {
          this.thisRecord = 1;
        }
        this.getRecord();
      }
    }
  }

  recordNext(): void {
    if (!this.changed) {

      if (this.thisRecord < this.records) {
        this.thisRecord++;
        this.getRecord();
      }
    }
  }

  recordNextMore(): void {
    if (!this.changed) {

      if (this.thisRecord < this.records) {
        this.thisRecord += 50;
        if (this.thisRecord > this.records) {
          this.thisRecord = this.records;
        }
        this.getRecord();
      }
    }
  }

  recordEnd(): void {
    if (!this.changed) {
      if (this.thisRecord < this.records) {
        this.thisRecord = this.records;
        this.getRecord();
      }
    }
  }

  setRibbonBar(): void {
    this.ribbonService.clearRibbon(this.windowItem.uuid);

    this.ribbonService.newButton(this.windowItem.uuid, 0, {
      label: 'editSettings',
      icon: 'icon-editCategories',
      iconOver: 'icon-editCategories',
      click: 'component.editSettings',
      float: 'right'
    });
    if (this.mode === 'edit') {
      this.ribbonService.newButton(this.windowItem.uuid, 0, {
        label: 'sendEmail',
        icon: 'icon-email',
        iconOver: 'icon-email',
        click: 'component.sendEmail'
      });

      if (!this.readOnly) {
        this.ribbonService.newButton(this.windowItem.uuid, 0, {
          label: 'sep'
        });
        this.ribbonService.newButton(this.windowItem.uuid, 0, {
          label: 'addRecord',
          icon: 'icon-contactsAdd',
          iconOver: 'icon-contactsAdd_over',
          click: 'component.newRecord'
        });
      }

    }
    if (this.changed || this.mode === 'new') {
      this.ribbonService.newButton(this.windowItem.uuid, 0, {
        label: 'saveRecord',
        icon: 'icon-save',
        iconOver: 'icon-contacts_over',
        click: 'component.saveRecord'
      });
    }

    if (this.mode === 'edit' && !this.changed && !this.readOnly) {
      this.ribbonService.newButton(this.windowItem.uuid, 0, {
        label: 'deleteRecord',
        icon: 'icon-bin',
        iconOver: 'icon-bin',
        click: 'component.deleteRecordDialog'
      });
    }
    if (this.mode === 'edit' && this.changed) {

      this.ribbonService.newButton(this.windowItem.uuid, 0, {
        label: 'discardChanges',
        icon: 'icon-close',
        iconOver: 'icon-close',
        click: 'component.destroyChangedDialog'
      });
    }
    if (this.mode === 'new') {
      this.ribbonService.newButton(this.windowItem.uuid, 0, {
        label: 'cancelAddingRecord',
        icon: 'icon-close',
        iconOver: 'icon-close',
        click: 'component.cancelAddingRecord'
      });
    }

  }

  deleteRecord(service, component): void {
    component.contactManagerService.deleteRecord(component.record).subscribe(data => {
      component.setCategory();
      const toastConfig = {
        title: 'success',
        body: component.locale.yourRecordHasBeenDeleted,
        autoClose: 4000,
        type: 'success'
      };
      component.toastService.newToast(toastConfig);
      component.init();
    });
  }

  saveRecord(...args): void {
    if (this.contactType === 1) {
      if (this.record.surname.length < 2){
        const toastConfig = {
          title: 'error',
          body: this.locale.pleaseEnterALongerSurname,
          autoClose: 4000,
          type: 'error'
        };
        this.toastService.newToast(toastConfig);
        return;
      }
      if (this.record.allowLogin === true && (this.record.username.length < 1 || this.record.password.length < 1 )){
        const toastConfig = {
          title: 'error',
          body: this.locale.pleaseSpecifyUserAuthDetails,
          autoClose: 4000,
          type: 'error'
        };
        this.toastService.newToast(toastConfig);
        return;
      }
    }
    if (this.contactType === 2) {
      if (this.record.company.length < 2){
        const toastConfig = {
          title: 'error',
          body: this.locale.pleaseEnterALongerCompanyName,
          autoClose: 4000,
          type: 'error'
        };
        this.toastService.newToast(toastConfig);
        return;
      }
    }

    this.contactManagerService.setRecord(this.record, this.recordType).subscribe(data => {
      if (data.category !== this.category) {
        this.category = data.category;
        this.setCategory();
      }
      if (this.contactType === 1) {
        this.windowService.setExtendedTitle(this.windowItem, data.title1);
      }
      if (this.contactType === 2) {
        this.windowService.setExtendedTitle(this.windowItem, data.title2);
      }
      setTimeout(() => {
        this.thisRecord = data.index;
        this.records = data.totalRecords;
        this.changed = false;
        this.mode = 'edit';
        this.setRibbonBar();
      });
      const toastConfig = {
        title: 'success',
        body: this.locale.yourRecordHasBeenSaved,
        autoClose: 4000,
        type: 'success'
      };
      this.toastService.newToast(toastConfig);
      this.init();
    });
  }

  editSettings(...args): void {
    const windowConfig = {
      icon: 'icon-editCategories',
      iconLarge: 'icon-editCategories',
      width: 600,
      height: 700,
      component: 'system/contact-manager/modules/settings/edit-settings',
      title: 'editSettings',
      parentComponent: this,
      singleInstance: 'contactManagerEditSettings' + this.windowItem.uuid
    };
    this.windowService.newWindow(windowConfig);
  }

  sendEmail(...args): void {
    console.log('send email', args);
  }

  postcodeLookup(): void {
    this.pcSearching = true;
    const requestBody = {
      postcode: this.record.postcode
    };
    this.apiService.call('postcodes/lookup', 'post', requestBody).subscribe(data => {
      this.lookupResults = data;
      this.pcSearching = false;
    });
  }

  setAddress(event): void {
    this.record.address = this.lookupResults[event.target.value].Line1;
    this.record.address2 = this.lookupResults[event.target.value].Line2;
    this.record.town = this.lookupResults[event.target.value].PostTown;
    this.record.county = this.lookupResults[event.target.value].County;
    this.record.postcode = this.lookupResults[event.target.value].Postcode;
    this.record.company = this.lookupResults[event.target.value].Company;
    this.record.country = this.lookupResults[event.target.value].CountryName;
    this.lookupResults = {};
  }

  postcodeKeyCheck(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.postcodeLookup();
    }

  }

  init(): void {
    this.contactManagerService.init(this.recordType);
  }

  recordChangeCategory(): void {
    if (this.mode === 'new') {
      this.category = this.record.category;
      this.setCategory();
    }
  }

  destroyChangedDialog(): void {
    const dialogConfig = {
      title: 'discardChanges',
      body: 'areYouSureYouWishToDiscardYourChanges',
      buttons: [
        {
          label: 'cancel',
          class: 'p-button-secondary',
          action: 'cancel'
        },
        {
          label: 'discard',
          class: 'danger',
          action: 'cancel',
          callBack: this.cancelEditing,
          args: this
        }
      ]
    };
    this.dialogService.newDialog(dialogConfig);
  }

  deleteRecordDialog(): void {
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
          args: this
        }
      ]
    };
    this.dialogService.newDialog(dialogConfig);
  }

  cancelEditing(service, component): void {
    component.record = {...component.buffer};
    setTimeout(() => {
      component.changed = false;
      component.setRibbonBar();
    });
  }

  checkKeys(event): any {
    if (event.key === 'ArrowUp' && this.searchHitIndex > -1) {
      this.searchHitIndex--;
      this.scrollIntoView();
    }

    if (event.key === 'ArrowDown' && this.searchHitIndex < Object.keys(this.searchHits).length - 1) {
      this.searchHitIndex++;
      this.scrollIntoView();
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      return false;
    }

    if (event.key === 'Enter') {
      if (this.searchHitIndex === -1) {

        this.search(event.target.value.replace(/^\s+|\s+$/g, ''));

      } else {
        this.loadRecord(this.searchHits[this.searchHitIndex]);
      }
      this.closeSearchResults();
      return false;
    }

    if (event.key === 'Escape') {
      this.closeSearchResults();
    } else {
      this.updateDropdown(event);
    }
  }

  searchBoxItem(item): void {
    this.loadRecord(this.searchHits[item]);
    this.closeSearchResults();
  }

  loadRecord(record): void {
    console.log('load record', record);
    this.searchTerm = '';
    this.searchHits = [];
    this.searchHitIndex = -1;
  }

  updateDropdown(event): any {
    const term = event.target.value
      .replace(/[\u201c\u201d]/g, '"')
      .replace(/^\s+|\s+$/g, '')
      .toLocaleLowerCase();

    if (term.length < 2) {
      this.searchHits = [];
      return;
    }

    clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.contactManagerService.realTimeResults(term, this.recordType).subscribe(data => {
        this.searchHits = data;
      });

    }, 250);
  }

  closeSearchResults(): void {
    this.searchHits = [];
    this.searchHitIndex = -1;
  }

  scrollIntoView(): void {
    setTimeout(() => {
      const elms = document.getElementsByClassName('selectedItem');
      if (typeof elms[0] !== 'undefined') {
        elms[0].scrollIntoView({behavior: 'smooth', block: 'end', inline: 'end'});
      }
    });
  }

  preventCursor(event): any {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      return false;
    }
  }

  focusSearchBox(): void {
    this.searchBox.nativeElement.focus();
  }

  search(searchTerm): void {
    const windowConfig = {
      icon: 'icon-search_over',
      iconLarge: 'icon-search_over',
      width: 600,
      height: 300,
      component: 'system/contact-manager/modules/search',
      title: 'search',
      data: {searchTerm},
      parentComponent: this,
      singleInstance: 'searchContactManager' + this.windowItem.uuid
    };
    this.windowService.newWindow(windowConfig);
  }

  setTab(tab: string): void {
    this.tab = tab;
  }

  clearSearchBox(): void {
    this.searchTerm = '';
    this.closeSearchResults();
    this.searchHits.length = 0;
    this.searchHitIndex = -1;
  }
}

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ApplicationModule,
        Demo4Module,
        NotesHistoryModule,
        AccountsModule,
        ContactProfileModule,
        DocumentsAndFilesModule,
        TooltipModule
    ],
  declarations: [ContactManagerComponent]
})

export class ContactManagerModule {
}
