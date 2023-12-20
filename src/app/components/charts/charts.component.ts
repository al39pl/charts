import { Component, OnInit } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { Store, select } from '@ngrx/store';
import { getData } from '../../store/data/data.actions';
import {
  selectDataIsLoading,
  selectDataList,
} from '../../store/data/data.selectors';
import { Charts } from '../../models/data.model';
import { Observable } from 'rxjs';
import {
  selectChartsAmount,
  selectChartsColor,
  selectChartsType,
} from '../../store/сharts-settings/сharts-settings.selectors';

@Component({
  selector: 'charts-container',
  templateUrl: './charts.component.html',
})
export class ChartsContainerComponent implements OnInit {
  charts$: Observable<Charts[]>;
  isLoading$: Observable<boolean>;

  chartsAmount$: Observable<number>;
  chartsColor$: Observable<string>;
  chartsType$: Observable<string>;

  constructor(private readonly store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(getData());
    this.charts$ = this.store.pipe(select(selectDataList));
    this.isLoading$ = this.store.pipe(select(selectDataIsLoading));

    this.chartsAmount$ = this.store.pipe(select(selectChartsAmount));
    this.chartsColor$ = this.store.pipe(select(selectChartsColor));
    this.chartsType$ = this.store.pipe(select(selectChartsType));
  }
}
