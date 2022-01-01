import { createFeature, createReducer, on } from '@ngrx/store';

import { IGraphLink } from '../models';

import * as GraphTableActions from './graph-table.actions';

export interface IGraphLinksFeatureState {
  links: IGraphLink[];
}

const initialState: IGraphLinksFeatureState = {
  links: [],
};

export const graphLinksFeature = createFeature({
  name: 'links',
  reducer: createReducer(
    initialState,
    on(
      GraphTableActions.setGraphLinks,
      (state, action) => ({ ...state, links: action.links })
    )
  )
});
