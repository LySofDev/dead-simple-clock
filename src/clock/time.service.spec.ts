import { TimeService } from '../../src/dead-simple-clock';
import { inject, TestBed } from '@angular/core/testing';

describe('TimeService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TimeService
      ]
    });
  });

  it('will greet us',
    inject([TimeService],
      (timeService: TimeService) => {
        expect(timeService.greet()).toEqual('Hello, Time Service');
      }
    )
  );

  it('has the current hour',
    inject([TimeService],
      (timeService: TimeService) => {
        const currentHour = new Date().getHours();
        expect(timeService.getHour()).toEqual(currentHour);
      }
    )
  );

  it('has the current minutes',
    inject([TimeService],
      (timeService: TimeService) => {
        const currentMinutes = new Date().getMinutes();
        expect(timeService.getMinutes()).toEqual(currentMinutes);
      }
    )
  );

});
