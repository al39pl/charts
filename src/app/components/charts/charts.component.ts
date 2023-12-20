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

@Component({
  selector: 'charts-container',
  templateUrl: './charts.component.html',
})
export class ChartsContainerComponent implements OnInit {
  charts$: Observable<Charts[]>;
  isLoading$: Observable<boolean>;

  constructor(private readonly store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(getData());
    this.charts$ = this.store.pipe(select(selectDataList));

    this.charts$.subscribe((e) => console.log(e));
    this.isLoading$ = this.store.pipe(select(selectDataIsLoading));
  }

  charts: any[] = [
    {
      title: 'Chart the I',
      data: [],
    },
    {
      title: 'Chart the II',
      data: [],
    },
    {
      title: 'Chart the Uncharted',
      data: [],
    },
    {
      title: 'Chart, Just Chart',
      data: [],
    },
  ];
}
