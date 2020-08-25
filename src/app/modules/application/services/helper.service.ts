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

}

