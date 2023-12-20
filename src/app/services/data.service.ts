import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChartData, Charts } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private randomItems = 10;
  private randomDate = 10;
  private charts: Charts[] = [
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

  generateRandomDates(): Date[] {
    const dates = [];
    const initialDate = new Date(2000, 0, 1);
    for (let i = 0; i < this.randomDate; i++) {
      dates.push(
        new Date(
          initialDate.getTime() +
            Math.random() * (new Date().getTime() - initialDate.getTime())
        )
      );
    }
    return dates.sort((a, b) => a.getTime() - b.getTime());
  }

  getData(): Observable<Charts[]> {
    const randomDates = this.generateRandomDates();
    this.charts.forEach((ch: Charts) => {
      for (let i = 0; i < this.randomItems; i++) {
        ch.data.push({
          value: (Math.random() * 100).toFixed(3),
          date: randomDates[i],
        });
      }
    });

    return of(this.charts);
  }
}
