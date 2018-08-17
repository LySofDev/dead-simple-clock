import { Component, OnInit, Input } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'dead-simple-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  hour: number;
  minutes: number;

  @Input() ringColor = '#ffc900';
  @Input() textColor = '#003368';
  @Input() backgroundColor = '#ffffff';

  constructor(private time: TimeService) {}

  ngOnInit() {
    this.updateTime();
    setInterval(this.updateTime.bind(this), 1000);
  }

  updateTime() {
    this.hour = this.time.getHour();
    this.minutes = this.time.getMinutes();
  }

}
