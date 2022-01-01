import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ISort } from '../models';

import { IGraphTableFeatureState } from './graph-table.feature';
import * as GraphTableActions from './graph-table.actions';
import * as GraphTableSelectors from './graph-table.selectors';

/**
 * Implement Facade pattern which encapsulates store usage in it
 * */
@Injectable({ providedIn: 'root' })
export class GraphTableFacade {

  readonly graphTableViewModel$ = this.store.select(GraphTableSelectors.selectGraphTableViewModel);

  readonly filter$ = this.store.select(GraphTableSelectors.selectFilter);

  readonly sort$ = this.store.select(GraphTableSelectors.selectSort);

  constructor(private store: Store<IGraphTableFeatureState>) {}

  loadData(): void {
    this.store.dispatch(GraphTableActions.loadGraphTableData());
  }

  filter(searchText: string): void {
    this.store.dispatch(GraphTableActions.filterGraphLinks({ searchText }));
  }

  sort(sort: ISort): void {
    this.store.dispatch(GraphTableActions.sortGraphLinks(sort));
  }

}
