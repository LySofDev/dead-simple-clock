import { storiesOf } from '@storybook/angular';
import { ClockComponent  } from '../clock/clock.component';
import { TimeService } from '../clock/time.service';

storiesOf('ClockComponent', module)
  .add('default', () => ({
    component: ClockComponent,
    moduleMetadata: {
      providers: [TimeService]
    }
  }));
