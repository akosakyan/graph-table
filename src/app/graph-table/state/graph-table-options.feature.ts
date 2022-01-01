import { createFeature, createReducer, on } from '@ngrx/store';

import { ISort } from '../models';

import * as GraphTableActions from './graph-table.actions';

export interface IGraphTableOptionsFeatureState {
  sort: ISort;
  filter: { searchText: string; };
}

const initialState: IGraphTableOptionsFeatureState = {
  sort: { direction: null, active: null },
  filter: { searchText: '' },
};

export const graphTableOptionsFeature = createFeature({
  name: 'options',
  reducer: createReducer(
    initialState,
    on(
      GraphTableActions.sortGraphLinks,
      (state, { direction, active }) => ({
        ...state,
        sort: (!!direction && !!active)
          ? { direction, active }
          : initialState.sort
      })
    ),
    on(
      GraphTableActions.filterGraphLinks,
      (state, action) => ({
        ...state,
        filter: { searchText: action.searchText }
      })
    )
  )
});
