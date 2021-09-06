import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVars {
  baseURL = "https://sgbe21.herokuapp.com"

  constructor() {
  }

  public setBaseURL(value: string) {
    this.baseURL = value;
  }

  public getBaseURL(): string {
    return this.baseURL;
  }
}
