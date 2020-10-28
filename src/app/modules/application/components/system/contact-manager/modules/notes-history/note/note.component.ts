import {Component, ElementRef, Input, NgModule, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../../../../application.module';
import {LanguageService} from '../../../../../../services/language.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() type;
  @Input() id;
  @ViewChild('noteContents', {read: ElementRef}) noteContents: ElementRef;
  open = false;
  notesScrollHeight: number;
  threads = 0;
  private languageSub$: any;
  locale;

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {

    this.languageSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.contactManager.notesAndHistoryTab.noteComponent;
    });

    setTimeout(() => {
      this.notesScrollHeight = this.noteContents.nativeElement.scrollHeight;
    });
    if (this.id === 0) {
      this.threads = 4;
    }
  }

  toggleNotes(): void {
    if (this.notesScrollHeight <= 36){
      return;
    }
    this.open = !this.open;
  }
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule,
  ],
  exports: [
    NoteComponent
  ],
  declarations: [NoteComponent]
})

export class NoteModule {
}
