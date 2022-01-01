import { Component, OnInit } from '@angular/core';

import { ISort } from '../../models';
import { GraphTableFacade } from '../../state';

@Component({
  selector: 'app-graph-table-container',
  template: `
    <div>
        <app-graph-table-filters [filter]="filter$ | async" (filterChange)="onFilterChange($event)">
        </app-graph-table-filters>
        
        <app-graph-table [data]="graphTableViewModel$ | async" (sortChange)="onSortChange($event)">
        </app-graph-table>
    </div>
  `,
  styles: [
    `
      app-graph-table {
        margin-top: 20px;
      }
    `
  ]
})
export class GraphTableContainerComponent implements OnInit {

  graphTableViewModel$ = this.graphTableFacade.graphTableViewModel$;
  filter$ = this.graphTableFacade.filter$;
  sort$ = this.graphTableFacade.sort$;

  constructor(private graphTableFacade: GraphTableFacade) { }

  ngOnInit(): void {
    this.graphTableFacade.loadData();
  }

  onFilterChange(filter: string): void {
    this.graphTableFacade.filter(filter);
  }

  onSortChange(sort: ISort) {
    this.graphTableFacade.sort(sort);
  }

}
