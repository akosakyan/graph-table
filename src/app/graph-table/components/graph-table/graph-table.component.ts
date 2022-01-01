import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Sort} from '@angular/material/sort';

import { IGraphLinkViewModel, ISort, SortDirection } from '../../models';

@Component({
  selector: 'app-graph-table',
  template: `
    <div class="mat-elevation-z2">
      <table 
        mat-table 
        matSort
        [dataSource]="data"
        (matSortChange)="onSortChange($event)"
      >

        <!-- Index Column -->
        <ng-container matColumnDef="index">
          <th mat-header-cell *matHeaderCellDef> Index </th>
          <td mat-cell *matCellDef="let index = index"> {{ index + 1 }} </td>
        </ng-container>

        <!-- Name 1 Column -->
        <ng-container matColumnDef="name1">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name 1 </th>
          <td mat-cell *matCellDef="let row"> {{ row.name1 }} </td>
        </ng-container>

        <!-- Name 2 Column -->
        <ng-container matColumnDef="name2">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name 2 </th>
          <td mat-cell *matCellDef="let row"> {{ row.name2 }} </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;

        table {
          width: 100%;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphTableComponent implements OnInit {

  private _dataSource: Array<IGraphLinkViewModel>;
  @Input()
  set data(data: Array<IGraphLinkViewModel>) {
    if (Array.isArray(data)) {
      this._dataSource = data;
    }
  }
  get data() {
    return this._dataSource;
  }

  @Output() sortChange = new EventEmitter<ISort>();

  displayedColumns: string[] = ['index', 'name1', 'name2'];

  constructor() { }

  ngOnInit(): void {}

  onSortChange({ direction, active }: Sort): void {
    let dir: SortDirection;

    if (direction === 'asc') {
      dir = SortDirection.ASC;
    }
    else if (direction === 'desc') {
      dir = SortDirection.DESC;
    }
    else {
      dir = null;
    }

    this.sortChange.emit({ direction: dir, active: active as any });
  }
}
