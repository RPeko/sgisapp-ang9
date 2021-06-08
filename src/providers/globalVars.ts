import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVars {
  // baseURL = 'http://localhost:8080';
  // baseURL = "https://sgbe21.herokuapp.com"
   baseURL = 'http://79.101.21.143:8070/sgis-1.0.3';

  constructor() {
  }

  public setBaseURL(value: string) {
    this.baseURL = value;
  }

  public getBaseURL(): string {
    return this.baseURL;
  }
}
