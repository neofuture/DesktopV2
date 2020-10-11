import {
  Component, DoCheck, ElementRef,
  EventEmitter,
  Input, KeyValueChanges, KeyValueDiffer, KeyValueDiffers,
  NgModule,
  OnInit,
  Output, ViewChild
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {WindowService} from '../../../services/window.service';
import {ApplicationModule} from '../../../application.module';
import {LanguageService} from '../../../services/language.service';
import {Demo4Module} from '../demo4/demo4.component';
import {RibbonService} from '../../../services/ribbon.service';
import {ApiService} from '../../../services/api.service';
import {ContactManagerService} from '../../../services/contact-manager.service';
import {DialogService} from '../../../services/dialog.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit, DoCheck {
  @Input() windowItem;
  @Output() update = new EventEmitter();
  @ViewChild('contact', {read: ElementRef, static: false}) contact: ElementRef;

  objectKeys = Object.keys;
  mode = 'edit';
  locale;

  records = 2976;
  thisRecord = 1;
  minRecords = 1;
  background: any;
  buttonBackground: any;
  topSize = 370;
  maxTopSize = 370;
  fontColour = 'black';
  private recordDiffer: KeyValueDiffer<string, any>;

  record = {
    id: 2067,
    title: 'mr',
    forename: 'a',
    surname: 'a',
    address: 'a',
    address2: 'a',
    town: 'a',
    county: 'a',
    postcode: 'a',
    country: 'GB',
    notes: 'a',
    jobTitle: 'a',
    department: 'a',
    work: 'a',
    fax: 'a',
    mobile: 'a',
    email: 'a',
    group: 100,
    category: 1,
    status: 1,
    type: 1,
    website: 'a',
    division: 'a',
    company: 'a',
    accountNumber: 'a',
    username: 'a',
    password: 'a',
    allowLogin: false

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

  constructor(
    private windowService: WindowService,
    private languageService: LanguageService,
    private ribbonService: RibbonService,
    private apiService: ApiService,
    private contactManagerService: ContactManagerService,
    private differs: KeyValueDiffers,
    private dialogService: DialogService
  ) {
  }

  ngOnInit(): void {

    this.recordDiffer = this.differs.find(this.record).create();
    this.windowService.setLoaded(this.windowItem.uuid);
    this.languageService.language.subscribe(locale => {
      this.locale = locale.contactManager;
      this.countries = locale.countries;
      this.honorifics = locale.honorifics;
    });

    this.contactManagerService.initData.subscribe(data => {
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
        if (this.categories[item].defaultCategory === 1) {
          this.defaultCategory = (this.categories[item].id);
        }
      }

      for (const item in this.groups) {
        if (this.groups[item].defaultGroup === 1) {
          this.defaultGroup = (this.groups[item].id);
        }
      }

      for (const item in this.status) {
        if (this.status[item].defaultStatus === 1) {
          this.defaultStatus = (this.status[item].id);
        }
      }

    });

    this.windowAreaSub$ = this.windowItem.area.subscribe(data => {
      this.componentArea = this.windowService.checkResize(this.resizeEvent, data);
    });

    this.buffer = {...this.record};

    setTimeout(() => {
      this.topSize = this.maxTopSize = (this.contact.nativeElement.offsetHeight);

      const status = '<b>' + this.locale.created + ':</b> Unknown &nbsp;&nbsp;&nbsp;&nbsp;' +
        '| <b>' + this.locale.updated + ':</b> Unknown &nbsp;&nbsp;&nbsp;&nbsp;' +
        '| <b>' + this.locale.lastUpdatedBy + ':</b> Unknown &nbsp;&nbsp;&nbsp;&nbsp;' +
        '| <b>' + this.locale.lastLogin + ':</b> Unknown ';

      this.windowService.setStatus(this.windowItem, status);

      for (const category in this.categories) {
        if (this.categories[category].defaultCategory === 1) {
          this.category = parseInt(category, 10);
          this.setCategory();
        }
      }
      this.changed = false;
      this.setRibbonBar();
    }, 100);


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
        this.background = 'linear-gradient(' + this.categories[category].colours[0] + ', ' + this.categories[category].colours[1] + ')';
        this.buttonBackground = 'linear-gradient(' + this.categories[category].colours[0] + ', ' + this.categories[category].colours[0] + ')';
      }
    }
    if (this.mode === 'edit') {
      console.log('load records for ' + this.category);
    } else {
      this.record.category = this.category;
    }
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
      notes: '',
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
      division: '',
      company: '',
      accountNumber: '',
      username: '',
      password: '',
      allowLogin: false
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
  }

  recordStart(): void {
    if (!this.changed) {
      this.thisRecord = 1;
    }

  }

  recordPrevMore(): void {
    if (!this.changed) {
      this.thisRecord -= 50;
      if (this.thisRecord < 1) {
        this.thisRecord = 1;
      }
    }
  }

  recordPrev(): void {
    if (!this.changed) {
      this.thisRecord--;
      if (this.thisRecord < 1) {
        this.thisRecord = 1;
      }
    }
  }

  recordNext(): void {
    if (!this.changed) {
      this.thisRecord++;
      if (this.thisRecord > this.records) {
        this.thisRecord = this.records;
      }
    }
  }

  recordNextMore(): void {
    if (!this.changed) {
      this.thisRecord += 50;
      if (this.thisRecord > this.records) {
        this.thisRecord = this.records;
      }
    }
  }

  recordEnd(): void {
    if (!this.changed) {
      this.thisRecord = this.records;
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
    if (this.changed) {
      this.ribbonService.newButton(this.windowItem.uuid, 0, {
        label: 'saveRecord',
        icon: 'icon-save',
        iconOver: 'icon-contacts_over',
        click: 'component.saveRecord'
      });
    }

    if (this.mode === 'edit' && !this.changed) {
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

  deleteRecord(...args): void {
    console.log('delete record', args[1][0]);
  }

  saveRecord(...args): void {
    console.log('save record', args, this.record);
    this.contactManagerService.record(this.record);
  }

  editSettings(...args): void {
    console.log('edit settings', args);
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
    this.contactManagerService.init();
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
          args: [this]
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
          args: [this]
        }
      ]
    };
    this.dialogService.newDialog(dialogConfig);
  }

  cancelEditing(...args): void {
    args[1][0].record = {...args[1][0].buffer};
    setTimeout(() => {
      args[1][0].changed = false;
      args[1][0].setRibbonBar();
    });
  }
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule,
    Demo4Module
  ],
  declarations: [ContactManagerComponent]
})

export class ContactManagerModule {
}
