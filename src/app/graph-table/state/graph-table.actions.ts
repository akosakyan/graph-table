import { createAction, props } from '@ngrx/store';

import { IGraphNode, IGraphLink, ISort } from '../models';

export const loadGraphTableData = createAction(
  '[Graph-Table]: Load Graph Table Data',
);
export const loadGraphTableDataSuccess = createAction(
  '[Graph-Table]: Load Graph Table Data Success',
  props<{ data: Array<IGraphNode | IGraphLink> }>(),
);
export const loadGraphTableDataFailure = createAction(
  '[Graph-Table]: Load Graph Table Data Failure',
  props<{ error: Error }>(),
);

export const setGraphNodes = createAction(
  '[Graph-Table]: Set Graph Nodes',
  props<{ nodes: IGraphNode[] }>()
);

export const setGraphLinks = createAction(
  '[Graph-Table]: Set Graph Links',
  props<{ links: IGraphLink[] }>(),
);

export const sortGraphLinks = createAction(
  '[Graph-Table]: Sort Graph Links',
  props<ISort>(),
);

export const filterGraphLinks = createAction(
  '[Graph-Table]: Filter Graph Links',
  props<{ searchText: string }>(),
);
