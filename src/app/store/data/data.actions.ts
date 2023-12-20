import { createAction, props } from '@ngrx/store';
import { Charts } from '../../models/data.model';
// Charts
const prefix = '[Data]';

export const getData = createAction(`${prefix} Get data`);

export const createBookSuccess = createAction(
  `${getData.type} Success`,
  props<{
    data: Charts[];
    isLoading: false;
  }>()
);
