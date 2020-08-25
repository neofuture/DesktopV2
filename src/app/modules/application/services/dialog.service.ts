import { Injectable } from '@angular/core';
import {HelperService} from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogList = {};
  constructor(
    private helperService: HelperService
  ) { }

  newDialog(dialogConfig): void {
    const uuid = this.helperService.uuidV4();
    dialogConfig.uuid = uuid;
    this.dialogList[uuid] = dialogConfig;

    setTimeout(() => {
      this.dialogList[uuid].open = true;
    }, 100);
  }

  closeToast(uuid: any): void {
    if (typeof this.dialogList[uuid] === 'undefined') {
      return;
    }
    this.dialogList[uuid].open = false;
    setTimeout(() => {
      delete this.dialogList[uuid];
    }, 300);
  }
}
