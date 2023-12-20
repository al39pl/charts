import { Action, createReducer, on } from '@ngrx/store';
import {
  chartSettingsChangeAmount,
  chartSettingsChangeColor,
  chartSettingsChangeType,
} from './сharts-settings.actions';
import { ChartsSettingsState } from '../../models/chart-settings.model';

export const initialState: ChartsSettingsState = {
  chartsAmount: 4,
  chartsColor: '#e5c308',
  chartsType: 'line',
};

const reducer = createReducer<ChartsSettingsState>(
  initialState,
  on(chartSettingsChangeAmount, (state, { chartsAmount }) => {
    return {
      ...state,
      chartsAmount,
    };
  }),
  on(chartSettingsChangeColor, (state, { chartsColor }) => {
    return {
      ...state,
      chartsColor,
    };
  }),
  on(chartSettingsChangeType, (state, { chartsType }) => {
    return {
      ...state,
      chartsType,
    };
  })
);

export function chartSettingsReducer(
  state = initialState,
  actions: Action
): ChartsSettingsState {
  return reducer(state, actions);
}
