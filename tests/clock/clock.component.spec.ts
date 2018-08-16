import { ClockComponent, TimeService } from '../../src/dead-simple-clock';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

describe('Component: ClockComponent', () => {

  let fixture: ComponentFixture<ClockComponent>;
  let comp: ClockComponent;

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
  });

  it('shows the component name', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.textContent).toContain('Clock component');
  });

});
