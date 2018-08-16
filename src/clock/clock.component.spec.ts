import { ClockComponent, TimeService } from '../../src/dead-simple-clock';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

describe('Component: ClockComponent', () => {

  let fixture: ComponentFixture<ClockComponent>;
  let comp: ClockComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        TimeService
      ],
      declarations: [ClockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ClockComponent);
    comp = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
  });

  it('shows the current hour', () => {
    fixture.detectChanges();
    const currentHour = new Date().getHours();
    expect(element.textContent).toContain(currentHour);
  });

  it('shows the current minutes', () => {
    fixture.detectChanges();
    const currentMinutes = new Date().getMinutes();
    expect(element.textContent).toContain(currentMinutes);
  });

});
