import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'dead-simple-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  hour: number;
  minutes: number;
  running: boolean;

  @Input('ring') ringColor = '#ffc900';
  @Input('text') textColor = '#003368';
  @Input('background') backgroundColor = '#ffffff';

  constructor(private time: TimeService) {}

  ngOnInit() {
    this.running = true;
    this.updateTime();
    setInterval(this.updateTime, 1000);
  }

  ngOnDestroy() {
    this.running = false;
  }

  updateTime() {
    if (this.running) {
      this.hour = this.time.getHour();
      this.minutes = this.time.getMinutes();
    }
  }

}
