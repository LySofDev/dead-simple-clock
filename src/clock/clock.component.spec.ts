import { ClockComponent, TimeService } from '../../src/dead-simple-clock';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

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
      declarations: [
        ClockComponent,
        BackgroundTestHostComponent,
        RingTestHostComponent,
        TextTestHostComponent
      ]
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

  it('has a ring color with a default yellow', () => {
    fixture.detectChanges();
    expect(comp.ringColor).toEqual('#ffc900');
  });

  it('has a text color with default blue', () => {
    fixture.detectChanges();
    expect(comp.textColor).toEqual('#003368');
  });

  it('has a background color with default white', () => {
    fixture.detectChanges();
    expect(comp.backgroundColor).toEqual('#ffffff');
  });

  describe('changing the background color', () => {

    let testHostFixture: ComponentFixture<BackgroundTestHostComponent>;
    let testHostComponent: BackgroundTestHostComponent;
    let testElement: HTMLElement;
    let container: HTMLElement;

    beforeEach(() => {
      testHostFixture = TestBed.createComponent(BackgroundTestHostComponent);
      testHostComponent = testHostFixture.componentInstance;
      testElement = testHostFixture.debugElement.nativeElement;
      testHostFixture.detectChanges();
      container = testHostFixture.debugElement.query(By.css('main')).nativeElement;
    });

    it('accepts a hex string', () => {
      expect(container.style.backgroundColor).toEqual(hexToRgb('#000000'));
    });

  });

  describe('changing the ring color', () => {

    let testHostFixture: ComponentFixture<RingTestHostComponent>;
    let testHostComponent: RingTestHostComponent;
    let testElement: HTMLElement;
    let ring: HTMLElement;

    beforeEach(() => {
      testHostFixture = TestBed.createComponent(RingTestHostComponent);
      testHostComponent = testHostFixture.componentInstance;
      testElement = testHostFixture.debugElement.nativeElement;
      testHostFixture.detectChanges();
      ring = testHostFixture.debugElement.query(By.css('.outer-ring')).nativeElement;
    });

    it('accepts a hex string', () => {
      expect(ring.style.backgroundColor).toEqual(hexToRgb('#000000'));
    });

  });

  describe('changing the text color', () => {

    let testHostFixture: ComponentFixture<TextTestHostComponent>;
    let testHostComponent: TextTestHostComponent;
    let testElement: HTMLElement;
    let hour: HTMLElement;
    let separator: HTMLElement;
    let minutes: HTMLElement;

    beforeEach(() => {
      testHostFixture = TestBed.createComponent(TextTestHostComponent);
      testHostComponent = testHostFixture.componentInstance;
      testElement = testHostFixture.debugElement.nativeElement;
      testHostFixture.detectChanges();
      hour = testHostFixture.debugElement.query(By.css('.hour')).nativeElement;
      separator = testHostFixture.debugElement.query(By.css('.separator')).nativeElement;
      minutes = testHostFixture.debugElement.query(By.css('.minutes')).nativeElement;
    });

    it('sets the hour color', () => {
      expect(hour.style.color).toEqual(hexToRgb('#000000'));
    });

    it('sets the minutes color', () => {
      expect(minutes.style.color).toEqual(hexToRgb('#000000'));
    });

    it('sets the separator color', () => {
      expect(separator.style.color).toEqual(hexToRgb('#000000'));
    });

  });

});

class TestHostComponent {
  private testColor: string = "#000000";
  setTestColor(newColor: string) {
    this.testColor = newColor;
  }
}

@Component({
  selector: 'background-test-host',
  template: `<dead-simple-clock [background]="testColor"></dead-simple-clock>`
})
class BackgroundTestHostComponent extends TestHostComponent {}

@Component({
  selector: 'text-test-host',
  template: `<dead-simple-clock [text]="testColor"></dead-simple-clock>`
})
class TextTestHostComponent extends TestHostComponent {}

@Component({
  selector: 'ring-test-host',
  template: `<dead-simple-clock [ring]="testColor"></dead-simple-clock>`
})
class RingTestHostComponent extends TestHostComponent {}

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex: string): any {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
}
