import { Component, OnInit } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'dead-simple-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor(private time: TimeService) {}

  ngOnInit() {
    
  }

}
