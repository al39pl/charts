import { TestBed } from '@angular/core/testing';
import { ChartsContainerComponent } from './charts.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsContainerComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ChartsContainerComponent);
    const charts = fixture.componentInstance;
    expect(charts).toBeTruthy();
  });
});
