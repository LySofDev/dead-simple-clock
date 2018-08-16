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
});
