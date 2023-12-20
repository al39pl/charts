import { TestBed } from '@angular/core/testing';
import { ChartComponent } from './chart.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ChartComponent);
    const charts = fixture.componentInstance;
    expect(charts).toBeTruthy();
  });
});
