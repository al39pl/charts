import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChartsSettingsState } from '../../models/chart-settings.model';

export const selectChartSettingsState =
  createFeatureSelector<ChartsSettingsState>('chartSettings');
export const selectChartsAmount = createSelector(
  selectChartSettingsState,
  (state) => state.chartsAmount
);
export const selectChartsColor = createSelector(
  selectChartSettingsState,
  (state) => state.chartsColor
);
export const selectChartsType = createSelector(
  selectChartSettingsState,
  (state) => state.chartsType
);
