import { Action, createReducer, on } from '@ngrx/store';
import { DataState } from '../../models/data.model';
import { createBookSuccess, getData } from './data.actions';

export const initialDataState: DataState = {
  data: [],
  isLoading: false,
};

const reducer = createReducer<DataState>(
  initialDataState,
  on(getData, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(createBookSuccess, (state, { data }) => {
    return {
      ...state,
      data,
      isLoading: false,
    };
  })
);

export function dataReducer(
  state = initialDataState,
  actions: Action
): DataState {
  return reducer(state, actions);
}
