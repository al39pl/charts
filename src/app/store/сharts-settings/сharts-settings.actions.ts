import { createAction, props } from '@ngrx/store';

const prefix = '[Charts settings]';

export const getData = createAction(`${prefix} Change amount`);

export const chartSettingsChangeAmount = createAction(
  `${prefix} Change amount`,
  props<{
    chartsAmount: number;
  }>()
);

export const chartSettingsChangeColor = createAction(
  `${prefix} Change color`,
  props<{
    chartsColor: string;
  }>()
);

export const chartSettingsChangeType = createAction(
  `${prefix} Change type`,
  props<{
    chartsType: string;
  }>()
);
