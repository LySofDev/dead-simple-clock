import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  public greet(): string {
    return "Hello, Time Service";
  }

}
