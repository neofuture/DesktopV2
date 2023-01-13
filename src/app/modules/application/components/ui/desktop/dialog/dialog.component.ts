import {Component, Input, OnInit} from '@angular/core';
import {DialogService} from '../../../../services/dialog.service';
import {LanguageService} from '../../../../services/language.service';
import {Subscription} from 'rxjs';
import {PanelService} from '../../../../services/panel.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() dialogItem;
  objectValues = Object.values;
  dialogList = {};
  private langSub$: Subscription;
  locale: any;

  constructor(
    private dialogService: DialogService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.desktop.dialog;
    });
  }

  closeDialog(): void {
    this.dialogService.closeDialog(this.dialogItem.uuid);
  }

  clickAction(buttonItem: any): void {
    if (buttonItem.callBack) {
      if (this.dialogItem.fields){
        const fields = {};
        // tslint:disable-next-line:forin
        for (const item in this.objectValues(this.dialogItem.fields)){
          fields[this.dialogItem.fields[item].name] = this.dialogItem.fields[item].value;
        }
        buttonItem.args = {...buttonItem.args, ...fields};
      }
      buttonItem.callBack(buttonItem.service, buttonItem.args);
    }
    if (buttonItem.action === 'cancel') {
      this.closeDialog();
    }
  }
}
