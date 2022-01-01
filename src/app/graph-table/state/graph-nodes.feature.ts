import { createFeature, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { IGraphNode } from '../models';

import * as GraphTableActions from './graph-table.actions';

export interface IGraphNodesFeatureState extends EntityState<IGraphNode> {}

const graphNodesEntityAdapter = createEntityAdapter<IGraphNode>({
  selectId: (entity) => entity.userId,
});

export const graphNodesFeature = createFeature({
  name: 'nodes',
  reducer: createReducer(
    graphNodesEntityAdapter.getInitialState(),
    on(
      GraphTableActions.setGraphNodes,
      (state, action) => graphNodesEntityAdapter.setAll(action.nodes, state)
    ),
  )
});
