import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HelperService} from './helper.service';
import {SystemService} from './system.service';

@Injectable({
  providedIn: 'root'
})

export class RibbonService {

  ribbonItems = {};

  ribbonUuid = 'c5dfc232-e275-4872-af69-7c5f132e1a1b';

  private ribbonSizeObject = new BehaviorSubject(localStorage.getItem(this.ribbonUuid) || null);
  ribbonSize = this.ribbonSizeObject.asObservable();
  private runState: {mode: number; multiSelect: boolean};

  constructor(
    private helperService: HelperService,
    private systemService: SystemService

  ) {
    if (this.ribbonSizeObject.value === 'small') {
      document.body.classList.add('smallRibbon');
    }
    this.systemService.runState.subscribe(data => {
      this.runState = data;
    });
  }

  setRibbon(mode): void {
    this.clearRibbon();
    if (mode === 1) {
      this.mode1();
    }
    if (mode === 2) {
      this.mode2();
    }
  }

  mode1(): void {
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', {
      label: 'settings',
      icon: 'icon-cog',
      iconOver: 'icon-cog_over',
      click: 'settings',
      active: true
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', {
      label: 'contacts',
      icon: 'icon-contacts',
      iconOver: 'icon-contacts_over',
      click: 'settings',
      itemCount: 3
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', {
      label: 'sep'
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', {
      label: 'someLongerText',
      icon: 'icon-cog',
      iconOver: 'icon-cog_over',
      click: 'settings'
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', {
      label: 'someLongerText',
      icon: 'icon-cog',
      iconOver: 'icon-cog_over',
      click: 'settings',
      itemCount: 3
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', {
      label: 'catalogues',
      icon: 'icon-catalogues',
      iconOver: 'icon-catalogues_over',
      click: 'catalogues',
      itemCount: 428
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', {
      label: 'sep'
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', {
      label: 'catalogues',
      icon: 'icon-catalogues',
      iconOver: 'icon-catalogues_over',
      click: 'catalogues'
    });
    // multi select button
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', {
      label: 'multiSelect',
      icon: 'icon-selectAll',
      iconOver: 'icon-selectAll',
      click: 'toggleMultiSelect',
      active: this.runState.multiSelect
    });
  }

  mode2(): void {
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', {
      label: 'contacts',
      icon: 'icon-contacts',
      iconOver: 'icon-contacts_over',
      click: 'settings',
      itemCount: 3
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', {
      label: 'sep'
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', {
      label: 'someLongerText',
      icon: 'icon-cog',
      iconOver: 'icon-cog_over',
      click: 'settings'
    });
  }

  clearRibbon(): void {
    // tslint:disable-next-line:forin
    for (const item in this.ribbonItems) {
      delete this.ribbonItems[item];
    }
  }

  newButton(ribbon, config): void {
    const uuid = this.helperService.uuidV4();
    config.uuid = uuid;
    if (typeof this.ribbonItems[ribbon] === 'undefined') {
      this.ribbonItems[ribbon] = {};
    }
    this.ribbonItems[ribbon][uuid] = config;
  }

  setRibbonToggle(): void {
    if (this.ribbonSizeObject.value === 'small') {
      this.setLargeRibbon();
    } else {
      this.setSmallRibbon();
    }
  }

  setSmallRibbon(): void {
    this.ribbonSizeObject.next('small');
    localStorage.setItem(this.ribbonUuid, 'small');
    document.body.classList.add('smallRibbon');
  }

  setLargeRibbon(): void {
    this.ribbonSizeObject.next('large');
    localStorage.setItem(this.ribbonUuid, 'large');
    document.body.classList.remove('smallRibbon');
  }

  delegateAction(event: any, button: any): void {
    if (button.click === 'toggleMultiSelect') {
      this.systemService.set({multiSelect: !this.runState.multiSelect});
    }
  }
}
