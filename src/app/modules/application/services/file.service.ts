import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {PanelService} from './panel.service';
import {WindowService} from './window.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private panelService: PanelService,
    private windowService: WindowService
  ) {
  }

  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  };

  data(data): any {
    return of(JSON.parse(data));
  }


  downloadJson(data, fileName): void {
    this.data(data).subscribe((res) => {
      this.download({
        fileName,
        text: JSON.stringify(res)
      });
    });
  }

  private download(arg: {
    fileName: string,
    text: string
  }): void {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);
    const event = new MouseEvent('click');
    element.dispatchEvent(event);
  }

  saveDesktop(): void {
    const windows = this.windowService.windowList;
    const panels = this.panelService.panelList;

    this.downloadJson(JSON.stringify({windows, panels}), 'desktop.dsk');
  }

  loadDesktop(event): void {
    const selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      const object = JSON.parse(atob(reader.result.toString().split(',')[1]));
      this.windowService.setWindowList(object.windows);
      this.panelService.setPanelList(object.panels);
      event.target.value = '';
      this.windowService.setMode();
    };
  }

  lzwEncode(s): any {
    const dict = {};
    const data = (s + '').split('');
    const out = [];
    let currChar;
    let phrase = data[0];
    let code = 256;
    for (let i = 1; i < data.length; i++) {
      currChar = data[i];
      if (dict[phrase + currChar] != null) {
        phrase += currChar;
      } else {
        out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
        dict[phrase + currChar] = code;
        code++;
        phrase = currChar;
      }
    }
    out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
    for (let i = 0; i < out.length; i++) {
      out[i] = String.fromCharCode(out[i]);
    }
    return out.join('');
  }

// Decompress an LZW-encoded string
  lzwDecode(s): any {
    const dict = {};
    const data = (s + '').split('');
    let currChar = data[0];
    let oldPhrase = currChar;
    const out = [currChar];
    let code = 256;
    let phrase;
    for (let i = 1; i < data.length; i++) {
      const currCode = data[i].charCodeAt(0);
      if (currCode < 256) {
        phrase = data[i];
      } else {
        phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
      }
      out.push(phrase);
      currChar = phrase.charAt(0);
      dict[code] = oldPhrase + currChar;
      code++;
      oldPhrase = phrase;
    }
    return out.join('');
  }
}
