import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Error {
  constructor() {}
  printError(errMsg: string) {
    console.log('Error logged:', errMsg);
  }
}
