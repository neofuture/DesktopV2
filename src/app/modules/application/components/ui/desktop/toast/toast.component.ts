import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ToastService} from '../../../../services/toast.service';
import {LanguageService} from '../../../../services/language.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() toastItem;
  round = Math.ceil;
  locale;
  remaining: any;
  private timer: NodeJS.Timeout;
  private langSub$: Subscription;
  pauseTimer: boolean;

  constructor(
    private toastService: ToastService,
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.desktop.toast;
    });
    if (this.toastItem.autoClose) {
      this.remaining = this.toastItem.autoClose;
      this.timer = setInterval(() => {
        if (!this.pauseTimer) {
          this.remaining -= 100;
        }
        if (this.remaining < 1) {
          this.toastService.closeToast(this.toastItem.uuid);
        }
      }, 100);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
    this.langSub$.unsubscribe();
  }

  closeToast(): void {
    this.toastService.closeToast(this.toastItem.uuid);
  }
}
