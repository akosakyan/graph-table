import { createSelector } from '@ngrx/store';

import { createGraphTableViewData, sortGraphTableViewData, filterGraphTableViewData } from '../utilities';

import { graphTableFeature } from './graph-table.feature';

export const selectFilter = createSelector(
  graphTableFeature.selectOptions,
  ({ filter }) => filter.searchText,
);

export const selectSort = createSelector(
  graphTableFeature.selectOptions,
  ({ sort }) => sort,
);

export const selectLinks = createSelector(
  graphTableFeature.selectLinks,
  ({ links }) => links,
);

export const selectNodeEntityMap = createSelector(
  graphTableFeature.selectNodes,
  ({ entities }) => entities,
);


/**
 * Create composite selectors
 * please note selectors composition order is significant for performance
 * data -> sort data -> filter data -> paginate data
 * */
export const selectGraphTableData = createSelector(
  selectLinks,
  selectNodeEntityMap,
  createGraphTableViewData,
);

export const selectGraphTableDataFiltered = createSelector(
  selectGraphTableData,
  selectFilter,
  filterGraphTableViewData,
);

export const selectGraphTableDataSorted = createSelector(
  selectGraphTableDataFiltered,
  selectSort,
  sortGraphTableViewData,
);

export const selectGraphTableViewModel = selectGraphTableDataSorted;
