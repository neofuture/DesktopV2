import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  uuidV4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // tslint:disable-next-line:no-bitwise
      const r = Math.random() * 16 | 0;
      // tslint:disable-next-line:no-bitwise
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  createRandomWord(length): string {
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v'];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const rand = (limit) => {
      return Math.floor(Math.random() * limit);
    };
    let i;
    let word = '';
    length = parseInt(length, 10);

    for (i = 0; i < length / 2; i++) {
      const randConsonant = consonants[rand(consonants.length)];
      const randVowel = vowels[rand(vowels.length)];
      word += (i === 0) ? randConsonant.toUpperCase() : randConsonant;
      word += i * 2 < length - 1 ? randVowel : '';
    }
    return word;
  }
  
  sortOnKey(jsonObject: any, keyToSortBy: any): any {

    if (typeof jsonObject === 'undefined') {
      return false;
    }
    const reA = /[^a-zA-Z]/g;
    const reN = /[^0-9]/g;

    jsonObject.sort(
      (a: { [x: string]: string; }, b: { [x: string]: string; }) => {
        const AInt: any = a[keyToSortBy];
        const BInt: any = b[keyToSortBy];

        if (typeof a[keyToSortBy] === 'boolean' && typeof b[keyToSortBy] === 'boolean') {
          return a[keyToSortBy] > b[keyToSortBy] ? 1 : -1;
        } else if (isNaN(AInt) && isNaN(BInt)) {
          const aA = a[keyToSortBy].replace(reA, '');
          const bA = b[keyToSortBy].replace(reA, '');
          if (aA === bA) {
            const aN = parseInt(a[keyToSortBy].replace(reN, ''), 10);
            const bN = parseInt(b[keyToSortBy].replace(reN, ''), 10);
            return aN === bN ? 0 : aN > bN ? 1 : -1;
          } else {
            return aA > bA ? 1 : -1;
          }
        } else if (isNaN(AInt)) {
          return 1;
        } else if (isNaN(BInt)) {
          return -1;
        } else {
          return AInt > BInt ? 1 : -1;
        }
      }
    );
  }
}

