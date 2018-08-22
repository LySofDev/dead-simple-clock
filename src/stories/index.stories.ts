import { storiesOf } from '@storybook/angular';
import { ClockComponent  } from '../clock/clock.component';
import { TimeService } from '../clock/time.service';

storiesOf('ClockComponent', module)

  .add('default', () => ({
    component: ClockComponent,
    moduleMetadata: {
      providers: [TimeService]
    }
  }))

  .add('red ring', () => ({
    component: ClockComponent,
    props: {
      ringColor: "red",
      textColor: "red",
      backgroundColor: "pink"
    },
    moduleMetadata: {
      providers: [TimeService]
    }
  }));
