import { createFeature, combineReducers } from '@ngrx/store';

import { graphNodesFeature, IGraphNodesFeatureState } from './graph-nodes.feature';
import { graphLinksFeature, IGraphLinksFeatureState } from './graph-links.feature';
import { graphTableOptionsFeature, IGraphTableOptionsFeatureState } from './graph-table-options.feature';

export interface IGraphTableFeatureState {
  [graphNodesFeature.name]: IGraphNodesFeatureState;
  [graphLinksFeature.name]: IGraphLinksFeatureState;
  [graphTableOptionsFeature.name]: IGraphTableOptionsFeatureState;
}

export const graphTableFeature = createFeature({
  name: '[section]:graph-table',
  reducer: combineReducers({
    [graphNodesFeature.name]: graphNodesFeature.reducer,
    [graphLinksFeature.name]: graphLinksFeature.reducer,
    [graphTableOptionsFeature.name]: graphTableOptionsFeature.reducer,
  }),
});
