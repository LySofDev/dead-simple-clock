import { NgModule } from '@angular/core';
import { TimeService } from './time.service';
import { ClockComponent } from './clock.component';

@NgModule({
  imports: [],
  providers: [ TimeService ],
  declarations: [ ClockComponent ],
  exports: [ ClockComponent ]
})
export class DeadSimpleClockModule {}
