import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimeService } from './time.service';
import { ClockComponent } from './clock.component';

@NgModule({
  imports: [BrowserModule],
  providers: [TimeService],
  declarations: [ClockComponent],
  exports: [ClockComponent]
})
export class DeadSimpleClockModule {}
