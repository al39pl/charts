import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  chartSettingsChangeAmount,
  chartSettingsChangeColor,
  chartSettingsChangeType,
} from '../../../store/сharts-settings/сharts-settings.actions';

@Component({
  selector: 'chart-top-bar',
  templateUrl: './chart-bar.component.html',
  styleUrl: './chart-bar.component.css',
})
export class ChartBarComponent {
  constructor(private readonly store: Store) {}
  onChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    switch (target.name) {
      case 'chart_amount':
        this.store.dispatch(
          chartSettingsChangeAmount({ chartsAmount: Number(target.value) })
        );
        break;
      case 'chart_color':
        this.store.dispatch(
          chartSettingsChangeColor({ chartsColor: target.value })
        );
        break;
      case 'chart_type':
        this.store.dispatch(
          chartSettingsChangeType({ chartsType: target.value })
        );
        break;
    }
  }
}
