import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataState } from '../../models/data.model';

export const selectDataState = createFeatureSelector<DataState>('data');
export const selectDataList = createSelector(
  selectDataState,
  (state) => state.data
);
export const selectDataIsLoading = createSelector(
  selectDataState,
  (state) => state.isLoading
);
