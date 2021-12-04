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
  private runState: any;

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
    this.clearRibbon('63b63e8f-2005-4324-957b-7bb37e3da5d2');
    if (mode === 1) {
      this.mode1();
    }
    if (mode === 2) {
      this.mode2();
    }
  }

  mode1(): void {
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'planMode1',
      icon: 'icon-contacts',
      iconOver: 'icon-contacts_over',
      click: 'component.planMode',
      args: 1,
      active: this.runState.planMode === 1
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'planMode2',
      icon: 'icon-contacts',
      iconOver: 'icon-contacts_over',
      click: 'component.planMode',
      args: 2,
      active: this.runState.planMode === 2
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'planMode3',
      icon: 'icon-contacts',
      iconOver: 'icon-contacts_over',
      click: 'component.planMode',
      args: 3,
      active: this.runState.planMode === 3
    });

    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'sep'
    });

    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'settings',
      icon: 'icon-cog',
      iconOver: 'icon-cog_over',
      click: 'settings',
      active: true
    });

    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'contacts',
      icon: 'icon-contacts',
      iconOver: 'icon-contacts_over',
      click: 'component.contactManager',
      itemCount: 3
    });


    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'sep'
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'someLongerText',
      icon: 'icon-cog',
      iconOver: 'icon-cog_over',
      click: 'settings'
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'someLongerText',
      icon: 'icon-cog',
      iconOver: 'icon-cog_over',
      click: 'settings',
      itemCount: 3
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'catalogues',
      icon: 'icon-catalogues',
      iconOver: 'icon-catalogues_over',
      click: 'catalogues',
      itemCount: 428
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'sep'
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'catalogues',
      icon: 'icon-catalogues',
      iconOver: 'icon-catalogues_over',
      click: 'catalogues'
    });
    // multi select button
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'multiSelect',
      icon: 'icon-selectAll',
      iconOver: 'icon-selectAll',
      click: 'toggleMultiSelect',
      active: this.runState.multiSelect
    });

    if (this.runState.ribbonSubMode === 'edit') {
      this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
        label: 'sep'
      });
      this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
        label: 'ghost',
        icon: 'icon-ghost',
        iconOver: 'icon-ghost_over',
        click: 'settings',
        itemCount: 3
      });
    }

  }

  mode2(): void {
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'planMode4',
      icon: 'icon-contacts',
      iconOver: 'icon-contacts_over',
      click: 'component.planMode',
      args: 4,
      active: this.runState.planMode === 4
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'sep'
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'contacts',
      icon: 'icon-contacts',
      iconOver: 'icon-contacts_over',
      click: 'settings',
      itemCount: 3
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'sep'
    });
    this.newButton('63b63e8f-2005-4324-957b-7bb37e3da5d2', 0, {
      label: 'someLongerText',
      icon: 'icon-cog',
      iconOver: 'icon-cog_over',
      click: 'settings'
    });

  }

  clearRibbon(uuid): void {
    // tslint:disable-next-line:forin
    for (const item in this.ribbonItems[uuid]) {
      delete this.ribbonItems[uuid][item];
    }
  }

  newButton(ribbon, row, config): void {
    const uuid = this.helperService.uuidV4();
    config.uuid = uuid;
    if (typeof this.ribbonItems[ribbon] === 'undefined') {
      this.ribbonItems[ribbon] = [];
    }
    if (typeof this.ribbonItems[ribbon][row] === 'undefined') {
      this.ribbonItems[ribbon][row] = {};
    }
    this.ribbonItems[ribbon][row][uuid] = config;
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

  delegateAction(event: any, button: any, component: any): void {
    if (button.click === 'toggleMultiSelect') {
      this.systemService.set({multiSelect: !this.runState.multiSelect});
    }
    if (button.click.includes('.')) {
      const func = button.click.split('.');
      component[func[1]](button);
    }
    this.systemService.tick();
  }

}
