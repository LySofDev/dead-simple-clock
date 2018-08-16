import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  public greet(): string {
    return "Hello, Time Service";
  }

  public getHour(): number {
    return new Date().getHours();
  }

  public getMinutes(): number {
    return new Date().getMinutes();
  }

}
